/*
 * JS for proprietorPage generated by Appery.io
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
    "name": "qrCodePage",
    "location": "qrCodePage.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "facebookLogin",
    "location": "facebookLogin.html"
}, {
    "name": "promoManage",
    "location": "promoManage.html"
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
    "name": "settingsPage",
    "location": "settingsPage.html"
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
    "name": "promoEdit",
    "location": "promoEdit.html"
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
    "name": "searchPage",
    "location": "searchPage.html"
}, {
    "name": "itemEditPage",
    "location": "itemEditPage.html"
}, {
    "name": "proprietorStatPage",
    "location": "proprietorStatPage.html"
}, {
    "name": "detailedReviewPage",
    "location": "detailedReviewPage.html"
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
    "name": "ratingInfoPage",
    "location": "ratingInfoPage.html"
}, {
    "name": "timeRangePage",
    "location": "timeRangePage.html"
}, {
    "name": "scannerPage",
    "location": "scannerPage.html"
}, {
    "name": "CSStestPage",
    "location": "CSStestPage.html"
}, {
    "name": "menuHistoryPage",
    "location": "menuHistoryPage.html"
}, {
    "name": "menuPage",
    "location": "menuPage.html"
}, {
    "name": "itemInventoryPage",
    "location": "itemInventoryPage.html"
}, {
    "name": "alertPage",
    "location": "alertPage.html"
}];

function proprietorPage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'navigateButton': 'proprietorPage_navigateButton',
        'html_56': 'proprietorPage_html_56',
        'photoGrid': 'proprietorPage_photoGrid',
        'photoCell': 'proprietorPage_photoCell',
        'proprietorImage': 'proprietorPage_proprietorImage',
        'detailGrid': 'proprietorPage_detailGrid',
        'imageCell': 'proprietorPage_imageCell',
        'detailCell': 'proprietorPage_detailCell',
        'mobilelabel_43': 'proprietorPage_mobilelabel_43',
        'aboveAvgLabel': 'proprietorPage_aboveAvgLabel',
        'SCOREPLACEHOLDER': 'proprietorPage_SCOREPLACEHOLDER',
        'menuLink': 'proprietorPage_menuLink',
        'businessName': 'proprietorPage_businessName',
        'addressGrid': 'proprietorPage_addressGrid',
        'addressCell': 'proprietorPage_addressCell',
        'streetAddress1': 'proprietorPage_streetAddress1',
        'streetAddress2': 'proprietorPage_streetAddress2',
        'cityStateZipGrid': 'proprietorPage_cityStateZipGrid',
        'cityCell': 'proprietorPage_cityCell',
        'city': 'proprietorPage_city',
        'stateCell': 'proprietorPage_stateCell',
        'state': 'proprietorPage_state',
        'zipCell': 'proprietorPage_zipCell',
        'zip': 'proprietorPage_zip',
        'phone': 'proprietorPage_phone',
        'website': 'proprietorPage_website',
        'vendorDescription': 'proprietorPage_vendorDescription',
        'hoursGrid': 'proprietorPage_hoursGrid',
        'hoursCell': 'proprietorPage_hoursCell',
        'hoursLabel': 'proprietorPage_hoursLabel',
        'hoursGrid2': 'proprietorPage_hoursGrid2',
        'mobilegridcell_50': 'proprietorPage_mobilegridcell_50',
        'openLabelCell': 'proprietorPage_openLabelCell',
        'openLabel': 'proprietorPage_openLabel',
        'closeLabelCell': 'proprietorPage_closeLabelCell',
        'closeLabel': 'proprietorPage_closeLabel',
        'mondayLabelCell': 'proprietorPage_mondayLabelCell',
        'mondayLabel': 'proprietorPage_mondayLabel',
        'mondayOpenLabelCell': 'proprietorPage_mondayOpenLabelCell',
        'mondayOpenLabel': 'proprietorPage_mondayOpenLabel',
        'mondayCloseLabelCell': 'proprietorPage_mondayCloseLabelCell',
        'mondayCloseLabel': 'proprietorPage_mondayCloseLabel',
        'tuesdayLabelCell': 'proprietorPage_tuesdayLabelCell',
        'tuesdayLabel': 'proprietorPage_tuesdayLabel',
        'mobilegridcell_55': 'proprietorPage_mobilegridcell_55',
        'tuesdayOpenLabel': 'proprietorPage_tuesdayOpenLabel',
        'tuesdayCloseLabelCell': 'proprietorPage_tuesdayCloseLabelCell',
        'tuesdayCloseLabel': 'proprietorPage_tuesdayCloseLabel',
        'wednesdayLabelCell': 'proprietorPage_wednesdayLabelCell',
        'wednesdayLabel': 'proprietorPage_wednesdayLabel',
        'wednesdayOpenLabelCell': 'proprietorPage_wednesdayOpenLabelCell',
        'wednesdayOpenLabel': 'proprietorPage_wednesdayOpenLabel',
        'wednesdayCloseLabelCell': 'proprietorPage_wednesdayCloseLabelCell',
        'wednesdayCloseLabel': 'proprietorPage_wednesdayCloseLabel',
        'thursdayLabelCell': 'proprietorPage_thursdayLabelCell',
        'thursdayLabel': 'proprietorPage_thursdayLabel',
        'thursdayOpenLabelCell': 'proprietorPage_thursdayOpenLabelCell',
        'thursdayOpenLabel': 'proprietorPage_thursdayOpenLabel',
        'thursdayCloseLabelCell': 'proprietorPage_thursdayCloseLabelCell',
        'thursdayCloseLabel': 'proprietorPage_thursdayCloseLabel',
        'fridayLabelCell': 'proprietorPage_fridayLabelCell',
        'fridayLabel': 'proprietorPage_fridayLabel',
        'fridayOpenLabelCell': 'proprietorPage_fridayOpenLabelCell',
        'fridayOpenLabel': 'proprietorPage_fridayOpenLabel',
        'fridayCloseLabelCell': 'proprietorPage_fridayCloseLabelCell',
        'fridayCloseLabel': 'proprietorPage_fridayCloseLabel',
        'saturdayLabelCell': 'proprietorPage_saturdayLabelCell',
        'saturdayLabel': 'proprietorPage_saturdayLabel',
        'saturdayOpenLabelCell': 'proprietorPage_saturdayOpenLabelCell',
        'saturdayOpenLabel': 'proprietorPage_saturdayOpenLabel',
        'saturdayCloseLabelCell': 'proprietorPage_saturdayCloseLabelCell',
        'saturdayCloseLabel': 'proprietorPage_saturdayCloseLabel',
        'sundayLabelCell': 'proprietorPage_sundayLabelCell',
        'sundayLabel': 'proprietorPage_sundayLabel',
        'sundayOpenLabelCell': 'proprietorPage_sundayOpenLabelCell',
        'sundayOpenLabel': 'proprietorPage_sundayOpenLabel',
        'sundayCloseLabelCell': 'proprietorPage_sundayCloseLabelCell',
        'sundayCloseLabel': 'proprietorPage_sundayCloseLabel',
        'openCloseGrid': 'proprietorPage_openCloseGrid',
        'spacingCell': 'proprietorPage_spacingCell',
        'openCell': 'proprietorPage_openCell',
        'closeCell': 'proprietorPage_closeCell',
        'addFavoriteButton': 'proprietorPage_addFavoriteButton',
        'copyLinkButton': 'proprietorPage_copyLinkButton',
        'feedbackButton': 'proprietorPage_feedbackButton'
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
    Apperyio.mappings["proprietorPage_proprietorPage_vendor_read_service_onbeforesend_mapping_0"] = {
        "homeScreen": "proprietorPage",
        "directions": [{
            "from_name": "currentVendor",
            "from_type": "SESSION_STORAGE",
            "to_name": "proprietorPage_vendor_read_service",
            "to_type": "SERVICE_REQUEST",
            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}",
                    "X-Appery-Session-Token": "{session_token}"
                },
                "parameters": {
                    "include": "state,country"
                },
                "body": null
            },
            "mappings": [{
                "source": "$['id']",
                "target": "$['parameters']['_id']"
            }]
        }, {
            "from_name": "currentVendor",
            "from_type": "SESSION_STORAGE",
            "to_name": "proprietorPage",
            "to_type": "UI",
            "mappings": [{
                "source": "$['businessName']",
                "target": "$['businessName:text']"
            }, {
                "source": "$['vendorDescription']",
                "target": "$['vendorDescription:text']"
            }]
        }]
    };
    
    
    //! Request -------------
      Apperyio.mappings["proprietorPage_proprietorPage_vendor_server_read_service_onbeforesend_mapping_0"] = {
        "homeScreen": "proprietorPage",
        "directions": [{
            "from_name": "currentVendor",
            "from_type": "SESSION_STORAGE",
            "to_name": "proprietorPage_vendor_server_read_service",
            "to_type": "SERVICE_REQUEST",
            "to_default": {
                "headers": {
                },
                "parameters": {
                    // "include": "state,country"
                },
                "body": null
            },
            "mappings": [{
                "source": "$['id']",
                "target": "$['parameters']['vendor_id']"
            }]
        }, {
            "from_name": "currentVendor",
            "from_type": "SESSION_STORAGE",
            "to_name": "proprietorPage",
            "to_type": "UI",
            "mappings": [{
                "source": "$['businessName']",
                "target": "$['businessName:text']"
            }, {
                "source": "$['vendorDescription']",
                "target": "$['vendorDescription:text']"
            }]
        }]
    };
    
    
    
    
    
    
    Apperyio.mappings["proprietorPage_proprietorPage_vendor_read_service_onsuccess_mapping_0"] = {
        "homeScreen": "proprietorPage",
        "directions": [{
            "from_name": "proprietorPage_vendor_read_service",
            "from_type": "SERVICE_RESPONSE",
            "to_name": "proprietorPage",
            "to_type": "UI",
            "mappings": [{
                "source": "$['body']['businessName']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['businessName:text']"
            }, {
                "source": "$['body']['city']",
                "target_transformation": function(value, element) {
                    return value + ',' || '';
                },
                "target": "$['city:text']"
            }, {
                "source": "$['body']['streetAddress1']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['streetAddress1:text']"
            }, {
                "source": "$['body']['streetAddress2']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['streetAddress2:text']"
            }, {
                "source": "$['body']['zip']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['zip:text']"
            }, {
                "source": "$['body']['phone']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['phone:text']"
            }, {
                "source": "$['body']['phone']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['phone:text']"
            }, {
                "source": "$['body']['website']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['website:text']"
            }, {
                "source": "$['body']['vendorDescription']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['vendorDescription:text']"
            }, {
                "source": "$['body']['mondayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['mondayOpenLabel:text']"
            }, {
                "source": "$['body']['tuesdayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['tuesdayOpenLabel:text']"
            }, {
                "source": "$['body']['wednesdayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['wednesdayOpenLabel:text']"
            }, {
                "source": "$['body']['thursdayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['thursdayOpenLabel:text']"
            }, {
                "source": "$['body']['fridayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['fridayOpenLabel:text']"
            }, {
                "source": "$['body']['saturdayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['saturdayOpenLabel:text']"
            }, {
                "source": "$['body']['mondayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['mondayCloseLabel:text']"
            }, {
                "source": "$['body']['tuesdayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['tuesdayCloseLabel:text']"
            }, {
                "source": "$['body']['wednesdayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['wednesdayCloseLabel:text']"
            }, {
                "source": "$['body']['thursdayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['thursdayCloseLabel:text']"
            }, {
                "source": "$['body']['fridayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['fridayCloseLabel:text']"
            }, {
                "source": "$['body']['saturdayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['saturdayCloseLabel:text']"
            }, {
                "source": "$['body']['sundayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['sundayCloseLabel:text']"
            }, {
                "source": "$['body']['state']['abbreviation']",
                "target_transformation": function(value, element) {
                    return value + ','|| '';
                },
                "target": "$['state:text']"
            }, {
                "source": "$['body']['sundayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['sundayOpenLabel:text']"
            }, {
                "source": "$['body']['vendorImage']['fileName']",
                "target_transformation": function(value, element) {
                    if (value) {
                        return "https://api.appery.io/rest/1/db/files/" + Settings.database_id + "/" + value;
                    } else {
                        return NO_IMAGE_URL;
                    }
                },
                "target": "$['proprietorImage:image']"
            }, {
                "source": "$['body']['vendorImage']['fileName']",
                "target_transformation": function(value, element) {
                    return value ? true : false;
                },
                "target": "$['proprietorImage:visible']"
            }]
        }]
    };
    
    
    
    
    //!---- Server Code - Response
    
    
    Apperyio.mappings["proprietorPage_proprietorPage_vendor_server_read_service_onsuccess_mapping_0"] = {
        "homeScreen": "proprietorPage",
        "directions": [{
            "from_name": "proprietorPage_vendor_server_read_service",
            "from_type": "SERVICE_RESPONSE",
            "to_name": "proprietorPage",
            "to_type": "UI",
            "mappings": [{
                "source": "$['body']['businessName']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['businessName:text']"
            }, {
                "source": "$['body']['city']",
                "target_transformation": function(value, element) {
                    return value + ',' || '';
                },
                "target": "$['city:text']"
            }, {
                "source": "$['body']['streetAddress1']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['streetAddress1:text']"
            }, {
                "source": "$['body']['streetAddress2']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['streetAddress2:text']"
            }, {
                "source": "$['body']['zip']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['zip:text']"
            }, {
                "source": "$['body']['phone']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['phone:text']"
            }, {
                "source": "$['body']['website']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['website:text']"
            }, {
                "source": "$['body']['vendorDescription']",
                "target_transformation": function(value, element) {
                    return value || '';
                },
                "target": "$['vendorDescription:text']"
            }, {
                "source": "$['body']['mondayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['mondayOpenLabel:text']"
            }, {
                "source": "$['body']['tuesdayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['tuesdayOpenLabel:text']"
            }, {
                "source": "$['body']['wednesdayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['wednesdayOpenLabel:text']"
            }, {
                "source": "$['body']['thursdayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['thursdayOpenLabel:text']"
            }, {
                "source": "$['body']['fridayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['fridayOpenLabel:text']"
            }, {
                "source": "$['body']['saturdayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['saturdayOpenLabel:text']"
            }, {
                "source": "$['body']['mondayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['mondayCloseLabel:text']"
            }, {
                "source": "$['body']['tuesdayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['tuesdayCloseLabel:text']"
            }, {
                "source": "$['body']['wednesdayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['wednesdayCloseLabel:text']"
            }, {
                "source": "$['body']['thursdayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['thursdayCloseLabel:text']"
            }, {
                "source": "$['body']['fridayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['fridayCloseLabel:text']"
            }, {
                "source": "$['body']['saturdayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['saturdayCloseLabel:text']"
            }, {
                "source": "$['body']['sundayClose']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['sundayCloseLabel:text']"
            }, {
                "source": "$['body']['state']['abbreviation']",
                "target_transformation": function(value, element) {
                    return value + ',' || '';
                },
                "target": "$['state:text']"
            }, {
                "source": "$['body']['sundayOpen']",
                "target_transformation": function(value, element) {
                    return value ? convertTime24to12(value) : '';
                },
                "target": "$['sundayOpenLabel:text']"
            }, {
                "source": "$['body']['vendorImage']['fileName']",
                "target_transformation": function(value, element) {
                    if (value) {
                        return "https://api.appery.io/rest/1/db/files/" + Settings.database_id + "/" + value;
                    } else {
                        return NO_IMAGE_URL;
                    }
                },
                "target": "$['proprietorImage:image']"
            }, {
                "source": "$['body']['vendorImage']['fileName']",
                "target_transformation": function(value, element) {
                    return value ? true : false;
                },
                "target": "$['proprietorImage:visible']"
            }]
        }]
    };
    
    
    
    
    Apperyio.datasources = Apperyio.datasources || {};
    window.proprietorPage_vendor_read_service = Apperyio.datasources.proprietorPage_vendor_read_service = new Apperyio.DataSource(projectMdb1_vendor_read_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["proprietorPage_proprietorPage_vendor_read_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {},
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["proprietorPage_proprietorPage_vendor_read_service_onsuccess_mapping_0"]);
            //var week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
            //_.each(week, function(value)
            //{
            //	Apperyio(value).text((data[value + 'Open'] || '') + ' - ' + (data[value + 'Close'] || ''));
            //});
            //!------------- Adding background image
            console.log("https://api.appery.io/rest/1/db/files/${Settings.database_id}/${data.vendorImage.fileName}");
            $("div[name=view-image-propietor]").css("background-image", "url(https://api.appery.io/rest/1/db/files/${Settings.database_id}/${data.vendorImage.fileName})");
            $("div[name=view-image-propietor]").css("background-color", "");
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    
    
    //! Datasource ------------- Server code implementation
    window.proprietorPage_vendor_server_read_service = Apperyio.datasources.proprietorPage_vendor_server_read_service = new Apperyio.DataSource(GetVendorById_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["proprietorPage_proprietorPage_vendor_server_read_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {},
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["proprietorPage_proprietorPage_vendor_server_read_service_onsuccess_mapping_0"]);
            //var week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
            //_.each(week, function(value)
            //{
            //	Apperyio(value).text((data[value + 'Open'] || '') + ' - ' + (data[value + 'Close'] || ''));
            //});
            //!------------- Adding background image
            console.log("https://api.appery.io/rest/1/db/files/${Settings.database_id}/${data.vendorImage.fileName}");
            $("div[name=view-image-propietor]").css("background-image", "url(https://api.appery.io/rest/1/db/files/${Settings.database_id}/${data.vendorImage.fileName})");
            $("div[name=view-image-propietor]").css("background-color", "");
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    
    
    
    Apperyio.CurrentScreen = 'proprietorPage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var proprietorPage_onLoad = function() {
        // alert("asd");
        proprietorPage_elementsExtraJS();
        try {
            // proprietorPage_get_vendor_by_id
            // alert(proprietorPage_get_vendor_by_id);
            proprietorPage_vendor_server_read_service.execute({});
            
            // "https://api.appery.io/rest/1/db/files/${Settings.database_id}/${data.vendorImage.fileName}");
            // $("div[name=view-image-propietor]").css("background-image", "url(https://api.appery.io/rest/1/db/files/${Settings.database_id}/${data.vendorImage.fileName})"
            
            
            
            // var vendorId = "5c3027460f0d3144ba1ee077";
            // $.get( "https://api.appery.io/rest/1/code/e480227e-0bc1-4c82-82e8-15d1a6becd7c/exec?vendor_id=" + vendorId, function( data ) {
            //     Apperyio.processMappingAction(Apperyio.mappings["proprietorPage_proprietorPage_vendor_read_service_onsuccess_mapping_0"]);
            //     console.log("https://api.appery.io/rest/1/db/files/${Settings.database_id}/${data.vendorImage.fileName}");
            //     $("div[name=view-image-propietor]").css("background-image", "url(https://api.appery.io/rest/1/db/files/${Settings.database_id}/${data.vendorImage.fileName})");
            //     $("div[name=view-image-propietor]").css("background-color", "");
            // });
        } catch (e) {
            console.error(e);
            hideSpinner();
        };
        proprietorPage_deviceEvents();
        proprietorPage_windowEvents();
        proprietorPage_elementsEvents();
    };
    // screen window events
    function proprietorPage_windowEvents() {
        $('#proprietorPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function proprietorPage_deviceEvents() {
        document.addEventListener("deviceready", function() {});
    };
    // screen elements extra js
    function proprietorPage_elementsExtraJS() {
        // screen (proprietorPage) extra code
    };
    // screen elements handler
    function proprietorPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#proprietorPage_proprietorHeader [name="navigateButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('navigatePage', {
                        transition: 'slidedown',
                        reverse: false
                    });
                }
            },
        }, '#proprietorPage_proprietorHeader [name="navigateButton"]');
        $(document).off("click", '#proprietorPage_proprietorContainer [name="menuLink"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    storageSet('menuHierarchyList_state', null);
                    Apperyio.navigateTo('menuPage_v2', {
                        transition: 'slide'
                    });
                    return false;
                }
            },
        }, '#proprietorPage_proprietorContainer [name="menuLink"]');
    };
    $(document).off("pagebeforeshow", "#proprietorPage").on("pagebeforeshow", "#proprietorPage", function(event, ui) {
        Apperyio.CurrentScreen = "proprietorPage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    proprietorPage_onLoad();
};
$(document).off("pagecreate", "#proprietorPage").on("pagecreate", "#proprietorPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    proprietorPage_js();
});

$(document).off("click", '#proprietorPage [name="addressCell"]').on({
    click: function(event) {
        var address = "";
        if(Apperyio('streetAddress1').html()){
            address += encodeURI(Apperyio('streetAddress1').html());
        }
        if(Apperyio('streetAddress2').html()){
            address += "+" + encodeURI(Apperyio('streetAddress2').html());
        }
        if(Apperyio('city').html()){
            address += "+" + encodeURI(Apperyio('city').html());
        }
        if(Apperyio('state').html()){
            address += "+" + encodeURI(Apperyio('state').html());
        }
        if(Apperyio('zip').html()){
            address += "+" + encodeURI(Apperyio('zip').html());
        }
        //alert(address);
        if (typeof cordova !== "undefined" && cordova.platformId === 'ios') {
            window.cordova.InAppBrowser.open("https://www.google.com/maps/search/?api=1&query=" + address,'_system');
        }
        else {
            window.open("https://www.google.com/maps/search/?api=1&query=" + address,'_system');
        }

    },
}, '#proprietorPage [name="addressCell"]');

$(document).off("click", '#proprietorPage [name="addressCellIcon"]').on({
    click: function(event) {
        var address = "";
        if(Apperyio('streetAddress1').html()){
            address += encodeURI(Apperyio('streetAddress1').html());
        }
        if(Apperyio('streetAddress2').html()){
            address += "+" + encodeURI(Apperyio('streetAddress2').html());
        }
        if(Apperyio('city').html()){
            address += "+" + encodeURI(Apperyio('city').html());
        }
        if(Apperyio('state').html()){
            address += "+" + encodeURI(Apperyio('state').html());
        }
        if(Apperyio('zip').html()){
            address += "+" + encodeURI(Apperyio('zip').html());
        }
        //alert(address);
        if (typeof cordova !== "undefined" && cordova.platformId === 'ios') {
            window.cordova.InAppBrowser.open("https://www.google.com/maps/search/?api=1&query=" + address,'_system');
        }
        else {
            window.open("https://www.google.com/maps/search/?api=1&query=" + address,'_system');
        }
        

    },
}, '#proprietorPage [name="addressCellIcon"]');


$(document).off("click", '#proprietorPage [name="phoneCell"]').on({
    click: function(event) {
        var phone = Apperyio('phone').html() || "" ;
        //window.open("tel:"+ phone);
        
        var phoneFormatted = formatPhoneNumber(phone);
        if (typeof cordova !== "undefined" && cordova.platformId === 'ios') {
            window.cordova.InAppBrowser.open('tel:'+phoneFormatted,'_system');
        }
        else {
            window.open('tel:'+phoneFormatted, '_system');
        }


    },
}, '#proprietorPage [name="phoneCell"]');

$(document).off("click", '#proprietorPage [name="phoneCellIcon"]').on({
    click: function(event) {
        var phone = Apperyio('phone').html() || "" ;
        //window.open("tel:"+ phone);
        
        var phoneFormatted = formatPhoneNumber(phone);
        if (typeof cordova !== "undefined" && cordova.platformId === 'ios') {
            window.cordova.InAppBrowser.open('tel:'+phoneFormatted,'_system');
        }
        else {
            window.open('tel:'+phoneFormatted, '_system');
        }
        
        




    },
}, '#proprietorPage [name="phoneCellIcon"]');

$(document).off("click", '#proprietorPage [name="webCell"]').on({
    click: function(event) {
        var website = Apperyio('website').html() || "" 
        if (typeof cordova !== "undefined" && cordova.platformId === 'ios') {
            window.cordova.InAppBrowser.open(website,'_system');
        }
        else {
            window.open(website,'_system');
        }

    },
}, '#proprietorPage [name="webCell"]');

$(document).off("click", '#proprietorPage [name="webCellIcon"]').on({
    click: function(event) {
        var website = Apperyio('website').html() || "" 
        if (typeof cordova !== "undefined" && cordova.platformId === 'ios') {
            window.cordova.InAppBrowser.open(website,'_system');
        }
        else {
            window.open(website,'_system');
        }

    },
}, '#proprietorPage [name="webCellIcon"]');

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = (match[1] ? '+1 ' : '');
    return [intlCode, '+1', match[2], '', match[3], '', match[4]].join('');
  }
  return null;
}
