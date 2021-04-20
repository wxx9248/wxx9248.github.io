function showNotificationBarWithFading(code, msg)
{
    "use strict";
    let bar = showNotificationBar(code, msg);
    setTimeout(
        function()
        {
            closeNotificationBar(bar);
        }, 3000);
}

function showNotificationBar(code, msg)
{
    "use strict";
    let bar = $("div#nav-notification");

    $("ul#ul-nav").fadeOut(500);
    setTimeout(
        function()
        {
            bar.html(msg + " (" + code + ")");
            bar.fadeIn(500);
            if (screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary")
            {
                setTimeout(
                    function()
                    {
                        let toggler = $("button#nav-mobile-toggler");
                        if (toggler.attr("aria-expanded") === "false")
                        {
                            toggler.click();
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
            if (screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary")
            {
                let toggler = $("button#nav-mobile-toggler");
                if (toggler.attr("aria-expanded") === "true")
                {
                    toggler.click();
                }
            }
        }, 1250
    );
    setTimeout(
        function()
        {
            $("ul#ul-nav").fadeIn(500);
        }, 1500
    );
}
