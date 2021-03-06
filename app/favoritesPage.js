/*
 * JS for favoritesPage generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return '148444cb-eb26-4cec-bc22-29bf794bc529';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "itemPage",
    "location": "itemPage.html"
},{
    "name": "menu_shared",
    "location": "menu_shared.html"
}, {
    "name": "zzqrCodePage",
    "location": "zzqrCodePage.html"
}, {
    "name": "zzfacebookLogin",
    "location": "zzfacebookLogin.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "zzpromoManage",
    "location": "zzpromoManage.html"
}, {
    "name": "aboutPage",
    "location": "aboutPage.html"
}, {
    "name": "itemDetailsPage",
    "location": "itemDetailsPage.html"
}, {
    "name": "menuHeadingManagePage",
    "location": "menuHeadingManagePage.html"
}, {
    "name": "createAccount",
    "location": "createAccount.html"
}, {
    "name": "zzsettingsPage",
    "location": "zzsettingsPage.html"
}, {
    "name": "wishListPage",
    "location": "wishListPage.html"
}, {
    "name": "menuManagementPage",
    "location": "menuManagementPage.html"
}, {
    "name": "favoritesPage",
    "location": "favoritesPage.html"
}, {
    "name": "touPage",
    "location": "touPage.html"
}, {
    "name": "navigatePage",
    "location": "navigatePage.html"
}, {
    "name": "logoutPage",
    "location": "logoutPage.html"
}, {
    "name": "proprietorPage",
    "location": "proprietorPage.html"
}, {
    "name": "helpPage",
    "location": "helpPage.html"
}, {
    "name": "proprietorAnalyticsPage",
    "location": "proprietorAnalyticsPage.html"
}, {
    "name": "menuPreviewPage",
    "location": "menuPreviewPage.html"
}, {
    "name": "zzpromoEdit",
    "location": "zzpromoEdit.html"
}, {
    "name": "menuPage_v2",
    "location": "menuPage_v2.html"
}, {
    "name": "filterPage",
    "location": "filterPage.html"
}, {
    "name": "easterEggPage",
    "location": "easterEggPage.html"
}, {
    "name": "profilePage",
    "location": "profilePage.html"
}, {
    "name": "zzsearchPage",
    "location": "zzsearchPage.html"
}, {
    "name": "itemEditPage",
    "location": "itemEditPage.html"
}, {
    "name": "zzproprietorStatPage",
    "location": "zzproprietorStatPage.html"
}, {
    "name": "zzdetailedReviewPage",
    "location": "zzdetailedReviewPage.html"
}, {
    "name": "selectionHistoryPage",
    "location": "selectionHistoryPage.html"
}, {
    "name": "operationsRestaurantPage",
    "location": "operationsRestaurantPage.html"
}, {
    "name": "itemManagePage",
    "location": "itemManagePage.html"
}, {
    "name": "proprietorStartPage",
    "location": "proprietorStartPage.html"
}, {
    "name": "orderHistoryPage",
    "location": "orderHistoryPage.html"
}, {
    "name": "selectedPage",
    "location": "selectedPage.html"
}, {
    "name": "faqPage",
    "location": "faqPage.html"
}, {
    "name": "zzratingInfoPage",
    "location": "zzratingInfoPage.html"
}, {
    "name": "zztimeRangePage",
    "location": "zztimeRangePage.html"
}, {
    "name": "zzscannerPage",
    "location": "zzscannerPage.html"
}, {
    "name": "zzCSStestPage",
    "location": "zzCSStestPage.html"
}, {
    "name": "menuHistoryPage",
    "location": "menuHistoryPage.html"
}, {
    "name": "zzmenuPage",
    "location": "zzmenuPage.html"
}, {
    "name": "zzitemInventoryPage",
    "location": "zzitemInventoryPage.html"
}, {
    "name": "zzalertPage",
    "location": "zzalertPage.html"
}];

function favoritesPage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'menuButton': 'favoritesPage_menuButton',
        'favoriteList': 'favoritesPage_favoriteList',
        'favoriteListItem': 'favoritesPage_favoriteListItem',
        'itemLabel': 'favoritesPage_itemLabel',
        'mobilelistitembutton_4': 'favoritesPage_mobilelistitembutton_4',
        'proprietorLabel': 'favoritesPage_proprietorLabel',
        'confirmDeleteLabel': 'favoritesPage_confirmDeleteLabel',
        'confirmDeleteGrid': 'favoritesPage_confirmDeleteGrid',
        'confirmDeleteCell': 'favoritesPage_confirmDeleteCell',
        'deleteConfirmButton': 'favoritesPage_deleteConfirmButton',
        'mobilegridcell_9': 'favoritesPage_mobilegridcell_9',
        'deleteCancelButton': 'favoritesPage_deleteCancelButton'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.mappings["favoritesPage_favaritesPage_favorites_query_service_onbeforesend_mapping_0"] = {
        "homeScreen": "favoritesPage",
        "directions": [
            {
                "from_name": "userId",
                "from_type": "LOCAL_STORAGE",
                "to_name": "favaritesPage_favorites_query_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "X-Appery-Session-Token": "{session_token}"
                    },
                    "parameters": {
                        "include": "item,item.cuisine_lk,item.ingredientMain_lk,item.ingredientMain_lk.category_lk,item.ingredientHidden_lk,item.ingredientHidden_lk.category_lk,item.ingredientFeatured_lk,item.ingredientFeatured_lk.category_lk,item.rating_lk,item.rating_lk.item,item.rating_lk.item.cuisine_lk,item.rating_lk.item.ingredientMain_lk,item.rating_lk.item.ingredientHidden_lk,item.rating_lk.item.ingredientFeatured_lk,item.rating_lk.item.rating_lk,item.rating_lk.item.vendor_lk,item.rating_lk.item.heading,item.rating_lk.user,item.rating_lk.user.status,item.rating_lk.user.vendor_lk,item.vendor_lk, item.vendor_lk.state,item.vendor_lk.country,item.heading,item.heading.vendor,item.heading.headingParent,item.heading.owner_lk",
                        "limit": "1500"
                    },
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target_transformation": function(value) {
                            return {
                                "user": {
                                    "$inQuery": {
                                        "_id": value
                                    }
                                },
                                "item": {
                                    "$inQuery": {
                                        "vendor_lk": {
                                            "$inQuery": {
                                                "disabled": {
                                                    "$ne": true
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                        },
                        "target": "$['parameters']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["favoritesPage_favaritesPage_favorites_query_service_onsuccess_mapping_0"] = {
        "homeScreen": "favoritesPage",
        "directions": [
            {
                "from_name": "favaritesPage_favorites_query_service",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "favoritesPage",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]",
                        "target_transformation": function(value, element) {
                            element.prop('item_id', value.item._id);
                            element.prop('fv_item_id', value._id);
                        },
                        "target": "$['favoriteListItem']"
                    },
                    {
                        "source": "$['body'][i]['item']['name']",
                        "target": "$['favoriteListItem']['itemLabel:text']"
                    },
                    {
                        "source": "$['body'][i]['item']['vendor_lk']['businessName']",
                        "target": "$['favoriteListItem']['proprietorLabel:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["favoritesPage_favaritesPage_favorites_delete_service_onbeforesend_mapping_0"] = {
        "homeScreen": "favoritesPage",
        "directions": [
            {
                "from_name": "selectedItem",
                "from_type": "SESSION_STORAGE",
                "to_name": "favaritesPage_favorites_delete_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "X-Appery-Session-Token": "{session_token}"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['parameters']['_id']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.favaritesPage_favorites_query_service = Apperyio.datasources.favaritesPage_favorites_query_service = new Apperyio.DataSource(projectMdb1_favorites_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["favoritesPage_favaritesPage_favorites_query_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["favoritesPage_favaritesPage_favorites_query_service_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.favaritesPage_favorites_delete_service = Apperyio.datasources.favaritesPage_favorites_delete_service = new Apperyio.DataSource(projectMdb1_favorites_delete_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["favoritesPage_favaritesPage_favorites_delete_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio('confirmDeletePopup').popup('close');
            try {
                favaritesPage_favorites_query_service.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'favoritesPage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var favoritesPage_onLoad = function() {
        favoritesPage_elementsExtraJS();
        try {
            favaritesPage_favorites_query_service.execute({});
        } catch (e) {
            console.error(e);
            hideSpinner();
        };
        favoritesPage_deviceEvents();
        favoritesPage_windowEvents();
        favoritesPage_elementsEvents();
    };
    // screen window events
    function favoritesPage_windowEvents() {
        $('#favoritesPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function favoritesPage_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function favoritesPage_elementsExtraJS() {
        // screen (favoritesPage) extra code
        /* favoriteList */
        listView = $("#favoritesPage_favoriteList");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#favoritesPage_favoriteList .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }
        /* favoriteListItem */
        /* confirmDeletePopup */
        $("#favoritesPage_confirmDeletePopup").popup("option", "positionTo", "window");
    };
    // screen elements handler
    function favoritesPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#favoritesPage_favoritesHeader [name="menuButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('navigatePage', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
        }, '#favoritesPage_favoritesHeader [name="menuButton"]');
        $(document).off("click taphold", '#favoritesPage_favoriteContainer [name="favoriteListItem"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) { //setSelectedMenuItem(this.children[0], 'itemDetailsPage');
                    storageSet('selectedItem', this.item_id);
                    Apperyio.navigateTo('itemDetailsPage', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
            taphold: function(event) {
                storageSet('selectedItem', this.fv_item_id);
                var popupElement = Apperyio("confirmDeletePopup");
                if (popupElement.popup("option", "positionTo") === "origin") {
                    popupElement.popup("open", {
                        transition: "slide",
                        positionTo: "#" + $(this).attr("id")
                    });
                } else {
                    popupElement.popup("open", {
                        transition: "slide"
                    });
                };
            },
        }, '#favoritesPage_favoriteContainer [name="favoriteListItem"]');
        $(document).off("click", '#favoritesPage_confirmDeletePopup [name="deleteConfirmButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        favaritesPage_favorites_delete_service.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                }
            },
        }, '#favoritesPage_confirmDeletePopup [name="deleteConfirmButton"]');
        $(document).off("click", '#favoritesPage_confirmDeletePopup [name="deleteCancelButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('confirmDeletePopup').popup('close');
                }
            },
        }, '#favoritesPage_confirmDeletePopup [name="deleteCancelButton"]');
    };
    $(document).off("pagebeforeshow", "#favoritesPage").on("pagebeforeshow", "#favoritesPage", function(event, ui) {
        Apperyio.CurrentScreen = "favoritesPage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    favoritesPage_onLoad();
};
$(document).off("pagecreate", "#favoritesPage").on("pagecreate", "#favoritesPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    favoritesPage_js();
});