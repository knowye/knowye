/*
 * JS for zzqrCodePage generated by Appery.io
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
    "name": "aboutPage",
    "location": "aboutPage.html"
}, {
    "name": "itemDetailsPage",
    "location": "itemDetailsPage.html"
}, {
    "name": "menuHeadingManagePage",
    "location": "menuHeadingManagePage.html"
}, {
    "name": "proprietorAnalyticsPage",
    "location": "proprietorAnalyticsPage.html"
}, {
    "name": "zzpromoEdit",
    "location": "zzpromoEdit.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "itemPage",
    "location": "itemPage.html"
}, {
    "name": "zzpromoManage",
    "location": "zzpromoManage.html"
}, {
    "name": "zzscannerPage",
    "location": "zzscannerPage.html"
}, {
    "name": "zztimeRangePage",
    "location": "zztimeRangePage.html"
}, {
    "name": "selectedPage",
    "location": "selectedPage.html"
}, {
    "name": "zzCSStestPage",
    "location": "zzCSStestPage.html"
}, {
    "name": "zzmenuPage",
    "location": "zzmenuPage.html"
}, {
    "name": "menuHistoryPage",
    "location": "menuHistoryPage.html"
}, {
    "name": "faqPage",
    "location": "faqPage.html"
}, {
    "name": "zzratingInfoPage",
    "location": "zzratingInfoPage.html"
}, {
    "name": "orderHistoryPage",
    "location": "orderHistoryPage.html"
}, {
    "name": "createAccount",
    "location": "createAccount.html"
}, {
    "name": "itemManagePage",
    "location": "itemManagePage.html"
}, {
    "name": "proprietorStartPage",
    "location": "proprietorStartPage.html"
}, {
    "name": "operationsRestaurantPage",
    "location": "operationsRestaurantPage.html"
}, {
    "name": "zzdetailedReviewPage",
    "location": "zzdetailedReviewPage.html"
}, {
    "name": "itemEditPage",
    "location": "itemEditPage.html"
}, {
    "name": "selectionHistoryPage",
    "location": "selectionHistoryPage.html"
}, {
    "name": "zzproprietorStatPage",
    "location": "zzproprietorStatPage.html"
}, {
    "name": "zzitemInventoryPage",
    "location": "zzitemInventoryPage.html"
}, {
    "name": "zzalertPage",
    "location": "zzalertPage.html"
}, {
    "name": "zzsearchPage",
    "location": "zzsearchPage.html"
}, {
    "name": "menuPage_v2",
    "location": "menuPage_v2.html"
}, {
    "name": "zzqrCodePage",
    "location": "zzqrCodePage.html"
}, {
    "name": "profilePage",
    "location": "profilePage.html"
}, {
    "name": "filterPage",
    "location": "filterPage.html"
}, {
    "name": "easterEggPage",
    "location": "easterEggPage.html"
}, {
    "name": "helpPage",
    "location": "helpPage.html"
}, {
    "name": "navigatePage",
    "location": "navigatePage.html"
}, {
    "name": "menuPreviewPage",
    "location": "menuPreviewPage.html"
}, {
    "name": "zzfacebookLogin",
    "location": "zzfacebookLogin.html"
}, {
    "name": "menu_shared",
    "location": "menu_shared.html"
}, {
    "name": "logoutPage",
    "location": "logoutPage.html"
}, {
    "name": "favoritesPage",
    "location": "favoritesPage.html"
}, {
    "name": "proprietorPage",
    "location": "proprietorPage.html"
}, {
    "name": "wishListPage",
    "location": "wishListPage.html"
}, {
    "name": "menuManagementPage",
    "location": "menuManagementPage.html"
}, {
    "name": "touPage",
    "location": "touPage.html"
}, {
    "name": "zzsettingsPage",
    "location": "zzsettingsPage.html"
}];


function zzqrCodePage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'homeButton': 'zzqrCodePage_homeButton',
        'ownerNameLabel': 'zzqrCodePage_ownerNameLabel',
        'qrImage': 'zzqrCodePage_qrImage',
        'qrcodeDownload': 'zzqrCodePage_qrcodeDownload',
        'html_3': 'zzqrCodePage_html_3',
        'menuUrl': 'zzqrCodePage_menuUrl',
        'urlCopiedLabel': 'zzqrCodePage_urlCopiedLabel'
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
    Apperyio.mappings["zzqrCodePage_zzqrCodePage_onload_mapping_1"] = {
        "homeScreen": "zzqrCodePage",
        "directions": [
            {
                "from_name": "currentVendor",
                "from_type": "SESSION_STORAGE",
                "to_name": "zzqrCodePage",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['businessName']",
                        "target": "$['ownerNameLabel:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    Apperyio.CurrentScreen = 'zzqrCodePage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var zzqrCodePage_onLoad = function() {
        zzqrCodePage_elementsExtraJS();
        var generatorUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=',
            //url = 'https://appery.io/app/view/6f6b5cb3-e481-4b12-be3f-dd8cecd1ca07/app/startScreen.html?vendor=' 
            url = 'https://knowye.app.appery.io/app/startScreen.html?vendor=' + projectMdb1_settings.vendor_id;
        finalUrl = generatorUrl + encodeURIComponent(url);
        Apperyio('menuUrl').prop('href', url);
        Apperyio('qrImage').find('img').prop('src', finalUrl);
        Apperyio('qrcodeDownload').find('a').prop('href', finalUrl);
        /*
        var clipboard = new Clipboard('.clipboard-btn',{
            text: function(trigger) {
                return url;
            }
        });

        clipboard.on('success', function(e) {
            showPopupWithTimout('confirmCopyPopup', confirmCopyPopupTime);
            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            console.error('Trigger:', e.trigger);
        });
        */
        ;
        Apperyio.processMappingAction(Apperyio.mappings["zzqrCodePage_zzqrCodePage_onload_mapping_1"]);
        zzqrCodePage_deviceEvents();
        zzqrCodePage_windowEvents();
        zzqrCodePage_elementsEvents();
    };
    // screen window events
    function zzqrCodePage_windowEvents() {
        $('#zzqrCodePage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function zzqrCodePage_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function zzqrCodePage_elementsExtraJS() {
        // screen (zzqrCodePage) extra code
        /* confirmCopyPopup */
        $("#zzqrCodePage_confirmCopyPopup").popup("option", "positionTo", "window");
    };
    // screen elements handler
    function zzqrCodePage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#zzqrCodePage_qrCodePageHeader [name="homeButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('proprietorStartPage', {
                        transition: 'slidedown',
                        reverse: false
                    });
                }
            },
        }, '#zzqrCodePage_qrCodePageHeader [name="homeButton"]');
        $(document).off("taphold", '#zzqrCodePage_qrCodePageContainer [name="menuUrl"]').on({
            taphold: function(event) { //Apperyio('clipboardBtn').click();
                //$(".clipboard-btn").click();
                if (isPhone) {
                    copy('https://appery.io/app/view/6f6b5cb3-e481-4b12-be3f-dd8cecd1ca07/startScreen.html?vendor=' + projectMdb1_settings.vendor_id);
                    return false;
                }
                //$(".clipboard-btn").click();
                ;
            },
        }, '#zzqrCodePage_qrCodePageContainer [name="menuUrl"]');
    };
    $(document).off("pagebeforeshow", "#zzqrCodePage").on("pagebeforeshow", "#zzqrCodePage", function(event, ui) {
        Apperyio.CurrentScreen = "zzqrCodePage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    zzqrCodePage_onLoad();
};
$(document).off("pagecreate", "#zzqrCodePage").on("pagecreate", "#zzqrCodePage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    zzqrCodePage_js();
});