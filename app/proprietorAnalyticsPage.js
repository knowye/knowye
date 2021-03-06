/*
 * JS for proprietorAnalyticsPage generated by Appery.io
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
    "name": "qrCodePage",
    "location": "qrCodePage.html"
}, {
    "name": "facebookLogin",
    "location": "facebookLogin.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
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

function proprietorAnalyticsPage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_2': 'proprietorAnalyticsPage_mobilelabel_2',
        'connectButton': 'proprietorAnalyticsPage_connectButton',
        'mobilelabel_12': 'proprietorAnalyticsPage_mobilelabel_12',
        'html_11': 'proprietorAnalyticsPage_html_11',
        'close': 'proprietorAnalyticsPage_close',
        'comingSoonLabel': 'proprietorAnalyticsPage_comingSoonLabel'
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
    Apperyio.mappings["proprietorAnalyticsPage_getAllCustomers_onbeforesend_mapping_0"] = {
        "homeScreen": "proprietorAnalyticsPage",
        "directions": [
            {
                "to_name": "getAllCustomers",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "X-Appery-Session-Token": "{session_token}"
                    },
                    "parameters": {
                        "where": "{\"userType\": \"customer\"}",
                        "limit": "2000"
                    },
                    "body": null
                },
                "mappings": []
            }
        ]
    };
    Apperyio.mappings["proprietorAnalyticsPage_getAllMenuViews_onbeforesend_mapping_0"] = {
        "homeScreen": "proprietorAnalyticsPage",
        "directions": [
            {
                "from_name": "vendorId",
                "from_type": "SESSION_STORAGE",
                "to_name": "getAllMenuViews",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}",
                        "X-Appery-Session-Token": "{session_token}"
                    },
                    "parameters": {
                        "limit": "2000"
                    },
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target_transformation": function(value) {
                            return {
                                "vendorId": {
                                    "$inQuery": {
                                        "_id": value
                                    }
                                }
                            };
                        },
                        "target": "$['parameters']['where']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.getAllCustomers = Apperyio.datasources.getAllCustomers = new Apperyio.DataSource(projectMdb1_customers_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["proprietorAnalyticsPage_getAllCustomers_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            //setting user's count
            $("div[name=mobilelabel_2]").text("guests in the know: " + data.length);
            // Load the Visualization API and the corechart package.
            google.charts.load('current', {
                'packages': ['corechart']
            });
            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(drawChart);
            // Callback that creates and populates a data table,
            // instantiates the pie chart, passes in the data and
            // draws it.
            function drawChart() {
                //!------ Pie Chart
                var zipKey = "zip";
                var groupedData = data.reduce(function(rv, x) {
                    (rv[x[zipKey]] = rv[x[zipKey]] || []).push(x);
                    return rv;
                }, {});
                var zipCode = storageGet("zipCode");
                //putting data to charts
                var users = groupedData[zipCode];
                var caption = "";
                if (users == undefined) {
                    caption = " - 0%";
                    $("div[name=zipCode]").text("(0) 0%");
                } else {
                    caption = " ( " + Math.round(((users.length / data.length) * 100) * 10) / 10 + "% )";
                }
                // if (users != undefined) {
                // } else {
                // caption = " ( 0% )";
                // }
                $("div[name=zipCode]").text(zipCode + caption);
                // Create the data table.
                data = new google.visualization.DataTable();
                data.addColumn('string', 'Zip Codes');
                data.addColumn('number', 'Users');
                var rows = [];
                for (var prop in groupedData) {
                    // skip loop if the property is from prototype
                    if (!groupedData.hasOwnProperty(prop)) continue;
                    // if (prop != undefined && prop != "undefined") {
                    rows.push([prop, groupedData[prop].length]);
                    // }
                }
                data.addRows(rows);
                // Set chart options
                var options = {
                    'title': 'How Much Pizza I Ate Last Night',
                    theme: 'material',
                    is3D: true,
                    width: $("#chart_div").width() - 15,
                    height: $("#chart_div").height(),
                    titlePosition: 'none',
                    backgroundColor: '#000',
                    legend: {
                        position: 'none'
                    }
                };
                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
                chart.draw(data, options);
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
    window.getAllMenuViews = Apperyio.datasources.getAllMenuViews = new Apperyio.DataSource(knowye_dev_menuViews_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["proprietorAnalyticsPage_getAllMenuViews_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) { //!-------- Constants ------------!//
        
        
            data.forEach(function(o, i) {
                if (o.isGuestUser == null){
                    data[i].isGuestUser = false;
                }
            });
            var api_data = JSON.parse(JSON.stringify(data)).filter(function(object) {return object.isGuestUser == false});
            
            var guest_data = JSON.parse(JSON.stringify(data)).filter(function(object) {return object.isGuestUser == true});
            // console.log(JSON.stringify(api_data));
            
            const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
            //const uniqueArray = _.uniq(data, obj => obj.userId._id);
            "use strict";
            
            var uniqueArray = _.uniq(data, function (obj) {
                return obj.userId._id;
            }).filter(function(object) { return object.isGuestUser == false});
            

            const uniqueViews = uniqueArray.length;
            var days = [];
            //$("div[name=menu-props]").text(`total views: ${data.length} & unique views: ${uniqueViews}`);
            $("div[name=menu-props]").text("total views: ${data.length} & unique views: ${uniqueViews}");

            // Load the Visualization API and the corechart package.
            google.charts.load('current', {
                'packages': ['corechart', 'line']
            });
            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(drawChart);
            $('select[name=filter-by-time]').change(function() {
                drawChart();
            });
            // Callback that creates and populates a data table,
            // instantiates the pie chart, passes in the data and
            // draws it.
            function drawChart() {
                var selectedFilter = $('select[name=filter-by-time] :selected').val();
                var is_year = selectedFilter == "by-year";
                var graph_data = is_year ? getByYear() : getByMonth();
                var filtered_data = [];
                var is_firsttime = false;
                
                var current_date = new Date();
                // var is_need_to_add = false;
               
                $(graph_data.reverse()).each(function(index, data) {
                    
                    // if (is_year) {
                    //     $.each(months, function(index, month) {
                    //         if (index  <= current_date.getMonth()) {
                    //             is_need_to_add = true;
                    //             return false;
                    //         } else {
                    //             is_need_to_add = false;
                    //         }
                    //         // is_need_to_add = index  <= current_date.getMonth();
                    //         //  return false; // breaks
                    //         // console.log(index + " <= " +  current_date.getMonth() + " == " + is_need_to_add);
                    //     });
                    // }
                    if (is_year){
                        if (!is_firsttime && (data[1] !== 0 || data[2] !== 0 || data[3] !== 0)) {
                            is_firsttime = true;
                        }
                        if (is_firsttime) {
                            filtered_data.push(data);
                        }            
                    } else {
                            filtered_data.push(data);
                    }
                });
                
                var reversed_data = filtered_data.reverse();
                if (is_year) {
                    var additionals = (current_date.getMonth() + 1) - reversed_data.length;
                    for (var i = 0; i < additionals; i++) {
                        reversed_data.push([months[(reversed_data.length) + i], 0, 0]);
                    }
                    // var offset_month = months.length - (current_date.getMonth() + 1);
                    // var offset_val = 
                    
                    // $.each(reversed_data, function(index, month) {
                    //     if (current_date.getMonth()  > index) {
                            
                    //     }
                    // });
                    if (api_data.length == 0){
                        reversed_data = [];
                        $.each(months, function (index, item) {
                            reversed_data.push([item, 0, 0]);    
                        });
                    }
                } else {
                    if (api_data.length == 0) {
                        reversed_data = [];
                        var weekCount = function(year, month_number) {
                            var firstOfMonth = new Date(year, month_number-1, 1);
                            var lastOfMonth = new Date(year, month_number, 0);
                        
                            var used = firstOfMonth.getDay() + lastOfMonth.getDate();
                        
                            return Math.ceil( used / 7);
                        };
                        
                        for (var i = 0; i < weekCount; i++) {
                             reversed_data.push(["week " + (i + 1), 0, 0]);
                        }
                        
                        
                        // $.each(months, function (index, item) {
                        //     reversed_data.push([item, 0, 0]);    
                        // });
                    }
                }
                
                
                
                // console.log(graph_data);
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'X');
                data.addColumn('number', 'total menu views');
                data.addColumn('number', 'unique menu views');
                data.addColumn('number', 'guest menu views');
                data.addRows(reversed_data);
                var options = {
                    hAxis: {
                        title: 'timeline',
                        textStyle: {
                            color: '#FFF'
                        },
                        titleTextStyle: {
                            color: '#FFF'
                        },
                        gridlines: {
                            color: "#fff"
                        },
                        baselineColor: "#fff"
                    },
                    vAxis: {
                        title: 'views',
                        textStyle: {
                            color: '#FFF'
                        },
                        titleTextStyle: {
                            color: '#FFF'
                        },
                        gridlines: {
                            color: "#fff"
                        },
                        baselineColor: "#fff"
                    },
                                 

                    backgroundColor: '#000',
                    colors: ['#689d45', '#3f5e97', '#cedb00'],
                    legend: {
                        position: 'none',
                        maxLines: 3,
                        textStyle: {
                            color: 'white'
                        }
                    },
                };
                var chart = new google.visualization.LineChart(document.getElementById('bar_div'));
                chart.draw(data, options);
                //!------ Bar Chart
                // var bar_data = google.visualization.arrayToDataTable(graph_data);
                // var bar_options = {
                //     title: 'Menu Views',
                //     curveType: 'function',
                //     backgroundColor: '#000',
                //     legend: { position: 'bottom' }
                // };
                // var bar_chart = new google.visualization.LineChart(document.getElementById('bar_div'));
                // bar_chart.draw(bar_data, bar_options);
            }
            var getByYear = function() {
                var gdata = [];
                // gdata.push([
                //     "Time",
                //     "Total Views",
                //     "Unique Views"
                // ]);
                $.each(months, function(mainIndex, item) {
                    var total_counter = 0;
                    var unique_counter = 0;
                    var guest_counter = 0;
                    var currentDate = new Date();
                    $.each(api_data, function(index, item) {
                        var createdDate = new Date(item._createdAt.replace(/ /g,"T"));
                        if (createdDate.getYear() == currentDate.getYear() && mainIndex == createdDate.getMonth()) {
                            total_counter++;
                        }
                    });
                    $.each(uniqueArray, function(index, item) {
                        var createdDate = new Date(item._createdAt.replace(/ /g,"T"));
                        if (createdDate.getYear() == currentDate.getYear() && mainIndex == createdDate.getMonth()) {
                            unique_counter++;
                        }
                    });
                    
                    $.each(guest_data, function(index, item) {
                        var createdDate = new Date(item._createdAt.replace(/ /g,"T"));
                        if (createdDate.getYear() == currentDate.getYear() && mainIndex == createdDate.getMonth()) {
                            guest_counter++;
                        }
                    });
                    
                    gdata.push([item, total_counter+guest_counter, unique_counter, guest_counter]);
                });
                return gdata;
            }
            
            var getWeekOfMonth = function(date) {
                return Math.ceil(date.getDate() / 7);
            };
            
            var getByMonth = function() {
                var gdata = [];
                
                var weekCount = function(year, month_number) {
                    var firstOfMonth = new Date(year, month_number-1, 1);
                    var lastOfMonth = new Date(year, month_number, 0);
                    var used = firstOfMonth.getDay() + lastOfMonth.getDate();
                    return Math.ceil( used / 7);
                };
                
                var currentDate = new Date();
                // var currentMonth = currentDate.getMonth() + 1;
                var weeks = weekCount(currentDate.getYear(), currentDate.getMonth());
                var weeks_name = [];
                var weekOfCurrentMonth = getWeekOfMonth(currentDate);
                for (var i = 0; i < weeks; i++) {
                    if (i < weekOfCurrentMonth)
                    weeks_name.push("week " + (i + 1));
                }
                
                $.each(weeks_name, function(mainIndex, item) {
                    var total_counter = 0;
                    var unique_counter = 0;
                    var graph_counter = 0;
                    $.each(api_data, function(index, item) {
                        var createdDate = new Date(item._createdAt.replace(/ /g,"T"));
                        
                        if (createdDate.getMonth() == currentDate.getMonth()){
                            var weekOfMonth = getWeekOfMonth(createdDate);

                            if (weekOfMonth == (mainIndex + 1)) {
                                total_counter++;
                            }
                        }
                    });
                    $.each(uniqueArray, function(index, item) {
                         var createdDate = new Date(item._createdAt.replace(/ /g,"T"));
                        
                        if (createdDate.getMonth() == currentDate.getMonth()){
                            var weekOfMonth = getWeekOfMonth(createdDate);

                            if (weekOfMonth == (mainIndex + 1)) {
                                unique_counter++;
                            }
                        }
                    });
                    
                    
                    $.each(guest_data, function(index, item) {
                         var createdDate = new Date(item._createdAt.replace(/ /g,"T"));
                        
                        if (createdDate.getMonth() == currentDate.getMonth()){
                            var weekOfMonth = getWeekOfMonth(createdDate);

                            if (weekOfMonth == (mainIndex + 1)) {
                                graph_counter++;
                            }
                        }
                    });
                    
                    gdata.push([item, total_counter+graph_counter, unique_counter, graph_counter]);
                });
                
                
                // $.each(weeks_name, function(mainIndex, item) {
                //     var total_counter = 0;
                //     var unique_counter = 0;
                //     $.each(api_data, function(index, item) {
                //         var createdDate = new Date(item._createdAt.replace(/ /g,"T"));
                //         var weekOfMonth = getWeekOfMonth(createdDate) - 2;
                //         if (mainIndex == weekOfMonth) {
                //             total_counter++;
                //         }
                //     });
                //     $.each(uniqueArray, function(index, item) {
                //         var createdDate = new Date(item._createdAt.replace(/ /g,"T"));
                        
                //         var weekOfMonth = getWeekOfMonth(createdDate) - 2;
                //         if (mainIndex == weekOfMonth) {
                //             unique_counter++;
                //         }
                //     });
                //     gdata.push([item, total_counter, unique_counter]);
                // });
                
                return gdata;
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'proprietorAnalyticsPage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var proprietorAnalyticsPage_onLoad = function() {
        proprietorAnalyticsPage_elementsExtraJS();
        proprietorAnalyticsPage_deviceEvents();
        proprietorAnalyticsPage_windowEvents();
        proprietorAnalyticsPage_elementsEvents();
    };
    // screen window events
    function proprietorAnalyticsPage_windowEvents() {
        $('#proprietorAnalyticsPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#proprietorAnalyticsPage').on({
            pageshow: function(event) {
                try {
                    getAllCustomers.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
                try {
                    getAllMenuViews.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        });
    };
    // device events
    function proprietorAnalyticsPage_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function proprietorAnalyticsPage_elementsExtraJS() {
        // screen (proprietorAnalyticsPage) extra code
        /* comingSoonPopup */
        $("#proprietorAnalyticsPage_comingSoonPopup").popup("option", "positionTo", "window");
    };
    // screen elements handler
    function proprietorAnalyticsPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#proprietorAnalyticsPage_mobilecontainer [name="connectButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("comingSoonPopup");
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
        }, '#proprietorAnalyticsPage_mobilecontainer [name="connectButton"]');
        $(document).off("click", '#proprietorAnalyticsPage_comingSoonPopup').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("comingSoonPopup");
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
        }, '#proprietorAnalyticsPage_comingSoonPopup');
        $(document).off("click", '#proprietorAnalyticsPage_comingSoonPopup [name="close"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio('comingSoonPopup').popup('close');
                }
            },
        }, '#proprietorAnalyticsPage_comingSoonPopup [name="close"]');
    };
    $(document).off("pagebeforeshow", "#proprietorAnalyticsPage").on("pagebeforeshow", "#proprietorAnalyticsPage", function(event, ui) {
        Apperyio.CurrentScreen = "proprietorAnalyticsPage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    proprietorAnalyticsPage_onLoad();
};
$(document).off("pagecreate", "#proprietorAnalyticsPage").on("pagecreate", "#proprietorAnalyticsPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    proprietorAnalyticsPage_js();
});