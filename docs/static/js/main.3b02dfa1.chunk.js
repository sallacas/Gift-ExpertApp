(this["webpackJsonpgit-expert-app"]=this["webpackJsonpgit-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){o(t.target.value)}})})},j=n(10),d=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__zoomInUp",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsxs)("p",{children:[" ",e," "]})]})},l=n(6),m=n.n(l),p=n(8),b=function(){var t=Object(p.a)(m.a.mark((function t(e){var n,a,c,r,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=qvVi9hgm9uHscu0dhamSczjlT6Q09gF0"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){b(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",e," "]}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(u.jsx)(d,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(a.useState)(["Kimetsu no Yaiba"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(f,{category:t},t)}))})]})};n(17);r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3b02dfa1.chunk.js.map