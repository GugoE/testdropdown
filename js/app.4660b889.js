(function(t){function e(e){for(var i,a,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/testdropdown/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"136a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a=(n("5c0b"),n("2877")),c={},s=Object(a["a"])(c,o,r,!1,null,null,null),u=s.exports,p=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("GiphyDropdown",{attrs:{options:t.giphyOptions,"is-loading":t.loading},on:{input:t.onInputQuerySearch,closeDropMenu:function(e){t.giphySearch=""}},model:{value:t.giphySearch,callback:function(e){t.giphySearch=e},expression:"giphySearch"}}),n("Notification",t._b({},"Notification",t.notification,!1))],1)},f=[],d=n("1da1"),h=n("5530"),g=(n("96cf"),n("ac1f"),n("841c"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"giphySearch"},[n("input",t._g(t._b({staticClass:"giphySearch__inner",domProps:{value:t.value}},"input",t.$attrs,!1),t.listeners)),n("transition",{attrs:{name:"fade"}},[t.value.length>2?n("div",{staticClass:"giphySearch__options options",class:[{loading:t.isLoading,"is-empty":!t.options.length}]},[t.isLoading?n("div",{staticClass:"options__loading"},[n("PreLoader")],1):n("div",{staticClass:"options__container"},[t.options.length?t._l(t.options,(function(e,i){return n("div",{key:i,staticClass:"options__image",style:{backgroundImage:"url('"+e.images.original.url+"')"},on:{click:function(n){return t.copyToClipboard(e.url)}}})})):[n("div",{staticClass:"options__empty"},[t._v(" По вашему запросу результатов не найдено ")])]],2)]):t._e()])],1)}),y=[],b=(n("a9e3"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("img",{staticClass:"preloader-icon",attrs:{src:n("6e70"),alt:"pre-loader"}})}),m=[],v={name:"Loader"},_=v,O=(n("a2c7"),Object(a["a"])(_,b,m,!1,null,"0bce03b5",null)),j=O.exports,w=n("2f62"),S={name:"GiphyDropdown",components:{PreLoader:j},props:{value:[String,Number,Object],options:{type:Array,default:function(){return[]}},isLoading:Boolean},computed:{listeners:function(){var t=this;return Object(h["a"])(Object(h["a"])({},this.$listeners),{},{input:function(e){return t.$emit("input",e.target.value)}})}},methods:Object(h["a"])(Object(h["a"])({},Object(w["d"])({notification:"setNotification"})),{},{copyToClipboard:function(t){navigator.clipboard.writeText(t),this.notification({title:"URL картинки копировано в буфер обмена",type:"success"}),this.$emit("closeDropMenu")}})},x=S,k=(n("b3eb"),Object(a["a"])(x,g,y,!1,null,"557eae8d",null)),C=k.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["notification",t.notificationType,{left:t.isOpen}]},[n("p",{class:["notification__title",t.type]},[t._v(" "+t._s(t.title)+" ")])])},$=[],N={success:"success",info:"info",warning:"warning",error:"error"},T={name:"Notification",props:{title:{type:String,default:""},type:{type:String,default:""},isOpen:Boolean},computed:{notificationType:function(){return this.type?"notification__".concat(N[this.type]):""}}},L=T,E=(n("ec7e"),Object(a["a"])(L,P,$,!1,null,"7cc65d50",null)),G=E.exports,M={name:"Home",components:{GiphyDropdown:C,Notification:G},data:function(){return{awaitingSearch:!1,loading:!1,giphySearch:""}},computed:Object(h["a"])({},Object(w["c"])({giphyOptions:"getGiphyItem",notification:"getNotificationOptions"})),methods:Object(h["a"])(Object(h["a"])({},Object(w["b"])({search:"searchGiphy"})),{},{onInputQuerySearch:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.giphySearch.length>2)){e.next=5;break}return t.loading=!0,e.next=4,t.search(t.giphySearch);case 4:t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()}})},D=M,I=Object(a["a"])(D,l,f,!1,null,null,null),R=I.exports;i["a"].use(p["a"]);var B=[{path:"/",name:"Home",component:R}],J=new p["a"]({mode:"history",base:"/testdropdown/",routes:B}),H=J,Q=n("bc3a"),q=n.n(Q);i["a"].use(w["a"]);var z=new w["a"].Store({state:{items:[],notifications:{type:"",title:"",isOpen:!1}},mutations:{setSearchResult:function(t,e){t.items=e},setNotification:function(t,e){t.notifications.type=e.type,t.notifications.title=e.title,t.notifications.isOpen=!0,setTimeout((function(){t.notifications.isOpen=!1}),3e3)}},actions:{searchGiphy:function(t,e){q.a.get("https://api.giphy.com/v1/gifs/search?q=".concat(e,"&api_key=WxdyYLhMuub9clDtbglE0bJkSBExzePj")).then((function(e){t.commit("setSearchResult",e.data.data)})).catch((function(t){console.log(t)}))}},getters:{getGiphyItem:function(t){return t.items},getNotificationOptions:function(t){return t.notifications}},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:H,store:z,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6e70":function(t,e,n){t.exports=n.p+"img/loader.926f9377.svg"},"76a3":function(t,e,n){},"9c0c":function(t,e,n){},a2c7:function(t,e,n){"use strict";n("e84d")},b3eb:function(t,e,n){"use strict";n("76a3")},e84d:function(t,e,n){},ec7e:function(t,e,n){"use strict";n("136a")}});
//# sourceMappingURL=app.4660b889.js.map