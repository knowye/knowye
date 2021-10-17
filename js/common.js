var editMode = true,
    hideBackButton = false,
    userName = '',
    preview = false,
    customerMode = false,
    currentItem = {},
    currentOrder = null,
    hierarchy = [],
    hierarchyList = [],
    draggingInProcess = false,
    qrScaner = null,
    gCtx = null,
    gUM = null,
    gCanvas = null,
    isPhone = false,
    isApple = false,
    menuHeadingCollpsed = false,
    imageData = null,
    isGuest = false,
    wasGuest = false,
    imageHasBeenChanged = false,
    currentOrderItem,
    MAX_RESTRAUNTS_TO_SHOW = 8;

var
    favoriteConfirmPopupTime,
    favoriveExistsPopupTime,
    itemIsInOrderPopupTime,
    addToOrderPopupTime,
    wishlistConfirmPopupTime,
    wishlistContainsItemTime,
    confirmCopyPopupTime,
    swipePopupTime = 2000;

function goBack() {
    if (isApple) {
        navigator.app.backHistory();
    } else {
        window.history.back();
    }
}


function proceedAsGuest(loginService, element, list, isGuestParam) {
        if (isGuestParam == undefined) {isGuestParam = true;}
        /* Navigate to vendor's page */
        var idx_attr = $(element).attr('_idx');
        var idx = Number(idx_attr.substring(1));
        
        if (!isGuestParam) {
            var currentVendor = list[idx];
            currentVendor.id = currentVendor._id;
            storageSet('currentVendor', currentVendor);
            storageSet('vendorId', currentVendor._id);
            Apperyio.navigateTo('proprietorPage');
            return;
        }
        
        isGuest = true;
        customerMode = true;
        loginService.execute({
            data: {
                username: 'guest',
                password: 'guest'
            },
            success: function(response) {
            //   debugger;
               isGuest = true;
                /* Navigate to vendor's page */
                storageSet('sessionToken', response.sessionToken);
                storageSet('userName', 'guest');
                projectMdb1_settings.session_token = storageGet('sessionToken');
                var currentVendor = list[idx];
                // var currentVendor = window.navigatePage_findNearestVendors[idx];
                currentVendor.id = currentVendor._id;
                storageSet('currentVendor', currentVendor);
                storageSet('vendorId', currentVendor._id);
                Apperyio.navigateTo('proprietorPage');
            }
        });
}

function showPopupWithTimout(popupName, timeout) {
    var popup = Apperyio(popupName);
    setTimeout(function() {
        console.log('--- Closing popup: ' + popupName);
        popup.popup('close');
    }, (timeout || 3000));
    popup.popup('open');
}

function showQuickMessagePopup() {
    var quickMessageText = storageGet('quickMessageText');
    if (!quickMessageText) {
        return;
    }
    var timeout = 3000;
    var popup = Apperyio('quickMessagePopup');
    Apperyio('quickMessageLabel').html(quickMessageText);
    storageSet('quickMessageText'); // clear message
    setTimeout(function() {
        popup.popup('close');
    }, timeout);
    popup.popup('open');
}

function copy(text) {
    cordova.plugins.clipboard.copy(text, function() {
        showPopupWithTimout('confirmCopyPopup');
    }, function(e) {
        alert(e);
    });

}

function log(message) {
    console.log(message);
}

function storageGet(itemName) {
    return Apperyio.storage[itemName].get();
}

function storageSet(itemName, value) {
    Apperyio.storage[itemName].set(value);
}

function urlParam(name, url) {
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url || window.location.href);
    return results ? results[1] : 0;
}

function highlightRateItem(item, rate) {
    storageSet('tempNumber', rate);
    Apperyio('tasteRatingChoices').find('a').removeClass('selected-rate');
    $(item).addClass('selected-rate');
}

function getItemIndex(array, item) {
    var idx = -1;
    _.find(array, function(voteItem, voteIdx) {
        if (voteItem.id == item.id) {
            idx = voteIdx;
            return true;
        }
    });

    return idx;
}

function getItemFromHierarchy(id, p_list) {

    var list = p_list || storageGet('menuHierarchyList');

    return _.findWhere(list, {
        id: id
    });

}

function getItemItemsList(id, p_list) {

    var list = p_list || storageGet('menuItemsList');

    return _.findWhere(list, {
        id: id
    });

}

function getChildren(item, p_list) {
    var list = p_list || storageGet('menuHierarchyList');
    return _.where(list, {
        parent_id: item.id
    });
}

