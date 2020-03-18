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
            if (window.orientation === 180 || window.orientation === 0)
            {
                setTimeout(
                    function()
                    {
                        if ($("button#nav-mobile-toggler").attr("aria-expanded") === "false")
                        {
                            $("button#nav-mobile-toggler").click();
                        }
                    }, 250
                );
            }
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
            if (window.orientation === 180 || window.orientation === 0)
            {
                if ($("button#nav-mobile-toggler").attr("aria-expanded") === "true")
                {
                    $("button#nav-mobile-toggler").click();
                }
            }
        }, 1250
    )
    setTimeout(
        function()
        {
            $("ul#ul-nav").fadeIn(500);
        }, 1500
    );   
}
