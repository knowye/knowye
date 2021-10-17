/*
 * JS for searchPage generated by Appery.io
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

function searchPage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'menuButton': 'searchPage_menuButton',
        'profileLabel': 'searchPage_profileLabel',
        'profileUseGrid': 'searchPage_profileUseGrid',
        'profileUseCell': 'searchPage_profileUseCell',
        'useProfileLabel': 'searchPage_useProfileLabel',
        'profileUseToggleCell': 'searchPage_profileUseToggleCell',
        'useProfileToggle': 'searchPage_useProfileToggle',
        'locationLabel': 'searchPage_locationLabel',
        'locationGrid': 'searchPage_locationGrid',
        'locationCell': 'searchPage_locationCell',
        'useLocationLabel': 'searchPage_useLocationLabel',
        'useLocationToggleCell': 'searchPage_useLocationToggleCell',
        'useLocationToggle': 'searchPage_useLocationToggle',
        'enterSearchAddressCell': 'searchPage_enterSearchAddressCell',
        'enterSearchAddress': 'searchPage_enterSearchAddress',
        'findNearbyButtonCell': 'searchPage_findNearbyButtonCell',
        'findNearbyButton': 'searchPage_findNearbyButton',
        'searchCriteriaLabel': 'searchPage_searchCriteriaLabel',
        'searchButtons': 'searchPage_searchButtons',
        'distanceButton': 'searchPage_distanceButton',
        'ratingButton': 'searchPage_ratingButton',
        'priceButton': 'searchPage_priceButton',
        'dietaryButton': 'searchPage_dietaryButton',
        'ingredientButton': 'searchPage_ingredientButton',
        'cuisineButton': 'searchPage_cuisineButton',
        'nameButton': 'searchPage_nameButton',
        'mobilegrid_126': 'searchPage_mobilegrid_126',
        'mobilegridcell_127': 'searchPage_mobilegridcell_127',
        'showFilterButton': 'searchPage_showFilterButton',
        'mobilegridcell_128': 'searchPage_mobilegridcell_128',
        'searchButton': 'searchPage_searchButton',
        'distanceSelect': 'searchPage_distanceSelect',
        'distanceSelect-0': 'searchPage_distanceSelect-0',
        'starLabel': 'searchPage_starLabel',
        'starsSlider': 'searchPage_starsSlider',
        'priceRadio': 'searchPage_priceRadio',
        'priceRadio1': 'searchPage_priceRadio1',
        'priceRadio2': 'searchPage_priceRadio2',
        'priceRadio3': 'searchPage_priceRadio3',
        'priceRadio4': 'searchPage_priceRadio4',
        'saveChoicesButton': 'searchPage_saveChoicesButton',
        'cuisinePanelList': 'searchPage_cuisinePanelList',
        'selectHalal': 'searchPage_selectHalal',
        'selectKosher': 'searchPage_selectKosher',
        'selectJain': 'searchPage_selectJain',
        'selectVegitarian': 'searchPage_selectVegitarian',
        'selectVegan': 'searchPage_selectVegan',
        'selectGlutenFree': 'searchPage_selectGlutenFree',
        'selectPaleo': 'searchPage_selectPaleo',
        'cuisinePanelBack': 'searchPage_cuisinePanelBack',
        'ingredientDescriptionLabel': 'searchPage_ingredientDescriptionLabel',
        'ingredientField': 'searchPage_ingredientField',
        'ingredientEnterButton': 'searchPage_ingredientEnterButton',
        'distancePopupLabel': 'searchPage_distancePopupLabel',
        'distanceRadio': 'searchPage_distanceRadio',
        'radio2blocks': 'searchPage_radio2blocks',
        'radio8blocks': 'searchPage_radio8blocks',
        'radio1mile': 'searchPage_radio1mile',
        'radio5miles': 'searchPage_radio5miles',
        'radio10miles': 'searchPage_radio10miles',
        'distanceOK': 'searchPage_distanceOK',
        'ratingFilterLabel': 'searchPage_ratingFilterLabel',
        'ratingSearchChoices': 'searchPage_ratingSearchChoices',
        'star1Select': 'searchPage_star1Select',
        'star2Select': 'searchPage_star2Select',
        'star3Select': 'searchPage_star3Select',
        'star4Select': 'searchPage_star4Select',
        'star5Select': 'searchPage_star5Select',
        'ratingOK': 'searchPage_ratingOK',
        'cuisinePopupLabel': 'searchPage_cuisinePopupLabel',
        'mobilesearchbar_90': 'searchPage_mobilesearchbar_90',
        'cuisineOK': 'searchPage_cuisineOK',
        'mobilecheckboxgroup_92': 'searchPage_mobilecheckboxgroup_92',
        'mobilecheckbox_93': 'searchPage_mobilecheckbox_93',
        'mobilecheckbox_94': 'searchPage_mobilecheckbox_94',
        'mobilecheckbox_95': 'searchPage_mobilecheckbox_95',
        'mobilecheckbox_96': 'searchPage_mobilecheckbox_96',
        'mobilecheckbox_97': 'searchPage_mobilecheckbox_97',
        'mobilecheckbox_98': 'searchPage_mobilecheckbox_98',
        'mobilecheckbox_99': 'searchPage_mobilecheckbox_99',
        'mobilecheckbox_100': 'searchPage_mobilecheckbox_100',
        'mobilecheckbox_101': 'searchPage_mobilecheckbox_101',
        'mobilecheckbox_102': 'searchPage_mobilecheckbox_102',
        'pricePopupLabel': 'searchPage_pricePopupLabel',
        'mobilecheckboxgroup_104': 'searchPage_mobilecheckboxgroup_104',
        'mobilecheckbox_105': 'searchPage_mobilecheckbox_105',
        'mobilecheckbox_106': 'searchPage_mobilecheckbox_106',
        'mobilecheckbox_107': 'searchPage_mobilecheckbox_107',
        'mobilecheckbox_108': 'searchPage_mobilecheckbox_108',
        'priceOK': 'searchPage_priceOK',
        'dietaryPopupLabel': 'searchPage_dietaryPopupLabel',
        'dietaryChoices': 'searchPage_dietaryChoices',
        'glutenFreeSelect': 'searchPage_glutenFreeSelect',
        'halalSelect': 'searchPage_halalSelect',
        'jainSelect': 'searchPage_jainSelect',
        'kosherSelect': 'searchPage_kosherSelect',
        'paleoSelect': 'searchPage_paleoSelect',
        'veganSelect': 'searchPage_veganSelect',
        'vegitarianSelect': 'searchPage_vegitarianSelect',
        'dietaryOK': 'searchPage_dietaryOK',
        'loginPopupLabel': 'searchPage_loginPopupLabel',
        'mobilegrid_123': 'searchPage_mobilegrid_123',
        'mobilegridcell_124': 'searchPage_mobilegridcell_124',
        'loginPopupCancelButton': 'searchPage_loginPopupCancelButton',
        'mobilegridcell_125': 'searchPage_mobilegridcell_125',
        'loginPopupButton': 'searchPage_loginPopupButton'
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
    Apperyio.CurrentScreen = 'searchPage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var searchPage_onLoad = function() {
        searchPage_elementsExtraJS();
        searchPage_deviceEvents();
        searchPage_windowEvents();
        searchPage_elementsEvents();
    };
    // screen window events
    function searchPage_windowEvents() {
        $('#searchPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function searchPage_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function searchPage_elementsExtraJS() {
        // screen (searchPage) extra code
        /* useProfileToggle */
        $("#searchPage_useProfileToggle").parent().find(".ui-flipswitch-on").attr("tabindex", "1");
        /* useLocationToggle */
        $("#searchPage_useLocationToggle").parent().find(".ui-flipswitch-on").attr("tabindex", "4");
        /* distanceSelect */
        $("#searchPage_distanceSelect").parent().find("a.ui-btn").attr("tabindex", "9");
        /* ingredientPopup */
        $("#searchPage_ingredientPopup").popup("option", "positionTo", "window");
        /* distancePopup */
        $("#searchPage_distancePopup").popup("option", "positionTo", "window");
        /* ratingPopup */
        $("#searchPage_ratingPopup").popup("option", "positionTo", "window");
        /* cuisinePopup */
        $("#searchPage_cuisinePopup").popup("option", "positionTo", "window");
        /* pricePopup */
        $("#searchPage_pricePopup").popup("option", "positionTo", "window");
        /* dietaryPopup */
        $("#searchPage_dietaryPopup").popup("option", "positionTo", "window");
        /* loginPopup */
        $("#searchPage_loginPopup").popup("option", "positionTo", "window");
    };
    // screen elements handler
    function searchPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#searchPage_searchHeader [name="menuButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('navigatePage', {
                        transition: 'slidedown',
                        reverse: false
                    });
                }
            },
        }, '#searchPage_searchHeader [name="menuButton"]');
        $(document).off("change", '#searchPage_searchContainer [name="useProfileToggle"]').on({
            change: function(event) {
                var popupElement = Apperyio("loginPopup");
                if (popupElement.popup("option", "positionTo") === "origin") {
                    popupElement.popup("open", {
                        transition: "none",
                        positionTo: "#" + $(this).attr("id")
                    });
                } else {
                    popupElement.popup("open", {
                        transition: "none"
                    });
                };
            },
        }, '#searchPage_searchContainer [name="useProfileToggle"]');
        $(document).off("click", '#searchPage_searchContainer [name="distanceButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("distancePopup");
                    if (popupElement.popup("option", "positionTo") === "origin") {
                        popupElement.popup("open", {
                            transition: "slidedown",
                            positionTo: "#" + $(this).attr("id")
                        });
                    } else {
                        popupElement.popup("open", {
                            transition: "slidedown"
                        });
                    };
                }
            },
        }, '#searchPage_searchContainer [name="distanceButton"]');
        $(document).off("click", '#searchPage_searchContainer [name="ratingButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("ratingPopup");
                    if (popupElement.popup("option", "positionTo") === "origin") {
                        popupElement.popup("open", {
                            transition: "slidedown",
                            positionTo: "#" + $(this).attr("id")
                        });
                    } else {
                        popupElement.popup("open", {
                            transition: "slidedown"
                        });
                    };
                }
            },
        }, '#searchPage_searchContainer [name="ratingButton"]');
        $(document).off("click", '#searchPage_searchContainer [name="priceButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("pricePopup");
                    if (popupElement.popup("option", "positionTo") === "origin") {
                        popupElement.popup("open", {
                            transition: "slidedown",
                            positionTo: "#" + $(this).attr("id")
                        });
                    } else {
                        popupElement.popup("open", {
                            transition: "slidedown"
                        });
                    };
                }
            },
        }, '#searchPage_searchContainer [name="priceButton"]');
        $(document).off("click", '#searchPage_searchContainer [name="dietaryButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("dietaryPopup");
                    if (popupElement.popup("option", "positionTo") === "origin") {
                        popupElement.popup("open", {
                            transition: "none",
                            positionTo: "#" + $(this).attr("id")
                        });
                    } else {
                        popupElement.popup("open", {
                            transition: "none"
                        });
                    };
                }
            },
        }, '#searchPage_searchContainer [name="dietaryButton"]');
        $(document).off("click", '#searchPage_searchContainer [name="ingredientButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("ingredientPopup");
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
        }, '#searchPage_searchContainer [name="ingredientButton"]');
        $(document).off("click", '#searchPage_searchContainer [name="cuisineButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("cuisinePopup");
                    if (popupElement.popup("option", "positionTo") === "origin") {
                        popupElement.popup("open", {
                            transition: "slidedown",
                            positionTo: "#" + $(this).attr("id")
                        });
                    } else {
                        popupElement.popup("open", {
                            transition: "slidedown"
                        });
                    };
                }
            },
        }, '#searchPage_searchContainer [name="cuisineButton"]');
        $(document).off("click", '#searchPage_searchFooter [name="showFilterButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('filterPage', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
        }, '#searchPage_searchFooter [name="showFilterButton"]');
        $(document).off("click", '#searchPage_searchFooter [name="searchButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('itemPage', {
                        transition: 'slidedown',
                        reverse: false
                    });
                }
            },
        }, '#searchPage_searchFooter [name="searchButton"]');
        $(document).off("click", '#searchPage_searchCriteriaPanel [name="saveChoicesButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="searchPage_searchCriteriaPanel"]').panel("close");
                }
            },
        }, '#searchPage_searchCriteriaPanel [name="saveChoicesButton"]');
        $(document).off("click", '#searchPage_dietaryPanel [name="cuisinePanelBack"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="searchPage_dietaryPanel"]').panel("close");
                }
            },
        }, '#searchPage_dietaryPanel [name="cuisinePanelBack"]');
        $(document).off("click", '#searchPage_ingredientPopup [name="ingredientEnterButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('ingredientPopup').popup('close');
                }
            },
        }, '#searchPage_ingredientPopup [name="ingredientEnterButton"]');
        $(document).off("click", '#searchPage_distancePopup').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("distancePopup");
                    if (popupElement.popup("option", "positionTo") === "origin") {
                        popupElement.popup("open", {
                            transition: "slidedown",
                            positionTo: "#" + $(this).attr("id")
                        });
                    } else {
                        popupElement.popup("open", {
                            transition: "slidedown"
                        });
                    };
                }
            },
        }, '#searchPage_distancePopup');
        $(document).off("click", '#searchPage_distancePopup [name="distanceOK"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('distancePopup').popup('close');
                }
            },
        }, '#searchPage_distancePopup [name="distanceOK"]');
        $(document).off("click", '#searchPage_ratingPopup [name="ratingOK"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('ratingPopup').popup('close');
                }
            },
        }, '#searchPage_ratingPopup [name="ratingOK"]');
        $(document).off("click", '#searchPage_cuisinePopup [name="cuisineOK"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('cuisinePopup').popup('close');
                }
            },
        }, '#searchPage_cuisinePopup [name="cuisineOK"]');
        $(document).off("click", '#searchPage_pricePopup [name="priceOK"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('pricePopup').popup('close');
                }
            },
        }, '#searchPage_pricePopup [name="priceOK"]');
        $(document).off("click", '#searchPage_dietaryPopup [name="dietaryOK"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('dietaryPopup').popup('close');
                }
            },
        }, '#searchPage_dietaryPopup [name="dietaryOK"]');
        $(document).off("click", '#searchPage_loginPopup [name="loginPopupCancelButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('loginPopup').popup('close');
                }
            },
        }, '#searchPage_loginPopup [name="loginPopupCancelButton"]');
        $(document).off("click", '#searchPage_loginPopup [name="loginPopupButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('startScreen', {
                        transition: 'slide',
                        reverse: false
                    });
                }
            },
        }, '#searchPage_loginPopup [name="loginPopupButton"]');
    };
    $(document).off("pagebeforeshow", "#searchPage").on("pagebeforeshow", "#searchPage", function(event, ui) {
        Apperyio.CurrentScreen = "searchPage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    searchPage_onLoad();
};
$(document).off("pagecreate", "#searchPage").on("pagecreate", "#searchPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    searchPage_js();
});