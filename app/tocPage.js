/*
 * JS for tocPage generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return '6f6b5cb3-e481-4b12-be3f-dd8cecd1ca07';
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
    "name": "searchResultsPage",
    "location": "searchResultsPage.html"
}, {
    "name": "navigateProprietorPage",
    "location": "navigateProprietorPage.html"
}, {
    "name": "createAccount",
    "location": "createAccount.html"
}, {
    "name": "menuHeadingManagePage",
    "location": "menuHeadingManagePage.html"
}, {
    "name": "easterEggPage",
    "location": "easterEggPage.html"
}, {
    "name": "faqPage",
    "location": "faqPage.html"
}, {
    "name": "orderHistoryPage",
    "location": "orderHistoryPage.html"
}, {
    "name": "selectedPage",
    "location": "selectedPage.html"
}, {
    "name": "tocPage",
    "location": "tocPage.html"
}, {
    "name": "menuPreviewPage",
    "location": "menuPreviewPage.html"
}, {
    "name": "itemDetailsPage",
    "location": "itemDetailsPage.html"
}, {
    "name": "aboutPage",
    "location": "aboutPage.html"
}, {
    "name": "proprietorPage",
    "location": "proprietorPage.html"
}, {
    "name": "itemPage",
    "location": "itemPage.html"
}, {
    "name": "searchCriteria",
    "location": "searchCriteria.html"
}, {
    "name": "searchPage",
    "location": "searchPage.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "helpPage",
    "location": "helpPage.html"
}, {
    "name": "logoutPage",
    "location": "logoutPage.html"
}, {
    "name": "navigatePage",
    "location": "navigatePage.html"
}, {
    "name": "profilePage",
    "location": "profilePage.html"
}, {
    "name": "filterPage",
    "location": "filterPage.html"
}, {
    "name": "settingsPage",
    "location": "settingsPage.html"
}, {
    "name": "favoritesPage",
    "location": "favoritesPage.html"
}, {
    "name": "menuManagementPage",
    "location": "menuManagementPage.html"
}, {
    "name": "menuPage",
    "location": "menuPage.html"
}, {
    "name": "wishListPage",
    "location": "wishListPage.html"
}, {
    "name": "themeSample",
    "location": "themeSample.html"
}, {
    "name": "proprietorStartPage",
    "location": "proprietorStartPage.html"
}, {
    "name": "itemManagePage",
    "location": "itemManagePage.html"
}, {
    "name": "operationsRestaurantPage",
    "location": "operationsRestaurantPage.html"
}, {
    "name": "itemEditPage",
    "location": "itemEditPage.html"
}, {
    "name": "alertPage",
    "location": "alertPage.html"
}, {
    "name": "itemInventoryPage",
    "location": "itemInventoryPage.html"
}, {
    "name": "detailedReviewPage",
    "location": "detailedReviewPage.html"
}, {
    "name": "menuPage_old",
    "location": "menuPage_old.html"
}, {
    "name": "proprietorStatPage",
    "location": "proprietorStatPage.html"
}, {
    "name": "ratingInfoPage",
    "location": "ratingInfoPage.html"
}, {
    "name": "scannerPage",
    "location": "scannerPage.html"
}, {
    "name": "qrCodePage",
    "location": "qrCodePage.html"
}, {
    "name": "timeRangePage",
    "location": "timeRangePage.html"
}, {
    "name": "menuHistoryPage",
    "location": "menuHistoryPage.html"
}, {
    "name": "dinnerDrilldownSample",
    "location": "dinnerDrilldownSample.html"
}, {
    "name": "CSStestPage",
    "location": "CSStestPage.html"
}, {
    "name": "selectionHistoryPage",
    "location": "selectionHistoryPage.html"
}, {
    "name": "operationPrivateChefPage",
    "location": "operationPrivateChefPage.html"
}];

function tocPage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'tocHTML': 'tocPage_tocHTML'
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
    Apperyio.CurrentScreen = 'tocPage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var tocPage_onLoad = function() {
        tocPage_elementsExtraJS();
        tocPage_deviceEvents();
        tocPage_windowEvents();
        tocPage_elementsEvents();
    };
    // screen window events
    function tocPage_windowEvents() {
        $('#tocPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function tocPage_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function tocPage_elementsExtraJS() {
        // screen (tocPage) extra code
    };
    // screen elements handler
    function tocPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
    };
    $(document).off("pagebeforeshow", "#tocPage").on("pagebeforeshow", "#tocPage", function(event, ui) {
        Apperyio.CurrentScreen = "tocPage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    tocPage_onLoad();
};
$(document).off("pagecreate", "#tocPage").on("pagecreate", "#tocPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    tocPage_js();
});