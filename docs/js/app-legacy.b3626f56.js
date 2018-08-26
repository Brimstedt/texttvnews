(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)i=u[l],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"-legacy."+{about:"5f7d6f63"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,c=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e),a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,c.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/texttvnews/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},1:function(e,t,n){e.exports=n("56d7")},4:function(e,t){},5:function(e,t){},"50a6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"loadNews",function(){return S});var o={};n.r(o),n.d(o,"newsItems",function(){return A});n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},u=[],c=(n("034f"),n("2877")),s={},l=Object(c["a"])(s,i,u,!1,null,null,null);l.options.__file="App.vue";var f=l.exports,d=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{key:e.ticker,staticClass:"news",domProps:{innerHTML:e._s(e.newsItem)}})])],1)},v=[],b=n("c93e"),h=n("2f62"),m={name:"news",data:function(){return{ticker:1}},components:{},methods:Object(b["a"])({},Object(h["b"])(["loadNews"])),computed:Object(b["a"])({},Object(h["c"])(["newsItems"]),{newsItem:function(){return this.newsItems[this.ticker]}}),mounted:function(){var e=this;this.loadNews().then(function(){setInterval(function(){e.ticker=e.ticker+1,e.ticker>=e.newsItems.length&&(e.ticker=1,e.loadNews())},3e3)})}},w=m,g=(n("657d"),Object(c["a"])(w,p,v,!1,null,null,null));g.options.__file="News.vue";var y=g.exports;a["a"].use(d["a"]);var j=new d["a"]({routes:[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),O=(n("6762"),n("2fdb"),n("ac4d"),n("8a81"),n("ac6a"),n("bc3a")),_=n.n(O),k=n("cb8f"),x=n.n(k),N={loadNews:function(){return _.a.get("http://api.texttv.nu/api/get/188?app=VueNews").then(function(e){var t=[],n=!0,r=!1,o=void 0;try{for(var a,i=e.data[0].content[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var u=a.value,c=x()(u,{allowedTags:["h1","span"],allowedAttributes:{a:["href"]},exclusiveFilter:function(e){return"span"===e.tag&&e.attribs.class.includes("toprow")||"span"===e.tag&&e.attribs.class.includes("W bgB")}});c=x()(c,{allowedTags:["h1"],allowedAttributes:{a:["href"]}}),t.push(c)}}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return t})}},I=n("a322"),T="NEWS_SET",P=Object(I["a"])({},T,function(e,t){var n=t.news;e.newsItems=n}),S=function(e){var t=e.commit;N.loadNews().then(function(e){t(T,{news:e})})},A=function(e){return e.newsItems};a["a"].use(h["a"]);var E=new h["a"].Store({state:{newsItems:[]},mutations:Object(b["a"])({},P),actions:Object(b["a"])({},r),getters:Object(b["a"])({},o)}),M=n("9483");Object(M["a"])("".concat("/texttvnews/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({router:j,store:E,render:function(e){return e(f)}}).$mount("#app")},6:function(e,t){},"657d":function(e,t,n){"use strict";var r=n("50a6"),o=n.n(r);o.a},7:function(e,t){},8:function(e,t){},c21b:function(e,t,n){}});