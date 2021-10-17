/*
 * JS for zzproprietorStatPage generated by Appery.io
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

function zzproprietorStatPage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'homeButton': 'zzproprietorStatPage_homeButton',
        'statsLabel': 'zzproprietorStatPage_statsLabel',
        'serverCallList': 'zzproprietorStatPage_serverCallList',
        'mobilegridcell_18': 'zzproprietorStatPage_mobilegridcell_18',
        'mobilelabel_28': 'zzproprietorStatPage_mobilelabel_28',
        'mobilegridcell_19': 'zzproprietorStatPage_mobilegridcell_19',
        'mobilelabel_29': 'zzproprietorStatPage_mobilelabel_29',
        'mobilegridcell_25': 'zzproprietorStatPage_mobilegridcell_25',
        'mobilelabel_30': 'zzproprietorStatPage_mobilelabel_30',
        'mobilegridcell_20': 'zzproprietorStatPage_mobilegridcell_20',
        'mobilelabel_31': 'zzproprietorStatPage_mobilelabel_31',
        'mobilegridcell_21': 'zzproprietorStatPage_mobilegridcell_21',
        'mobilelabel_32': 'zzproprietorStatPage_mobilelabel_32',
        'mobilegridcell_26': 'zzproprietorStatPage_mobilegridcell_26',
        'mobilebutton_35': 'zzproprietorStatPage_mobilebutton_35',
        'mobilegridcell_23': 'zzproprietorStatPage_mobilegridcell_23',
        'mobilelabel_33': 'zzproprietorStatPage_mobilelabel_33',
        'mobilegridcell_24': 'zzproprietorStatPage_mobilegridcell_24',
        'mobilelabel_34': 'zzproprietorStatPage_mobilelabel_34',
        'mobilegridcell_27': 'zzproprietorStatPage_mobilegridcell_27',
        'mobilebutton_36': 'zzproprietorStatPage_mobilebutton_36',
        'statList': 'zzproprietorStatPage_statList',
        'mobilelistitem_4': 'zzproprietorStatPage_mobilelistitem_4',
        'dishRatingDrop': 'zzproprietorStatPage_dishRatingDrop',
        'mobilelistitembutton_5': 'zzproprietorStatPage_mobilelistitembutton_5',
        'mobilelabel_13': 'zzproprietorStatPage_mobilelabel_13',
        'mobilebutton_11': 'zzproprietorStatPage_mobilebutton_11',
        'mobilelistitem_6': 'zzproprietorStatPage_mobilelistitem_6',
        'dishRatingRise': 'zzproprietorStatPage_dishRatingRise',
        'mobilelistitembutton_7': 'zzproprietorStatPage_mobilelistitembutton_7',
        'dishRiseLabel': 'zzproprietorStatPage_dishRiseLabel',
        'mobilebutton_16': 'zzproprietorStatPage_mobilebutton_16',
        'mobilelistitem_8': 'zzproprietorStatPage_mobilelistitem_8',
        'mobilelistitembutton_9': 'zzproprietorStatPage_mobilelistitembutton_9'
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
    Apperyio.CurrentScreen = 'zzproprietorStatPage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var zzproprietorStatPage_onLoad = function() {
        zzproprietorStatPage_elementsExtraJS();
        zzproprietorStatPage_deviceEvents();
        zzproprietorStatPage_windowEvents();
        zzproprietorStatPage_elementsEvents();
    };
    // screen window events
    function zzproprietorStatPage_windowEvents() {
        $('#zzproprietorStatPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function zzproprietorStatPage_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function zzproprietorStatPage_elementsExtraJS() {
        // screen (zzproprietorStatPage) extra code
        /* statList */
        listView = $("#zzproprietorStatPage_statList");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#zzproprietorStatPage_statList .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }
        /* mobilelistitem_4 */
        /* mobilelistitem_6 */
        /* mobilelistitem_8 */
    };
    // screen elements handler
    function zzproprietorStatPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#zzproprietorStatPage_vendorStatHeader [name="homeButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('proprietorStartPage', {
                        transition: 'slidedown',
                        reverse: false
                    });
                }
            },
        }, '#zzproprietorStatPage_vendorStatHeader [name="homeButton"]');
    };
    $(document).off("pagebeforeshow", "#zzproprietorStatPage").on("pagebeforeshow", "#zzproprietorStatPage", function(event, ui) {
        Apperyio.CurrentScreen = "zzproprietorStatPage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    zzproprietorStatPage_onLoad();
};
$(document).off("pagecreate", "#zzproprietorStatPage").on("pagecreate", "#zzproprietorStatPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    zzproprietorStatPage_js();
});