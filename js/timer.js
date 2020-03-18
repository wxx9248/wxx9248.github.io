/* 
 * Implementation of a Javascript timer
 * 	    	   by wxx9248
 *		       2019/01/20
 */

function timer() {
    "use strict";
    var Tstart = new Date("2019/01/19 16:26:11");
    var MSPERSEC = 1000;
    var SECPERMIN = 60;
    var SECPERHR = 3600;
    var SECPERDAY = 86400;

    var Tnow = new Date();
    var dSec = (Tnow.getTime() - Tstart.getTime()) / MSPERSEC;
    var d, h, m, s, fstr;

    d = Math.floor(dSec / SECPERDAY);
    dSec = dSec - d * SECPERDAY;
    h = Math.floor(dSec / SECPERHR);
    dSec = dSec - h * SECPERHR;
    m = Math.floor(dSec / SECPERMIN);
    dSec = dSec - m * SECPERMIN;
    s = Math.floor(dSec);

    fstr = "网站已开设：" + d + " 天 " + h + " 时 " + m + " 分 " + s + " 秒";
    document.getElementById("clockspan").innerHTML = fstr;
    window.setTimeout("timer();", MSPERSEC);
}

$(document).ready(
    function ()
    {
        "use strict";
        timer();
    }
)