function getAllChildren(list, item) {

    var children = [];

    _getChildren(item);

    function _getChildren(currentItem) {
        children.push(currentItem);
        _.each(_.filter(list, {
            parent_id: currentItem.id
        }), function(value) {
            getChildren(value);
        });
    }

    return children;

}

function getItemStatus(value) {
    if (customerMode) {
        return '';
    } else {
        if (value) {
            return 'UNAVAILABLE';
        } else {
            return '';
        }
    }
}

function initPage() {
    /*
     document.addEventListener('deviceready', function(){
     //enabling zoom control
     cordova.plugins.ZoomControl.ZoomControl("true");
     // enabling built in zoom control
     cordova.plugins.ZoomControl.setBuiltInZoomControls("true");
     // enabling display zoom control
     cordova.plugins.ZoomControl.setDisplayZoomControls("true");

     }, function(){
     alert('error deviceready');
     });
     */

    /*
     if(isGuest)
     {
     Apperyio("navigateButton").buttonMarkup({ icon: "info" });
     }
     */
}

function navigateRB() {
    if (customerMode) {
        Apperyio.navigateTo('navigatePage', {
            transition: 'slidedown'
        });
    } else {
        Apperyio.navigateTo('menuManagementPage', {
            transition: 'slidedown'
        });
    }
}

function passwardMatchingValidate(p_passField1, p_passField2, p_label) {
    var passField1 = p_passField1 || 'passwordCreateCustomer',
        passField2 = p_passField2 || 'confirmPasswordCustomer',
        label = p_label || 'passwordMismatchLabel',
        errorLabel = Apperyio(label);

    if (Apperyio(passField1).val() !== Apperyio(passField2).val()) {
        errorLabel.text('passwords don\'t match');
        errorLabel.show();
        return false;
    }
    errorLabel.hide();
    return true;
}

function showErrorMessage(message, label) {
    var errorLabel = label || Apperyio('errorLabel');
    errorLabel.text(message);
    errorLabel.show();
}

function hideErrorMessage(label) {
    var errorLabel = label || Appery('errorLabel');
    errorLabel.hide();
}

function isStrongPassword(text, confirm, p_errorLabel) {
    errorLabel = p_errorLabel || Apperyio('errorLabel');
    
    if (!(/\d/.test(text))) {
        showErrorMessage('password should contain one digit', errorLabel);
        return false;
    }
    if (!(/[a-z]/.test(text))) {
        showErrorMessage('password should contain one lowercase letter', errorLabel);
        return false;
    }
    
    if (!(/[A-Z]/.test(text))) {
        showErrorMessage('password should contain one uppercase letter', errorLabel);
        return false;
    }
    
    if (!( /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(text))) {
        showErrorMessage('password should contain one special character', errorLabel);
        return false;
    }
    
    if (text.length <= 5) {
        showErrorMessage('password should be at least 6 characters long', errorLabel);
        return false;
    }
    if (text !== confirm){
        showErrorMessage('password and confirm password are not matching', errorLabel);
        return false;
    }
    errorLabel.hide();
    return true;
}

function verifyEmail(p_email, p_errorLabel) {
    var email = p_email || Appery('loginField').val(),
        errorLabel = p_errorLabel || Apperyio('errorLabel');

    // for debug
    //if(['guest','alex','cust', 'cust2', 'alex2', 'tcust1', 'tcust2', 'tcust3'].indexOf(email) >= 0)
    if (['guest'].indexOf(email) >= 0) {
        return true;
    }

    if (email.length <= 0) {
        showErrorMessage('email cannot be empty', errorLabel);
        return false;
    }

    if (!email) {
        showErrorMessage('please enter an email address', errorLabel);
        return false; //return user to fix email address
    }
      var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // var reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (reg.test(email) === false) {
        showErrorMessage('this does not appear to be a complete email address', errorLabel);
        return false;
    }
    errorLabel.hide();
    return true;
}

function updatePreferencies(pref, item) {
    var preferences = Apperyio.storage.preferences.get();
    if (!preferences[pref]) {
        preferences[pref] = {};
    }
    preferences[pref][$(item).find('input').val()] = !$(item).find('input').prop('checked');
    Apperyio.storage.preferences.set(preferences);
}


function collapseExpandAll() {
    var menuHierarchyList = storageGet('menuHierarchyList');
    menuHeadingCollpsed = !menuHeadingCollpsed;

    _.each(menuHierarchyList, function(value) {
        if (value.level > 1) {
            if (!value.isItem && value.hasChildren) {
                value.opened = menuHeadingCollpsed;
            }
            if (value.level > 2) {
                value.visible = menuHeadingCollpsed;
            }
        }
    });
    storageSet('menuHierarchyList', menuHierarchyList);
}

