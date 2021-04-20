/* 
 * Implementation of a Javascript timer
 * 	    	   by wxx9248
 *		       2019/01/20
 */

function timer()
{
    "use strict";
    const start = new Date("2019/01/19 16:26:11");
    const now = new Date();
    let seconds = (now.getTime() - start.getTime()) / 1000;
    let d, h, m, s, string;

    d = Math.floor(seconds / 86400);
    seconds = seconds - d * 86400;
    h = Math.floor(seconds / 3600);
    seconds = seconds - h * 3600;
    m = Math.floor(seconds / 60);
    seconds = seconds - m * 60;
    s = Math.floor(seconds);

    string = "网站已开设：" + d + " 天 " + h + " 时 " + m + " 分 " + s + " 秒";
    document.getElementById("clock-span").innerHTML = string;
    window.setTimeout("timer();", 1000);
}

$(document).ready(
    function()
    {
        "use strict";
        timer();
    }
)
