jQuery(document).ready(function(e){var t=e(".cd-horizontal-timeline"),n=220;function r(e,t,r){var a=f(e.eventsWrapper),s=Number(e.timelineWrapper.css("width").replace("px",""));"next"==r?l(e,a-s+n,s-t):l(e,a+s-n)}function a(e,t,n){var r=e.eventsContent.find(".selected");if(("next"==n?r.next():r.prev()).length>0){var a,v,d,c,m,u,g,h,$=e.eventsWrapper.find(".selected"),x="next"==n?$.parent("li").next("li").children("a"):$.parent("li").prev("li").children("a");s(x,e.fillingLine,t),o(x,e.eventsContent),x.addClass("selected"),$.removeClass("selected"),p(x),a=n,v=x,d=e,c=t,m=Number(window.getComputedStyle(v.get(0),null).getPropertyValue("left").replace("px","")),u=Number(d.timelineWrapper.css("width").replace("px","")),g=Number(d.eventsWrapper.css("width").replace("px","")),h=f(d.eventsWrapper),("next"==a&&m>u-h||"prev"==a&&m<-h)&&l(d,-m+u/2,u-g)}}function l(e,t,n){var r;t=t>0?0:t,v(e.eventsWrapper.get(0),"translateX",(t=void 0!==n&&t<n?n:t)+"px"),0==t?e.timelineNavigation.find(".prev").addClass("inactive"):e.timelineNavigation.find(".prev").removeClass("inactive"),t==n?e.timelineNavigation.find(".next").addClass("inactive"):e.timelineNavigation.find(".next").removeClass("inactive")}function s(e,t,n){var r=window.getComputedStyle(e.get(0),null),a=r.getPropertyValue("left"),l=r.getPropertyValue("width"),s=(a=Number(a.replace("px",""))+Number(l.replace("px",""))/2)/n;v(t.get(0),"scaleX",s)}function o(e,t){var n=e.data("date"),r=t.find(".selected"),a=t.find('[data-date="'+n+'"]'),l=a.height();if(a.index()>r.index())var s="selected enter-right",o="leave-left";else var s="selected enter-left",o="leave-right";a.attr("class",s),r.attr("class",o).one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){r.removeClass("leave-right leave-left"),a.removeClass("enter-left enter-right")}),t.css("height",l+"px")}function p(e){e.parent("li").prevAll("li").children("a").addClass("older-event").end().end().nextAll("li").children("a").removeClass("older-event")}function f(e){var t=window.getComputedStyle(e.get(0),null),n=t.getPropertyValue("-webkit-transform")||t.getPropertyValue("-moz-transform")||t.getPropertyValue("-ms-transform")||t.getPropertyValue("-o-transform")||t.getPropertyValue("transform");if(n.indexOf("(")>=0)var n=n.split("(")[1],r=(n=(n=n.split(")")[0]).split(","))[4];else var r=0;return Number(r)}function v(e,t,n){e.style["-webkit-transform"]=t+"("+n+")",e.style["-moz-transform"]=t+"("+n+")",e.style["-ms-transform"]=t+"("+n+")",e.style["-o-transform"]=t+"("+n+")",e.style.transform=t+"("+n+")"}function d(t){var n=[];return t.each(function(){var t=e(this).data("date").split("T");if(t.length>1)var r=t[0].split("/"),a=t[1].split(":");else if(t[0].indexOf(":")>=0)var r=["2000","0","0"],a=t[0].split(":");else var r=t[0].split("/"),a=["0","0"];var l=new Date(r[2],r[1]-1,r[0],a[0],a[1]);n.push(l)}),n}function c(e,t){return Math.round(t-e)}function m(e){for(var t=e.offsetTop,n=e.offsetLeft,r=e.offsetWidth,a=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,n+=e.offsetLeft;return t<window.pageYOffset+window.innerHeight&&n<window.pageXOffset+window.innerWidth&&t+a>window.pageYOffset&&n+r>window.pageXOffset}function u(){return window.getComputedStyle(document.querySelector(".cd-horizontal-timeline"),"::before").getPropertyValue("content").replace(/'/g,"").replace(/"/g,"")}767>e(window).width()&&(n=40),t.length>0&&function t(l){l.each(function(){var t,l,f,v,d,g,h=e(this),$={};$.timelineWrapper=h.find(".events-wrapper"),$.eventsWrapper=$.timelineWrapper.children(".events"),$.fillingLine=$.eventsWrapper.children(".filling-line"),$.timelineEvents=$.eventsWrapper.find("a"),$.timelineDates=(t=$.timelineEvents,l=[],t.each(function(){var t=e(this).data("date").split("/"),n=new Date(t[2],t[1]-1,t[0]);l.push(n)}),l),$.eventsMinLapse=function e(t){var n=[];for(i=1;i<t.length;i++){var r=c(t[i-1],t[i]);n.push(r)}return Math.min.apply(null,n)}($.timelineDates),$.timelineNavigation=h.find(".cd-timeline-navigation"),$.eventsContent=h.children(".events-content"),function e(t,n){for(i=0;i<t.timelineDates.length;i++){var r=Math.round(c(t.timelineDates[0],t.timelineDates[i])/t.eventsMinLapse)+2;t.timelineEvents.eq(i).css("left",r*n+"px")}}($,n);var x=(f=$,v=n,d=c(f.timelineDates[0],f.timelineDates[f.timelineDates.length-1])/f.eventsMinLapse,d=Math.round(d)+4,g=d*v,f.eventsWrapper.css("width",g+"px"),s(f.timelineEvents.eq(0),f.fillingLine,g),g);h.addClass("loaded"),$.timelineNavigation.on("click",".next",function(e){e.preventDefault(),r($,x,"next")}),$.timelineNavigation.on("click",".prev",function(e){e.preventDefault(),r($,x,"prev")}),$.eventsWrapper.on("click","a",function(t){t.preventDefault(),$.timelineEvents.removeClass("selected"),e(this).addClass("selected"),p(e(this)),s(e(this),$.fillingLine,x),o(e(this),$.eventsContent)}),$.eventsContent.on("swipeleft",function(){"mobile"==u()&&a($,x,"next")}),$.eventsContent.on("swiperight",function(){"mobile"==u()&&a($,x,"prev")}),e(document).keyup(function(e){"37"==e.which&&m(h.get(0))?a($,x,"prev"):"39"==e.which&&m(h.get(0))&&a($,x,"next")})})}(t)});