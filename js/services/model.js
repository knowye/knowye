/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "vendor": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string"
            },
            "menuTagLine": {
                "type": "string"
            },
            "businessName": {
                "type": "string"
            },
            "businessType": {
                "type": "string"
            },
            "taxRate": {
                "type": "number"
            },
            "vendorDescription": {
                "type": "string"
            }
        }
    },
    "String": {
        "type": "string"
    },
    "Boolean": {
        "type": "boolean"
    },
    "preferences": {
        "type": "object",
        "properties": {
            "caracteristics": {
                "type": "object",
                "properties": {}
            },
            "categories": {
                "type": "object",
                "properties": {}
            }
        }
    },
    "currentOrder": {
        "type": "object",
        "properties": {
            "vendor_id": {
                "type": "string"
            },
            "tax": {
                "type": "number"
            },
            "total": {
                "type": "number"
            },
            "id": {
                "type": "string"
            },
            "tip": {
                "type": "number"
            },
            "items": {
                "type": "array",
                "items": {
                    "type": "menuHeadingItem"
                }
            },
            "bill": {
                "type": "number"
            }
        }
    },
    "arrayOfObjectsType": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {}
        }
    },
    "menuHeading": {
        "type": "array",
        "items": {
            "type": "menuHeadingItem"
        }
    },
    "menuHierarchy": {
        "type": "object",
        "properties": {
            "heading": {
                "type": "string"
            },
            "children": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "id": {
                "type": "string"
            }
        }
    },
    "fileInfo": {
        "type": "object",
        "properties": {
            "fileName": {
                "type": "string"
            },
            "originalFileName": {
                "type": "string"
            }
        }
    },
    "Number": {
        "type": "number"
    },
    "Coordsknowye11": {
        "type": "object",
        "properties": {
            "Latitude": {
                "type": "number"
            },
            "Longitude": {
                "type": "number"
            }
        }
    },
    "menuHeadingItem": {
        "type": "object",
        "properties": {
            "hideSeasonal": {
                "type": "string"
            },
            "parent_id": {
                "type": "string"
            },
            "heading": {
                "type": "string"
            },
            "price": {
                "type": "number"
            },
            "isItem": {
                "type": "boolean"
            },
            "order": {
                "type": "number"
            },
            "isHidden": {
                "type": "boolean"
            },
            "id": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "quantity": {
                "type": "number"
            }
        }
    },
    "orderItems": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string"
                },
                "item_id": {
                    "type": "string"
                },
                "item_name": {
                    "type": "string"
                },
                "price": {
                    "type": "number"
                }
            }
        }
    },
    "arrayType": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    "menuHierarchyList": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "price": {
                    "type": "number"
                },
                "hasChildren": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "favorite": {
                    "type": "string"
                },
                "quantity": {
                    "type": "number"
                },
                "wishlist": {
                    "type": "string"
                },
                "includePrefs": {
                    "type": "arrayType"
                },
                "order": {
                    "type": "number"
                },
                "parent_id": {
                    "type": "string"
                },
                "hideSeasonal": {
                    "type": "string"
                },
                "heading": {
                    "type": "string"
                },
                "rate": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "level": {
                    "type": "number"
                },
                "isItem": {
                    "type": "boolean"
                },
                "visible": {
                    "type": "boolean"
                },
                "isHidden": {
                    "type": "boolean"
                },
                "opened": {
                    "type": "boolean"
                }
            }
        }
    },
    "object": {
        "type": "object",
        "properties": {}
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);
/**
 * Data storage
 */
