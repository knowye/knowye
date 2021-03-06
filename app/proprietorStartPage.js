/*
 * JS for proprietorStartPage generated by Appery.io
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

function proprietorStartPage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'helpButton': 'proprietorStartPage_helpButton',
        'loggedInLabel': 'proprietorStartPage_loggedInLabel',
        'loggedInIdLabel': 'proprietorStartPage_loggedInIdLabel',
        'alertGrid': 'proprietorStartPage_alertGrid',
        'mobilegridcell_24': 'proprietorStartPage_mobilegridcell_24',
        'alertLabel': 'proprietorStartPage_alertLabel',
        'mobilegridcell_25': 'proprietorStartPage_mobilegridcell_25',
        'alertButtonLabel': 'proprietorStartPage_alertButtonLabel',
        'mobilegridcell_26': 'proprietorStartPage_mobilegridcell_26',
        'inventoryAlertLabel': 'proprietorStartPage_inventoryAlertLabel',
        'mobilegridcell_27': 'proprietorStartPage_mobilegridcell_27',
        'inventoryAlertButton': 'proprietorStartPage_inventoryAlertButton',
        'mobilegridcell_32': 'proprietorStartPage_mobilegridcell_32',
        'ratingAlertLabel': 'proprietorStartPage_ratingAlertLabel',
        'mobilegridcell_33': 'proprietorStartPage_mobilegridcell_33',
        'ratingAlertButton': 'proprietorStartPage_ratingAlertButton',
        'vendorActionsButtons': 'proprietorStartPage_vendorActionsButtons',
        'operatingInfoButton': 'proprietorStartPage_operatingInfoButton',
        'mobilelistitembutton_12': 'proprietorStartPage_mobilelistitembutton_12',
        'inventoryButton': 'proprietorStartPage_inventoryButton',
        'mobilelistitembutton_16': 'proprietorStartPage_mobilelistitembutton_16',
        'analyticsButton': 'proprietorStartPage_analyticsButton',
        'mobilelistitembutton_18': 'proprietorStartPage_mobilelistitembutton_18',
        'alertButton': 'proprietorStartPage_alertButton',
        'mobilelistitembutton_37': 'proprietorStartPage_mobilelistitembutton_37',
        'menuItemsButton': 'proprietorStartPage_menuItemsButton',
        'mobilelistitembutton_14': 'proprietorStartPage_mobilelistitembutton_14',
        'sendButton': 'proprietorStartPage_sendButton',
        'mobilelistitembutton_41': 'proprietorStartPage_mobilelistitembutton_41',
        'promoButton': 'proprietorStartPage_promoButton',
        'mobilelistitembutton_43': 'proprietorStartPage_mobilelistitembutton_43',
        'logoutButton': 'proprietorStartPage_logoutButton',
        'mobilelistitembutton_39': 'proprietorStartPage_mobilelistitembutton_39',
        'customersCountGrid': 'proprietorStartPage_customersCountGrid',
        'customersCountCell': 'proprietorStartPage_customersCountCell',
        'customersCountLabel': 'proprietorStartPage_customersCountLabel',
        'customersCount': 'proprietorStartPage_customersCount',
        'logoutConfirmLabel': 'proprietorStartPage_logoutConfirmLabel',
        'logoutButtonGrid': 'proprietorStartPage_logoutButtonGrid',
        'logoutButtonCell': 'proprietorStartPage_logoutButtonCell',
        'logoutConfirmButton': 'proprietorStartPage_logoutConfirmButton',
        'logoutCancelCell': 'proprietorStartPage_logoutCancelCell',
        'logoutCancelButton': 'proprietorStartPage_logoutCancelButton'
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
    Apperyio.mappings["proprietorStartPage_proprietorStartPage_onload_mapping_0"] = {
        "homeScreen": "proprietorStartPage",
        "directions": [
            {
                "from_name": "userName",
                "from_type": "SESSION_STORAGE",
                "to_name": "proprietorStartPage",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['loggedInIdLabel:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["proprietorStartPage_propriatorStartPage_logout_service_onbeforesend_mapping_0"] = {
        "homeScreen": "proprietorStartPage",
        "directions": [
            {
                "to_name": "propriatorStartPage_logout_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "X-Appery-Session-Token": "{session_token}"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": []
            }
        ]
    };
    Apperyio.mappings["proprietorStartPage_propriatorStartPage_push_service_onbeforesend_mapping_0"] = {
        "homeScreen": "proprietorStartPage",
        "directions": [
            {
                "from_name": "pushTitle",
                "from_type": "SESSION_STORAGE",
                "to_name": "propriatorStartPage_push_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Push-API-Key": "80aaa67c-5dc4-42e3-833a-6ae41eba2a10",
                        "Content-Type": "application/json"
                    },
                    "parameters": {},
                    "body": {
                        "filter": {
                            "channels": "customer"
                        },
                        "status": "sent"
                    }
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['body']['payload']['title']"
                    }
                ]
            },
            {
                "from_name": "pushMessage",
                "from_type": "SESSION_STORAGE",
                "to_name": "propriatorStartPage_push_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Push-API-Key": "80aaa67c-5dc4-42e3-833a-6ae41eba2a10",
                        "Content-Type": "application/json"
                    },
                    "parameters": {},
                    "body": {
                        "filter": {
                            "channels": "customer"
                        },
                        "status": "sent"
                    }
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['body']['payload']['message']"
                    }
                ]
            },
            {
                "to_name": "propriatorStartPage_push_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Push-API-Key": "80aaa67c-5dc4-42e3-833a-6ae41eba2a10",
                        "Content-Type": "application/json"
                    },
                    "parameters": {},
                    "body": {
                        "filter": {
                            "channels": "customer"
                        },
                        "status": "sent"
                    }
                },
                "mappings": [
                    {
                        "target_transformation": function(value) {
                            return ['customer'];
                        },
                        "target": "$['body']['filter']['channels']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.propriatorStartPage_logout_service = Apperyio.datasources.propriatorStartPage_logout_service = new Apperyio.DataSource(projectMdb1_logout_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["proprietorStartPage_propriatorStartPage_logout_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            try {
                $a.storage["sessionToken"].update("$", "null")
            } catch (e) {
                console.error(e)
            };
            try {
                $a.storage["logout"].update("$", "true")
            } catch (e) {
                console.error(e)
            };
            Apperyio.navigateTo('logoutPage', {
                transition: 'slide',
                reverse: false
            });
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.propriatorStartPage_push_service = Apperyio.datasources.propriatorStartPage_push_service = new Apperyio.DataSource(sendPushNotification, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["proprietorStartPage_propriatorStartPage_push_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            alert('Successfully sent');
        },
        "onError": function(jqXHR, textStatus, errorThrown) {
            alert('Cannot send push notification');
        }
    });
    Apperyio.CurrentScreen = 'proprietorStartPage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var proprietorStartPage_onLoad = function() {
        proprietorStartPage_elementsExtraJS();
        Apperyio.processMappingAction(Apperyio.mappings["proprietorStartPage_proprietorStartPage_onload_mapping_0"]);
        proprietorStartPage_deviceEvents();
        proprietorStartPage_windowEvents();
        proprietorStartPage_elementsEvents();
    };
    // screen window events
    function proprietorStartPage_windowEvents() {
        $('#proprietorStartPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function proprietorStartPage_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function proprietorStartPage_elementsExtraJS() {
        // screen (proprietorStartPage) extra code
        /* vendorActionsButtons */
        listView = $("#proprietorStartPage_vendorActionsButtons");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#proprietorStartPage_vendorActionsButtons .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }
        /* operatingInfoButton */
        /* inventoryButton */
        /* analyticsButton */
        /* alertButton */
        /* menuItemsButton */
        /* sendButton */
        /* promoButton */
        /* logoutButton */
        /* logoutConfirmPopup */
        $("#proprietorStartPage_logoutConfirmPopup").popup("option", "positionTo", "window");
    };
    // screen elements handler
    function proprietorStartPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#proprietorStartPage_vendorStartHeader [name="helpButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('helpPage', {
                        transition: 'slidedown',
                        reverse: false
                    });
                }
            },
        }, '#proprietorStartPage_vendorStartHeader [name="helpButton"]');
        $(document).off("click", '#proprietorStartPage_vendorContainer [name="ratingAlertButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('zzalertPage', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
        }, '#proprietorStartPage_vendorContainer [name="ratingAlertButton"]');
        $(document).off("click", '#proprietorStartPage_vendorContainer [name="operatingInfoButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('operationsRestaurantPage', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
        }, '#proprietorStartPage_vendorContainer [name="operatingInfoButton"]');
        $(document).off("click", '#proprietorStartPage_vendorContainer [name="inventoryButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('zzitemInventoryPage', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
        }, '#proprietorStartPage_vendorContainer [name="inventoryButton"]');
        $(document).off("click", '#proprietorStartPage_vendorContainer [name="analyticsButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('proprietorAnalyticsPage', {
                        transition: 'slideup',
                        reverse: false
                    });
                }
            },
        }, '#proprietorStartPage_vendorContainer [name="analyticsButton"]');
        $(document).off("click", '#proprietorStartPage_vendorContainer [name="alertButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('zzalertPage', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
        }, '#proprietorStartPage_vendorContainer [name="alertButton"]');
        $(document).off("click", '#proprietorStartPage_vendorContainer [name="menuItemsButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('menuManagementPage', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
        }, '#proprietorStartPage_vendorContainer [name="menuItemsButton"]');
        $(document).off("click", '#proprietorStartPage_vendorContainer [name="sendButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        $a.storage["pushTitle"].update("$", "knowye")
                    } catch (e) {
                        console.error(e)
                    };
                    try {
                        $a.storage["pushMessage"].update("$", "Hello")
                    } catch (e) {
                        console.error(e)
                    };
                    try {
                        propriatorStartPage_push_service.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                }
            },
        }, '#proprietorStartPage_vendorContainer [name="sendButton"]');
        $(document).off("click", '#proprietorStartPage_vendorContainer [name="logoutButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("logoutConfirmPopup");
                    if (popupElement.popup("option", "positionTo") === "origin") {
                        popupElement.popup("open", {
                            transition: "none",
                            positionTo: "#" + $(this).attr("id")
                        });
                    } else {
                        popupElement.popup("open", {
                            transition: "none"
                        });
                    };
                }
            },
        }, '#proprietorStartPage_vendorContainer [name="logoutButton"]');
        $(document).off("click", '#proprietorStartPage_logoutConfirmPopup [name="logoutConfirmButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        propriatorStartPage_logout_service.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                }
            },
        }, '#proprietorStartPage_logoutConfirmPopup [name="logoutConfirmButton"]');
        $(document).off("click", '#proprietorStartPage_logoutConfirmPopup [name="logoutCancelButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('logoutConfirmPopup').popup('close');
                }
            },
        }, '#proprietorStartPage_logoutConfirmPopup [name="logoutCancelButton"]');
    };
    $(document).off("pagebeforeshow", "#proprietorStartPage").on("pagebeforeshow", "#proprietorStartPage", function(event, ui) {
        Apperyio.CurrentScreen = "proprietorStartPage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    proprietorStartPage_onLoad();
};
$(document).off("pagecreate", "#proprietorStartPage").on("pagecreate", "#proprietorStartPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    proprietorStartPage_js();
});