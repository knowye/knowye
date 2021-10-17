/*
 * JS for menuManagementPage generated by Appery.io
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

function menuManagementPage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'homeButton': 'menuManagementPage_homeButton',
        'menuManageList': 'menuManagementPage_menuManageList',
        'headingEditButton': 'menuManagementPage_headingEditButton',
        'mobilelistitembutton_6': 'menuManagementPage_mobilelistitembutton_6',
        'itemEditButton': 'menuManagementPage_itemEditButton',
        'mobilelistitembutton_8': 'menuManagementPage_mobilelistitembutton_8',
        'menuTagLine': 'menuManagementPage_menuTagLine',
        'mobilelistitembutton_16': 'menuManagementPage_mobilelistitembutton_16',
        'timeRangeButton': 'menuManagementPage_timeRangeButton',
        'mobilelistitembutton_10': 'menuManagementPage_mobilelistitembutton_10',
        'qrCodeButton': 'menuManagementPage_qrCodeButton',
        'mobilelistitembutton_12': 'menuManagementPage_mobilelistitembutton_12',
        'menuPreview': 'menuManagementPage_menuPreview',
        'mobilelistitembutton_14': 'menuManagementPage_mobilelistitembutton_14',
        'menuViewGrid': 'menuManagementPage_menuViewGrid',
        'menuViewCell': 'menuManagementPage_menuViewCell',
        'menuViewPeriodLabel': 'menuManagementPage_menuViewPeriodLabel',
        'periodSelectButton': 'menuManagementPage_periodSelectButton',
        'periodSelectButton-0': 'menuManagementPage_periodSelectButton-0',
        'menuViewPeriodGrid': 'menuManagementPage_menuViewPeriodGrid',
        'lastPeriodLabelCell': 'menuManagementPage_lastPeriodLabelCell',
        'lastPeriodLabel': 'menuManagementPage_lastPeriodLabel',
        'thisPeriodLabelCell': 'menuManagementPage_thisPeriodLabelCell',
        'thisPeriodLabel': 'menuManagementPage_thisPeriodLabel',
        'lastPeriodCountCell': 'menuManagementPage_lastPeriodCountCell',
        'lastPeriodCountLabel': 'menuManagementPage_lastPeriodCountLabel',
        'thisPeriodCountCell': 'menuManagementPage_thisPeriodCountCell',
        'thisPeriodCountLabel': 'menuManagementPage_thisPeriodCountLabel',
        'tagLineLabel': 'menuManagementPage_tagLineLabel',
        'tagLineField': 'menuManagementPage_tagLineField',
        'taglineButtonGrid': 'menuManagementPage_taglineButtonGrid',
        'taglineSaveCell': 'menuManagementPage_taglineSaveCell',
        'tagLineSaveButton': 'menuManagementPage_tagLineSaveButton',
        'taglineCancelCell': 'menuManagementPage_taglineCancelCell',
        'taglineCancelButton': 'menuManagementPage_taglineCancelButton'
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
    Apperyio.mappings["menuManagementPage_menuTagLine_onclick_mapping_1"] = {
        "homeScreen": "menuManagementPage",
        "directions": [
            {
                "from_name": "currentVendor",
                "from_type": "SESSION_STORAGE",
                "to_name": "menuManagementPage",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['menuTagLine']",
                        "target": "$['tagLineField:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["menuManagementPage_menuPanagePage_vendor_update_service_onbeforesend_mapping_0"] = {
        "homeScreen": "menuManagementPage",
        "directions": [
            {
                "from_name": "vendorId",
                "from_type": "SESSION_STORAGE",
                "to_name": "menuPanagePage_vendor_update_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "X-Appery-Session-Token": "{session_token}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {},
                    "body": {
                        "acl": {
                            "*": {
                                "write": true,
                                "read": true
                            }
                        }
                    }
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['parameters']['_id']"
                    }
                ]
            },
            {
                "from_name": "menuManagementPage",
                "from_type": "UI",
                "to_name": "menuPanagePage_vendor_update_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "X-Appery-Session-Token": "{session_token}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {},
                    "body": {
                        "acl": {
                            "*": {
                                "write": true,
                                "read": true
                            }
                        }
                    }
                },
                "mappings": [
                    {
                        "source": "$['tagLineField:text']",
                        "target": "$['body']['menuTagLine']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["menuManagementPage_menuPanagePage_vendor_update_service_onsuccess_mapping_0"] = {
        "homeScreen": "menuManagementPage",
        "directions": [
            {
                "from_name": "menuManagementPage",
                "from_type": "UI",
                "to_name": "currentVendor",
                "to_type": "SESSION_STORAGE",
                "mappings": [
                    {
                        "source": "$['tagLineField:text']",
                        "target": "$['menuTagLine']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.menuPanagePage_vendor_update_service = Apperyio.datasources.menuPanagePage_vendor_update_service = new Apperyio.DataSource(projectMdb1_vendor_update_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["menuManagementPage_menuPanagePage_vendor_update_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["menuManagementPage_menuPanagePage_vendor_update_service_onsuccess_mapping_0"]);
            Apperyio('menuTagLinePopup').popup('close');
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'menuManagementPage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var menuManagementPage_onLoad = function() {
        menuManagementPage_elementsExtraJS();
        storageSet('menuHeading', null);
        var element = Apperyio('qrcode_fly');
        if (customerMode) {
            element.hide();
            return;
        }
        var url = 'https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=' +
            encodeURIComponent('http://appery.io/app/view/6f6b5cb3-e481-4b12-be3f-dd8cecd1ca07/startScreen.html?vendor=' + projectMdb1_settings.vendor_id);
        //log(url);
        element.find('a').prop('href', url);;
        menuManagementPage_deviceEvents();
        menuManagementPage_windowEvents();
        menuManagementPage_elementsEvents();
    };
    // screen window events
    function menuManagementPage_windowEvents() {
        $('#menuManagementPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function menuManagementPage_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function menuManagementPage_elementsExtraJS() {
        // screen (menuManagementPage) extra code
        /* menuManageList */
        listView = $("#menuManagementPage_menuManageList");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#menuManagementPage_menuManageList .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }
        /* headingEditButton */
        /* itemEditButton */
        /* menuTagLine */
        /* timeRangeButton */
        /* qrCodeButton */
        /* menuPreview */
        /* periodSelectButton */
        $("#menuManagementPage_periodSelectButton").parent().find("a.ui-btn").attr("tabindex", "8");
        /* menuTagLinePopup */
        $("#menuManagementPage_menuTagLinePopup").popup("option", "positionTo", "window");
    };
    // screen elements handler
    function menuManagementPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#menuManagementPage_menuManagementHeader [name="homeButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('proprietorStartPage', {
                        transition: 'slidedown',
                        reverse: false
                    });
                }
            },
        }, '#menuManagementPage_menuManagementHeader [name="homeButton"]');
        $(document).off("click", '#menuManagementPage_menuManageContainer [name="headingEditButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    preview = false;
                    menuHeadingCollpsed = true;
                    Apperyio.navigateTo('menuHeadingManagePage', {
                        transition: 'slide',
                        reverse: true
                    });
                }
            },
        }, '#menuManagementPage_menuManageContainer [name="headingEditButton"]');
        $(document).off("click", '#menuManagementPage_menuManageContainer [name="itemEditButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        $a.storage["selectedParentItem"].update("$", "")
                    } catch (e) {
                        console.error(e)
                    };
                    Apperyio.navigateTo('itemManagePage', {
                        reverse: true
                    });
                }
            },
        }, '#menuManagementPage_menuManageContainer [name="itemEditButton"]');
        $(document).off("click", '#menuManagementPage_menuManageContainer [name="menuTagLine"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("menuTagLinePopup");
                    if (popupElement.popup("option", "positionTo") === "origin") {
                        popupElement.popup("open", {
                            transition: "pop",
                            positionTo: "#" + $(this).attr("id")
                        });
                    } else {
                        popupElement.popup("open", {
                            transition: "pop"
                        });
                    };
                    Apperyio.processMappingAction(Apperyio.mappings["menuManagementPage_menuTagLine_onclick_mapping_1"]);
                }
            },
        }, '#menuManagementPage_menuManageContainer [name="menuTagLine"]');
        $(document).off("click", '#menuManagementPage_menuManageContainer [name="timeRangeButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('zztimeRangePage', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
        }, '#menuManagementPage_menuManageContainer [name="timeRangeButton"]');
        $(document).off("click", '#menuManagementPage_menuManageContainer [name="qrCodeButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('zzqrCodePage', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
        }, '#menuManagementPage_menuManageContainer [name="qrCodeButton"]');
        $(document).off("click", '#menuManagementPage_menuManageContainer [name="menuPreview"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    preview = true;
                    menuHeadingCollpsed = false;
                    Apperyio.navigateTo('menuPage_v2', {
                        reverse: false
                    });
                }
            },
        }, '#menuManagementPage_menuManageContainer [name="menuPreview"]');
        $(document).off("click", '#menuManagementPage_menuTagLinePopup [name="tagLineSaveButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        menuPanagePage_vendor_update_service.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                }
            },
        }, '#menuManagementPage_menuTagLinePopup [name="tagLineSaveButton"]');
        $(document).off("click", '#menuManagementPage_menuTagLinePopup [name="taglineCancelButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('menuTagLinePopup').popup('close');
                }
            },
        }, '#menuManagementPage_menuTagLinePopup [name="taglineCancelButton"]');
    };
    $(document).off("pagebeforeshow", "#menuManagementPage").on("pagebeforeshow", "#menuManagementPage", function(event, ui) {
        Apperyio.CurrentScreen = "menuManagementPage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    menuManagementPage_onLoad();
};
$(document).off("pagecreate", "#menuManagementPage").on("pagecreate", "#menuManagementPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    menuManagementPage_js();
});