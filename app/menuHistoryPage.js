/*
 * JS for menuHistoryPage generated by Appery.io
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

function menuHistoryPage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'navigateButton': 'menuHistoryPage_navigateButton',
        'menuHistoryLabel': 'menuHistoryPage_menuHistoryLabel',
        'menuHistoryList': 'menuHistoryPage_menuHistoryList',
        'menuHistoryListButton': 'menuHistoryPage_menuHistoryListButton',
        'menuProprietorLabel': 'menuHistoryPage_menuProprietorLabel',
        'mobilelistitembutton_4': 'menuHistoryPage_mobilelistitembutton_4',
        'menuDateLabel': 'menuHistoryPage_menuDateLabel',
        'deleteMenuHistoryLabel': 'menuHistoryPage_deleteMenuHistoryLabel',
        'menuHistoryDeleteButtonGrid': 'menuHistoryPage_menuHistoryDeleteButtonGrid',
        'menuHistoryDeleteCell': 'menuHistoryPage_menuHistoryDeleteCell',
        'menuHistoryDeleteButton': 'menuHistoryPage_menuHistoryDeleteButton',
        'menuHistoryDeleteCancelCell': 'menuHistoryPage_menuHistoryDeleteCancelCell',
        'menuHistoryDeleteCancelButton': 'menuHistoryPage_menuHistoryDeleteCancelButton'
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
    Apperyio.mappings["menuHistoryPage_menuHistoryPage_menuHistory_query_service_onbeforesend_mapping_0"] = {
        "homeScreen": "menuHistoryPage",
        "directions": [
            {
                "from_name": "userId",
                "from_type": "LOCAL_STORAGE",
                "to_name": "menuHistoryPage_menuHistory_query_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "X-Appery-Session-Token": "{session_token}"
                    },
                    "parameters": {
                        "include": "vendor,vendor.state,vendor.country",
                        "sort": "-timestamp"
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
                                "vendor": {
                                    "$inQuery": {
                                        "disabled": {
                                            "$ne": true
                                        }
                                    }
                                }
                            };
                        },
                        "target": "$['parameters']['where']"
                    }
                ]
            },
            {
                "from_name": "sessionToken",
                "from_type": "SESSION_STORAGE",
                "to_name": "menuHistoryPage_menuHistory_query_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "X-Appery-Session-Token": "{session_token}"
                    },
                    "parameters": {
                        "include": "vendor,vendor.state,vendor.country",
                        "sort": "-timestamp"
                    },
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['headers']['X-Appery-Session-Token']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["menuHistoryPage_menuHistoryPage_menuHistory_query_service_onsuccess_mapping_0"] = {
        "homeScreen": "menuHistoryPage",
        "directions": [
            {
                "from_name": "menuHistoryPage_menuHistory_query_service",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "menuHistoryPage",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body'][i]",
                        "target_transformation": function(value, element) {
                            element.prop('item_id', value._id);
                            element.prop('vendor_id', value.vendor._id);
                            element.prop('vendor_tax', value.vendor.taxRate);
                            element.prop('vendor_name', value.vendor.businessName);
                            element.prop('vendor_menuTagLine', value.vendor.menuTagLine);
                        },
                        "target": "$['menuHistoryListButton']"
                    },
                    {
                        "source": "$['body'][i]['vendor']['businessName']",
                        "target": "$['menuHistoryListButton']['menuProprietorLabel:text']"
                    },
                    {
                        "source": "$['body'][i]['timestamp']",
                        "target_transformation": function(value, element) {
                            var date = new Date(value);
                            var str = ('0' + (date.getMonth() + 1)).substr(-2) + '-' + ('0' + date.getDate()).substr(-2) + '-' + date.getFullYear() + ' ' +
                                date.getHours() + ':' + date.getMinutes();
                            return str;
                        },
                        "target": "$['menuHistoryListButton']['menuDateLabel:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["menuHistoryPage_menuHistoryPage_menuHistory_delete_service_onbeforesend_mapping_0"] = {
        "homeScreen": "menuHistoryPage",
        "directions": [
            {
                "from_name": "selectedItem",
                "from_type": "SESSION_STORAGE",
                "to_name": "menuHistoryPage_menuHistory_delete_service",
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
            },
            {
                "from_name": "sessionToken",
                "from_type": "SESSION_STORAGE",
                "to_name": "menuHistoryPage_menuHistory_delete_service",
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
                        "target": "$['headers']['X-Appery-Session-Token']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["menuHistoryPage_menuHistoryPage_clearOrder_service_onbeforesend_mapping_0"] = {
        "homeScreen": "menuHistoryPage",
        "directions": [
            {
                "to_name": "menuHistoryPage_clearOrder_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "Content-Type": "text/plain"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": []
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.menuHistoryPage_menuHistory_query_service = Apperyio.datasources.menuHistoryPage_menuHistory_query_service = new Apperyio.DataSource(projectMdb1_menuHistory_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["menuHistoryPage_menuHistoryPage_menuHistory_query_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["menuHistoryPage_menuHistoryPage_menuHistory_query_service_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.menuHistoryPage_menuHistory_delete_service = Apperyio.datasources.menuHistoryPage_menuHistory_delete_service = new Apperyio.DataSource(projectMdb1_menuHistory_delete_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["menuHistoryPage_menuHistoryPage_menuHistory_delete_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            try {
                menuHistoryPage_menuHistory_query_service.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.menuHistoryPage_clearOrder_service = Apperyio.datasources.menuHistoryPage_clearOrder_service = new Apperyio.DataSource(clearOrder_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["menuHistoryPage_menuHistoryPage_clearOrder_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.navigateTo('menuPage_v2', {
                transition: 'slide',
                reverse: false
            });
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'menuHistoryPage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var menuHistoryPage_onLoad = function() {
        menuHistoryPage_elementsExtraJS();
        try {
            menuHistoryPage_menuHistory_query_service.execute({});
        } catch (e) {
            console.error(e);
            hideSpinner();
        };
        menuHistoryPage_deviceEvents();
        menuHistoryPage_windowEvents();
        menuHistoryPage_elementsEvents();
    };
    // screen window events
    function menuHistoryPage_windowEvents() {
        $('#menuHistoryPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#menuHistoryPage').on({
            pageshow: function(event) {
                storageSet('menuHierarchyList', null);
                // PM-416: On `menuHistoryPage` we reset `menuTopOffset`.
                menuTopOffset = 0;
            },
        });
    };
    // device events
    function menuHistoryPage_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function menuHistoryPage_elementsExtraJS() {
        // screen (menuHistoryPage) extra code
        /* menuHistoryList */
        listView = $("#menuHistoryPage_menuHistoryList");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#menuHistoryPage_menuHistoryList .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }
        /* menuHistoryListButton */
        /* menuHistoryDeletePopup */
        $("#menuHistoryPage_menuHistoryDeletePopup").popup("option", "positionTo", "window");
    };
    // screen elements handler
    function menuHistoryPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#menuHistoryPage_menuHistoryHeader [name="navigateButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('navigatePage', {
                        transition: 'slidedown',
                        reverse: false
                    });
                }
            },
        }, '#menuHistoryPage_menuHistoryHeader [name="navigateButton"]');
        $(document).off("click swipeleft", '#menuHistoryPage_menuHistoryContainer [name="menuHistoryListButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    menuHistoryManager.menuHistoryListButton_onClick(this);
                }
            },
            swipeleft: function(event) {
                storageSet('selectedItem', this.item_id);
                var popupElement = Apperyio("menuHistoryDeletePopup");
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
        }, '#menuHistoryPage_menuHistoryContainer [name="menuHistoryListButton"]');
        $(document).off("click", '#menuHistoryPage_menuHistoryDeletePopup [name="menuHistoryDeleteButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('menuHistoryDeletePopup').popup('close');
                    try {
                        menuHistoryPage_menuHistory_delete_service.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                }
            },
        }, '#menuHistoryPage_menuHistoryDeletePopup [name="menuHistoryDeleteButton"]');
        $(document).off("click", '#menuHistoryPage_menuHistoryDeletePopup [name="menuHistoryDeleteCancelButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('menuHistoryDeletePopup').popup('close');
                }
            },
        }, '#menuHistoryPage_menuHistoryDeletePopup [name="menuHistoryDeleteCancelButton"]');
    };
    $(document).off("pagebeforeshow", "#menuHistoryPage").on("pagebeforeshow", "#menuHistoryPage", function(event, ui) {
        Apperyio.CurrentScreen = "menuHistoryPage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    menuHistoryPage_onLoad();
};
$(document).off("pagecreate", "#menuHistoryPage").on("pagecreate", "#menuHistoryPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    menuHistoryPage_js();
});