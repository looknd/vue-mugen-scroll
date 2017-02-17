webpackJsonp([1,2],{10:function(t,n,e){"use strict";function r(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}function s(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){function r(s,o){try{var i=n[s](o),a=i.value}catch(t){return void e(t)}return i.done?void t(a):Promise.resolve(a).then(function(t){r("next",t)},function(t){r("throw",t)})}return r("next")})}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(13),i=e.n(o),a=e(22),l=e.n(a),c=e(12),u=e(18),h=e.n(u);n.default={name:"app",data:function(){return{users:[],count:0,loading:!1}},methods:{fetchUsers:function(){var t=this;return s(i.a.mark(function n(){var e;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,n.next=3,l.a.get("https://api.github.com/users",{params:{since:t.users.length>0&&t.users[t.users.length-1].id||null}}).then(function(t){return t.data});case 3:e=n.sent,t.users=[].concat(r(t.users),r(e)),t.count++,t.loading=!1;case 7:case"end":return n.stop()}},n,t)}))()}},components:{MugenScroll:c.a,Github:h.a}}},11:function(t,n,e){"use strict";n.a=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.offset,r=void 0===e?{}:e,s=n.threshold,o=t.getBoundingClientRect(),i=o.top,a=o.right,l=o.bottom,c=o.left,u=o.width,h=o.height,d={t:l,r:window.innerWidth-c,b:window.innerHeight-i,l:a},f={x:s*u,y:s*h};return d.t>=(r.top||0+f.y)&&d.r>=(r.right||0+f.x)&&d.b>=(r.bottom||0+f.y)&&d.l>=(r.left||0+f.x)}},12:function(t,n,e){"use strict";var r=e(40),s=e.n(r),o=e(11),i=["scroll","resize"],a={name:"mugen-scroll",props:{handler:{type:Function,required:!0},shouldHandle:{type:Boolean,default:!0},threshold:{type:Number,default:0},handleOnMount:{type:Boolean,default:!0},scrollContainer:{type:String}},mounted:function(){this.checkInView()},methods:{checkInView:function(){var t=this,n=function(){var n=e.i(o.a)(t.$refs.scroll,{threshold:t.threshold});t.shouldHandle&&n&&t.handler()};this.handleOnMount&&n(),this._scrollContainer=this.scrollContainer?this.$parent.$refs[this.scrollContainer]:window,this.check=s()(n,200),i.forEach(function(n){return t._scrollContainer.addEventListener(n,t.check)})}},render:function(t){return t("div",{staticClass:"mugen-scroll",ref:"scroll"},this.$slots.default)},beforeDestroy:function(){var t=this;i.forEach(function(n){return t._scrollContainer.removeEventListener(n,t.check)})}};n.a=a},14:function(t,n){},16:function(t,n){},17:function(t,n,e){e(15),e(14);var r=e(2)(e(10),e(19),null,null);t.exports=r.exports},18:function(t,n,e){e(16);var r=e(2)(null,e(20),null,null);t.exports=r.exports},19:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("github"),t._v(" "),e("h1",[t._v("vue-mugen-scroll")]),t._v(" "),e("h2",[t._v("Infinite scroll component for Vue.js")]),t._v(" "),e("div",{ref:"scrollContainer",staticClass:"wrap"},[t.users.length>0?e("div",{staticClass:"users"},t._l(t.users,function(n){return e("div",{staticClass:"user"},[e("img",{staticClass:"avatar",attrs:{src:n.avatar_url,height:"40",alt:""}}),t._v(" "),e("h2",[t._v(t._s(n.login))])])})):t._e(),t._v(" "),e("mugen-scroll",{attrs:{handler:t.fetchUsers,"should-handle":!t.loading,"scroll-container":"scrollContainer"}},[t._v("\n      loading "),e("span",{staticClass:"loading dots"})])],1),t._v(" "),e("div",{staticClass:"count"},[t._v("loaded "+t._s(t.count)+" time"+t._s(t.count>1?"s":""))])],1)},staticRenderFns:[]}},20:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{staticClass:"github-corner",attrs:{href:"https://github.com/egoist/vue-mugen-scroll","aria-label":"View source on Github"}},[e("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),e("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},staticRenderFns:[]}},43:function(t,n,e){t.exports=e(9)},9:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(21),s=e.n(r),o=e(17),i=e.n(o);new s.a({el:"#app",render:function(t){return t(i.a)}})}},[43]);
//# sourceMappingURL=client.dbb2be29.js.map