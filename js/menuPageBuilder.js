var menuPageBuilder = {

    buildMenu: function() {
        var menuData = storageGet('menuHierarchyList'); //window.menuHierarchyList_v2;
        // console.log('menuData:', menuData);
        this.buf = '';
        var vendor = storageGet('currentVendor');
        //this.add('<link href="menuPage.css" rel="stylesheet" type="text/css" />');
        this.add('<ul id="menuPage_v2_menuList" class="menu-heading-list menuPage_menuList">');
        for (var i = 0; i < menuData.length; i++) {
            var value = menuData[i];
            value.id = value._id;
            if (value.parent) {
                value.parent_id = value.parent._id;
            }

            var attributes =
                this.attr('item_id', value._id) +
                this.attr('opened', value.opened ? true : false) +
                this.attr('is_item', value.isItem);
            if (value.parent) {
                attributes += this.attr('parent_id', value.parent._id);
            }

            var styles = this.css('padding-left',  0 + 'px');//(value.level - 1) *
            var classes =
                this.classIf(value.wishlist, 'item-wishlist') +
                this.classIf(value.favorite, 'item-favorite') +
                this.classIf(value.isItem, 'menu-item', 'menu-heading');

            var headingName = '';
            if (value.level === 1 && vendor.businessName) {
                headingName = vendor.businessName + ' Menu';
            } else {
                headingName = value.heading;
            }

            if (value.opened) {
                headingName = ' <span style="font-size:19px">- &nbsp;</span> ' + headingName;
                classes += ' open';
            } else {
                if (value.hasChildren) {
                    headingName = ' <span style="font-size:17px">+ &nbsp;</span> ' + headingName;
                }
            }
            
            if (!value.visible) {
                styles += this.css('display', 'none');
            }
            styles += this.css('padding', '5px 15px');
           // debugger;
        //    console.log();
        //  if (!value.hasChildren) {
            styles += this.css('background-color', 'transparent !important');
            styles += this.css('border-radius', '5px !important');
            styles += this.css('border-color', 'white !important');
            styles += this.css('border-width', '2px !important');
            styles += this.css('margin', '3px !important');
// }

    // padding-left: 0px;
    // padding: 5px 15px;
    // background-color: transparent !important;
    // border-radius: 5px;
    /* margin: 10px; */
    // border-color: white;
    // border-width: 2px;
            var description = value.description || '';

            this.add(
                '<li name="headingItem" ' + attributes +
                ' class=\"menuPage_headingItem ui-btn ui-btn-icon-right ui-icon-carat-r' + classes + '\"' +
                ' style=\"' + styles + '\"' +
                ' onclick="onClickMenuItem(this, null, true)"' +
                '>' +

                '<div name="menuHeadingName" class="labelMenuHeading menuPage_menuHeadingName">' +
                headingName +
                '</div>' +

                '<div class="labelMenuDescription menuPage_menuHeadingDescription">' +
                description +
                '</div>' +

                this.itemMarkup(value) +

                '</li>');
        }
        this.add('</ul>');
        var menu_div = document.getElementById('menuPage_v2_menuHierarchy_div');
        menu_div.innerHTML = this.buf;
        
        if (window.menuTopOffset) {
          // PM-416: When returning to `menuPage_v2` screen we scroll to `menuTopOffset`.
          $.mobile.silentScroll(menuTopOffset);
        }
        
        console.log('menuData.length: ',menuData.length);
        if (menuData.length<2) {
            
            // PM-588: Restaurant listed but not yet onboarded display msg update
            var prefsChecked = $("input[name=pref-value]")[0].checked === true;
            var zeroItemsPopupLabel = $('#menuPage_v2_zeroItemsPopupLabel');
            if (prefsChecked) {
                zeroItemsPopupLabel.html("oh no! nothing on the menu is marked to meet your preferences. turn off the preference toggle to see all menu items.");
            } else {
                zeroItemsPopupLabel.html("you’re a step ahead of us! we’re working on onboarding this menu. please check back in a few.");
            }
            
            Apperyio('zeroItemsPopup').popup('open');
        }
        
        $('.menuPage_selectItemButton').click(function(ev) {
            menuPageBuilder.onClickSelect(ev);
        });
    },

    attr: function(name, value) {
        return value ? ' ' + name + '=\"' + value + '\" ' : '';
    },

    css: function(name, value) {
        return value ? name + ':' + value + ';' : '';
    },

    classIf: function(value, name, nameElse) {
        return value ? ' ' + name : (nameElse || '');
    },

    add: function(markup) {
        this.buf += markup;
    },

    itemMarkup: function(item) {
        if (!item.isItem) {
            return '';
        }
        var price = item.price ? item.price.toFixed(2) : '';
        var buttons = '';
        if (item.isHidden) {
            buttons =
                //<!-- unavailableLabel -->
                '<div name="unavailableLabel" class="labelUnavailable menuPage_unavailableLabel">' +
                'Sorry, not available today' +
                '</div>';
        } else {
            buttons =
                //<!-- selectItemButton -->
                '<a name="selectItemButton" style=" background: white; font-weight: 300 !important; color: #404040;' + 
                'font-family: \'Roboto\', sans-serif; font-size: 13px; display:inline-block;"' +
                ' href="#" onclick="menuPageBuilder.onClickSelect(this, event)">' +
                'Select' +
                '</a>';

                //<!-- addWishListButton -->
                //'<a name="addWishListButton" class="wishlist-btn menuPage_addWishListButton">' +
                //'Add to wish list' +
                //'</a>';
        }
        
        var markup = 
            '<div style="text-align: -webkit-left; margin-top: 6px; margin-bottom: 15px;" class="menu-select-button-layout">' +
            buttons;
        
        if (price !== '') {
            markup += '<div style="display:inline-block; color:#fff;vertical-align: top; padding-top: 9px; margin-left: 5px;' +
               'font-family: \'Roboto\', sans-serif; font-weight: 300;font-size: 16px;">' +
            '$' +
            '</div>' +
            '<div name="priceAmountLabel"  style="display:inline-block; color:#fff;vertical-align: top; padding-top: 9px; margin-left: 3px;' +
               'font-family: \'Roboto\', sans-serif; font-weight: 300;font-size: 16px;">' +
            price +
            '</div>';
        }
        markup += '</div>';
        
        
        // var markup =
        //     '<table id="menuPage_priceRatingGrid" class="menuPage_priceRatingGrid" cellpadding=0 cellspacing=0>' +
        //     '<col style="width:77px;" />' +
        //     '<col style="width:auto;" />' +
        //     '<tr class="menuPage_priceRatingGrid_row_0">' +

        //     //<!-- priceCell -->
        //     '<td class="menuPage_priceCell" colspan=1 rowspan=1>' +
        //     '<div class="cell-wrapper">' +

        //     //<!-- priceGrid -->
        //     '<div class="menuPage_priceGrid_wrapper">' +
        //     '<table class="menuPage_priceGrid" cellpadding=0 cellspacing=0>' +
        //     '<col style="width:14px;" />' +
        //     '<col style="width:auto;" />' +
        //     '<tr class="menuPage_priceGrid_row_0">' +

        //     //<!-- dollarSignCell -->
        //     '<td class="menuPage_dollarSignCell" colspan=1 rowspan=1>' +
        //     '<div class="cell-wrapper">' +

        //     //<!-- dollarSignLabel -->
        //     '<div class="labelMenuDollar  menuPage_dollarSignLabel">' +
        //     '$' +
        //     '</div>' +
        //     '</div>' +
        //     '</td>' +

        //     //<!-- priceAmountCell -->
        //     '<td class="menuPage_priceAmountCell" colspan=1 rowspan=1>' +
        //     '<div class="cell-wrapper">' +

        //     //<!-- priceAmountLabel -->
        //     '<div name="priceAmountLabel" class="labelMenuPrice  menuPage_priceAmountLabel">' +
        //     price +
        //     '</div>' +
        //     '</div>' +
        //     '</td>' +
        //     '</tr>' +
        //     '</table>' +
        //     '</div>' +
        //     '</div>' +
        //     '</td>' +

        //     //<!-- ratingCell -->
        //     '<td class="menuPage_ratingCell" colspan=1 rowspan=1 style="vertical-align: middle">' +
        //     '<div class="cell-wrapper">' +
        //     buttons +
        //     '</div>' +
        //     '</td>' +
        //     '</tr>' +
        //     '</table>';

        return markup;
    },

    onClickSelect: function(ev) {
        var em = ev.target;
        //console.log('[onClickSelect] em: ',em,', ev: ',ev);
        //ev.preventDefault();
        ev.stopPropagation();
        
        var currentItem = _.findWhere(
                storageGet('menuHierarchyList'), {
                    id: $(em).parents('li').attr('item_id')
                }
            ),
            currentOrder = storageGet('currentOrder') || Apperyio.getModel('currentOrder'),
            currentOrderItems = storageGet('currentOrderItems') || Apperyio.getModel('orderItems');

        if (currentOrder.vendor_id !== projectMdb1_settings.vendor_id) {
            currentOrderItems = [];
            currentOrder.vendor_id = projectMdb1_settings.vendor_id;
        }
        // 
        currentOrderItems.push({
            id: currentOrder.items.length + '',
            item_id: currentItem.id,
            item_name: currentItem.heading,
            price: currentItem.price
        });

        storageSet('currentOrder', currentOrder);
        storageSet('currentOrderItems', currentOrderItems);

        storageSet('currentItem', currentItem);
        menuPage_v2_createSelected_service.execute({});

        showPopupWithTimout('addToOrderPopup');

        //storageSet('selectedItem', $(this).parents('li')[0].item_id);
        //menuPage_orderItem_create_service.execute({});
        return false;
    }

    /*
        onClickMenuItem: function(scope) {
            var
                list = window.menuHierarchyList_v2,
                element = $(scope),
                visible = !element.prop('hidden'),
                clickedItem = _.find(list, {
                    _id: element.attr('item_id')
                }),
                text = element.find('[name=menuHeadingName]'),
                itemIndex = _.indexOf(list, clickedItem);

            clickedItem = list[itemIndex];
            this._list = list;
            this._em = element;

            if (clickedItem.hasChildren) {
                if (!clickedItem.opened) {
                    clickedItem.opened = true;
                    var children = this.getChildren({
                        _id: element.attr('item_id')
                    }, list);
                    _.each(children, function(value) {

                        list[this.getItemIndex(list, {
                            _id: value._id
                        })].visible = visible;
                    });

                    var elems = element.parent().find('[parent_id=' + element.attr('item_id') + ']');
                    _.each(elems, function(val) {
                        var textEl = $(val).find('[name=menuHeadingName]');
                        if (textEl.text().substr(0, 2) === ' -') {
                            textEl.text(' + ' + textEl.text().substr(3));
                        }

                    });
                    element.parent().find('[parent_id=' + element.attr('item_id') + ']').show();
                    text.text(' - ' + text.text().substr(3));
                } else {
                    this.closeBranch(clickedItem);
                    text.text(' + ' + text.text().substr(3));
                }
                //storageSet('scrollTo', element.offset().top - 50);
                storageSet('menuHierarchyList', list);

                $.mobile.silentScroll(element.offset().top - 50);

            } else {
                if (clickedItem.isItem) {
                    storageSet('selectedParentItem', clickedItem.parent_id);
                    storageSet('selectedItem', clickedItem._id);
                    editMode = true;
                    Apperyio.navigateTo('itemDetailsPage');
                } else {
                    storageSet('selectedParentItem', clickedItem._id);
                }
            }

        },

        closeBranch: function(item, element) {
            item.opened = false;
            var list = this._list;
            element.parent().find('[parent_id=' + item._id + ']').hide();
            for (var n = 0; n < list.length; n++) {
                if (list[n].parent_id === item._id) {
                    list[n].visible = false;
                    this.closeBranch(list[n], element);
                }
            }
        },
    
        getItemIndex: function(array, item) {
            var idx = -1;
            _.find(array, function(voteItem, voteIdx) {
                if (voteItem._id == item._id) {
                    idx = voteIdx;
                    return true;
                }
            });
            return idx;
        },
    
        getChildren: function(item, p_list) {
            var list = p_list || storageGet('menuHierarchyList');
            return _.where(list, {
                parent_id: item._id
            });
        },
        */

}