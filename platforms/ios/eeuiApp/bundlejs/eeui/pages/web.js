// { "framework": "Vue"} 
if("undefined"==typeof app&&(app=weex),void 0===eeuiLog)var eeuiLog={_:function(e,t){var r=t.map((function(e){return"[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e}));void 0===this.__m&&(this.__m=app.requireModule("debug")),this.__m.addLog(e,r)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}};!function(e){var t={};function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(o,i,function(t){return e[t]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=14)}({14:function(e,t,r){var o,i,n=[];n.push(r(15)),o=r(16);var s=r(17);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some((function(e){return"default"!==e&&"__esModule"!==e}))&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/WEIYI/wwwroot/dootask/resources/mobile/src/pages/web.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-6f14c300",i.style=i.style||{},n.forEach((function(e){for(var t in e)i.style[t]=e[t]})),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),e.exports=o,e.exports.el="true",new Vue(e.exports)},15:function(e,t){e.exports={flex:{flex:1}}},16:function(e,t,r){"use strict";r.r(t);var o=app.requireModule("eeui"),i=app.requireModule("eeuiPicture"),n=app.requireModule("navigationBar");t.default={data:function(){return{url:app.config.params.url,browser:!!app.config.params.browser,titleFixed:!!app.config.params.titleFixed,showProgress:!!app.config.params.showProgress,allowAccess:!!app.config.params.allowAccess}},mounted:function(){var e=this;o.setStatusBarStyle(!1),this.browser&&n.setRightItem({icon:"iOS"===WXEnvironment.platform?"ios-share-alt":"md-share-alt",iconSize:40,width:120},(function(t){e.url&&o.openWeb(e.url)})),this.$refs.web.setUrl(this.url)},methods:{onReceiveMessage:function(e){var t=e.message;switch(t.action){case"picturePreview":i.picturePreview(t.position,t.paths);break;case"videoPreview":i.videoPreview(t.path)}},onStateChanged:function(e){switch(e.status){case"title":this.titleFixed||n.setTitle({title:e.title});break;case"url":this.url=e.url;break;case"createTarget":this.$refs.web.setUrl(e.url)}}}}},17:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("web-view",{ref:"web",staticClass:["flex"],attrs:{allowFileAccessFromFileURLs:this.allowAccess,progressbarVisibility:this.showProgress},on:{receiveMessage:this.onReceiveMessage,stateChanged:this.onStateChanged}})},staticRenderFns:[]},e.exports.render._withStripped=!0}});