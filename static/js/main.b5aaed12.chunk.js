(this["webpackJsonpcomics-list-v2"]=this["webpackJsonpcomics-list-v2"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){e.exports=c(22)},,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(7),i=c.n(r),o=(c(15),c(5)),s=c.n(o),l=c(8),m=c(1),u=c(3),d=(c(17),function(){return n.a.createElement("div",{className:"navBar"},n.a.createElement("div",{className:"navBar__title"},"News Comics"),n.a.createElement("button",{className:"navBar__items--mobile"}))}),p=c(9),f=(c(18),function(e){var t=e.handleClose,c=e.show,a=e.title,r=e.description,i=c?"modal display-block":"modal display-none";return n.a.createElement("div",{className:i},n.a.createElement("section",{className:"modal-main"},n.a.createElement("h3",null,a),n.a.createElement("div",{className:"modal__content__container"},n.a.createElement("div",{className:"modal__content"},r)),n.a.createElement("div",{className:"modal__close",onClick:t},"X")))});c(19);var h=function(e){var t=e.title,c=e.publisher,r=e.description,i=e.price,o=e.release_date,s=e.creators,l=Object(a.useState)(""),u=Object(m.a)(l,2),d=u[0],p=u[1],h=Object(a.useState)(""),v=Object(m.a)(h,2),E=v[0],b=v[1],_=Object(a.useState)(!1),O=Object(m.a)(_,2),C=O[0],y=O[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"comic"},n.a.createElement("div",{className:"comic__container"},n.a.createElement("div",{className:"comic__date"},o),n.a.createElement("h5",null,t),n.a.createElement("div",{className:"comic__creators"},s),n.a.createElement("div",{className:"comic__publisher"},c),n.a.createElement("div",{className:"comic__description"},r),n.a.createElement("div",{className:"comic__price"},i),n.a.createElement("div",{className:"comic__more",onClick:function(){return function(e,t){document.querySelector("body").style.position="fixed",p(e),b(t),y(!0)}(t,r)}},"See More"))),C&&n.a.createElement(f,{show:C,handleClose:function(){return document.querySelector("body").style.position="static",void y(!1)},description:E,title:d}))};c(20);var v=function(e){var t=e.publishers,c=e.handlerFilter;return n.a.createElement("div",{className:"filter"},n.a.createElement("form",null,t.map((function(e,t){return n.a.createElement("label",{key:t},n.a.createElement("input",{type:"radio",name:"option",value:e,onChange:function(){return c(e)},onTouchEnd:c,key:t})," ",e)}))))};c(21);var E=function(e){var t=Object(a.useState)(e.comics),c=Object(m.a)(t,2),r=c[0],i=c[1],o=Object(a.useState)(!1),s=Object(m.a)(o,2),l=s[0],u=s[1];return n.a.createElement("div",{className:"containerComics comics"},e.comics&&n.a.createElement(v,{publishers:function(e){var t=e.reduce((function(e,t){return-1===e.indexOf(t.publisher)&&e.push(t.publisher),e}),[]);return 0!==t.lenght&&(t=["ALL"].concat(Object(p.a)(t))),t}(r),handlerFilter:function(t){var c,a=e.comics;c="ALL"!==t?(r.length,a.filter((function(e){return e.publisher===t}))):a,i(c),u(!l)}}),function(e){if(e)return e.map((function(e,t){return n.a.createElement(h,{key:"".concat(t,"--").concat(e.title),title:e.title,publisher:e.publisher,description:e.description?e.description:"We dont have description for this comic :(",price:e.price,release_date:e.release_date,creators:e.creators})}))}(r))},b={fetching:!0,comicsList:[]},_=function(e,t){switch(t.type){case"FETCH_COMICS":return Object(u.a)(Object(u.a)({},e),{},{fetching:!0,comicsList:[]});case"FETCH_COMICS_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{fetching:!1,comicsList:t.payload});default:return e}},O=function(){var e="https://cors-anywhere.herokuapp.com/https://api.shortboxed.com/comics/v1/",t=Object(a.useReducer)(_,b),c=Object(m.a)(t,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){i({type:"FETCH_COMICS",fetching:!0,payload:[]}),function(){var t=Object(l.a)(s.a.mark((function t(){var c,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e).concat("new"));case 2:return c=t.sent,t.next=5,c.json();case 5:(a=t.sent)&&a.comics&&i({type:"FETCH_COMICS_SUCCESS",fetching:!1,payload:a.comics});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),n.a.createElement("div",{className:"container-app"},n.a.createElement(d,null),!r.fetching&&n.a.createElement(E,{comics:r.comicsList}))};var C=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.b5aaed12.chunk.js.map