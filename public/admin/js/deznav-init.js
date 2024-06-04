(function($) {
	
var direction =  getUrlParams('dir');
if(direction != 'rtl')
{direction = 'ltr'; }
	
new dezSettings({
	typography: "roboto",
	version: "light",
	layout: "Vertical",
	headerBg: "color_1",
	navheaderBg: "color_1",
	sidebarBg: "color_1",
	sidebarStyle: "full",
	sidebarPosition: "static",
	headerPosition: "static",
	containerLayout: "full",
	direction: direction
}); 

})(jQuery);