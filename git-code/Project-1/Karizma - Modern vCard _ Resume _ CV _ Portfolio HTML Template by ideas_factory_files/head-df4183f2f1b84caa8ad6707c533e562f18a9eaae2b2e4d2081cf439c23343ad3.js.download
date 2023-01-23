/*!
 * modernizr v3.3.1
 * Build http://modernizr.com/download?-audio-backgroundblendmode-cors-cssanimations-flexbox-input-inputtypes-localstorage-placeholder-svg-xhr2-domprefixes-mq-prefixes-setclasses-shiv-testallprops-testprop-teststyles-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(e,t,n){function r(e,t){return typeof e===t}function a(){var e,t,n,a,o,i;for(var s in C)if(C.hasOwnProperty(s)){if(e=[],(t=C[s]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?x[i[0]]=a:(!x[i[0]]||x[i[0]]instanceof Boolean||(x[i[0]]=new Boolean(x[i[0]])),x[i[0]][i[1]]=a),y.push((a?"":"no-")+i.join("-"))}}function o(e){var t=w.className,n=x._config.classPrefix||"";if(E&&(t=t.baseVal),x._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}x._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?w.className.baseVal=t:w.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||((e=i(E?"svg":"body")).fake=!0),e}function l(e,n,r,a){var o,l,c,u,d="modernizr",f=i("div"),p=s();if(parseInt(r,10))for(;r--;)(c=i("div")).id=a?a[r]:d+(r+1),f.appendChild(c);return(o=i("style")).type="text/css",o.id="s"+d,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),l=n(f,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=u,w.offsetHeight):f.parentNode.removeChild(f),!!l}function c(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var a;for(var o in e)if(e[o]in t)return!1===n?e[o]:r(a=t[e[o]],"function")?d(a,n||t):a;return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var a=t.length;if("CSS"in e&&"supports"in e.CSS){for(;a--;)if(e.CSS.supports(p(t[a]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];a--;)o.push("("+p(t[a])+":"+r+")");return l("@supports ("+(o=o.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,a,o){function s(){d&&(delete H.style,delete H.modElem)}if(o=!r(o,"undefined")&&o,!r(a,"undefined")){var l=m(e,a);if(!r(l,"undefined"))return l}for(var d,f,p,h,v,g=["modernizr","tspan"];!H.style;)d=!0,H.modElem=i(g.shift()),H.style=H.modElem.style;for(p=e.length,f=0;f<p;f++)if(h=e[f],v=H.style[h],c(h,"-")&&(h=u(h)),H.style[h]!==n){if(o||r(a,"undefined"))return s(),"pfx"!=t||h;try{H.style[h]=a}catch(y){}if(H.style[h]!=v)return s(),"pfx"!=t||h}return s(),!1}function v(e,t,n,a,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+j.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?h(s,t,a,o):f(s=(e+" "+P.join(i+" ")+i).split(" "),t,n)}function g(e,t,r){return v(e,n,n,t,r)}var y=[],C=[],b={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},x=function(){};x.prototype=b,
/*!
{
  "name": "Cross-Origin Resource Sharing",
  "property": "cors",
  "caniuse": "cors",
  "authors": ["Theodoor van Donge"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS"
  }],
  "polyfills": ["pmxdr", "ppx", "flxhr"]
}
!*/
(x=new x).addTest("cors","XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest),
/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
x.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),
/*!
{
  "name": "XML HTTP Request Level 2 XHR2",
  "property": "xhr2",
  "tags": ["network"],
  "builderAliases": ["network_xhr2"],
  "notes": [{
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/XMLHttpRequest2/"
  },{
    "name": "Details on Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/385"
  }]
}
!*/
x.addTest("xhr2","XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest),
/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "knownBugs": [],
  "notes": [],
  "warnings": [],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/
x.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}});var S=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=S;var w=t.documentElement,E="svg"===w.nodeName.toLowerCase();E||function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,c(t)}function o(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function i(e,n,r){return n||(n=t),d?n.createElement(e):(r||(r=o(n)),!(a=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e)).canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a));var a}function s(e,n){if(e||(e=t),d)return e.createDocumentFragment();for(var a=(n=n||o(e)).frag.cloneNode(),i=0,s=r(),l=s.length;i<l;i++)a.createElement(s[i]);return a}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function c(e){e||(e=t);var r=o(e);return!C.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||l(e,r),e}var u,d,f="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,d=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,d=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:!1!==p.shivCSS,supportsUnknownElements:d,shivMethods:!1!==p.shivMethods,type:"default",shivDocument:c,createElement:i,createDocumentFragment:s,addElements:a};e.html5=C,c(t),"object"==typeof module&&module.exports&&(module.exports=C)}(void 0!==e?e:this,t);var T="Moz O ms Webkit",P=b._config.usePrefixes?T.toLowerCase().split(" "):[];b._domPrefixes=P,
/*!
{
  "name" : "HTML5 Audio Element",
  "property": "audio",
  "tags" : ["html5", "audio", "media"]
}
!*/
x.addTest("audio",function(){var e=i("audio"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),
/*!
{
  "name": "placeholder attribute",
  "property": "placeholder",
  "tags": ["forms", "attribute"],
  "builderAliases": ["forms_placeholder"]
}
!*/
x.addTest("placeholder","placeholder"in i("input")&&"placeholder"in i("textarea"));var _=i("input"),k="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),N={};
/*!
{
  "name": "Input attributes",
  "property": "input",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "notes": [{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#input-type-attr-summary"
  }],
  "knownBugs": ["Some blackberry devices report false positive for input.multiple"]
}
!*/x.input=function(t){for(var n=0,r=t.length;n<r;n++)N[t[n]]=!!(t[n]in _);return N.list&&(N.list=!(!i("datalist")||!e.HTMLDataListElement)),N}(k);
/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
var M="search tel url email datetime date month week time datetime-local number range color".split(" "),L={};x.inputtypes=function(e){for(var r,a,o,i=e.length,s="1)",l=0;l<i;l++)_.setAttribute("type",r=e[l]),(o="text"!==_.type&&"style"in _)&&(_.value=s,_.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&_.style.WebkitAppearance!==n?(w.appendChild(_),o=(a=t.defaultView).getComputedStyle&&"textfield"!==a.getComputedStyle(_,null).WebkitAppearance&&0!==_.offsetHeight,w.removeChild(_)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?_.checkValidity&&!1===_.checkValidity():_.value!=s)),L[e[l]]=!!o;return L}(M);var z,$=(z=e.matchMedia||e.msMatchMedia)?function(e){var t=z(e);return t&&t.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n};b.mq=$;b.testStyles=l;var j=b._config.usePrefixes?T.split(" "):[];b._cssomPrefixes=j;var q=function(t){var r,a=S.length,o=e.CSSRule;if(void 0===o)return n;if(!t)return!1;if((r=(t=t.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in o)return"@"+t;for(var i=0;i<a;i++){var s=S[i];if(s.toUpperCase()+"_"+r in o)return"@-"+s.toLowerCase()+"-"+t}return!1};b.atRule=q;var F={elem:i("modernizr")};x._q.push(function(){delete F.elem});var H={style:F.elem.style};x._q.unshift(function(){delete H.style});b.testProp=function(e,t,r){return h([e],n,t,r)};b.testAllProps=v,b.testAllProps=g,
/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
!*/
x.addTest("cssanimations",g("animationName","a",!0)),
/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
x.addTest("flexbox",g("flexBasis","1px",!0));var R=b.prefixed=function(e,t,n){return 0===e.indexOf("@")?q(e):(-1!=e.indexOf("-")&&(e=u(e)),t?v(e,t,n):v(e,"pfx"))};
/*!
{
  "name": "CSS Background Blend Mode",
  "property": "backgroundblendmode",
  "caniuse": "css-backgroundblendmode",
  "tags": ["css"],
  "notes": [
    {
      "name": "CSS Blend Modes could be the next big thing in Web Design",
      "href": " https://medium.com/@bennettfeely/css-blend-modes-could-be-the-next-big-thing-in-web-design-6b51bf53743a"
    }, {
      "name": "Demo",
      "href": "http://bennettfeely.com/gradients/"
    }
  ]
}
!*/x.addTest("backgroundblendmode",R("backgroundBlendMode","text")),a(),o(y),delete b.addTest,delete b.addAsyncTest;for(var A=0;A<x._q.length;A++)x._q[A]();e.Modernizr=x}(window,document);