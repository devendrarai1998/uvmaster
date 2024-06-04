(function($) {
    "use strict";

    $(".counter").counterUp({
        delay: 30,
        time: 3000
    });

    //     const wc = new PerfectScrollbar('.widget-chat');
    //     const wt = new PerfectScrollbar('.widget-todo');
    //   const wtm = new PerfectScrollbar(".widget-team");
    //     const wtl = new PerfectScrollbar('.widget-timeline');
    //     const wcm = new PerfectScrollbar('.widget-comments');
    var gdpData = {
        "us": 34.56,
        "in": 34.56,
        "gb": 34.56,
        "tr": 34.56,
        "ru": 34.56,
    }


    $("#world-map").vectorMap({
        map: "world_en",
        backgroundColor: "transparent",
        borderColor: "#262932",
        color: "#383c46",
        colors: { in: "#1e78ff",
            gb: "#1e78ff",
            tr: "#1e78ff",
            us: "#1e78ff",
            ru: "#1e78ff",
        },
        onLabelShow: function(event, label, code) {
            label.text(label.text() + " (" + gdpData[code] + ")");
        },
        enableZoom: true,
        showTooltip: true,
        selectedColor: "#1e78ff",
        hoverColor: "#1e78ff",
    });



    /*======== 16. ANALYTICS - ACTIVITY CHART ========*/
    /*
	    const areaChart_2 = document.getElementById("activity").getContext('2d');
    //generate gradient
    const areaChart_2gradientStroke = areaChart_2.createLinearGradient(500, 0, 100, 0);
	 const areaChart_3gradientStroke = areaChart_2.createLinearGradient(500, 0, 100, 0);
    areaChart_2gradientStroke.addColorStop(0, "rgba(26, 51, 213, 1)");
    areaChart_2gradientStroke.addColorStop(1, "rgba(26, 51, 213, 0.5)");
    
	 areaChart_3gradientStroke.addColorStop(0, "rgba(68, 0, 235, .5");
    areaChart_3gradientStroke.addColorStop(1, "rgba(68, 236, 245, .5");

	
    areaChart_2.height = 100;

    new Chart(areaChart_2, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "Active",
                    data: [25, 20, 60, 41, 66, 45, 80],
                    borderColor: areaChart_2gradientStroke,
                    //borderWidth: "1",
                    backgroundColor: areaChart_2gradientStroke,
					borderWidth: 2,
                        pointRadius: 0,
                },
				{
                    label: "Inactive",
                    data: [60, 30, 80, 60, 86, 55, 90],
                    borderColor: areaChart_3gradientStroke,
                   // borderWidth: "1",
                    backgroundColor: areaChart_3gradientStroke,
					borderWidth: 2,
                        pointRadius: 0,
                }
            ]
        },
        options: {
			responsive: true,
                maintainAspectRatio: false,	
            legend: false, 
            scales: {
                yAxes: [{
					gridLines: {
                            color: "rgba(89, 59, 219,0.1)",
                            drawBorder: true
                        },	
                    ticks: {
                        beginAtZero: true, 
                        max: 100, 
                        min: 0, 
                        stepSize: 10, 
                        padding: 10,
						fontColor: "#fff",
					}
                }],
                xAxes: [{
					gridLines: {
                            display: false,
                            zeroLineColor: "transparent"
                        },	
                    ticks: {
                        padding: 5,
						fontColor: "#fff",
                        fontFamily: "Nunito, sans-serif"
                    }
                }]
            },
			tooltips: {
                    mode: "index",
                    intersect: false,
                    titleFontColor: "#fff",
                    bodyFontColor: "#fff",
                    titleFontSize: 12,
                    bodyFontSize: 15,
                    backgroundColor: "rgba(0,0,0,0.95)",
                    displayColors: true,
                    xPadding: 10,
                    yPadding: 7,
                    borderColor: "rgba(220, 220, 220, 0.9)",
                    borderWidth: 2,
                    caretSize: 6,
                    caretPadding: 5
                }
        }
    });
	*/
	
	var activity = document.getElementById("activity").getContext('2d');
	  const areaChart_2gradientStroke = activity.createLinearGradient(1000, 0, 100, 0);
    areaChart_2gradientStroke.addColorStop(0, "rgba(30, 120, 255, 1)");
    areaChart_2gradientStroke.addColorStop(1, "rgba(94, 30, 255, 1)");
	  const areaChart_3gradientStroke = activity.createLinearGradient(1000, 0, 100, 0);
    areaChart_3gradientStroke.addColorStop(0, "rgba(57, 137, 255, 1)");
    areaChart_3gradientStroke.addColorStop(1, "rgba(112, 57, 255, 1)");
    if (activity !== null) {
        var activityData = [{
                first: [0, 65, 52, 115, 98, 165, 125],
                second: [40, 105, 92, 155, 138, 205, 165]
            },
            {
                first: [0, 65, 77, 33, 49, 100, 100],
                second: [20, 85, 97, 53, 69, 120, 120]
            },
            {
                first: [0, 40, 77, 55, 33, 116, 50],
                second: [30, 70, 107, 85, 73, 146, 80, ]
            },
            {
                first: [0, 44, 22, 77, 33, 151, 99],
                second: [60, 32, 120, 55, 19, 134, 88]
            }
        ];

        activity.height = 100;

        var config = {
            type: "line",
            /*data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [25, 20, 60, 41, 66, 45, 80],
                    borderColor: areaChart_2gradientStroke,
                    borderWidth: "1",
                     backgroundColor: areaChart_2gradientStroke,
                }
            ]
        },
        options: {
            legend: false, 
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true, 
                        max: 100, 
                        min: 0, 
                        stepSize: 20, 
                        padding: 10
                    }
                }],
                xAxes: [{ 
                    ticks: {
                        padding: 5
                    }
                }]
            }
        }*/
			data: {
                labels: [
                    "4 Jan",
                    "5 Jan",
                    "6 Jan",
                    "7 Jan",
                    "8 Jan",
                    "9 Jan",
                    "10 Jan"
                ],
                datasets: [{
                        label: "Active",
                        borderColor: areaChart_3gradientStroke,
						borderWidth: "1",
						backgroundColor: areaChart_3gradientStroke,
                        data: activityData[0].first,
                        borderWidth: 2,
                    },
                    {
                        label: "Inactive",
                        backgroundColor: areaChart_2gradientStroke,
                        borderColor: areaChart_2gradientStroke,
                        data: activityData[0].second,
                        borderWidth: 2,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: "rgba(89, 59, 219,0.1)",
                            drawBorder: true
                        },
                        ticks: {
                            fontColor: "#fff",
                        },
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                            zeroLineColor: "transparent"
                        },
                        ticks: {
                            stepSize: 80,
                            fontColor: "#fff",
                            fontFamily: "Nunito, sans-serif"
                        }
                    }]
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                    titleFontColor: "#fff",
                    bodyFontColor: "#fff",
                    titleFontSize: 12,
                    bodyFontSize: 15,
                    backgroundColor: "rgba(0,0,0,0.95)",
                    displayColors: true,
                    xPadding: 10,
                    yPadding: 7,
                    borderColor: "rgba(220, 220, 220, 0.9)",
                    borderWidth: 2,
                    caretSize: 6,
                    caretPadding: 5
                }
            }
        };



        var ctx = document.getElementById("activity").getContext("2d");
        var myLine = new Chart(ctx, config);

        var items = document.querySelectorAll("#user-activity .nav-tabs .nav-item");
        items.forEach(function(item, index) {
            item.addEventListener("click", function() {
                config.data.datasets[0].data = activityData[index].first;
                config.data.datasets[1].data = activityData[index].second;
                myLine.update();
            });
        });
    }
	
	

    var nk = document.getElementById("sold-product");
    // nk.height = 50
    new Chart(nk, {
        type: 'pie',
        data: {
            defaultFontFamily: 'Poppins',
            datasets: [{
                data: [45, 25, 20, 10],
                borderWidth: 0,
                backgroundColor: [
                    "rgba(30, 120, 255, 0.97)",
                    "rgba(30, 120, 255, .85)",
                    "rgba(30, 120, 255, .7)",
                    "rgba(30, 120, 255, .3)"
                ],
                hoverBackgroundColor: [
                    "rgba(30, 120, 255, 1)",
                    "rgba(30, 120, 255, .9)",
                    "rgba(30, 120, 255, .8)",
                    "rgba(30, 120, 255, .5)"
                ]

            }],
            labels: [
                "one",
                "two",
                "three",
                "four"
            ]
        },
        options: {
            responsive: true,
            legend: false,
            maintainAspectRatio: false
        }
    });

    var data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "0", "1", "2", "3", "4", "5", "6"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: "rgba(30,120,255,1)",
            strokeColor: "rgba(30,120,255,1)",
            pointColor: "rgba(0,0,0,0)",
            pointStrokeColor: "rgba(0,0,0,0)",
            pointHighlightFill: "rgba(30,120,255,1)",
            pointHighlightStroke: "rgba(30,120,255,1)",
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40]
        }]
    };

    var ctx = document.getElementById("activeUser").getContext("2d");
    var chart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: {
            responsive: !0,
            maintainAspectRatio: false,
            legend: {
                display: !1
            },
            tooltips: {
                enabled: false
            },
            scales: {
                xAxes: [{
                    display: !1,
                    gridLines: {
                        display: !1
                    },
                    barPercentage: 0.9,
                    categoryPercentage: 1
                }],
                yAxes: [{
                    display: !1,
                    ticks: {
                        padding: 10,
                        stepSize: 10,
                        max: 100,
                        min: 0
                    },
                    gridLines: {
                        display: !0,
                        drawBorder: !1,
                        lineWidth: 1,
                        zeroLineColor: "#1e78ff"
                    }
                }]
            }
        }
    });

    setInterval(function() {
        chart.config.data.datasets[0].data.push(
            Math.floor(10 + Math.random() * 80)
        );
        chart.config.data.datasets[0].data.shift();
        chart.update();
    }, 2000);




    ////////////
    function r(t, r) {
        return Math.floor(Math.random() * (r - t + 1) + t);
    }
    var interval = 2e3,
        variation = 5,
        c = r(5, 2e3);
    $("#counter").text(c),
        setInterval(function() {
            var t = r(-variation, variation);
            (c += t), $("#counter").text(c);
        }, interval);
		
	var direction =  getUrlParams('dir');
	if(direction != 'rtl')
	{direction = 'ltr'; }	
		
	new dezSettings({
		typography: "roboto",
		version: "dark",
		layout: "vertical",
		headerBg: "color_1",
		navheaderBg: "color_1",
		sidebarBg: "color_1",
		sidebarStyle: "full",
		sidebarPosition: "static",
		headerPosition: "static",
		containerLayout: "wide",
		direction: direction,
		primary: "color_7"
	}); 
	
	
})(jQuery);


const wt = new PerfectScrollbar('.widget-todo');
const wtl = new PerfectScrollbar('.widget-timeline');