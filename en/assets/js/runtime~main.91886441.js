!function(){"use strict";var e,t,n,a,r,f={},c={};function o(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={id:e,loaded:!1,exports:{}};return f[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=f,o.c=c,e=[],o.O=function(t,n,a,r){if(!n){var f=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],r=e[u][2];for(var c=!0,b=0;b<n.length;b++)(!1&r||f>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[b])}))?n.splice(b--,1):(c=!1,r<f&&(f=r));if(c){e.splice(u--,1);var i=a();void 0!==i&&(t=i)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,a,r]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var f={};t=t||[null,n({}),n([]),n(n)];for(var c=2&a&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){f[t]=function(){return e[t]}}));return f.default=function(){return e},o.d(r,f),r},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return"assets/js/"+({53:"935f2afb",121:"7d9b5b04",235:"2a865436",512:"5b431201",630:"30931a0c",634:"5b14663e",1072:"b188fbb2",1800:"49f109f2",1878:"e7682ab7",2243:"076d7db8",2253:"9bdd22eb",2535:"814f3328",2773:"c9fcbca1",2819:"eaee7e52",3089:"a6aa9e1f",3237:"1df93b7f",3260:"63a180cb",3608:"9e4087bc",3836:"f6cbeee1",3878:"aa054278",4006:"375aa4e6",4013:"01a85c17",4062:"7818b736",4364:"fba6c282",4461:"3d054cdd",4522:"3feca493",4668:"af398c7e",5814:"ea169ed9",5960:"14860564",6103:"ccc49370",6968:"5cff5ba5",7093:"08595e6a",7297:"a0e6ba1c",7392:"6360f051",7668:"3b5d97d7",7673:"9835e848",7918:"17896441",8426:"bd58962e",8430:"12b076bf",8610:"6875c492",8864:"1e164f0b",9164:"0188490e",9415:"2f729d0d",9514:"1be78505",9520:"fb596604",9581:"07b1573c",9948:"ad7e248f"}[e]||e)+"."+{53:"cc18654e",121:"43d04965",235:"56b4d20b",512:"ccb71e8a",630:"b7671bb8",634:"dfc61d2b",1072:"170a0387",1800:"b11b178e",1878:"fe0cdfc7",2243:"5b32ea17",2253:"e4d2733b",2535:"0677e46c",2689:"5260e16a",2773:"31293f6d",2819:"6fa562ec",3089:"6d70e0eb",3237:"b29d0057",3260:"84106856",3608:"b0569190",3836:"ce01681e",3878:"3f3064d6",4006:"88a69e4e",4013:"94bca56f",4062:"b9e53adc",4364:"402d4ab7",4461:"3fd0c7e8",4522:"09c61e99",4608:"874e3a44",4668:"b7a24e4f",5460:"ef4d0b55",5814:"e0152e61",5960:"5138a83e",6103:"b730cf55",6968:"357417f8",7093:"0b78d04d",7297:"890796b9",7392:"52a9fdeb",7668:"dc44ad58",7673:"25ddce18",7918:"726c2854",8426:"2002676c",8430:"4c7c08db",8610:"35064b26",8864:"73e0f23e",9164:"94bfe71a",9415:"e8d35e7b",9514:"f6a9ddec",9520:"e6a09516",9581:"a92f4234",9948:"a10e49d7"}[e]+".js"},o.miniCssF=function(e){},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a={},r="russian-national-digital-archive-ruarxive:",o.l=function(e,t,n,f){if(a[e])a[e].push(t);else{var c,b;if(void 0!==n)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var d=i[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+n){c=d;break}}c||(b=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",r+n),c.src=e),a[e]=[t];var l=function(t,n){c.onerror=c.onload=null,clearTimeout(s);var r=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),b&&document.head.appendChild(c)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/en/",o.gca=function(e){return e={14860564:"5960",17896441:"7918","935f2afb":"53","7d9b5b04":"121","2a865436":"235","5b431201":"512","30931a0c":"630","5b14663e":"634",b188fbb2:"1072","49f109f2":"1800",e7682ab7:"1878","076d7db8":"2243","9bdd22eb":"2253","814f3328":"2535",c9fcbca1:"2773",eaee7e52:"2819",a6aa9e1f:"3089","1df93b7f":"3237","63a180cb":"3260","9e4087bc":"3608",f6cbeee1:"3836",aa054278:"3878","375aa4e6":"4006","01a85c17":"4013","7818b736":"4062",fba6c282:"4364","3d054cdd":"4461","3feca493":"4522",af398c7e:"4668",ea169ed9:"5814",ccc49370:"6103","5cff5ba5":"6968","08595e6a":"7093",a0e6ba1c:"7297","6360f051":"7392","3b5d97d7":"7668","9835e848":"7673",bd58962e:"8426","12b076bf":"8430","6875c492":"8610","1e164f0b":"8864","0188490e":"9164","2f729d0d":"9415","1be78505":"9514",fb596604:"9520","07b1573c":"9581",ad7e248f:"9948"}[e]||e,o.p+o.u(e)},function(){var e={1303:0,532:0};o.f.j=function(t,n){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else if(/^(1303|532)$/.test(t))e[t]=0;else{var r=new Promise((function(n,r){a=e[t]=[n,r]}));n.push(a[2]=r);var f=o.p+o.u(t),c=new Error;o.l(f,(function(n){if(o.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),f=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+f+")",c.name="ChunkLoadError",c.type=r,c.request=f,a[1](c)}}),"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,f=n[0],c=n[1],b=n[2],i=0;if(f.some((function(t){return 0!==e[t]}))){for(a in c)o.o(c,a)&&(o.m[a]=c[a]);if(b)var u=b(o)}for(t&&t(n);i<f.length;i++)r=f[i],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self.webpackChunkrussian_national_digital_archive_ruarxive=self.webpackChunkrussian_national_digital_archive_ruarxive||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();