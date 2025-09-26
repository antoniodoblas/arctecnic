var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*

 scrollup v2.3.3
 Author: Mark Goodyear - http://markgoodyear.com
 Git: https://github.com/markgoodyear/scrollup

 Copyright 2014 Mark Goodyear.
 Licensed under the MIT license
 http://www.opensource.org/licenses/mit-license.php

 Twitter: @markgdyr

 */
!function(a,b,c){a.fn.scrollUp=function(b){a.data(c.body,"scrollUp")||(a.data(c.body,"scrollUp",!0),a.fn.scrollUp.init(b))},a.fn.scrollUp.init=function(d){var e,f=a.fn.scrollUp.settings=a.extend({},a.fn.scrollUp.defaults,d);e=f.scrollTrigger?a(f.scrollTrigger):a("<a/>",{id:f.scrollName,href:"#top"}),f.scrollTitle&&e.attr("title",f.scrollTitle),e.appendTo("body"),f.scrollImg||f.scrollTrigger||e.html(f.scrollText),e.css({display:"none",position:"fixed",zIndex:f.zIndex}),f.activeOverlay&&a("<div/>",{id:f.scrollName+"-active"}).css({position:"absolute",top:f.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+f.activeOverlay,zIndex:f.zIndex}).appendTo("body");var g,h,i,j;switch(f.animation){case"fade":g="fadeIn",h="fadeOut",i=f.animationSpeed;break;case"slide":g="slideDown",h="slideUp",i=f.animationSpeed;break;default:g="show",h="hide",i=0}j="top"===f.scrollFrom?f.scrollDistance:a(c).height()-a(b).height()-f.scrollDistance;var k=!1;scrollEvent=a(b).scroll(function(){a(b).scrollTop()>j?k||(e[g](i),k=!0):k&&(e[h](i),k=!1)});var l;f.scrollTarget?"number"==typeof f.scrollTarget?l=f.scrollTarget:"string"==typeof f.scrollTarget&&(l=Math.floor(a(f.scrollTarget).offset().top)):l=0,e.click(function(b){b.preventDefault(),a("html, body").animate({scrollTop:l},f.scrollSpeed,f.easingType)})},a.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},a.fn.scrollUp.destroy=function(d){a.removeData(c.body,"scrollUp"),a("#"+a.fn.scrollUp.settings.scrollName).remove(),a("#"+a.fn.scrollUp.settings.scrollName+"-active").remove(),a.fn.jquery.split(".")[1]>=7?a(b).off("scroll",d):a(b).unbind("scroll",d)},a.scrollUp=a.fn.scrollUp}(jQuery,window,document);

}
/*
     FILE ARCHIVED ON 00:43:08 Jan 25, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:07:15 Sep 26, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.529 (2)
  exclusion.robots: 0.063 (2)
  exclusion.robots.policy: 0.029 (2)
  esindex: 0.033 (2)
  cdx.remote: 99.491 (2)
  LoadShardBlock: 507.401 (6)
  PetaboxLoader3.datanode: 3809.751 (8)
  load_resource: 3912.602 (2)
  PetaboxLoader3.resolve: 318.053 (2)
*/