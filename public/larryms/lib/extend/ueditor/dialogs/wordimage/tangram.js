var T,baidu=T=baidu||{version:"1.5.0"};baidu.guid="$BAIDU$";baidu.$$=window[baidu.guid]=window[baidu.guid]||{global:{}};baidu.flash=baidu.flash||{};baidu.dom=baidu.dom||{};baidu.dom.g=function(e){if(!e)return null;if("string"==typeof e||e instanceof String){return document.getElementById(e)}else if(e.nodeName&&(e.nodeType==1||e.nodeType==9)){return e}return null};baidu.g=baidu.G=baidu.dom.g;baidu.array=baidu.array||{};baidu.each=baidu.array.forEach=baidu.array.each=function(e,n,a){var t,i,r,o=e.length;if("function"==typeof n){for(r=0;r<o;r++){i=e[r];t=n.call(a||e,i,r);if(t===false){break}}}return e};baidu.lang=baidu.lang||{};baidu.lang.isFunction=function(e){return"[object Function]"==Object.prototype.toString.call(e)};baidu.lang.isString=function(e){return"[object String]"==Object.prototype.toString.call(e)};baidu.isString=baidu.lang.isString;baidu.browser=baidu.browser||{};baidu.browser.opera=/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent)?+(RegExp["$6"]||RegExp["$2"]):undefined;baidu.dom.insertHTML=function(e,n,a){e=baidu.dom.g(e);var t,i;if(e.insertAdjacentHTML&&!baidu.browser.opera){e.insertAdjacentHTML(n,a)}else{t=e.ownerDocument.createRange();n=n.toUpperCase();if(n=="AFTERBEGIN"||n=="BEFOREEND"){t.selectNodeContents(e);t.collapse(n=="AFTERBEGIN")}else{i=n=="BEFOREBEGIN";t[i?"setStartBefore":"setEndAfter"](e);t.collapse(i)}t.insertNode(t.createContextualFragment(a))}return e};baidu.insertHTML=baidu.dom.insertHTML;baidu.swf=baidu.swf||{};baidu.swf.version=function(){var e=navigator;if(e.plugins&&e.mimeTypes.length){var n=e.plugins["Shockwave Flash"];if(n&&n.description){return n.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0"}}else if(window.ActiveXObject&&!window.opera){for(var a=12;a>=2;a--){try{var t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+a);if(t){var i=t.GetVariable("$version");return i.replace(/WIN/g,"").replace(/,/g,".")}}catch(e){}}}}();baidu.string=baidu.string||{};baidu.string.encodeHTML=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")};baidu.encodeHTML=baidu.string.encodeHTML;baidu.swf.createHTML=function(e){e=e||{};var n=baidu.swf.version,a=e["ver"]||"6.0.0",t,i,r,o,u,l,d={},s=baidu.string.encodeHTML;for(o in e){d[o]=e[o]}e=d;if(n){n=n.split(".");a=a.split(".");for(r=0;r<3;r++){t=parseInt(n[r],10);i=parseInt(a[r],10);if(i<t){break}else if(i>t){return""}}}else{return""}var c=e["vars"],f=["classid","codebase","id","width","height","align"];e["align"]=e["align"]||"middle";e["classid"]="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";e["codebase"]="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0";e["movie"]=e["url"]||"";delete e["vars"];delete e["url"];if("string"==typeof c){e["flashvars"]=c}else{var b=[];for(o in c){l=c[o];b.push(o+"="+encodeURIComponent(l))}e["flashvars"]=b.join("&")}var p=["<object "];for(r=0,u=f.length;r<u;r++){l=f[r];p.push(" ",l,'="',s(e[l]),'"')}p.push(">");var g={wmode:1,scale:1,quality:1,play:1,loop:1,menu:1,salign:1,bgcolor:1,base:1,allowscriptaccess:1,allownetworking:1,allowfullscreen:1,seamlesstabbing:1,devicefont:1,swliveconnect:1,flashvars:1,movie:1};for(o in e){l=e[o];o=o.toLowerCase();if(g[o]&&(l||l===false||l===0)){p.push('<param name="'+o+'" value="'+s(l)+'" />')}}e["src"]=e["movie"];e["name"]=e["id"];delete e["id"];delete e["movie"];delete e["classid"];delete e["codebase"];e["type"]="application/x-shockwave-flash";e["pluginspage"]="http://www.macromedia.com/go/getflashplayer";p.push("<embed");var m;for(o in e){l=e[o];if(l||l===false||l===0){if(new RegExp("^salign$","i").test(o)){m=l;continue}p.push(" ",o,'="',s(l),'"')}}if(m){p.push(' salign="',s(m),'"')}p.push("></embed></object>");return p.join("")};baidu.swf.create=function(e,n){e=e||{};var a=baidu.swf.createHTML(e)||e["errorMessage"]||"";if(n&&"string"==typeof n){n=document.getElementById(n)}baidu.dom.insertHTML(n||document.body,"beforeEnd",a)};baidu.browser.ie=baidu.ie=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp["$1"]:undefined;baidu.array.remove=function(e,n){var a=e.length;while(a--){if(a in e&&e[a]===n){e.splice(a,1)}}return e};baidu.lang.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)};baidu.lang.toArray=function(e){if(e===null||e===undefined)return[];if(baidu.lang.isArray(e))return e;if(typeof e.length!=="number"||typeof e==="string"||baidu.lang.isFunction(e)){return[e]}if(e.item){var n=e.length,a=new Array(n);while(n--)a[n]=e[n];return a}return[].slice.call(e)};baidu.swf.getMovie=function(e){var n=document[e],a;return baidu.browser.ie==9?n&&n.length?(a=baidu.array.remove(baidu.lang.toArray(n),function(e){return e.tagName.toLowerCase()!="embed"})).length==1?a[0]:a:n:n||window[e]};baidu.flash._Base=function(){var e="bd__flash__";function a(){return e+Math.floor(Math.random()*2147483648).toString(36)}function c(e){if(typeof e!=="undefined"&&typeof e.flashInit!=="undefined"&&e.flashInit()){return true}else{return false}}function f(e,n){var a=null;e=e.reverse();baidu.each(e,function(e){a=n.call(e.fnName,e.params);e.callBack(a)})}function b(e){var n="";if(baidu.lang.isFunction(e)){n=a();window[n]=function(){e.apply(window,arguments)};return n}else if(baidu.lang.isString){return e}}function p(e){if(!e.id){e.id=a()}var n=e.container||"";delete e.container;baidu.swf.create(e,n);return baidu.swf.getMovie(e.id)}return function(a,t){var e=this,n=typeof a.autoRender!=="undefined"?a.autoRender:true,i=a.createOptions||{},r=null,o=false,u=[],l=null,t=t||[];e.render=function(){r=p(i);if(t.length>0){baidu.each(t,function(e,n){t[n]=b(a[e]||new Function)})}e.call("setJSFuncName",[t])};e.isReady=function(){return o};e.call=function(e,n,a){if(!e)return null;a=a||new Function;var t=null;if(o){t=r.call(e,n);a(t)}else{u.push({fnName:e,params:n,callBack:a});!l&&(l=setInterval(d,200))}};e.createFunName=function(e){return b(e)};function d(){if(c(r)){clearInterval(l);l=null;s();o=true}}function s(){f(u,r);u=[]}n&&e.render()}}();baidu.flash.imageUploader=baidu.flash.imageUploader||function(e){var n=this,e=e||{},a=new baidu.flash._Base(e,["selectFileCallback","exceedFileCallback","deleteFileCallback","startUploadCallback","uploadCompleteCallback","uploadErrorCallback","allCompleteCallback","changeFlashHeight"]);n.upload=function(){a.call("upload")};n.pause=function(){a.call("pause")};n.addCustomizedParams=function(e,n){a.call("addCustomizedParams",[e,n])}};baidu.object=baidu.object||{};baidu.extend=baidu.object.extend=function(e,n){for(var a in n){if(n.hasOwnProperty(a)){e[a]=n[a]}}return e};baidu.flash.fileUploader=baidu.flash.fileUploader||function(e){var n=this,e=e||{};e.createOptions=baidu.extend({wmod:"transparent"},e.createOptions||{});var i=new baidu.flash._Base(e,["selectFile","exceedMaxSize","deleteFile","uploadStart","uploadComplete","uploadError","uploadProgress"]);i.call("setMaxNum",e.maxNum?[e.maxNum]:[1]);n.setHandCursor=function(e){i.call("setHandCursor",[e||false])};n.setMSFunName=function(e){i.call("setMSFunName",[i.createFunName(e)])};n.upload=function(e,n,a,t){if(typeof e!=="string"||typeof n!=="string")return null;if(typeof t==="undefined")t=-1;i.call("upload",[e,n,a,t])};n.cancel=function(e){if(typeof e==="undefined")e=-1;i.call("cancel",[e])};n.deleteFile=function(e,n){var a=function(e){n&&n(e)};if(typeof e==="undefined"){i.call("deleteFilesAll",[],a);return}if(typeof e==="Number")e=[e];e.sort(function(e,n){return n-e});baidu.each(e,function(e){i.call("deleteFileBy",e,a)})};n.addFileType=function(e){var e=e||[[]];if(e instanceof Array)e=[e];else e=[[e]];i.call("addFileTypes",e)};n.setFileType=function(e){var e=e||[[]];if(e instanceof Array)e=[e];else e=[[e]];i.call("setFileTypes",e)};n.setMaxNum=function(e){i.call("setMaxNum",[e])};n.setMaxSize=function(e){i.call("setMaxSize",[e])};n.getFileAll=function(e){i.call("getFileAll",[],e)};n.getFileByIndex=function(e,n){i.call("getFileByIndex",[],n)};n.getStatusByIndex=function(e,n){i.call("getStatusByIndex",[],n)}};baidu.sio=baidu.sio||{};baidu.sio._createScriptTag=function(e,n,a){e.setAttribute("type","text/javascript");a&&e.setAttribute("charset",a);e.setAttribute("src",n);document.getElementsByTagName("head")[0].appendChild(e)};baidu.sio._removeScriptTag=function(e){if(e.clearAttributes){e.clearAttributes()}else{for(var n in e){if(e.hasOwnProperty(n)){delete e[n]}}}if(e&&e.parentNode){e.parentNode.removeChild(e)}e=null};baidu.sio.callByBrowser=function(e,n,a){var t=document.createElement("SCRIPT"),i=0,r=a||{},o=r["charset"],u=n||function(){},l=r["timeOut"]||0,d;t.onload=t.onreadystatechange=function(){if(i){return}var e=t.readyState;if("undefined"==typeof e||e=="loaded"||e=="complete"){i=1;try{u();clearTimeout(d)}finally{t.onload=t.onreadystatechange=null;baidu.sio._removeScriptTag(t)}}};if(l){d=setTimeout(function(){t.onload=t.onreadystatechange=null;baidu.sio._removeScriptTag(t);r.onfailure&&r.onfailure()},l)}baidu.sio._createScriptTag(t,e,o)};baidu.sio.callByServer=function(e,n,a){var t=document.createElement("SCRIPT"),i="bd__cbs__",r,o,u=a||{},l=u["charset"],d=u["queryField"]||"callback",s=u["timeOut"]||0,c,f=new RegExp("(\\?|&)"+d+"=([^&]*)"),b;if(baidu.lang.isFunction(n)){r=i+Math.floor(Math.random()*2147483648).toString(36);window[r]=p(0)}else if(baidu.lang.isString(n)){r=n}else{if(b=f.exec(e)){r=b[2]}}if(s){c=setTimeout(p(1),s)}e=e.replace(f,"$1"+d+"="+r);if(e.search(f)<0){e+=(e.indexOf("?")<0?"?":"&")+d+"="+r}baidu.sio._createScriptTag(t,e,l);function p(e){return function(){try{if(e){u.onfailure&&u.onfailure()}else{n.apply(window,arguments);clearTimeout(c)}window[r]=null;delete window[r]}catch(e){}finally{baidu.sio._removeScriptTag(t)}}}};baidu.sio.log=function(e){var n=new Image,a="tangram_sio_log_"+Math.floor(Math.random()*2147483648).toString(36);window[a]=n;n.onload=n.onerror=n.onabort=function(){n.onload=n.onerror=n.onabort=null;window[a]=null;n=null};n.src=e};baidu.json=baidu.json||{};baidu.json.parse=function(e){return new Function("return ("+e+")")()};baidu.json.decode=baidu.json.parse;baidu.json.stringify=function(){var a={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function o(e){if(/["\\\x00-\x1f]/.test(e)){e=e.replace(/["\\\x00-\x1f]/g,function(e){var n=a[e];if(n){return n}n=e.charCodeAt();return"\\u00"+Math.floor(n/16).toString(16)+(n%16).toString(16)})}return'"'+e+'"'}function u(e){var n=["["],a=e.length,t,i,r;for(i=0;i<a;i++){r=e[i];switch(typeof r){case"undefined":case"function":case"unknown":break;default:if(t){n.push(",")}n.push(baidu.json.stringify(r));t=1}}n.push("]");return n.join("")}function n(e){return e<10?"0"+e:e}function l(e){return'"'+e.getFullYear()+"-"+n(e.getMonth()+1)+"-"+n(e.getDate())+"T"+n(e.getHours())+":"+n(e.getMinutes())+":"+n(e.getSeconds())+'"'}return function(e){switch(typeof e){case"undefined":return"undefined";case"number":return isFinite(e)?String(e):"null";case"string":return o(e);case"boolean":return String(e);default:if(e===null){return"null"}else if(e instanceof Array){return u(e)}else if(e instanceof Date){return l(e)}else{var n=["{"],a=baidu.json.stringify,t,i;for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){i=e[r];switch(typeof i){case"undefined":case"unknown":case"function":break;default:if(t){n.push(",")}t=1;n.push(a(r)+":"+a(i))}}}n.push("}");return n.join("")}}}}();baidu.json.encode=baidu.json.stringify;