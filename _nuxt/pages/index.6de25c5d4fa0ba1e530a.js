webpackJsonp([0],{"+YCL":function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".overlay{position:absolute;display:none;z-index:2;width:100%;bottom:0}.is-vcentered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.hero{bottom:0}.hero,.map{position:absolute;width:100%}.map{height:100%;z-index:1}",""])},"+ptz":function(t,e,s){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Map",{staticClass:"map"}),this._m(0)],1)};n._withStripped=!0;var i={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay "},[e("section",{staticClass:"hero is-primary is-absolute"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v("nuxt-leaflet")]),e("h2",{staticClass:"subtitle"},[this._v("\n        yarn add nuxt-leaflet\n      ")])])])])])}]};e.a=i},"/TYz":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("mQVf"),i=s("+ptz"),a=!1;var r=function(t){a||s("7+dH")},o=s("VU/8")(n.a,i.a,!1,r,null,null);o.options.__file="pages/index.vue",e.default=o.exports},"1Kzm":function(t,e,s){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"map-wrap"}},[e("v-map",{attrs:{zoom:13,center:[55.8262082,8.1649132]}},[e("v-tilelayer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),this._l(this.markers,function(t){return e("v-marker",{key:t,attrs:{"lat-lng":[t.lat,t.lng]}})})],2)],1)])};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i},"6nfV":function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"#map-wrap{height:100%;width:100%}",""])},"7+dH":function(t,e,s){var n=s("+YCL");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s("rjj0")("93401ddc",n,!1,{sourceMap:!1})},AENo:function(t,e,s){"use strict";var n=s("QUvV"),i=s("1Kzm"),a=!1;var r=function(t){a||s("EfpL")},o=s("VU/8")(n.a,i.a,!1,r,null,null);o.options.__file="components/Map.vue",e.a=o.exports},EfpL:function(t,e,s){var n=s("6nfV");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s("rjj0")("6b775e8c",n,!1,{sourceMap:!1})},QUvV:function(t,e,s){"use strict";e.a={data:function(){return{markers:[{lat:55.8262082,lng:8.1649132}]}}}},mQVf:function(t,e,s){"use strict";var n=s("AENo");e.a={components:{Map:n.a}}}});