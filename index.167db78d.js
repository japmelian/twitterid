"use strict";var button=document.querySelector("#button"),resultDIV=document.querySelector("#resultDIV"),COLUMNS=["id","dateTwitter","milliseconds","reservedBit","dataCenter","workerThread","sequenceNumber"],MAX_TABLE_ROWS=10;function checkNumber(e){}function fillWithZeros(e){var t=e.length;return"0".repeat(64-t).concat(e)}function divide(e){var t=parseInt(e.substr(0,1),2),r=parseInt(e.substr(1,41),2)+1288834974675,n=parseInt(e.substr(42,5),2),a=parseInt(e.substr(47,5),2),s=parseInt(e.substr(52,12),2),u={};return u.reservedBit=t,u.timestamp=r,u.dataCenter=n,u.workerThread=a,u.sequenceNumber=s,u.dateTwitter=new Date(r).toGMTString(),u.milliseconds=new Date(r).getMilliseconds(),u}function deleteTable(){document.querySelector("table").remove()}function addRowToTable(e){var t=document.querySelector("tbody");t.rows.length==MAX_TABLE_ROWS&&t.deleteRow(-1);var r=document.createElement("tr");for(var n in COLUMNS){var a=document.createElement("td");a.innerText=e[COLUMNS[n]],a.className="text-left py-3 px-4",r.appendChild(a)}t.prepend(r);for(var s,u=0;s=t.rows[u];u++)s.className=u%2==0?"bg-gray-100":""}var calculate=function(){var e=BigInt(document.querySelector("input").value);baseBin=e.toString(2),baseBin=fillWithZeros(baseBin),results=divide(baseBin),results.id=e,addRowToTable(results)};button.addEventListener("click",calculate);
//# sourceMappingURL=index.167db78d.js.map
