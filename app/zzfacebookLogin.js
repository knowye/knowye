/*
 * JS for zzfacebookLogin generated by Appery.io
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

function zzfacebookLogin_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileimage_2': 'zzfacebookLogin_mobileimage_2',
        'scanMenuButton': 'zzfacebookLogin_scanMenuButton',
        'facebookButton': 'zzfacebookLogin_facebookButton',
        'loginButton': 'zzfacebookLogin_loginButton',
        'touGrid': 'zzfacebookLogin_touGrid',
        'touCell': 'zzfacebookLogin_touCell',
        'touLabel': 'zzfacebookLogin_touLabel'
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
    Apperyio.mappings["zzfacebookLogin_facebook_barcode_onbeforesend_mapping_0"] = {
        "homeScreen": "zzfacebookLogin",
        "directions": []
    };
    Apperyio.mappings["zzfacebookLogin_facebook_registerCustomerDevice_service_onbeforesend_mapping_0"] = {
        "homeScreen": "zzfacebookLogin",
        "directions": [
            {
                "from_name": "sessionToken",
                "from_type": "SESSION_STORAGE",
                "to_name": "facebook_registerCustomerDevice_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "Content-Type": "text/plain"
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
            },
            {
                "from_name": "deviceId",
                "from_type": "SESSION_STORAGE",
                "to_name": "facebook_registerCustomerDevice_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "Content-Type": "text/plain"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['parameters']['deviceid']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["zzfacebookLogin_facebook_userDetails_service_onsuccess_mapping_0"] = {
        "homeScreen": "zzfacebookLogin",
        "directions": [
            {
                "from_name": "facebook_userDetails_service",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "userName",
                "to_type": "SESSION_STORAGE",
                "mappings": [
                    {
                        "source": "$['body']['name']",
                        "target": "$"
                    }
                ]
            },
            {
                "from_name": "facebook_userDetails_service",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "itemPrefs",
                "to_type": "SESSION_STORAGE",
                "mappings": [
                    {
                        "source": "$['body']['includePrefs']",
                        "target": "$"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["zzfacebookLogin_facebook_userDetails_service_onbeforesend_mapping_0"] = {
        "homeScreen": "zzfacebookLogin",
        "directions": [
            {
                "from_name": "fb_access_token",
                "from_type": "SESSION_STORAGE",
                "to_name": "facebook_userDetails_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "Content-Type": "text/plain"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['parameters']['fb_access_token']"
                    }
                ]
            },
            {
                "from_name": "userId",
                "from_type": "LOCAL_STORAGE",
                "to_name": "facebook_userDetails_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "Content-Type": "text/plain"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['parameters']['user_id']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.facebook_barcode = Apperyio.datasources.facebook_barcode = new Apperyio.DataSource(zzBarcodeService, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["zzfacebookLogin_facebook_barcode_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            /* Barcode found */
            projectMdb1_settings.vendor_id = null;
            var vendor_id = urlParam('vendor', data.text);
            if (vendor_id) {
                projectMdb1_settings.vendor_id = vendor_id;
                isGuest = true;
                facebook_loginService.execute({
                    data: {
                        username: 'guest',
                        password: 'guest'
                    },
                    success: function(response) {
                        storageSet('userType', 'customer');
                        storageSet('menuHeading', null);
                        storageSet('headingSelectList', null);
                        storageSet('menuHierarchyList', null);
                        storageSet('userPrefs', null);
                        customerMode = true;
                        /* Register notification channel for guests with accounts */
                        if (window.cordova) {
                            storageSet('deviceId', device.uuid);
                            facebook_registerCustomerDevice_service.execute({});
                        }
                        //            Appery.navigateTo('navigatePage');
                        storageSet('sessionToken', response.sessionToken);
                        storageSet('userName', 'guest');
                        projectMdb1_settings.session_token = storageGet('sessionToken');
                        storageSet('vendorId', vendor_id);
                        Appery.navigateTo('menuPage_v2');
                    }
                });
            } else {
                navigator.notification.alert("Oops, I didn't see a QR code", null, "Problem");
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.facebook_loginService = Apperyio.datasources.facebook_loginService = new Apperyio.DataSource(projectMdb1_login_service, {
        "onBeforeSend": function(jqXHR) {},
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {},
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.facebook_registerCustomerDevice_service = Apperyio.datasources.facebook_registerCustomerDevice_service = new Apperyio.DataSource(registerCustomerDevice_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["zzfacebookLogin_facebook_registerCustomerDevice_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {},
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.facebook_userDetails_service = Apperyio.datasources.facebook_userDetails_service = new Apperyio.DataSource(facebookUserDetails_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["zzfacebookLogin_facebook_userDetails_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["zzfacebookLogin_facebook_userDetails_service_onsuccess_mapping_0"]);
            Apperyio.navigateTo('navigatePage', {
                reverse: false
            });
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'zzfacebookLogin';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var zzfacebookLogin_onLoad = function() {
        zzfacebookLogin_elementsExtraJS();
        zzfacebookLogin_deviceEvents();
        zzfacebookLogin_windowEvents();
        zzfacebookLogin_elementsEvents();
    };
    // screen window events
    function zzfacebookLogin_windowEvents() {
        $('#zzfacebookLogin').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function zzfacebookLogin_deviceEvents() {
        document.addEventListener("deviceready", function() {
            initialize_StatusBar_plugin();
        });
    };
    // screen elements extra js
    function zzfacebookLogin_elementsExtraJS() {
        // screen (zzfacebookLogin) extra code
    };
    // screen elements handler
    function zzfacebookLogin_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#zzfacebookLogin_mobilecontainerlogin [name="scanMenuButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        facebook_barcode.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                }
            },
        }, '#zzfacebookLogin_mobilecontainerlogin [name="scanMenuButton"]');
        $(document).off("click", '#zzfacebookLogin_mobilecontainerlogin [name="facebookButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Helper.init();
                }
            },
        }, '#zzfacebookLogin_mobilecontainerlogin [name="facebookButton"]');
        $(document).off("click", '#zzfacebookLogin_mobilecontainerlogin [name="loginButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('startScreen', {
                        reverse: false
                    });
                    console.log('window.location: ', window.location);
                }
            },
        }, '#zzfacebookLogin_mobilecontainerlogin [name="loginButton"]');
        $(document).off("click", '#zzfacebookLogin_mobilecontainerlogin [name="touLabel"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('touPage', {
                        transition: 'flip',
                        reverse: false
                    });
                }
            },
        }, '#zzfacebookLogin_mobilecontainerlogin [name="touLabel"]');
    };
    $(document).off("pagebeforeshow", "#zzfacebookLogin").on("pagebeforeshow", "#zzfacebookLogin", function(event, ui) {
        Apperyio.CurrentScreen = "zzfacebookLogin";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    zzfacebookLogin_onLoad();
};
$(document).off("pagecreate", "#zzfacebookLogin").on("pagecreate", "#zzfacebookLogin", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    zzfacebookLogin_js();
});