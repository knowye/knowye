/*
 * JS for logoutPage generated by Appery.io
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

function logoutPage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'homeButton': 'logoutPage_homeButton',
        'spacer_3': 'logoutPage_spacer_3',
        'logoutLabel': 'logoutPage_logoutLabel',
        'spacer_4': 'logoutPage_spacer_4',
        'knowyeLogo': 'logoutPage_knowyeLogo',
        'spacer_5': 'logoutPage_spacer_5',
        'loginButton': 'logoutPage_loginButton'
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
    Apperyio.CurrentScreen = 'logoutPage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var logoutPage_onLoad = function() {
        logoutPage_elementsExtraJS();
        logoutPage_deviceEvents();
        logoutPage_windowEvents();
        logoutPage_elementsEvents();
    };
    // screen window events
    function logoutPage_windowEvents() {
        $('#logoutPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function logoutPage_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function logoutPage_elementsExtraJS() {
        // screen (logoutPage) extra code
    };
    // screen elements handler
    function logoutPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#logoutPage_logoutHeader [name="homeButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    setTimeout(function() {
                        window.location = 'startScreen.html';
                    }, 0);
                }
            },
        }, '#logoutPage_logoutHeader [name="homeButton"]');
        $(document).off("click", '#logoutPage_logoutContainer [name="loginButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    setTimeout(function() {
                        window.location = 'startScreen.html';
                    }, 0);
                }
            },
        }, '#logoutPage_logoutContainer [name="loginButton"]');
    };
    $(document).off("pagebeforeshow", "#logoutPage").on("pagebeforeshow", "#logoutPage", function(event, ui) {
        Apperyio.CurrentScreen = "logoutPage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    logoutPage_onLoad();
};
$(document).off("pagecreate", "#logoutPage").on("pagecreate", "#logoutPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    logoutPage_js();
});