function getNewOrder(parentId) {
    var list = getChildren({
        id: parentId
    });
    if (!list.length) {
        return 0;
    }
    return list[list.length - 1].order + 1;
}

function convertTime24to12(time24) {
    if (!/^\s*\d+\:\d+\s*$/.test(time24)) {
        console.log('[WARN] convertTime24to12 invalid format: ' + time24);
        return time24;
    }
    var tmpArr = time24.split(':'),
        time12;
    if (+tmpArr[0] == 12) {
        time12 = tmpArr[0] + ':' + tmpArr[1] + ' PM';
    } else {
        if (+tmpArr[0] == 0) {
            time12 = '12:' + tmpArr[1] + ' AM';
        } else {
            if (+tmpArr[0] > 12) {
                time12 = (+tmpArr[0] - 12) + ':' + tmpArr[1] + ' PM';
            } else {
                time12 = (+tmpArr[0]) + ':' + tmpArr[1] + ' AM';
            }
        }
    }
    return time12;
}

/**
 * @description: creats the menuHierarchyList and menu hierarchy
 * @returns: {Object} hierarchy
 */
function makeHierarchy(openAll, excludedHeadingId) {
    console.log('=== makeHierarchy(' + openAll + ')');
    var menu = storageGet('menuHierarchyList'),
        levelNo = 0;

    hierarchy = [];
    hierarchyList = [];
    headingSelectList = [];

    addChildren(hierarchy);

    //storageSet(!withItems ? 'menuHierarchyListPreview' : 'menuHierarchyList', hierarchyList);
    //storageSet('menuHierarchyList', hierarchyList);
    storageSet('headingSelectList', headingSelectList);

    return hierarchy;

    function addChildren(item, level, parent) {

        var list = _.filter(menu, function(val) {
                return (val.parent_id == level && val.id!=excludedHeadingId ? true : false);
            });
            
        var items = storageGet('menuItemsList');

        list = list.concat(_.where(items, {
            parent_id: level
        }));

        list.sort(function(a, b) {
            return a.order < b.order ? -1 : 1;
        });

        levelNo++;
        _.each(list, function(value) {
            if (parent) {
                parent.hasCildren = true;
            }

            value.level = levelNo;

            value.visible = (levelNo < 3 ? true : false) ||
                (openAll && ((value.isItem && !value.isHidden) || !customerMode || !preview));

            value.opened = (levelNo === 1 ? true : false) || (openAll && !value.isItem);

            value.children = [];

            if (!value.isItem) {
                headingSelectList.push(value);
            }

            //hierarchyList.push(value); // before children for list
            addChildren(value.children, value.id, value);
            //item.push(value); // after children for object

        });

        if (parent && openAll && !parent.children.length) {
            parent.opened = false;
        }
        levelNo--;
    }
}

