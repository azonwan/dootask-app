// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
if(typeof eeuiLog=="undefined"){var eeuiLog={_:function(t,e){var s=e.map(function(e){return e="[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e});if(typeof this.__m==='undefined'){this.__m=app.requireModule('debug')}this.__m.addLog(t,s)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}}}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var eeui = app.requireModule('eeui');
var deviceInfo = app.requireModule("eeuiDeviceInfo");
var umengPush = app.requireModule("eeuiUmengPush");
var communication = app.requireModule("eeuiCommunication");
var notifications = app.requireModule("eeuiNotifications");
var picture = app.requireModule("eeuiPicture");
var shareFile = app.requireModule("eeuiShareFiles");
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      uniqueId: '',
      resumeNum: 0,
      umengInit: false,
      umengMessage: {},
      umengError: false,
      appGroupID: "group.im.dootask",
      // iOS共享储存的应用唯一标识符
      appSubPath: "share" //iOS 储存下一级目录
    };
  },
  pageResume: function pageResume() {
    var javascript = "if (typeof window.__onPageResume === \"function\"){window.__onPageResume(".concat(this.resumeNum, ")}");
    this.$refs.web.setJavaScript(javascript);
    this.resumeNum++;
    this.refreshNotificationPermission();
    //
    if (this.umengError) {
      this.updateUmengAlias();
    }
  },
  pagePause: function pagePause() {
    var javascript = "if (typeof window.__onPagePause === \"function\"){window.__onPagePause()}";
    this.$refs.web.setJavaScript(javascript);
  },
  pageMessage: function pageMessage(_ref) {
    var message = _ref.message;
    switch (message.messageType) {
      case 'notificationClick':
        // eeuiLog.log('点击了通知栏消息：', message);
        break;
      case 'keyboardStatus':
        var data = encodeURIComponent(this.jsonStringify(message));
        var javascript = "if (typeof window.__onKeyboardStatus === \"function\"){window.__onKeyboardStatus(\"".concat(data, "\")}");
        this.$refs.web.setJavaScript(javascript);
        break;
    }
  },
  mounted: function mounted() {
    // iOS初始化共享内存
    if (WXEnvironment.platform.toLowerCase() === "ios") {
      shareFile.shareFileWithGroupID(this.appGroupID, this.appSubPath);
    }
    this.uniqueId = eeui.getCachesString("appUniqueId", "");
    if (this.count(this.uniqueId) < 5) {
      this.uniqueId = this.randomString(6);
      eeui.setCachesString("appUniqueId", this.uniqueId, 0);
    }
    //
    eeui.setStatusBarStyle(false);
    // this.$refs.web.setUrl("http://192.168.0.111:2222");
    // this.$refs.web.setUrl("http://192.168.100.36:2222");
    this.$refs.web.setUrl(eeui.rewriteUrl('../public/index.html'));

    // setTimeout(()=>{
    //     // this.onReceiveMessage(123)
    //     let message = {
    //         action:"userUploadUrl",
    //         url:"http://www.google.com",
    //     }
    //
    //     this.onReceiveMessage({
    //         message
    //     })
    //
    // },2000)
  },

  computed: {},
  methods: {
    /**
     * 获取时间戳
     * @returns {number}
     */
    time: function time() {
      return Math.round(new Date().getTime() / 1000);
    },
    /**
     * 来自网页的消息
     * @param message
     */
    onReceiveMessage: function onReceiveMessage(_ref2) {
      var message = _ref2.message;
      switch (message.action) {
        case 'intiUmeng':
          if (!this.umengInit) {
            this.umengInit = true;
            umengPush.initialize();
          }
          break;
        case 'setUmengAlias':
          this.umengMessage = message;
          this.updateUmengAlias();
          break;
        case 'setVibrate':
          var time = this.runNum(message.time);
          if (time > 0) {
            deviceInfo.setVibrate(time);
          } else {
            deviceInfo.setVibrate();
          }
          break;
        case 'getNotificationPermission':
          this.refreshNotificationPermission();
          break;
        case 'setBdageNotify':
          notifications.setBadge(this.runNum(message.bdage));
          break;
        case 'gotoSetting':
          notifications.gotoSet();
          break;
        case 'callTel':
          communication.call(message.tel);
          break;
        case 'picturePreview':
          picture.picturePreview(message.position, message.paths);
          break;
        case 'videoPreview':
          picture.videoPreview(message.path);
          break;
        // iOS 储存本地获取聊天消息
        case 'userChatList':
          if (WXEnvironment.platform.toLowerCase() === "ios") {
            shareFile.setShareStorage('chatList', message.url);
          } else {
            eeui.setCaches('chatList', message.url, 0);
          }
          break;
        // iOS 储存本地上传地址
        case 'userUploadUrl':
          if (WXEnvironment.platform.toLowerCase() === "ios") {
            shareFile.setShareStorage('upLoadUrl', message.chatUrl);
            shareFile.setShareStorage('fileUpLoadUrl', message.dirUrl);
          } else {
            eeui.setCaches('upLoadUrl', message.chatUrl, 0);
            eeui.setCaches('fileUpLoadUrl', message.dirUrl, 0);
          }
          break;
      }
    },
    onStateChanged: function onStateChanged(_ref3) {
      var status = _ref3.status,
        url = _ref3.url;
      switch (status) {
        case 'createTarget':
          eeui.openPage({
            pageType: 'app',
            pageTitle: ' ',
            url: 'web.js',
            params: {
              url: url,
              browser: true,
              showProgress: true
            }
          }, function (result) {
            //......
          });
          break;
      }
    },
    updateUmengAlias: function updateUmengAlias() {
      var _this = this;
      var alias = "".concat(WXEnvironment.platform, "-").concat(this.umengMessage.userid, "-").concat(this.uniqueId);
      //
      eeuiLog.log("[UmengAlias] delete: " + alias);
      umengPush.deleteAlias(alias, "userid", function (data) {
        eeuiLog.log("[UmengAlias] delete result: " + JSON.stringify(data));
        //
        eeuiLog.log("[UmengAlias] add: " + alias);
        umengPush.addAlias(alias, "userid", function (data) {
          eeuiLog.log("[UmengAlias] add result: " + JSON.stringify(data));
          if (data.status === 'success') {
            eeuiLog.log("[UmengAlias] add success");
            // 别名保存到服务器
            eeui.ajax({
              url: _this.umengMessage.url,
              method: 'get',
              data: {
                alias: alias
              },
              headers: {
                token: _this.umengMessage.token
              }
            }, function (result) {
              eeuiLog.log(result);
            });
          } else {
            eeuiLog.log("[UmengAlias] add error");
          }
          _this.umengError = data.status !== 'success';
        });
      });
    },
    refreshNotificationPermission: function refreshNotificationPermission() {
      var _this2 = this;
      notifications.getPermissionStatus(function (ret) {
        var javascript = "if (typeof window.__onPagePause === \"function\"){window.__onNotificationPermissionStatus(".concat(ret, ")}");
        _this2.$refs.web.setJavaScript(javascript);
      });
    }
  }
});

/***/ }),

/***/ "../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-57509004!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-57509004!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "flex": {
    "flex": 1
  }
}

/***/ }),

/***/ "../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-57509004!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-57509004!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["flex"]
  }, [_c('web-view', {
    ref: "web",
    staticClass: ["flex"],
    attrs: {
      "hiddenDone": true,
      "progressbarVisibility": false,
      "allowFileAccessFromFileURLs": true
    },
    on: {
      "receiveMessage": _vm.onReceiveMessage,
      "stateChanged": _vm.onStateChanged
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/pages/index.vue?entry=true":
/*!****************************************!*\
  !*** ./src/pages/index.vue?entry=true ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-57509004!../../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-57509004!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-57509004!../../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-57509004!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/hitosea-005/Desktop/localProject/dootask/resources/mobile/src/pages/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-57509004"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });