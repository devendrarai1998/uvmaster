if(jQuery('#chart_widget_4').length > 0 ){

    const chart_widget_4 = document.getElementById("chart_widget_4").getContext('2d');
    
    // chart_widget_4.height = 100;

    let barChartData2 = {
        defaultFontFamily: 'Poppins',
        labels: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
        datasets: [{
            label: 'Expense',
            backgroundColor: '#75B432',
            hoverBackgroundColor: '#75B432', 
            data: [
                '20',
                '14',
                '18',
                '25',
                '27',
                '22',
                '12', 
                '24', 
                '20', 
                '14', 
                '18', 
                '16', 
                '34', 
                '32', 
                '43', 
                '36', 
                '56', 
                '12', 
                '23', 
                '34'
            ]
        }, {
            label: 'Earning',
            backgroundColor: '#F1F3F7',
            hoverBackgroundColor: '#F1F3F7', 
            data: [
                '32',
                '58',
                '34',
                '37',
                '15',
                '41',
                '24', 
                '38', 
                '52', 
                '38', 
                '24', 
                '19', 
                '54', 
                '34', 
                '23', 
                '34', 
                '35', 
                '22', 
                '43', 
                '33'
            ]
        }]

    };

    new Chart(chart_widget_4, {
        type: 'bar',
        data: barChartData2,
        options: {
            legend: {
                display: false
            }, 
            title: {
                display: false
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            maintainAspectRatio: false, 
            scales: {
                xAxes: [{
                    display: false, 
                    stacked: true,
                    barPercentage: 1, 
                    barThickness: 5, 
                    ticks: {
                        display: false
                    }, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    display: false, 
                    stacked: true, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }, 
                    ticks: {
                        display: false, 
                        max: 100, 
                        min: 0
                    }
                }]
            }
        }
    });

	}
	
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
	
	
let draw = Chart.controllers.line.__super__.draw; //draw shadow
//basic line chart
    const lineChart_1 = document.getElementById("lineChart_1").getContext('2d');

    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function () {
            draw.apply(this, arguments);
            let nk = this.chart.chart.ctx;
            let _stroke = nk.stroke;
            nk.stroke = function () {
                nk.save();
                nk.shadowColor = 'rgba(255, 0, 0, .2)';
                nk.shadowBlur = 10;
                nk.shadowOffsetX = 0;
                nk.shadowOffsetY = 10;
                _stroke.apply(this, arguments)
                nk.restore();
            }
        }
    });
    
    lineChart_1.height = 100;

    new Chart(lineChart_1, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [25, 20, 60, 41, 66, 45, 80],
                    borderColor: 'rgba(56, 164, 248, 1)',
                    borderWidth: "2",
                    backgroundColor: 'transparent',  
                    pointBackgroundColor: 'rgba(56, 164, 248, 1)'
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
        }
    });
    	
		
	//#chart_widget_3

	if(jQuery('#chart_widget_3').length > 0 ){
    const chart_widget_3 = document.getElementById("chart_widget_3").getContext('2d');
    
    // chart_widget_3.height = 100;

    let barChartData = {
        defaultFontFamily: 'Poppins',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Expense',
            backgroundColor: '#f91035',
            hoverBackgroundColor: '#f91035', 
            data: [
                '20',
                '14',
                '18',
                '25',
                '27',
                '22',
                '12', 
                '24', 
                '20', 
                '14', 
                '18', 
                '16'
            ]
        }, {
            label: 'Earning',
            backgroundColor: '#F1F3F7',
            hoverBackgroundColor: '#F1F3F7', 
            data: [
                '12',
                '18',
                '14',
                '7',
                '5',
                '10',
                '20', 
                '8', 
                '12', 
                '18', 
                '14', 
                '16'
            ]
        }]

    };

    new Chart(chart_widget_3, {
        type: 'bar',
        data: barChartData,
        options: {
            legend: {
                display: false
            }, 
            title: {
                display: false
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            maintainAspectRatio: false, 
            scales: {
                xAxes: [{
                    display: false, 
                    stacked: true,
                    barPercentage: .2, 
                    ticks: {
                        display: false
                    }, 
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    display: false, 
                    stacked: true, 
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


	//#chart_widget_6



    new Chartist.Line("#chart_widget_6", {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        series: [
            [4, 5, 3.5, 5, 4, 5.5, 3.8, 4.6]
        ]
    }, {
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
	
	
(function($) {
	"use strict"

	var direction =  getUrlParams('dir');
	if(direction != 'rtl')
	{direction = 'ltr'; }
	
	new dezSettings({
		typography: "roboto",
		version: "light",
		layout: "vertical",
		headerBg: "color_1",
		navheaderBg: "color_6",
		sidebarBg: "color_6",
		sidebarStyle: "full",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "wide",
		direction: direction
	}); 

})(jQuery);	
	
	
	
	
	
	
	
	