/*
 * JS for zzsettingsPage generated by Appery.io
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

function zzsettingsPage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'menuButton': 'zzsettingsPage_menuButton'
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
    Apperyio.CurrentScreen = 'zzsettingsPage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var zzsettingsPage_onLoad = function() {
        zzsettingsPage_elementsExtraJS();
        zzsettingsPage_deviceEvents();
        zzsettingsPage_windowEvents();
        zzsettingsPage_elementsEvents();
    };
    // screen window events
    function zzsettingsPage_windowEvents() {
        $('#zzsettingsPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function zzsettingsPage_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function zzsettingsPage_elementsExtraJS() {
        // screen (zzsettingsPage) extra code
    };
    // screen elements handler
    function zzsettingsPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#zzsettingsPage_settingsHeader [name="menuButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('navigatePage', {
                        transition: 'slidedown',
                        reverse: false
                    });
                }
            },
        }, '#zzsettingsPage_settingsHeader [name="menuButton"]');
    };
    $(document).off("pagebeforeshow", "#zzsettingsPage").on("pagebeforeshow", "#zzsettingsPage", function(event, ui) {
        Apperyio.CurrentScreen = "zzsettingsPage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    zzsettingsPage_onLoad();
};
$(document).off("pagecreate", "#zzsettingsPage").on("pagecreate", "#zzsettingsPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    zzsettingsPage_js();
});