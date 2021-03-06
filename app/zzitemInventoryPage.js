/*
 * JS for zzitemInventoryPage generated by Appery.io
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

function zzitemInventoryPage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'homeButton': 'zzitemInventoryPage_homeButton',
        'dishInventoryLabel': 'zzitemInventoryPage_dishInventoryLabel',
        'dishInventoryList': 'zzitemInventoryPage_dishInventoryList',
        'mobilelistitem_4': 'zzitemInventoryPage_mobilelistitem_4',
        'mobilelistitembutton_5': 'zzitemInventoryPage_mobilelistitembutton_5',
        'mobilelistitem_6': 'zzitemInventoryPage_mobilelistitem_6',
        'mobilelistitembutton_7': 'zzitemInventoryPage_mobilelistitembutton_7',
        'mobilelistitem_8': 'zzitemInventoryPage_mobilelistitem_8',
        'mobilelistitembutton_9': 'zzitemInventoryPage_mobilelistitembutton_9',
        'mobilelistitem_11': 'zzitemInventoryPage_mobilelistitem_11',
        'mobilelistitembutton_12': 'zzitemInventoryPage_mobilelistitembutton_12',
        'name': 'zzitemInventoryPage_name',
        'dishHideLabel': 'zzitemInventoryPage_dishHideLabel',
        'dishHideTime': 'zzitemInventoryPage_dishHideTime',
        'inventoryCount': 'zzitemInventoryPage_inventoryCount',
        'inventoryCountLabel': 'zzitemInventoryPage_inventoryCountLabel',
        'updateInventory': 'zzitemInventoryPage_updateInventory',
        'inventoryAlertLabel': 'zzitemInventoryPage_inventoryAlertLabel',
        'inventoryLow': 'zzitemInventoryPage_inventoryLow',
        'inventorySaveButton': 'zzitemInventoryPage_inventorySaveButton'
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
    Apperyio.datasources = Apperyio.datasources || {};
    Apperyio.CurrentScreen = 'zzitemInventoryPage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var zzitemInventoryPage_onLoad = function() {
        zzitemInventoryPage_elementsExtraJS();
        zzitemInventoryPage_deviceEvents();
        zzitemInventoryPage_windowEvents();
        zzitemInventoryPage_elementsEvents();
    };
    // screen window events
    function zzitemInventoryPage_windowEvents() {
        $('#zzitemInventoryPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function zzitemInventoryPage_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function zzitemInventoryPage_elementsExtraJS() {
        // screen (zzitemInventoryPage) extra code
        /* dishInventoryList */
        listView = $("#zzitemInventoryPage_dishInventoryList");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#zzitemInventoryPage_dishInventoryList .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }
        /* mobilelistitem_4 */
        /* mobilelistitem_6 */
        /* mobilelistitem_8 */
        /* mobilelistitem_11 */
        /* inventoryPopup */
        $("#zzitemInventoryPage_inventoryPopup").popup("option", "positionTo", "window");
    };
    // screen elements handler
    function zzitemInventoryPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#zzitemInventoryPage_inventoryHeader [name="homeButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('proprietorStartPage', {
                        transition: 'slidedown',
                        reverse: false
                    });
                }
            },
        }, '#zzitemInventoryPage_inventoryHeader [name="homeButton"]');
        $(document).off("click", '#zzitemInventoryPage_dishInventoryContainer [name="mobilelistitem_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("inventoryPopup");
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
                }
            },
        }, '#zzitemInventoryPage_dishInventoryContainer [name="mobilelistitem_4"]');
        $(document).off("click", '#zzitemInventoryPage_inventoryPopup [name="inventorySaveButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('inventoryPopup').popup('close');
                }
            },
        }, '#zzitemInventoryPage_inventoryPopup [name="inventorySaveButton"]');
    };
    $(document).off("pagebeforeshow", "#zzitemInventoryPage").on("pagebeforeshow", "#zzitemInventoryPage", function(event, ui) {
        Apperyio.CurrentScreen = "zzitemInventoryPage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    zzitemInventoryPage_onLoad();
};
$(document).off("pagecreate", "#zzitemInventoryPage").on("pagecreate", "#zzitemInventoryPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    zzitemInventoryPage_js();
});