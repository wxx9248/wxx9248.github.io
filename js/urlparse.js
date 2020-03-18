function getQueryVariable(variable)
{
    "use strict";
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++)
    {
        var pair = vars[i].split("=");
        if (pair[0] == variable)
        {
            return pair[1];
        }
    }
    return false;
}

$(document).ready(
    function ()
    {
        "use strict";
        var code = getQueryVariable("code");
        var msg = getQueryVariable("msg");
        
        if (code && msg)
        {
            showNotificationBarWithFading(code, msg);
        }
    }
)