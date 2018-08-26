(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)i=s[l],o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5f7d6f63"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e),a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,u.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=c;a.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},1:function(e,t,n){e.exports=n("56d7")},4:function(e,t){},5:function(e,t){},"50a6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"loadNews",function(){return P});var o={};n.r(o),n.d(o,"newsItems",function(){return A});var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},s=[],u=(n("034f"),n("2877")),c={},l=Object(u["a"])(c,i,s,!1,null,null,null);l.options.__file="App.vue";var f=l.exports,p=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{key:e.ticker,staticClass:"news",domProps:{innerHTML:e._s(e.newsItem)}})])],1)},v=[],h=n("c93e"),b=n("2f62"),m={name:"news",data:function(){return{ticker:1}},components:{},methods:Object(h["a"])({},Object(b["b"])(["loadNews"])),computed:Object(h["a"])({},Object(b["c"])(["newsItems"]),{newsItem:function(){return this.newsItems[this.ticker]}}),mounted:function(){this.loadNews().then(()=>{setInterval(()=>{this.ticker=this.ticker+1,this.ticker>=this.newsItems.length&&(this.ticker=1,this.loadNews())},3e3)})}},w=m,g=(n("657d"),Object(u["a"])(w,d,v,!1,null,null,null));g.options.__file="News.vue";var y=g.exports;a["a"].use(p["a"]);var j=new p["a"]({routes:[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"f820"))}]}),O=n("bc3a"),_=n.n(O),k=n("cb8f"),N=n.n(k),x={loadNews:()=>{return _.a.get("http://api.texttv.nu/api/get/188?app=VueNews").then(e=>{var t=[];for(var n of e.data[0].content){var r=N()(n,{allowedTags:["h1","span"],allowedAttributes:{a:["href"]},exclusiveFilter:function(e){return"span"===e.tag&&e.attribs.class.includes("toprow")||"span"===e.tag&&e.attribs.class.includes("W bgB")}});r=N()(r,{allowedTags:["h1"],allowedAttributes:{a:["href"]}}),t.push(r)}return t})}};const I="NEWS_SET";var T={[I](e,{news:t}){e.newsItems=t}};const P=({commit:e})=>{x.loadNews().then(t=>{e(I,{news:t})})},A=e=>{return e.newsItems};a["a"].use(b["a"]);var E=new b["a"].Store({state:{newsItems:[]},mutations:Object(h["a"])({},T),actions:Object(h["a"])({},r),getters:Object(h["a"])({},o)}),S=n("9483");Object(S["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached(){console.log("Content has been cached for offline use.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({router:j,store:E,render:e=>e(f)}).$mount("#app")},6:function(e,t){},"657d":function(e,t,n){"use strict";var r=n("50a6"),o=n.n(r);o.a},7:function(e,t){},8:function(e,t){},c21b:function(e,t,n){}});
//# sourceMappingURL=app.35fa683c.js.map