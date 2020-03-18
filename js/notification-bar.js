// Global varibles

function showNotificationBarWithFading(code, msg)
{
	"use strict";
	var bar = showNotificationBar(code, msg);
	setTimeout(
		function()
		{
			closeNotificationBar(bar);
		}, 3000);
}

function showNotificationBar(code, msg)
{
	"use strict";
	var bar = $("div#nav-notification");
    
    $("ul#ul-nav").fadeOut(500);
    setTimeout(
        function()
        {
            bar.html(msg + " (" + code + ")");
            bar.fadeIn(500);
        }, 500
    );
    
	return bar;
}

function closeNotificationBar(bar)
{
	"use strict";
    
	bar.fadeOut(1500);
    setTimeout(
        function()
        {
            $("ul#ul-nav").fadeIn(500);
        }, 1500
    );   
}