function onClickMenuItem(scope, service, p_preview) {
    console.log('--- onClickMenuItem');
    var
        list = storageGet('menuHierarchyList'),
        listState = storageGet('menuHierarchyList_state'),
        element = $(scope),
        visible = !element.prop('hidden'),
        clickedItem = _.find(list, {
            id: element.attr('item_id')
        }),
        text = element.find('[name=menuHeadingName]'),
        itemIndex = _.indexOf(list, clickedItem);

    clickedItem = list[itemIndex];

    if (clickedItem.hasChildren) {
        if (!clickedItem.opened) {
            clickedItem.opened = true;
            listState.state[clickedItem.id] = {opened:true}
            storageSet('menuHierarchyList_state', listState);
            var children = getChildren({
                id: element.attr('item_id')
            }, list);
            _.each(children, function(value) {

                list[getItemIndex(list, {
                    id: value.id
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

            /*
             for(var i=0; i<list.length; i++)
             {
             if(list[i].parent_id === element.attr('item_id'))
             {
             //log(list[i]);
             list[i].visible = visible;
             }

             //if(list[i].parent_id === element.attr('item_id') && (!list[i].isHidden || (!customerMode && !preview)))
             //{
             //list[i].visible = visible;
             //}

             }
             */
            //$(window).scrollTop(element.offset().top - 50);
        } else {
            closeBranch(clickedItem);
            text.text(' + ' + text.text().substr(3));
        }
        //storageSet('scrollTo', element.offset().top - 50);
        storageSet('menuHierarchyList', list);

        $.mobile.silentScroll(element.offset().top - 50);


        //storageSet(!fullHierarchy ? 'menuHierarchyListPreview' : 'menuHierarchyList', list);

        /*        if(service)
         {
         service.execute({});
         } else
         {
         genericMapService.execute({});
         }*/

    } else {
        if (clickedItem.isItem) {
            // PM-416: click on item stores `element.offset.top()` as `menuTopOffset`.'
            menuTopOffset = element.offset().top - 50; 
            
            storageSet('selectedParentItem', clickedItem.parent_id);
            storageSet('selectedItem', clickedItem.id);
            editMode = true;
            if (p_preview) {
                Apperyio.navigateTo('itemDetailsPage');
            } else {
                Apperyio.navigateTo('itemEditPage');
            }
        } else {
            storageSet('selectedParentItem', clickedItem.id);
        }
    }

    function closeBranch(item) {
        item.opened = false;
        listState.state[item.id] = {opened:false};
        storageSet('menuHierarchyList_state', listState);

        element.parent().find('[parent_id=' + item.id + ']').hide();
        for (var n = 0; n < list.length; n++) {
            if (list[n].parent_id === item.id) {
                list[n].visible = false;
                closeBranch(list[n]);
            }
        }
    }
}

var menuTopOffset = 0;

function mapMenuItem(value, element) {
    if (!value) {
        return [];
    }

    element.attr({
        'item_id': value.id,
        'parent_id': value.parent_id,
        'opened': value.opened,
        'is_item': value.isItem
    });
    element.css('padding-left', (value.level - 1) * 15 + 'px');    
    if (value.wishlist) {        
        element.addClass('item-wishlist');    
    } else     if (value.favorite) {        
        element.addClass('item-favorite');    
    }

    if (value.isItem) {
        element.addClass('menu-item');
    } else {
        element.addClass('menu-heading');
        element.addClass('ui-icon-none');
    }

    var vendor = storageGet('currentVendor'),
        menuHeadingNameElement = element.find('[name="menuHeadingName"]');
    if (value.level === 1 && vendor.businessName) {
        //element.find('[name="menuHeadingName"]').text(vendor.businessName + ' ' + value.heading);
        menuHeadingNameElement.text(vendor.businessName + ' Menu');
        //value.heading = vendor.businessName + ' ' + value.heading;
    } else {
        menuHeadingNameElement.text(value.heading);
    }

    if (value.opened) {
        menuHeadingNameElement.text(' - ' + menuHeadingNameElement.text());
        element.addClass('open');
    } else {
        if (value.hasChildren) {
            menuHeadingNameElement.text(' + ' + menuHeadingNameElement.text());
        }
        element.removeClass('open');
    }
    return value;
}

function setSelectedMenuItem(scope, page) {
    var id = scope.parentElement.item_id;
    editMode = true;
    storageSet('selectedItem', id);
    currentItem = _.findWhere(Apperyio.storage.menuItemsList.get(), {
        id: id
    });
    storageSet('currentItem', currentItem);


    Apperyio.navigateTo(page || 'itemEditPage');
}

function setDefaultSelectedItem(elementName) {
    var list = storageGet('menuHierarchyList');
    if (list && list.length) {
        Apperyio(elementName).val(list[0].id).refresh();
    } else {
        Apperyio('categoryParentLabel').hide();
        Apperyio('headingParentSelect').parent().hide();
    }
}

function getNextMenuItemId(itemId) {
    var list = storageGet('menuHierarchyList'),
        idx = getItemIndex(list, {
            id: itemId
        }) + 1;

    for (; idx < list.length; idx++) {
        if (list[idx] && list[idx].isItem) {
            return list[idx].id;
        }
    }
    return itemId;

}

function getPrevMenuItemId(itemId) {
    var list = storageGet('menuHierarchyList'),
        idx = getItemIndex(list, {
            id: itemId
        }) - 1;

    for (; idx < list.length; idx--) {
        if (list[idx] && list[idx].isItem) {
            return list[idx].id;
        }
    }
    return itemId;

}

function addUpdateItem(item) {

    var list = storageGet('menuHierarchyList'),
        //oldParentId = storageGet('oldParentId'),
        processedItem = _.find(list, {
            id: item.id
        }),
        parentItem = _.find(list, {
            id: item.parent_id
        }),
        parentIndex = _.indexOf(list, parentItem);

    if (!list) {
        return;
    }

    if (processedItem) // update
    {

        for (var key in item) {
            if (item.hasOwnProperty(key)) {
                processedItem[key] = item[key];
            }
        }

        // copy multiselect preferences into original object
        processedItem.includePrefs = storageGet('itemPrefs');

        var processedItemIndex = _.indexOf(list, processedItem);
        list[processedItemIndex] = processedItem;

        /*       if(oldParentId !== item.parent_id) // remove old child
         {
         var oldParent = _.find(list, {id:item.parent_id}),
         oldParentIndex = _.indexOf(list, oldParent),
         child = _.find(oldParent.children, {id:item.parent_id}),
         childIndex = _.indexOf(oldParent.children, child);

         list[oldParentIndex].children.splice(childIndex, 0);

         }*/
    } else // create
    {
        //parentItem.children.push(item);
        list.splice(parentIndex + 1, 0, item);

        /*        var itemInChildren = _.indexOf(list, parentItem),
         itemInChildrenIndex = _.indexOf(parentItem.children, itemInChildren);

         parentItem.children.splice(itemInChildrenIndex, 0);*/
    }
    storageSet('menuHierarchyList', list);

}

function onHeadingDrop(event, ui, itemsListName) {
    //log(ui.item.attr('item_id') + ' TO ' + ui.item.prev().attr('item_id'));

    var
        sourceId = ui.item.attr('item_id'), // dropped item
        targetId = ui.item.prev().attr('item_id'), // previouce item
        nextId = ui.item.next().attr('item_id'); // next item

    if (!targetId) {
        return;
    }

    var lst = storageGet(itemsListName),
        sourceItem = _.findWhere(lst, {
            id: sourceId
        }),
        targetItem = _.findWhere(lst, {
            id: targetId
        }),
        nextItem = _.findWhere(lst, {
            id: nextId
        })
        //sourceIdx = getItemIndex(lst, sourceItem)
    ;

    if (sourceItem.parent_id !== targetId) // moved to new level
    {
        //if(nextItem && nextItem.parent_id && targetItem.parent_id !== nextItem.parent_id) // upper item is a heading
        //{
        //sourceItem.parent_id = nextItem.parent_id;
        //sourceItem.level = nextItem.level;
        //}
        //else
        if (!nextItem) {
            sourceItem.parent_id = lst[0].id;
            sourceItem.level = 2;
        } else if (sourceItem.isItem && !targetItem.isItem) {
            sourceItem.parent_id = targetItem.id;
            sourceItem.level = targetItem.level + 1;
        } else {
            sourceItem.parent_id = targetItem.parent_id;
            sourceItem.level = targetItem.level;
        }
    }
    // move items
    var sourceList = getAllChildren(lst, sourceItem);
    // remove items
    _.each(sourceList, function(val) {
        lst.splice(getItemIndex(lst, _.findWhere(lst, {
            id: val.id
        })), 1);
    });

    // insert items
    var targetIdx = getItemIndex(lst, targetItem);
    lst.splice.apply(lst, [targetIdx + 1, 0].concat(sourceList));

    // compose ids order
    var arr = _.filter(lst, {
        parent_id: sourceItem.parent_id
    });

    // update hierarchy list
    for (var n = 0; n < lst.length; n++) {
        if (lst[n].hasChildren) {
            if (lst[n].id === targetItem.id && sourceItem.isItem && !targetItem.isItem) {
                lst[n].opened = true;
            }

            if (!lst[n].hasChildren && lst[n].opened) {
                lst[n].opened = false;
            }
        }
    }
    /*
     for(var n=0; n<lst.length; n++)
     {
     if(lst[n].children)
     {
     for(var nn=0; nn < lst[n].children.length; nn++)
     {
     if(lst[n].children[nn].id === sourceItem.id)
     {
     lst[n].children.splice(nn,1);
     break;
     }

     }

     if(lst[n].id === targetItem.id && sourceItem.isItem && !targetItem.isItem)
     {
     lst[n].children.push(sourceItem);
     lst[n].opened = true;
     }

     if(!lst[n].children.length && lst[n].opened)
     {
     lst[n].opened = false;
     }
     }
     }*/

    //log('targetItem.id:' + targetItem.id + ' ' + 'sourceItem.id: ' + sourceItem.id);

    storageSet(itemsListName, lst);
    storageSet('currentItem', sourceItem);
    storageSet('arrayOfObjects', arr);

    genericMapService.execute({});
}

function updateTotals(order) {
    var currentOrder = storageGet('currentOrder') || Apperyio.getModel('currentOrder'),
        adjustedTotal = parseFloat(Apperyio('adjustedInput').val(), 10) || 0;

    /*
     var prices = _.pluck(storageGet('menuItemsList'), 'price');
     if(!prices.length)
     {
     return;
     }
     currentOrder.total = prices.reduce(function(previousValue, currentValue, index, array) {
     return (previousValue || 0) + (currentValue || 0);
     });
     */


    var items = storageGet('currentOrderItems') || [];
    /*
    if(!(items && items.length))
    {
        return;
    }
    */

    currentOrder.total = items.reduce(function(previousValue, currentValue, index, array) {
        return (previousValue || 0) + (currentValue.price || 0);
    }, 0);

    currentOrder.total = currentOrder.total || 0;

    adjustedTotal = adjustedTotal || currentOrder.total;


    //currentOrder.tax = storageGet('currentVendor').taxRate / currentOrder.total * 100;
    currentOrder.tax = adjustedTotal * storageGet('currentVendor').taxRate;

    // tip Popup
    var adjustedAmount = 0;
    Apperyio('orderPopupAmount').text(adjustedTotal.toFixed(2));
    if (Apperyio('tipTaxButton').find('input').is(':checked')) {
        adjustedAmount = adjustedTotal + currentOrder.tax;
    } else {
        adjustedAmount = adjustedTotal;
    }
    Apperyio('taxAdjusted').text(adjustedAmount.toFixed(2));

    var tips = 0,
        entry = Apperyio('tipEntry').val(),
        tipType = Apperyio('tipSelectButton').val();

    if (tipType === "amount") {
        tips = (entry ? parseFloat(entry, 10) : 0);

    } else if (tipType === "rate") {
        tips = (adjustedAmount / 100) * (entry ? parseInt(entry, 10) : 0);
    } else {
        tips = (adjustedAmount / 100) * parseInt(tipType, 10);
    }
    currentOrder.tip = tips;
    Apperyio('tipSelect').text(tips.toFixed(2));

    currentOrder.bill = adjustedTotal + currentOrder.tip + currentOrder.tax;

    Apperyio('orderTotal').text('$' + currentOrder.total.toFixed(2));
    Apperyio('orderTip').text('$' + currentOrder.tip.toFixed(2));
    Apperyio('orderTax').text('$' + currentOrder.tax.toFixed(2));
    Apperyio('orderBill').text('$' + currentOrder.bill.toFixed(2));

    var tipRate = (currentOrder.tip && adjustedAmount) ? (currentOrder.tip / adjustedAmount * 100) : 0;
    Apperyio('tipRateLabel').text(
        '( ' + tipRate.toFixed(0) + '% )'
    );
    // '( ' + Apperyio('tipSelectButton').find('[selected="selected"]').text().trim() + ' )'

    storageSet('currentOrder', currentOrder);

    splitBill();
}

function splitBill() {
    var bill = parseFloat(Apperyio('orderBill').text().substr(1), 10);
    var numberOfBills = parseInt(Apperyio('splitSelectButton').val(), 10);

    Apperyio('splitAmountLabel').text((bill / numberOfBills).toFixed(2));
}

function previewFile(e, callback) {
    var files = e.target.files || e.dataTransfer.files;
    var file = files[0];

    // display image in preview container
    if (file && file.type.indexOf("image") === 0) {
        var reader = new FileReader();
        reader.onload = function(event) {
            storageSet('imageDataBase64', event.target.result);
            storageSet('fileInfo', {
                fileName: null,
                originalFileName: null
            });

            if (callback && typeof callback === "function") {
                callback(event);
            }
        };
        reader.readAsDataURL(file);
    }
}

/* xorKey is used to bypass login screen if we have some credentials in local storage. */
var xorKey = {
    getKey: function() {
        return 17;
    },
    getName: function() {
        return 'project301868key';
    },
    getDelim: function() {
        return ' | ';
    },

    available: function() {
        var token = this.restore();
        if (!token) {
            return false;
        }
        var k = token.indexOf(this.getDelim());
        if (k < 0) {
            return false;
        }
        this.login = token.substring(0, k);
        this.password = token.substring(k + this.getDelim().length);
        return this.login.length > 0 && this.password.length > 0;
    },
    getLogin: function() {
        return this.login;
    },
    getPassword: function() {
        return this.password;
    },
    save: function(login, password) {
        var value = login + this.getDelim() + password;
        localStorage.setItem(this.getName(), btoa(this.encode(value)));
    },
    restore: function() {
        return this.decode(atob(localStorage.getItem(this.getName())));
    },
    remove: function() {
        localStorage.removeItem(this.getName());
    },
    encode: function(value) {
        var res = "";
        for (var i = 0; i < value.length; ++i) {
            res += String.fromCharCode(this.getKey() ^ value.charCodeAt(i));
        }
        return res;
    },
    decode: function(value) {
        var res = "";
        for (var i = 0; i < value.length; i++) {
            res += String.fromCharCode(this.getKey() ^ value.charCodeAt(i));
        }
        return res;
    }
};

/* Retrieving items from `selected` collection */
function querySelectedItems() {
    var userId = storageGet('userId');
    var vendorId = storageGet('currentVendor').id;
    return JSON.stringify({
        "$and": [{
            userID: {
                collName: "_users",
                _id: userId
            }
        }, {
            vendor_lk: {
                collName: "vendor",
                _id: vendorId
            }
        }, {
            current: {
                "$ne": false
            }
        }]
    });
}

/** 
    Selecting items for *selectionHistory* page.
    
    We use `$inQuery` for `itemID` here to sort out rows for which item ids currently do not exist.
 */
function querySelectionHistoryItems() {
    var userId = storageGet('userId');
    var vendorId = storageGet('currentVendor').id;
    return JSON.stringify({
        "$and": [{
            userID: {
                collName: "_users",
                _id: userId
            }
        }, {
            vendor_lk: {
                collName: "vendor",
                _id: vendorId
            }
        }, {
            itemID: {
                "$inQuery": {
                    _id: {
                        "$exists": true
                    }
                }
            }
        }, {
            current: false
        }]
    });
}

/* Create multi-selection dropdown to choose from `prefTypes` array
 * that contains list of user's menu preferences: vegan, kosher, halal, etc.
 * - `parentEm` is parent `<div>` to which selectmenu will be added
 * - `dropdownName` is the name of selectmenu to be created
 * - `varName` is the name of storage variable to store input/output.
 */
function buildMultiPrefsDropdown(parentEm, dropdownName, varName) {
    var curPrefs = storageGet(varName) || [];
    var header =
        '<select name="' + dropdownName + '" id="' + dropdownName + '" multiple="multiple" data-native-menu="false">' +
        '<option>Choose preferences</option>';
    var body = '';
    var prefTypes = storageGet('prefType');
    for (var i = 0; i < prefTypes.length; i++) {
        var name = prefTypes[i].name;
        var selected = curPrefs.indexOf(name) < 0 ? '' : ' selected="selected"';
        body += '<option value="' + name + '"' + selected + '>' + name + '</option>';
    }
    var footer =
        '</select>';

    parentEm.empty();
    parentEm.append(header + body + footer);
    $('#' + dropdownName).selectmenu().change(function() {
        var selected = $(this).val();
        storageSet(varName, selected);
    });
}

function buildMultiPrefsDropdownCreateAccount(parentEm, dropdownName, varName) {
    var curPrefs = storageGet(varName) || [];
    var header =
        '<select name="' + dropdownName + '" id="' + dropdownName + '" multiple="multiple" data-native-menu="false">' +
        '<option>Choose preferences</option>';
    var body = '';
    var prefTypes = storageGet('prefType');
    for (var i = 0; i < prefTypes.length; i++) {
        var name = prefTypes[i].name;
        var selected = curPrefs.indexOf(name) < 0 ? '' : ' selected="selected"';
        body += '<option value="' + name + '"' + selected + '>' + name + '</option>';
    }
    var footer =
        '</select>';

    parentEm.empty();
    parentEm.append(header + body + footer);
    $('#' + dropdownName).selectmenu().change(function() {
        var selected = $(this).val();
        storageSet(varName, selected);
    });
}

function performReverseGeoCode(lat, lng, callback) {
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=true&key=' + Settings.googleApiKey;
    $.get(url, function(data) {
        if (data.status == 'OK') {
            var postalCode = '';
            data.results.forEach(function(res, index) {
                res.address_components.forEach(function(address) {
                    address.types.forEach(function(t) {
                        if (t == "postal_code") {
                            postalCode = address.long_name;
                            return false;
                        }
                    });
                    if (postalCode !== "") {
                        return false;
                    }
                });
                if (postalCode !== "") {
                    return false;
                }
            });
                var resultant = {
                    postal: postalCode
                };
                callback(null, resultant);
        } else {
            callback('no address found', null);
        }
    })
    .fail(function(err) {
        callback(err, null);
    });
}

function dateFromDB(value) {
    return moment(value, 'YYYY-MM-DD HH:mm:ss.SSS').format('MM/DD/YYYY');
}

// Placeholder to be shown if there is no image
var NO_IMAGE_URL = '../img/loading.png'; //'../libs/apperyio/img/no-image.jpg';

/* `Save` button clicked on `operationsRestaurantPage`.
 */
function operationsRestaurantPage_saveButton() {
    var vendorId = storageGet('vendorId');
    var isEditingMode = vendorId ? true : false;
    console.log('isEditingMode:', isEditingMode, ' | vendorId:', vendorId, ' | typeof vendorId:', (typeof vendorId));

    var create_update_service = isEditingMode ?
        createVendorProfile_vendor_update_service : createVendorProfile_vendor_create_service;

    if (imageHasBeenChanged) {
        if (isEditingMode) {
            var fileInfo = storageGet('fileInfo');
            console.log('fileInfo:', fileInfo);
            if (fileInfo && fileInfo.fileName) {
                vendorProfile_files_delete_service.execute({});
            }
        }
        uploadBinaryHelper(
            vendorProfile_files_upload_service,
            storageGet('imageDataBase64'),
            null, null,
            create_update_service);
        imageHasBeenChanged = false;

    } else {
        if (!isEditingMode) {
            storageSet('fileInfo', {
                fileName: null,
                originalFileName: null
            });
        }
        create_update_service.execute({});
    }
}

/**
 * Bind click event handler to the term link 
 */
function bindTermLink() {
    $('[name=termLink]').unbind('click').bind('click', function() {
        var termDescription = $(this).attr('data-description');

        Apperyio('termDescription').text(termDescription);
        Apperyio('termPopup').popup('open');
    });
}

/* Verify if `parentId` is referencing the existing root */
function isSecondRoot(parentId) {
    var menu = storageGet('menuHierarchyList');
    for (var i = 0; i < menu.length; i++) {
        if (parentId == menu[i].id && menu[i].heading == "Root item") {
            return true;
        }
    }
    return false;
}

function getRootId(varName) {
    var menu = storageGet(varName);
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].heading == "Root item") {
            return menu[i].id;
        }
    }
    return null;
}

/* Call service to create or update heading */
function createOrUpdateHeading() {
  Apperyio('categoryParentLabel').show();
  Apperyio('headingParentSelect').parent().show();

  // validation
  var err = null;
  var heading = Apperyio('headingAddField').val();
  var parentHeading = Apperyio('headingParentSelect').val();

  /*
  if (isSecondRoot(parentHeading)) {
      err = 'this menu already has root node';
  } else
  */
  if (!heading) {
      err = 'new menu heading required';
  }
  if (err) {
      Apperyio('headingAddError').html(err).show();
      return;
  }

  if (editMode) {
      menuHeading_update_service.execute({});
  } else {
      menuHeading_createMenuHeading_service.execute({});
  }
}

function alertMsg(title, msg, callback) {
    if (navigator.notification) {
        navigator.notification.alert(msg, callback, title);
    } else {
        alert('['+title+'] '+msg);
        if (callback) {
            callback();
        }
    }
}

/* StatusBar plugin should be initialized from `Device Ready` event */
function initialize_StatusBar_plugin() {
    //if (window.cordova) {
    StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByHexString("#FEFEFE");
    if (device.platform == 'Android') {
        StatusBar.backgroundColorByHexString("#333");
    }
    StatusBar.styleDefault();
    //}
}

function getDistance(p1, p2) {
var rad = function(x) {
      return x * Math.PI / 180;
};
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(p2.lat- p1.lat);
        var dLong = rad(p2.lng- p1.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
    };

function logPageError(page, service, errorThrown) {
    try {
        var userId = storageGet('userId');
        console.log('***** ERROR on page `' + page + '`, service `' + service + '`, error: ' + errorThrown);
        $.ajax({
            url: projectMdb1_settings.database_url + '/collections/page_errors',
            method: 'POST',
            headers: {
                "X-Appery-Database-Id": projectMdb1_settings.database_id,
                "Content-Type": "application/json"
            },
            data: JSON.stringify({ page: page, service: service, error: errorThrown, userid: userId })
        });
    } catch(e) {
        console.log('***** logPageError:', e);
    }
}  

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);

    return (results !== null) ? results[1] || 0 : false;
}


function isPhoneValid(str) {
  isValid = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/.test(str);
  return isValid ;
}

function isValidSecret(text, p_errorLabel) {
    errorLabel = p_errorLabel || Apperyio('resetpass_secret_error');
    
    
    if (text.length == 0) {
        showErrorMessage('secret cannot be empty', errorLabel);
        return false;
    }
    
    if (text.length != 6) {
        showErrorMessage('secret should always be 6 characters long', errorLabel);
        return false;
    }
    
    errorLabel.hide();
    return true;
}


$.copyToClipboard = function (textToCopy) {
  var textArea;

  function isOS() {
    //can use a better detection logic here
    return navigator.userAgent.match(/ipad|iphone/i);
  }

  function createTextArea(text) {
    textArea = document.createElement('textArea');
    textArea.readOnly = true;
    textArea.contentEditable = true;
    textArea.value = text;
    document.body.appendChild(textArea);
  }

  function selectText() {
    var range, selection;

    if (isOS()) {
      range = document.createRange();
      range.selectNodeContents(textArea);
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, 999999);
    } else {
      textArea.select();
    }
  }

  function copyTo() {
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  createTextArea(textToCopy);
  selectText();
  copyTo();
}