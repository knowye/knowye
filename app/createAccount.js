/*
 * JS for createAccount generated by Appery.io
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

function createAccount_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'backButtonCreateCustomer': 'createAccount_backButtonCreateCustomer',
        'html_2': 'createAccount_html_2',
        'accountTypeLabel': 'createAccount_accountTypeLabel',
        'userType': 'createAccount_userType',
        'userType-0': 'createAccount_userType-0',
        'loginField': 'createAccount_loginField',
        'phone': 'createAccount_phone',
        'passwordCreateCustomer': 'createAccount_passwordCreateCustomer',
        'confirmPasswordCustomer': 'createAccount_confirmPasswordCustomer',
        'mobilelabel_3': 'createAccount_mobilelabel_3',
        'zipcodeTextbox': 'createAccount_zipcodeTextbox',
        'html_multiselect': 'createAccount_html_multiselect',
        'errorLabel': 'createAccount_errorLabel',
        'passwordMismatchLabel': 'createAccount_passwordMismatchLabel',
        'zipcodevalidate': 'createAccount_zipcodevalidate',
        'accountCreateButton': 'createAccount_accountCreateButton'
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
    Apperyio.mappings["createAccount_createAccountService_onsuccess_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": [
            {
                "from_name": "createAccountService",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "sessionToken",
                "to_type": "SESSION_STORAGE",
                "mappings": [
                    {
                        "source": "$['body']['sessionToken']",
                        "target": "$"
                    }
                ]
            },
            {
                "from_name": "createAccountService",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "userId",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['body']['_id']",
                        "target": "$"
                    }
                ]
            },
            {
                "from_name": "createAccount",
                "from_type": "UI",
                "to_name": "userName",
                "to_type": "SESSION_STORAGE",
                "mappings": [
                    {
                        "source": "$['loginField:text']",
                        "target": "$"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["createAccount_createAccountService_onbeforesend_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": [
            {
                "from_name": "createAccount",
                "from_type": "UI",
                "to_name": "createAccountService",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {},
                    "body": {
                        "userType": "customer"
                    }
                },
                "mappings": [
                    {
                        "source": "$['loginField:text']",
                        "target": "$['body']['username']"
                    },
                    {
                        "source": "$['passwordCreateCustomer:text']",
                        "target": "$['body']['password']"
                    },
                    {
                        "source": "$['zipcodeTextbox:text']",
                        "target": "$['body']['zip']"
                    },
                    {
                        "source": "$['phone:text']",
                        "target": "$['body']['phone']"
                    }
                ]
            },
            {
                "from_name": "userPrefs",
                "from_type": "SESSION_STORAGE",
                "to_name": "createAccountService",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "Content-Type": "application/json"
                    },
                    "parameters": {},
                    "body": {
                        "userType": "customer"
                    }
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['body']['includePrefs']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["createAccount_createAccount_vendor_create_service_onsuccess_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": [
            {
                "from_name": "createAccount_vendor_create_service",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "vendorId",
                "to_type": "SESSION_STORAGE",
                "mappings": [
                    {
                        "source": "$['body']['_id']",
                        "target": "$"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["createAccount_createAccount_vendor_create_service_onbeforesend_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": [
            {
                "from_name": "sessionToken",
                "from_type": "SESSION_STORAGE",
                "to_name": "createAccount_vendor_create_service",
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
                        "target": "$['headers']['X-Appery-Session-Token']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["createAccount_createAccount_user_update_service_onsuccess_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": []
    };
    Apperyio.mappings["createAccount_createAccount_user_update_service_onbeforesend_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": [
            {
                "from_name": "userId",
                "from_type": "LOCAL_STORAGE",
                "to_name": "createAccount_user_update_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "X-Appery-Session-Token": "{session_token}"
                    },
                    "parameters": {},
                    "body": {
                        "vendor_lk": {
                            "collName": "vendor"
                        },
                        "birthMonth": 1,
                        "birthDay": 1
                    }
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['parameters']['userId']"
                    }
                ]
            },
            {
                "from_name": "vendorId",
                "from_type": "SESSION_STORAGE",
                "to_name": "createAccount_user_update_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "X-Appery-Session-Token": "{session_token}"
                    },
                    "parameters": {},
                    "body": {
                        "vendor_lk": {
                            "collName": "vendor"
                        },
                        "birthMonth": 1,
                        "birthDay": 1
                    }
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['body']['vendor_lk']['_id']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["createAccount_createAccount_clearOrder_service_onsuccess_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": []
    };
    Apperyio.mappings["createAccount_createAccount_clearOrder_service_onbeforesend_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": [
            {
                "to_name": "createAccount_clearOrder_service",
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
    Apperyio.mappings["createAccount_createAccount_registerCustomerDevice_service_onsuccess_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": []
    };
    Apperyio.mappings["createAccount_createAccount_registerCustomerDevice_service_onbeforesend_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": [
            {
                "from_name": "sessionToken",
                "from_type": "SESSION_STORAGE",
                "to_name": "createAccount_registerCustomerDevice_service",
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
                "to_name": "createAccount_registerCustomerDevice_service",
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

    Apperyio.mappings["createAccount_createAccount_geolocation_service_onsuccess_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": [
            {
                "from_name": "createAccount_geolocation_service",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "coords",
                "to_type": "SESSION_STORAGE",
                "mappings": [
                    {
                        "source": "$['data']['coords']['latitude']",
                        "target": "$['Latitude']"
                    },
                    {
                        "source": "$['data']['coords']['longitude']",
                        "target": "$['Longitude']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["createAccount_createAccount_geolocation_service_onbeforesend_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": [
            {
                "to_name": "createAccount_geolocation_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "data": {
                        "options": {
                            "maximumAge": 3000,
                            "timeout": 5000,
                            "enableHighAccuracy": true,
                            "watchPosition": false
                        }
                    }
                },
                "mappings": []
            }
        ]
    };
    Apperyio.mappings["createAccount_createAccount_category_service_onsuccess_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": []
    };
    Apperyio.mappings["createAccount_createAccount_category_service_onbeforesend_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": [
            {
                "from_name": "sessionToken",
                "from_type": "SESSION_STORAGE",
                "to_name": "createAccount_category_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "X-Appery-Session-Token": "{session_token}"
                    },
                    "parameters": {
                        "where": "{\"is_category\": true}"
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
    Apperyio.mappings["createAccount_createAccount_user_pref_category_service_onsuccess_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": [
            {
                "from_name": "createAccount_user_pref_category_service",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "prefType",
                "to_type": "SESSION_STORAGE",
                "mappings": [
                    {
                        "source": "$['body']",
                        "target": "$"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["createAccount_createAccount_user_pref_category_service_onbeforesend_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": []
    };
    Apperyio.mappings["createAccount_createAccount_user_update_pref_category_service_onsuccess_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": []
    };
    Apperyio.mappings["createAccount_createAccount_user_update_pref_category_service_onbeforesend_mapping_0"] = {
        "homeScreen": "createAccount",
        "directions": [
            {
                "from_name": "sessionToken",
                "from_type": "SESSION_STORAGE",
                "to_name": "createAccount_user_update_pref_category_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
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
                "from_name": "preferences",
                "from_type": "SESSION_STORAGE",
                "to_name": "createAccount_user_update_pref_category_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$['categories']",
                        "target": "$['body']['preferences']['categories']"
                    },
                    {
                        "source": "$['caracteristics']",
                        "target": "$['body']['preferences']['caracteristics']"
                    }
                ]
            },
            {
                "from_name": "userId",
                "from_type": "LOCAL_STORAGE",
                "to_name": "createAccount_user_update_pref_category_service",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['parameters']['userId']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.createAccountService = Apperyio.datasources.createAccountService = new Apperyio.DataSource(projectMdb1_signup_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccountService_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccountService_onsuccess_mapping_0"]);
            projectMdb1_settings.session_token = storageGet('sessionToken');
            storageSet('userType', 'customer');
            customerMode = true;
            isGuest = false;
            if (wasGuest) {
                wasGuest = false;
            } else {
                storageSet('currentOrder', Apperyio.getModel('currentOrder'));
            }
            // createAccount_user_update_pref_category_service.execute({});
            if (window.cordova) {
                storageSet('deviceId', device.uuid);
                createAccount_registerCustomerDevice_service.execute({});
            }
            Apperyio.navigateTo('profilePage');
            ;
        },
        "onError": function(jqXHR, textStatus, errorThrown) {
            showErrorMessage(jqXHR.responseJSON.description);
        }
    });
    window.createAccount_vendor_create_service = Apperyio.datasources.createAccount_vendor_create_service = new Apperyio.DataSource(projectMdb1_vendor_create_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_vendor_create_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_vendor_create_service_onsuccess_mapping_0"]);
            try {
                createAccount_user_update_service.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.createAccount_user_update_service = Apperyio.datasources.createAccount_user_update_service = new Apperyio.DataSource(projectMdb1_user_update_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_user_update_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_user_update_service_onsuccess_mapping_0"]);
            if (!customerMode) {
                Apperyio.navigateTo('operationsRestaurantPage');
            } else {
                Apperyio.navigateTo('profilePage');
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.createAccount_clearOrder_service = Apperyio.datasources.createAccount_clearOrder_service = new Apperyio.DataSource(clearOrder_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_clearOrder_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_clearOrder_service_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.createAccount_registerCustomerDevice_service = Apperyio.datasources.createAccount_registerCustomerDevice_service = new Apperyio.DataSource(registerCustomerDevice_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_registerCustomerDevice_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_registerCustomerDevice_service_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.createAccount_geolocation_service = Apperyio.datasources.createAccount_geolocation_service = new Apperyio.DataSource(GeolocationService, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_geolocation_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_geolocation_service_onsuccess_mapping_0"]);
            performReverseGeoCode(data.coords.latitude, data.coords.longitude, function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                if (data.postal) {
                    $('input[name=zipcodeTextbox]').val(data.postal);
                } else {
                    console.log('zip code not available');
                }
            });
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.createAccount_category_service = Apperyio.datasources.createAccount_category_service = new Apperyio.DataSource(projectMdb1_property_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_category_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_category_service_onsuccess_mapping_0"]);
            buildMultiPrefsDropdown(Apperyio('html_multiselect'), 'prefPage_selectPrefs', 'userPrefs');
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.createAccount_user_pref_category_service = Apperyio.datasources.createAccount_user_pref_category_service = new Apperyio.DataSource(getUserPrefs_DEV_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_user_pref_category_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_user_pref_category_service_onsuccess_mapping_0"]);
            buildMultiPrefsDropdownCreateAccount(Apperyio('html_multiselect'), 'prefPage_selectPrefs', 'userPrefs');
            setTimeout(function() {
                $("a[id=prefPage_selectPrefs-button]").css("background-color", "transparent");
                $("a[id=prefPage_selectPrefs-button]:active").css("background-color", "transparent");
                $("a[id=prefPage_selectPrefs-button]").css("border-radius", "10px");
                $("a[id=prefPage_selectPrefs-button]").css("border-width", "3px");
                $("a[id=prefPage_selectPrefs-button]").css("border-color", "white");
                // $("a[id=prefPage_selectPrefs-button]").css("margin-right", "7px");
                // $("a[id=prefPage_selectPrefs-button]").css("margin-left", "6px");
                $("a[id=prefPage_selectPrefs-button]").css("padding", "7px");
                // border-radius: 10px !important;
                // border-width: 3px !important;
                // border-color: white !important;
            }, 500);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.createAccount_user_update_pref_category_service = Apperyio.datasources.createAccount_user_update_pref_category_service = new Apperyio.DataSource(projectMdb1_user_preferences_update, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_user_update_pref_category_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["createAccount_createAccount_user_update_pref_category_service_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'createAccount';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var createAccount_onLoad = function() {
        createAccount_elementsExtraJS();
        if (storageGet('userName') === 'guest') {
            //storageSet('wasGuest', true);
            wasGuest = true;
        }
        $('a[name=accountCreateButton]').css('font-size', '14.5px');
        $('a[name=accountCreateButton]').css('margin', '0');
        try {
            createAccount_user_pref_category_service.execute({});
        } catch (e) {
            console.error(e);
            hideSpinner();
        };
        try {
            createAccount_geolocation_service.execute({});
        } catch (e) {
            console.error(e);
            hideSpinner();
        };
        createAccount_deviceEvents();
        createAccount_windowEvents();
        createAccount_elementsEvents();
    };
    // screen window events
    function createAccount_windowEvents() {
        $('#createAccount').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function createAccount_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function createAccount_elementsExtraJS() {
        // screen (createAccount) extra code
        /* userType */
        $("#createAccount_userType").parent().find("a.ui-btn").attr("tabindex", "7");
    };
    // screen elements handler
    function createAccount_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#createAccount_createAccountCustomerHeader [name="backButtonCreateCustomer"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('startScreen', {
                        transition: 'slide',
                        reverse: true
                    });
                }
            },
        }, '#createAccount_createAccountCustomerHeader [name="backButtonCreateCustomer"]');
        $(document).off("input", '#createAccount_createAccountCustomerContainer [name="loginField"]').on({
            input: function(event) {
                Apperyio('errorLabel').hide();
            },
        }, '#createAccount_createAccountCustomerContainer [name="loginField"]');
        $(document).off("input", '#createAccount_createAccountCustomerContainer [name="passwordCreateCustomer"]').on({
            input: function(event) { //passwardMatchingValidate();
            },
        }, '#createAccount_createAccountCustomerContainer [name="passwordCreateCustomer"]');
        $(document).off("input", '#createAccount_createAccountCustomerContainer [name="confirmPasswordCustomer"]').on({
            input: function(event) { // passwardMatchingValidate();
            },
        }, '#createAccount_createAccountCustomerContainer [name="confirmPasswordCustomer"]');
        $(document).off("click", '#createAccount_createAccountCustomerContainer [name="accountCreateButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    if (verifyEmail() && isStrongPassword(Apperyio('passwordCreateCustomer').val(), Apperyio('confirmPasswordCustomer').val())) {
                        // if ($('input[name=zipcodeTextbox]').val() === '') {
                        // $('div[name=zipcodevalidate]').show();
                        // return;
                        // }
                        var zip = Apperyio('zipcodeTextbox').val();
                        if (zip === '') {
                            showErrorMessage('please provide zip code', Apperyio('errorLabel'));
                            return;
                        }
                        if (zip.length !== 5) {
                            showErrorMessage('please provide a valid zip code', Apperyio('errorLabel'));
                            return;
                        }
                        var phone = Apperyio('phone').val();
                        if (!isPhoneValid(phone)) {
                            showErrorMessage('please provide a valid format phone e.g. +XXXXXXXXXXX', Apperyio('errorLabel'));
                            return;
                        }
                        createAccountService.execute({});
                    };
                }
            },
        }, '#createAccount_createAccountCustomerContainer [name="accountCreateButton"]');
    };
    $(document).off("pagebeforeshow", "#createAccount").on("pagebeforeshow", "#createAccount", function(event, ui) {
        Apperyio.CurrentScreen = "createAccount";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    createAccount_onLoad();
};
$(document).off("pagecreate", "#createAccount").on("pagecreate", "#createAccount", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    createAccount_js();
});