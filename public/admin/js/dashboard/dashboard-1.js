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
        borderColor: "#fff",
        color: "#eee",
        colors: { in: "rgba(192, 10, 39, 1)",
            gb: "rgba(192, 10, 39, 0.8)",
            tr: "rgba(192, 10, 39, 0.7)",
            us: "rgba(192, 10, 39, 0.6)",
            ru: "rgba(192, 10, 39, 0.5)",
        },
        onLabelShow: function(event, label, code) {
            label.text(label.text() + " (" + gdpData[code] + ")");
        },
        enableZoom: true,
        showTooltip: true,
        selectedColor: "rgba(192, 10, 39,1)",
        hoverColor: "rgba(192, 10, 39,0.8)",
    });



    /*======== 16. ANALYTICS - ACTIVITY CHART ========*/
    var activity = document.getElementById("activity");
    if (activity !== null) {
        var activityData = [{
                first: [0, 65, 52, 115, 98, 165, 125],
                second: [40, 100, 90, 150, 140, 200, 160]
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
                        backgroundColor: "rgba(21, 101, 192, 1)",
                        borderColor: "rgba(21, 101, 192, 1)",
                        data: activityData[0].first,
                        borderWidth: 2,
                    },
                    {
                        label: "Inactive",
                        backgroundColor: 'rgba(21, 101, 192, 0.61)',
                        borderColor: "rgba(21, 101, 192, 0.61)",
                        data: activityData[0].second,
                        
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
                            fontColor: "#999",
                        },
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                            zeroLineColor: "transparent"
                        },
                        ticks: {
                            stepSize: 50,
                            fontColor: "#999",
                            fontFamily: "Nunito, sans-serif"
                        }
                    }]
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                    titleFontColor: "#888",
                    bodyFontColor: "#555",
                    titleFontSize: 12,
                    bodyFontSize: 15,
                    backgroundColor: "rgba(256,256,256,0.95)",
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
                    "rgba(85, 139, 47, .9)",
                    "rgba(85, 139, 47, .7)",
                    "rgba(85, 139, 47, .5)",
                    "rgba(85, 139, 47, .07)"
                ],
                hoverBackgroundColor: [
                    "rgba(85, 139, 47, .9)",
                    "rgba(85, 139, 47, .7)",
                    "rgba(85, 139, 47, .5)",
                    "rgba(85, 139, 47, .07)"
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
            backgroundColor: "rgba(0,131,143,1)",
            strokeColor: "rgba(0,131,143,1)",
            pointColor: "rgba(0,0,0,0)",
            pointStrokeColor: "rgba(0,0,0,0)",
            pointHighlightFill: "rgba(0,131,143,1)",
            pointHighlightStroke: "rgba(0,131,143,1)",
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
                        zeroLineColor: "#0277bd"
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

	//#chart_widget_8
	
    new Chartist.Line("#chart_widget_8", {
		//alert("kkk");
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        series: [
            [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6]
        ]
    }, {
        low: 0,
        showArea: !1,
        showPoint: !0,
        showLine: !0,
        fullWidth: !0,
        lineSmooth: !1,
        chartPadding: {
            top: 4,
            right: 0,
            bottom: 0,
            left: 0
        },
        axisX: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        },
        axisY: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        }
    });	
	


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
	
//#chart_widget_1	
if(jQuery('#chart_widget_1').length > 0 ){
	
    const chart_widget_1 = document.getElementById("chart_widget_1").getContext('2d');
    //generate gradient
    // const gradientStroke = chart_widget_1.createLinearGradient(0, 0, 0, 250);
    // gradientStroke.addColorStop(0, "#00abc5");
    // gradientStroke.addColorStop(1, "#000080");

    // chart_widget_1.attr('height', '100');

    new Chart(chart_widget_1, {
        type: 'bar',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(255, 255, 255, .8)',
                    borderWidth: "0",
                    backgroundColor: 'rgba(255, 255, 255, .8)', 
                    hoverBackgroundColor: 'rgba(255, 255, 255, .8)'
                }
            ]
        },
        options: {
            legend: false,
            responsive: true, 
            maintainAspectRatio: false,  
            scales: {
                yAxes: [{
                    display: false, 
                    ticks: {
                        beginAtZero: true, 
                        display: false, 
                        max: 100, 
                        min: 0, 
                        stepSize: 10
                    }, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: false, 
                    barPercentage: 0.5, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }, 
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });

}		
		
