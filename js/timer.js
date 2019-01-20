/* 
 * Implementation of a Javascript timer
 * 	    	   by wxx9248
 *		       2019/01/20
 */

function timer() {
    const Tstart = new Date("2019/01/19 16:26:11");
    const MSPERSEC = 1000;
    const SECPERMIN = 60;
    const SECPERHR = 3600;
    const SECPERDAY = 86400;

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
window.onload = timer();