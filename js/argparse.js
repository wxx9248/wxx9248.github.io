function getQueryVariable(variable)
{
    "use strict";
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++)
    {
        let pair = vars[i].split("=");
        if (pair[0] === variable)
        {
            return pair[1];
        }
    }
    return false;
}

$(document).ready(
    function()
    {
        let code = getQueryVariable("code");
        let msg = getQueryVariable("msg");

        if (code && msg)
        {
            showNotificationBarWithFading(decodeURI(code), decodeURI(msg));
        }
    }
)