//#chart_widget_2
if(jQuery('#chart_widget_2').length > 0 ){
	
    const chart_widget_2 = document.getElementById("chart_widget_2").getContext('2d');
    //generate gradient
    const chart_widget_2gradientStroke = chart_widget_2.createLinearGradient(0, 0, 0, 250);
    chart_widget_2gradientStroke.addColorStop(0, "#c00a27");
    chart_widget_2gradientStroke.addColorStop(1, "#ce1d76");

    // chart_widget_2.attr('height', '100');

    new Chart(chart_widget_2, {
        type: 'bar',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76],
                    borderColor: chart_widget_2gradientStroke,
                    borderWidth: "0",
                    backgroundColor: chart_widget_2gradientStroke, 
                    hoverBackgroundColor: chart_widget_2gradientStroke
                }
            ]
        },
        options: {
            legend: false,
            responsive: true, 
            maintainAspectRatio: false,  
            scales: {
                yAxes: [{
                    display: false, 
                    ticks: {
                        beginAtZero: true, 
                        display: false, 
                        max: 100, 
                        min: 0, 
                        stepSize: 10
                    }, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: false, 
                    barPercentage: 0.1, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }, 
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });

}
		
		
//#chart_widget_5
if(jQuery('#chart_widget_5').length > 0 ){
    new Chartist.Line("#chart_widget_5", {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        series: [
            [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6]
        ]
    }, 
	{
        low: 0,
        showArea: 1,
        showPoint: !0,
        showLine: !0,
        fullWidth: !0,
        lineSmooth: !1,
        chartPadding: {
            top: 4,
            right: 0,
            bottom: 0,
            left: 0
        },
        axisX: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        },
        axisY: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        }
    });
}
	
//#chart_widget_17


    data = [];
    const totalPoints = 50;

	function getRandomData() {
		if (data.length > 0)
			data = data.slice(1);
		while (data.length < totalPoints) {
			var prev = data.length > 0 ? data[data.length - 1] : 50,
				y = prev + Math.random() * 10 - 5;
			if (y < 0) {
				y = 0;
			} else if (y > 100) {
				y = 100;
			}
			data.push(y);
		}
		const res = [];
		for (let i = 0; i < data.length; ++i) {
			res.push([i, data[i]])
		}
		return res;
	}

	// Set up the control widget
	const updateInterval = 1000;

		if(jQuery('#chart_widget_17').length > 0 ){
	
	const chart = $.plot('#chart_widget_17', [getRandomData()], {
		colors: ['#00abc5'],
		series: {
			lines: {
				show: true,
				lineWidth: 0,
				fill: 0.9
			},
			shadowSize: 0	// Drawing is faster without shadows
		},
		grid: {
			borderColor: 'transparent',
			borderWidth: 0,
            labelMargin: 0
		},
		xaxis: {
			color: 'transparent',
			font: {
				size: 10,
				color: '#fff'
            }
		},
		yaxis: {
			min: 0,
			max: 100,
			color: 'transparent',
			font: {
				size: 10,
				color: '#fff'
            }
		}
	});

		/* function update_chart() {
		chart.setData([getRandomData()]);
		chart.draw();
		setTimeout(update_chart, updateInterval);
		}
    
		update_chart(); */
		
	}
	
	var direction =  getUrlParams('dir');
	if(direction != 'rtl')
	{direction = 'ltr'; }
	
	new dezSettings({
		typography: "roboto",
		version: "light",
		layout: "vertical",
		headerBg: "color_1",
		navheaderBg: "color_1",
		sidebarBg: "color_1",
		sidebarStyle: "compect",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "wide",
		direction: direction
	}); 	
		
})(jQuery);

const wt = new PerfectScrollbar('.widget-todo');
const wtl = new PerfectScrollbar('.widget-timeline');


