!function o(a,c,s){function u(e,t){if(!c[e]){if(!a[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(l)return l(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var i=c[e]={exports:{}};a[e][0].call(i.exports,function(t){return u(a[e][1][t]||t)},i,i.exports,o,a,c,s)}return c[e].exports}for(var l="function"==typeof require&&require,t=0;t<s.length;t++)u(s[t]);return u}({1:[function(t,e,r){"use strict";var n=t("./uic_modules/mainmenu"),i=t("./uic_modules/libchat"),o=t("./uic_modules/stackmap"),a=t("./uic_modules/browzine"),c=angular.module("viewCustom",["angularLoad"]);i.init(),o.init(),n.removeTargetAttrs(),a.appendJournalsCard(),a.primoIntegration(c),c.component("prmAlmaOtherMembersAfter",{bindings:{parentCtrl:"<"},controller:[function(){this.parentCtrl.isCollapsed=!0}]})},{"./uic_modules/browzine":2,"./uic_modules/libchat":3,"./uic_modules/mainmenu":4,"./uic_modules/stackmap":5}],2:[function(t,e,r){"use strict";e.exports={appendJournalsCard:function(){var e=document.createElement("md-card");function r(){var t=document.querySelectorAll("md-card")[0];window.location.href.match("jsearch")&&t&&t.parentElement.append(e)}e.className="default-card",e.innerHTML='\n  <md-card-title>\n    <md-card-title-text>\n      <span class="md-headline">Browzine</span>\n    </md-card-title-text>\n  </md-card-title>\n  <md-card-content>\n    <p><a href="https://browzine.com/libraries/81">Browzine</a> lets you flip through and read UIC Library-subscribed Journals, equivalent to browsing through physical Library stacks.</p>\n  </md-card-content>\n  <md-card-footer layout="row" style="text-align: right">\n    <a class="uic_button md-button md-accent md-raised" href="https://browzine.com/libraries/81">Visit Browzine</a></a>\n  </md-card-footer>';var t=new MutationObserver(function(t,e){document.querySelectorAll("md-card")[0]&&(r(),e.disconnect())}),n=window.location.href;setInterval(function(){n!=window.location.href&&(r(),n=window.location.href)},100),t.observe(document,{childList:!0,subtree:!0})},primoIntegration:function(t){window.browzine={libraryId:"81",apiKey:"xxx"};var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js",document.body.appendChild(e),t.controller("prmSearchResultAvailabilityLineAfterController",function(t){window.browzine.primo.searchResult(t)}),t.component("prmSearchResultAvailabilityLineAfter",{bindings:{parentCtrl:"<"},controller:"prmSearchResultAvailabilityLineAfterController"})}}},{}],3:[function(t,e,r){"use strict";e.exports={init:function(){var t="325a3faf25b8f6445806d60e21bcc210",e=document.createElement("div"),r=document.location.protocol?"https://":"http://",n=document.createElement("script");document.body.appendChild(e),e.setAttribute("id","libchat_"+t),n.setAttribute("type","text/javascript"),n.setAttribute("async","true"),n.setAttribute("src",r+"v2.libanswers.com/load_chat.php?hash="+t),document.body.appendChild(n)}}},{}],4:[function(t,e,r){"use strict";e.exports={removeTargetAttrs:function(){function r(){var t=document.querySelectorAll("prm-main-menu a");t&&t.forEach(function(t){t.removeAttribute("target");var e="aria-label",r=", opens in a new window";t.getAttribute(e)&&t.getAttribute(e).match(r)&&t.setAttribute(e,t.getAttribute(e).replace(r,""))})}document.getElementById("some-id"),r(),new MutationObserver(function(t,e){r()}).observe(document,{attributes:!0,childList:!0,subtree:!0})}}},{}],5:[function(t,e,r){"use strict";e.exports={init:function(){var t=document.querySelector("head"),e=document.createElement("link");e.type="text/css",e.rel="Stylesheet",e.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",e.crossorigin="anonymous",t.appendChild(e);var r=document.createElement("link");r.type="text/css",r.rel="Stylesheet",r.href="https://www.stackmapintegration.com/uic-primove/StackMap.min.css",t.appendChild(r);var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://www.stackmapintegration.com/uic-primove/StackMap.min.js",document.body.appendChild(n)}}},{}]},{},[1]);
//# sourceMappingURL=custom.js.map