Apperyio.storage = {
    "sessionToken": new $a.SessionStorage("sessionToken", "String"),
    "userId": new $a.LocalStorage("userId", "String"),
    "preferences": new $a.SessionStorage("preferences", "preferences"),
    "menuHeading": new $a.SessionStorage("menuHeading", "menuHeading"),
    "menuHierarchy": new $a.SessionStorage("menuHierarchy", "menuHierarchy"),
    "menuHierarchyList": new $a.WindowStorage("menuHierarchyList", "menuHierarchyList"),
    "selectedItem": new $a.SessionStorage("selectedItem", "String"),
    "userType": new $a.SessionStorage("userType", "String"),
    "currentItem": new $a.SessionStorage("currentItem", "menuHeadingItem"),
    "menuItemsList": new $a.SessionStorage("menuItemsList", "menuHierarchyList"),
    "selectedParentItem": new $a.SessionStorage("selectedParentItem", "String"),
    "arrayData": new $a.SessionStorage("arrayData", "arrayType"),
    "vendorId": new $a.SessionStorage("vendorId", "String"),
    "qrcodeFileName": new $a.SessionStorage("qrcodeFileName", "String"),
    "currentVendor": new $a.SessionStorage("currentVendor", "vendor"),
    "imageDataBase64": new $a.WindowStorage("imageDataBase64", "String"),
    "imageURI": new $a.SessionStorage("imageURI", "String"),
    "errerMessage": new $a.SessionStorage("errerMessage", "String"),
    "tempString": new $a.SessionStorage("tempString", "String"),
    "dontShowIntro": new $a.LocalStorage("dontShowIntro", "Boolean"),
    "tempNumber": new $a.SessionStorage("tempNumber", "Number"),
    "userName": new $a.SessionStorage("userName", "String"),
    "fileName": new $a.SessionStorage("fileName", "String"),
    "currentOrder": new $a.SessionStorage("currentOrder", "currentOrder"),
    "menuHierarchyListPreview": new $a.SessionStorage("menuHierarchyListPreview", "menuHierarchyList"),
    "fileInfo": new $a.SessionStorage("fileInfo", "fileInfo"),
    "headingSelectList": new $a.SessionStorage("headingSelectList", "menuHierarchyList"),
    "logout": new $a.SessionStorage("logout", "Boolean"),
    "oldParentId": new $a.SessionStorage("oldParentId", "String"),
    "arrayOfObjects": new $a.SessionStorage("arrayOfObjects", "arrayOfObjectsType"),
    "scrollTo": new $a.SessionStorage("scrollTo", "Number"),
    "wasGuest": new $a.SessionStorage("wasGuest", "Boolean"),
    "currentOrderItems": new $a.SessionStorage("currentOrderItems", "orderItems"),
    "deviceId": new $a.SessionStorage("deviceId", "String"),
    "pushTitle": new $a.SessionStorage("pushTitle", "String"),
    "pushMessage": new $a.SessionStorage("pushMessage", "String"),
    "prefType": new $a.SessionStorage("prefType", "arrayType"),
    "userPrefs": new $a.SessionStorage("userPrefs", "arrayType"),
    "itemPrefs": new $a.SessionStorage("itemPrefs", "arrayType"),
    "quickMessageText": new $a.SessionStorage("quickMessageText", "String"),
    "useMenuCache": new $a.WindowStorage("useMenuCache", "String"),
    "coords": new $a.SessionStorage("coords", "Coordsknowye11"),
    "fb_access_token": new $a.SessionStorage("fb_access_token", "String"),
    "menuHierarchyList_state": new $a.SessionStorage("menuHierarchyList_state", "object"),
    "autoLocationPopup": new $a.WindowStorage("autoLocationPopup", "Boolean"),
    "zipCode": new $a.SessionStorage("zipCode", "String"),
    "shared_menu_vendor_id": new $a.SessionStorage("shared_menu_vendor_id", "String"),
    "lastSelectedMenuItem": new $a.SessionStorage("lastSelectedMenuItem", "String")
};
/**
 * Push Notification specific data storage
 */
Apperyio.storage.pushNotificationToken = new $a.LocalStorage("pushNotificationToken", "String");
Apperyio.storage.pushNotificationDeviceID = new $a.LocalStorage("pushNotificationDeviceID", "String");
Apperyio.storage.deviceTimeZone = new $a.LocalStorage("deviceTimeZone", "String");