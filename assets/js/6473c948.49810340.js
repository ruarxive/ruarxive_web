"use strict";(self.webpackChunkrussian_national_digital_archive_ruarxive=self.webpackChunkrussian_national_digital_archive_ruarxive||[]).push([[6239],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3795:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(9899),c=["components"],i={sidebar_position:3,position:3},u=void 0,s={unversionedId:"donate",id:"donate",title:"donate",description:"",source:"@site/about/donate.md",sourceDirName:".",slug:"/donate",permalink:"/about/donate",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,position:3},sidebar:"tutorialSidebar",previous:{title:"team",permalink:"/about/team"},next:{title:"contacts",permalink:"/about/contacts"}},m={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c-\u043f\u0440\u043e\u0435\u043a\u0442"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"),(0,o.kt)(l.Z,{mdxType:"Donate"}))}f.isMDXComponent=!0},9899:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7294),a=n(6010),o="donateCard_adtC",l="donateInput_gkAQ",c="donateBtn_cQMC",i="donateTabsItem_O7yt",u="donateDisclaimer_ezLt",s=n(5999),m=n(9877),p=n(8215),d=n(246);function f(){var e=(0,r.useState)("1000"),t=e[0],n=e[1];return r.createElement("form",{onSubmit:function(e){e.preventDefault(),(new cp.CloudPayments).pay("auth",{publicId:"pk_3018668db11eb861d16c3d8a73bf1",description:"\u041f\u043e\u043c\u043e\u0449\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u0443 ruarxive.org",amount:+t,currency:"RUB",skin:"mini",data:{myProp:"myProp value"}},{onSuccess:function(e){},onFail:function(e,t){},onComplete:function(e,t){}})}},r.createElement("div",{className:"row row--no-gutters margin-bottom--md"},r.createElement("div",{className:"col"},r.createElement(d.Z,{placeholder:"Please enter a number",defaultValue:1e3,value:t,allowDecimals:!1,allowNegativeValue:!1,suffix:" \u20bd",decimalSeparator:",",groupSeparator:" ",maxLength:7,step:50,onValueChange:function(e){n((void 0===e?"undefined":e)||" ")},className:l}))),r.createElement("div",{className:"row row--no-gutters"},r.createElement("div",{className:"col"},r.createElement("button",{type:"submit",className:(0,a.Z)("button button--primary button--lg",c)},r.createElement(s.Z,null,"Support project")))))}function b(){var e=(0,r.useState)("200"),t=e[0],n=e[1],o=(0,r.useState)(""),i=o[0],m=o[1];return r.createElement("form",{onSubmit:function(e){e.preventDefault(),(new cp.CloudPayments).pay("auth",{publicId:"pk_3018668db11eb861d16c3d8a73bf1",description:"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u0443 ruarxive.org",amount:+t,currency:"RUB",requireEmail:!0,accountId:i.email,email:i.email,skin:"mini",data:{CloudPayments:{recurrent:{interval:"Month",period:1}}}},{onSuccess:function(e){},onFail:function(e,t){},onComplete:function(e,t){}})}},r.createElement("div",{className:"row row--no-gutters margin-bottom--xs"},r.createElement("div",{className:"col"},r.createElement(d.Z,{placeholder:"Please enter a number",defaultValue:1e3,value:t,allowDecimals:!1,allowNegativeValue:!1,suffix:" \u20bd",decimalSeparator:",",groupSeparator:" ",maxLength:7,step:50,onValueChange:function(e){n((void 0===e?"undefined":e)||" ")},className:l}))),r.createElement("div",{className:"row row--no-gutters margin-bottom--md"},r.createElement("div",{className:"col"},r.createElement("label",{style:{color:"black"}},r.createElement(s.Z,null,"E-mail"),r.createElement("span",{style:{color:"red"}},"*")," ",r.createElement("span",{className:u},"(",r.createElement(s.Z,null,"required in case of subscription cancellation"),")")),r.createElement("input",{type:"email",className:l,onChange:function(e){m({email:e.currentTarget.value})},required:!0}))),r.createElement("div",{className:"row row--no-gutters"},r.createElement("div",{className:"col"},r.createElement("button",{type:"submit",className:(0,a.Z)("button button--primary button--lg",c)},r.createElement(s.Z,null,"Support project monthly")))))}function v(){return r.createElement("div",{className:o},r.createElement("div",{className:"card padding--md"},r.createElement("div",{className:"card__body"},r.createElement(m.Z,{className:"tabs--block margin-bottom--lg"},r.createElement(p.Z,{value:"single",label:(0,s.I)({message:"One-time",description:"Single payment"}),attributes:{className:i},default:!0},r.createElement(f,null)),r.createElement(p.Z,{value:"monthly",label:(0,s.I)({message:"Monthly",description:"Monthly payment"}),attributes:{className:i}},r.createElement(b,null)))),r.createElement("div",{className:"card__footer padding-top--none"},r.createElement("div",{className:u},r.createElement("p",null,"\u041d\u0430\u0436\u0430\u0442\u0438\u0435 \u043a\u043d\u043e\u043f\u043a\u0438 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u0441 ",r.createElement("a",{href:"https://www.infoculture.ru/wp-content/uploads/2019/01/Publichnaja-oferta-dlja-pozhertvovanii-.docx",target:"_blank"},"\u0434\u043e\u0433\u043e\u0432\u043e\u0440\u043e\u043c \u043e\u0444\u0435\u0440\u0442\u044b"))))))}}}]);