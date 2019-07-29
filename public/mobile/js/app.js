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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/mobile/js/components/Nav.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            active: 'home'
        };
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vant/lib/index.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes van-slide-up-enter{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes van-slide-up-enter{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes van-slide-up-leave{to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes van-slide-up-leave{to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes van-slide-down-enter{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes van-slide-down-enter{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes van-slide-down-leave{to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes van-slide-down-leave{to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes van-slide-left-enter{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-slide-left-enter{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-slide-left-leave{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-slide-left-leave{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-slide-right-enter{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes van-slide-right-enter{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes van-slide-right-leave{to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes van-slide-right-leave{to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes van-fade-in{0%{opacity:0}to{opacity:1}}@keyframes van-fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes van-fade-out{0%{opacity:1}to{opacity:0}}@keyframes van-fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes van-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes van-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes van-circular{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}to{stroke-dasharray:90,150;stroke-dashoffset:-120}}@keyframes van-circular{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}to{stroke-dasharray:90,150;stroke-dashoffset:-120}}@-webkit-keyframes van-notice-bar-play{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-notice-bar-play{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-notice-bar-play-infinite{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-notice-bar-play-infinite{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-skeleton-blink{50%{opacity:.6}}@keyframes van-skeleton-blink{50%{opacity:.6}}html{-webkit-tap-highlight-color:transparent}body{margin:0}a{text-decoration:none}[class*=van-]:focus,a:focus,button:focus,input:focus,textarea:focus{outline:0}ol,ul{margin:0;padding:0;list-style:none}button,input,textarea{color:inherit;font:inherit}.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-clearfix::after{display:table;clear:both;content:''}[class*=van-hairline]{position:relative}[class*=van-hairline]::after{position:absolute;box-sizing:border-box;content:' ';pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #ebedf0;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline--top::after{border-top-width:1px}.van-hairline--left::after{border-left-width:1px}.van-hairline--right::after{border-right-width:1px}.van-hairline--bottom::after{border-bottom-width:1px}.van-hairline--top-bottom::after{border-width:1px 0}.van-hairline--surround::after{border-width:1px}.van-fade-enter-active{-webkit-animation:.3s van-fade-in;animation:.3s van-fade-in}.van-fade-leave-active{-webkit-animation:.3s van-fade-out;animation:.3s van-fade-out}.van-slide-up-enter-active{-webkit-animation:van-slide-up-enter .3s both ease;animation:van-slide-up-enter .3s both ease}.van-slide-up-leave-active{-webkit-animation:van-slide-up-leave .3s both ease;animation:van-slide-up-leave .3s both ease}.van-slide-down-enter-active{-webkit-animation:van-slide-down-enter .3s both ease;animation:van-slide-down-enter .3s both ease}.van-slide-down-leave-active{-webkit-animation:van-slide-down-leave .3s both ease;animation:van-slide-down-leave .3s both ease}.van-slide-left-enter-active{-webkit-animation:van-slide-left-enter .3s both ease;animation:van-slide-left-enter .3s both ease}.van-slide-left-leave-active{-webkit-animation:van-slide-left-leave .3s both ease;animation:van-slide-left-leave .3s both ease}.van-slide-right-enter-active{-webkit-animation:van-slide-right-enter .3s both ease;animation:van-slide-right-enter .3s both ease}.van-slide-right-leave-active{-webkit-animation:van-slide-right-leave .3s both ease;animation:van-slide-right-leave .3s both ease}.van-info{position:absolute;top:-8px;right:0;box-sizing:border-box;min-width:16px;padding:0 3px;color:#fff;font-weight:500;font-size:12px;font-family:PingFang SC,Helvetica Neue,Arial,sans-serif;line-height:14px;text-align:center;background-color:#f44;border:1px solid #fff;border-radius:16px;-webkit-transform:translateX(50%);transform:translateX(50%);-webkit-transform-origin:100%;transform-origin:100%}@font-face{font-style:normal;font-weight:400;font-family:'vant-icon';src:url(https://img.yzcdn.cn/vant/vant-icon-c2acf5.woff2) format('woff2'),url(https://img.yzcdn.cn/vant/vant-icon-c2acf5.woff) format('woff'),url(https://img.yzcdn.cn/vant/vant-icon-c2acf5.ttf) format('truetype')}.van-icon{position:relative;font:14px/1 \"vant-icon\";font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased}.van-icon,.van-icon::before{display:inline-block}.van-icon-add-o:before{content:\"\\F000\"}.van-icon-add-square:before{content:\"\\F001\"}.van-icon-add:before{content:\"\\F002\"}.van-icon-after-sale:before{content:\"\\F003\"}.van-icon-aim:before{content:\"\\F004\"}.van-icon-alipay:before{content:\"\\F005\"}.van-icon-apps-o:before{content:\"\\F006\"}.van-icon-arrow-down:before{content:\"\\F007\"}.van-icon-arrow-left:before{content:\"\\F008\"}.van-icon-arrow-up:before{content:\"\\F009\"}.van-icon-arrow:before{content:\"\\F00A\"}.van-icon-ascending:before{content:\"\\F00B\"}.van-icon-audio:before{content:\"\\F00C\"}.van-icon-award-o:before{content:\"\\F00D\"}.van-icon-award:before{content:\"\\F00E\"}.van-icon-bag-o:before{content:\"\\F00F\"}.van-icon-bag:before{content:\"\\F010\"}.van-icon-balance-list-o:before{content:\"\\F011\"}.van-icon-balance-list:before{content:\"\\F012\"}.van-icon-balance-o:before{content:\"\\F013\"}.van-icon-balance-pay:before{content:\"\\F014\"}.van-icon-bar-chart-o:before{content:\"\\F015\"}.van-icon-bars:before{content:\"\\F016\"}.van-icon-bell:before{content:\"\\F017\"}.van-icon-bill-o:before{content:\"\\F018\"}.van-icon-bill:before{content:\"\\F019\"}.van-icon-birthday-cake-o:before{content:\"\\F01A\"}.van-icon-bookmark-o:before{content:\"\\F01B\"}.van-icon-bookmark:before{content:\"\\F01C\"}.van-icon-browsing-history-o:before{content:\"\\F01D\"}.van-icon-browsing-history:before{content:\"\\F01E\"}.van-icon-brush-o:before{content:\"\\F01F\"}.van-icon-bulb-o:before{content:\"\\F020\"}.van-icon-bullhorn-o:before{content:\"\\F021\"}.van-icon-calender-o:before{content:\"\\F022\"}.van-icon-card:before{content:\"\\F023\"}.van-icon-cart-circle-o:before{content:\"\\F024\"}.van-icon-cart-circle:before{content:\"\\F025\"}.van-icon-cart-o:before{content:\"\\F026\"}.van-icon-cart:before{content:\"\\F027\"}.van-icon-cash-back-record:before{content:\"\\F028\"}.van-icon-cash-on-deliver:before{content:\"\\F029\"}.van-icon-cashier-o:before{content:\"\\F02A\"}.van-icon-certificate:before{content:\"\\F02B\"}.van-icon-chart-trending-o:before{content:\"\\F02C\"}.van-icon-chat-o:before{content:\"\\F02D\"}.van-icon-chat:before{content:\"\\F02E\"}.van-icon-checked:before{content:\"\\F02F\"}.van-icon-circle:before{content:\"\\F030\"}.van-icon-clear:before{content:\"\\F031\"}.van-icon-clock-o:before{content:\"\\F032\"}.van-icon-clock:before{content:\"\\F033\"}.van-icon-close:before{content:\"\\F034\"}.van-icon-closed-eye:before{content:\"\\F035\"}.van-icon-cluster-o:before{content:\"\\F036\"}.van-icon-cluster:before{content:\"\\F037\"}.van-icon-column:before{content:\"\\F038\"}.van-icon-comment-circle-o:before{content:\"\\F039\"}.van-icon-comment-o:before{content:\"\\F03A\"}.van-icon-comment:before{content:\"\\F03B\"}.van-icon-completed:before{content:\"\\F03C\"}.van-icon-contact:before{content:\"\\F03D\"}.van-icon-coupon-o:before{content:\"\\F03E\"}.van-icon-coupon:before{content:\"\\F03F\"}.van-icon-credit-pay:before{content:\"\\F040\"}.van-icon-cross:before{content:\"\\F041\"}.van-icon-debit-pay:before{content:\"\\F042\"}.van-icon-delete:before{content:\"\\F043\"}.van-icon-descending:before{content:\"\\F044\"}.van-icon-description:before{content:\"\\F045\"}.van-icon-desktop-o:before{content:\"\\F046\"}.van-icon-diamond-o:before{content:\"\\F047\"}.van-icon-diamond:before{content:\"\\F048\"}.van-icon-discount:before{content:\"\\F049\"}.van-icon-ecard-pay:before{content:\"\\F04A\"}.van-icon-edit:before{content:\"\\F04B\"}.van-icon-ellipsis:before{content:\"\\F04C\"}.van-icon-empty:before{content:\"\\F04D\"}.van-icon-envelop-o:before{content:\"\\F04E\"}.van-icon-exchange:before{content:\"\\F04F\"}.van-icon-expand-o:before{content:\"\\F050\"}.van-icon-expand:before{content:\"\\F051\"}.van-icon-eye-o:before{content:\"\\F052\"}.van-icon-eye:before{content:\"\\F053\"}.van-icon-fail:before{content:\"\\F054\"}.van-icon-failure:before{content:\"\\F055\"}.van-icon-filter-o:before{content:\"\\F056\"}.van-icon-fire-o:before{content:\"\\F057\"}.van-icon-fire:before{content:\"\\F058\"}.van-icon-flag-o:before{content:\"\\F059\"}.van-icon-flower-o:before{content:\"\\F05A\"}.van-icon-free-postage:before{content:\"\\F05B\"}.van-icon-friends-o:before{content:\"\\F05C\"}.van-icon-friends:before{content:\"\\F05D\"}.van-icon-gem-o:before{content:\"\\F05E\"}.van-icon-gem:before{content:\"\\F05F\"}.van-icon-gift-card-o:before{content:\"\\F060\"}.van-icon-gift-card:before{content:\"\\F061\"}.van-icon-gift-o:before{content:\"\\F062\"}.van-icon-gift:before{content:\"\\F063\"}.van-icon-gold-coin-o:before{content:\"\\F064\"}.van-icon-gold-coin:before{content:\"\\F065\"}.van-icon-goods-collect-o:before{content:\"\\F066\"}.van-icon-goods-collect:before{content:\"\\F067\"}.van-icon-graphic:before{content:\"\\F068\"}.van-icon-home-o:before{content:\"\\F069\"}.van-icon-hot-o:before{content:\"\\F06A\"}.van-icon-hot-sale-o:before{content:\"\\F06B\"}.van-icon-hot-sale:before{content:\"\\F06C\"}.van-icon-hot:before{content:\"\\F06D\"}.van-icon-hotel-o:before{content:\"\\F06E\"}.van-icon-idcard:before{content:\"\\F06F\"}.van-icon-info-o:before{content:\"\\F070\"}.van-icon-info:before{content:\"\\F071\"}.van-icon-invition:before{content:\"\\F072\"}.van-icon-label-o:before{content:\"\\F073\"}.van-icon-label:before{content:\"\\F074\"}.van-icon-like-o:before{content:\"\\F075\"}.van-icon-like:before{content:\"\\F076\"}.van-icon-live:before{content:\"\\F077\"}.van-icon-location-o:before{content:\"\\F078\"}.van-icon-location:before{content:\"\\F079\"}.van-icon-lock:before{content:\"\\F07A\"}.van-icon-logistics:before{content:\"\\F07B\"}.van-icon-manager-o:before{content:\"\\F07C\"}.van-icon-manager:before{content:\"\\F07D\"}.van-icon-map-marked:before{content:\"\\F07E\"}.van-icon-medel-o:before{content:\"\\F07F\"}.van-icon-medel:before{content:\"\\F080\"}.van-icon-more-o:before{content:\"\\F081\"}.van-icon-more:before{content:\"\\F082\"}.van-icon-music-o:before{content:\"\\F083\"}.van-icon-new-arrival-o:before{content:\"\\F084\"}.van-icon-new-arrival:before{content:\"\\F085\"}.van-icon-new-o:before{content:\"\\F086\"}.van-icon-new:before{content:\"\\F087\"}.van-icon-newspaper-o:before{content:\"\\F088\"}.van-icon-notes-o:before{content:\"\\F089\"}.van-icon-orders-o:before{content:\"\\F08A\"}.van-icon-other-pay:before{content:\"\\F08B\"}.van-icon-paid:before{content:\"\\F08C\"}.van-icon-passed:before{content:\"\\F08D\"}.van-icon-pause-circle-o:before{content:\"\\F08E\"}.van-icon-pause-circle:before{content:\"\\F08F\"}.van-icon-pause:before{content:\"\\F090\"}.van-icon-peer-pay:before{content:\"\\F091\"}.van-icon-pending-payment:before{content:\"\\F092\"}.van-icon-phone-circle-o:before{content:\"\\F093\"}.van-icon-phone-o:before{content:\"\\F094\"}.van-icon-phone:before{content:\"\\F095\"}.van-icon-photo-o:before{content:\"\\F096\"}.van-icon-photo:before{content:\"\\F097\"}.van-icon-photograph:before{content:\"\\F098\"}.van-icon-play-circle-o:before{content:\"\\F099\"}.van-icon-play-circle:before{content:\"\\F09A\"}.van-icon-play:before{content:\"\\F09B\"}.van-icon-plus:before{content:\"\\F09C\"}.van-icon-point-gift-o:before{content:\"\\F09D\"}.van-icon-point-gift:before{content:\"\\F09E\"}.van-icon-points:before{content:\"\\F09F\"}.van-icon-printer:before{content:\"\\F0A0\"}.van-icon-qr-invalid:before{content:\"\\F0A1\"}.van-icon-qr:before{content:\"\\F0A2\"}.van-icon-question-o:before{content:\"\\F0A3\"}.van-icon-question:before{content:\"\\F0A4\"}.van-icon-records:before{content:\"\\F0A5\"}.van-icon-refund-o:before{content:\"\\F0A6\"}.van-icon-replay:before{content:\"\\F0A7\"}.van-icon-scan:before{content:\"\\F0A8\"}.van-icon-search:before{content:\"\\F0A9\"}.van-icon-send-gift-o:before{content:\"\\F0AA\"}.van-icon-send-gift:before{content:\"\\F0AB\"}.van-icon-service-o:before{content:\"\\F0AC\"}.van-icon-service:before{content:\"\\F0AD\"}.van-icon-setting-o:before{content:\"\\F0AE\"}.van-icon-setting:before{content:\"\\F0AF\"}.van-icon-share:before{content:\"\\F0B0\"}.van-icon-shop-collect-o:before{content:\"\\F0B1\"}.van-icon-shop-collect:before{content:\"\\F0B2\"}.van-icon-shop-o:before{content:\"\\F0B3\"}.van-icon-shop:before{content:\"\\F0B4\"}.van-icon-shopping-cart-o:before{content:\"\\F0B5\"}.van-icon-shopping-cart:before{content:\"\\F0B6\"}.van-icon-shrink:before{content:\"\\F0B7\"}.van-icon-sign:before{content:\"\\F0B8\"}.van-icon-smile-comment-o:before{content:\"\\F0B9\"}.van-icon-smile-comment:before{content:\"\\F0BA\"}.van-icon-smile-o:before{content:\"\\F0BB\"}.van-icon-star-o:before{content:\"\\F0BC\"}.van-icon-star:before{content:\"\\F0BD\"}.van-icon-stop-circle-o:before{content:\"\\F0BE\"}.van-icon-stop-circle:before{content:\"\\F0BF\"}.van-icon-stop:before{content:\"\\F0C0\"}.van-icon-success:before{content:\"\\F0C1\"}.van-icon-thumb-circle-o:before{content:\"\\F0C2\"}.van-icon-todo-list-o:before{content:\"\\F0C3\"}.van-icon-todo-list:before{content:\"\\F0C4\"}.van-icon-tosend:before{content:\"\\F0C5\"}.van-icon-tv-o:before{content:\"\\F0C6\"}.van-icon-umbrella-circle:before{content:\"\\F0C7\"}.van-icon-underway-o:before{content:\"\\F0C8\"}.van-icon-underway:before{content:\"\\F0C9\"}.van-icon-upgrade:before{content:\"\\F0CA\"}.van-icon-user-circle-o:before{content:\"\\F0CB\"}.van-icon-user-o:before{content:\"\\F0CC\"}.van-icon-video-o:before{content:\"\\F0CD\"}.van-icon-video:before{content:\"\\F0CE\"}.van-icon-vip-card-o:before{content:\"\\F0CF\"}.van-icon-vip-card:before{content:\"\\F0D0\"}.van-icon-volume-o:before{content:\"\\F0D1\"}.van-icon-volume:before{content:\"\\F0D2\"}.van-icon-wap-home:before{content:\"\\F0D3\"}.van-icon-wap-nav:before{content:\"\\F0D4\"}.van-icon-warn-o:before{content:\"\\F0D5\"}.van-icon-warning-o:before{content:\"\\F0D6\"}.van-icon-weapp-nav:before{content:\"\\F0D7\"}.van-icon-wechat:before{content:\"\\F0D8\"}.van-icon-youzan-shield:before{content:\"\\F0D9\"}.van-icon__image{width:1em;height:1em}.van-loading,.van-loading__spinner{position:relative;vertical-align:middle}.van-loading{font-size:0}.van-loading__spinner{display:inline-block;width:30px;max-width:100%;height:30px;max-height:100%;-webkit-animation:van-rotate .8s linear infinite;animation:van-rotate .8s linear infinite}.van-loading__spinner--spinner{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.van-circle svg,.van-loading__spinner--spinner i{position:absolute;top:0;left:0;width:100%;height:100%}.van-loading__spinner--spinner i::before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:' '}.van-loading__spinner--circular{-webkit-animation-duration:2s;animation-duration:2s}.van-loading__circular{display:block;width:100%;height:100%}.van-loading__circular circle{-webkit-animation:van-circular 1.5s ease-in-out infinite;animation:van-circular 1.5s ease-in-out infinite;stroke:currentColor;stroke-width:3;stroke-linecap:round}.van-loading__text{display:inline-block;margin-left:10px;color:#969799;font-size:14px;vertical-align:middle}.van-loading--vertical{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-loading--vertical .van-loading__text{margin:10px 0 0}.van-loading__spinner--spinner i:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.van-loading__spinner--spinner i:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.van-loading__spinner--spinner i:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.van-loading__spinner--spinner i:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.van-loading__spinner--spinner i:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.van-loading__spinner--spinner i:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.van-loading__spinner--spinner i:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.van-loading__spinner--spinner i:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.van-loading__spinner--spinner i:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.van-loading__spinner--spinner i:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.van-loading__spinner--spinner i:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.van-loading__spinner--spinner i:nth-of-type(12){-webkit-transform:rotate(360deg);transform:rotate(360deg);opacity:.3125}.van-button{position:relative;display:inline-block;box-sizing:border-box;height:44px;margin:0;padding:0;font-size:16px;line-height:42px;text-align:center;border-radius:2px;-webkit-appearance:none;-webkit-text-size-adjust:100%}.van-button::before{position:absolute;top:50%;left:50%;width:100%;height:100%;background-color:#000;border:inherit;border-color:#000;border-radius:inherit;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;content:' '}.van-button:active::before{opacity:.1}.van-button--disabled::before,.van-button--loading::before{display:none}.van-button--default{color:#323233;background-color:#fff;border:1px solid #ebedf0}.van-button--primary{color:#fff;background-color:#07c160;border:1px solid #07c160}.van-button--info{color:#fff;background-color:#1989fa;border:1px solid #1989fa}.van-button--danger{color:#fff;background-color:#f44;border:1px solid #f44}.van-button--warning{color:#fff;background-color:#ff976a;border:1px solid #ff976a}.van-button--plain{background-color:#fff}.van-button--plain.van-button--primary{color:#07c160}.van-button--plain.van-button--info{color:#1989fa}.van-button--plain.van-button--danger{color:#f44}.van-button--plain.van-button--warning{color:#ff976a}.van-button--large{width:100%;height:50px;line-height:48px}.van-button--normal{padding:0 15px;font-size:14px}.van-button--small{min-width:60px;height:30px;padding:0 8px;font-size:12px;line-height:28px}.van-button__loading{display:inline-block;vertical-align:top}.van-button--mini{display:inline-block;min-width:50px;height:22px;font-size:10px;line-height:20px}.van-button--mini+.van-button--mini{margin-left:5px}.van-button--block{display:block;width:100%}.van-button--disabled{opacity:.5}.van-button--hairline.van-button--round::after,.van-button--round{border-radius:10em}.van-button--hairline.van-button--square::after,.van-button--square{border-radius:0}.van-button__icon{min-width:1em;font-size:1.2em;line-height:inherit;vertical-align:top}.van-button__icon+.van-button__text,.van-button__loading+.van-button__text{display:inline-block;margin-left:5px;vertical-align:top}.van-button--hairline{border-width:0}.van-button--hairline::after{border-color:inherit;border-radius:4px}.van-cell{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;width:100%;padding:10px 15px;overflow:hidden;color:#323233;font-size:14px;line-height:24px;background-color:#fff}.van-cell:not(:last-child)::after{position:absolute;box-sizing:border-box;content:' ';pointer-events:none;right:0;bottom:0;left:15px;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-cell--borderless::after{display:none}.van-cell__label{margin-top:3px;color:#969799;font-size:12px;line-height:18px}.van-cell__title,.van-cell__value{-webkit-box-flex:1;-webkit-flex:1;flex:1}.van-cell__value{position:relative;overflow:hidden;color:#969799;text-align:right;vertical-align:middle}.van-cell__value--alone{color:#323233;text-align:left}.van-cell__left-icon,.van-cell__right-icon{min-width:1em;height:24px;font-size:16px;line-height:24px}.van-cell__left-icon{margin-right:5px}.van-cell__right-icon{margin-left:5px;color:#969799}.van-cell--clickable:active{background-color:#f2f3f5}.van-cell--required{overflow:visible}.van-cell--required::before{position:absolute;left:7px;color:#f44;font-size:14px;content:'*'}.van-cell--center{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-cell--large{padding-top:12px;padding-bottom:12px}.van-cell--large .van-cell__title{font-size:16px}.van-cell--large .van-cell__label{font-size:14px}.van-cell-group{background-color:#fff}.van-cell-group__title{padding:15px 15px 5px;color:#969799;font-size:14px;line-height:16px}.van-col{float:left;box-sizing:border-box;min-height:1px}.van-col--1{width:4.16666667%}.van-col--offset-1{margin-left:4.16666667%}.van-col--2{width:8.33333333%}.van-col--offset-2{margin-left:8.33333333%}.van-col--3{width:12.5%}.van-col--offset-3{margin-left:12.5%}.van-col--4{width:16.66666667%}.van-col--offset-4{margin-left:16.66666667%}.van-col--5{width:20.83333333%}.van-col--offset-5{margin-left:20.83333333%}.van-col--6{width:25%}.van-col--offset-6{margin-left:25%}.van-col--7{width:29.16666667%}.van-col--offset-7{margin-left:29.16666667%}.van-col--8{width:33.33333333%}.van-col--offset-8{margin-left:33.33333333%}.van-col--9{width:37.5%}.van-col--offset-9{margin-left:37.5%}.van-col--10{width:41.66666667%}.van-col--offset-10{margin-left:41.66666667%}.van-col--11{width:45.83333333%}.van-col--offset-11{margin-left:45.83333333%}.van-col--12{width:50%}.van-col--offset-12{margin-left:50%}.van-col--13{width:54.16666667%}.van-col--offset-13{margin-left:54.16666667%}.van-col--14{width:58.33333333%}.van-col--offset-14{margin-left:58.33333333%}.van-col--15{width:62.5%}.van-col--offset-15{margin-left:62.5%}.van-col--16{width:66.66666667%}.van-col--offset-16{margin-left:66.66666667%}.van-col--17{width:70.83333333%}.van-col--offset-17{margin-left:70.83333333%}.van-col--18{width:75%}.van-col--offset-18{margin-left:75%}.van-col--19{width:79.16666667%}.van-col--offset-19{margin-left:79.16666667%}.van-col--20{width:83.33333333%}.van-col--offset-20{margin-left:83.33333333%}.van-col--21{width:87.5%}.van-col--offset-21{margin-left:87.5%}.van-col--22{width:91.66666667%}.van-col--offset-22{margin-left:91.66666667%}.van-col--23{width:95.83333333%}.van-col--offset-23{margin-left:95.83333333%}.van-col--24{width:100%}.van-col--offset-24{margin-left:100%}.van-row::after{display:table;clear:both;content:\"\"}.van-row--flex{display:-webkit-box;display:-webkit-flex;display:flex}.van-row--flex::after{display:none}.van-row--justify-center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-row--justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.van-row--justify-space-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.van-row--justify-space-around{-webkit-justify-content:space-around;justify-content:space-around}.van-row--align-center{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-row--align-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.van-grid{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-grid-item{position:relative;box-sizing:border-box}.van-grid-item--square{height:0}.van-grid-item__content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;height:100%;padding:15px 10px;background-color:#fff}.van-grid-item__content::after{z-index:1;border-width:0 1px 1px 0}.van-grid-item__content--square{position:absolute;top:0;right:0;left:0}.van-grid-item__content--center{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-grid-item__content--surround::after{border-width:1px}.van-grid-item__content--clickable:active{background-color:#f2f3f5}.van-grid-item__icon{font-size:28px}.van-grid-item__text{color:#7d7e80;font-size:12px;word-break:break-all}.van-grid-item__icon+.van-grid-item__text{margin-top:8px}.van-image{position:relative;display:inline-block}.van-image--round{overflow:hidden;border-radius:50%}.van-image__error,.van-image__img,.van-image__loading{display:block;width:100%;height:100%}.van-image__error,.van-image__loading{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#969799;font-size:14px;background-color:#f8f8f8}.van-circle{position:relative;display:inline-block;text-align:center}.van-circle__layer{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:530px 530px;transform-origin:530px 530px;fill:none;stroke-linecap:round;stroke-dasharray:3140;stroke-dashoffset:3140}.van-circle__text{position:absolute;top:50%;left:0;width:100%;color:#323233;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-collapse-item__title .van-cell__right-icon::before{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:.3s;transition:.3s}.van-collapse-item__title::after{visibility:hidden}.van-collapse-item__title--expanded .van-cell__right-icon::before{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.van-collapse-item__title--expanded::after{visibility:visible}.van-collapse-item__title--disabled,.van-collapse-item__title--disabled .van-cell__right-icon{color:#c8c9cc}.van-collapse-item__title--disabled:active{background-color:#fff}.van-collapse-item__wrapper{overflow:hidden;-webkit-transition:height .3s ease-in-out;transition:height .3s ease-in-out;will-change:height}.van-collapse-item__content{padding:15px;color:#969799;font-size:13px;line-height:1.5;background-color:#fff}.van-count-down,.van-divider{color:#323233;font-size:14px;line-height:20px}.van-divider{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:15px 0;color:#969799;line-height:24px;border-color:#ebedf0;border-style:solid;border-width:0}.van-divider::after,.van-divider::before{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;height:1px;border-color:inherit;border-style:inherit;border-width:1px 0 0}.van-divider::before{content:''}.van-divider--hairline::after,.van-divider--hairline::before{-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-divider--dashed{border-style:dashed}.van-divider--content-center::before,.van-divider--content-left::before,.van-divider--content-right::before{margin-right:15px}.van-divider--content-center::after,.van-divider--content-left::after,.van-divider--content-right::after{margin-left:15px;content:''}.van-divider--content-left::before,.van-divider--content-right::after{max-width:10%}.van-list__error-text,.van-list__finished-text,.van-list__loading{color:#969799;font-size:13px;line-height:50px;text-align:center}.van-list__placeholder{height:0;pointer-events:none}.van-nav-bar{position:relative;height:46px;line-height:46px;text-align:center;background-color:#fff;-webkit-user-select:none;user-select:none}.van-nav-bar .van-icon{color:#1989fa;vertical-align:middle}.van-nav-bar__arrow{min-width:1em;font-size:16px}.van-nav-bar__arrow+.van-nav-bar__text{margin-left:-20px;padding-left:25px}.van-nav-bar--fixed{position:fixed;top:0;left:0;width:100%}.van-nav-bar__title{max-width:60%;margin:0 auto;color:#323233;font-weight:500;font-size:16px}.van-nav-bar__left,.van-nav-bar__right{position:absolute;bottom:0;font-size:14px}.van-nav-bar__left{left:15px}.van-nav-bar__right{right:15px}.van-nav-bar__text{display:inline-block;margin:0 -15px;padding:0 15px;color:#1989fa;vertical-align:middle}.van-nav-bar__text:active{background-color:#f2f3f5}.van-notice-bar{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:40px;padding:0 15px;color:#ed6a0c;font-size:14px;line-height:24px;background-color:#fffbe8}.van-notice-bar__left-icon,.van-notice-bar__right-icon{min-width:22px;font-size:16px}.van-notice-bar__right-icon{text-align:right}.van-notice-bar__wrap{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:24px;overflow:hidden}.van-notice-bar__content{position:absolute;white-space:nowrap}.van-notice-bar__content.van-ellipsis{max-width:100%}.van-notice-bar__play{-webkit-animation:van-notice-bar-play linear both;animation:van-notice-bar-play linear both}.van-notice-bar__play--infinite{-webkit-animation:van-notice-bar-play-infinite linear infinite both;animation:van-notice-bar-play-infinite linear infinite both}.van-notice-bar--wrapable{height:auto;padding:8px 15px}.van-notice-bar--wrapable .van-notice-bar__wrap{height:auto}.van-notice-bar--wrapable .van-notice-bar__content{position:relative;white-space:normal}.van-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7)}.van-overflow-hidden{overflow:hidden!important}.van-popup{position:fixed;max-height:100%;overflow-y:auto;background-color:#fff;-webkit-transition:.3s ease-out;transition:.3s ease-out;-webkit-overflow-scrolling:touch}.van-popup--center{top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-popup--center.van-popup--round{border-radius:12px}.van-popup--top{top:0;left:0;width:100%}.van-popup--top.van-popup--round{border-radius:0 0 12px 12px}.van-popup--right{top:50%;right:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--right.van-popup--round{border-radius:12px 0 0 12px}.van-popup--bottom{bottom:0;left:0;width:100%}.van-popup--bottom.van-popup--round{border-radius:12px 12px 0 0}.van-popup--left{top:50%;left:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--left.van-popup--round{border-radius:0 12px 12px 0}.van-popup-slide-top-enter,.van-popup-slide-top-leave-active{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.van-popup-slide-right-enter,.van-popup-slide-right-leave-active{-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}.van-popup-slide-bottom-enter,.van-popup-slide-bottom-leave-active{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.van-popup-slide-left-enter,.van-popup-slide-left-leave-active{-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}.van-search,.van-search__content{display:-webkit-box;display:-webkit-flex;display:flex}.van-search{-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;padding:10px 16px}.van-search__content{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:10px;background-color:#f7f8fa;border-radius:2px}.van-search__content--round{border-radius:17px}.van-search__label{padding:0 5px;color:#323233;font-size:14px;line-height:34px}.van-search .van-cell{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 10px 5px 0;background-color:transparent}.van-search .van-cell__left-icon{color:#969799}.van-search--show-action{padding-right:0}.van-search input::-webkit-search-cancel-button,.van-search input::-webkit-search-decoration,.van-search input::-webkit-search-results-button,.van-search input::-webkit-search-results-decoration{display:none}.van-search__action{padding:0 10px;color:#323233;font-size:14px;line-height:34px}.van-search__action:active{background-color:#f2f3f5}.van-pagination{display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;line-height:40px;text-align:center}.van-pagination__item{-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;min-width:36px;height:40px;color:#1989fa;background-color:#fff;-webkit-user-select:none;user-select:none}.van-pagination__item:active{color:#fff;background-color:#1989fa}.van-pagination__item::after{border-width:1px 0 1px 1px}.van-pagination__item:last-child::after{border-right-width:1px}.van-pagination__item--disabled,.van-pagination__item--disabled:active{color:#7d7e80;background-color:#f8f8f8;opacity:.6}.van-pagination__item--active{color:#fff;background-color:#1989fa}.van-pagination__next,.van-pagination__prev{padding:0 5px}.van-pagination__page{-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0}.van-pagination__page-desc{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:40px;color:#7d7e80}.van-pagination--simple .van-pagination__next::after,.van-pagination--simple .van-pagination__prev::after{border-width:1px}.van-panel{background:#fff}.van-panel__header-value{color:#f44}.van-panel__footer{padding:10px 15px}.van-rate{-webkit-user-select:none;user-select:none}.van-rate__item{position:relative;display:inline-block}.van-rate__item:not(:last-child){padding-right:4px}.van-rate__icon{display:block;width:1em;font-size:20px}.van-rate__icon--half{position:absolute;top:0;left:0;width:.5em;overflow:hidden}.van-steps{overflow:hidden;background-color:#fff}.van-steps--horizontal{padding:10px 10px 0}.van-steps--horizontal .van-steps__items{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;margin:0 0 10px;padding-bottom:22px}.van-steps--vertical{padding:0 0 0 35px}.van-step{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#969799;font-size:14px}.van-step__circle{display:block;width:5px;height:5px;background-color:#969799;border-radius:50%}.van-step__line{position:absolute;background-color:#ebedf0}.van-step--horizontal{float:left}.van-step--horizontal:first-child .van-step__title{margin-left:0;-webkit-transform:none;transform:none}.van-step--horizontal:last-child{position:absolute;right:1px;width:auto}.van-step--horizontal:last-child .van-step__title{margin-left:0;-webkit-transform:none;transform:none}.van-step--horizontal:last-child .van-step__circle-container{right:-9px;left:auto}.van-step--horizontal .van-step__circle-container{position:absolute;top:30px;left:-8px;z-index:1;padding:0 8px;background-color:#fff;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-step--horizontal .van-step__title{display:inline-block;margin-left:3px;font-size:12px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media (max-width:321px){.van-step--horizontal .van-step__title{font-size:11px}}.van-step--horizontal .van-step__line{top:30px;left:0;width:100%;height:1px}.van-step--horizontal .van-step__icon{display:block;font-size:12px}.van-step--horizontal .van-step--process{color:#323233}.van-step--vertical{display:block;float:none;padding:10px 10px 10px 0;line-height:18px}.van-step--vertical:not(:last-child)::after{border-bottom-width:1px}.van-step--vertical:first-child::before{position:absolute;top:0;left:-15px;z-index:1;width:1px;height:20px;background-color:#fff;content:''}.van-step--vertical .van-step__circle-container{position:absolute;top:19px;left:-15px;z-index:2;font-size:12px;line-height:1;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.van-step--vertical .van-step__line{top:16px;left:-15px;width:1px;height:100%}.van-step:last-child .van-step__line{width:0}.van-step--finish{color:#323233}.van-step--finish .van-step__circle,.van-step--finish .van-step__line{background-color:#07c160}.van-sticky--fixed{position:fixed;top:0;right:0;left:0;z-index:99}.van-tag{display:inline-block;padding:.2em .5em;color:#fff;font-size:10px;line-height:normal;border-radius:.2em}.van-tag::after{border-color:currentColor;border-radius:.4em}.van-tag--default{background-color:#969799}.van-tag--default.van-tag--plain{color:#969799}.van-tag--danger{background-color:#f44}.van-tag--danger.van-tag--plain{color:#f44}.van-tag--primary{background-color:#1989fa}.van-tag--primary.van-tag--plain{color:#1989fa}.van-tag--success{background-color:#07c160}.van-tag--success.van-tag--plain{color:#07c160}.van-tag--plain{background-color:#fff}.van-tag--mark{padding-right:.6em;border-radius:0 .8em .8em 0}.van-tag--mark::after{border-radius:0 1.6em 1.6em 0}.van-tag--round{border-radius:.8em}.van-tag--round::after{border-radius:1.6em}.van-tag--medium{font-size:12px}.van-tag--large{font-size:14px}.van-tab__pane,.van-tab__pane-wrapper{-webkit-flex-shrink:0;flex-shrink:0;box-sizing:border-box;width:100%}.van-tab__pane-wrapper--inactive{height:0;overflow:visible}.van-tab{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;min-width:0;padding:0 5px;color:#7d7e80;font-size:14px;line-height:44px;text-align:center;cursor:pointer}.van-tab span{display:block}.van-tab--active{color:#323233;font-weight:500}.van-tab--disabled{color:#c8c9cc}.van-tabs{position:relative}.van-tabs__wrap{overflow:hidden}.van-tabs__wrap--page-top{position:fixed}.van-tabs__wrap--content-bottom{top:auto;bottom:0}.van-tabs__wrap--scrollable .van-tab{-webkit-box-flex:0;-webkit-flex:0 0 22%;flex:0 0 22%}.van-tabs__wrap--scrollable .van-tab--complete{-webkit-box-flex:1;-webkit-flex:1 0 auto;flex:1 0 auto}.van-tabs__wrap--scrollable .van-tabs__nav{overflow:hidden;overflow-x:auto;-webkit-overflow-scrolling:touch}.van-tabs__wrap--scrollable .van-tabs__nav::-webkit-scrollbar{display:none}.van-tabs__nav{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;-webkit-user-select:none;user-select:none}.van-tabs__nav--line{box-sizing:content-box;height:100%;padding-bottom:15px}.van-tabs__nav--card{box-sizing:border-box;height:30px;margin:0 15px;border:1px solid #f44;border-radius:2px}.van-tabs__nav--card .van-tab{color:#f44;line-height:28px;border-right:1px solid #f44}.van-tabs__nav--card .van-tab:last-child{border-right:none}.van-tabs__nav--card .van-tab.van-tab--active{color:#fff;background-color:#f44}.van-tabs__nav--card .van-tab--disabled{color:#c8c9cc}.van-tabs__line{position:absolute;bottom:15px;left:0;z-index:1;height:3px;background-color:#f44;border-radius:3px}.van-tabs__track{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%;will-change:left}.van-tabs__content--animated{overflow:hidden}.van-tabs--line .van-tabs__wrap{height:44px}.van-tabs--card{padding-top:30px}.van-tabs--card>.van-tabs__wrap{height:30px}.van-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:50px;background-color:#fff}.van-tabbar--fixed{position:fixed;bottom:0;left:0}.van-tabbar--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-tabbar-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#7d7e80;font-size:12px;line-height:1}.van-tabbar-item__icon{position:relative;margin-bottom:5px;font-size:18px}.van-tabbar-item__icon .van-icon{display:block;min-width:1em}.van-tabbar-item__icon--dot::after{position:absolute;top:0;right:-8px;width:8px;height:8px;background-color:#f44;border-radius:100%;content:' '}.van-tabbar-item__icon img{display:block;height:18px}.van-tabbar-item--active{color:#1989fa}.van-tabbar-item .van-info{margin-top:2px}.van-image-preview{position:fixed;top:0;left:0;width:100%;height:100%}.van-image-preview__image{position:absolute;top:0;right:0;bottom:0;left:0;max-width:100%;max-height:100%;margin:auto}.van-image-preview__index{position:absolute;top:10px;left:50%;color:#fff;font-size:14px;letter-spacing:2px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}.van-image-preview__overlay{background-color:rgba(0,0,0,.9)}.van-image-preview .van-swipe{height:100%}.van-progress{position:relative;height:4px;background:#e5e5e5;border-radius:4px}.van-progress__portion{position:absolute;left:0;height:100%;border-radius:inherit}.van-progress__portion--with-pivot{border-top-right-radius:0;border-bottom-right-radius:0}.van-progress__pivot{position:absolute;top:50%;right:0;box-sizing:border-box;min-width:2em;padding:0 5px;font-size:10px;line-height:1.6;text-align:center;word-break:keep-all;background-color:#e5e5e5;border-radius:1em;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.van-sidebar{width:85px}.van-sidebar-item{display:block;box-sizing:border-box;padding:20px 12px 20px 9px;overflow:hidden;color:#7d7e80;font-size:14px;line-height:1.4;word-break:break-all;background-color:#f8f8f8;border-left:3px solid transparent;-webkit-user-select:none;user-select:none}.van-sidebar-item__text{position:relative}.van-sidebar-item:active{background-color:#f2f3f5}.van-sidebar-item:not(:last-child)::after{border-bottom-width:1px}.van-sidebar-item--select{color:#323233;font-weight:500;border-color:#f44;background-color:#fff}.van-sidebar-item--select::after{border-right-width:1px}.van-sidebar-item--select:active{background-color:#fff}.van-sidebar-item .van-info{right:4px}.van-skeleton{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 15px}.van-skeleton__avatar{-webkit-flex-shrink:0;flex-shrink:0;margin-right:15px;background-color:#f2f3f5}.van-skeleton__avatar--round{border-radius:100%}.van-skeleton__content{width:100%}.van-skeleton__avatar+.van-skeleton__content{padding-top:8px}.van-skeleton__row,.van-skeleton__title{height:16px;background-color:#f2f3f5}.van-skeleton__title{margin:0}.van-skeleton__row:not(:first-child){margin-top:12px}.van-skeleton__title+.van-skeleton__row{margin-top:20px}.van-skeleton--animate{-webkit-animation:van-skeleton-blink 1.2s ease-in-out infinite;animation:van-skeleton-blink 1.2s ease-in-out infinite}.van-slider,.van-slider__bar{position:relative;background-color:#e5e5e5;border-radius:999px}.van-slider__bar{background-color:#1989fa;border-radius:inherit}.van-slider__button{width:20px;height:20px;background-color:#fff;border-radius:50%;box-shadow:0 1px 2px rgba(0,0,0,.5)}.van-slider__button-wrapper{position:absolute;top:50%;right:0;-webkit-transform:translate3d(50%,-50%,0);transform:translate3d(50%,-50%,0)}.van-slider__button-wrapper::after{position:absolute;top:-50%;left:-50%;width:200%;height:200%;content:''}.van-slider--disabled{opacity:.3}.van-slider--vertical{display:inline-block;height:100%}.van-slider--vertical .van-slider__button-wrapper{top:auto;bottom:0;-webkit-transform:translate3d(50%,50%,0);transform:translate3d(50%,50%,0)}.van-stepper{font-size:0;-webkit-user-select:none;user-select:none}.van-stepper__minus,.van-stepper__plus{position:relative;box-sizing:border-box;width:28px;height:28px;margin:0;padding:5px;color:#323233;vertical-align:middle;background-color:#f2f3f5;border:0}.van-stepper__minus::before,.van-stepper__plus::before{width:13px;height:1px}.van-stepper__minus::after,.van-stepper__plus::after{width:1px;height:13px}.van-stepper__minus::after,.van-stepper__minus::before,.van-stepper__plus::after,.van-stepper__plus::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;background-color:currentColor;content:''}.van-stepper__minus:active,.van-stepper__plus:active{background-color:#e8e8e8}.van-stepper__minus--disabled,.van-stepper__plus--disabled{color:#c8c9cc;background-color:#f7f8fa}.van-stepper__minus--disabled:active,.van-stepper__plus--disabled:active{background-color:#f7f8fa}.van-stepper__minus{border-radius:4px 0 0 4px}.van-stepper__minus::after{display:none}.van-stepper__plus{border-radius:0 4px 4px 0}.van-stepper__input{box-sizing:border-box;width:32px;height:28px;margin:0 2px;padding:0;color:#323233;font-size:14px;text-align:center;vertical-align:middle;background-color:#f2f3f5;border:0;border-width:1px 0;border-radius:0;-webkit-appearance:none}.van-stepper__input[disabled]{color:#c8c9cc;background-color:#f2f3f5}.van-stepper input[type=number]::-webkit-inner-spin-button,.van-stepper input[type=number]::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.van-swipe{position:relative;overflow:hidden;-webkit-user-select:none;user-select:none}.van-swipe__track{height:100%}.van-swipe__indicators{position:absolute;bottom:10px;left:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.van-swipe__indicators--vertical{top:50%;bottom:auto;left:10px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child){margin-bottom:6px}.van-swipe__indicator{width:6px;height:6px;background-color:#ebedf0;border-radius:100%;opacity:.3;-webkit-transition:opacity .2s;transition:opacity .2s}.van-swipe__indicator:not(:last-child){margin-right:6px}.van-swipe__indicator--active{background-color:#1989fa;opacity:1}.van-swipe-item{float:left;height:100%}.van-index-anchor{padding:0 15px;color:#323233;font-weight:500;font-size:14px;line-height:32px;background-color:transparent}.van-index-anchor--sticky{position:fixed;top:0;right:0;left:0;background-color:#fff}.van-index-bar__sidebar{position:fixed;top:50%;right:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-user-select:none;user-select:none}.van-index-bar__index{padding:0 3px 0 15px;font-weight:500;font-size:10px;line-height:14px}.van-checkbox{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none}.van-checkbox__icon{-webkit-box-flex:0;-webkit-flex:none;flex:none;height:1em;font-size:20px;line-height:1em}.van-checkbox__icon .van-icon{display:block;box-sizing:border-box;width:1.25em;height:1.25em;color:transparent;font-size:.8em;line-height:inherit;text-align:center;border:1px solid #e5e5e5;-webkit-transition:.2s;transition:.2s}.van-checkbox__icon--round .van-icon{border-radius:100%}.van-checkbox__icon--checked .van-icon{color:#fff;background-color:#1989fa;border-color:#1989fa}.van-checkbox__icon--disabled .van-icon{background-color:#ebedf0;border-color:#c8c9cc}.van-checkbox__icon--disabled.van-checkbox__icon--checked .van-icon{color:#c8c9cc}.van-checkbox__label{margin-left:10px;color:#323233;line-height:20px}.van-checkbox__label--left{margin:0 10px 0 0}.van-checkbox__label--disabled,.van-radio__icon--disabled.van-radio__icon--checked .van-icon{color:#c8c9cc}.van-field__label{-webkit-box-flex:0;-webkit-flex:none;flex:none;width:90px}.van-field__label--center{text-align:center}.van-field__label--right{text-align:right}.van-field__body{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-field__control{display:block;box-sizing:border-box;width:100%;margin:0;padding:0;color:#323233;text-align:left;background-color:transparent;border:0;resize:none}.van-field__control::-webkit-input-placeholder{color:#969799}.van-field__control::placeholder{color:#969799}.van-field__control:disabled{color:#969799;background-color:transparent;opacity:1}.van-field__control--center{text-align:center}.van-field__control--right{text-align:right}.van-field__control[type=date],.van-field__control[type=datetime-local],.van-field__control[type=time]{min-height:24px}.van-field__button,.van-field__clear,.van-field__icon,.van-field__right-icon{-webkit-flex-shrink:0;flex-shrink:0}.van-field__clear,.van-field__right-icon{margin-right:-10px;padding:0 10px;line-height:inherit}.van-field__clear{color:#c8c9cc;font-size:16px}.van-field__left-icon .van-icon,.van-field__right-icon .van-icon{display:block;min-width:1em;font-size:16px;line-height:inherit}.van-field__left-icon{margin-right:5px}.van-field--disabled .van-field__control,.van-field__right-icon{color:#969799}.van-field__button{padding-left:10px}.van-field__error-message{color:#f44;font-size:12px;text-align:left}.van-field__error-message--center{text-align:center}.van-field__error-message--right{text-align:right}.van-field--error .van-field__control,.van-field--error .van-field__control::-webkit-input-placeholder{color:#f44}.van-field--error .van-field__control,.van-field--error .van-field__control::placeholder{color:#f44}.van-field--min-height .van-field__control{min-height:60px}.van-radio{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none}.van-radio__icon{-webkit-box-flex:0;-webkit-flex:none;flex:none;height:1em;font-size:20px;line-height:1em}.van-radio__icon .van-icon{display:block;box-sizing:border-box;width:1.25em;height:1.25em;color:transparent;font-size:.8em;line-height:inherit;text-align:center;border:1px solid #e5e5e5;-webkit-transition:.2s;transition:.2s}.van-radio__icon--round .van-icon{border-radius:100%}.van-radio__icon--checked .van-icon{color:#fff;background-color:#1989fa;border-color:#1989fa}.van-radio__icon--disabled .van-icon{background-color:#ebedf0;border-color:#c8c9cc}.van-radio__label{margin-left:10px;color:#323233;line-height:20px}.van-radio__label--left{margin:0 10px 0 0}.van-radio__label--disabled{color:#c8c9cc}.van-switch,.van-switch__node{height:1em;background-color:#fff}.van-switch{display:inline-block;box-sizing:content-box;border:1px solid rgba(0,0,0,.1);position:relative;width:2em;border-radius:1em;-webkit-transition:background-color .3s;transition:background-color .3s}.van-switch__node{position:absolute;top:0;left:0;z-index:1;width:1em;border-radius:100%;box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);-webkit-transition:.3s;transition:.3s}.van-switch__loading{top:25%;left:25%;width:50%;height:50%;line-height:1}.van-switch--on{background-color:#1989fa}.van-switch--on .van-switch__node{-webkit-transform:translateX(1em);transform:translateX(1em)}.van-switch--disabled{opacity:.4}.van-uploader{position:relative;display:inline-block}.van-uploader__wrapper{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-uploader__input{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;cursor:pointer;opacity:0}.van-uploader__input-wrapper{position:relative}.van-uploader__upload{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;width:80px;height:80px;margin:0 10px 10px 0;background-color:#fff;border:1px dashed #e5e5e5}.van-uploader__upload-icon{color:#969799;font-size:24px}.van-uploader__upload-text{margin-top:10px;color:#969799;font-size:12px}.van-uploader__preview{position:relative;margin:0 10px 10px 0}.van-uploader__preview-image{display:block;width:80px;height:80px}.van-uploader__preview-delete{position:absolute;right:0;bottom:0;padding:1px;color:#fff;background-color:rgba(0,0,0,.45)}.van-uploader__file{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:80px;height:80px;background-color:#f8f8f8}.van-uploader__file-icon{color:#7d7e80;font-size:20px}.van-uploader__file-name{box-sizing:border-box;width:100%;margin-top:5px;padding:0 5px;color:#7d7e80;font-size:12px;text-align:center}.van-password-input{position:relative;margin:0 15px;-webkit-user-select:none;user-select:none}.van-password-input__error-info,.van-password-input__info{margin-top:15px;font-size:14px;text-align:center}.van-password-input__info{color:#969799}.van-password-input__error-info{color:#f44}.van-password-input__security{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:50px}.van-password-input__security::after{border-radius:6px}.van-password-input__security li{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;font-size:20px;line-height:50px;text-align:center;background-color:#fff}.van-password-input__security i{position:absolute;top:50%;left:50%;width:10px;height:10px;margin:-5px 0 0 -5px;background-color:#000;border-radius:100%;visibility:hidden}.van-number-keyboard{position:fixed;bottom:0;left:0;width:100%;background-color:#fff;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-user-select:none;user-select:none}.van-number-keyboard__title{position:relative;height:30px;color:#7d7e80;font-size:14px;line-height:30px;text-align:center}.van-number-keyboard__title-left{position:absolute;left:0}.van-number-keyboard__body{box-sizing:border-box}.van-number-keyboard__close{position:absolute;right:0;padding:0 15px;color:#1989fa;font-size:14px}.van-number-keyboard__close:active{background-color:#f2f3f5}.van-number-keyboard__sidebar{position:absolute;top:0;right:0;width:25%;height:216px}.van-number-keyboard--custom .van-number-keyboard__body{padding-right:25%}.van-number-keyboard--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-key{display:inline-block;width:33.33333333%;height:54px;font-size:24px;font-style:normal;line-height:54px;text-align:center;vertical-align:middle}.van-key::after{border-width:1px 1px 0 0}.van-key--middle{width:66.66666667%}.van-key--big{width:100%;height:108px;line-height:108px}.van-key--blue,.van-key--delete{font-size:16px}.van-key--blue{color:#fff}.van-key--blue,.van-key--blue.van-key--active{background-color:#1989fa}.van-key--blue::after{border-color:#1989fa}.van-key--blue:active{background-color:#0570db}.van-key--gray{background-color:#ebedf0}.van-action-sheet__cancel:active,.van-action-sheet__item:active,.van-key--active{background-color:#f2f3f5}.van-action-sheet{max-height:90%;color:#323233}.van-action-sheet__cancel,.van-action-sheet__item{font-size:16px;line-height:50px;text-align:center;background-color:#fff}.van-action-sheet__item{height:50px}.van-action-sheet__item--disabled{color:#c8c9cc}.van-action-sheet__item--disabled:active{background-color:#fff}.van-action-sheet__subname{margin-left:5px;color:#7d7e80;font-size:12px}.van-action-sheet__cancel::before{display:block;height:10px;background-color:#f8f8f8;content:' '}.van-action-sheet__header{font-size:16px;line-height:44px;text-align:center}.van-action-sheet__close{position:absolute;top:0;right:0;padding:0 15px;color:#969799;font-size:18px;line-height:inherit}.van-action-sheet--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-dialog{position:fixed;top:50%;left:50%;width:85%;overflow:hidden;font-size:16px;background-color:#fff;border-radius:4px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.3s;transition:.3s}.van-dialog__header{padding-top:25px;font-weight:500;text-align:center}.van-dialog__header--isolated{padding:25px 0}.van-dialog__message{max-height:60vh;padding:25px;overflow-y:auto;font-size:14px;line-height:1.5;white-space:pre-wrap;text-align:center;-webkit-overflow-scrolling:touch}.van-dialog__message--has-title{padding-top:12px;color:#7d7e80}.van-dialog__message--left{text-align:left}.van-dialog__message--right{text-align:right}.van-dialog__footer{overflow:hidden;-webkit-user-select:none;user-select:none}.van-dialog__footer--buttons{display:-webkit-box;display:-webkit-flex;display:flex}.van-dialog__footer--buttons .van-button{-webkit-box-flex:1;-webkit-flex:1;flex:1}.van-dialog .van-button{border:0}.van-dialog__confirm,.van-dialog__confirm:active{color:#1989fa}.van-dialog-bounce-enter{-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7);opacity:0}.van-dialog-bounce-leave-active{-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9);opacity:0}.van-dropdown-item{position:fixed;right:0;left:0;overflow:hidden}.van-dropdown-item--up{top:0}.van-dropdown-item--down{bottom:0}.van-dropdown-item__content{position:absolute}.van-dropdown-item__icon{display:block;line-height:inherit}.van-dropdown-menu,.van-dropdown-menu__item{display:-webkit-box;display:-webkit-flex;display:flex}.van-dropdown-menu{height:50px;background-color:#fff;-webkit-user-select:none;user-select:none}.van-dropdown-menu__item{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;min-width:0}.van-dropdown-menu__item:active{opacity:.7}.van-dropdown-menu__item--disabled:active{opacity:1}.van-dropdown-menu__item--disabled .van-dropdown-menu__title{color:#969799}.van-dropdown-menu__title{position:relative;box-sizing:border-box;max-width:100%;padding:0 8px;font-size:15px}.van-dropdown-menu__title::after{position:absolute;top:3px;right:-4px;border:3px solid;border-color:transparent transparent currentColor currentColor;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:.8;content:''}.van-dropdown-menu__title--down::after{top:7px;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.van-picker{position:relative;background-color:#fff;-webkit-user-select:none;user-select:none;-webkit-text-size-adjust:100%}.van-picker__toolbar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:44px;line-height:44px}.van-picker__cancel,.van-picker__confirm{padding:0 15px;color:#1989fa;font-size:14px}.van-picker__cancel:active,.van-picker__confirm:active{background-color:#f2f3f5}.van-picker__title{max-width:50%;font-weight:500;font-size:16px;text-align:center}.van-picker__columns,.van-picker__loading{position:relative;display:-webkit-box;display:-webkit-flex;display:flex}.van-picker__loading{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:rgba(255,255,255,.9)}.van-picker__frame,.van-picker__loading .van-loading{position:absolute;top:50%;left:0;z-index:3;width:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}.van-picker__mask{position:absolute;top:0;left:0;z-index:2;width:100%;height:100%;background-image:-webkit-linear-gradient(top,rgba(255,255,255,.9),rgba(255,255,255,.4)),-webkit-linear-gradient(bottom,rgba(255,255,255,.9),rgba(255,255,255,.4));background-image:linear-gradient(180deg,rgba(255,255,255,.9),rgba(255,255,255,.4)),linear-gradient(0deg,rgba(255,255,255,.9),rgba(255,255,255,.4));background-repeat:no-repeat;background-position:top,bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:none}.van-picker-column{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;font-size:16px;text-align:center}.van-picker-column__wrapper{-webkit-transition-timing-function:cubic-bezier(.23,1,.68,1);transition-timing-function:cubic-bezier(.23,1,.68,1)}.van-picker-column__item{padding:0 5px;color:#000}.van-picker-column__item--disabled{opacity:.3}.van-pull-refresh{overflow:hidden;-webkit-user-select:none;user-select:none}.van-pull-refresh__track{position:relative}.van-pull-refresh__head{position:absolute;top:-50px;left:0;width:100%;height:50px;overflow:hidden;color:#969799;font-size:14px;line-height:50px;text-align:center}.van-notify,.van-toast{box-sizing:border-box;padding:6px 15px;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center}.van-toast{position:fixed;top:50%;left:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:content-box;width:90px;max-width:70%;min-height:90px;padding:15px;color:#fff;word-break:break-all;background-color:rgba(50,50,51,.88);border-radius:4px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-toast--unclickable *{pointer-events:none}.van-toast--text{width:-webkit-fit-content;width:fit-content;min-width:96px;min-height:unset;padding:8px 12px}.van-toast--text .van-toast__text{margin-top:0}.van-toast--top{top:50px}.van-toast--bottom{top:auto;bottom:50px}.van-toast__icon{font-size:40px}.van-toast__loading{padding:5px}.van-toast__text{margin-top:10px}.van-swipe-cell{position:relative;overflow:hidden}.van-swipe-cell__left,.van-swipe-cell__right{position:absolute;top:0;height:100%}.van-swipe-cell__left{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.van-swipe-cell__right{right:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.van-switch-cell{padding-top:9px;padding-bottom:10px -1px}.van-switch-cell--large{padding-top:11px;padding-bottom:11px}.van-switch-cell .van-switch{float:right}.van-tree-select{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;-webkit-user-select:none;user-select:none}.van-tree-select__nav{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto;background-color:#fafafa;-webkit-overflow-scrolling:touch}.van-tree-select__nav-item{position:relative;padding:0 9px 0 12px;line-height:44px;border-left:3px solid transparent}.van-tree-select__nav-item--active{font-weight:700;background-color:#fff;border-color:#f44}.van-tree-select__nav-item--disabled{color:#969799}.van-tree-select__content{-webkit-box-flex:2;-webkit-flex:2;flex:2;overflow-y:auto;background-color:#fff;-webkit-overflow-scrolling:touch}.van-tree-select__item{position:relative;padding-left:15px;font-weight:700;line-height:44px}.van-tree-select__item--active{color:#f44}.van-tree-select__item--disabled{color:#c8c9cc}.van-tree-select__selected{position:absolute;top:50%;right:15px;margin-top:-8px}.van-address-edit__buttons{padding:30px 15px}.van-address-edit__buttons .van-button{margin-bottom:15px}.van-address-edit-detail{padding:0}.van-address-edit-detail__finish{color:#1989fa;font-size:12px}.van-address-list{box-sizing:border-box;height:100%;padding-bottom:100px}.van-address-list__add{position:fixed;bottom:0;left:0;z-index:9999}.van-address-list__disabled-text{padding:0 15px;color:#969799;font-size:12px;line-height:30px}.van-address-item{padding:15px}.van-address-item__value{padding-right:34px}.van-address-item__name{margin-bottom:5px;font-weight:500;font-size:14px;line-height:20px}.van-address-item__address{color:#7d7e80;font-size:12px;line-height:16px}.van-address-item--disabled .van-address-item__address,.van-address-item--disabled .van-address-item__name{color:#969799}.van-address-item__edit{position:absolute;top:50%;right:15px;font-size:16px;-webkit-transform:translate(0,-50%);transform:translate(0,-50%)}.van-card{position:relative;box-sizing:border-box;padding:5px 15px;color:#323233;font-size:12px;background-color:#fafafa}.van-card:not(:first-child){margin-top:10px}.van-card__header{display:-webkit-box;display:-webkit-flex;display:flex}.van-card__thumb{position:relative;-webkit-box-flex:0;-webkit-flex:none;flex:none;width:90px;height:90px;margin-right:10px}.van-card__content{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;min-width:0;min-height:90px}.van-card__content--centered{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-card__desc,.van-card__title{word-break:break-all}.van-card__title{max-height:32px;font-weight:500;line-height:16px;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.van-card__desc{max-height:20px;color:#7d7e80}.van-card__bottom,.van-card__desc{line-height:20px}.van-card__price{display:inline-block;color:#f44;font-weight:500}.van-card__origin-price{display:inline-block;margin-left:5px;color:#7d7e80;font-size:10px;text-decoration:line-through}.van-card__num{float:right}.van-card__tag{position:absolute;top:2px;left:0}.van-card__footer{-webkit-box-flex:0;-webkit-flex:none;flex:none;text-align:right}.van-card__footer .van-button{margin-left:5px}.van-contact-card{padding:15px}.van-contact-card__value{margin-left:5px;line-height:20px}.van-contact-card--add .van-contact-card__value{line-height:40px}.van-contact-card--add .van-cell__left-icon{color:#1989fa;font-size:40px}.van-contact-card::before{position:absolute;right:0;bottom:0;left:0;height:2px;background:-webkit-repeating-linear-gradient(135deg,#ff6c6c 0,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background:repeating-linear-gradient(-45deg,#ff6c6c 0,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background-size:80px;content:''}.van-contact-list{box-sizing:border-box;height:100%;padding-bottom:50px}.van-contact-list__item{padding:15px}.van-contact-list__item-value{padding-right:34px}.van-contact-list__group{box-sizing:border-box;height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch}.van-contact-list__name{font-weight:500;font-size:14px;line-height:20px}.van-contact-list__edit{position:absolute;top:50%;right:15px;font-size:16px;-webkit-transform:translate(0,-50%);transform:translate(0,-50%)}.van-contact-list__add{position:fixed;bottom:0;left:0;z-index:9999}.van-contact-edit__buttons{padding:30px 15px}.van-contact-edit .van-cell__title{max-width:65px}.van-contact-edit .van-button{margin-bottom:15px}.van-coupon{margin:0 15px 15px;overflow:hidden;background-color:#fff;border-radius:4px;box-shadow:0 0 4px rgba(0,0,0,.1)}.van-coupon:active{background-color:#f2f3f5}.van-coupon__content{display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;height:100px;padding:24px 0 0 15px}.van-coupon h2,.van-coupon p{margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-coupon h2{height:34px;font-weight:500;line-height:34px}.van-coupon p{color:#969799;font-size:12px;line-height:16px}.van-coupon__head{position:relative;min-width:85px;padding-right:10px}.van-coupon__head p{white-space:pre-wrap}.van-coupon__amount{color:#f44;font-size:24px}.van-coupon__amount span{font-size:50%}.van-coupon__amount span:not(:empty){margin-left:2px}.van-coupon__body{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;border-radius:0 4px 4px 0}.van-coupon__name{font-size:16px}.van-coupon__corner{position:absolute;top:16px;right:15px}.van-coupon__description{padding:7px 15px;background-color:#fafafa;border-top:1px dashed #ebedf0}.van-coupon--disabled:active{background-color:#fff}.van-coupon--disabled .van-coupon-item__content{height:90px}.van-coupon--disabled h2,.van-coupon--disabled p,.van-coupon--disabled span{color:#969799}.van-coupon-cell--selected{color:#323233}.van-coupon-list{position:relative;height:100%;background-color:#f8f8f8}.van-coupon-list__field{padding:7px 15px}.van-coupon-list__exchange{height:32px;line-height:30px}.van-coupon-list__list{box-sizing:border-box;padding:15px 0;overflow-y:auto;-webkit-overflow-scrolling:touch}.van-coupon-list__close{position:absolute;bottom:0;left:0;font-weight:500}.van-coupon-list__empty{padding-top:60px;text-align:center}.van-coupon-list__empty p{margin:15px 0;color:#969799;font-size:14px;line-height:20px}.van-coupon-list__empty img{width:200px;height:200px}.van-goods-action{position:fixed;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff}.van-goods-action--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-goods-action-button{-webkit-box-flex:1;-webkit-flex:1;flex:1}@media (max-width:321px){.van-goods-action-button{font-size:15px}}.van-goods-action-icon{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;min-width:48px;height:50px;color:#7d7e80;font-size:10px;line-height:1;text-align:center;background-color:#fff}.van-goods-action-icon:active{background-color:#f2f3f5}.van-goods-action-icon__icon{width:1em;margin:0 auto 5px;color:#323233;font-size:18px}.van-submit-bar{position:fixed;bottom:0;left:0;z-index:100;width:100%;background-color:#fff;-webkit-user-select:none;user-select:none}.van-submit-bar__tip{padding:10px;color:#f56723;font-size:12px;line-height:1.5;background-color:#fff7cc}.van-submit-bar__tip-icon{min-width:18px;font-size:12px;vertical-align:middle}.van-submit-bar__tip-text{vertical-align:middle}.van-submit-bar__bar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;height:50px;font-size:14px}.van-submit-bar__text{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-right:12px;color:#323233;font-weight:500;text-align:right}.van-submit-bar__text span{display:inline-block}.van-submit-bar__suffix-label{margin-left:5px}.van-submit-bar__price{color:#f44;font-size:18px}.van-submit-bar__price::first-letter{font-size:14px}.van-submit-bar__button{width:110px}.van-submit-bar--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-sku-container{max-height:-webkit-max-content;max-height:max-content;overflow-y:visible;font-size:14px;background:#fff}.van-sku-body{max-height:350px;overflow-y:scroll;-webkit-overflow-scrolling:touch}.van-sku-body::-webkit-scrollbar{display:none}.van-sku-header{margin-left:15px}.van-sku-header__img-wrap{position:relative;float:left;width:80px;height:80px;margin-top:-10px;background:#f8f8f8;border-radius:2px}.van-sku-header__img-wrap img{position:absolute;top:0;right:0;bottom:0;left:0;max-width:100%;max-height:100%;margin:auto}.van-sku-header__goods-info{box-sizing:border-box;min-height:82px;padding:10px 60px 10px 10px;overflow:hidden}.van-sku__goods-name{font-size:12px}.van-sku__price-num,.van-sku__price-symbol{vertical-align:middle}.van-sku__price-num{font-size:16px}.van-sku__goods-price{margin-top:10px;color:#f44;vertical-align:middle}.van-sku__close-icon{position:absolute;top:10px;right:15px;color:#969799;font-size:20px;text-align:center}.van-sku-group-container{margin-left:15px;padding:12px 0 2px}.van-sku-group-container--hide-soldout .van-sku-row__item--disabled{display:none}.van-sku-row{margin:0 15px 10px 0}.van-sku-row:last-child{margin-bottom:0}.van-sku-row__title{padding-bottom:10px}.van-sku-row__item{display:inline-block;box-sizing:border-box;min-width:52px;height:28px;margin:0 10px 10px 0;padding:5px 9px;color:#323233;font-size:12px;line-height:16px;text-align:center;border:1px solid #969799;border-radius:3px}.van-sku-row__item--active{color:#fff;background:#f44;border-color:#f44}.van-sku-row__item--disabled{color:#c8c9cc;background:#f2f3f5;border-color:#ebedf0}.van-sku-stepper-stock{margin-left:15px;padding:12px 0}.van-sku-stepper-container{height:30px;margin-right:20px}.van-sku__stepper{float:right}.van-sku__stepper-title{float:left;line-height:30px}.van-sku__quota,.van-sku__stock{display:inline-block;font-size:12px}.van-sku__stock{margin-right:10px;color:#969799}.van-sku__quota{color:#f44}.van-sku-messages{padding-bottom:10px;background:#f8f8f8}.van-sku-messages__image-cell .van-cell__title{max-width:90px}.van-sku-messages__image-cell .van-cell__value{text-align:left}.van-sku-img-uploader{display:inline-block}.van-sku-img-uploader__header{padding:0 10px;color:#323233;font-size:12px;line-height:24px;border:1px solid #ebedf0;border-radius:3px}.van-sku-img-uploader__header .van-icon{top:3px;margin-right:5px;font-size:14px}.van-sku-img-uploader__img{position:relative;float:left;width:60px;height:60px;margin:10px 10px 0 0;border:1px solid #ebedf0}.van-sku-img-uploader__img img{position:relative;top:50%;max-width:100%;max-height:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-sku-img-uploader__delete{position:absolute;top:-12px;right:-14px;z-index:1;padding:6px;color:#f44}.van-sku-img-uploader__delete::before{background-color:#fff;border-radius:14px}.van-sku-img-uploader__uploading{position:absolute;top:0;right:0;bottom:0;left:0;width:20px;height:20px;margin:auto}.van-sku-actions{display:-webkit-box;display:-webkit-flex;display:flex}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__("./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vant/es/action-sheet/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_popup__ = __webpack_require__("./node_modules/vant/es/mixins/popup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popup__ = __webpack_require__("./node_modules/vant/es/popup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loading__ = __webpack_require__("./node_modules/vant/es/loading/index.js");







 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* createNamespace */])('action-sheet'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function ActionSheet(h, props, slots, ctx) {
  var title = props.title,
      cancelText = props.cancelText;

  function onCancel() {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'input', false);
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'cancel');
  }

  function Header() {
    if (title) {
      return h("div", {
        "class": [bem('header'), 'van-hairline--bottom']
      }, [title, h(__WEBPACK_IMPORTED_MODULE_5__icon__["a" /* default */], {
        "attrs": {
          "name": "close"
        },
        "class": bem('close'),
        "on": {
          "click": onCancel
        }
      })]);
    }
  }

  function Content() {
    if (slots.default) {
      return h("div", {
        "class": bem('content')
      }, [slots.default()]);
    }
  }

  function Option(item, index) {
    var disabled = item.disabled || item.loading;

    function onClickOption(event) {
      event.stopPropagation();

      if (item.disabled || item.loading) {
        return;
      }

      if (item.callback) {
        item.callback(item);
      }

      Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'select', item, index);

      if (props.closeOnClickAction) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'input', false);
      }
    }

    function OptionContent() {
      if (item.loading) {
        return h(__WEBPACK_IMPORTED_MODULE_7__loading__["a" /* default */], {
          "attrs": {
            "size": "20px"
          }
        });
      }

      return [h("span", {
        "class": bem('name')
      }, [item.name]), item.subname && h("span", {
        "class": bem('subname')
      }, [item.subname])];
    }

    return h("div", {
      "class": [bem('item', {
        disabled: disabled
      }), item.className, 'van-hairline--top'],
      "on": {
        "click": onClickOption
      }
    }, [OptionContent()]);
  }

  function CancelText() {
    if (cancelText) {
      return h("div", {
        "class": bem('cancel'),
        "on": {
          "click": onCancel
        }
      }, [cancelText]);
    }
  }

  return h(__WEBPACK_IMPORTED_MODULE_6__popup__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    }),
    "attrs": {
      "position": "bottom",
      "round": props.round,
      "value": props.value,
      "overlay": props.overlay,
      "duration": props.duration,
      "lazyRender": props.lazyRender,
      "lockScroll": props.lockScroll,
      "getContainer": props.getContainer,
      "closeOnClickOverlay": props.closeOnClickOverlay
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["b" /* inherit */])(ctx, true)]), [Header(), props.actions && props.actions.map(Option), Content(), CancelText()]);
}

ActionSheet.props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_4__mixins_popup__["a" /* PopupMixin */].props, {
  title: String,
  round: Boolean,
  actions: Array,
  duration: Number,
  cancelText: String,
  getContainer: [String, Function],
  closeOnClickAction: Boolean,
  safeAreaInsetBottom: Boolean,
  overlay: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
});
/* harmony default export */ __webpack_exports__["a"] = (createComponent(ActionSheet));

/***/ }),

/***/ "./node_modules/vant/es/address-edit/Detail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_validate_system__ = __webpack_require__("./node_modules/vant/es/utils/validate/system.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cell__ = __webpack_require__("./node_modules/vant/es/cell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__field__ = __webpack_require__("./node_modules/vant/es/field/index.js");






var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('address-edit-detail'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var android = Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate_system__["a" /* isAndroid */])();
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    value: String,
    error: Boolean,
    focused: Boolean,
    detailRows: Number,
    searchResult: Array,
    detailMaxlength: Number,
    showSearchResult: Boolean
  },
  methods: {
    onSelect: function onSelect(express) {
      this.$emit('select-search', express);
      this.$emit('input', ((express.address || '') + " " + (express.name || '')).trim());
    },
    onFinish: function onFinish() {
      this.$refs.field.blur();
    },
    renderFinish: function renderFinish() {
      var h = this.$createElement;
      var show = this.value && this.focused && android;

      if (show) {
        return h("div", {
          "class": bem('finish'),
          "on": {
            "click": this.onFinish
          }
        }, [t('complete')]);
      }
    },
    renderSearchResult: function renderSearchResult() {
      var _this = this;

      var h = this.$createElement;
      var searchResult = this.searchResult;
      var show = this.focused && searchResult && this.showSearchResult;

      if (show) {
        return searchResult.map(function (express) {
          return h(__WEBPACK_IMPORTED_MODULE_3__cell__["a" /* default */], {
            "key": express.name + express.address,
            "attrs": {
              "title": express.name,
              "label": express.address,
              "icon": "location-o",
              "clickable": true
            },
            "on": {
              "click": function click() {
                _this.onSelect(express);
              }
            }
          });
        });
      }
    }
  },
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_3__cell__["a" /* default */], {
      "class": bem()
    }, [h(__WEBPACK_IMPORTED_MODULE_4__field__["a" /* default */], {
      "attrs": {
        "autosize": true,
        "rows": this.detailRows,
        "clearable": !android,
        "type": "textarea",
        "value": this.value,
        "error": this.error,
        "label": t('label'),
        "maxlength": this.detailMaxlength,
        "placeholder": t('placeholder')
      },
      "ref": "field",
      "scopedSlots": {
        icon: this.renderFinish
      },
      "on": Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, this.$listeners)
    }), this.renderSearchResult()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/address-edit/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_validate_mobile__ = __webpack_require__("./node_modules/vant/es/utils/validate/mobile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area__ = __webpack_require__("./node_modules/vant/es/area/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__field__ = __webpack_require__("./node_modules/vant/es/field/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popup__ = __webpack_require__("./node_modules/vant/es/popup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toast__ = __webpack_require__("./node_modules/vant/es/toast/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__button__ = __webpack_require__("./node_modules/vant/es/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog__ = __webpack_require__("./node_modules/vant/es/dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Detail__ = __webpack_require__("./node_modules/vant/es/address-edit/Detail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__switch_cell__ = __webpack_require__("./node_modules/vant/es/switch-cell/index.js");












var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('address-edit'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    searchResult: Array,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    showArea: {
      type: Boolean,
      default: true
    },
    showDetail: {
      type: Boolean,
      default: true
    },
    detailRows: {
      type: Number,
      default: 1
    },
    detailMaxlength: {
      type: Number,
      default: 200
    },
    addressInfo: {
      type: Object,
      default: function _default() {
        return Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, defaultData);
      }
    },
    telValidator: {
      type: Function,
      default: __WEBPACK_IMPORTED_MODULE_2__utils_validate_mobile__["a" /* isMobile */]
    }
  },
  data: function data() {
    return {
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postalCode: false,
        addressDetail: false
      }
    };
  },
  computed: {
    areaListLoaded: function areaListLoaded() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* isObj */])(this.areaList) && Object.keys(this.areaList).length;
    },
    areaText: function areaText() {
      var _this$data = this.data,
          country = _this$data.country,
          province = _this$data.province,
          city = _this$data.city,
          county = _this$data.county,
          areaCode = _this$data.areaCode;

      if (areaCode) {
        var arr = [country, province, city, county];

        if (province && province === city) {
          arr.splice(1, 1);
        }

        return arr.filter(function (text) {
          return text;
        }).join('/');
      }

      return '';
    }
  },
  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, defaultData, {}, val);
        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true
    },
    areaList: function areaList() {
      this.setAreaCode(this.data.areaCode);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      this.showAreaPopup = false;
      this.assignAreaValues();
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues() {
      var area = this.$refs.area;

      if (area) {
        var detail = area.getArea();
        detail.areaCode = detail.code;
        delete detail.code;

        Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(this.data, detail);
      }
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'areaCode', 'addressDetail'];

      if (this.showPostal) {
        items.push('postalCode');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessage(item);

        if (msg) {
          _this.errorInfo[item] = true;
          Object(__WEBPACK_IMPORTED_MODULE_6__toast__["a" /* default */])(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessage: function getErrorMessage(key) {
      var value = String(this.data[key] || '').trim();

      if (this.validator) {
        var message = this.validator(key, value);

        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');

        case 'areaCode':
          return value ? '' : t('areaEmpty');

        case 'addressDetail':
          return value ? '' : t('addressEmpty');

        case 'postalCode':
          return value && !/^\d{6}$/.test(value) ? t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_8__dialog__["a" /* default */].confirm({
        title: t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },
    // get values of area component
    getArea: function getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },
    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      this.data.areaCode = code || '';

      if (code) {
        this.$nextTick(this.assignAreaValues);
      }
    },
    setAddressDetail: function setAddressDetail(value) {
      this.data.addressDetail = value;
    },
    onDetailBlur: function onDetailBlur() {
      var _this3 = this;

      // await for click search event
      setTimeout(function () {
        _this3.detailFocused = false;
      });
    }
  },
  render: function render(h) {
    var _this4 = this;

    var data = this.data,
        errorInfo = this.errorInfo,
        searchResult = this.searchResult;

    var onFocus = function onFocus(name) {
      return function () {
        return _this4.onFocus(name);
      };
    }; // hide bottom field when use search && detail get focused


    var hideBottomFields = searchResult && searchResult.length && this.detailFocused;
    return h("div", {
      "class": bem()
    }, [h(__WEBPACK_IMPORTED_MODULE_4__field__["a" /* default */], {
      "attrs": {
        "clearable": true,
        "label": t('name'),
        "placeholder": t('namePlaceholder'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        }
      }
    }), h(__WEBPACK_IMPORTED_MODULE_4__field__["a" /* default */], {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "placeholder": t('telPlaceholder'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        }
      }
    }), h(__WEBPACK_IMPORTED_MODULE_4__field__["a" /* default */], {
      "directives": [{
        name: "show",
        value: this.showArea
      }],
      "attrs": {
        "readonly": true,
        "label": t('area'),
        "placeholder": t('areaPlaceholder'),
        "value": this.areaText
      },
      "on": {
        "click": function click() {
          _this4.showAreaPopup = true;
        }
      }
    }), h(__WEBPACK_IMPORTED_MODULE_9__Detail__["a" /* default */], {
      "directives": [{
        name: "show",
        value: this.showDetail
      }],
      "attrs": {
        "focused": this.detailFocused,
        "value": data.addressDetail,
        "error": errorInfo.addressDetail,
        "detailRows": this.detailRows,
        "detailMaxlength": this.detailMaxlength,
        "searchResult": this.searchResult,
        "showSearchResult": this.showSearchResult
      },
      "on": {
        "focus": onFocus('addressDetail'),
        "blur": this.onDetailBlur,
        "input": this.onChangeDetail,
        "select-search": function selectSearch(event) {
          _this4.$emit('select-search', event);
        }
      }
    }), this.showPostal && h(__WEBPACK_IMPORTED_MODULE_4__field__["a" /* default */], {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "type": "tel",
        "maxlength": "6",
        "label": t('postal'),
        "placeholder": t('postal'),
        "error": errorInfo.postalCode
      },
      "on": {
        "focus": onFocus('postalCode')
      },
      "model": {
        value: data.postalCode,
        callback: function callback($$v) {
          data.postalCode = $$v;
        }
      }
    }), this.slots(), this.showSetDefault && h(__WEBPACK_IMPORTED_MODULE_10__switch_cell__["a" /* default */], {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "title": t('defaultAddress')
      },
      "on": {
        "change": function change(event) {
          _this4.$emit('change-default', event);
        }
      },
      "model": {
        value: data.isDefault,
        callback: function callback($$v) {
          data.isDefault = $$v;
        }
      }
    }), h("div", {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "class": bem('buttons')
    }, [h(__WEBPACK_IMPORTED_MODULE_7__button__["a" /* default */], {
      "attrs": {
        "block": true,
        "loading": this.isSaving,
        "type": "danger",
        "text": this.saveButtonText || t('save')
      },
      "on": {
        "click": this.onSave
      }
    }), this.showDelete && h(__WEBPACK_IMPORTED_MODULE_7__button__["a" /* default */], {
      "attrs": {
        "block": true,
        "loading": this.isDeleting,
        "text": this.deleteButtonText || t('delete')
      },
      "on": {
        "click": this.onDelete
      }
    })]), h(__WEBPACK_IMPORTED_MODULE_5__popup__["a" /* default */], {
      "attrs": {
        "position": "bottom",
        "lazyRender": false,
        "getContainer": "body"
      },
      "model": {
        value: _this4.showAreaPopup,
        callback: function callback($$v) {
          _this4.showAreaPopup = $$v;
        }
      }
    }, [h(__WEBPACK_IMPORTED_MODULE_3__area__["a" /* default */], {
      "ref": "area",
      "attrs": {
        "loading": !this.areaListLoaded,
        "value": data.areaCode,
        "areaList": this.areaList
      },
      "on": {
        "confirm": this.onAreaConfirm,
        "cancel": function cancel() {
          _this4.showAreaPopup = false;
        }
      }
    })])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/address-list/Item.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_color__ = __webpack_require__("./node_modules/vant/es/utils/color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cell__ = __webpack_require__("./node_modules/vant/es/cell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__radio__ = __webpack_require__("./node_modules/vant/es/radio/index.js");






 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('address-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function AddressItem(h, props, slots, ctx) {
  var disabled = props.disabled,
      switchable = props.switchable;

  function onSelect() {
    if (switchable) {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'select');
    }
  }

  var renderRightIcon = function renderRightIcon() {
    return h(__WEBPACK_IMPORTED_MODULE_4__icon__["a" /* default */], {
      "attrs": {
        "name": "edit"
      },
      "class": bem('edit'),
      "on": {
        "click": function click(event) {
          event.stopPropagation();
          Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'edit');
        }
      }
    });
  };

  var renderContent = function renderContent() {
    var data = props.data;
    var Info = [h("div", {
      "class": bem('name')
    }, [data.name + "\uFF0C" + data.tel]), h("div", {
      "class": bem('address')
    }, [data.address])];
    return switchable && !disabled ? h(__WEBPACK_IMPORTED_MODULE_6__radio__["a" /* default */], {
      "attrs": {
        "name": data.id,
        "iconSize": 16,
        "checkedColor": __WEBPACK_IMPORTED_MODULE_2__utils_color__["e" /* RED */]
      }
    }, [Info]) : Info;
  };

  return h(__WEBPACK_IMPORTED_MODULE_5__cell__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem({
      disabled: disabled
    }),
    "attrs": {
      "valueClass": bem('value'),
      "clickable": switchable && !disabled
    },
    "scopedSlots": {
      default: renderContent,
      'right-icon': renderRightIcon
    },
    "on": {
      "click": onSelect
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["b" /* inherit */])(ctx)]));
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(AddressItem));

/***/ }),

/***/ "./node_modules/vant/es/address-list/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button__ = __webpack_require__("./node_modules/vant/es/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__radio_group__ = __webpack_require__("./node_modules/vant/es/radio-group/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Item__ = __webpack_require__("./node_modules/vant/es/address-list/Item.js");





 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('address-list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function AddressList(h, props, slots, ctx) {
  function renderList(list, disabled) {
    if (!list) {
      return;
    }

    return list.map(function (item, index) {
      return h(__WEBPACK_IMPORTED_MODULE_5__Item__["a" /* default */], {
        "attrs": {
          "data": item,
          "disabled": disabled,
          "switchable": props.switchable
        },
        "key": item.id,
        "on": {
          "select": function select() {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, disabled ? 'select-disabled' : 'select', item, index);
          },
          "edit": function edit() {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
          }
        }
      });
    });
  }

  var List = renderList(props.list);
  var DisabledList = renderList(props.disabledList, true);
  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem()
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx)]), [slots.top && slots.top(), h(__WEBPACK_IMPORTED_MODULE_4__radio_group__["a" /* default */], {
    "attrs": {
      "value": props.value
    },
    "on": {
      "input": function input(event) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, 'input', event);
      }
    }
  }, [List]), props.disabledText && h("div", {
    "class": bem('disabled-text')
  }, [props.disabledText]), DisabledList, slots.default && slots.default(), h(__WEBPACK_IMPORTED_MODULE_3__button__["a" /* default */], {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.addButtonText || t('add')
    },
    "class": bem('add'),
    "on": {
      "click": function click() {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, 'add');
      }
    }
  })]);
}

AddressList.props = {
  list: Array,
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  value: [Number, String],
  switchable: {
    type: Boolean,
    default: true
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(AddressList));

/***/ }),

/***/ "./node_modules/vant/es/area/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picker__ = __webpack_require__("./node_modules/vant/es/picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__picker_shared__ = __webpack_require__("./node_modules/vant/es/picker/shared.js");





var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('area'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_3__picker_shared__["a" /* pickerProps */], {
    value: String,
    areaList: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    columnsNum: {
      type: [Number, String],
      default: 3
    }
  }),
  data: function data() {
    return {
      code: this.value,
      columns: [{
        values: []
      }, {
        values: []
      }, {
        values: []
      }]
    };
  },
  computed: {
    province: function province() {
      return this.areaList.province_list || {};
    },
    city: function city() {
      return this.areaList.city_list || {};
    },
    county: function county() {
      return this.areaList.county_list || {};
    },
    displayColumns: function displayColumns() {
      return this.columns.slice(0, +this.columnsNum);
    }
  },
  watch: {
    value: function value() {
      this.code = this.value;
      this.setValues();
    },
    areaList: {
      deep: true,
      handler: function handler() {
        this.setValues();
      }
    },
    columnsNum: function columnsNum() {
      var _this = this;

      this.$nextTick(function () {
        _this.setValues();
      });
    }
  },
  mounted: function mounted() {
    this.setValues();
  },
  methods: {
    // get list by code
    getList: function getList(type, code) {
      var result = [];

      if (type !== 'province' && !code) {
        return result;
      }

      var list = this[type];
      result = Object.keys(list).map(function (listCode) {
        return {
          code: listCode,
          name: list[listCode]
        };
      });

      if (code) {
        // oversea code
        if (code[0] === '9' && type === 'city') {
          code = '9';
        }

        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      return result;
    },
    // get index by code
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = this.getList(type, code.slice(0, compareNum - 2)); // oversea code

      if (code[0] === '9' && type === 'province') {
        compareNum = 1;
      }

      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    onChange: function onChange(picker, values, index) {
      this.code = values[index].code;
      this.setValues();
      this.$emit('change', picker, picker.getValues(), index);
    },
    setValues: function setValues() {
      var code = this.code || Object.keys(this.county)[0] || '';
      var picker = this.$refs.picker;
      var province = this.getList('province');
      var city = this.getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00') {
        code = city[0].code;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      picker.setIndexes([this.getIndex('province', code), this.getIndex('city', code), this.getIndex('county', code)]);
    },
    getValues: function getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues().filter(function (value) {
        return !!value;
      }) : [];
    },
    getArea: function getArea() {
      var values = this.getValues();
      var area = {
        code: '',
        country: '',
        province: '',
        city: '',
        county: ''
      };

      if (!values.length) {
        return area;
      }

      var names = values.map(function (item) {
        return item.name;
      });
      area.code = values[values.length - 1].code;

      if (area.code[0] === '9') {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    },
    reset: function reset(code) {
      this.code = code || '';
      this.setValues();
    }
  },
  render: function render(h) {
    var on = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, this.$listeners, {
      change: this.onChange
    });

    return h(__WEBPACK_IMPORTED_MODULE_2__picker__["a" /* default */], {
      "ref": "picker",
      "class": bem(),
      "attrs": {
        "showToolbar": true,
        "valueKey": "name",
        "title": this.title,
        "loading": this.loading,
        "columns": this.displayColumns,
        "itemHeight": this.itemHeight,
        "visibleItemCount": this.visibleItemCount,
        "cancelButtonText": this.cancelButtonText,
        "confirmButtonText": this.confirmButtonText
      },
      "on": Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, on)
    });
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/button/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_router__ = __webpack_require__("./node_modules/vant/es/utils/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loading__ = __webpack_require__("./node_modules/vant/es/loading/index.js");






 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* createNamespace */])('button'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Button(h, props, slots, ctx) {
  var tag = props.tag,
      icon = props.icon,
      type = props.type,
      disabled = props.disabled,
      loading = props.loading,
      hairline = props.hairline,
      loadingText = props.loadingText;

  function onClick(event) {
    if (!loading && !disabled) {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'click', event);
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_router__["a" /* functionalRoute */])(ctx);
    }
  }

  function onTouchstart(event) {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'touchstart', event);
  }

  var classes = [bem([type, props.size, {
    disabled: disabled,
    hairline: hairline,
    block: props.block,
    plain: props.plain,
    round: props.round,
    square: props.square
  }]), {
    'van-hairline--surround': hairline
  }];

  function Content() {
    var content = [];

    if (loading) {
      content.push(h(__WEBPACK_IMPORTED_MODULE_6__loading__["a" /* default */], {
        "class": bem('loading'),
        "attrs": {
          "size": props.loadingSize,
          "type": props.loadingType,
          "color": type === 'default' ? undefined : ''
        }
      }));
    } else if (icon) {
      content.push(h(__WEBPACK_IMPORTED_MODULE_5__icon__["a" /* default */], {
        "attrs": {
          "name": icon
        },
        "class": bem('icon')
      }));
    }

    var text;

    if (loading) {
      text = loadingText;
    } else {
      text = slots.default ? slots.default() : props.text;
    }

    if (text) {
      content.push(h("span", {
        "class": bem('text')
      }, [text]));
    }

    return content;
  }

  return h(tag, __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": classes,
    "attrs": {
      "type": props.nativeType,
      "disabled": disabled
    },
    "on": {
      "click": onClick,
      "touchstart": onTouchstart
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["b" /* inherit */])(ctx)]), [Content()]);
}

Button.props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_4__utils_router__["c" /* routeProps */], {
  text: String,
  icon: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  },
  loadingSize: {
    type: String,
    default: '20px'
  }
});
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Button));

/***/ }),

/***/ "./node_modules/vant/es/card/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag__ = __webpack_require__("./node_modules/vant/es/tag/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image__ = __webpack_require__("./node_modules/vant/es/image/index.js");




 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('card'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Card(h, props, slots, ctx) {
  var thumb = props.thumb;
  var showNum = slots.num || Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* isDef */])(props.num);
  var showPrice = slots.price || Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* isDef */])(props.price);
  var showOriginPrice = slots['origin-price'] || Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* isDef */])(props.originPrice);
  var showBottom = showNum || showPrice || showOriginPrice;

  function onThumbClick(event) {
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, 'click-thumb', event);
  }

  function ThumbTag() {
    if (slots.tag || props.tag) {
      return h("div", {
        "class": bem('tag')
      }, [slots.tag ? slots.tag() : h(__WEBPACK_IMPORTED_MODULE_3__tag__["a" /* default */], {
        "attrs": {
          "mark": true,
          "type": "danger"
        }
      }, [props.tag])]);
    }
  }

  function Thumb() {
    if (slots.thumb || thumb) {
      return h("a", {
        "attrs": {
          "href": props.thumbLink
        },
        "class": bem('thumb'),
        "on": {
          "click": onThumbClick
        }
      }, [slots.thumb ? slots.thumb() : h(__WEBPACK_IMPORTED_MODULE_4__image__["a" /* default */], {
        "attrs": {
          "src": thumb,
          "width": "100%",
          "height": "100%",
          "fit": "contain",
          "lazy-load": props.lazyLoad
        }
      }), ThumbTag()]);
    }
  }

  function Title() {
    if (slots.title) {
      return slots.title();
    }

    if (props.title) {
      return h("div", {
        "class": bem('title')
      }, [props.title]);
    }
  }

  function Desc() {
    if (slots.desc) {
      return slots.desc();
    }

    if (props.desc) {
      return h("div", {
        "class": [bem('desc'), 'van-ellipsis']
      }, [props.desc]);
    }
  }

  function Price() {
    if (showPrice) {
      return h("div", {
        "class": bem('price')
      }, [slots.price ? slots.price() : props.currency + " " + props.price]);
    }
  }

  function OriginPrice() {
    if (showOriginPrice) {
      var slot = slots['origin-price'];
      return h("div", {
        "class": bem('origin-price')
      }, [slot ? slot() : props.currency + " " + props.originPrice]);
    }
  }

  function Num() {
    if (showNum) {
      return h("div", {
        "class": bem('num')
      }, [slots.num ? slots.num() : "x " + props.num]);
    }
  }

  function Footer() {
    if (slots.footer) {
      return h("div", {
        "class": bem('footer')
      }, [slots.footer()]);
    }
  }

  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem()
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx, true)]), [h("div", {
    "class": bem('header')
  }, [Thumb(), h("div", {
    "class": bem('content', {
      centered: props.centered
    })
  }, [Title(), Desc(), slots.tags && slots.tags(), showBottom && h("div", {
    "class": "van-card__bottom"
  }, [Price(), OriginPrice(), Num(), slots.bottom && slots.bottom()])])]), Footer()]);
}

Card.props = {
  tag: String,
  desc: String,
  thumb: String,
  title: String,
  centered: Boolean,
  lazyLoad: Boolean,
  thumbLink: String,
  num: [Number, String],
  price: [Number, String],
  originPrice: [Number, String],
  currency: {
    type: String,
    default: '¥'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Card));

/***/ }),

/***/ "./node_modules/vant/es/cell-group/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");


 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('cell-group'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function CellGroup(h, props, slots, ctx) {
  var Group = h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": [bem(), {
      'van-hairline--top-bottom': props.border
    }]
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx, true)]), [slots.default && slots.default()]);

  if (props.title) {
    return h("div", [h("div", {
      "class": bem('title')
    }, [props.title]), Group]);
  }

  return Group;
}

CellGroup.props = {
  title: String,
  border: {
    type: Boolean,
    default: true
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(CellGroup));

/***/ }),

/***/ "./node_modules/vant/es/cell/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./node_modules/vant/es/cell/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_router__ = __webpack_require__("./node_modules/vant/es/utils/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");






 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* createNamespace */])('cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Cell(h, props, slots, ctx) {
  var icon = props.icon,
      size = props.size,
      title = props.title,
      label = props.label,
      value = props.value,
      isLink = props.isLink,
      arrowDirection = props.arrowDirection;
  var showTitle = slots.title || Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* isDef */])(title);
  var showValue = slots.default || Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* isDef */])(value);
  var showLabel = slots.label || Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* isDef */])(label);
  var Label = showLabel && h("div", {
    "class": [bem('label'), props.labelClass]
  }, [slots.label ? slots.label() : label]);
  var Title = showTitle && h("div", {
    "class": [bem('title'), props.titleClass],
    "style": props.titleStyle
  }, [slots.title ? slots.title() : h("span", [title]), Label]);
  var Value = showValue && h("div", {
    "class": [bem('value', {
      alone: !slots.title && !title
    }), props.valueClass]
  }, [slots.default ? slots.default() : h("span", [value])]);
  var LeftIcon = slots.icon ? slots.icon() : icon && h(__WEBPACK_IMPORTED_MODULE_6__icon__["a" /* default */], {
    "class": bem('left-icon'),
    "attrs": {
      "name": icon
    }
  });
  var rightIconSlot = slots['right-icon'];
  var RightIcon = rightIconSlot ? rightIconSlot() : isLink && h(__WEBPACK_IMPORTED_MODULE_6__icon__["a" /* default */], {
    "class": bem('right-icon'),
    "attrs": {
      "name": arrowDirection ? "arrow-" + arrowDirection : 'arrow'
    }
  });

  function onClick(event) {
    Object(__WEBPACK_IMPORTED_MODULE_4__utils_functional__["a" /* emit */])(ctx, 'click', event);
    Object(__WEBPACK_IMPORTED_MODULE_5__utils_router__["a" /* functionalRoute */])(ctx);
  }

  var classes = {
    center: props.center,
    required: props.required,
    borderless: !props.border,
    clickable: isLink || props.clickable
  };

  if (size) {
    classes[size] = size;
  }

  return h("div", __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem(classes),
    "on": {
      "click": onClick
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_4__utils_functional__["b" /* inherit */])(ctx)]), [LeftIcon, Title, Value, RightIcon, slots.extra && slots.extra()]);
}

Cell.props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* cellProps */], {}, __WEBPACK_IMPORTED_MODULE_5__utils_router__["c" /* routeProps */]);
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Cell));

/***/ }),

/***/ "./node_modules/vant/es/cell/shared.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cellProps; });
var cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  clickable: Boolean,
  titleStyle: null,
  titleClass: null,
  valueClass: null,
  labelClass: null,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
  arrowDirection: String,
  border: {
    type: Boolean,
    default: true
  }
};

/***/ }),

/***/ "./node_modules/vant/es/checkbox-group/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('checkbox-group'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_relation__["b" /* ParentMixin */])('vanCheckbox')],
  props: {
    max: Number,
    disabled: Boolean,
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem()
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/checkbox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_checkbox__ = __webpack_require__("./node_modules/vant/es/mixins/checkbox.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('checkbox'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_checkbox__["a" /* CheckboxMixin */])({
    bem: bem,
    role: 'checkbox',
    parent: 'vanCheckbox'
  })],
  computed: {
    checked: {
      get: function get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },
      set: function set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  methods: {
    toggle: function toggle() {
      var _this = this;

      var checked = !this.checked; // When toggle method is called multiple times at the same time,
      // only the last call is valid.
      // This is a hack for usage inside Cell.

      clearTimeout(this.toggleTask);
      this.toggleTask = setTimeout(function () {
        _this.checked = checked;
      });
    },
    onClickIcon: function onClickIcon() {
      if (!this.isDisabled) {
        this.toggle();
      }
    },
    onClickLabel: function onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.toggle();
      }
    },
    setParentValue: function setParentValue(val) {
      var parent = this.parent;
      var value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }
        /* istanbul ignore else */


        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        var index = value.indexOf(this.name);
        /* istanbul ignore else */

        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/circle/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom_raf__ = __webpack_require__("./node_modules/vant/es/utils/dom/raf.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_color__ = __webpack_require__("./node_modules/vant/es/utils/color.js");




var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('circle'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var PERIMETER = 3140;
var PATH = 'M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0';

function format(rate) {
  return Math.min(Math.max(rate, 0), 100);
}

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    text: String,
    value: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: '100px'
    },
    fill: {
      type: String,
      default: 'none'
    },
    rate: {
      type: Number,
      default: 100
    },
    layerColor: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_2__utils_color__["f" /* WHITE */]
    },
    color: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_2__utils_color__["a" /* BLUE */]
    },
    strokeWidth: {
      type: Number,
      default: 40
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style: function style() {
      return {
        width: this.size,
        height: this.size
      };
    },
    layerStyle: function layerStyle() {
      var offset = PERIMETER * (100 - this.value) / 100;
      offset = this.clockwise ? offset : PERIMETER * 2 - offset;
      return {
        stroke: "" + this.color,
        strokeDashoffset: offset + "px",
        strokeWidth: this.strokeWidth + 1 + "px"
      };
    },
    hoverStyle: function hoverStyle() {
      return {
        fill: "" + this.fill,
        stroke: "" + this.layerColor,
        strokeWidth: this.strokeWidth + "px"
      };
    }
  },
  watch: {
    rate: {
      handler: function handler() {
        this.startTime = Date.now();
        this.startRate = this.value;
        this.endRate = format(this.rate);
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);

        if (this.speed) {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom_raf__["a" /* cancelRaf */])(this.rafId);
          this.rafId = Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom_raf__["c" /* raf */])(this.animate);
        } else {
          this.$emit('input', this.endRate);
        }
      },
      immediate: true
    }
  },
  methods: {
    animate: function animate() {
      var now = Date.now();
      var progress = Math.min((now - this.startTime) / this.duration, 1);
      var rate = progress * (this.endRate - this.startRate) + this.startRate;
      this.$emit('input', format(parseFloat(rate.toFixed(1))));

      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom_raf__["c" /* raf */])(this.animate);
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem(),
      "style": this.style
    }, [h("svg", {
      "attrs": {
        "viewBox": "0 0 1060 1060"
      }
    }, [h("path", {
      "class": bem('hover'),
      "style": this.hoverStyle,
      "attrs": {
        "d": PATH
      }
    }), h("path", {
      "class": bem('layer'),
      "style": this.layerStyle,
      "attrs": {
        "d": PATH
      }
    })]), this.slots() || this.text && h("div", {
      "class": bem('text')
    }, [this.text])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/col/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");


var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('col'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? {
        paddingLeft: padding,
        paddingRight: padding
      } : {};
    }
  },
  render: function render(h) {
    var _bem;

    var span = this.span,
        offset = this.offset;
    return h(this.tag, {
      "class": bem((_bem = {}, _bem[span] = span, _bem["offset-" + offset] = offset, _bem)),
      "style": this.style
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/collapse-item/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom_raf__ = __webpack_require__("./node_modules/vant/es/utils/dom/raf.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cell__ = __webpack_require__("./node_modules/vant/es/cell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cell_shared__ = __webpack_require__("./node_modules/vant/es/cell/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");







var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('collapse-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var CELL_SLOTS = ['title', 'icon', 'right-icon'];
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_5__mixins_relation__["a" /* ChildrenMixin */])('vanCollapse')],
  props: Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_4__cell_shared__["a" /* cellProps */], {
    name: [Number, String],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true
    }
  }),
  data: function data() {
    return {
      show: null,
      inited: null
    };
  },
  computed: {
    currentName: function currentName() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* isDef */])(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      if (!this.parent) {
        return null;
      }

      var value = this.parent.value;
      return this.parent.accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },
  created: function created() {
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this2 = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
        this.inited = true;
      } // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`


      var nextTick = _expanded ? this.$nextTick : __WEBPACK_IMPORTED_MODULE_2__utils_dom_raf__["c" /* raf */];
      nextTick(function () {
        var _this2$$refs = _this2.$refs,
            content = _this2$$refs.content,
            wrapper = _this2$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var offsetHeight = content.offsetHeight;

        if (offsetHeight) {
          var contentHeight = offsetHeight + "px";
          wrapper.style.height = _expanded ? 0 : contentHeight; // use double raf to ensure animation can start in mobile safari

          Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom_raf__["b" /* doubleRaf */])(function () {
            wrapper.style.height = _expanded ? contentHeight : 0;
          });
        } else {
          _this2.onTransitionEnd();
        }
      });
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      var parent = this.parent;
      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      this.parent.switch(name, !this.expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = '';
      }
    }
  },
  render: function render(h) {
    var _this3 = this;

    var disabled = this.disabled,
        expanded = this.expanded;
    var titleSlots = CELL_SLOTS.reduce(function (slots, name) {
      if (_this3.slots(name)) {
        slots[name] = function () {
          return _this3.slots(name);
        };
      }

      return slots;
    }, {});

    if (this.slots('value')) {
      titleSlots.default = function () {
        return _this3.slots('value');
      };
    }

    var Title = h(__WEBPACK_IMPORTED_MODULE_3__cell__["a" /* default */], {
      "attrs": {
        "role": "button",
        "tabindex": disabled ? -1 : 0,
        "aria-expanded": String(expanded)
      },
      "class": bem('title', {
        disabled: disabled,
        expanded: expanded
      }),
      "on": {
        "click": this.onClick
      },
      "scopedSlots": titleSlots,
      "props": Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, this.$props)
    });
    var Content = this.inited && h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "ref": "wrapper",
      "class": bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [h("div", {
      "ref": "content",
      "class": bem('content')
    }, [this.slots()])]);
    return h("div", {
      "class": [bem(), {
        'van-hairline--top': this.index
      }]
    }, [Title, Content]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/collapse/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('collapse'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_relation__["b" /* ParentMixin */])('vanCollapse')],
  props: {
    accordion: Boolean,
    value: [String, Number, Array],
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    switch: function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }

      this.$emit('change', name);
      this.$emit('input', name);
    }
  },
  render: function render(h) {
    return h("div", {
      "class": [bem(), {
        'van-hairline--top-bottom': this.border
      }]
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/contact-card/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cell__ = __webpack_require__("./node_modules/vant/es/cell/index.js");



 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('contact-card'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function ContactCard(h, props, slots, ctx) {
  var type = props.type,
      editable = props.editable;

  function onClick(event) {
    if (editable) {
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, 'click', event);
    }
  }

  return h(__WEBPACK_IMPORTED_MODULE_3__cell__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "attrs": {
      "center": true,
      "border": false,
      "isLink": editable,
      "valueClass": bem('value'),
      "icon": type === 'edit' ? 'contact' : 'add-square'
    },
    "class": bem([type]),
    "on": {
      "click": onClick
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx)]), [type === 'add' ? props.addText || t('addText') : [h("div", [t('name') + "\uFF1A" + props.name]), h("div", [t('tel') + "\uFF1A" + props.tel])]]);
}

ContactCard.props = {
  tel: String,
  name: String,
  addText: String,
  editable: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'add'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(ContactCard));

/***/ }),

/***/ "./node_modules/vant/es/contact-edit/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button__ = __webpack_require__("./node_modules/vant/es/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field__ = __webpack_require__("./node_modules/vant/es/field/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast__ = __webpack_require__("./node_modules/vant/es/toast/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialog__ = __webpack_require__("./node_modules/vant/es/dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_validate_mobile__ = __webpack_require__("./node_modules/vant/es/utils/validate/mobile.js");








var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('contact-edit'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var defaultContact = {
  tel: '',
  name: ''
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      default: function _default() {
        return Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, defaultContact);
      }
    },
    telValidator: {
      type: Function,
      default: __WEBPACK_IMPORTED_MODULE_6__utils_validate_mobile__["a" /* isMobile */]
    }
  },
  data: function data() {
    return {
      data: Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, defaultContact, {}, this.contactInfo),
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },
  watch: {
    contactInfo: function contactInfo(val) {
      this.data = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, defaultContact, {}, val);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key].trim();

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);

        if (msg) {
          _this.errorInfo[item] = true;
          Object(__WEBPACK_IMPORTED_MODULE_4__toast__["a" /* default */])(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_5__dialog__["a" /* default */].confirm({
        message: t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      });
    }
  },
  render: function render(h) {
    var _this3 = this;

    var data = this.data,
        errorInfo = this.errorInfo;

    var onFocus = function onFocus(name) {
      return function () {
        return _this3.onFocus(name);
      };
    };

    return h("div", {
      "class": bem()
    }, [h(__WEBPACK_IMPORTED_MODULE_3__field__["a" /* default */], {
      "attrs": {
        "clearable": true,
        "maxlength": "30",
        "label": t('name'),
        "placeholder": t('nameEmpty'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        }
      }
    }), h(__WEBPACK_IMPORTED_MODULE_3__field__["a" /* default */], {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "placeholder": t('telEmpty'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        }
      }
    }), h("div", {
      "class": bem('buttons')
    }, [h(__WEBPACK_IMPORTED_MODULE_2__button__["a" /* default */], {
      "attrs": {
        "block": true,
        "type": "danger",
        "text": t('save'),
        "loading": this.isSaving
      },
      "on": {
        "click": this.onSave
      }
    }), this.isEdit && h(__WEBPACK_IMPORTED_MODULE_2__button__["a" /* default */], {
      "attrs": {
        "block": true,
        "text": t('delete'),
        "loading": this.isDeleting
      },
      "on": {
        "click": this.onDelete
      }
    })])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/contact-list/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_color__ = __webpack_require__("./node_modules/vant/es/utils/color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cell__ = __webpack_require__("./node_modules/vant/es/cell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button__ = __webpack_require__("./node_modules/vant/es/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__radio__ = __webpack_require__("./node_modules/vant/es/radio/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__radio_group__ = __webpack_require__("./node_modules/vant/es/radio-group/index.js");








 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('contact-list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function ContactList(h, props, slots, ctx) {
  var List = props.list && props.list.map(function (item, index) {
    function onClick() {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'input', item.id);
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'select', item, index);
    }

    function Content() {
      return h(__WEBPACK_IMPORTED_MODULE_7__radio__["a" /* default */], {
        "attrs": {
          "name": item.id,
          "iconSize": 16,
          "checkedColor": __WEBPACK_IMPORTED_MODULE_2__utils_color__["e" /* RED */]
        },
        "on": {
          "click": onClick
        }
      }, [h("div", {
        "class": bem('name')
      }, [item.name + "\uFF0C" + item.tel])]);
    }

    function RightIcon() {
      return h(__WEBPACK_IMPORTED_MODULE_4__icon__["a" /* default */], {
        "attrs": {
          "name": "edit"
        },
        "class": bem('edit'),
        "on": {
          "click": function click(event) {
            event.stopPropagation();
            Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'edit', item, index);
          }
        }
      });
    }

    return h(__WEBPACK_IMPORTED_MODULE_5__cell__["a" /* default */], {
      "key": item.id,
      "attrs": {
        "isLink": true,
        "valueClass": bem('item-value')
      },
      "class": bem('item'),
      "scopedSlots": {
        default: Content,
        'right-icon': RightIcon
      },
      "on": {
        "click": onClick
      }
    });
  });
  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem()
  }, Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["b" /* inherit */])(ctx)]), [h(__WEBPACK_IMPORTED_MODULE_8__radio_group__["a" /* default */], {
    "attrs": {
      "value": props.value
    },
    "class": bem('group')
  }, [List]), h(__WEBPACK_IMPORTED_MODULE_6__button__["a" /* default */], {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.addText || t('addText')
    },
    "class": bem('add'),
    "on": {
      "click": function click() {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'add');
      }
    }
  })]);
}

ContactList.props = {
  value: null,
  list: Array,
  addText: String
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(ContactList));

/***/ }),

/***/ "./node_modules/vant/es/count-down/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom_raf__ = __webpack_require__("./node_modules/vant/es/utils/dom/raf.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./node_modules/vant/es/count-down/utils.js");




var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('count-down'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    millisecond: Boolean,
    time: {
      type: Number,
      default: 0
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      remain: 0
    };
  },
  computed: {
    timeData: function timeData() {
      return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* parseTimeData */])(this.remain);
    },
    formattedTime: function formattedTime() {
      return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* parseFormat */])(this.format, this.timeData);
    }
  },
  watch: {
    time: {
      immediate: true,
      handler: function handler() {
        this.reset();
      }
    }
  },
  methods: {
    start: function start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.endTime = Date.now() + this.remain;
      this.tick();
    },
    pause: function pause() {
      this.counting = false;
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom_raf__["a" /* cancelRaf */])(this.rafId);
    },
    reset: function reset() {
      this.pause();
      this.remain = this.time;

      if (this.autoStart) {
        this.start();
      }
    },
    tick: function tick() {
      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },
    microTick: function microTick() {
      var _this = this;

      this.rafId = Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom_raf__["c" /* raf */])(function () {
        _this.setRemain(_this.getRemain());

        if (_this.remain !== 0) {
          _this.microTick();
        }
      });
    },
    macroTick: function macroTick() {
      var _this2 = this;

      this.rafId = Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom_raf__["c" /* raf */])(function () {
        var remain = _this2.getRemain();

        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isSameSecond */])(remain, _this2.remain) || remain === 0) {
          _this2.setRemain(remain);
        }

        if (_this2.remain !== 0) {
          _this2.macroTick();
        }
      });
    },
    getRemain: function getRemain() {
      return Math.max(this.endTime - Date.now(), 0);
    },
    setRemain: function setRemain(remain) {
      this.remain = remain;

      if (remain === 0) {
        this.pause();
        this.$emit('finish');
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem()
    }, [this.slots('default', this.timeData) || this.formattedTime]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/count-down/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = parseTimeData;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseFormat;
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameSecond;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_format_string__ = __webpack_require__("./node_modules/vant/es/utils/format/string.js");

var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTimeData(time) {
  var days = Math.floor(time / DAY);
  var hours = Math.floor(time % DAY / HOUR);
  var minutes = Math.floor(time % HOUR / MINUTE);
  var seconds = Math.floor(time % MINUTE / SECOND);
  var milliseconds = Math.floor(time % SECOND);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds
  };
}
function parseFormat(format, timeData) {
  var days = timeData.days;
  var hours = timeData.hours,
      minutes = timeData.minutes,
      seconds = timeData.seconds,
      milliseconds = timeData.milliseconds;

  if (format.indexOf('DD') === -1) {
    hours += days * 24;
  } else {
    format = format.replace('DD', Object(__WEBPACK_IMPORTED_MODULE_0__utils_format_string__["b" /* padZero */])(days));
  }

  if (format.indexOf('HH') === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace('HH', Object(__WEBPACK_IMPORTED_MODULE_0__utils_format_string__["b" /* padZero */])(hours));
  }

  if (format.indexOf('mm') === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace('mm', Object(__WEBPACK_IMPORTED_MODULE_0__utils_format_string__["b" /* padZero */])(minutes));
  }

  if (format.indexOf('ss') === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace('ss', Object(__WEBPACK_IMPORTED_MODULE_0__utils_format_string__["b" /* padZero */])(seconds));
  }

  return format.replace('SSS', Object(__WEBPACK_IMPORTED_MODULE_0__utils_format_string__["b" /* padZero */])(milliseconds, 3));
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}

/***/ }),

/***/ "./node_modules/vant/es/coupon-cell/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cell__ = __webpack_require__("./node_modules/vant/es/cell/index.js");



 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('coupon-cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function formatValue(props) {
  var coupons = props.coupons,
      chosenCoupon = props.chosenCoupon,
      currency = props.currency;
  var coupon = coupons[chosenCoupon];

  if (coupon) {
    var value = coupon.denominations || coupon.value;
    return "-" + currency + (value / 100).toFixed(2);
  }

  return coupons.length === 0 ? t('tips') : t('count', coupons.length);
}

function CouponCell(h, props, slots, ctx) {
  var valueClass = props.coupons[props.chosenCoupon] ? 'van-coupon-cell--selected' : '';
  var value = formatValue(props);
  return h(__WEBPACK_IMPORTED_MODULE_3__cell__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem(),
    "attrs": {
      "value": value,
      "title": props.title || t('title'),
      "border": props.border,
      "isLink": props.editable,
      "valueClass": valueClass
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx, true)]));
}

CouponCell.model = {
  prop: 'chosenCoupon'
};
CouponCell.props = {
  title: String,
  coupons: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  currency: {
    type: String,
    default: '¥'
  },
  border: {
    type: Boolean,
    default: true
  },
  editable: {
    type: Boolean,
    default: true
  },
  chosenCoupon: {
    type: Number,
    default: -1
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(CouponCell));

/***/ }),

/***/ "./node_modules/vant/es/coupon-list/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab__ = __webpack_require__("./node_modules/vant/es/tab/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__("./node_modules/vant/es/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field__ = __webpack_require__("./node_modules/vant/es/field/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button__ = __webpack_require__("./node_modules/vant/es/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coupon__ = __webpack_require__("./node_modules/vant/es/coupon/index.js");







var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('coupon-list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  model: {
    prop: 'code'
  },
  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    enabledTitle: String,
    disabledTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabledCoupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    currency: {
      type: String,
      default: '¥'
    }
  },
  data: function data() {
    return {
      tab: 0,
      winHeight: window.innerHeight,
      currentCode: this.code || ''
    };
  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.exchangeButtonLoading && (this.exchangeButtonDisabled || !this.currentCode || this.currentCode.length < this.exchangeMinLength);
    },
    listStyle: function listStyle() {
      return {
        height: this.winHeight - (this.showExchangeBar ? 140 : 94) + 'px'
      };
    }
  },
  watch: {
    code: function code(_code) {
      this.currentCode = _code;
    },
    currentCode: function currentCode(code) {
      this.$emit('input', code);
    },
    displayedCouponIndex: function displayedCouponIndex(val) {
      this.scrollToShowCoupon(val);
    }
  },
  mounted: function mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },
  methods: {
    onClickExchangeButton: function onClickExchangeButton() {
      this.$emit('exchange', this.currentCode); // auto clear currentCode when not use vModel

      if (!this.code) {
        this.currentCode = '';
      }
    },
    // scroll to show specific coupon
    scrollToShowCoupon: function scrollToShowCoupon(index) {
      var _this = this;

      if (index === -1) {
        return;
      }

      this.$nextTick(function () {
        var _this$$refs = _this.$refs,
            card = _this$$refs.card,
            list = _this$$refs.list;
        /* istanbul ignore next */

        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    },
    renderEmpty: function renderEmpty() {
      var h = this.$createElement;
      return h("div", {
        "class": bem('empty')
      }, [h("img", {
        "attrs": {
          "src": EMPTY_IMAGE
        }
      }), h("p", [t('empty')])]);
    },
    renderExchangeButton: function renderExchangeButton() {
      var h = this.$createElement;
      return h(__WEBPACK_IMPORTED_MODULE_4__button__["a" /* default */], {
        "attrs": {
          "size": "small",
          "type": "danger",
          "text": this.exchangeButtonText || t('exchange'),
          "loading": this.exchangeButtonLoading,
          "disabled": this.buttonDisabled
        },
        "class": bem('exchange'),
        "on": {
          "click": this.onClickExchangeButton
        }
      });
    }
  },
  render: function render(h) {
    var _this2 = this;

    var coupons = this.coupons,
        disabledCoupons = this.disabledCoupons;
    var title = (this.enabledTitle || t('enable')) + " (" + coupons.length + ")";
    var disabledTitle = (this.disabledTitle || t('disabled')) + " (" + disabledCoupons.length + ")";
    var ExchangeBar = this.showExchangeBar && h(__WEBPACK_IMPORTED_MODULE_3__field__["a" /* default */], {
      "attrs": {
        "clearable": true,
        "border": false,
        "placeholder": this.inputPlaceholder || t('placeholder'),
        "maxlength": "20"
      },
      "class": bem('field'),
      "scopedSlots": {
        button: this.renderExchangeButton
      },
      "model": {
        value: _this2.currentCode,
        callback: function callback($$v) {
          _this2.currentCode = $$v;
        }
      }
    });

    var onChange = function onChange(index) {
      return function () {
        return _this2.$emit('change', index);
      };
    };

    var CouponTab = h(__WEBPACK_IMPORTED_MODULE_1__tab__["a" /* default */], {
      "attrs": {
        "title": title
      }
    }, [h("div", {
      "class": bem('list'),
      "style": this.listStyle
    }, [coupons.map(function (coupon, index) {
      return h(__WEBPACK_IMPORTED_MODULE_5__coupon__["a" /* default */], {
        "ref": "card",
        "key": coupon.id,
        "attrs": {
          "coupon": coupon,
          "currency": _this2.currency,
          "chosen": index === _this2.chosenCoupon
        },
        "nativeOn": {
          "click": onChange(index)
        }
      });
    }), !coupons.length && this.renderEmpty()])]);
    var DisabledCouponTab = h(__WEBPACK_IMPORTED_MODULE_1__tab__["a" /* default */], {
      "attrs": {
        "title": disabledTitle
      }
    }, [h("div", {
      "class": bem('list'),
      "style": this.listStyle
    }, [disabledCoupons.map(function (coupon) {
      return h(__WEBPACK_IMPORTED_MODULE_5__coupon__["a" /* default */], {
        "attrs": {
          "disabled": true,
          "coupon": coupon,
          "currency": _this2.currency
        },
        "key": coupon.id
      });
    }), !disabledCoupons.length && this.renderEmpty()])]);
    return h("div", {
      "class": bem()
    }, [ExchangeBar, h(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* default */], {
      "class": bem('tab'),
      "attrs": {
        "line-width": 120
      },
      "model": {
        value: _this2.tab,
        callback: function callback($$v) {
          _this2.tab = $$v;
        }
      }
    }, [CouponTab, DisabledCouponTab]), h(__WEBPACK_IMPORTED_MODULE_4__button__["a" /* default */], {
      "directives": [{
        name: "show",
        value: this.showCloseButton
      }],
      "attrs": {
        "size": "large",
        "text": this.closeButtonText || t('close')
      },
      "class": bem('close'),
      "on": {
        "click": onChange(-1)
      }
    })]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/coupon/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_color__ = __webpack_require__("./node_modules/vant/es/utils/color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_format_string__ = __webpack_require__("./node_modules/vant/es/utils/format/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkbox__ = __webpack_require__("./node_modules/vant/es/checkbox/index.js");





var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('coupon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function getDate(timeStamp) {
  var date = new Date(timeStamp * 1000);
  return date.getFullYear() + "." + Object(__WEBPACK_IMPORTED_MODULE_2__utils_format_string__["b" /* padZero */])(date.getMonth() + 1) + "." + Object(__WEBPACK_IMPORTED_MODULE_2__utils_format_string__["b" /* padZero */])(date.getDate());
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
}

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: {
      type: String,
      default: '¥'
    }
  },
  computed: {
    validPeriod: function validPeriod() {
      var _this$coupon = this.coupon,
          startAt = _this$coupon.startAt,
          endAt = _this$coupon.endAt;
      return t('valid') + "\uFF1A" + getDate(startAt) + " - " + getDate(endAt);
    },
    faceAmount: function faceAmount() {
      var coupon = this.coupon;

      if (coupon.valueDesc) {
        return coupon.valueDesc + "<span>" + (coupon.unitDesc || '') + "</span>";
      }

      if (coupon.denominations) {
        return "<span>" + this.currency + "</span> " + formatAmount(this.coupon.denominations);
      }

      if (coupon.discount) {
        return t('discount', formatDiscount(this.coupon.discount));
      }

      return '';
    },
    conditionMessage: function conditionMessage() {
      var condition = formatAmount(this.coupon.originCondition);
      return condition === '0' ? t('unlimited') : t('condition', condition);
    }
  },
  render: function render(h) {
    var coupon = this.coupon,
        disabled = this.disabled;
    var description = disabled && coupon.reason || coupon.description;
    return h("div", {
      "class": bem({
        disabled: disabled
      })
    }, [h("div", {
      "class": bem('content')
    }, [h("div", {
      "class": bem('head')
    }, [h("h2", {
      "class": bem('amount'),
      "domProps": {
        "innerHTML": this.faceAmount
      }
    }), h("p", [this.coupon.condition || this.conditionMessage])]), h("div", {
      "class": bem('body')
    }, [h("h2", {
      "class": bem('name')
    }, [coupon.name]), h("p", [this.validPeriod]), this.chosen && h(__WEBPACK_IMPORTED_MODULE_3__checkbox__["a" /* default */], {
      "attrs": {
        "value": true,
        "checked-color": __WEBPACK_IMPORTED_MODULE_1__utils_color__["e" /* RED */]
      },
      "class": bem('corner')
    })])]), description && h("p", {
      "class": bem('description')
    }, [description])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/datetime-picker/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_format_number__ = __webpack_require__("./node_modules/vant/es/utils/format/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_format_string__ = __webpack_require__("./node_modules/vant/es/utils/format/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__picker__ = __webpack_require__("./node_modules/vant/es/picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__picker_shared__ = __webpack_require__("./node_modules/vant/es/picker/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__("./node_modules/vant/es/datetime-picker/utils.js");








var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('datetime-picker'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var currentYear = new Date().getFullYear();
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_5__picker_shared__["a" /* pickerProps */], {
    value: null,
    filter: Function,
    minHour: {
      type: Number,
      default: 0
    },
    minMinute: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'datetime'
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    format: {
      type: String,
      default: 'YYYY.MM.DD HH时 mm分'
    },
    formatter: {
      type: Function,
      default: function _default(type, value) {
        return value;
      }
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: __WEBPACK_IMPORTED_MODULE_6__utils__["c" /* isValidDate */]
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: __WEBPACK_IMPORTED_MODULE_6__utils__["c" /* isValidDate */]
    },
    maxHour: {
      type: Number,
      default: 23
    },
    maxMinute: {
      type: Number,
      default: 59
    }
  }),
  data: function data() {
    return {
      innerValue: this.correctValue(this.value)
    };
  },
  watch: {
    value: function value(val) {
      val = this.correctValue(val);
      var isEqual = this.type === 'time' ? val === this.innerValue : val.valueOf() === this.innerValue.valueOf();

      if (!isEqual) {
        this.innerValue = val;

        if (this.type === 'time') {
          this.updateColumnValue(val);
        }
      }
    },
    innerValue: function innerValue(val) {
      this.$emit('input', val);
    },
    columns: function columns() {
      this.updateColumnValue(this.innerValue);
    }
  },
  computed: {
    ranges: function ranges() {
      if (this.type === 'time') {
        return [{
          type: 'hour',
          range: [this.minHour, this.maxHour]
        }, {
          type: 'minute',
          range: [this.minMinute, this.maxMinute]
        }];
      }

      var _this$getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _this$getBoundary.maxYear,
          maxDate = _this$getBoundary.maxDate,
          maxMonth = _this$getBoundary.maxMonth,
          maxHour = _this$getBoundary.maxHour,
          maxMinute = _this$getBoundary.maxMinute;

      var _this$getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _this$getBoundary2.minYear,
          minDate = _this$getBoundary2.minDate,
          minMonth = _this$getBoundary2.minMonth,
          minHour = _this$getBoundary2.minHour,
          minMinute = _this$getBoundary2.minMinute;

      var result = [{
        type: 'year',
        range: [minYear, maxYear]
      }, {
        type: 'month',
        range: [minMonth, maxMonth]
      }, {
        type: 'day',
        range: [minDate, maxDate]
      }, {
        type: 'hour',
        range: [minHour, maxHour]
      }, {
        type: 'minute',
        range: [minMinute, maxMinute]
      }];
      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    },
    columns: function columns() {
      var _this = this;

      var results = this.ranges.map(function (_ref) {
        var type = _ref.type,
            rangeArr = _ref.range;
        var values = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* times */])(rangeArr[1] - rangeArr[0] + 1, function (index) {
          var value = Object(__WEBPACK_IMPORTED_MODULE_3__utils_format_string__["b" /* padZero */])(rangeArr[0] + index);
          return _this.formatter(type, value);
        });

        if (_this.filter) {
          values = _this.filter(type, values);
        }

        return {
          values: values
        };
      });
      return results;
    }
  },
  mounted: function mounted() {
    this.updateColumnValue(this.innerValue);
  },
  methods: {
    correctValue: function correctValue(value) {
      // validate value
      var isDateType = this.type !== 'time';

      if (isDateType && !Object(__WEBPACK_IMPORTED_MODULE_6__utils__["c" /* isValidDate */])(value)) {
        value = this.minDate;
      } else if (!value) {
        value = Object(__WEBPACK_IMPORTED_MODULE_3__utils_format_string__["b" /* padZero */])(this.minHour) + ":00";
      } // time type


      if (!isDateType) {
        var _value$split = value.split(':'),
            hour = _value$split[0],
            minute = _value$split[1];

        hour = Object(__WEBPACK_IMPORTED_MODULE_3__utils_format_string__["b" /* padZero */])(Object(__WEBPACK_IMPORTED_MODULE_2__utils_format_number__["a" /* range */])(hour, this.minHour, this.maxHour));
        minute = Object(__WEBPACK_IMPORTED_MODULE_3__utils_format_string__["b" /* padZero */])(Object(__WEBPACK_IMPORTED_MODULE_2__utils_format_number__["a" /* range */])(minute, this.minMinute, this.maxMinute));
        return hour + ":" + minute;
      } // date type


      value = Math.max(value, this.minDate.getTime());
      value = Math.min(value, this.maxDate.getTime());
      return new Date(value);
    },
    getBoundary: function getBoundary(type, value) {
      var _ref2;

      var boundary = this[type + "Date"];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* getMonthEndDay */])(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();

          if (value.getDate() === date) {
            hour = boundary.getHours();

            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref2 = {}, _ref2[type + "Year"] = year, _ref2[type + "Month"] = month, _ref2[type + "Date"] = date, _ref2[type + "Hour"] = hour, _ref2[type + "Minute"] = minute, _ref2;
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onChange: function onChange(picker) {
      var _this2 = this;

      var value;

      if (this.type === 'time') {
        value = picker.getValues().join(':');
      } else {
        var values = picker.getValues();
        var year = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* getTrueValue */])(values[0]);
        var month = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* getTrueValue */])(values[1]);
        var maxDate = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* getMonthEndDay */])(year, month);
        var date = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* getTrueValue */])(values[2]);

        if (this.type === 'year-month') {
          date = 1;
        }

        date = date > maxDate ? maxDate : date;
        var hour = 0;
        var minute = 0;

        if (this.type === 'datetime') {
          hour = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* getTrueValue */])(values[3]);
          minute = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* getTrueValue */])(values[4]);
        }

        value = new Date(year, month - 1, date, hour, minute);
      }

      this.innerValue = this.correctValue(value);
      this.$nextTick(function () {
        _this2.$nextTick(function () {
          _this2.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this3 = this;

      var values = [];
      var formatter = this.formatter;

      if (this.type === 'time') {
        var pair = value.split(':');
        values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
      } else {
        values = [formatter('year', "" + value.getFullYear()), formatter('month', Object(__WEBPACK_IMPORTED_MODULE_3__utils_format_string__["b" /* padZero */])(value.getMonth() + 1)), formatter('day', Object(__WEBPACK_IMPORTED_MODULE_3__utils_format_string__["b" /* padZero */])(value.getDate()))];

        if (this.type === 'datetime') {
          values.push(formatter('hour', Object(__WEBPACK_IMPORTED_MODULE_3__utils_format_string__["b" /* padZero */])(value.getHours())), formatter('minute', Object(__WEBPACK_IMPORTED_MODULE_3__utils_format_string__["b" /* padZero */])(value.getMinutes())));
        }

        if (this.type === 'year-month') {
          values = values.slice(0, 2);
        }
      }

      this.$nextTick(function () {
        _this3.$refs.picker.setValues(values);
      });
    }
  },
  render: function render(h) {
    var _this4 = this;

    var props = {};
    Object.keys(__WEBPACK_IMPORTED_MODULE_5__picker_shared__["a" /* pickerProps */]).forEach(function (key) {
      props[key] = _this4[key];
    });
    return h(__WEBPACK_IMPORTED_MODULE_4__picker__["a" /* default */], {
      "class": bem(),
      "ref": "picker",
      "attrs": {
        "columns": this.columns
      },
      "on": {
        "change": this.onChange,
        "confirm": this.onConfirm,
        "cancel": function cancel() {
          _this4.$emit('cancel');
        }
      },
      "props": Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props)
    });
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/datetime-picker/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = isValidDate;
/* harmony export (immutable) */ __webpack_exports__["d"] = times;
/* harmony export (immutable) */ __webpack_exports__["b"] = getTrueValue;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMonthEndDay;
function isValidDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
}
function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
function getTrueValue(formattedValue) {
  if (!formattedValue) return;

  while (isNaN(parseInt(formattedValue, 10))) {
    formattedValue = formattedValue.slice(1);
  }

  return parseInt(formattedValue, 10);
}
function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}

/***/ }),

/***/ "./node_modules/vant/es/dialog/Dialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_popup__ = __webpack_require__("./node_modules/vant/es/mixins/popup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_close_on_popstate__ = __webpack_require__("./node_modules/vant/es/mixins/close-on-popstate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button__ = __webpack_require__("./node_modules/vant/es/button/index.js");





var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('dialog'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_popup__["a" /* PopupMixin */], __WEBPACK_IMPORTED_MODULE_2__mixins_close_on_popstate__["a" /* CloseOnPopstateMixin */]],
  props: {
    title: String,
    message: String,
    className: null,
    callback: Function,
    beforeClose: Function,
    messageAlign: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },
  methods: {
    onClickOverlay: function onClickOverlay() {
      this.handleAction('overlay');
    },
    handleAction: function handleAction(action) {
      var _this = this;

      this.$emit(action);

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function (state) {
          if (state !== false) {
            _this.onClose(action);
          }

          _this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.close();

      if (this.callback) {
        this.callback(action);
      }
    }
  },
  render: function render(h) {
    var _bem,
        _this2 = this;

    if (!this.shouldRender) {
      return;
    }

    var title = this.title,
        message = this.message,
        messageAlign = this.messageAlign;
    var children = this.slots();
    var Title = title && h("div", {
      "class": bem('header', {
        isolated: !message && !children
      })
    }, [title]);
    var Content = (children || message) && h("div", {
      "class": bem('content')
    }, [children || h("div", {
      "domProps": {
        "innerHTML": message
      },
      "class": bem('message', (_bem = {
        'has-title': title
      }, _bem[messageAlign] = messageAlign, _bem))
    })]);
    var hasButtons = this.showCancelButton && this.showConfirmButton;
    var ButtonGroup = h("div", {
      "class": ['van-hairline--top', bem('footer', {
        buttons: hasButtons
      })]
    }, [this.showCancelButton && h(__WEBPACK_IMPORTED_MODULE_3__button__["a" /* default */], {
      "attrs": {
        "size": "large",
        "loading": this.loading.cancel,
        "text": this.cancelButtonText || t('cancel')
      },
      "class": bem('cancel'),
      "style": {
        color: this.cancelButtonColor
      },
      "on": {
        "click": function click() {
          _this2.handleAction('cancel');
        }
      }
    }), this.showConfirmButton && h(__WEBPACK_IMPORTED_MODULE_3__button__["a" /* default */], {
      "attrs": {
        "size": "large",
        "loading": this.loading.confirm,
        "text": this.confirmButtonText || t('confirm')
      },
      "class": [bem('confirm'), {
        'van-hairline--left': hasButtons
      }],
      "style": {
        color: this.confirmButtonColor
      },
      "on": {
        "click": function click() {
          _this2.handleAction('confirm');
        }
      }
    })]);
    return h("transition", {
      "attrs": {
        "name": "van-dialog-bounce"
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "attrs": {
        "role": "dialog",
        "aria-labelledby": title || message
      },
      "class": [bem(), this.className]
    }, [Title, Content, ButtonGroup])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/dialog/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dialog__ = __webpack_require__("./node_modules/vant/es/dialog/Dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");




var instance;

function isInDocument(element) {
  return document.body.contains(element);
}

function initInstance() {
  if (instance) {
    instance.$destroy();
  }

  instance = new (__WEBPACK_IMPORTED_MODULE_1_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_2__Dialog__["a" /* default */]))({
    el: document.createElement('div'),
    // avoid missing animation when first rendered
    propsData: {
      lazyRender: false
    }
  });
  instance.$on('input', function (value) {
    instance.value = value;
  });
}

function Dialog(options) {
  /* istanbul ignore if */
  if (__WEBPACK_IMPORTED_MODULE_3__utils__["f" /* isServer */]) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    if (!instance || !isInDocument(instance.$el)) {
      initInstance();
    }

    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(instance, Dialog.currentOptions, options, {
      resolve: resolve,
      reject: reject
    });
  });
}

Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  beforeClose: null,
  messageAlign: '',
  getContainer: 'body',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};
Dialog.alert = Dialog;

Dialog.confirm = function (options) {
  return Dialog(Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = function (options) {
  Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();

Dialog.install = function () {
  __WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2__Dialog__["a" /* default */]);
};

Dialog.Component = __WEBPACK_IMPORTED_MODULE_2__Dialog__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.$dialog = Dialog;
/* harmony default export */ __webpack_exports__["a"] = (Dialog);

/***/ }),

/***/ "./node_modules/vant/es/divider/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");


 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('divider'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Divider(h, props, slots, ctx) {
  var _bem;

  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "style": {
      borderColor: props.borderColor
    },
    "class": bem((_bem = {
      dashed: props.dashed,
      hairline: props.hairline
    }, _bem["content-" + props.contentPosition] = slots.default, _bem))
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx, true)]), [slots.default && slots.default()]);
}

Divider.props = {
  dashed: Boolean,
  hairline: {
    type: Boolean,
    default: true
  },
  contentPosition: {
    type: String,
    default: 'center'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Divider));

/***/ }),

/***/ "./node_modules/vant/es/dropdown-item/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cell__ = __webpack_require__("./node_modules/vant/es/cell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popup__ = __webpack_require__("./node_modules/vant/es/popup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");






var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('dropdown-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_4__mixins_relation__["a" /* ChildrenMixin */])('vanDropdownMenu')],
  props: {
    value: null,
    title: String,
    disabled: Boolean,
    titleClass: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      transition: true,
      showPopup: false,
      showWrapper: false
    };
  },
  computed: {
    displayTitle: function displayTitle() {
      var _this = this;

      if (this.title) {
        return this.title;
      }

      var match = this.options.filter(function (option) {
        return option.value === _this.value;
      });
      return match.length ? match[0].text : '';
    }
  },
  methods: {
    toggle: function toggle(show, options) {
      if (show === void 0) {
        show = !this.showPopup;
      }

      if (options === void 0) {
        options = {};
      }

      if (show === this.showPopup) {
        return;
      }

      this.transition = !options.immediate;
      this.showPopup = show;

      if (show) {
        this.parent.updateOffset();
        this.showWrapper = true;
      }
    }
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;

    var createEmitter = function createEmitter(eventName) {
      return function () {
        return _this2.$emit(eventName);
      };
    };

    this.onOpen = createEmitter('open');
    this.onClose = createEmitter('close');
    this.onOpened = createEmitter('opened');
  },
  render: function render(h) {
    var _this3 = this;

    var _this$parent = this.parent,
        zIndex = _this$parent.zIndex,
        offset = _this$parent.offset,
        overlay = _this$parent.overlay,
        duration = _this$parent.duration,
        direction = _this$parent.direction,
        activeColor = _this$parent.activeColor,
        closeOnClickOverlay = _this$parent.closeOnClickOverlay;
    var Options = this.options.map(function (option) {
      var active = option.value === _this3.value;
      return h(__WEBPACK_IMPORTED_MODULE_1__cell__["a" /* default */], {
        "attrs": {
          "clickable": true,
          "icon": option.icon,
          "title": option.text
        },
        "key": option.value,
        "style": {
          color: active ? activeColor : ''
        },
        "on": {
          "click": function click() {
            _this3.showPopup = false;

            if (option.value !== _this3.value) {
              _this3.$emit('input', option.value);

              _this3.$emit('change', option.value);
            }
          }
        }
      }, [active && h(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], {
        "class": bem('icon'),
        "attrs": {
          "color": activeColor,
          "name": "success"
        }
      })]);
    });
    var style = {
      zIndex: zIndex
    };

    if (direction === 'down') {
      style.top = offset + "px";
    } else {
      style.bottom = offset + "px";
    }

    return h("div", {
      "directives": [{
        name: "show",
        value: this.showWrapper
      }],
      "style": style,
      "class": bem([direction])
    }, [h(__WEBPACK_IMPORTED_MODULE_3__popup__["a" /* default */], {
      "attrs": {
        "overlay": overlay,
        "position": direction === 'down' ? 'top' : 'bottom',
        "duration": this.transition ? duration : 0,
        "closeOnClickOverlay": closeOnClickOverlay,
        "overlayStyle": {
          position: 'absolute'
        }
      },
      "class": bem('content'),
      "on": {
        "open": this.onOpen,
        "close": this.onClose,
        "opened": this.onOpened,
        "closed": function closed() {
          _this3.showWrapper = false;

          _this3.$emit('closed');
        }
      },
      "model": {
        value: _this3.showPopup,
        callback: function callback($$v) {
          _this3.showPopup = $$v;
        }
      }
    }, [Options, this.slots('default')])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/dropdown-menu/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_color__ = __webpack_require__("./node_modules/vant/es/utils/color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_click_outside__ = __webpack_require__("./node_modules/vant/es/mixins/click-outside.js");





var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('dropdown-menu'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_2__mixins_relation__["b" /* ParentMixin */])('vanDropdownMenu'), Object(__WEBPACK_IMPORTED_MODULE_3__mixins_click_outside__["a" /* ClickOutsideMixin */])({
    event: 'click',
    method: 'onClickOutside'
  })],
  props: {
    overlay: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 10
    },
    duration: {
      type: Number,
      default: 0.2
    },
    direction: {
      type: String,
      default: 'down'
    },
    activeColor: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_1__utils_color__["a" /* BLUE */]
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      offset: 0
    };
  },
  methods: {
    updateOffset: function updateOffset() {
      var menu = this.$refs.menu;
      var rect = menu.getBoundingClientRect();

      if (this.direction === 'down') {
        this.offset = rect.bottom;
      } else {
        this.offset = window.innerHeight - rect.top;
      }
    },
    toggleItem: function toggleItem(active) {
      this.children.forEach(function (item, index) {
        if (index === active) {
          item.toggle();
        } else if (item.showPopup) {
          item.toggle(false, {
            immediate: true
          });
        }
      });
    },
    onClickOutside: function onClickOutside() {
      this.children.forEach(function (item) {
        item.toggle(false);
      });
    }
  },
  render: function render(h) {
    var _this = this;

    var Titles = this.children.map(function (item, index) {
      return h("div", {
        "attrs": {
          "role": "button",
          "tabindex": item.disabled ? -1 : 0
        },
        "class": bem('item', {
          disabled: item.disabled
        }),
        "on": {
          "click": function click() {
            if (!item.disabled) {
              _this.toggleItem(index);
            }
          }
        }
      }, [h("span", {
        "class": [bem('title', {
          down: item.showPopup === (_this.direction === 'down')
        }), item.titleClass],
        "style": {
          color: item.showPopup ? _this.activeColor : ''
        }
      }, [h("div", {
        "class": "van-ellipsis"
      }, [item.displayTitle])])]);
    });
    return h("div", {
      "ref": "menu",
      "class": [bem(), 'van-hairline--top-bottom']
    }, [Titles, this.slots('default')]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/field/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cell__ = __webpack_require__("./node_modules/vant/es/cell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cell_shared__ = __webpack_require__("./node_modules/vant/es/cell/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_dom_reset_scroll__ = __webpack_require__("./node_modules/vant/es/utils/dom/reset-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");










var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* createNamespace */])('field'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  inheritAttrs: false,
  props: Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_4__cell_shared__["a" /* cellProps */], {
    error: Boolean,
    readonly: Boolean,
    autosize: [Boolean, Object],
    leftIcon: String,
    rightIcon: String,
    clearable: Boolean,
    labelClass: null,
    labelWidth: [Number, String],
    labelAlign: String,
    inputAlign: String,
    errorMessage: String,
    errorMessageAlign: String,
    type: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      focused: false
    };
  },
  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },
  mounted: function mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },
  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && Object(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* isDef */])(this.value) && !this.readonly;
    },
    listeners: function listeners() {
      var listeners = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      });

      delete listeners.click;
      return listeners;
    },
    labelStyle: function labelStyle() {
      var labelWidth = this.labelWidth;

      if (labelWidth) {
        return {
          width: Object(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* addUnit */])(labelWidth)
        };
      }
    }
  },
  methods: {
    focus: function focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    blur: function blur() {
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    // native maxlength not work when type = number
    format: function format(target) {
      if (target === void 0) {
        target = this.$refs.input;
      }

      if (!target) {
        return;
      }

      var _target = target,
          value = _target.value;
      var maxlength = this.$attrs.maxlength;

      if (this.type === 'number' && Object(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* isDef */])(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },
    onInput: function onInput(event) {
      // not update v-model when composing
      if (event.target.composing) {
        return;
      }

      this.$emit('input', this.format(event.target));
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event); // hack for safari

      /* istanbul ignore if */

      if (this.readonly) {
        this.blur();
      }
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      Object(__WEBPACK_IMPORTED_MODULE_6__utils_dom_reset_scroll__["a" /* resetScroll */])();
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    onClickLeftIcon: function onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },
    onClickRightIcon: function onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },
    onClear: function onClear(event) {
      Object(__WEBPACK_IMPORTED_MODULE_5__utils_dom_event__["c" /* preventDefault */])(event);
      this.$emit('input', '');
      this.$emit('clear', event);
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;
        var allowPoint = String(this.value).indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;

        if (!isValidKey) {
          Object(__WEBPACK_IMPORTED_MODULE_5__utils_dom_event__["c" /* preventDefault */])(event);
        }
      } // trigger blur after click keyboard search button

      /* istanbul ignore next */


      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if (Object(__WEBPACK_IMPORTED_MODULE_7__utils__["e" /* isObj */])(this.autosize)) {
        var _this$autosize = this.autosize,
            maxHeight = _this$autosize.maxHeight,
            minHeight = _this$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    },
    renderInput: function renderInput() {
      var h = this.$createElement;
      var inputSlot = this.slots('input');

      if (inputSlot) {
        return h("div", {
          "class": bem('control', this.inputAlign)
        }, [inputSlot]);
      }

      var inputProps = {
        ref: 'input',
        class: bem('control', this.inputAlign),
        domProps: {
          value: this.value
        },
        attrs: Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, this.$attrs, {
          readonly: this.readonly
        }),
        on: this.listeners,
        // add model directive to skip IME composition
        directives: [{
          name: 'model',
          value: this.value
        }]
      };

      if (this.type === 'textarea') {
        return h("textarea", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{}, inputProps]));
      }

      return h("input", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
        "attrs": {
          "type": this.type
        }
      }, inputProps]));
    },
    renderLeftIcon: function renderLeftIcon() {
      var h = this.$createElement;
      var showLeftIcon = this.slots('left-icon') || this.leftIcon;

      if (showLeftIcon) {
        return h("div", {
          "class": bem('left-icon'),
          "on": {
            "click": this.onClickLeftIcon
          }
        }, [this.slots('left-icon') || h(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], {
          "attrs": {
            "name": this.leftIcon
          }
        })]);
      }
    },
    renderRightIcon: function renderRightIcon() {
      var h = this.$createElement;
      var slots = this.slots;
      var showRightIcon = slots('right-icon') || this.rightIcon;

      if (showRightIcon) {
        return h("div", {
          "class": bem('right-icon'),
          "on": {
            "click": this.onClickRightIcon
          }
        }, [slots('right-icon') || h(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], {
          "attrs": {
            "name": this.rightIcon
          }
        })]);
      }
    }
  },
  render: function render(h) {
    var _bem;

    var slots = this.slots,
        labelAlign = this.labelAlign;
    var scopedSlots = {
      icon: this.renderLeftIcon
    };

    if (slots('label')) {
      scopedSlots.title = function () {
        return slots('label');
      };
    }

    return h(__WEBPACK_IMPORTED_MODULE_3__cell__["a" /* default */], {
      "attrs": {
        "icon": this.leftIcon,
        "size": this.size,
        "title": this.label,
        "center": this.center,
        "border": this.border,
        "isLink": this.isLink,
        "required": this.required,
        "clickable": this.clickable,
        "titleStyle": this.labelStyle,
        "titleClass": [bem('label', labelAlign), this.labelClass],
        "arrowDirection": this.arrowDirection
      },
      "class": bem((_bem = {
        error: this.error,
        disabled: this.$attrs.disabled
      }, _bem["label-" + labelAlign] = labelAlign, _bem['min-height'] = this.type === 'textarea' && !this.autosize, _bem)),
      "scopedSlots": scopedSlots,
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('body')
    }, [this.renderInput(), this.showClear && h(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], {
      "attrs": {
        "name": "clear"
      },
      "class": bem('clear'),
      "on": {
        "touchstart": this.onClear
      }
    }), this.renderRightIcon(), slots('button') && h("div", {
      "class": bem('button')
    }, [slots('button')])]), this.errorMessage && h("div", {
      "class": bem('error-message', this.errorMessageAlign)
    }, [this.errorMessage])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/goods-action-button/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button__ = __webpack_require__("./node_modules/vant/es/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_router__ = __webpack_require__("./node_modules/vant/es/utils/router.js");





 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* createNamespace */])('goods-action-button'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function GoodsActionButton(h, props, slots, ctx) {
  function onClick(event) {
    Object(__WEBPACK_IMPORTED_MODULE_4__utils_functional__["a" /* emit */])(ctx, 'click', event);
    Object(__WEBPACK_IMPORTED_MODULE_5__utils_router__["a" /* functionalRoute */])(ctx);
  }

  return h(__WEBPACK_IMPORTED_MODULE_3__button__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default()([{
    "attrs": {
      "square": true,
      "size": "large",
      "type": props.type,
      "loading": props.loading,
      "disabled": props.disabled
    },
    "class": bem(),
    "on": {
      "click": onClick
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_4__utils_functional__["b" /* inherit */])(ctx)]), [slots.default ? slots.default() : props.text]);
}

GoodsActionButton.props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_5__utils_router__["c" /* routeProps */], {
  type: String,
  text: String,
  loading: Boolean,
  disabled: Boolean
});
/* harmony default export */ __webpack_exports__["a"] = (createComponent(GoodsActionButton));

/***/ }),

/***/ "./node_modules/vant/es/goods-action-icon/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_router__ = __webpack_require__("./node_modules/vant/es/utils/router.js");





 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* createNamespace */])('goods-action-icon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function GoodsActionIcon(h, props, slots, ctx) {
  function onClick(event) {
    Object(__WEBPACK_IMPORTED_MODULE_4__utils_functional__["a" /* emit */])(ctx, 'click', event);
    Object(__WEBPACK_IMPORTED_MODULE_5__utils_router__["a" /* functionalRoute */])(ctx);
  }

  return h("div", __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default()([{
    "attrs": {
      "role": "button",
      "tabindex": "0"
    },
    "class": bem(),
    "on": {
      "click": onClick
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_4__utils_functional__["b" /* inherit */])(ctx)]), [slots.icon ? h("div", {
    "class": bem('icon')
  }, [slots.icon()]) : h(__WEBPACK_IMPORTED_MODULE_3__icon__["a" /* default */], {
    "class": [bem('icon'), props.iconClass],
    "attrs": {
      "tag": "div",
      "info": props.info,
      "name": props.icon
    }
  }), slots.default ? slots.default() : props.text]);
}

GoodsActionIcon.props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_5__utils_router__["c" /* routeProps */], {
  text: String,
  icon: String,
  info: [Number, String],
  iconClass: null
});
/* harmony default export */ __webpack_exports__["a"] = (createComponent(GoodsActionIcon));

/***/ }),

/***/ "./node_modules/vant/es/goods-action/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");


 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('goods-action'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function GoodsAction(h, props, slots, ctx) {
  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    })
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx, true)]), [slots.default && slots.default()]);
}

GoodsAction.props = {
  safeAreaInsetBottom: Boolean
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(GoodsAction));

/***/ }),

/***/ "./node_modules/vant/es/grid-item/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_router__ = __webpack_require__("./node_modules/vant/es/utils/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");






var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('grid-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_2__mixins_relation__["a" /* ChildrenMixin */])('vanGrid')],
  props: Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_3__utils_router__["c" /* routeProps */], {
    icon: String,
    text: String
  }),
  computed: {
    style: function style() {
      var _this$parent = this.parent,
          square = _this$parent.square,
          gutter = _this$parent.gutter,
          columnNum = _this$parent.columnNum;
      var percent = 100 / columnNum + "%";
      var style = {
        flexBasis: percent
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        var gutterValue = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(gutter);
        style.paddingRight = gutterValue;

        if (this.index >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    },
    contentStyle: function contentStyle() {
      var _this$parent2 = this.parent,
          square = _this$parent2.square,
          gutter = _this$parent2.gutter;

      if (square && gutter) {
        var gutterValue = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(gutter);
        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto'
        };
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_router__["b" /* route */])(this.$router, this);
    },
    renderContent: function renderContent() {
      var h = this.$createElement;
      var slot = this.slots();

      if (slot) {
        return slot;
      }

      return [this.slots('icon') || this.icon && h(__WEBPACK_IMPORTED_MODULE_4__icon__["a" /* default */], {
        "attrs": {
          "name": this.icon
        },
        "class": bem('icon')
      }), this.slots('text') || this.text && h("span", {
        "class": bem('text')
      }, [this.text])];
    }
  },
  render: function render(h) {
    var _this$parent3 = this.parent,
        center = _this$parent3.center,
        border = _this$parent3.border,
        square = _this$parent3.square,
        gutter = _this$parent3.gutter,
        clickable = _this$parent3.clickable;
    return h("div", {
      "class": [bem({
        square: square
      })],
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "style": this.contentStyle,
      "class": [bem('content', {
        center: center,
        square: square,
        clickable: clickable,
        surround: border && gutter
      }), {
        'van-hairline': border
      }]
    }, [this.renderContent()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/grid/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('grid'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_relation__["b" /* ParentMixin */])('vanGrid')],
  props: {
    square: Boolean,
    gutter: [Number, String],
    clickable: Boolean,
    columnNum: {
      type: Number,
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style: function style() {
      var gutter = this.gutter;

      if (gutter) {
        return {
          paddingLeft: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* addUnit */])(gutter)
        };
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "style": this.style,
      "class": [bem(), {
        'van-hairline--top': this.border && !this.gutter
      }]
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/icon/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info__ = __webpack_require__("./node_modules/vant/es/info/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image__ = __webpack_require__("./node_modules/vant/es/image/index.js");




 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('icon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
}

function Icon(h, props, slots, ctx) {
  var imageIcon = isImage(props.name);
  return h(props.tag, __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + props.name],
    "style": {
      color: props.color,
      fontSize: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(props.size)
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx, true)]), [slots.default && slots.default(), imageIcon && h(__WEBPACK_IMPORTED_MODULE_4__image__["a" /* default */], {
    "class": bem('image'),
    "attrs": {
      "fit": "contain",
      "src": props.name,
      "showLoading": false
    }
  }), h(__WEBPACK_IMPORTED_MODULE_3__info__["a" /* default */], {
    "attrs": {
      "info": props.info
    }
  })]);
}

Icon.props = {
  name: String,
  size: [Number, String],
  info: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: bem()
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Icon));

/***/ }),

/***/ "./node_modules/vant/es/image-preview/ImagePreview.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_format_number__ = __webpack_require__("./node_modules/vant/es/utils/format/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_popup__ = __webpack_require__("./node_modules/vant/es/mixins/popup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_touch__ = __webpack_require__("./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_close_on_popstate__ = __webpack_require__("./node_modules/vant/es/mixins/close-on-popstate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swipe__ = __webpack_require__("./node_modules/vant/es/swipe/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swipe_item__ = __webpack_require__("./node_modules/vant/es/swipe-item/index.js");











var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('image-preview'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function getDistance(touches) {
  return Math.sqrt(Math.abs((touches[0].clientX - touches[1].clientX) * (touches[0].clientY - touches[1].clientY)));
}

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [__WEBPACK_IMPORTED_MODULE_4__mixins_popup__["a" /* PopupMixin */], __WEBPACK_IMPORTED_MODULE_5__mixins_touch__["a" /* TouchMixin */], __WEBPACK_IMPORTED_MODULE_6__mixins_close_on_popstate__["a" /* CloseOnPopstateMixin */]],
  props: {
    className: null,
    lazyLoad: Boolean,
    asyncClose: Boolean,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    startPosition: {
      type: Number,
      default: 0
    },
    minZoom: {
      type: Number,
      default: 1 / 3
    },
    maxZoom: {
      type: Number,
      default: 3
    },
    overlayClass: {
      type: String,
      default: bem('overlay')
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    this.bindStatus = false;
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      active: 0,
      doubleClickTimer: null
    };
  },
  computed: {
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transition: this.zooming || this.moving ? '' : '.3s all'
      };

      if (scale !== 1) {
        style.transform = "scale3d(" + scale + ", " + scale + ", 1) translate(" + this.moveX / scale + "px, " + this.moveY / scale + "px)";
      }

      return style;
    }
  },
  watch: {
    value: function value() {
      this.active = this.startPosition;
    },
    startPosition: function startPosition(active) {
      this.active = active;
    }
  },
  methods: {
    onWrapperTouchStart: function onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },
    onWrapperTouchEnd: function onWrapperTouchEnd(event) {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom_event__["c" /* preventDefault */])(event);
      var deltaTime = new Date() - this.touchStartTime;

      var _ref = this.$refs.swipe || {},
          _ref$offsetX = _ref.offsetX,
          offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
          _ref$offsetY = _ref.offsetY,
          offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY; // prevent long tap to close component


      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        if (!this.doubleClickTimer) {
          this.doubleClickTimer = setTimeout(function () {
            var index = _this.active;

            _this.resetScale();

            _this.$emit('close', {
              index: index,
              url: _this.images[index]
            });

            if (!_this.asyncClose) {
              _this.$emit('input', false);
            }

            _this.doubleClickTimer = null;
          }, 300);
        } else {
          clearTimeout(this.doubleClickTimer);
          this.doubleClickTimer = null;
          this.toggleScale();
        }
      }
    },
    startMove: function startMove(event) {
      var image = event.currentTarget;
      var rect = image.getBoundingClientRect();
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      this.touchStart(event);
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2);
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2);
    },
    startZoom: function startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = getDistance(event.touches);
    },
    onImageTouchStart: function onImageTouchStart(event) {
      var touches = event.touches;

      var _ref2 = this.$refs.swipe || {},
          _ref2$offsetX = _ref2.offsetX,
          offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX;

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      }
      /* istanbul ignore else */
      else if (touches.length === 2 && !offsetX) {
          this.startZoom(event);
        }
    },
    onImageTouchMove: function onImageTouchMove(event) {
      var touches = event.touches;

      if (this.moving || this.zooming) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom_event__["c" /* preventDefault */])(event, true);
      }

      if (this.moving) {
        this.touchMove(event);
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = Object(__WEBPACK_IMPORTED_MODULE_2__utils_format_number__["a" /* range */])(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = Object(__WEBPACK_IMPORTED_MODULE_2__utils_format_number__["a" /* range */])(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.scale = Object(__WEBPACK_IMPORTED_MODULE_2__utils_format_number__["a" /* range */])(scale, this.minZoom, this.maxZoom);
      }
    },
    onImageTouchEnd: function onImageTouchEnd(event) {
      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        var stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          this.moving = false;
          this.zooming = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }

        if (stopPropagation) {
          Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom_event__["c" /* preventDefault */])(event, true);
        }
      }
    },
    onSwipeChange: function onSwipeChange(active) {
      this.resetScale();
      this.active = active;
      this.$emit('change', active);
    },
    resetScale: function resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    },
    toggleScale: function toggleScale() {
      var scale = this.scale > 1 ? 1 : 2;
      this.scale = scale;
      this.moveX = 0;
      this.moveY = 0;
    }
  },
  render: function render(h) {
    var _this2 = this;

    if (!this.value) {
      return;
    }

    var active = this.active,
        images = this.images;
    var Index = this.showIndex && h("div", {
      "class": bem('index')
    }, [this.slots('index') || active + 1 + "/" + images.length]);
    var Images = h(__WEBPACK_IMPORTED_MODULE_7__swipe__["a" /* default */], {
      "ref": "swipe",
      "attrs": {
        "loop": this.loop,
        "indicatorColor": "white",
        "initialSwipe": this.startPosition,
        "showIndicators": this.showIndicators
      },
      "on": {
        "change": this.onSwipeChange
      }
    }, [images.map(function (image, index) {
      var props = {
        class: bem('image'),
        style: index === active ? _this2.imageStyle : null,
        on: {
          touchstart: _this2.onImageTouchStart,
          touchmove: _this2.onImageTouchMove,
          touchend: _this2.onImageTouchEnd,
          touchcancel: _this2.onImageTouchEnd
        }
      };
      return h(__WEBPACK_IMPORTED_MODULE_8__swipe_item__["a" /* default */], [_this2.lazyLoad ? h("img", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
        "directives": [{
          name: "lazy",
          value: image
        }]
      }, props])) : h("img", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
        "attrs": {
          "src": image
        }
      }, props]))]);
    })]);
    return h("transition", {
      "attrs": {
        "name": "van-fade"
      }
    }, [h("div", {
      "class": [bem(), this.className],
      "on": {
        "touchstart": this.onWrapperTouchStart,
        "touchMove": __WEBPACK_IMPORTED_MODULE_3__utils_dom_event__["c" /* preventDefault */],
        "touchend": this.onWrapperTouchEnd,
        "touchcancel": this.onWrapperTouchEnd
      }
    }, [Index, Images])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/image-preview/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ImagePreview__ = __webpack_require__("./node_modules/vant/es/image-preview/ImagePreview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");




var instance;
var defaultConfig = {
  images: [],
  loop: true,
  value: true,
  minZoom: 1 / 3,
  maxZoom: 3,
  className: '',
  lazyLoad: false,
  showIndex: true,
  asyncClose: false,
  startPosition: 0,
  showIndicators: false,
  closeOnPopstate: false
};

var initInstance = function initInstance() {
  instance = new (__WEBPACK_IMPORTED_MODULE_1_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_2__ImagePreview__["a" /* default */]))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  instance.$on('change', function (index) {
    if (instance.onChange) {
      instance.onChange(index);
    }
  });
};

var ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (__WEBPACK_IMPORTED_MODULE_3__utils__["f" /* isServer */]) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;

  Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(instance, defaultConfig, options);

  instance.$once('input', function (show) {
    instance.value = show;
  });

  if (options.onClose) {
    instance.$once('close', options.onClose);
  }

  return instance;
};

ImagePreview.install = function () {
  __WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2__ImagePreview__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["a"] = (ImagePreview);

/***/ }),

/***/ "./node_modules/vant/es/image/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");





var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('image'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    lazyLoad: Boolean,
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      loading: true,
      error: false
    };
  },
  watch: {
    src: function src() {
      this.loading = true;
      this.error = false;
    }
  },
  computed: {
    style: function style() {
      var style = {};

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* isDef */])(this.width)) {
        style.width = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(this.width);
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* isDef */])(this.height)) {
        style.height = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(this.height);
      }

      return style;
    }
  },
  created: function created() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },
  methods: {
    onLoad: function onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },
    onLazyLoaded: function onLazyLoaded(_ref) {
      var el = _ref.el;

      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },
    onLazyLoadError: function onLazyLoadError(_ref2) {
      var el = _ref2.el;

      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },
    onError: function onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    renderPlaceholder: function renderPlaceholder() {
      var h = this.$createElement;

      if (this.loading && this.showLoading) {
        return h("div", {
          "class": bem('loading')
        }, [this.slots('loading') || h(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], {
          "attrs": {
            "name": "photo-o",
            "size": "22"
          }
        })]);
      }

      if (this.error && this.showError) {
        return h("div", {
          "class": bem('error')
        }, [this.slots('error') || h(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], {
          "attrs": {
            "name": "warning-o",
            "size": "22"
          }
        })]);
      }
    },
    renderImage: function renderImage() {
      var h = this.$createElement;
      var imgData = {
        class: bem('img'),
        attrs: {
          alt: this.alt
        },
        style: {
          objectFit: this.fit
        }
      };

      if (this.error) {
        return;
      }

      if (this.lazyLoad) {
        return h("img", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
          "ref": "image",
          "directives": [{
            name: "lazy",
            value: this.src
          }]
        }, imgData]));
      }

      return h("img", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
        "attrs": {
          "src": this.src
        },
        "on": {
          "load": this.onLoad,
          "error": this.onError
        }
      }, imgData]));
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem({
        round: this.round
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [this.renderImage(), this.renderPlaceholder()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/index-anchor/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('index-anchor'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_relation__["a" /* ChildrenMixin */])('vanIndexBar', {
    indexKey: 'childrenIndex'
  })],
  props: {
    index: [Number, String]
  },
  data: function data() {
    return {
      top: 0,
      active: false
    };
  },
  computed: {
    sticky: function sticky() {
      return this.active && this.parent.sticky;
    },
    anchorStyle: function anchorStyle() {
      if (this.sticky) {
        return {
          transform: "translate3d(0, " + this.top + "px, 0)",
          color: this.parent.highlightColor,
          zIndex: "" + this.parent.zIndex
        };
      }
    }
  },
  mounted: function mounted() {
    this.height = this.$el.offsetHeight;
  },
  methods: {
    scrollIntoView: function scrollIntoView() {
      this.$el.scrollIntoView();
    }
  },
  render: function render(h) {
    var sticky = this.sticky;
    return h("div", {
      "style": {
        height: sticky ? this.height + "px" : null
      }
    }, [h("div", {
      "style": this.anchorStyle,
      "class": [bem({
        sticky: sticky
      }), {
        'van-hairline--bottom': sticky
      }]
    }, [this.slots('default') || this.index])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/index-bar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_touch__ = __webpack_require__("./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_bind_event__ = __webpack_require__("./node_modules/vant/es/mixins/bind-event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_color__ = __webpack_require__("./node_modules/vant/es/utils/color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_dom_scroll__ = __webpack_require__("./node_modules/vant/es/utils/dom/scroll.js");







var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('index-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_touch__["a" /* TouchMixin */], Object(__WEBPACK_IMPORTED_MODULE_2__mixins_relation__["b" /* ParentMixin */])('vanIndexBar'), Object(__WEBPACK_IMPORTED_MODULE_3__mixins_bind_event__["a" /* BindEventMixin */])(function (bind) {
    if (!this.scroller) {
      this.scroller = Object(__WEBPACK_IMPORTED_MODULE_5__utils_dom_scroll__["c" /* getScrollEventTarget */])(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll);
  })],
  props: {
    sticky: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    },
    highlightColor: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_4__utils_color__["d" /* GREEN */]
    },
    stickyOffsetTop: {
      type: Number,
      default: 0
    },
    indexList: {
      type: Array,
      default: function _default() {
        var indexList = [];
        var charCodeOfA = 'A'.charCodeAt(0);

        for (var i = 0; i < 26; i++) {
          indexList.push(String.fromCharCode(charCodeOfA + i));
        }

        return indexList;
      }
    }
  },
  data: function data() {
    return {
      activeAnchorIndex: null
    };
  },
  computed: {
    highlightStyle: function highlightStyle() {
      var highlightColor = this.highlightColor;

      if (highlightColor) {
        /* istanbul ignore else */
        return {
          color: highlightColor
        };
      }
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this = this;

      var scrollTop;

      if (this.scroller === window || this.scroller === document.body) {
        scrollTop = Object(__WEBPACK_IMPORTED_MODULE_5__utils_dom_scroll__["d" /* getScrollTop */])(this.scroller);
      } else {
        // see: https://github.com/youzan/vant/issues/3774
        scrollTop = 0;
      }

      var rects = this.children.map(function (item) {
        return {
          height: item.height,
          top: Object(__WEBPACK_IMPORTED_MODULE_5__utils_dom_scroll__["a" /* getElementTop */])(item.$el)
        };
      });
      var active = this.getActiveAnchorIndex(scrollTop, rects);
      this.activeAnchorIndex = this.indexList[active];

      if (this.sticky) {
        this.children.forEach(function (item, index) {
          if (index === active) {
            item.active = true;
            item.top = Math.max(_this.stickyOffsetTop, rects[index].top - scrollTop);
          } else if (index === active - 1) {
            var activeItemTop = rects[active].top - scrollTop;
            item.active = activeItemTop > 0;
            item.top = activeItemTop - item.height;
          } else {
            item.active = false;
          }
        });
      }
    },
    getActiveAnchorIndex: function getActiveAnchorIndex(scrollTop, rects) {
      for (var i = this.children.length - 1; i >= 0; i--) {
        var prevHeight = i > 0 ? rects[i - 1].height : 0;

        if (scrollTop + prevHeight + this.stickyOffsetTop >= rects[i].top) {
          return i;
        }
      }

      return -1;
    },
    onClick: function onClick(event) {
      this.scrollToElement(event.target);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);

      if (this.direction === 'vertical') {
        /* istanbul ignore else */
        if (event.cancelable) {
          event.preventDefault();
        }

        var _event$touches$ = event.touches[0],
            clientX = _event$touches$.clientX,
            clientY = _event$touches$.clientY;
        var target = document.elementFromPoint(clientX, clientY);

        if (target) {
          var index = target.dataset.index;
          /* istanbul ignore else */

          if (this.touchActiveIndex !== index) {
            this.touchActiveIndex = index;
            this.scrollToElement(target);
          }
        }
      }
    },
    scrollToElement: function scrollToElement(element, setActive) {
      var index = element.dataset.index;

      if (!index) {
        return;
      }

      var match = this.children.filter(function (item) {
        return String(item.index) === index;
      });

      if (match[0]) {
        match[0].scrollIntoView();

        if (this.stickyOffsetTop) {
          Object(__WEBPACK_IMPORTED_MODULE_5__utils_dom_scroll__["e" /* setRootScrollTop */])(Object(__WEBPACK_IMPORTED_MODULE_5__utils_dom_scroll__["b" /* getRootScrollTop */])() - this.stickyOffsetTop);
        }

        this.$emit('select', match[0].index);
      }
    },
    onTouchEnd: function onTouchEnd() {
      this.active = null;
    }
  },
  render: function render(h) {
    var _this2 = this;

    var Indexes = this.indexList.map(function (index) {
      var active = index === _this2.activeAnchorIndex;
      return h("span", {
        "class": bem('index', {
          active: active
        }),
        "style": active ? _this2.highlightStyle : null,
        "attrs": {
          "data-index": index
        }
      }, [index]);
    });
    return h("div", {
      "class": bem()
    }, [h("div", {
      "class": bem('sidebar'),
      "style": {
        zIndex: this.zIndex
      },
      "on": {
        "click": this.onClick,
        "touchstart": this.touchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [Indexes]), this.slots('default')]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export install */
/* unused harmony export version */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action_sheet__ = __webpack_require__("./node_modules/vant/es/action-sheet/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address_edit__ = __webpack_require__("./node_modules/vant/es/address-edit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_list__ = __webpack_require__("./node_modules/vant/es/address-list/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area__ = __webpack_require__("./node_modules/vant/es/area/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button__ = __webpack_require__("./node_modules/vant/es/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card__ = __webpack_require__("./node_modules/vant/es/card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cell__ = __webpack_require__("./node_modules/vant/es/cell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cell_group__ = __webpack_require__("./node_modules/vant/es/cell-group/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkbox__ = __webpack_require__("./node_modules/vant/es/checkbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__checkbox_group__ = __webpack_require__("./node_modules/vant/es/checkbox-group/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__circle__ = __webpack_require__("./node_modules/vant/es/circle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__col__ = __webpack_require__("./node_modules/vant/es/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__collapse__ = __webpack_require__("./node_modules/vant/es/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__collapse_item__ = __webpack_require__("./node_modules/vant/es/collapse-item/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_card__ = __webpack_require__("./node_modules/vant/es/contact-card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_edit__ = __webpack_require__("./node_modules/vant/es/contact-edit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_list__ = __webpack_require__("./node_modules/vant/es/contact-list/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__count_down__ = __webpack_require__("./node_modules/vant/es/count-down/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__coupon__ = __webpack_require__("./node_modules/vant/es/coupon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__coupon_cell__ = __webpack_require__("./node_modules/vant/es/coupon-cell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__coupon_list__ = __webpack_require__("./node_modules/vant/es/coupon-list/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__datetime_picker__ = __webpack_require__("./node_modules/vant/es/datetime-picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dialog__ = __webpack_require__("./node_modules/vant/es/dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__divider__ = __webpack_require__("./node_modules/vant/es/divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dropdown_item__ = __webpack_require__("./node_modules/vant/es/dropdown-item/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dropdown_menu__ = __webpack_require__("./node_modules/vant/es/dropdown-menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__field__ = __webpack_require__("./node_modules/vant/es/field/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__goods_action__ = __webpack_require__("./node_modules/vant/es/goods-action/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__goods_action_button__ = __webpack_require__("./node_modules/vant/es/goods-action-button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__goods_action_icon__ = __webpack_require__("./node_modules/vant/es/goods-action-icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__grid__ = __webpack_require__("./node_modules/vant/es/grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__grid_item__ = __webpack_require__("./node_modules/vant/es/grid-item/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__image__ = __webpack_require__("./node_modules/vant/es/image/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__image_preview__ = __webpack_require__("./node_modules/vant/es/image-preview/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__index_anchor__ = __webpack_require__("./node_modules/vant/es/index-anchor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__index_bar__ = __webpack_require__("./node_modules/vant/es/index-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__info__ = __webpack_require__("./node_modules/vant/es/info/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__lazyload__ = __webpack_require__("./node_modules/vant/es/lazyload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__list__ = __webpack_require__("./node_modules/vant/es/list/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__loading__ = __webpack_require__("./node_modules/vant/es/loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__locale__ = __webpack_require__("./node_modules/vant/es/locale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__nav_bar__ = __webpack_require__("./node_modules/vant/es/nav-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__notice_bar__ = __webpack_require__("./node_modules/vant/es/notice-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__notify__ = __webpack_require__("./node_modules/vant/es/notify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__number_keyboard__ = __webpack_require__("./node_modules/vant/es/number-keyboard/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__overlay__ = __webpack_require__("./node_modules/vant/es/overlay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pagination__ = __webpack_require__("./node_modules/vant/es/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__panel__ = __webpack_require__("./node_modules/vant/es/panel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__password_input__ = __webpack_require__("./node_modules/vant/es/password-input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__picker__ = __webpack_require__("./node_modules/vant/es/picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__popup__ = __webpack_require__("./node_modules/vant/es/popup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__progress__ = __webpack_require__("./node_modules/vant/es/progress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pull_refresh__ = __webpack_require__("./node_modules/vant/es/pull-refresh/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__radio__ = __webpack_require__("./node_modules/vant/es/radio/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__radio_group__ = __webpack_require__("./node_modules/vant/es/radio-group/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__rate__ = __webpack_require__("./node_modules/vant/es/rate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__row__ = __webpack_require__("./node_modules/vant/es/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__search__ = __webpack_require__("./node_modules/vant/es/search/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__sidebar__ = __webpack_require__("./node_modules/vant/es/sidebar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__sidebar_item__ = __webpack_require__("./node_modules/vant/es/sidebar-item/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__skeleton__ = __webpack_require__("./node_modules/vant/es/skeleton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__sku__ = __webpack_require__("./node_modules/vant/es/sku/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__slider__ = __webpack_require__("./node_modules/vant/es/slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__step__ = __webpack_require__("./node_modules/vant/es/step/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__stepper__ = __webpack_require__("./node_modules/vant/es/stepper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__steps__ = __webpack_require__("./node_modules/vant/es/steps/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__sticky__ = __webpack_require__("./node_modules/vant/es/sticky/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__submit_bar__ = __webpack_require__("./node_modules/vant/es/submit-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__swipe__ = __webpack_require__("./node_modules/vant/es/swipe/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__swipe_cell__ = __webpack_require__("./node_modules/vant/es/swipe-cell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__swipe_item__ = __webpack_require__("./node_modules/vant/es/swipe-item/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__switch__ = __webpack_require__("./node_modules/vant/es/switch/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__switch_cell__ = __webpack_require__("./node_modules/vant/es/switch-cell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__tab__ = __webpack_require__("./node_modules/vant/es/tab/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__tabbar__ = __webpack_require__("./node_modules/vant/es/tabbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__tabbar_item__ = __webpack_require__("./node_modules/vant/es/tabbar-item/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__tabs__ = __webpack_require__("./node_modules/vant/es/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__tag__ = __webpack_require__("./node_modules/vant/es/tag/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__toast__ = __webpack_require__("./node_modules/vant/es/toast/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__tree_select__ = __webpack_require__("./node_modules/vant/es/tree-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__uploader__ = __webpack_require__("./node_modules/vant/es/uploader/index.js");
/* unused harmony reexport ActionSheet */
/* unused harmony reexport AddressEdit */
/* unused harmony reexport AddressList */
/* unused harmony reexport Area */
/* unused harmony reexport Button */
/* unused harmony reexport Card */
/* unused harmony reexport Cell */
/* unused harmony reexport CellGroup */
/* unused harmony reexport Checkbox */
/* unused harmony reexport CheckboxGroup */
/* unused harmony reexport Circle */
/* unused harmony reexport Col */
/* unused harmony reexport Collapse */
/* unused harmony reexport CollapseItem */
/* unused harmony reexport ContactCard */
/* unused harmony reexport ContactEdit */
/* unused harmony reexport ContactList */
/* unused harmony reexport CountDown */
/* unused harmony reexport Coupon */
/* unused harmony reexport CouponCell */
/* unused harmony reexport CouponList */
/* unused harmony reexport DatetimePicker */
/* unused harmony reexport Dialog */
/* unused harmony reexport Divider */
/* unused harmony reexport DropdownItem */
/* unused harmony reexport DropdownMenu */
/* unused harmony reexport Field */
/* unused harmony reexport GoodsAction */
/* unused harmony reexport GoodsActionButton */
/* unused harmony reexport GoodsActionIcon */
/* unused harmony reexport Grid */
/* unused harmony reexport GridItem */
/* unused harmony reexport Icon */
/* unused harmony reexport Image */
/* unused harmony reexport ImagePreview */
/* unused harmony reexport IndexAnchor */
/* unused harmony reexport IndexBar */
/* unused harmony reexport Info */
/* unused harmony reexport Lazyload */
/* unused harmony reexport List */
/* unused harmony reexport Loading */
/* unused harmony reexport Locale */
/* unused harmony reexport NavBar */
/* unused harmony reexport NoticeBar */
/* unused harmony reexport Notify */
/* unused harmony reexport NumberKeyboard */
/* unused harmony reexport Overlay */
/* unused harmony reexport Pagination */
/* unused harmony reexport Panel */
/* unused harmony reexport PasswordInput */
/* unused harmony reexport Picker */
/* unused harmony reexport Popup */
/* unused harmony reexport Progress */
/* unused harmony reexport PullRefresh */
/* unused harmony reexport Radio */
/* unused harmony reexport RadioGroup */
/* unused harmony reexport Rate */
/* unused harmony reexport Row */
/* unused harmony reexport Search */
/* unused harmony reexport Sidebar */
/* unused harmony reexport SidebarItem */
/* unused harmony reexport Skeleton */
/* unused harmony reexport Sku */
/* unused harmony reexport Slider */
/* unused harmony reexport Step */
/* unused harmony reexport Stepper */
/* unused harmony reexport Steps */
/* unused harmony reexport Sticky */
/* unused harmony reexport SubmitBar */
/* unused harmony reexport Swipe */
/* unused harmony reexport SwipeCell */
/* unused harmony reexport SwipeItem */
/* unused harmony reexport Switch */
/* unused harmony reexport SwitchCell */
/* unused harmony reexport Tab */
/* unused harmony reexport Tabbar */
/* unused harmony reexport TabbarItem */
/* unused harmony reexport Tabs */
/* unused harmony reexport Tag */
/* unused harmony reexport Toast */
/* unused harmony reexport TreeSelect */
/* unused harmony reexport Uploader */
/* eslint-disable */
// This file is auto gererated by build/build-entry.js


















































































var version = '2.0.9';
var components = [__WEBPACK_IMPORTED_MODULE_0__action_sheet__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__address_edit__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__address_list__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__area__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__button__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__card__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__cell__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__cell_group__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__checkbox__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__checkbox_group__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__circle__["a" /* default */], __WEBPACK_IMPORTED_MODULE_11__col__["a" /* default */], __WEBPACK_IMPORTED_MODULE_12__collapse__["a" /* default */], __WEBPACK_IMPORTED_MODULE_13__collapse_item__["a" /* default */], __WEBPACK_IMPORTED_MODULE_14__contact_card__["a" /* default */], __WEBPACK_IMPORTED_MODULE_15__contact_edit__["a" /* default */], __WEBPACK_IMPORTED_MODULE_16__contact_list__["a" /* default */], __WEBPACK_IMPORTED_MODULE_17__count_down__["a" /* default */], __WEBPACK_IMPORTED_MODULE_18__coupon__["a" /* default */], __WEBPACK_IMPORTED_MODULE_19__coupon_cell__["a" /* default */], __WEBPACK_IMPORTED_MODULE_20__coupon_list__["a" /* default */], __WEBPACK_IMPORTED_MODULE_21__datetime_picker__["a" /* default */], __WEBPACK_IMPORTED_MODULE_22__dialog__["a" /* default */], __WEBPACK_IMPORTED_MODULE_23__divider__["a" /* default */], __WEBPACK_IMPORTED_MODULE_24__dropdown_item__["a" /* default */], __WEBPACK_IMPORTED_MODULE_25__dropdown_menu__["a" /* default */], __WEBPACK_IMPORTED_MODULE_26__field__["a" /* default */], __WEBPACK_IMPORTED_MODULE_27__goods_action__["a" /* default */], __WEBPACK_IMPORTED_MODULE_28__goods_action_button__["a" /* default */], __WEBPACK_IMPORTED_MODULE_29__goods_action_icon__["a" /* default */], __WEBPACK_IMPORTED_MODULE_30__grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_31__grid_item__["a" /* default */], __WEBPACK_IMPORTED_MODULE_32__icon__["a" /* default */], __WEBPACK_IMPORTED_MODULE_33__image__["a" /* default */], __WEBPACK_IMPORTED_MODULE_34__image_preview__["a" /* default */], __WEBPACK_IMPORTED_MODULE_35__index_anchor__["a" /* default */], __WEBPACK_IMPORTED_MODULE_36__index_bar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_37__info__["a" /* default */], __WEBPACK_IMPORTED_MODULE_39__list__["a" /* default */], __WEBPACK_IMPORTED_MODULE_40__loading__["a" /* default */], __WEBPACK_IMPORTED_MODULE_42__nav_bar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_43__notice_bar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_44__notify__["a" /* default */], __WEBPACK_IMPORTED_MODULE_45__number_keyboard__["a" /* default */], __WEBPACK_IMPORTED_MODULE_46__overlay__["a" /* default */], __WEBPACK_IMPORTED_MODULE_47__pagination__["a" /* default */], __WEBPACK_IMPORTED_MODULE_48__panel__["a" /* default */], __WEBPACK_IMPORTED_MODULE_49__password_input__["a" /* default */], __WEBPACK_IMPORTED_MODULE_50__picker__["a" /* default */], __WEBPACK_IMPORTED_MODULE_51__popup__["a" /* default */], __WEBPACK_IMPORTED_MODULE_52__progress__["a" /* default */], __WEBPACK_IMPORTED_MODULE_53__pull_refresh__["a" /* default */], __WEBPACK_IMPORTED_MODULE_54__radio__["a" /* default */], __WEBPACK_IMPORTED_MODULE_55__radio_group__["a" /* default */], __WEBPACK_IMPORTED_MODULE_56__rate__["a" /* default */], __WEBPACK_IMPORTED_MODULE_57__row__["a" /* default */], __WEBPACK_IMPORTED_MODULE_58__search__["a" /* default */], __WEBPACK_IMPORTED_MODULE_59__sidebar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_60__sidebar_item__["a" /* default */], __WEBPACK_IMPORTED_MODULE_61__skeleton__["a" /* default */], __WEBPACK_IMPORTED_MODULE_62__sku__["a" /* default */], __WEBPACK_IMPORTED_MODULE_63__slider__["a" /* default */], __WEBPACK_IMPORTED_MODULE_64__step__["a" /* default */], __WEBPACK_IMPORTED_MODULE_65__stepper__["a" /* default */], __WEBPACK_IMPORTED_MODULE_66__steps__["a" /* default */], __WEBPACK_IMPORTED_MODULE_67__sticky__["a" /* default */], __WEBPACK_IMPORTED_MODULE_68__submit_bar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_69__swipe__["a" /* default */], __WEBPACK_IMPORTED_MODULE_70__swipe_cell__["a" /* default */], __WEBPACK_IMPORTED_MODULE_71__swipe_item__["a" /* default */], __WEBPACK_IMPORTED_MODULE_72__switch__["a" /* default */], __WEBPACK_IMPORTED_MODULE_73__switch_cell__["a" /* default */], __WEBPACK_IMPORTED_MODULE_74__tab__["a" /* default */], __WEBPACK_IMPORTED_MODULE_75__tabbar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_76__tabbar_item__["a" /* default */], __WEBPACK_IMPORTED_MODULE_77__tabs__["a" /* default */], __WEBPACK_IMPORTED_MODULE_78__tag__["a" /* default */], __WEBPACK_IMPORTED_MODULE_79__toast__["a" /* default */], __WEBPACK_IMPORTED_MODULE_80__tree_select__["a" /* default */], __WEBPACK_IMPORTED_MODULE_81__uploader__["a" /* default */]];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


/* harmony default export */ __webpack_exports__["a"] = ({
  install: install,
  version: version
});

/***/ }),

/***/ "./node_modules/vant/es/info/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");


 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('info'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Info(h, props, slots, ctx) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* isDef */])(props.info) || props.info === '') {
    return;
  }

  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem()
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx, true)]), [props.info]);
}

Info.props = {
  info: [Number, String]
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Info));

/***/ }),

/***/ "./node_modules/vant/es/lazyload/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_lazyload__ = __webpack_require__("./node_modules/vue-lazyload/vue-lazyload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_lazyload__);

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_vue_lazyload___default.a);

/***/ }),

/***/ "./node_modules/vant/es/list/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading__ = __webpack_require__("./node_modules/vant/es/loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_bind_event__ = __webpack_require__("./node_modules/vant/es/mixins/bind-event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_dom_scroll__ = __webpack_require__("./node_modules/vant/es/utils/dom/scroll.js");





var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_2__mixins_bind_event__["a" /* BindEventMixin */])(function (bind) {
    if (!this.scroller) {
      this.scroller = Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom_scroll__["c" /* getScrollEventTarget */])(this.$el);
    }

    bind(this.scroller, 'scroll', this.check);
  })],
  model: {
    prop: 'loading'
  },
  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    errorText: String,
    loadingText: String,
    finishedText: String,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    direction: {
      type: String,
      default: 'down'
    }
  },
  mounted: function mounted() {
    if (this.immediateCheck) {
      this.$nextTick(this.check);
    }
  },
  watch: {
    loading: function loading() {
      this.$nextTick(this.check);
    },
    finished: function finished() {
      this.$nextTick(this.check);
    }
  },
  methods: {
    check: function check() {
      if (this.loading || this.finished || this.error) {
        return;
      }

      var el = this.$el,
          scroller = this.scroller,
          offset = this.offset,
          direction = this.direction;
      var scrollerRect;

      if (scroller.getBoundingClientRect) {
        scrollerRect = scroller.getBoundingClientRect();
      } else {
        scrollerRect = {
          top: 0,
          bottom: scroller.innerHeight
        };
      }

      var scrollerHeight = scrollerRect.bottom - scrollerRect.top;
      /* istanbul ignore next */

      if (!scrollerHeight || window.getComputedStyle(el).display === 'none' || el.offsetParent === null) {
        return false;
      }

      var isReachEdge = false;
      var placeholderRect = this.$refs.placeholder.getBoundingClientRect();

      if (direction === 'up') {
        isReachEdge = placeholderRect.top - scrollerRect.top <= offset;
      } else {
        isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;
      }

      if (isReachEdge) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },
    clickErrorText: function clickErrorText() {
      this.$emit('update:error', false);
      this.$nextTick(this.check);
    }
  },
  render: function render(h) {
    var Placeholder = h("div", {
      "ref": "placeholder",
      "class": bem('placeholder')
    });
    return h("div", {
      "class": bem(),
      "attrs": {
        "role": "feed",
        "aria-busy": this.loading
      }
    }, [this.direction === 'down' ? this.slots() : Placeholder, this.loading && h("div", {
      "class": bem('loading'),
      "key": "loading"
    }, [this.slots('loading') || h(__WEBPACK_IMPORTED_MODULE_1__loading__["a" /* default */], {
      "attrs": {
        "size": "16"
      }
    }, [this.loadingText || t('loading')])]), this.finished && this.finishedText && h("div", {
      "class": bem('finished-text')
    }, [this.finishedText]), this.error && this.errorText && h("div", {
      "on": {
        "click": this.clickErrorText
      },
      "class": bem('error-text')
    }, [this.errorText]), this.direction === 'up' ? this.slots() : Placeholder]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/loading/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_color__ = __webpack_require__("./node_modules/vant/es/utils/color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");



 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('loading'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function LoadingIcon(h, props) {
  if (props.type === 'spinner') {
    var Spin = [];

    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }

    return Spin;
  }

  return h("svg", {
    "class": bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50"
    }
  }, [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
}

function LoadingText(h, props, slots) {
  if (slots.default) {
    var style = props.textSize && {
      fontSize: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(props.textSize)
    };
    return h("span", {
      "class": bem('text'),
      "style": style
    }, [slots.default()]);
  }
}

function Loading(h, props, slots, ctx) {
  var color = props.color,
      size = props.size,
      type = props.type;
  var style = {
    color: color
  };

  if (size) {
    var iconSize = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(size);
    style.width = iconSize;
    style.height = iconSize;
  }

  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem([type, {
      vertical: props.vertical
    }])
  }, Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["b" /* inherit */])(ctx, true)]), [h("span", {
    "class": bem('spinner', type),
    "style": style
  }, [LoadingIcon(h, props)]), LoadingText(h, props, slots)]);
}

Loading.props = {
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  type: {
    type: String,
    default: 'circular'
  },
  color: {
    type: String,
    default: __WEBPACK_IMPORTED_MODULE_2__utils_color__["b" /* GRAY */]
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Loading));

/***/ }),

/***/ "./node_modules/vant/es/locale/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_deep_assign__ = __webpack_require__("./node_modules/vant/es/utils/deep-assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_zh_CN__ = __webpack_require__("./node_modules/vant/es/locale/lang/zh-CN.js");



var proto = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype;
var defineReactive = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': __WEBPACK_IMPORTED_MODULE_2__lang_zh_CN__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = ({
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    Object(__WEBPACK_IMPORTED_MODULE_1__utils_deep_assign__["a" /* deepAssign */])(proto.$vantMessages, messages);
  }
});

/***/ }),

/***/ "./node_modules/vant/es/locale/lang/zh-CN.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
});

/***/ }),

/***/ "./node_modules/vant/es/mixins/bind-event.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = BindEventMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/**
 * Bind event when mounted or activated
 */

function BindEventMixin(handler) {
  function bind() {
    if (!this.binded) {
      handler.call(this, __WEBPACK_IMPORTED_MODULE_0__utils_dom_event__["b" /* on */], true);
      this.binded = true;
    }
  }

  function unbind() {
    if (this.binded) {
      handler.call(this, __WEBPACK_IMPORTED_MODULE_0__utils_dom_event__["a" /* off */], false);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}

/***/ }),

/***/ "./node_modules/vant/es/mixins/checkbox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/**
 * Common part of Checkbox & Radio
 */



var CheckboxMixin = function CheckboxMixin(_ref) {
  var parent = _ref.parent,
      bem = _ref.bem,
      role = _ref.role;
  return {
    mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__relation__["a" /* ChildrenMixin */])(parent)],
    props: {
      name: null,
      value: null,
      disabled: Boolean,
      iconSize: [Number, String],
      checkedColor: String,
      labelPosition: String,
      labelDisabled: Boolean,
      shape: {
        type: String,
        default: 'round'
      }
    },
    computed: {
      isDisabled: function isDisabled() {
        return this.parent && this.parent.disabled || this.disabled;
      },
      iconStyle: function iconStyle() {
        var checkedColor = this.checkedColor;

        if (checkedColor && this.checked && !this.isDisabled) {
          return {
            borderColor: checkedColor,
            backgroundColor: checkedColor
          };
        }
      },
      tabindex: function tabindex() {
        if (this.isDisabled || role === 'radio' && !this.checked) {
          return -1;
        }

        return 0;
      }
    },
    render: function render(h) {
      var _this = this;

      var slots = this.slots,
          checked = this.checked;
      var CheckIcon = slots('icon', {
        checked: checked
      }) || h(__WEBPACK_IMPORTED_MODULE_0__icon__["a" /* default */], {
        "attrs": {
          "name": "success"
        },
        "style": this.iconStyle
      });
      var Label = slots() && h("span", {
        "class": bem('label', [this.labelPosition, {
          disabled: this.isDisabled
        }]),
        "on": {
          "click": this.onClickLabel
        }
      }, [slots()]);
      var Children = [h("div", {
        "class": bem('icon', [this.shape, {
          disabled: this.isDisabled,
          checked: checked
        }]),
        "style": {
          fontSize: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* addUnit */])(this.iconSize)
        },
        "on": {
          "click": this.onClickIcon
        }
      }, [CheckIcon])];

      if (this.labelPosition === 'left') {
        Children.unshift(Label);
      } else {
        Children.push(Label);
      }

      return h("div", {
        "attrs": {
          "role": role,
          "tabindex": this.tabindex,
          "aria-checked": String(this.checked)
        },
        "class": bem(),
        "on": {
          "click": function click(event) {
            _this.$emit('click', event);
          }
        }
      }, [Children]);
    }
  };
};

/***/ }),

/***/ "./node_modules/vant/es/mixins/click-outside.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/**
 * Listen to click outside event
 */


var ClickOutsideMixin = function ClickOutsideMixin(config) {
  return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
    props: {
      closeOnClickOutside: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      var _this = this;

      var clickOutsideHandler = function clickOutsideHandler(event) {
        if (_this.closeOnClickOutside && !_this.$el.contains(event.target)) {
          _this[config.method]();
        }
      };

      return {
        clickOutsideHandler: clickOutsideHandler
      };
    },
    mounted: function mounted() {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom_event__["b" /* on */])(document, config.event, this.clickOutsideHandler);
    },
    beforeDestroy: function beforeDestroy() {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom_event__["a" /* off */])(document, config.event, this.clickOutsideHandler);
    }
  });
};

/***/ }),

/***/ "./node_modules/vant/es/mixins/close-on-popstate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseOnPopstateMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bind_event__ = __webpack_require__("./node_modules/vant/es/mixins/bind-event.js");



var CloseOnPopstateMixin = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_2__bind_event__["a" /* BindEventMixin */])(function (bind, isBind) {
    this.handlePopstate(isBind && this.closeOnPopstate);
  })],
  props: {
    closeOnPopstate: Boolean
  },
  data: function data() {
    return {
      bindStatus: false
    };
  },
  watch: {
    closeOnPopstate: function closeOnPopstate(val) {
      this.handlePopstate(val);
    }
  },
  methods: {
    handlePopstate: function handlePopstate(bind) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        var action = bind ? __WEBPACK_IMPORTED_MODULE_1__utils_dom_event__["b" /* on */] : __WEBPACK_IMPORTED_MODULE_1__utils_dom_event__["a" /* off */];
        action(window, 'popstate', this.close);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vant/es/mixins/popup/context.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return context; });
var context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],

  get top() {
    return this.stack[this.stack.length - 1];
  }

};

/***/ }),

/***/ "./node_modules/vant/es/mixins/popup/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__context__ = __webpack_require__("./node_modules/vant/es/mixins/popup/context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__touch__ = __webpack_require__("./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portal__ = __webpack_require__("./node_modules/vant/es/mixins/portal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overlay__ = __webpack_require__("./node_modules/vant/es/mixins/popup/overlay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_dom_scroll__ = __webpack_require__("./node_modules/vant/es/utils/dom/scroll.js");






var PopupMixin = {
  mixins: [__WEBPACK_IMPORTED_MODULE_1__touch__["a" /* TouchMixin */], Object(__WEBPACK_IMPORTED_MODULE_2__portal__["a" /* PortalMixin */])({
    afterPortal: function afterPortal() {
      if (this.overlay) {
        Object(__WEBPACK_IMPORTED_MODULE_4__overlay__["c" /* updateOverlay */])();
      }
    }
  })],
  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [Number, String],
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    },
    // whether to lazy render
    lazyRender: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      inited: this.value
    };
  },
  computed: {
    shouldRender: function shouldRender() {
      return this.inited || !this.lazyRender;
    }
  },
  watch: {
    value: function value(val) {
      var type = val ? 'open' : 'close';
      this.inited = this.inited || this.value;
      this[type]();
      this.$emit(type);
    },
    overlay: function overlay() {
      this.renderOverlay();
    }
  },
  mounted: function mounted() {
    if (this.value) {
      this.open();
    }
  },

  /* istanbul ignore next */
  activated: function activated() {
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();

    if (this.getContainer && this.$parent && this.$parent.$el) {
      this.$parent.$el.appendChild(this.$el);
    }
  },

  /* istanbul ignore next */
  deactivated: function deactivated() {
    this.close();
  },
  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      } // cover default zIndex


      if (this.zIndex !== undefined) {
        __WEBPACK_IMPORTED_MODULE_0__context__["a" /* context */].zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom_event__["b" /* on */])(document, 'touchstart', this.touchStart);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom_event__["b" /* on */])(document, 'touchmove', this.onTouchMove);

        if (!__WEBPACK_IMPORTED_MODULE_0__context__["a" /* context */].lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }

        __WEBPACK_IMPORTED_MODULE_0__context__["a" /* context */].lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        __WEBPACK_IMPORTED_MODULE_0__context__["a" /* context */].lockCount--;
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom_event__["a" /* off */])(document, 'touchstart', this.touchStart);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom_event__["a" /* off */])(document, 'touchmove', this.onTouchMove);

        if (!__WEBPACK_IMPORTED_MODULE_0__context__["a" /* context */].lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      Object(__WEBPACK_IMPORTED_MODULE_4__overlay__["a" /* closeOverlay */])(this);
      this.$emit('input', false);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = Object(__WEBPACK_IMPORTED_MODULE_5__utils_dom_scroll__["c" /* getScrollEventTarget */])(event.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;
      var status = '11';
      /* istanbul ignore next */

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }
      /* istanbul ignore next */


      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom_event__["c" /* preventDefault */])(event, true);
      }
    },
    renderOverlay: function renderOverlay() {
      if (this.$isServer || !this.value) {
        return;
      }

      if (this.overlay) {
        Object(__WEBPACK_IMPORTED_MODULE_4__overlay__["b" /* openOverlay */])(this, {
          zIndex: __WEBPACK_IMPORTED_MODULE_0__context__["a" /* context */].zIndex++,
          duration: this.duration,
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_4__overlay__["a" /* closeOverlay */])(this);
      }

      this.updateZIndex();
    },
    updateZIndex: function updateZIndex() {
      var _this = this;

      this.$nextTick(function () {
        _this.$el.style.zIndex = __WEBPACK_IMPORTED_MODULE_0__context__["a" /* context */].zIndex++;
      });
    }
  }
};

/***/ }),

/***/ "./node_modules/vant/es/mixins/popup/overlay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = updateOverlay;
/* harmony export (immutable) */ __webpack_exports__["b"] = openOverlay;
/* harmony export (immutable) */ __webpack_exports__["a"] = closeOverlay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay__ = __webpack_require__("./node_modules/vant/es/overlay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__context__ = __webpack_require__("./node_modules/vant/es/mixins/popup/context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");




var defaultConfig = {
  className: '',
  customStyle: {}
};
var overlay; // close popup when click overlay && closeOnClickOverlay is true

function onClickOverlay() {
  if (__WEBPACK_IMPORTED_MODULE_2__context__["a" /* context */].top) {
    var vm = __WEBPACK_IMPORTED_MODULE_2__context__["a" /* context */].top.vm;
    vm.$emit('click-overlay');

    if (vm.closeOnClickOverlay) {
      if (vm.onClickOverlay) {
        vm.onClickOverlay();
      } else {
        vm.close();
      }
    }
  }
}

function updateOverlay() {
  if (!overlay) {
    overlay = Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["c" /* mount */])(__WEBPACK_IMPORTED_MODULE_1__overlay__["a" /* default */], {
      on: {
        click: onClickOverlay
      }
    });
  }

  if (__WEBPACK_IMPORTED_MODULE_2__context__["a" /* context */].top) {
    var _context$top = __WEBPACK_IMPORTED_MODULE_2__context__["a" /* context */].top,
        vm = _context$top.vm,
        config = _context$top.config;
    var el = vm.$el;

    if (el && el.parentNode) {
      el.parentNode.insertBefore(overlay.$el, el);
    } else {
      document.body.appendChild(overlay.$el);
    }

    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(overlay, defaultConfig, config, {
      show: true
    });
  } else {
    overlay.show = false;
  }
}
function openOverlay(vm, config) {
  if (!__WEBPACK_IMPORTED_MODULE_2__context__["a" /* context */].stack.some(function (item) {
    return item.vm === vm;
  })) {
    __WEBPACK_IMPORTED_MODULE_2__context__["a" /* context */].stack.push({
      vm: vm,
      config: config
    });
    updateOverlay();
  }
}
function closeOverlay(vm) {
  var stack = __WEBPACK_IMPORTED_MODULE_2__context__["a" /* context */].stack;

  if (stack.length) {
    if (__WEBPACK_IMPORTED_MODULE_2__context__["a" /* context */].top.vm === vm) {
      stack.pop();
      updateOverlay();
    } else {
      __WEBPACK_IMPORTED_MODULE_2__context__["a" /* context */].stack = stack.filter(function (item) {
        return item.vm !== vm;
      });
    }
  }
}

/***/ }),

/***/ "./node_modules/vant/es/mixins/portal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PortalMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

function PortalMixin(_ref) {
  var afterPortal = _ref.afterPortal;
  return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
    props: {
      getContainer: [String, Function]
    },
    watch: {
      getContainer: function getContainer() {
        this.portal();
      }
    },
    mounted: function mounted() {
      if (this.getContainer) {
        this.portal();
      }
    },
    methods: {
      portal: function portal() {
        var getContainer = this.getContainer;
        var container;

        if (getContainer) {
          container = getElement(getContainer);
        } else if (this.$parent) {
          container = this.$parent.$el;
        }

        if (container && container !== this.$el.parentNode) {
          container.appendChild(this.$el);
        }

        if (afterPortal) {
          afterPortal.call(this);
        }
      }
    }
  });
}

/***/ }),

/***/ "./node_modules/vant/es/mixins/relation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ChildrenMixin;
/* harmony export (immutable) */ __webpack_exports__["b"] = ParentMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

function ChildrenMixin(_parent, options) {
  var _inject, _computed;

  if (options === void 0) {
    options = {};
  }

  var indexKey = options.indexKey || 'index';
  return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
    inject: (_inject = {}, _inject[_parent] = {
      default: null
    }, _inject),
    computed: (_computed = {
      parent: function parent() {
        return this[_parent];
      }
    }, _computed[indexKey] = function () {
      this.bindRelation();
      return this.parent.children.indexOf(this);
    }, _computed),
    created: function created() {
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      var _this = this;

      if (this.parent) {
        this.parent.children = this.parent.children.filter(function (item) {
          return item !== _this;
        });
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        if (!this.parent) {
          return;
        }

        var children = this.parent.children;

        if (children.indexOf(this) === -1) {
          var vnodeIndex = this.parent.slots().indexOf(this.$vnode);

          if (vnodeIndex === -1) {
            children.push(this);
          } else {
            children.splice(vnodeIndex, 0, this);
          }
        }
      }
    }
  });
}
function ParentMixin(parent) {
  return {
    provide: function provide() {
      var _ref;

      return _ref = {}, _ref[parent] = this, _ref;
    },
    data: function data() {
      return {
        children: []
      };
    }
  };
}

/***/ }),

/***/ "./node_modules/vant/es/mixins/slots.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlotsMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */

var SlotsMixin = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
});

/***/ }),

/***/ "./node_modules/vant/es/mixins/touch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/vant/es/nav-bar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");



 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('nav-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function NavBar(h, props, slots, ctx) {
  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": [bem({
      fixed: props.fixed
    }), {
      'van-hairline--bottom': props.border
    }],
    "style": {
      zIndex: props.zIndex
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx)]), [h("div", {
    "class": bem('left'),
    "on": {
      "click": ctx.listeners['click-left'] || __WEBPACK_IMPORTED_MODULE_1__utils__["g" /* noop */]
    }
  }, [slots.left ? slots.left() : [props.leftArrow && h(__WEBPACK_IMPORTED_MODULE_3__icon__["a" /* default */], {
    "class": bem('arrow'),
    "attrs": {
      "name": "arrow-left"
    }
  }), props.leftText && h("span", {
    "class": bem('text')
  }, [props.leftText])]]), h("div", {
    "class": [bem('title'), 'van-ellipsis']
  }, [slots.title ? slots.title() : props.title]), h("div", {
    "class": bem('right'),
    "on": {
      "click": ctx.listeners['click-right'] || __WEBPACK_IMPORTED_MODULE_1__utils__["g" /* noop */]
    }
  }, [slots.right ? slots.right() : props.rightText && h("span", {
    "class": bem('text')
  }, [props.rightText])])]);
}

NavBar.props = {
  title: String,
  fixed: Boolean,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  border: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 1
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(NavBar));

/***/ }),

/***/ "./node_modules/vant/es/notice-bar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('notice-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    delay: {
      type: [Number, String],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },
  watch: {
    text: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          var _this$$refs = _this.$refs,
              wrap = _this$$refs.wrap,
              content = _this$$refs.content;

          if (!wrap || !content) {
            return;
          }

          var wrapWidth = wrap.getBoundingClientRect().width;
          var offsetWidth = content.getBoundingClientRect().width;

          if (_this.scrollable && offsetWidth > wrapWidth) {
            _this.wrapWidth = wrapWidth;
            _this.offsetWidth = offsetWidth;
            _this.duration = offsetWidth / _this.speed;
            _this.animationClass = bem('play');
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    onClickIcon: function onClickIcon(event) {
      if (this.mode === 'closeable') {
        this.showNoticeBar = false;
        this.$emit('close', event);
      }
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this2 = this;

      this.firstRound = false;
      this.$nextTick(function () {
        _this2.duration = (_this2.offsetWidth + _this2.wrapWidth) / _this2.speed;
        _this2.animationClass = bem('play--infinite');
      });
    }
  },
  render: function render(h) {
    var _this3 = this;

    var slots = this.slots,
        mode = this.mode,
        leftIcon = this.leftIcon,
        onClickIcon = this.onClickIcon;
    var barStyle = {
      color: this.color,
      background: this.background
    };
    var contentStyle = {
      paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (this.firstRound ? this.delay : 0) + 's',
      animationDuration: this.duration + 's'
    };

    function LeftIcon() {
      var slot = slots('left-icon');

      if (slot) {
        return slot;
      }

      if (leftIcon) {
        return h(__WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */], {
          "class": bem('left-icon'),
          "attrs": {
            "name": leftIcon
          }
        });
      }
    }

    function RightIcon() {
      var slot = slots('right-icon');

      if (slot) {
        return slot;
      }

      var iconName = mode === 'closeable' ? 'cross' : mode === 'link' ? 'arrow' : '';

      if (iconName) {
        return h(__WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */], {
          "class": bem('right-icon'),
          "attrs": {
            "name": iconName
          },
          "on": {
            "click": onClickIcon
          }
        });
      }
    }

    return h("div", {
      "attrs": {
        "role": "alert"
      },
      "directives": [{
        name: "show",
        value: this.showNoticeBar
      }],
      "class": bem({
        wrapable: this.wrapable
      }),
      "style": barStyle,
      "on": {
        "click": function click(event) {
          _this3.$emit('click', event);
        }
      }
    }, [LeftIcon(), h("div", {
      "ref": "wrap",
      "class": bem('wrap'),
      "attrs": {
        "role": "marquee"
      }
    }, [h("div", {
      "ref": "content",
      "class": [bem('content'), this.animationClass, {
        'van-ellipsis': !this.scrollable && !this.wrapable
      }],
      "style": contentStyle,
      "on": {
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [this.slots() || this.text])]), RightIcon()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/notify/Notify.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_color__ = __webpack_require__("./node_modules/vant/es/utils/color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_popup__ = __webpack_require__("./node_modules/vant/es/mixins/popup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popup__ = __webpack_require__("./node_modules/vant/es/popup/index.js");






 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* createNamespace */])('notify'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Notify(h, props, slots, ctx) {
  var style = {
    color: props.color,
    background: props.background
  };
  return h(__WEBPACK_IMPORTED_MODULE_6__popup__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default()([{
    "attrs": {
      "value": props.value,
      "position": "top",
      "overlay": false,
      "lockScroll": false
    },
    "style": style,
    "class": [bem(), props.className]
  }, Object(__WEBPACK_IMPORTED_MODULE_4__utils_functional__["b" /* inherit */])(ctx, true)]), [props.message]);
}

Notify.props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_5__mixins_popup__["a" /* PopupMixin */].props, {
  className: null,
  message: [Number, String],
  getContainer: [String, Function],
  color: {
    type: String,
    default: __WEBPACK_IMPORTED_MODULE_3__utils_color__["f" /* WHITE */]
  },
  background: {
    type: String,
    default: __WEBPACK_IMPORTED_MODULE_3__utils_color__["e" /* RED */]
  },
  duration: {
    type: Number,
    default: 3000
  }
});
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Notify));

/***/ }),

/***/ "./node_modules/vant/es/notify/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Notify__ = __webpack_require__("./node_modules/vant/es/notify/Notify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_color__ = __webpack_require__("./node_modules/vant/es/utils/color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");






var timer;
var instance;

function parseOptions(message) {
  return Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* isObj */])(message) ? message : {
    message: message
  };
}

function Notify(options) {
  /* istanbul ignore if */
  if (__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* isServer */]) {
    return;
  }

  if (!instance) {
    instance = Object(__WEBPACK_IMPORTED_MODULE_5__utils_functional__["c" /* mount */])(__WEBPACK_IMPORTED_MODULE_2__Notify__["a" /* default */], {
      on: {
        click: function click(event) {
          if (instance.onClick) {
            instance.onClick(event);
          }
        },
        close: function close() {
          if (instance.onClose) {
            instance.onClose();
          }
        },
        opened: function opened() {
          if (instance.onOpened) {
            instance.onOpened();
          }
        }
      }
    });
  }

  options = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, Notify.currentOptions, {}, parseOptions(options));

  Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(instance, options);

  clearTimeout(timer);

  if (options.duration && options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  return instance;
}

function defaultOptions() {
  return {
    value: true,
    message: '',
    color: __WEBPACK_IMPORTED_MODULE_3__utils_color__["f" /* WHITE */],
    background: __WEBPACK_IMPORTED_MODULE_3__utils_color__["e" /* RED */],
    duration: 3000,
    className: '',
    onClose: null,
    onClick: null,
    onOpened: null
  };
}

Notify.clear = function () {
  if (instance) {
    instance.value = false;
  }
};

Notify.currentOptions = defaultOptions();

Notify.setDefaultOptions = function (options) {
  Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = function () {
  Notify.currentOptions = defaultOptions();
};

Notify.install = function () {
  __WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2__Notify__["a" /* default */]);
};

__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.$notify = Notify;
/* harmony default export */ __webpack_exports__["a"] = (Notify);

/***/ }),

/***/ "./node_modules/vant/es/number-keyboard/Key.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");


var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('key'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    type: String,
    text: [Number, String],
    theme: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    className: function className() {
      var classNames = this.theme.slice(0);

      if (this.active) {
        classNames.push('active');
      }

      if (this.type) {
        classNames.push(this.type);
      }

      return bem(classNames);
    }
  },
  methods: {
    onFocus: function onFocus() {
      this.active = true;
    },
    onBlur: function onBlur(event) {
      this.active = false;
    },
    onClick: function onClick() {
      this.$emit('press', this.text, this.type);
    }
  },
  render: function render(h) {
    var onBlur = this.onBlur;
    return h("i", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": ['van-hairline', this.className],
      "on": {
        "click": this.onClick,
        "touchstart": this.onFocus,
        "touchmove": onBlur,
        "touchend": onBlur,
        "touchcancel": onBlur
      }
    }, [this.slots('default') || this.text]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/number-keyboard/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_bind_event__ = __webpack_require__("./node_modules/vant/es/mixins/bind-event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Key__ = __webpack_require__("./node_modules/vant/es/number-keyboard/Key.js");





var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('number-keyboard'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var CLOSE_KEY_THEME = ['blue', 'big'];
var DELETE_KEY_THEME = ['delete', 'big', 'gray'];
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_2__mixins_bind_event__["a" /* BindEventMixin */])(function (bind) {
    if (this.hideOnClickOutside) {
      bind(document.body, 'touchstart', this.onBlur);
    }
  })],
  model: {
    event: 'update:value'
  },
  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    deleteButtonText: String,
    safeAreaInsetBottom: Boolean,
    theme: {
      type: String,
      default: 'default'
    },
    value: {
      type: String,
      default: ''
    },
    extraKey: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },
  computed: {
    keys: function keys() {
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i
        });
      }

      switch (this.theme) {
        case 'default':
          keys.push({
            text: this.extraKey,
            theme: ['gray']
          }, {
            text: 0
          }, {
            text: this.deleteText,
            theme: ['gray'],
            type: 'delete'
          });
          break;

        case 'custom':
          keys.push({
            text: 0,
            theme: ['middle']
          }, {
            text: this.extraKey
          });
          break;
      }

      return keys;
    },
    deleteText: function deleteText() {
      return this.deleteButtonText || t('delete');
    }
  },
  methods: {
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    onClose: function onClose() {
      this.$emit('close');
      this.onBlur();
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPress: function onPress(text, type) {
      if (text === '') {
        return;
      }

      var value = this.value;

      if (type === 'delete') {
        this.$emit('delete');
        this.$emit('update:value', value.slice(0, value.length - 1));
      } else if (type === 'close') {
        this.onClose();
      } else if (value.length < this.maxlength) {
        this.$emit('input', text);
        this.$emit('update:value', value + text);
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var title = this.title,
        theme = this.theme,
        onPress = this.onPress,
        closeButtonText = this.closeButtonText;
    var titleLeftSlot = this.slots('title-left');
    var showTitleClose = closeButtonText && theme === 'default';
    var showTitle = title || showTitleClose || titleLeftSlot;
    var Title = showTitle && h("div", {
      "class": [bem('title'), 'van-hairline--top']
    }, [titleLeftSlot && h("span", {
      "class": bem('title-left')
    }, [titleLeftSlot]), title && h("span", [title]), showTitleClose && h("span", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": bem('close'),
      "on": {
        "click": this.onClose
      }
    }, [closeButtonText])]);
    var Keys = this.keys.map(function (key) {
      return h(__WEBPACK_IMPORTED_MODULE_3__Key__["a" /* default */], {
        "key": key.text,
        "attrs": {
          "text": key.text,
          "type": key.type,
          "theme": key.theme
        },
        "on": {
          "press": onPress
        }
      }, [key.type === 'delete' && _this.slots('delete')]);
    });
    var Sidebar = theme === 'custom' && h("div", {
      "class": bem('sidebar')
    }, [h(__WEBPACK_IMPORTED_MODULE_3__Key__["a" /* default */], {
      "attrs": {
        "text": this.deleteText,
        "type": "delete",
        "theme": DELETE_KEY_THEME
      },
      "on": {
        "press": onPress
      }
    }, [this.slots('delete')]), h(__WEBPACK_IMPORTED_MODULE_3__Key__["a" /* default */], {
      "attrs": {
        "text": closeButtonText,
        "type": "close",
        "theme": CLOSE_KEY_THEME
      },
      "on": {
        "press": onPress
      }
    })]);
    return h("transition", {
      "attrs": {
        "name": this.transition ? 'van-slide-up' : ''
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "style": {
        zIndex: this.zIndex
      },
      "class": bem([theme, {
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      }]),
      "on": {
        "touchstart": __WEBPACK_IMPORTED_MODULE_1__utils_dom_event__["d" /* stopPropagation */],
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [Title, h("div", {
      "class": bem('body')
    }, [Keys]), Sidebar])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/overlay/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");




 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* createNamespace */])('overlay'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function preventTouchMove(event) {
  Object(__WEBPACK_IMPORTED_MODULE_4__utils_dom_event__["c" /* preventDefault */])(event, true);
}

function Overlay(h, props, slots, ctx) {
  var style = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({
    zIndex: props.zIndex
  }, props.customStyle);

  if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* isDef */])(props.duration)) {
    style.animationDuration = props.duration + "s";
  }

  return h("transition", {
    "attrs": {
      "name": "van-fade"
    }
  }, [h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "directives": [{
      name: "show",
      value: props.show
    }],
    "style": style,
    "class": [bem(), props.className],
    "on": {
      "touchmove": preventTouchMove
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["b" /* inherit */])(ctx, true)]))]);
}

Overlay.props = {
  show: Boolean,
  duration: [Number, String],
  className: null,
  customStyle: null,
  zIndex: {
    type: [Number, String],
    default: 1
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Overlay));

/***/ }),

/***/ "./node_modules/vant/es/pagination/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");


var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('pagination'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function makePage(number, text, active) {
  return {
    number: number,
    text: text,
    active: active
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    prevText: String,
    nextText: String,
    forceEllipses: Boolean,
    value: {
      type: Number,
      default: 0
    },
    pageCount: {
      type: Number,
      default: 0
    },
    totalItems: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'multi'
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    showPageSize: {
      type: Number,
      default: 5
    }
  },
  computed: {
    count: function count() {
      var count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },
    pages: function pages() {
      var pages = [];
      var pageCount = this.count;

      if (this.mode !== 'multi') {
        return pages;
      } // Default page limits


      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount; // recompute if showPageSize

      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1; // Adjust if limit is exceeded

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      } // Add page number links


      for (var number = startPage; number <= endPage; number++) {
        var page = makePage(number, number, number === this.value);
        pages.push(page);
      } // Add links to move between page sets


      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          var previousPageSet = makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          var nextPageSet = makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },
  watch: {
    value: {
      handler: function handler(page) {
        this.select(page || this.value);
      },
      immediate: true
    }
  },
  methods: {
    select: function select(page, emitChange) {
      page = Math.min(this.count, Math.max(1, page));

      if (this.value !== page) {
        this.$emit('input', page);

        if (emitChange) {
          this.$emit('change', page);
        }
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var value = this.value;
    var simple = this.mode !== 'multi';

    var onSelect = function onSelect(value) {
      return function () {
        _this.select(value, true);
      };
    };

    return h("ul", {
      "class": bem({
        simple: simple
      })
    }, [h("li", {
      "class": [bem('item', {
        disabled: value === 1
      }), bem('prev'), 'van-hairline'],
      "on": {
        "click": onSelect(value - 1)
      }
    }, [this.prevText || t('prev')]), this.pages.map(function (page) {
      return h("li", {
        "class": [bem('item', {
          active: page.active
        }), bem('page'), 'van-hairline'],
        "on": {
          "click": onSelect(page.number)
        }
      }, [page.text]);
    }), simple && h("li", {
      "class": bem('page-desc')
    }, [this.slots('pageDesc') || value + "/" + this.count]), h("li", {
      "class": [bem('item', {
        disabled: value === this.count
      }), bem('next'), 'van-hairline'],
      "on": {
        "click": onSelect(value + 1)
      }
    }, [this.nextText || t('next')])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/panel/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cell__ = __webpack_require__("./node_modules/vant/es/cell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cell_group__ = __webpack_require__("./node_modules/vant/es/cell-group/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");




 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('panel'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Panel(h, props, slots, ctx) {
  var Content = function Content() {
    return [slots.header ? slots.header() : h(__WEBPACK_IMPORTED_MODULE_2__cell__["a" /* default */], {
      "attrs": {
        "icon": props.icon,
        "label": props.desc,
        "title": props.title,
        "value": props.status,
        "valueClass": bem('header-value')
      },
      "class": bem('header')
    }), h("div", {
      "class": bem('content')
    }, [slots.default && slots.default()]), slots.footer && h("div", {
      "class": [bem('footer'), 'van-hairline--top']
    }, [slots.footer()])];
  };

  return h(__WEBPACK_IMPORTED_MODULE_3__cell_group__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem(),
    "scopedSlots": {
      default: Content
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_4__utils_functional__["b" /* inherit */])(ctx, true)]));
}

Panel.props = {
  icon: String,
  desc: String,
  title: String,
  status: String
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Panel));

/***/ }),

/***/ "./node_modules/vant/es/password-input/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");


 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('password-input'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function PasswordInput(h, props, slots, ctx) {
  var info = props.errorInfo || props.info;
  var Points = [];

  for (var i = 0; i < props.length; i++) {
    var _char = props.value[i];
    var showBorder = i !== 0 && !props.gutter;
    var style = void 0;

    if (i !== 0 && props.gutter) {
      style = {
        marginLeft: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(props.gutter)
      };
    }

    Points.push(h("li", {
      "class": {
        'van-hairline--left': showBorder
      },
      "style": style
    }, [props.mask ? h("i", {
      "style": {
        visibility: _char ? 'visible' : 'hidden'
      }
    }) : _char]));
  }

  return h("div", {
    "class": bem()
  }, [h("ul", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": [bem('security'), {
      'van-hairline--surround': !props.gutter
    }],
    "on": {
      "touchstart": function touchstart(event) {
        event.stopPropagation();
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, 'focus', event);
      }
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx, true)]), [Points]), info && h("div", {
    "class": bem(props.errorInfo ? 'error-info' : 'info')
  }, [info])]);
}

PasswordInput.props = {
  info: String,
  gutter: [Number, String],
  errorInfo: String,
  mask: {
    type: Boolean,
    default: true
  },
  value: {
    type: String,
    default: ''
  },
  length: {
    type: Number,
    default: 6
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(PasswordInput));

/***/ }),

/***/ "./node_modules/vant/es/picker/PickerColumn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_deep_clone__ = __webpack_require__("./node_modules/vant/es/utils/deep-clone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_format_number__ = __webpack_require__("./node_modules/vant/es/utils/format/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_touch__ = __webpack_require__("./node_modules/vant/es/mixins/touch.js");





var DEFAULT_DURATION = 200; // 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动，持续 `MOMENTUM_DURATION`

var MOMENTUM_DURATION = 1000;
var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('picker-column'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function getElementTranslateY(element) {
  var style = window.getComputedStyle(element);
  var transform = style.transform || style.webkitTransform;
  var translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}

function isOptionDisabled(option) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* isObj */])(option) && option.disabled;
}

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [__WEBPACK_IMPORTED_MODULE_4__mixins_touch__["a" /* TouchMixin */]],
  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    visibleItemCount: Number,
    initialOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      offset: 0,
      duration: 0,
      options: Object(__WEBPACK_IMPORTED_MODULE_0__utils_deep_clone__["a" /* deepClone */])(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },
  created: function created() {
    if (this.$parent.children) {
      this.$parent.children.push(this);
    }

    this.setIndex(this.currentIndex);
  },
  destroyed: function destroyed() {
    var children = this.$parent.children;

    if (children) {
      children.splice(children.indexOf(this), 1);
    }
  },
  watch: {
    defaultIndex: function defaultIndex() {
      this.setIndex(this.defaultIndex);
    }
  },
  computed: {
    count: function count() {
      return this.options.length;
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      this.touchStart(event);

      if (this.moving) {
        var translateY = getElementTranslateY(this.$refs.wrapper);
        this.startOffset = Math.min(0, translateY);
      } else {
        this.startOffset = this.offset;
      }

      this.duration = 0;
      this.moving = false;
      this.transitionEndTrigger = null;
      this.touchStartTime = Date.now();
      this.momentumOffset = this.startOffset;
    },
    onTouchMove: function onTouchMove(event) {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom_event__["c" /* preventDefault */])(event);
      this.moving = true;
      this.touchMove(event);
      this.offset = Object(__WEBPACK_IMPORTED_MODULE_2__utils_format_number__["a" /* range */])(this.startOffset + this.deltaY, -(this.count * this.itemHeight), this.itemHeight);
      var now = Date.now();

      if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
        this.touchStartTime = now;
        this.momentumOffset = this.offset;
      }
    },
    onTouchEnd: function onTouchEnd() {
      var distance = this.offset - this.momentumOffset;
      var duration = Date.now() - this.touchStartTime;
      var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        this.momentum(distance, duration);
        return;
      }

      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        var index = this.getIndexByOffset(this.offset);
        this.setIndex(index, true);
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      this.stopMomentum();
    },
    onClickItem: function onClickItem(index) {
      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },
    adjustIndex: function adjustIndex(index) {
      index = Object(__WEBPACK_IMPORTED_MODULE_2__utils_format_number__["a" /* range */])(index, 0, this.count);

      for (var i = index; i < this.count; i++) {
        if (!isOptionDisabled(this.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!isOptionDisabled(this.options[_i])) return _i;
      }
    },
    getOptionText: function getOptionText(option) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* isObj */])(option) && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex: function setIndex(index, userAction) {
      var _this = this;

      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      var trigger = function trigger() {
        if (index !== _this.currentIndex) {
          _this.currentIndex = index;

          if (userAction) {
            _this.$emit('change', index);
          }
        }
      }; // 若有触发过 `touchmove` 事件，那应该
      // 在 `transitionend` 后再触发 `change` 事件


      if (this.moving) {
        this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },
    getValue: function getValue() {
      return this.options[this.currentIndex];
    },
    getIndexByOffset: function getIndexByOffset(offset) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__utils_format_number__["a" /* range */])(Math.round(-offset / this.itemHeight), 0, this.count - 1);
    },
    momentum: function momentum(distance, duration) {
      var speed = Math.abs(distance / duration);
      distance = this.offset + speed / 0.002 * (distance < 0 ? -1 : 1);
      var index = this.getIndexByOffset(distance);
      this.duration = MOMENTUM_DURATION;
      this.setIndex(index, true);
    },
    stopMomentum: function stopMomentum() {
      this.moving = false;
      this.duration = 0;

      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    }
  },
  render: function render(h) {
    var _this2 = this;

    var itemHeight = this.itemHeight,
        visibleItemCount = this.visibleItemCount;
    var baseOffset = itemHeight * (visibleItemCount - 1) / 2;
    var wrapperStyle = {
      transform: "translate3d(0, " + (this.offset + baseOffset) + "px, 0)",
      transitionDuration: this.duration + "ms",
      transitionProperty: this.duration ? 'all' : 'none',
      lineHeight: itemHeight + "px"
    };
    var optionStyle = {
      height: itemHeight + "px"
    };
    return h("div", {
      "class": [bem(), this.className],
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [h("ul", {
      "ref": "wrapper",
      "style": wrapperStyle,
      "class": bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [this.options.map(function (option, index) {
      return h("li", {
        "style": optionStyle,
        "class": ['van-ellipsis', bem('item', {
          disabled: isOptionDisabled(option),
          selected: index === _this2.currentIndex
        })],
        "domProps": {
          "innerHTML": _this2.getOptionText(option)
        },
        "on": {
          "click": function click() {
            _this2.onClickItem(index);
          }
        }
      });
    })])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/picker/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_deep_clone__ = __webpack_require__("./node_modules/vant/es/utils/deep-clone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./node_modules/vant/es/picker/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_color__ = __webpack_require__("./node_modules/vant/es/utils/color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loading__ = __webpack_require__("./node_modules/vant/es/loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PickerColumn__ = __webpack_require__("./node_modules/vant/es/picker/PickerColumn.js");









var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('picker'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* pickerProps */], {
    defaultIndex: {
      type: Number,
      default: 0
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    toolbarPosition: {
      type: String,
      default: 'top'
    },
    valueKey: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      children: []
    };
  },
  computed: {
    simple: function simple() {
      return this.columns.length && !this.columns[0].values;
    }
  },
  watch: {
    columns: function columns() {
      this.setColumns();
    }
  },
  methods: {
    setColumns: function setColumns() {
      var _this = this;

      var columns = this.simple ? [{
        values: this.columns
      }] : this.columns;
      columns.forEach(function (column, index) {
        _this.setColumnValues(index, Object(__WEBPACK_IMPORTED_MODULE_3__utils_deep_clone__["a" /* deepClone */])(column.values));
      });
    },
    emit: function emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },
    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },
    // get column value by index
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.getValue();
    },
    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },
    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.children[index];

      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },
    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.getValue();
      });
    },
    // set values of all columns
    setValues: function setValues(values) {
      var _this2 = this;

      values.forEach(function (value, index) {
        _this2.setColumnValue(index, value);
      });
    },
    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },
    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this3 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this3.setColumnIndex(columnIndex, optionIndex);
      });
    },
    onConfirm: function onConfirm() {
      this.children.map(function (child) {
        return child.stopMomentum();
      });
      this.emit('confirm');
    },
    onCancel: function onCancel() {
      this.emit('cancel');
    }
  },
  render: function render(h) {
    var _this4 = this;

    var itemHeight = this.itemHeight;
    var wrapHeight = itemHeight * this.visibleItemCount;
    var columns = this.simple ? [this.columns] : this.columns;
    var frameStyle = {
      height: itemHeight + "px"
    };
    var columnsStyle = {
      height: wrapHeight + "px"
    };
    var maskStyle = {
      backgroundSize: "100% " + (wrapHeight - itemHeight) / 2 + "px"
    };
    var Toolbar = this.showToolbar && h("div", {
      "class": ['van-hairline--top-bottom', bem('toolbar')]
    }, [this.slots() || [h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": bem('cancel'),
      "on": {
        "click": this.onCancel
      }
    }, [this.cancelButtonText || t('cancel')]), this.slots('title') || this.title && h("div", {
      "class": ['van-ellipsis', bem('title')]
    }, [this.title]), h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": bem('confirm'),
      "on": {
        "click": this.onConfirm
      }
    }, [this.confirmButtonText || t('confirm')])]]);
    return h("div", {
      "class": bem()
    }, [this.toolbarPosition === 'top' ? Toolbar : h(), this.loading ? h(__WEBPACK_IMPORTED_MODULE_6__loading__["a" /* default */], {
      "class": bem('loading'),
      "attrs": {
        "color": __WEBPACK_IMPORTED_MODULE_5__utils_color__["a" /* BLUE */]
      }
    }) : h(), h("div", {
      "class": bem('columns'),
      "style": columnsStyle,
      "on": {
        "touchmove": __WEBPACK_IMPORTED_MODULE_2__utils_dom_event__["c" /* preventDefault */]
      }
    }, [columns.map(function (item, index) {
      return h(__WEBPACK_IMPORTED_MODULE_7__PickerColumn__["a" /* default */], {
        "attrs": {
          "valueKey": _this4.valueKey,
          "className": item.className,
          "itemHeight": _this4.itemHeight,
          "defaultIndex": item.defaultIndex || _this4.defaultIndex,
          "visibleItemCount": _this4.visibleItemCount,
          "initialOptions": _this4.simple ? item : item.values
        },
        "on": {
          "change": function change() {
            _this4.onChange(index);
          }
        }
      });
    }), h("div", {
      "class": bem('mask'),
      "style": maskStyle
    }), h("div", {
      "class": ['van-hairline--top-bottom', bem('frame')],
      "style": frameStyle
    })]), this.toolbarPosition === 'bottom' ? Toolbar : h()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/picker/shared.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pickerProps; });
var pickerProps = {
  title: String,
  loading: Boolean,
  showToolbar: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  visibleItemCount: {
    type: Number,
    default: 5
  },
  itemHeight: {
    type: Number,
    default: 44
  }
};

/***/ }),

/***/ "./node_modules/vant/es/popup/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_popup__ = __webpack_require__("./node_modules/vant/es/mixins/popup/index.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('popup'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_popup__["a" /* PopupMixin */]],
  props: {
    round: Boolean,
    duration: Number,
    transition: String,
    position: {
      type: String,
      default: 'center'
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    var createEmitter = function createEmitter(eventName) {
      return function (event) {
        return _this.$emit(eventName, event);
      };
    };

    this.onClick = createEmitter('click');
    this.onOpened = createEmitter('opened');
    this.onClosed = createEmitter('closed');
  },
  render: function render(h) {
    var _bem;

    if (!this.shouldRender) {
      return;
    }

    var round = this.round,
        position = this.position,
        duration = this.duration;
    var transitionName = this.transition || (position === 'center' ? 'van-fade' : "van-popup-slide-" + position);
    var style = {};

    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* isDef */])(duration)) {
      style.transitionDuration = duration + "s";
    }

    return h("transition", {
      "attrs": {
        "name": transitionName
      },
      "on": {
        "afterEnter": this.onOpened,
        "afterLeave": this.onClosed
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "style": style,
      "class": bem((_bem = {
        round: round
      }, _bem[position] = position, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/progress/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_color__ = __webpack_require__("./node_modules/vant/es/utils/color.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('progress'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    inactive: Boolean,
    pivotText: String,
    pivotColor: String,
    percentage: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    showPivot: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_1__utils_color__["a" /* BLUE */]
    },
    textColor: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_1__utils_color__["f" /* WHITE */]
    }
  },
  data: function data() {
    return {
      pivotWidth: 0,
      progressWidth: 0
    };
  },
  mounted: function mounted() {
    this.getWidth();
  },
  watch: {
    showPivot: function showPivot() {
      this.getWidth();
    },
    pivotText: function pivotText() {
      this.getWidth();
    }
  },
  methods: {
    getWidth: function getWidth() {
      var _this = this;

      this.$nextTick(function () {
        _this.progressWidth = _this.$el.offsetWidth;
        _this.pivotWidth = _this.$refs.pivot ? _this.$refs.pivot.offsetWidth : 0;
      });
    }
  },
  render: function render(h) {
    var pivotText = this.pivotText,
        percentage = this.percentage;
    var text = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* isDef */])(pivotText) ? pivotText : percentage + '%';
    var showPivot = this.showPivot && text;
    var background = this.inactive ? '#cacaca' : this.color;
    var pivotStyle = {
      color: this.textColor,
      background: this.pivotColor || background
    };
    var portionStyle = {
      background: background,
      width: (this.progressWidth - this.pivotWidth) * percentage / 100 + 'px'
    };
    return h("div", {
      "class": bem()
    }, [h("span", {
      "class": bem('portion', {
        'with-pivot': showPivot
      }),
      "style": portionStyle
    }, [showPivot && h("span", {
      "ref": "pivot",
      "style": pivotStyle,
      "class": bem('pivot')
    }, [text])])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/pull-refresh/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_touch__ = __webpack_require__("./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_dom_scroll__ = __webpack_require__("./node_modules/vant/es/utils/dom/scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading__ = __webpack_require__("./node_modules/vant/es/loading/index.js");






var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('pull-refresh'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var TEXT_STATUS = ['pulling', 'loosing', 'success'];
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_touch__["a" /* TouchMixin */]],
  props: {
    disabled: Boolean,
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    successDuration: {
      type: Number,
      default: 500
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      status: 'normal',
      distance: 0,
      duration: 0
    };
  },
  computed: {
    untouchable: function untouchable() {
      return this.status === 'loading' || this.status === 'success' || this.disabled;
    }
  },
  watch: {
    value: function value(loading) {
      var _this = this;

      this.duration = this.animationDuration;

      if (!loading && this.successText) {
        this.status = 'success';
        setTimeout(function () {
          _this.setStatus(0);
        }, this.successDuration);
      } else {
        this.setStatus(loading ? this.headHeight : 0, loading);
      }
    }
  },
  mounted: function mounted() {
    this.scrollEl = Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom_scroll__["c" /* getScrollEventTarget */])(this.$el);
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (!this.untouchable && this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (this.untouchable) {
        return;
      }

      this.touchMove(event);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.setStatus(this.ease(this.deltaY));
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom_event__["c" /* preventDefault */])(event);
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var _this2 = this;

      if (!this.untouchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;

        if (this.status === 'loosing') {
          this.setStatus(this.headHeight, true);
          this.$emit('input', true); // ensure value change can be watched

          this.$nextTick(function () {
            _this2.$emit('refresh');
          });
        } else {
          this.setStatus(0);
        }
      }
    },
    getCeiling: function getCeiling() {
      this.ceiling = Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom_scroll__["d" /* getScrollTop */])(this.scrollEl) === 0;
      return this.ceiling;
    },
    ease: function ease(distance) {
      var headHeight = this.headHeight;
      return Math.round(distance < headHeight ? distance : distance < headHeight * 2 ? headHeight + (distance - headHeight) / 2 : headHeight * 1.5 + (distance - headHeight * 2) / 4);
    },
    setStatus: function setStatus(distance, isLoading) {
      this.distance = distance;
      var status = isLoading ? 'loading' : distance === 0 ? 'normal' : distance < this.headHeight ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  },
  render: function render(h) {
    var status = this.status,
        distance = this.distance;
    var text = this[status + "Text"] || t(status);
    var style = {
      transition: this.duration + "ms",
      transform: this.distance ? "translate3d(0," + this.distance + "px, 0)" : ''
    };
    var Status = this.slots(status, {
      distance: distance
    }) || [TEXT_STATUS.indexOf(status) !== -1 && h("div", {
      "class": bem('text')
    }, [text]), status === 'loading' && h(__WEBPACK_IMPORTED_MODULE_4__loading__["a" /* default */], {
      "attrs": {
        "size": "16"
      }
    }, [text])];
    return h("div", {
      "class": bem()
    }, [h("div", {
      "class": bem('track'),
      "style": style,
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [h("div", {
      "class": bem('head')
    }, [Status]), this.slots()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/radio-group/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('radio-group'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_relation__["b" /* ParentMixin */])('vanRadio')],
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem(),
      "attrs": {
        "role": "radiogroup"
      }
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/radio/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_checkbox__ = __webpack_require__("./node_modules/vant/es/mixins/checkbox.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('radio'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_checkbox__["a" /* CheckboxMixin */])({
    bem: bem,
    role: 'radio',
    parent: 'vanRadio'
  })],
  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    checked: function checked() {
      return this.currentValue === this.name;
    }
  },
  methods: {
    onClickIcon: function onClickIcon() {
      if (!this.isDisabled) {
        this.currentValue = this.name;
      }
    },
    onClickLabel: function onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name;
      }
    }
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/rate/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");


/* eslint-disable prefer-spread */



 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('rate'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function getRateStatus(value, index, allowHalf) {
  if (value >= index) {
    return 'full';
  }

  if (value + 0.5 >= index && allowHalf) {
    return 'half';
  }

  return 'void';
}

function Rate(h, props, slots, ctx) {
  var icon = props.icon,
      color = props.color,
      count = props.count,
      voidIcon = props.voidIcon,
      readonly = props.readonly,
      disabled = props.disabled,
      voidColor = props.voidColor,
      disabledColor = props.disabledColor;
  var list = [];

  for (var i = 1; i <= count; i++) {
    list.push(getRateStatus(props.value, i, props.allowHalf));
  }

  function onSelect(index) {
    if (!disabled && !readonly) {
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, 'input', index);
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, 'change', index);
    }
  }

  function onTouchMove(event) {
    if (readonly || disabled || !document.elementFromPoint) {
      return;
    }

    Object(__WEBPACK_IMPORTED_MODULE_3__utils_dom_event__["c" /* preventDefault */])(event);
    var _event$touches$ = event.touches[0],
        clientX = _event$touches$.clientX,
        clientY = _event$touches$.clientY;
    var target = document.elementFromPoint(clientX, clientY);

    if (target && target.dataset) {
      var score = target.dataset.score;
      /* istanbul ignore else */

      if (score) {
        onSelect(+score);
      }
    }
  }

  var gutter = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(props.gutter);

  function renderStar(status, index) {
    var isFull = status === 'full';
    var isVoid = status === 'void';
    var score = index + 1;
    var size = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(props.size);
    var style;

    if (gutter && score !== count) {
      style = {
        paddingRight: gutter
      };
    }

    return h("div", {
      "key": index,
      "attrs": {
        "role": "radio",
        "tabindex": "0",
        "aria-setsize": count,
        "aria-posinset": score,
        "aria-checked": String(!isVoid)
      },
      "style": style,
      "class": bem('item')
    }, [h(__WEBPACK_IMPORTED_MODULE_4__icon__["a" /* default */], {
      "attrs": {
        "size": size,
        "name": isFull ? icon : voidIcon,
        "data-score": score,
        "color": disabled ? disabledColor : isFull ? color : voidColor
      },
      "class": bem('icon'),
      "on": {
        "click": function click() {
          onSelect(score);
        }
      }
    }), props.allowHalf && h(__WEBPACK_IMPORTED_MODULE_4__icon__["a" /* default */], {
      "attrs": {
        "size": size,
        "name": isVoid ? voidIcon : icon,
        "data-score": score - 0.5,
        "color": disabled ? disabledColor : isVoid ? voidColor : color
      },
      "class": bem('icon', 'half'),
      "on": {
        "click": function click() {
          onSelect(score - 0.5);
        }
      }
    })]);
  }

  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem(),
    "attrs": {
      "tabindex": "0",
      "role": "radiogroup"
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx), {
    "on": {
      "touchmove": onTouchMove
    }
  }]), [list.map(function (status, index) {
    return renderStar(status, index);
  })]);
}

Rate.props = {
  size: [Number, String],
  gutter: [Number, String],
  readonly: Boolean,
  disabled: Boolean,
  allowHalf: Boolean,
  value: {
    type: Number,
    default: 0
  },
  icon: {
    type: String,
    default: 'star'
  },
  voidIcon: {
    type: String,
    default: 'star-o'
  },
  color: {
    type: String,
    default: '#ffd21e'
  },
  voidColor: {
    type: String,
    default: '#c7c7c7'
  },
  disabledColor: {
    type: String,
    default: '#bdbdbd'
  },
  count: {
    type: Number,
    default: 5
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Rate));

/***/ }),

/***/ "./node_modules/vant/es/row/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");


var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('row'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  render: function render(h) {
    var _bem;

    var align = this.align,
        justify = this.justify;
    var flex = this.type === 'flex';
    var margin = "-" + Number(this.gutter) / 2 + "px";
    var style = this.gutter ? {
      marginLeft: margin,
      marginRight: margin
    } : {};
    return h(this.tag, {
      "style": style,
      "class": bem((_bem = {
        flex: flex
      }, _bem["align-" + align] = flex && align, _bem["justify-" + justify] = flex && justify, _bem))
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/search/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__field__ = __webpack_require__("./node_modules/vant/es/field/index.js");






 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* createNamespace */])('search'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function Search(h, props, slots, ctx) {
  function Label() {
    if (slots.label || props.label) {
      return h("div", {
        "class": bem('label')
      }, [slots.label ? slots.label() : props.label]);
    }
  }

  function Action() {
    if (!props.showAction) {
      return;
    }

    function onCancel() {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'input', '');
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'cancel');
    }

    return h("div", {
      "class": bem('action')
    }, [slots.action ? slots.action() : h("div", {
      "on": {
        "click": onCancel
      }
    }, [t('cancel')])]);
  }

  var fieldData = {
    attrs: ctx.data.attrs,
    on: Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, ctx.listeners, {
      input: function input(value) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'input', value);
      },
      keypress: function keypress(event) {
        // press enter
        if (event.keyCode === 13) {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_dom_event__["c" /* preventDefault */])(event);
          Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'search', props.value);
        }

        Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["a" /* emit */])(ctx, 'keypress', event);
      }
    })
  };
  var inheritData = Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["b" /* inherit */])(ctx);
  delete inheritData.attrs;
  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem({
      'show-action': props.showAction
    }),
    "style": {
      background: props.background
    }
  }, inheritData]), [h("div", {
    "class": bem('content', props.shape)
  }, [Label(), h(__WEBPACK_IMPORTED_MODULE_5__field__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "attrs": {
      "type": "search",
      "border": false,
      "value": props.value,
      "leftIcon": props.leftIcon,
      "rightIcon": props.rightIcon,
      "clearable": props.clearable
    },
    "scopedSlots": {
      'left-icon': slots['left-icon'],
      'right-icon': slots['right-icon']
    }
  }, fieldData]))]), Action()]);
}

Search.props = {
  value: String,
  label: String,
  rightIcon: String,
  showAction: Boolean,
  shape: {
    type: String,
    default: 'square'
  },
  clearable: {
    type: Boolean,
    default: true
  },
  background: {
    type: String,
    default: '#fff'
  },
  leftIcon: {
    type: String,
    default: 'search'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Search));

/***/ }),

/***/ "./node_modules/vant/es/sidebar-item/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info__ = __webpack_require__("./node_modules/vant/es/info/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_router__ = __webpack_require__("./node_modules/vant/es/utils/router.js");






var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('sidebar-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_3__mixins_relation__["a" /* ChildrenMixin */])('vanSidebar')],
  props: Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_4__utils_router__["c" /* routeProps */], {
    info: [Number, String],
    title: String
  }),
  computed: {
    select: function select() {
      return this.index === +this.parent.activeKey;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click', this.index);
      this.parent.$emit('input', this.index);
      this.parent.$emit('change', this.index);
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_router__["b" /* route */])(this.$router, this);
    }
  },
  render: function render(h) {
    return h("a", {
      "class": [bem({
        select: this.select
      }), 'van-hairline'],
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('text')
    }, [this.title, h(__WEBPACK_IMPORTED_MODULE_2__info__["a" /* default */], {
      "attrs": {
        "info": this.info
      },
      "class": bem('info')
    })])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sidebar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('sidebar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_relation__["b" /* ParentMixin */])('vanSidebar')],
  model: {
    prop: 'activeKey'
  },
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },
  render: function render(h) {
    return h("div", {
      "class": [bem(), 'van-hairline--top-bottom']
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/skeleton/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");


 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('skeleton'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var DEFAULT_ROW_WIDTH = '100%';
var DEFAULT_LAST_ROW_WIDTH = '60%';

function Skeleton(h, props, slots, ctx) {
  if (!props.loading) {
    return slots.default && slots.default();
  }

  function Title() {
    if (props.title) {
      return h("h3", {
        "class": bem('title'),
        "style": {
          width: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(props.titleWidth)
        }
      });
    }
  }

  function Rows() {
    var Rows = [];
    var rowWidth = props.rowWidth;

    function getRowWidth(index) {
      if (rowWidth === DEFAULT_ROW_WIDTH && index === props.row - 1) {
        return DEFAULT_LAST_ROW_WIDTH;
      }

      if (Array.isArray(rowWidth)) {
        return rowWidth[index];
      }

      return rowWidth;
    }

    for (var i = 0; i < props.row; i++) {
      Rows.push(h("div", {
        "class": bem('row'),
        "style": {
          width: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(getRowWidth(i))
        }
      }));
    }

    return Rows;
  }

  function Avatar() {
    if (props.avatar) {
      var size = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(props.avatarSize);
      return h("div", {
        "class": bem('avatar', props.avatarShape),
        "style": {
          width: size,
          height: size
        }
      });
    }
  }

  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem({
      animate: props.animate
    })
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx)]), [Avatar(), h("div", {
    "class": bem('content')
  }, [Title(), Rows()])]);
}

Skeleton.props = {
  title: Boolean,
  avatar: Boolean,
  row: {
    type: Number,
    default: 0
  },
  loading: {
    type: Boolean,
    default: true
  },
  animate: {
    type: Boolean,
    default: true
  },
  avatarSize: {
    type: String,
    default: '32px'
  },
  avatarShape: {
    type: String,
    default: 'round'
  },
  titleWidth: {
    type: [Number, String],
    default: '40%'
  },
  rowWidth: {
    type: [Number, String, Array],
    default: DEFAULT_ROW_WIDTH
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Skeleton));

/***/ }),

/***/ "./node_modules/vant/es/sku/Sku.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popup__ = __webpack_require__("./node_modules/vant/es/popup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast__ = __webpack_require__("./node_modules/vant/es/toast/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_preview__ = __webpack_require__("./node_modules/vant/es/image-preview/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_SkuHeader__ = __webpack_require__("./node_modules/vant/es/sku/components/SkuHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_SkuRow__ = __webpack_require__("./node_modules/vant/es/sku/components/SkuRow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_SkuRowItem__ = __webpack_require__("./node_modules/vant/es/sku/components/SkuRowItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_SkuStepper__ = __webpack_require__("./node_modules/vant/es/sku/components/SkuStepper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_SkuMessages__ = __webpack_require__("./node_modules/vant/es/sku/components/SkuMessages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_SkuActions__ = __webpack_require__("./node_modules/vant/es/sku/components/SkuActions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_skuHelper__ = __webpack_require__("./node_modules/vant/es/sku/utils/skuHelper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants__ = __webpack_require__("./node_modules/vant/es/sku/constants.js");


/* eslint-disable camelcase */














var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["b" /* createNamespace */])('sku'),
    createComponent = _createNamespace[0];

var QUOTA_LIMIT = __WEBPACK_IMPORTED_MODULE_13__constants__["a" /* LIMIT_TYPE */].QUOTA_LIMIT;
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    sku: Object,
    goods: Object,
    value: Boolean,
    buyText: String,
    goodsId: [Number, String],
    hideStock: Boolean,
    addCartText: String,
    stepperTitle: String,
    getContainer: Function,
    hideQuotaText: Boolean,
    resetStepperOnHide: Boolean,
    customSkuValidator: Function,
    closeOnClickOverlay: Boolean,
    disableStepperInput: Boolean,
    resetSelectedSkuOnHide: Boolean,
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    },
    initialSku: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    showSoldoutSku: {
      type: Boolean,
      default: true
    },
    showAddCartBtn: {
      type: Boolean,
      default: true
    },
    bodyOffsetTop: {
      type: Number,
      default: 200
    },
    messageConfig: {
      type: Object,
      default: function _default() {
        return {
          placeholderMap: {},
          uploadImg: function uploadImg() {
            return Promise.resolve();
          },
          uploadMaxSize: 5
        };
      }
    },
    customStepperConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      selectedSku: {},
      selectedNum: 1,
      show: this.value
    };
  },
  watch: {
    show: function show(val) {
      this.$emit('input', val);

      if (!val) {
        var selectedSkuValues = Object(__WEBPACK_IMPORTED_MODULE_12__utils_skuHelper__["b" /* getSelectedSkuValues */])(this.sku.tree, this.selectedSku);
        this.$emit('sku-close', {
          selectedSkuValues: selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb
        });

        if (this.resetStepperOnHide) {
          this.resetStepper();
        }

        if (this.resetSelectedSkuOnHide) {
          this.resetSelectedSku(this.skuTree);
        }
      }
    },
    value: function value(val) {
      this.show = val;
    },
    skuTree: function skuTree(val) {
      this.resetSelectedSku(val);
    }
  },
  computed: {
    skuGroupClass: function skuGroupClass() {
      return ['van-sku-group-container', 'van-hairline--bottom', {
        'van-sku-group-container--hide-soldout': !this.showSoldoutSku
      }];
    },
    bodyStyle: function bodyStyle() {
      if (this.$isServer) {
        return;
      } // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下


      var maxHeight = window.innerHeight - this.bodyOffsetTop;
      return {
        maxHeight: maxHeight + 'px'
      };
    },
    isSkuCombSelected: function isSkuCombSelected() {
      return Object(__WEBPACK_IMPORTED_MODULE_12__utils_skuHelper__["d" /* isAllSelected */])(this.sku.tree, this.selectedSku);
    },
    isSkuEmpty: function isSkuEmpty() {
      return Object.keys(this.sku).length === 0;
    },
    hasSku: function hasSku() {
      return !this.sku.none_sku;
    },
    selectedSkuComb: function selectedSkuComb() {
      if (!this.hasSku) {
        return {
          id: this.sku.collection_id,
          price: Math.round(this.sku.price * 100),
          stock_num: this.sku.stock_num
        };
      }

      if (this.isSkuCombSelected) {
        return Object(__WEBPACK_IMPORTED_MODULE_12__utils_skuHelper__["c" /* getSkuComb */])(this.sku.list, this.selectedSku);
      }

      return null;
    },
    price: function price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      } // sku.price是一个格式化好的价格区间


      return this.sku.price;
    },
    skuTree: function skuTree() {
      return this.sku.tree || [];
    },
    imageList: function imageList() {
      var imageList = [this.goods.picture];

      if (this.skuTree.length > 0) {
        var treeItem = this.skuTree.filter(function (item) {
          return item.k_s === 's1';
        })[0] || {};

        if (!treeItem.v) {
          return imageList;
        }

        treeItem.v.forEach(function (vItem) {
          var img = vItem.imgUrl || vItem.img_url;

          if (img) {
            imageList.push(img);
          }
        });
      }

      return imageList;
    }
  },
  created: function created() {
    var skuEventBus = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a();
    this.skuEventBus = skuEventBus;
    skuEventBus.$on('sku:close', this.onClose);
    skuEventBus.$on('sku:select', this.onSelect);
    skuEventBus.$on('sku:numChange', this.onNumChange);
    skuEventBus.$on('sku:previewImage', this.onPreviewImage);
    skuEventBus.$on('sku:overLimit', this.onOverLimit);
    skuEventBus.$on('sku:addCart', this.onAddCart);
    skuEventBus.$on('sku:buy', this.onBuy);
    this.resetStepper();
    this.resetSelectedSku(this.skuTree); // 组件初始化后的钩子，抛出skuEventBus

    this.$emit('after-sku-create', skuEventBus);
  },
  methods: {
    resetStepper: function resetStepper() {
      var skuStepper = this.$refs.skuStepper;
      var selectedNum = this.initialSku.selectedNum;
      var num = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["d" /* isDef */])(selectedNum) ? selectedNum : 1;

      if (skuStepper) {
        skuStepper.setCurrentNum(num);
      } else {
        this.selectedNum = num;
      }
    },
    resetSelectedSku: function resetSelectedSku(skuTree) {
      var _this = this;

      this.selectedSku = {}; // 重置 selectedSku

      skuTree.forEach(function (item) {
        _this.selectedSku[item.k_s] = _this.initialSku[item.k_s] || __WEBPACK_IMPORTED_MODULE_13__constants__["b" /* UNSELECTED_SKU_VALUE_ID */];
      }); // 只有一个 sku 规格值时默认选中

      skuTree.forEach(function (item) {
        var key = item.k_s;
        var valueId = item.v[0].id;

        if (item.v.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_12__utils_skuHelper__["e" /* isSkuChoosable */])(_this.sku.list, _this.selectedSku, {
          key: key,
          valueId: valueId
        })) {
          _this.selectedSku[key] = valueId;
        }
      });
    },
    getSkuMessages: function getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },
    getSkuCartMessages: function getSkuCartMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getCartMessages() : {};
    },
    validateSkuMessages: function validateSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.validateMessages() : '';
    },
    validateSku: function validateSku() {
      if (this.selectedNum === 0) {
        return '商品已经无法购买啦';
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      } // 自定义sku校验


      if (this.customSkuValidator) {
        var err = this.customSkuValidator(this);
        if (err) return err;
      }

      return '请先选择商品规格';
    },
    onClose: function onClose() {
      this.show = false;
    },
    onSelect: function onSelect(skuValue) {
      var _extends2, _extends3;

      // 点击已选中的sku时则取消选中
      this.selectedSku = this.selectedSku[skuValue.skuKeyStr] === skuValue.id ? Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, this.selectedSku, (_extends2 = {}, _extends2[skuValue.skuKeyStr] = __WEBPACK_IMPORTED_MODULE_13__constants__["b" /* UNSELECTED_SKU_VALUE_ID */], _extends2)) : Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, this.selectedSku, (_extends3 = {}, _extends3[skuValue.skuKeyStr] = skuValue.id, _extends3));
      this.$emit('sku-selected', {
        skuValue: skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb
      });
    },
    onNumChange: function onNumChange(num) {
      this.selectedNum = num;
    },
    onPreviewImage: function onPreviewImage(indexImage) {
      var _this2 = this;

      var index = this.imageList.findIndex(function (image) {
        return image === indexImage;
      });
      var params = {
        index: index,
        imageList: this.imageList,
        indexImage: indexImage
      };
      this.$emit('open-preview', params);
      Object(__WEBPACK_IMPORTED_MODULE_4__image_preview__["a" /* default */])({
        images: this.imageList,
        startPosition: index,
        onClose: function onClose() {
          _this2.$emit('close-preview', params);
        }
      });
    },
    onOverLimit: function onOverLimit(data) {
      var action = data.action,
          limitType = data.limitType,
          quota = data.quota,
          quotaUsed = data.quotaUsed;
      var handleOverLimit = this.customStepperConfig.handleOverLimit;

      if (handleOverLimit) {
        handleOverLimit(data);
        return;
      }

      if (action === 'minus') {
        Object(__WEBPACK_IMPORTED_MODULE_3__toast__["a" /* default */])('至少选择一件');
      } else if (action === 'plus') {
        if (limitType === QUOTA_LIMIT) {
          var msg = "\u9650\u8D2D" + quota + "\u4EF6";
          if (quotaUsed > 0) msg += "\uFF0C" + ("\u4F60\u5DF2\u8D2D\u4E70" + quotaUsed + "\u4EF6");
          Object(__WEBPACK_IMPORTED_MODULE_3__toast__["a" /* default */])(msg);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_3__toast__["a" /* default */])('库存不足');
        }
      }
    },
    onAddCart: function onAddCart() {
      this.onBuyOrAddCart('add-cart');
    },
    onBuy: function onBuy() {
      this.onBuyOrAddCart('buy-clicked');
    },
    onBuyOrAddCart: function onBuyOrAddCart(type) {
      var error = this.validateSku();

      if (error) {
        Object(__WEBPACK_IMPORTED_MODULE_3__toast__["a" /* default */])(error);
      } else {
        this.$emit(type, this.getSkuData());
      }
    },
    getSkuData: function getSkuData() {
      return {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages()
      };
    }
  },
  render: function render(h) {
    var _this3 = this;

    if (this.isSkuEmpty) {
      return;
    }

    var sku = this.sku,
        goods = this.goods,
        price = this.price,
        skuEventBus = this.skuEventBus,
        selectedSku = this.selectedSku,
        selectedNum = this.selectedNum,
        stepperTitle = this.stepperTitle,
        hideQuotaText = this.hideQuotaText,
        selectedSkuComb = this.selectedSkuComb;
    var slotsProps = {
      price: price,
      selectedNum: selectedNum,
      skuEventBus: skuEventBus,
      selectedSku: selectedSku,
      selectedSkuComb: selectedSkuComb
    };

    var slots = function slots(name) {
      return _this3.slots(name, slotsProps);
    };

    var Header = slots('sku-header') || h(__WEBPACK_IMPORTED_MODULE_5__components_SkuHeader__["a" /* default */], {
      "attrs": {
        "sku": sku,
        "goods": goods,
        "skuEventBus": skuEventBus,
        "selectedSku": selectedSku
      }
    }, [slots('sku-header-price') || h("div", {
      "class": "van-sku__goods-price"
    }, [h("span", {
      "class": "van-sku__price-symbol"
    }, ["\uFFE5"]), h("span", {
      "class": "van-sku__price-num"
    }, [price])])]);
    var Group = slots('sku-group') || this.hasSku && h("div", {
      "class": this.skuGroupClass
    }, [this.skuTree.map(function (skuTreeItem) {
      return h(__WEBPACK_IMPORTED_MODULE_6__components_SkuRow__["a" /* default */], {
        "attrs": {
          "skuRow": skuTreeItem
        }
      }, [skuTreeItem.v.map(function (skuValue) {
        return h(__WEBPACK_IMPORTED_MODULE_7__components_SkuRowItem__["a" /* default */], {
          "attrs": {
            "skuList": sku.list,
            "skuValue": skuValue,
            "selectedSku": selectedSku,
            "skuEventBus": skuEventBus,
            "skuKeyStr": skuTreeItem.k_s
          }
        });
      })]);
    })]);
    var Stepper = slots('sku-stepper') || h(__WEBPACK_IMPORTED_MODULE_8__components_SkuStepper__["a" /* default */], {
      "ref": "skuStepper",
      "attrs": {
        "quota": this.quota,
        "hideStock": this.hideStock,
        "quotaUsed": this.quotaUsed,
        "skuEventBus": skuEventBus,
        "selectedNum": selectedNum,
        "selectedSku": selectedSku,
        "stepperTitle": stepperTitle,
        "skuStockNum": sku.stock_num,
        "hideQuotaText": hideQuotaText,
        "selectedSkuComb": selectedSkuComb,
        "disableStepperInput": this.disableStepperInput,
        "customStepperConfig": this.customStepperConfig
      },
      "on": {
        "change": function change(event) {
          _this3.$emit('stepper-change', event);
        }
      }
    });
    var Messages = slots('sku-messages') || h(__WEBPACK_IMPORTED_MODULE_9__components_SkuMessages__["a" /* default */], {
      "ref": "skuMessages",
      "attrs": {
        "goodsId": this.goodsId,
        "messageConfig": this.messageConfig,
        "messages": sku.messages
      }
    });
    var Actions = slots('sku-actions') || h(__WEBPACK_IMPORTED_MODULE_10__components_SkuActions__["a" /* default */], {
      "attrs": {
        "buyText": this.buyText,
        "skuEventBus": skuEventBus,
        "addCartText": this.addCartText,
        "showAddCartBtn": this.showAddCartBtn
      }
    });
    return h(__WEBPACK_IMPORTED_MODULE_2__popup__["a" /* default */], {
      "attrs": {
        "position": "bottom",
        "getContainer": this.getContainer,
        "closeOnClickOverlay": this.closeOnClickOverlay
      },
      "class": "van-sku-container",
      "model": {
        value: _this3.show,
        callback: function callback($$v) {
          _this3.show = $$v;
        }
      }
    }, [Header, h("div", {
      "class": "van-sku-body",
      "style": this.bodyStyle
    }, [slots('sku-body-top'), Group, slots('extra-sku-group'), Stepper, Messages]), Actions]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button__ = __webpack_require__("./node_modules/vant/es/button/index.js");



 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('sku-actions'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SkuActions(h, props, slots, ctx) {
  var createEmitter = function createEmitter(name) {
    return function () {
      props.skuEventBus.$emit(name);
    };
  };

  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem()
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx)]), [props.showAddCartBtn && h(__WEBPACK_IMPORTED_MODULE_3__button__["a" /* default */], {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "warning",
      "text": props.addCartText || '加入购物车'
    },
    "on": {
      "click": createEmitter('sku:addCart')
    }
  }), h(__WEBPACK_IMPORTED_MODULE_3__button__["a" /* default */], {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.buyText || '立即购买'
    },
    "on": {
      "click": createEmitter('sku:buy')
    }
  })]);
}

SkuActions.props = {
  buyText: String,
  addCartText: String,
  skuEventBus: Object,
  showAddCartBtn: Boolean
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(SkuActions));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");



 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('sku-header'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function getSkuImg(sku, selectedSku) {
  var id = selectedSku.s1;

  if (id) {
    // skuImg 挂载在 skuTree 中 s1 上
    var treeItem = sku.tree.filter(function (item) {
      return item.k_s === 's1';
    })[0] || {};

    if (treeItem.v) {
      var matchedSku = treeItem.v.filter(function (skuValue) {
        return skuValue.id === id;
      })[0];

      if (matchedSku) {
        return matchedSku.imgUrl || matchedSku.img_url;
      }
    }
  }
}

function SkuHeader(h, props, slots, ctx) {
  var sku = props.sku,
      goods = props.goods,
      skuEventBus = props.skuEventBus,
      selectedSku = props.selectedSku;
  var goodsImg = getSkuImg(sku, selectedSku) || goods.picture;

  var previewImage = function previewImage() {
    skuEventBus.$emit('sku:previewImage', goodsImg);
  };

  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": [bem(), 'van-hairline--bottom']
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx)]), [h("div", {
    "class": bem('img-wrap'),
    "on": {
      "click": previewImage
    }
  }, [h("img", {
    "attrs": {
      "src": goodsImg
    }
  })]), h("div", {
    "class": bem('goods-info')
  }, [h("div", {
    "class": "van-sku__goods-name van-ellipsis"
  }, [goods.title]), slots.default && slots.default(), h(__WEBPACK_IMPORTED_MODULE_3__icon__["a" /* default */], {
    "attrs": {
      "name": "close"
    },
    "class": "van-sku__close-icon",
    "on": {
      "click": function click() {
        skuEventBus.$emit('sku:close');
      }
    }
  })])]);
}

SkuHeader.props = {
  sku: Object,
  goods: Object,
  skuEventBus: Object,
  selectedSku: Object
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(SkuHeader));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuImgUploader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading__ = __webpack_require__("./node_modules/vant/es/loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uploader__ = __webpack_require__("./node_modules/vant/es/uploader/index.js");





var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('sku-img-uploader'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    value: String,
    uploadImg: Function,
    maxSize: {
      type: Number,
      default: 6
    }
  },
  data: function data() {
    return {
      // 正在上传的图片 base64
      paddingImg: ''
    };
  },
  computed: {
    imgList: function imgList() {
      return this.value && !this.paddingImg ? [this.value] : [];
    }
  },
  methods: {
    afterReadFile: function afterReadFile(file) {
      var _this = this;

      // 上传文件
      this.paddingImg = file.content;
      this.uploadImg(file.file, file.content).then(function (img) {
        _this.$emit('input', img);

        _this.$nextTick(function () {
          _this.paddingImg = '';
        });
      }).catch(function () {
        _this.paddingImg = '';
      });
    },
    onOversize: function onOversize() {
      this.$toast("\u6700\u5927\u53EF\u4E0A\u4F20\u56FE\u7247\u4E3A" + this.maxSize + "MB\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u56FE\u7247\u5C3A\u5BF8");
    }
  },
  render: function render(h) {
    var _this2 = this;

    var imgList = this.imgList,
        paddingImg = this.paddingImg;
    var ImageList = (paddingImg || imgList.length > 0) && h("div", {
      "class": "van-clearfix"
    }, [imgList.map(function (img) {
      return h("div", {
        "class": bem('img')
      }, [h("img", {
        "attrs": {
          "src": img
        }
      }), h(__WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */], {
        "attrs": {
          "name": "clear"
        },
        "class": bem('delete'),
        "on": {
          "click": function click() {
            _this2.$emit('input', '');
          }
        }
      })]);
    }), paddingImg && h("div", {
      "class": bem('img')
    }, [h("img", {
      "attrs": {
        "src": paddingImg
      }
    }), h(__WEBPACK_IMPORTED_MODULE_2__loading__["a" /* default */], {
      "attrs": {
        "type": "spinner"
      },
      "class": bem('uploading')
    })])]);
    return h("div", {
      "class": bem()
    }, [h(__WEBPACK_IMPORTED_MODULE_3__uploader__["a" /* default */], {
      "attrs": {
        "disabled": !!paddingImg,
        "afterRead": this.afterReadFile,
        "maxSize": this.maxSize * 1024 * 1024
      },
      "on": {
        "oversize": this.onOversize
      }
    }, [h("div", {
      "class": bem('header')
    }, [paddingImg ? h("div", ["\u6B63\u5728\u4E0A\u4F20..."]) : [h(__WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */], {
      "attrs": {
        "name": "photograph"
      }
    }), h("span", {
      "class": "label"
    }, [this.value ? '重拍' : '拍照', " \u6216 "]), h(__WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */], {
      "attrs": {
        "name": "photo"
      }
    }), h("span", {
      "class": "label"
    }, [this.value ? '重新选择照片' : '选择照片'])]])]), ImageList]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuMessages.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cell__ = __webpack_require__("./node_modules/vant/es/cell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cell_group__ = __webpack_require__("./node_modules/vant/es/cell-group/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field__ = __webpack_require__("./node_modules/vant/es/field/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_validate_email__ = __webpack_require__("./node_modules/vant/es/utils/validate/email.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_validate_number__ = __webpack_require__("./node_modules/vant/es/utils/validate/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SkuImgUploader__ = __webpack_require__("./node_modules/vant/es/sku/components/SkuImgUploader.js");








var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('sku-messages'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var PLACEHOLDER = {
  id_no: '输入身份证号码',
  text: '输入文本',
  tel: '输入数字',
  email: '输入邮箱',
  date: '点击选择日期',
  time: '点击选择时间',
  textarea: '点击填写段落文本',
  mobile: '输入手机号码'
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    messages: Array,
    messageConfig: Object,
    goodsId: [Number, String]
  },
  data: function data() {
    return {
      messageValues: this.resetMessageValues(this.messages)
    };
  },
  watch: {
    messages: function messages(val) {
      this.messageValues = this.resetMessageValues(val);
    }
  },
  methods: {
    resetMessageValues: function resetMessageValues(messages) {
      return (messages || []).map(function () {
        return {
          value: ''
        };
      });
    },
    getType: function getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }

      if (message.type === 'id_no') {
        return 'text';
      }

      return message.datetime > 0 ? 'datetime-local' : message.type;
    },
    getMessages: function getMessages() {
      var _this = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;

        if (_this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages["message_" + index] = value;
      });
      return messages;
    },
    getCartMessages: function getCartMessages() {
      var _this2 = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        var message = _this2.messages[index];

        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages[message.name] = value;
      });
      return messages;
    },
    getPlaceholder: function getPlaceholder(message) {
      var type = +message.multiple === 1 ? 'textarea' : message.type;
      var map = this.messageConfig.placeholderMap || {};
      return message.placeholder || map[type] || PLACEHOLDER[type];
    },
    validateMessages: function validateMessages() {
      var values = this.messageValues;

      for (var i = 0; i < values.length; i++) {
        var value = values[i].value;
        var message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (String(message.required) === '1') {
            // eslint-disable-line
            var textType = message.type === 'image' ? '请上传' : '请填写';
            return textType + message.name;
          }
        } else {
          if (message.type === 'tel' && !Object(__WEBPACK_IMPORTED_MODULE_5__utils_validate_number__["a" /* isNumber */])(value)) {
            return '请填写正确的数字格式留言';
          }

          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return '手机号长度为6-20位数字';
          }

          if (message.type === 'email' && !Object(__WEBPACK_IMPORTED_MODULE_4__utils_validate_email__["a" /* isEmail */])(value)) {
            return '请填写正确的邮箱';
          }

          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return '请填写正确的身份证号码';
          }
        }
      }
    }
  },
  render: function render(h) {
    var _this3 = this;

    return h(__WEBPACK_IMPORTED_MODULE_2__cell_group__["a" /* default */], {
      "class": bem()
    }, [this.messages.map(function (message, index) {
      return message.type === 'image' ? h(__WEBPACK_IMPORTED_MODULE_1__cell__["a" /* default */], {
        "class": bem('image-cell'),
        "attrs": {
          "label": "仅限一张",
          "title": message.name,
          "required": String(message.required) === '1'
        },
        "key": _this3.goodsId + "-" + index
      }, [h(__WEBPACK_IMPORTED_MODULE_6__SkuImgUploader__["a" /* default */], {
        "attrs": {
          "uploadImg": _this3.messageConfig.uploadImg,
          "maxSize": _this3.messageConfig.uploadMaxSize
        },
        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.messageValues[index].value = $$v;
          }
        }
      })]) : h(__WEBPACK_IMPORTED_MODULE_3__field__["a" /* default */], {
        "attrs": {
          "maxlength": "200",
          "label": message.name,
          "required": String(message.required) === '1',
          "placeholder": _this3.getPlaceholder(message),
          "type": _this3.getType(message)
        },
        "key": _this3.goodsId + "-" + index,
        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.messageValues[index].value = $$v;
          }
        }
      });
    })]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuRow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");


 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('sku-row'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SkuRow(h, props, slots, ctx) {
  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem()
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx)]), [h("div", {
    "class": bem('title')
  }, [props.skuRow.k, "\uFF1A"]), slots.default && slots.default()]);
}

SkuRow.props = {
  skuRow: Object
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(SkuRow));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuRowItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_skuHelper__ = __webpack_require__("./node_modules/vant/es/sku/utils/skuHelper.js");




var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('sku-row-item'),
    createComponent = _createNamespace[0];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    skuValue: Object,
    skuKeyStr: String,
    skuEventBus: Object,
    selectedSku: Object,
    skuList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    choosable: function choosable() {
      return Object(__WEBPACK_IMPORTED_MODULE_2__utils_skuHelper__["e" /* isSkuChoosable */])(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id
      });
    }
  },
  methods: {
    onSelect: function onSelect() {
      if (this.choosable) {
        this.skuEventBus.$emit('sku:select', Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, this.skuValue, {
          skuKeyStr: this.skuKeyStr
        }));
      }
    }
  },
  render: function render(h) {
    var choosed = this.skuValue.id === this.selectedSku[this.skuKeyStr];
    return h("span", {
      "class": ['van-sku-row__item', {
        'van-sku-row__item--active': choosed,
        'van-sku-row__item--disabled': !this.choosable
      }],
      "on": {
        "click": this.onSelect
      }
    }, [this.skuValue.name]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuStepper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stepper__ = __webpack_require__("./node_modules/vant/es/stepper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./node_modules/vant/es/sku/constants.js");




var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('sku-stepper'),
    createComponent = _createNamespace[0];

var QUOTA_LIMIT = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* LIMIT_TYPE */].QUOTA_LIMIT,
    STOCK_LIMIT = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* LIMIT_TYPE */].STOCK_LIMIT;
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    hideStock: Boolean,
    selectedSku: Object,
    skuEventBus: Object,
    skuStockNum: Number,
    selectedNum: Number,
    stepperTitle: String,
    hideQuotaText: Boolean,
    selectedSkuComb: Object,
    disableStepperInput: Boolean,
    customStepperConfig: Object,
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT
    };
  },
  watch: {
    currentNum: function currentNum(num) {
      this.skuEventBus.$emit('sku:numChange', num);
    },
    stepperLimit: function stepperLimit(limit) {
      if (limit < this.currentNum) {
        this.currentNum = limit;
      }
    }
  },
  computed: {
    stock: function stock() {
      var stockNum = this.customStepperConfig.stockNum;

      if (stockNum !== undefined) {
        return stockNum;
      }

      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }

      return this.skuStockNum;
    },
    stockText: function stockText() {
      var stockFormatter = this.customStepperConfig.stockFormatter;
      if (stockFormatter) return stockFormatter(this.stock);
      return "\u5269\u4F59" + this.stock + "\u4EF6";
    },
    quotaText: function quotaText() {
      var _this$customStepperCo = this.customStepperConfig,
          quotaText = _this$customStepperCo.quotaText,
          hideQuotaText = _this$customStepperCo.hideQuotaText;
      if (hideQuotaText) return '';
      var text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = "\u6BCF\u4EBA\u9650\u8D2D" + this.quota + "\u4EF6";
      }

      return text;
    },
    stepperLimit: function stepperLimit() {
      var quotaLimit = this.quota - this.quotaUsed;
      var limit; // 无限购时直接取库存，有限购时取限购数和库存数中小的那个

      if (this.quota > 0 && quotaLimit <= this.stock) {
        // 修正负的limit
        limit = quotaLimit < 0 ? 0 : quotaLimit;
        this.limitType = QUOTA_LIMIT;
      } else {
        limit = this.stock;
        this.limitType = STOCK_LIMIT;
      }

      return limit;
    }
  },
  methods: {
    setCurrentNum: function setCurrentNum(num) {
      this.currentNum = num;
    },
    onOverLimit: function onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action: action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed
      });
    },
    onChange: function onChange(currentValue) {
      var handleStepperChange = this.customStepperConfig.handleStepperChange;
      handleStepperChange && handleStepperChange(currentValue);
      this.$emit('change', currentValue);
    }
  },
  render: function render(h) {
    var _this = this;

    return h("div", {
      "class": "van-sku-stepper-stock"
    }, [h("div", {
      "class": "van-sku-stepper-container"
    }, [h("div", {
      "class": "van-sku__stepper-title"
    }, [this.stepperTitle || '购买数量', "\uFF1A"]), h(__WEBPACK_IMPORTED_MODULE_1__stepper__["a" /* default */], {
      "class": "van-sku__stepper",
      "attrs": {
        "max": this.stepperLimit,
        "disableInput": this.disableStepperInput
      },
      "on": {
        "overlimit": this.onOverLimit,
        "change": this.onChange
      },
      "model": {
        value: _this.currentNum,
        callback: function callback($$v) {
          _this.currentNum = $$v;
        }
      }
    })]), !this.hideStock && h("div", {
      "class": "van-sku__stock"
    }, [this.stockText]), !this.hideQuotaText && this.quotaText && h("div", {
      "class": "van-sku__quota"
    }, [this.quotaText])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sku/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIMIT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UNSELECTED_SKU_VALUE_ID; });
var LIMIT_TYPE = {
  QUOTA_LIMIT: 0,
  STOCK_LIMIT: 1
};
var UNSELECTED_SKU_VALUE_ID = '';
/* harmony default export */ __webpack_exports__["c"] = ({
  LIMIT_TYPE: LIMIT_TYPE,
  UNSELECTED_SKU_VALUE_ID: UNSELECTED_SKU_VALUE_ID
});

/***/ }),

/***/ "./node_modules/vant/es/sku/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sku__ = __webpack_require__("./node_modules/vant/es/sku/Sku.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SkuActions__ = __webpack_require__("./node_modules/vant/es/sku/components/SkuActions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SkuHeader__ = __webpack_require__("./node_modules/vant/es/sku/components/SkuHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_SkuMessages__ = __webpack_require__("./node_modules/vant/es/sku/components/SkuMessages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_SkuStepper__ = __webpack_require__("./node_modules/vant/es/sku/components/SkuStepper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_SkuRow__ = __webpack_require__("./node_modules/vant/es/sku/components/SkuRow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_SkuRowItem__ = __webpack_require__("./node_modules/vant/es/sku/components/SkuRowItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_skuHelper__ = __webpack_require__("./node_modules/vant/es/sku/utils/skuHelper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__("./node_modules/vant/es/sku/constants.js");









__WEBPACK_IMPORTED_MODULE_0__Sku__["a" /* default */].SkuActions = __WEBPACK_IMPORTED_MODULE_1__components_SkuActions__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__Sku__["a" /* default */].SkuHeader = __WEBPACK_IMPORTED_MODULE_2__components_SkuHeader__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__Sku__["a" /* default */].SkuMessages = __WEBPACK_IMPORTED_MODULE_3__components_SkuMessages__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__Sku__["a" /* default */].SkuStepper = __WEBPACK_IMPORTED_MODULE_4__components_SkuStepper__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__Sku__["a" /* default */].SkuRow = __WEBPACK_IMPORTED_MODULE_5__components_SkuRow__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__Sku__["a" /* default */].SkuRowItem = __WEBPACK_IMPORTED_MODULE_6__components_SkuRowItem__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__Sku__["a" /* default */].skuHelper = __WEBPACK_IMPORTED_MODULE_7__utils_skuHelper__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__Sku__["a" /* default */].skuConstants = __WEBPACK_IMPORTED_MODULE_8__constants__["c" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Sku__["a" /* default */]);

/***/ }),

/***/ "./node_modules/vant/es/sku/utils/skuHelper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export normalizeSkuTree */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isAllSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSkuComb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSelectedSkuValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isSkuChoosable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./node_modules/vant/es/sku/constants.js");


/*
  normalize sku tree

  [
    {
      count: 2,
      k: "品种", // 规格名称 skuKeyName
      k_id: "1200", // skuKeyId
      k_s: "s1" // skuKeyStr
      v: [ // skuValues
        { // skuValue
          id: "1201", // skuValueId
          name: "萌" // 具体的规格值 skuValueName
        }, {
          id: "973",
          name: "帅"
        }
      ]
    },
    ...
  ]
                |
                v
  {
    s1: [{
      id: "1201",
      name: "萌"
    }, {
      id: "973",
      name: "帅"
    }],
    ...
  }
 */

var normalizeSkuTree = function normalizeSkuTree(skuTree) {
  var normalizedTree = {};
  skuTree.forEach(function (treeItem) {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
}; // 判断是否所有的sku都已经选中

var isAllSelected = function isAllSelected(skuTree, selectedSku) {
  // 筛选selectedSku对象中key值不为空的值
  var selected = Object.keys(selectedSku).filter(function (skuKeyStr) {
    return selectedSku[skuKeyStr] !== __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* UNSELECTED_SKU_VALUE_ID */];
  });
  return skuTree.length === selected.length;
}; // 根据已选择的 sku 获取 skuComb

var getSkuComb = function getSkuComb(skuList, selectedSku) {
  var skuComb = skuList.filter(function (item) {
    return Object.keys(selectedSku).every(function (skuKeyStr) {
      return String(item[skuKeyStr]) === String(selectedSku[skuKeyStr]);
    });
  });
  return skuComb[0];
}; // 获取已选择的sku名称

var getSelectedSkuValues = function getSelectedSkuValues(skuTree, selectedSku) {
  var normalizedTree = normalizeSkuTree(skuTree);
  return Object.keys(selectedSku).reduce(function (selectedValues, skuKeyStr) {
    var skuValues = normalizedTree[skuKeyStr];
    var skuValueId = selectedSku[skuKeyStr];

    if (skuValueId !== __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* UNSELECTED_SKU_VALUE_ID */]) {
      var skuValue = skuValues.filter(function (value) {
        return value.id === skuValueId;
      })[0];
      skuValue && selectedValues.push(skuValue);
    }

    return selectedValues;
  }, []);
}; // 判断sku是否可选

var isSkuChoosable = function isSkuChoosable(skuList, selectedSku, skuToChoose) {
  var _extends2;

  var key = skuToChoose.key,
      valueId = skuToChoose.valueId; // 先假设sku已选中，拼入已选中sku对象中

  var matchedSku = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, selectedSku, (_extends2 = {}, _extends2[key] = valueId, _extends2)); // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中


  var skusToCheck = Object.keys(matchedSku).filter(function (skuKey) {
    return matchedSku[skuKey] !== __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* UNSELECTED_SKU_VALUE_ID */];
  });
  var filteredSku = skuList.filter(function (sku) {
    return skusToCheck.every(function (skuKey) {
      return String(matchedSku[skuKey]) === String(sku[skuKey]);
    });
  });
  var stock = filteredSku.reduce(function (total, sku) {
    total += sku.stock_num;
    return total;
  }, 0);
  return stock > 0;
};
/* harmony default export */ __webpack_exports__["a"] = ({
  normalizeSkuTree: normalizeSkuTree,
  getSkuComb: getSkuComb,
  getSelectedSkuValues: getSelectedSkuValues,
  isAllSelected: isAllSelected,
  isSkuChoosable: isSkuChoosable
});

/***/ }),

/***/ "./node_modules/vant/es/slider/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_touch__ = __webpack_require__("./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");




var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('slider'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_touch__["a" /* TouchMixin */]],
  props: {
    disabled: Boolean,
    vertical: Boolean,
    activeColor: String,
    inactiveColor: String,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: [Number, String],
      default: 2
    }
  },
  computed: {
    range: function range() {
      return this.max - this.min;
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) {
        return;
      }

      this.touchStart(event);
      this.startValue = this.format(this.value);
      this.dragStatus = 'start';
    },
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'start') {
        this.$emit('drag-start');
      }

      Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom_event__["c" /* preventDefault */])(event, true);
      this.touchMove(event);
      this.dragStatus = 'draging';
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? this.deltaY : this.deltaX;
      var total = this.vertical ? rect.height : rect.width;
      var diff = delta / total * this.range;
      this.newValue = this.startValue + diff;
      this.updateValue(this.newValue);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'draging') {
        this.updateValue(this.newValue, true);
        this.$emit('drag-end');
      }

      this.dragStatus = '';
    },
    onClick: function onClick(event) {
      event.stopPropagation();
      if (this.disabled) return;
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? event.clientY - rect.top : event.clientX - rect.left;
      var total = this.vertical ? rect.height : rect.width;
      var value = delta / total * this.range + this.min;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);
      this.$emit('input', value);

      if (end) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  },
  render: function render(h) {
    var _barStyle;

    var vertical = this.vertical;
    var style = {
      background: this.inactiveColor
    };
    var mainAxis = vertical ? 'height' : 'width';
    var crossAxis = vertical ? 'width' : 'height';
    var barStyle = (_barStyle = {}, _barStyle[mainAxis] = (this.value - this.min) * 100 / this.range + "%", _barStyle[crossAxis] = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* addUnit */])(this.barHeight), _barStyle.background = this.activeColor, _barStyle);
    return h("div", {
      "style": style,
      "class": bem({
        disabled: this.disabled,
        vertical: vertical
      }),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('bar'),
      "style": barStyle
    }, [h("div", {
      "attrs": {
        "role": "slider",
        "tabindex": this.disabled ? -1 : 0,
        "aria-valuemin": this.min,
        "aria-valuenow": this.value,
        "aria-valuemax": this.max,
        "aria-orientation": this.vertical ? 'vertical' : 'horizontal'
      },
      "class": bem('button-wrapper'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots('button') || h("div", {
      "class": bem('button')
    })])])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/step/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('step'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  beforeCreate: function beforeCreate() {
    var steps = this.$parent.steps;
    var index = this.$parent.slots().indexOf(this.$vnode);
    steps.splice(index === -1 ? steps.length : index, 0, this);
  },
  beforeDestroy: function beforeDestroy() {
    var index = this.$parent.steps.indexOf(this);

    if (index > -1) {
      this.$parent.steps.splice(index, 1);
    }
  },
  computed: {
    status: function status() {
      var index = this.$parent.steps.indexOf(this);
      var active = this.$parent.active;

      if (index < active) {
        return 'finish';
      }

      if (index === active) {
        return 'process';
      }
    }
  },
  render: function render(h) {
    var _ref;

    var slots = this.slots,
        status = this.status;
    var _this$$parent = this.$parent,
        activeIcon = _this$$parent.activeIcon,
        activeColor = _this$$parent.activeColor,
        inactiveIcon = _this$$parent.inactiveIcon,
        direction = _this$$parent.direction;
    var titleStyle = status === 'process' && {
      color: activeColor
    };

    function Circle() {
      if (status === 'process') {
        return slots('active-icon') || h(__WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */], {
          "class": bem('icon'),
          "attrs": {
            "name": activeIcon,
            "color": activeColor
          }
        });
      }

      var inactiveIconSlot = slots('inactive-icon');

      if (inactiveIcon || inactiveIconSlot) {
        return inactiveIconSlot || h(__WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */], {
          "class": bem('icon'),
          "attrs": {
            "name": inactiveIcon
          }
        });
      }

      return h("i", {
        "class": bem('circle')
      });
    }

    return h("div", {
      "class": ['van-hairline', bem([direction, (_ref = {}, _ref[status] = status, _ref)])]
    }, [h("div", {
      "class": bem('title'),
      "style": titleStyle
    }, [this.slots()]), h("div", {
      "class": bem('circle-container')
    }, [Circle()]), h("div", {
      "class": bem('line')
    })]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/stepper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom_reset_scroll__ = __webpack_require__("./node_modules/vant/es/utils/dom/reset-scroll.js");





var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('stepper'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var LONG_PRESS_START_TIME = 600;
var LONG_PRESS_INTERVAL = 200;
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    disableInput: Boolean,
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: Infinity
    },
    step: {
      type: [Number, String],
      default: 1
    },
    defaultValue: {
      type: [Number, String],
      default: 1
    }
  },
  data: function data() {
    var value = this.range(Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* isDef */])(this.value) ? this.value : this.defaultValue);

    if (value !== +this.value) {
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.currentValue <= this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.currentValue >= this.max;
    },
    inputStyle: function inputStyle() {
      var style = {};

      if (this.inputWidth) {
        style.width = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(this.inputWidth);
      }

      if (this.buttonSize) {
        style.height = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(this.buttonSize);
      }

      return style;
    },
    buttonStyle: function buttonStyle() {
      var style = {};

      if (this.buttonSize) {
        var size = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(this.buttonSize);
        style.width = size;
        style.height = size;
      }

      return style;
    }
  },
  watch: {
    value: function value(val) {
      if (val !== this.currentValue) {
        this.currentValue = this.format(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    }
  },
  methods: {
    // filter illegal characters
    format: function format(value) {
      value = String(value).replace(/[^0-9.-]/g, '');
      return value === '' ? 0 : this.integer ? Math.floor(value) : +value;
    },
    // limit value range
    range: function range(value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min);
    },
    onInput: function onInput(event) {
      var value = event.target.value;
      var formatted = this.format(value);

      if (this.asyncChange) {
        event.target.value = this.currentValue;
        this.$emit('input', formatted);
        this.$emit('change', formatted);
      } else {
        if (+value !== formatted) {
          event.target.value = formatted;
        }

        this.currentValue = formatted;
      }
    },
    onChange: function onChange() {
      var type = this.type;

      if (this[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.step : +this.step;
      var value = Math.round((this.currentValue + diff) * 100) / 100;

      if (this.asyncChange) {
        this.$emit('input', value);
        this.$emit('change', value);
      } else {
        this.currentValue = this.range(value);
      }

      this.$emit(type);
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      this.currentValue = this.range(this.currentValue);
      this.$emit('blur', event); // fix edge case when input is empty and min is 0

      if (this.currentValue === 0) {
        event.target.value = this.currentValue;
      }

      Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom_reset_scroll__["a" /* resetScroll */])();
    },
    longPressStep: function longPressStep() {
      var _this = this;

      this.longPressTimer = setTimeout(function () {
        _this.onChange(_this.type);

        _this.longPressStep(_this.type);
      }, LONG_PRESS_INTERVAL);
    },
    onTouchStart: function onTouchStart(type) {
      var _this2 = this;

      clearTimeout(this.longPressTimer);
      this.isLongPress = false;
      this.longPressTimer = setTimeout(function () {
        _this2.isLongPress = true;

        _this2.onChange();

        _this2.longPressStep();
      }, LONG_PRESS_START_TIME);
    },
    onTouchEnd: function onTouchEnd(event) {
      clearTimeout(this.longPressTimer);

      if (this.isLongPress) {
        event.preventDefault();
      }
    }
  },
  render: function render(h) {
    var _this3 = this;

    var createListeners = function createListeners(type) {
      return {
        on: {
          click: function click() {
            _this3.type = type;

            _this3.onChange();
          },
          touchstart: function touchstart() {
            _this3.type = type;

            _this3.onTouchStart(type);
          },
          touchend: _this3.onTouchEnd,
          touchcancel: _this3.onTouchEnd
        }
      };
    };

    return h("div", {
      "class": bem()
    }, [h("button", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
      "style": this.buttonStyle,
      "class": bem('minus', {
        disabled: this.minusDisabled
      })
    }, createListeners('minus')])), h("input", {
      "attrs": {
        "type": "number",
        "role": "spinbutton",
        "aria-valuemax": this.max,
        "aria-valuemin": this.min,
        "aria-valuenow": this.currentValue,
        "disabled": this.disabled || this.disableInput
      },
      "class": bem('input'),
      "domProps": {
        "value": this.currentValue
      },
      "style": this.inputStyle,
      "on": {
        "input": this.onInput,
        "focus": this.onFocus,
        "blur": this.onBlur
      }
    }), h("button", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
      "style": this.buttonStyle,
      "class": bem('plus', {
        disabled: this.plusDisabled
      })
    }, createListeners('plus')]))]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/steps/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_color__ = __webpack_require__("./node_modules/vant/es/utils/color.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('steps'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    inactiveIcon: String,
    active: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_1__utils_color__["d" /* GREEN */]
    },
    activeIcon: {
      type: String,
      default: 'checked'
    }
  },
  data: function data() {
    return {
      steps: []
    };
  },
  render: function render(h) {
    return h("div", {
      "class": bem([this.direction])
    }, [h("div", {
      "class": bem('items')
    }, [this.slots()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sticky/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_bind_event__ = __webpack_require__("./node_modules/vant/es/mixins/bind-event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom_scroll__ = __webpack_require__("./node_modules/vant/es/utils/dom/scroll.js");




var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('sticky'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_bind_event__["a" /* BindEventMixin */])(function (bind) {
    if (!this.scroller) {
      this.scroller = Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom_scroll__["c" /* getScrollEventTarget */])(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll, true);
    this.onScroll();
  })],
  props: {
    zIndex: Number,
    container: null,
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      fixed: false,
      height: 0,
      transform: 0
    };
  },
  computed: {
    style: function style() {
      if (!this.fixed) {
        return;
      }

      var style = {};

      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* isDef */])(this.zIndex)) {
        style.zIndex = this.zIndex;
      }

      if (this.offsetTop && this.fixed) {
        style.top = this.offsetTop + "px";
      }

      if (this.transform) {
        style.transform = "translate3d(0, " + this.transform + "px, 0)";
      }

      return style;
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this = this;

      this.height = this.$el.offsetHeight;
      var container = this.container,
          offsetTop = this.offsetTop;
      var scrollTop = Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom_scroll__["d" /* getScrollTop */])(this.scroller);
      var topToPageTop = Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom_scroll__["a" /* getElementTop */])(this.$el);

      var emitScrollEvent = function emitScrollEvent() {
        _this.$emit('scroll', {
          scrollTop: scrollTop,
          isFixed: _this.fixed
        });
      }; // The sticky component should be kept inside the container element


      if (container) {
        var bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTop + this.height > bottomToPageTop) {
          var distanceToBottom = this.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < this.height) {
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTop);
          } else {
            this.fixed = false;
          }

          emitScrollEvent();
          return;
        }
      }

      if (scrollTop + offsetTop > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }

      emitScrollEvent();
    }
  },
  render: function render(h) {
    var fixed = this.fixed;
    var style = {
      height: fixed ? this.height + "px" : null
    };
    return h("div", {
      "style": style
    }, [h("div", {
      "class": bem({
        fixed: fixed
      }),
      "style": this.style
    }, [this.slots()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/submit-bar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button__ = __webpack_require__("./node_modules/vant/es/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");




 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('submit-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function SubmitBar(h, props, slots, ctx) {
  var tip = props.tip,
      price = props.price,
      tipIcon = props.tipIcon;

  function Text() {
    if (typeof price === 'number') {
      var priceText = props.currency + " " + (price / 100).toFixed(props.decimalLength);
      return h("div", {
        "class": bem('text')
      }, [h("span", [props.label || t('label')]), h("span", {
        "class": bem('price')
      }, [priceText]), props.suffixLabel && h("span", {
        "class": bem('suffix-label')
      }, [props.suffixLabel])]);
    }
  }

  function Tip() {
    if (slots.tip || tip) {
      return h("div", {
        "class": bem('tip')
      }, [tipIcon && h(__WEBPACK_IMPORTED_MODULE_4__icon__["a" /* default */], {
        "class": bem('tip-icon'),
        "attrs": {
          "name": tipIcon
        }
      }), tip && h("span", {
        "class": bem('tip-text')
      }, [tip]), slots.tip && slots.tip()]);
    }
  }

  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    })
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx)]), [slots.top && slots.top(), Tip(), h("div", {
    "class": bem('bar')
  }, [slots.default && slots.default(), Text(), h(__WEBPACK_IMPORTED_MODULE_3__button__["a" /* default */], {
    "attrs": {
      "square": true,
      "size": "large",
      "type": props.buttonType,
      "loading": props.loading,
      "disabled": props.disabled,
      "text": props.loading ? '' : props.buttonText
    },
    "class": bem('button'),
    "on": {
      "click": function click() {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, 'submit');
      }
    }
  })])]);
}

SubmitBar.props = {
  tip: String,
  label: String,
  price: Number,
  tipIcon: String,
  loading: Boolean,
  disabled: Boolean,
  buttonText: String,
  suffixLabel: String,
  safeAreaInsetBottom: Boolean,
  decimalLength: {
    type: Number,
    default: 2
  },
  currency: {
    type: String,
    default: '¥'
  },
  buttonType: {
    type: String,
    default: 'danger'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(SubmitBar));

/***/ }),

/***/ "./node_modules/vant/es/swipe-cell/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_format_number__ = __webpack_require__("./node_modules/vant/es/utils/format/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_touch__ = __webpack_require__("./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_click_outside__ = __webpack_require__("./node_modules/vant/es/mixins/click-outside.js");






var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('swipe-cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var THRESHOLD = 0.15;
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_touch__["a" /* TouchMixin */], Object(__WEBPACK_IMPORTED_MODULE_4__mixins_click_outside__["a" /* ClickOutsideMixin */])({
    event: 'touchstart',
    method: 'onClick'
  })],
  props: {
    onClose: Function,
    disabled: Boolean,
    leftWidth: Number,
    rightWidth: Number,
    name: {
      type: [Number, String],
      default: ''
    }
  },
  data: function data() {
    return {
      offset: 0,
      dragging: false
    };
  },
  computed: {
    computedLeftWidth: function computedLeftWidth() {
      return this.leftWidth || this.getWidthByRef('left');
    },
    computedRightWidth: function computedRightWidth() {
      return this.rightWidth || this.getWidthByRef('right');
    }
  },
  methods: {
    getWidthByRef: function getWidthByRef(ref) {
      if (this.$refs[ref]) {
        var rect = this.$refs[ref].getBoundingClientRect();
        return rect.width;
      }

      return 0;
    },
    open: function open(position) {
      var offset = position === 'left' ? this.computedLeftWidth : -this.computedRightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      this.offset = Object(__WEBPACK_IMPORTED_MODULE_1__utils_format_number__["a" /* range */])(offset, -this.computedRightWidth, this.computedLeftWidth);

      if (this.offset) {
        this.swiping = true;
      } else {
        this.opened = false;
      }
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          computedLeftWidth = this.computedLeftWidth,
          computedRightWidth = this.computedRightWidth;
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

      if (direction === 'right' && -offset > computedRightWidth * threshold && computedRightWidth > 0) {
        this.open('right'); // left
      } else if (direction === 'left' && offset > computedLeftWidth * threshold && computedLeftWidth > 0) {
        this.open('left'); // reset
      } else {
        this.swipeMove(0);
      }
    },
    startDrag: function startDrag(event) {
      if (this.disabled) {
        return;
      }

      this.dragging = true;
      this.startOffset = this.offset;
      this.touchStart(event);
    },
    onDrag: function onDrag(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom_event__["c" /* preventDefault */])(event, true);
        this.swipeMove(this.deltaX + this.startOffset);
      }
    },
    endDrag: function endDrag() {
      if (this.disabled) {
        return;
      }

      this.dragging = false;

      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? 'left' : 'right');
      }
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      this.$emit('click', position);

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this, {
          name: this.name
        });
      } else {
        this.swipeMove(0);
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var onClick = function onClick(position, stop) {
      return function (event) {
        if (stop) {
          event.stopPropagation();
        }

        _this.onClick(position);
      };
    };

    var wrapperStyle = {
      transform: "translate3d(" + this.offset + "px, 0, 0)",
      transition: this.dragging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
    };
    return h("div", {
      "class": bem(),
      "on": {
        "click": onClick('cell'),
        "touchstart": this.startDrag,
        "touchmove": this.onDrag,
        "touchend": this.endDrag,
        "touchcancel": this.endDrag
      }
    }, [h("div", {
      "class": bem('wrapper'),
      "style": wrapperStyle,
      "on": {
        "transitionend": function transitionend() {
          _this.swiping = false;
        }
      }
    }, [this.slots('left') && h("div", {
      "ref": "left",
      "class": bem('left'),
      "on": {
        "click": onClick('left', true)
      }
    }, [this.slots('left')]), this.slots(), this.slots('right') && h("div", {
      "ref": "right",
      "class": bem('right'),
      "on": {
        "click": onClick('right', true)
      }
    }, [this.slots('right')])])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/swipe-item/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('swipe-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  data: function data() {
    return {
      offset: 0
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  },
  render: function render(h) {
    var _this$$parent = this.$parent,
        vertical = _this$$parent.vertical,
        computedWidth = _this$$parent.computedWidth,
        computedHeight = _this$$parent.computedHeight;
    var style = {
      width: computedWidth + 'px',
      height: vertical ? computedHeight + 'px' : '100%',
      transform: "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
    };
    return h("div", {
      "class": bem(),
      "style": style,
      "on": Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, this.$listeners)
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/swipe/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom_event__ = __webpack_require__("./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_touch__ = __webpack_require__("./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_bind_event__ = __webpack_require__("./node_modules/vant/es/mixins/bind-event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_dom_raf__ = __webpack_require__("./node_modules/vant/es/utils/dom/raf.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_format_number__ = __webpack_require__("./node_modules/vant/es/utils/format/number.js");







var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('swipe'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_touch__["a" /* TouchMixin */], Object(__WEBPACK_IMPORTED_MODULE_3__mixins_bind_event__["a" /* BindEventMixin */])(function (bind, isBind) {
    bind(window, 'resize', this.onResize, true);

    if (isBind) {
      this.initialize();
    } else {
      this.clear();
    }
  })],
  props: {
    width: Number,
    height: Number,
    autoplay: Number,
    vertical: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },
  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var _ref;

      var mainAxis = this.vertical ? 'height' : 'width';
      var crossAxis = this.vertical ? 'width' : 'height';
      return _ref = {}, _ref[mainAxis] = this.trackSize + "px", _ref[crossAxis] = this[crossAxis] ? this[crossAxis] + "px" : '', _ref.transitionDuration = (this.swiping ? 0 : this.duration) + "ms", _ref.transform = "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)", _ref;
    },
    indicatorStyle: function indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    },
    minOffset: function minOffset() {
      var rect = this.$el.getBoundingClientRect();
      return (this.vertical ? rect.height : rect.width) - this.size * this.count;
    }
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = this.initialSwipe;
      }

      clearTimeout(this.timer);

      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onResize: function onResize() {
      this.initialize(this.activeIndicator);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.isCorrectDirection) {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom_event__["c" /* preventDefault */])(event, true);
        this.move({
          offset: this.delta
        });
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;

      if (this.delta && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move({
          pace: offset > 0 ? this.delta > 0 ? -1 : 1 : 0,
          emitChange: true
        });
      }

      this.swiping = false;
      this.autoPlay();
    },
    getTargetActive: function getTargetActive(pace) {
      var active = this.active,
          count = this.count;

      if (pace) {
        if (this.loop) {
          return Object(__WEBPACK_IMPORTED_MODULE_5__utils_format_number__["a" /* range */])(active + pace, -1, count);
        }

        return Object(__WEBPACK_IMPORTED_MODULE_5__utils_format_number__["a" /* range */])(active + pace, 0, count - 1);
      }

      return active;
    },
    getTargetOffset: function getTargetOffset(targetActive, offset) {
      var currentPosition = targetActive * this.size;

      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }

      var targetOffset = Math.round(offset - currentPosition);

      if (!this.loop) {
        targetOffset = Object(__WEBPACK_IMPORTED_MODULE_5__utils_format_number__["a" /* range */])(targetOffset, this.minOffset, 0);
      }

      return targetOffset;
    },
    move: function move(_ref2) {
      var _ref2$pace = _ref2.pace,
          pace = _ref2$pace === void 0 ? 0 : _ref2$pace,
          _ref2$offset = _ref2.offset,
          offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
          emitChange = _ref2.emitChange;
      var loop = this.loop,
          count = this.count,
          active = this.active,
          swipes = this.swipes,
          trackSize = this.trackSize,
          minOffset = this.minOffset;

      if (count <= 1) {
        return;
      }

      var targetActive = this.getTargetActive(pace);
      var targetOffset = this.getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (loop) {
        if (swipes[0]) {
          var outRightBound = targetOffset < minOffset;
          swipes[0].offset = outRightBound ? trackSize : 0;
        }

        if (swipes[count - 1]) {
          var outLeftBound = targetOffset > 0;
          swipes[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      this.active = targetActive;
      this.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },
    swipeTo: function swipeTo(index, options) {
      var _this = this;

      if (options === void 0) {
        options = {};
      }

      this.swiping = true;
      this.resetTouchStatus();
      this.correctPosition();
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_dom_raf__["b" /* doubleRaf */])(function () {
        _this.move({
          pace: index % _this.count - _this.active,
          emitChange: true
        });

        if (options.immediate) {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_dom_raf__["b" /* doubleRaf */])(function () {
            _this.swiping = false;
          });
        } else {
          _this.swiping = false;
        }
      });
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move({
          pace: this.count
        });
      }

      if (this.active >= this.count) {
        this.move({
          pace: -this.count
        });
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this2 = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this2.swiping = true;

          _this2.resetTouchStatus();

          _this2.correctPosition();

          Object(__WEBPACK_IMPORTED_MODULE_4__utils_dom_raf__["b" /* doubleRaf */])(function () {
            _this2.swiping = false;

            _this2.move({
              pace: 1,
              emitChange: true
            });

            _this2.autoPlay();
          });
        }, autoplay);
      }
    },
    renderIndicator: function renderIndicator() {
      var _this3 = this;

      var h = this.$createElement;
      var count = this.count,
          activeIndicator = this.activeIndicator;
      var slot = this.slots('indicator');

      if (slot) {
        return slot;
      }

      if (this.showIndicators && count > 1) {
        return h("div", {
          "class": bem('indicators', {
            vertical: this.vertical
          })
        }, [Array.apply(void 0, Array(count)).map(function (empty, index) {
          return h("i", {
            "class": bem('indicator', {
              active: index === activeIndicator
            }),
            "style": index === activeIndicator ? _this3.indicatorStyle : null
          });
        })]);
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem()
    }, [h("div", {
      "ref": "track",
      "style": this.trackStyle,
      "class": bem('track'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots()]), this.renderIndicator()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/switch-cell/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cell__ = __webpack_require__("./node_modules/vant/es/cell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__switch__ = __webpack_require__("./node_modules/vant/es/switch/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__switch_shared__ = __webpack_require__("./node_modules/vant/es/switch/shared.js");






 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* createNamespace */])('switch-cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SwitchCell(h, props, slots, ctx) {
  return h(__WEBPACK_IMPORTED_MODULE_4__cell__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__vue_babel_helper_vue_jsx_merge_props___default()([{
    "attrs": {
      "center": true,
      "size": props.cellSize,
      "title": props.title,
      "border": props.border
    },
    "class": bem([props.cellSize])
  }, Object(__WEBPACK_IMPORTED_MODULE_3__utils_functional__["b" /* inherit */])(ctx)]), [h(__WEBPACK_IMPORTED_MODULE_5__switch__["a" /* default */], {
    "props": Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props),
    "on": Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, ctx.listeners)
  })]);
}

SwitchCell.props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_6__switch_shared__["a" /* switchProps */], {
  title: String,
  cellSize: String,
  border: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: '24px'
  }
});
/* harmony default export */ __webpack_exports__["a"] = (createComponent(SwitchCell));

/***/ }),

/***/ "./node_modules/vant/es/switch/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_color__ = __webpack_require__("./node_modules/vant/es/utils/color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./node_modules/vant/es/switch/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading__ = __webpack_require__("./node_modules/vant/es/loading/index.js");





 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('switch'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Switch(h, props, slots, ctx) {
  var size = props.size,
      value = props.value,
      loading = props.loading,
      disabled = props.disabled,
      activeColor = props.activeColor,
      activeValue = props.activeValue,
      inactiveColor = props.inactiveColor,
      inactiveValue = props.inactiveValue;
  var checked = value === activeValue;
  var switchStyle = {
    fontSize: size,
    backgroundColor: checked ? activeColor : inactiveColor
  };
  var loadingColor = checked ? activeColor || __WEBPACK_IMPORTED_MODULE_2__utils_color__["a" /* BLUE */] : inactiveColor || __WEBPACK_IMPORTED_MODULE_2__utils_color__["c" /* GRAY_DARK */];

  function onClick() {
    if (!disabled && !loading) {
      var newValue = checked ? inactiveValue : activeValue;
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_functional__["a" /* emit */])(ctx, 'input', newValue);
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_functional__["a" /* emit */])(ctx, 'change', newValue);
    }
  }

  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem({
      on: checked,
      disabled: disabled
    }),
    "attrs": {
      "role": "switch",
      "aria-checked": String(checked)
    },
    "style": switchStyle,
    "on": {
      "click": onClick
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_4__utils_functional__["b" /* inherit */])(ctx)]), [h("div", {
    "class": bem('node')
  }, [loading && h(__WEBPACK_IMPORTED_MODULE_5__loading__["a" /* default */], {
    "class": bem('loading'),
    "attrs": {
      "color": loadingColor
    }
  })])]);
}

Switch.props = __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* switchProps */];
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Switch));

/***/ }),

/***/ "./node_modules/vant/es/switch/shared.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return switchProps; });
/**
 * Common Switch Props
 */
var switchProps = {
  value: null,
  loading: Boolean,
  disabled: Boolean,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: null,
    default: true
  },
  inactiveValue: {
    type: null,
    default: false
  },
  size: {
    type: String,
    default: '30px'
  }
};

/***/ }),

/***/ "./node_modules/vant/es/tab/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");
/* eslint-disable object-shorthand */



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('tab'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_relation__["a" /* ChildrenMixin */])('vanTabs')],
  props: {
    name: [Number, String],
    title: String,
    disabled: Boolean
  },
  data: function data() {
    return {
      inited: false
    };
  },
  computed: {
    computedName: function computedName() {
      return this.name || this.index;
    },
    isActive: function isActive() {
      return this.computedName === this.parent.currentName;
    }
  },
  watch: {
    'parent.currentIndex': function parentCurrentIndex() {
      this.inited = this.inited || this.isActive;
    },
    title: function title() {
      this.parent.setLine();
    }
  },
  mounted: function mounted() {
    if (this.slots('title')) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },
  render: function render(h) {
    var slots = this.slots,
        isActive = this.isActive;
    var shouldRender = this.inited || !this.parent.lazyRender;
    var Content = [shouldRender ? slots() : h()];

    if (slots('title')) {
      Content.push(h("div", {
        "ref": "title"
      }, [slots('title')]));
    }

    if (this.parent.animated) {
      return h("div", {
        "attrs": {
          "role": "tabpanel",
          "aria-hidden": !isActive
        },
        "class": bem('pane-wrapper', {
          inactive: !isActive
        })
      }, [h("div", {
        "class": bem('pane')
      }, [Content])]);
    }

    return h("div", {
      "directives": [{
        name: "show",
        value: isActive
      }],
      "attrs": {
        "role": "tabpanel"
      },
      "class": bem('pane')
    }, [Content]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/tabbar-item/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info__ = __webpack_require__("./node_modules/vant/es/info/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_router__ = __webpack_require__("./node_modules/vant/es/utils/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");







var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('tabbar-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_5__mixins_relation__["a" /* ChildrenMixin */])('vanTabbar')],
  props: Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_4__utils_router__["c" /* routeProps */], {
    dot: Boolean,
    icon: String,
    name: [Number, String],
    info: [Number, String]
  }),
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    routeActive: function routeActive() {
      var to = this.to,
          $route = this.$route;

      if (to && $route) {
        var path = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* isObj */])(to) ? to.path : to;
        return $route.path === path;
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.parent.onChange(this.name || this.index);
      this.$emit('click', event);
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_router__["b" /* route */])(this.$router, this);
    }
  },
  render: function render(h) {
    var icon = this.icon,
        slots = this.slots;
    var active = this.parent.route ? this.routeActive : this.active;
    var color = this.parent[active ? 'activeColor' : 'inactiveColor'];
    return h("div", {
      "class": bem({
        active: active
      }),
      "style": {
        color: color
      },
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('icon', {
        dot: this.dot
      })
    }, [slots('icon', {
      active: active
    }) || icon && h(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], {
      "attrs": {
        "name": icon
      }
    }), h(__WEBPACK_IMPORTED_MODULE_3__info__["a" /* default */], {
      "attrs": {
        "info": this.info
      }
    })]), h("div", {
      "class": bem('text')
    }, [slots('default', {
      active: active
    })])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/tabbar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");



var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('tabbar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__mixins_relation__["b" /* ParentMixin */])('vanTabbar')],
  props: {
    route: Boolean,
    activeColor: String,
    inactiveColor: String,
    safeAreaInsetBottom: Boolean,
    value: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  watch: {
    children: function children() {
      this.setActiveItem();
    },
    value: function value() {
      this.setActiveItem();
    }
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.children.forEach(function (item, index) {
        item.active = (item.name || index) === _this.value;
      });
    },
    onChange: function onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "style": {
        zIndex: this.zIndex
      },
      "class": [{
        'van-hairline--top-bottom': this.border
      }, bem({
        fixed: this.fixed,
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      })]
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/tabs/Content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_touch__ = __webpack_require__("./node_modules/vant/es/mixins/touch.js");




var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('tabs'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var MIN_SWIPE_DISTANCE = 50;
/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_touch__["a" /* TouchMixin */]],
  props: {
    count: Number,
    duration: Number,
    animated: Boolean,
    swipeable: Boolean,
    currentIndex: Number
  },
  computed: {
    style: function style() {
      if (this.animated) {
        return {
          transform: "translate3d(" + -1 * this.currentIndex * 100 + "%, 0, 0)",
          transitionDuration: this.duration + "s"
        };
      }
    },
    listeners: function listeners() {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        };
      }
    }
  },
  methods: {
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          currentIndex = this.currentIndex;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1);
        }
      }
    },
    renderChildren: function renderChildren() {
      var h = this.$createElement;

      if (this.animated) {
        return h("div", {
          "class": bem('track'),
          "style": this.style
        }, [this.slots()]);
      }

      return this.slots();
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem('content', {
        animated: this.animated
      }),
      "on": Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, this.listeners)
    }, [this.renderChildren()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/tabs/Title.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");

var bem = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('tab')[1];
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    type: String,
    color: String,
    title: String,
    isActive: Boolean,
    ellipsis: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    swipeThreshold: Number
  },
  computed: {
    style: function style() {
      var style = {};
      var color = this.color,
          isActive = this.isActive;
      var isCard = this.type === 'card'; // card theme color

      if (color && isCard) {
        style.borderColor = color;

        if (!this.disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      var titleColor = isActive ? this.activeColor : this.inactiveColor;

      if (titleColor) {
        style.color = titleColor;
      }

      if (this.scrollable && this.ellipsis) {
        style.flexBasis = 88 / this.swipeThreshold + "%";
      }

      return style;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    },
    renderTitle: function renderTitle(el) {
      var title = this.$refs.title;
      title.innerHTML = '';
      title.appendChild(el);
    }
  },
  render: function render(h) {
    return h("div", {
      "attrs": {
        "role": "tab",
        "aria-selected": this.isActive
      },
      "class": bem({
        active: this.isActive,
        disabled: this.disabled,
        complete: !this.ellipsis
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [h("span", {
      "ref": "title",
      "class": {
        'van-ellipsis': this.ellipsis
      }
    }, [this.title])]);
  }
});

/***/ }),

/***/ "./node_modules/vant/es/tabs/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/tabs/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_relation__ = __webpack_require__("./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_bind_event__ = __webpack_require__("./node_modules/vant/es/mixins/bind-event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_dom_scroll__ = __webpack_require__("./node_modules/vant/es/utils/dom/scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Title__ = __webpack_require__("./node_modules/vant/es/tabs/Title.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Content__ = __webpack_require__("./node_modules/vant/es/tabs/Content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sticky__ = __webpack_require__("./node_modules/vant/es/sticky/index.js");









var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('tabs'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_2__mixins_relation__["b" /* ParentMixin */])('vanTabs'), Object(__WEBPACK_IMPORTED_MODULE_3__mixins_bind_event__["a" /* BindEventMixin */])(function (bind) {
    bind(window, 'resize', this.setLine, true);
  })],
  model: {
    prop: 'active'
  },
  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    background: String,
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      default: 'line'
    },
    active: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 0.3
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    lazyRender: {
      type: Boolean,
      default: true
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },
  data: function data() {
    return {
      position: '',
      currentIndex: null,
      lineStyle: {
        backgroundColor: this.color
      }
    };
  },
  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.children.length > this.swipeThreshold || !this.ellipsis;
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color,
        background: this.background
      };
    },
    currentName: function currentName() {
      var activeTab = this.children[this.currentIndex];

      if (activeTab) {
        return activeTab.computedName;
      }
    }
  },
  watch: {
    active: function active(name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name);
      }
    },
    color: function color() {
      this.setLine();
    },
    children: function children() {
      this.setCurrentIndexByName(this.currentName || this.active);
      this.scrollIntoView();
      this.setLine();
    },
    currentIndex: function currentIndex() {
      this.scrollIntoView();
      this.setLine(); // scroll to correct position

      if (this.stickyFixed) {
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_dom_scroll__["e" /* setRootScrollTop */])(Object(__WEBPACK_IMPORTED_MODULE_4__utils_dom_scroll__["a" /* getElementTop */])(this.$el) - this.offsetTop);
      }
    }
  },
  mounted: function mounted() {
    this.onShow();
  },
  activated: function activated() {
    this.onShow();
    this.setLine();
  },
  methods: {
    onShow: function onShow() {
      var _this = this;

      this.$nextTick(function () {
        _this.inited = true;

        _this.scrollIntoView(true);
      });
    },
    // update nav bar style
    setLine: function setLine() {
      var _this2 = this;

      var shouldAnimate = this.inited;
      this.$nextTick(function () {
        var titles = _this2.$refs.titles;

        if (!titles || !titles[_this2.currentIndex] || _this2.type !== 'line') {
          return;
        }

        var title = titles[_this2.currentIndex].$el;
        var lineWidth = _this2.lineWidth,
            lineHeight = _this2.lineHeight;
        var width = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* isDef */])(lineWidth) ? lineWidth : title.offsetWidth / 2;
        var left = title.offsetLeft + title.offsetWidth / 2;
        var lineStyle = {
          width: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* addUnit */])(width),
          backgroundColor: _this2.color,
          transform: "translateX(" + left + "px) translateX(-50%)"
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = _this2.duration + "s";
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* isDef */])(lineHeight)) {
          var height = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* addUnit */])(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        _this2.lineStyle = lineStyle;
      });
    },
    // correct the index of active tab
    setCurrentIndexByName: function setCurrentIndexByName(name) {
      var matched = this.children.filter(function (tab) {
        return tab.computedName === name;
      });
      var defaultIndex = (this.children[0] || {}).index || 0;
      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex);
    },
    setCurrentIndex: function setCurrentIndex(currentIndex) {
      currentIndex = this.findAvailableTab(currentIndex);

      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* isDef */])(currentIndex) && currentIndex !== this.currentIndex) {
        var shouldEmitChange = this.currentIndex !== null;
        this.currentIndex = currentIndex;
        this.$emit('input', this.currentName);

        if (shouldEmitChange) {
          this.$emit('change', this.currentName, this.children[currentIndex].title);
        }
      }
    },
    findAvailableTab: function findAvailableTab(index) {
      var diff = index < this.currentIndex ? -1 : 1;

      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index;
        }

        index += diff;
      }
    },
    // emit event when clicked
    onClick: function onClick(index) {
      var _this$children$index = this.children[index],
          title = _this$children$index.title,
          disabled = _this$children$index.disabled,
          computedName = _this$children$index.computedName;

      if (disabled) {
        this.$emit('disabled', computedName, title);
      } else {
        this.setCurrentIndex(index);
        this.$emit('click', computedName, title);
      }
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView(immediate) {
      var titles = this.$refs.titles;

      if (!this.scrollable || !titles || !titles[this.currentIndex]) {
        return;
      }

      var nav = this.$refs.nav;
      var title = titles[this.currentIndex].$el;
      var to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* scrollLeftTo */])(nav, to, immediate ? 0 : this.duration);
    },
    // render title slot of child tab
    renderTitle: function renderTitle(el, index) {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.$refs.titles[index].renderTitle(el);
      });
    },
    onScroll: function onScroll(params) {
      this.stickyFixed = params.isFixed;
      this.$emit('scroll', params);
    }
  },
  render: function render(h) {
    var _this4 = this;

    var type = this.type,
        ellipsis = this.ellipsis,
        animated = this.animated,
        scrollable = this.scrollable;
    var Nav = this.children.map(function (item, index) {
      return h(__WEBPACK_IMPORTED_MODULE_5__Title__["a" /* default */], {
        "ref": "titles",
        "refInFor": true,
        "attrs": {
          "type": type,
          "title": item.title,
          "color": _this4.color,
          "isActive": index === _this4.currentIndex,
          "ellipsis": ellipsis,
          "disabled": item.disabled,
          "scrollable": scrollable,
          "activeColor": _this4.titleActiveColor,
          "inactiveColor": _this4.titleInactiveColor,
          "swipeThreshold": _this4.swipeThreshold
        },
        "on": {
          "click": function click() {
            _this4.onClick(index);
          }
        }
      });
    });
    var Wrap = h("div", {
      "ref": "wrap",
      "class": [bem('wrap', {
        scrollable: scrollable
      }), {
        'van-hairline--top-bottom': type === 'line' && this.border
      }]
    }, [h("div", {
      "ref": "nav",
      "attrs": {
        "role": "tablist"
      },
      "class": bem('nav', [type]),
      "style": this.navStyle
    }, [this.slots('nav-left'), Nav, type === 'line' && h("div", {
      "class": bem('line'),
      "style": this.lineStyle
    }), this.slots('nav-right')])]);
    return h("div", {
      "class": bem([type])
    }, [this.sticky ? h(__WEBPACK_IMPORTED_MODULE_7__sticky__["a" /* default */], {
      "attrs": {
        "container": this.$el,
        "offsetTop": this.offsetTop
      },
      "on": {
        "scroll": this.onScroll
      }
    }, [Wrap]) : Wrap, h(__WEBPACK_IMPORTED_MODULE_6__Content__["a" /* default */], {
      "attrs": {
        "count": this.children.length,
        "animated": animated,
        "duration": this.duration,
        "swipeable": this.swipeable,
        "currentIndex": this.currentIndex
      },
      "on": {
        "change": this.setCurrentIndex
      }
    }, [this.slots()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/tabs/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scrollLeftTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom_raf__ = __webpack_require__("./node_modules/vant/es/utils/dom/raf.js");

function scrollLeftTo(el, to, duration) {
  var count = 0;
  var from = el.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);

  function animate() {
    el.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom_raf__["c" /* raf */])(animate);
    }
  }

  animate();
}

/***/ }),

/***/ "./node_modules/vant/es/tag/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");


 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('tag'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Tag(h, props, slots, ctx) {
  var _style;

  var type = props.type,
      mark = props.mark,
      plain = props.plain,
      color = props.color,
      round = props.round,
      size = props.size;
  var key = plain ? 'color' : 'backgroundColor';
  var style = (_style = {}, _style[key] = color, _style);

  if (props.textColor) {
    style.color = props.textColor;
  }

  var classes = {
    mark: mark,
    plain: plain,
    round: round
  };

  if (size) {
    classes[size] = size;
  }

  return h("span", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "style": style,
    "class": [bem([classes, type]), {
      'van-hairline--surround': plain
    }]
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx, true)]), [slots.default && slots.default()]);
}

Tag.props = {
  size: String,
  mark: Boolean,
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String,
  type: {
    type: String,
    default: 'default'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Tag));

/***/ }),

/***/ "./node_modules/vant/es/toast/Toast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_popup__ = __webpack_require__("./node_modules/vant/es/mixins/popup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading__ = __webpack_require__("./node_modules/vant/es/loading/index.js");





var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createNamespace */])('toast'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_popup__["a" /* PopupMixin */]],
  props: {
    icon: String,
    className: null,
    iconPrefix: String,
    loadingType: String,
    forbidClick: Boolean,
    message: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      clickable: false
    };
  },
  mounted: function mounted() {
    this.toggleClickable();
  },
  destroyed: function destroyed() {
    this.toggleClickable();
  },
  watch: {
    value: function value() {
      this.toggleClickable();
    },
    forbidClick: function forbidClick() {
      this.toggleClickable();
    }
  },
  methods: {
    toggleClickable: function toggleClickable() {
      var clickable = this.value && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        var action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
      }
    },

    /* istanbul ignore next */
    onAfterEnter: function onAfterEnter() {
      this.$emit('opened');

      if (this.onOpened) {
        this.onOpened();
      }
    },
    onAfterLeave: function onAfterLeave() {
      this.$emit('closed');
    }
  },
  render: function render(h) {
    var type = this.type,
        icon = this.icon,
        message = this.message,
        iconPrefix = this.iconPrefix,
        loadingType = this.loadingType;
    var hasIcon = icon || type === 'success' || type === 'fail';

    function ToastIcon() {
      if (hasIcon) {
        return h(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], {
          "class": bem('icon'),
          "attrs": {
            "classPrefix": iconPrefix,
            "name": icon || type
          }
        });
      }

      if (type === 'loading') {
        return h(__WEBPACK_IMPORTED_MODULE_3__loading__["a" /* default */], {
          "class": bem('loading'),
          "attrs": {
            "color": "white",
            "type": loadingType
          }
        });
      }
    }

    function Message() {
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* isDef */])(message) || message === '') {
        return;
      }

      if (type === 'html') {
        return h("div", {
          "class": bem('text'),
          "domProps": {
            "innerHTML": message
          }
        });
      }

      return h("div", {
        "class": bem('text')
      }, [message]);
    }

    return h("transition", {
      "attrs": {
        "name": "van-fade"
      },
      "on": {
        "afterEnter": this.onAfterEnter,
        "afterLeave": this.onAfterLeave
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [bem([this.position, {
        text: !hasIcon && type !== 'loading'
      }]), this.className]
    }, [ToastIcon(), Message()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/toast/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Toast__ = __webpack_require__("./node_modules/vant/es/toast/Toast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");




var defaultOptions = {
  icon: '',
  type: 'text',
  mask: false,
  value: true,
  message: '',
  className: '',
  onClose: null,
  onOpened: null,
  duration: 3000,
  iconPrefix: undefined,
  position: 'middle',
  forbidClick: false,
  loadingType: undefined,
  getContainer: 'body',
  overlayStyle: null
};
var queue = [];
var multiple = false;

var currentOptions = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, defaultOptions);

function parseOptions(message) {
  if (Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* isObj */])(message)) {
    return message;
  }

  return {
    message: message
  };
}

function createInstance() {
  /* istanbul ignore if */
  if (__WEBPACK_IMPORTED_MODULE_3__utils__["f" /* isServer */]) {
    return {};
  }

  if (!queue.length || multiple) {
    var toast = new (__WEBPACK_IMPORTED_MODULE_1_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_2__Toast__["a" /* default */]))({
      el: document.createElement('div')
    });
    queue.push(toast);
  }

  return queue[queue.length - 1];
} // transform toast options to popup props


function transformOptions(options) {
  options = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, options);
  options.overlay = options.mask;
  delete options.mask;
  delete options.duration;
  return options;
}

function Toast(options) {
  if (options === void 0) {
    options = {};
  }

  var toast = createInstance(); // should add z-index if previous toast has not disappeared

  if (toast.value) {
    toast.updateZIndex();
  }

  options = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, currentOptions, {}, parseOptions(options), {
    clear: function clear() {
      toast.value = false;

      if (options.onClose) {
        options.onClose();
      }

      if (multiple && !__WEBPACK_IMPORTED_MODULE_3__utils__["f" /* isServer */]) {
        toast.$on('closed', function () {
          clearTimeout(toast.timer);
          queue = queue.filter(function (item) {
            return item !== toast;
          });
          var parent = toast.$el.parentNode;

          if (parent) {
            parent.removeChild(toast.$el);
          }

          toast.$destroy();
        });
      }
    }
  });

  Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(toast, transformOptions(options));

  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast(Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
      type: type
    }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = createMethod(method);
});

Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (!multiple) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = function (options) {
  Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, defaultOptions);
};

Toast.allowMultiple = function (value) {
  if (value === void 0) {
    value = true;
  }

  multiple = value;
};

Toast.install = function () {
  __WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2__Toast__["a" /* default */]);
};

__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.$toast = Toast;
/* harmony default export */ __webpack_exports__["a"] = (Toast);

/***/ }),

/***/ "./node_modules/vant/es/tree-select/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__ = __webpack_require__("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functional__ = __webpack_require__("./node_modules/vant/es/utils/functional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");



 // Types

var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('tree-select'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function TreeSelect(h, props, slots, ctx) {
  var height = props.height,
      items = props.items,
      mainActiveIndex = props.mainActiveIndex,
      activeId = props.activeId;
  var selectedItem = items[mainActiveIndex] || {};
  var subItems = selectedItem.children || [];
  return h("div", __WEBPACK_IMPORTED_MODULE_0__vue_babel_helper_vue_jsx_merge_props___default()([{
    "class": bem(),
    "style": {
      height: height + "px"
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["b" /* inherit */])(ctx)]), [h("div", {
    "class": bem('nav')
  }, [items.map(function (item, index) {
    return h("div", {
      "key": index,
      "class": ['van-ellipsis', bem('nav-item', {
        active: mainActiveIndex === index,
        disabled: item.disabled
      })],
      "on": {
        "click": function click() {
          if (!item.disabled) {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, 'click-nav', index); // compatible for old usage, should be removed in next major version

            Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, 'navclick', index);
          }
        }
      }
    }, [item.text]);
  })]), h("div", {
    "class": bem('content')
  }, [subItems.map(function (item) {
    return h("div", {
      "key": item.id,
      "class": ['van-ellipsis', bem('item', {
        active: activeId === item.id,
        disabled: item.disabled
      })],
      "on": {
        "click": function click() {
          if (!item.disabled) {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, 'click-item', item); // compatible for old usage, should be removed in next major version

            Object(__WEBPACK_IMPORTED_MODULE_2__utils_functional__["a" /* emit */])(ctx, 'itemclick', item);
          }
        }
      }
    }, [item.text, activeId === item.id && h(__WEBPACK_IMPORTED_MODULE_3__icon__["a" /* default */], {
      "attrs": {
        "name": "checked",
        "size": "16px"
      },
      "class": bem('selected')
    })]);
  })])]);
}

TreeSelect.props = {
  items: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  height: {
    type: Number,
    default: 300
  },
  activeId: {
    type: [Number, String],
    default: 0
  },
  mainActiveIndex: {
    type: Number,
    default: 0
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(TreeSelect));

/***/ }),

/***/ "./node_modules/vant/es/uploader/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./node_modules/vant/es/uploader/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon__ = __webpack_require__("./node_modules/vant/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image__ = __webpack_require__("./node_modules/vant/es/image/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__image_preview__ = __webpack_require__("./node_modules/vant/es/image-preview/index.js");







var _createNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* createNamespace */])('uploader'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  inheritAttrs: false,
  model: {
    prop: 'fileList'
  },
  props: {
    disabled: Boolean,
    uploadText: String,
    afterRead: Function,
    beforeRead: Function,
    previewSize: [Number, String],
    name: {
      type: [Number, String],
      default: ''
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    },
    maxCount: {
      type: Number,
      default: Number.MAX_VALUE
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    }
  },
  computed: {
    detail: function detail() {
      return {
        name: this.name
      };
    },
    previewSizeWithUnit: function previewSizeWithUnit() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addUnit */])(this.previewSize);
    }
  },
  methods: {
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (this.beforeRead) {
        var response = this.beforeRead(files, this.detail);

        if (!response) {
          this.resetInput();
          return;
        }

        if (response.then) {
          response.then(function () {
            _this.readFile(files);
          }).catch(this.resetInput);
          return;
        }
      }

      this.readFile(files);
    },
    readFile: function readFile(files) {
      var _this2 = this;

      var oversize = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* isOversize */])(files, this.maxSize);

      if (Array.isArray(files)) {
        var maxCount = this.maxCount - this.fileList.length;

        if (files.length > maxCount) {
          files = files.slice(0, maxCount);
        }

        Promise.all(files.map(function (file) {
          return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* readFile */])(file, _this2.resultType);
        })).then(function (contents) {
          var fileList = files.map(function (file, index) {
            return {
              file: file,
              content: contents[index]
            };
          });

          _this2.onAfterRead(fileList, oversize);
        });
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* readFile */])(files, this.resultType).then(function (content) {
          _this2.onAfterRead({
            file: files,
            content: content
          }, oversize);
        });
      }
    },
    onAfterRead: function onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files, this.detail);
        return;
      }

      this.resetInput();
      this.$emit('input', [].concat(this.fileList, Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* toArray */])(files)));

      if (this.afterRead) {
        this.afterRead(files, this.detail);
      }
    },
    onDelete: function onDelete(file, index) {
      var fileList = this.fileList.slice(0);
      fileList.splice(index, 1);
      this.$emit('input', fileList);
      this.$emit('delete', file);
    },
    resetInput: function resetInput() {
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.value = '';
      }
    },
    onPreviewImage: function onPreviewImage(item) {
      var imageFiles = this.fileList.filter(function (item) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isImageFile */])(item);
      }).map(function (item) {
        return item.content || item.url;
      });
      Object(__WEBPACK_IMPORTED_MODULE_5__image_preview__["a" /* default */])({
        images: imageFiles,
        startPosition: imageFiles.indexOf(item.content || item.url)
      });
    },
    renderPreview: function renderPreview() {
      var _this3 = this;

      var h = this.$createElement;

      if (!this.previewImage) {
        return;
      }

      return this.fileList.map(function (item, index) {
        return h("div", {
          "class": bem('preview')
        }, [Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isImageFile */])(item) ? h(__WEBPACK_IMPORTED_MODULE_4__image__["a" /* default */], {
          "attrs": {
            "fit": "cover",
            "src": item.content || item.url,
            "width": _this3.previewSize,
            "height": _this3.previewSize
          },
          "class": bem('preview-image'),
          "on": {
            "click": function click() {
              _this3.onPreviewImage(item);
            }
          }
        }) : h("div", {
          "class": bem('file'),
          "style": {
            width: _this3.previewSizeWithUnit,
            height: _this3.previewSizeWithUnit
          }
        }, [h(__WEBPACK_IMPORTED_MODULE_3__icon__["a" /* default */], {
          "class": bem('file-icon'),
          "attrs": {
            "name": "description"
          }
        }), h("div", {
          "class": [bem('file-name'), 'van-ellipsis']
        }, [item.file ? item.file.name : item.url])]), h(__WEBPACK_IMPORTED_MODULE_3__icon__["a" /* default */], {
          "attrs": {
            "name": "delete"
          },
          "class": bem('preview-delete'),
          "on": {
            "click": function click() {
              _this3.onDelete(item, index);
            }
          }
        })]);
      });
    },
    renderUpload: function renderUpload() {
      var h = this.$createElement;

      if (this.fileList.length >= this.maxCount) {
        return;
      }

      var slot = this.slots();
      var Input = h("input", {
        "attrs": Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, this.$attrs, {
          "type": "file",
          "accept": this.accept,
          "disabled": this.disabled
        }),
        "ref": "input",
        "class": bem('input'),
        "on": {
          "change": this.onChange
        }
      });

      if (slot) {
        return h("div", {
          "class": bem('input-wrapper')
        }, [slot, Input]);
      }

      var style;

      if (this.previewSize) {
        var size = this.previewSizeWithUnit;
        style = {
          width: size,
          height: size
        };
      }

      return h("div", {
        "class": bem('upload'),
        "style": style
      }, [h(__WEBPACK_IMPORTED_MODULE_3__icon__["a" /* default */], {
        "attrs": {
          "name": "plus"
        },
        "class": bem('upload-icon')
      }), this.uploadText && h("span", {
        "class": bem('upload-text')
      }, [this.uploadText]), Input]);
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem()
    }, [h("div", {
      "class": bem('wrapper')
    }, [this.renderPreview(), this.renderUpload()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/uploader/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = toArray;
/* harmony export (immutable) */ __webpack_exports__["c"] = readFile;
/* harmony export (immutable) */ __webpack_exports__["b"] = isOversize;
/* unused harmony export isImageUrl */
/* harmony export (immutable) */ __webpack_exports__["a"] = isImageFile;
function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}
function readFile(file, resultType) {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    reader.onload = function (event) {
      resolve(event.target.result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}
function isOversize(files, maxSize) {
  return toArray(files).some(function (file) {
    return file.size > maxSize;
  });
}
var IMAGE_EXT = ['jpeg', 'jpg', 'gif', 'png', 'svg'];
function isImageUrl(url) {
  return IMAGE_EXT.some(function (ext) {
    return url.indexOf("." + ext) !== -1;
  });
}
function isImageFile(item) {
  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (item.content) {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/color.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return WHITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GRAY_DARK; });
var RED = '#f44';
var BLUE = '#1989fa';
var GREEN = '#07c160';
var WHITE = '#fff';
var GRAY = '#c9c9c9';
var GRAY_DARK = '#969799';

/***/ }),

/***/ "./node_modules/vant/es/utils/create/bem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createBEM;
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

function join(name, el, symbol) {
  return el ? name + symbol + el : name;
}

function prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return prefix(name, item);
    });
  }

  var ret = {};

  if (mods) {
    Object.keys(mods).forEach(function (key) {
      ret[name + MODS + key] = mods[key];
    });
  }

  return ret;
}

function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = join(name, el, ELEMENT);
    return mods ? [el, prefix(el, mods)] : el;
  };
}

/***/ }),

/***/ "./node_modules/vant/es/utils/create/component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export unifySlots */
/* harmony export (immutable) */ __webpack_exports__["a"] = createComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__("./node_modules/vant/es/locale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_string__ = __webpack_require__("./node_modules/vant/es/utils/format/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_slots__ = __webpack_require__("./node_modules/vant/es/mixins/slots.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue__);
/**
 * Create a basic component with common options
 */





function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component(Object(__WEBPACK_IMPORTED_MODULE_1__format_string__["a" /* camelize */])("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3

function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

function createComponent(name) {
  return function (sfc) {
    if (typeof sfc === 'function') {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(__WEBPACK_IMPORTED_MODULE_2__mixins_slots__["a" /* SlotsMixin */]);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}

/***/ }),

/***/ "./node_modules/vant/es/utils/create/i18n.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createI18N;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_string__ = __webpack_require__("./node_modules/vant/es/utils/format/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locale__ = __webpack_require__("./node_modules/vant/es/locale/index.js");



function createI18N(name) {
  var prefix = Object(__WEBPACK_IMPORTED_MODULE_1__format_string__["a" /* camelize */])(name) + '.';
  return function (path) {
    var message = Object(__WEBPACK_IMPORTED_MODULE_0____["c" /* get */])(__WEBPACK_IMPORTED_MODULE_2__locale__["a" /* default */].messages(), prefix + path) || Object(__WEBPACK_IMPORTED_MODULE_0____["c" /* get */])(__WEBPACK_IMPORTED_MODULE_2__locale__["a" /* default */].messages(), path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
}

/***/ }),

/***/ "./node_modules/vant/es/utils/create/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createNamespace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bem__ = __webpack_require__("./node_modules/vant/es/utils/create/bem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__("./node_modules/vant/es/utils/create/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n__ = __webpack_require__("./node_modules/vant/es/utils/create/i18n.js");



function createNamespace(name) {
  name = 'van-' + name;
  return [Object(__WEBPACK_IMPORTED_MODULE_1__component__["a" /* createComponent */])(name), Object(__WEBPACK_IMPORTED_MODULE_0__bem__["a" /* createBEM */])(name), Object(__WEBPACK_IMPORTED_MODULE_2__i18n__["a" /* createI18N */])(name)];
}

/***/ }),

/***/ "./node_modules/vant/es/utils/deep-assign.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = deepAssign;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* eslint-disable no-use-before-define */

var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!Object(__WEBPACK_IMPORTED_MODULE_0____["d" /* isDef */])(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !Object(__WEBPACK_IMPORTED_MODULE_0____["e" /* isObj */])(val) || typeof val === 'function') {
    to[key] = val;
  } else {
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/deep-clone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = deepClone;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deep_assign__ = __webpack_require__("./node_modules/vant/es/utils/deep-assign.js");

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if (typeof obj === 'object') {
    return Object(__WEBPACK_IMPORTED_MODULE_0__deep_assign__["a" /* deepAssign */])({}, obj);
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/dom/event.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export supportsPassive */
/* harmony export (immutable) */ __webpack_exports__["b"] = on;
/* harmony export (immutable) */ __webpack_exports__["a"] = off;
/* harmony export (immutable) */ __webpack_exports__["d"] = stopPropagation;
/* harmony export (immutable) */ __webpack_exports__["c"] = preventDefault;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* eslint-disable no-empty */

/* eslint-disable getter-return */

/* eslint-disable import/no-mutable-exports */

var supportsPassive = false;

if (!__WEBPACK_IMPORTED_MODULE_0____["f" /* isServer */]) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!__WEBPACK_IMPORTED_MODULE_0____["f" /* isServer */]) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}
function off(target, event, handler) {
  if (!__WEBPACK_IMPORTED_MODULE_0____["f" /* isServer */]) {
    target.removeEventListener(event, handler);
  }
}
function stopPropagation(event) {
  event.stopPropagation();
}
function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

/***/ }),

/***/ "./node_modules/vant/es/utils/dom/raf.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["c"] = raf;
/* harmony export (immutable) */ __webpack_exports__["b"] = doubleRaf;
/* harmony export (immutable) */ __webpack_exports__["a"] = cancelRaf;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/**
 * requestAnimationFrame polyfill
 */

var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = __WEBPACK_IMPORTED_MODULE_0____["f" /* isServer */] ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;
function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation

function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}
function cancelRaf(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vant/es/utils/dom/reset-scroll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resetScroll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_system__ = __webpack_require__("./node_modules/vant/es/utils/validate/system.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll__ = __webpack_require__("./node_modules/vant/es/utils/dom/scroll.js");
/**
 * Hack for iOS12 page scroll
 * https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
 */


var isIOS = Object(__WEBPACK_IMPORTED_MODULE_0__validate_system__["b" /* isIOS */])();
/* istanbul ignore next */

function resetScroll() {
  if (isIOS) {
    Object(__WEBPACK_IMPORTED_MODULE_1__scroll__["e" /* setRootScrollTop */])(Object(__WEBPACK_IMPORTED_MODULE_1__scroll__["b" /* getRootScrollTop */])());
  }
}

/***/ }),

/***/ "./node_modules/vant/es/utils/dom/scroll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getScrollEventTarget;
/* harmony export (immutable) */ __webpack_exports__["d"] = getScrollTop;
/* unused harmony export setScrollTop */
/* harmony export (immutable) */ __webpack_exports__["b"] = getRootScrollTop;
/* harmony export (immutable) */ __webpack_exports__["e"] = setRootScrollTop;
/* harmony export (immutable) */ __webpack_exports__["a"] = getElementTop;
/* unused harmony export getVisibleHeight */
// get nearest scroll element
// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
var overflowScrollReg = /scroll|auto/i;
function getScrollEventTarget(element, rootParent) {
  if (rootParent === void 0) {
    rootParent = window;
  }

  var node = element;

  while (node && node.tagName !== 'HTML' && node.nodeType === 1 && node !== rootParent) {
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      } // see: https://github.com/youzan/vant/issues/3823


      var _window$getComputedSt2 = window.getComputedStyle(node.parentNode),
          htmlOverflowY = _window$getComputedSt2.overflowY;

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }

    node = node.parentNode;
  }

  return rootParent;
}
function getScrollTop(element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
}
function setScrollTop(element, value) {
  'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
}
function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top

function getElementTop(element) {
  return (element === window ? 0 : element.getBoundingClientRect().top) + getRootScrollTop();
}
function getVisibleHeight(element) {
  return element === window ? element.innerHeight : element.getBoundingClientRect().height;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/format/number.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = range;
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

/***/ }),

/***/ "./node_modules/vant/es/utils/format/string.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = camelize;
/* harmony export (immutable) */ __webpack_exports__["b"] = padZero;
var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}
function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/format/unit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addUnit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__("./node_modules/vant/es/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validate_number__ = __webpack_require__("./node_modules/vant/es/utils/validate/number.js");


function addUnit(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0____["d" /* isDef */])(value)) {
    return undefined;
  }

  value = String(value);
  return Object(__WEBPACK_IMPORTED_MODULE_1__validate_number__["a" /* isNumber */])(value) ? value + "px" : value;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/functional.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = inherit;
/* harmony export (immutable) */ __webpack_exports__["a"] = emit;
/* harmony export (immutable) */ __webpack_exports__["c"] = mount;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);


var inheritKey = ['ref', 'style', 'class', 'attrs', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};

    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])(result.on, context.data.on);
  }

  return result;
} // emit event

function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component

function mount(Component, data) {
  var instance = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
        props: this.$props
      }, data));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isServer; });
/* harmony export (immutable) */ __webpack_exports__["g"] = noop;
/* harmony export (immutable) */ __webpack_exports__["d"] = isDef;
/* harmony export (immutable) */ __webpack_exports__["e"] = isObj;
/* harmony export (immutable) */ __webpack_exports__["c"] = get;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create__ = __webpack_require__("./node_modules/vant/es/utils/create/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__create__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__format_unit__ = __webpack_require__("./node_modules/vant/es/utils/format/unit.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__format_unit__["a"]; });



var isServer = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$isServer;
function noop() {}
function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = route;
/* harmony export (immutable) */ __webpack_exports__["a"] = functionalRoute;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return routeProps; });
/**
 * Vue Router support
 */
function route(router, config) {
  var to = config.to,
      url = config.url,
      replace = config.replace;

  if (to && router) {
    router[replace ? 'replace' : 'push'](to);
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}
function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}
var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};

/***/ }),

/***/ "./node_modules/vant/es/utils/validate/email.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEmail;
/* eslint-disable */
function isEmail(value) {
  var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return reg.test(value);
}

/***/ }),

/***/ "./node_modules/vant/es/utils/validate/mobile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isMobile;
function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}

/***/ }),

/***/ "./node_modules/vant/es/utils/validate/number.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNumber;
function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}

/***/ }),

/***/ "./node_modules/vant/es/utils/validate/system.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isAndroid;
/* harmony export (immutable) */ __webpack_exports__["b"] = isIOS;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__("./node_modules/vant/es/utils/index.js");

function isAndroid() {
  /* istanbul ignore next */
  return __WEBPACK_IMPORTED_MODULE_0____["f" /* isServer */] ? false : /android/.test(navigator.userAgent.toLowerCase());
}
function isIOS() {
  /* istanbul ignore next */
  return __WEBPACK_IMPORTED_MODULE_0____["f" /* isServer */] ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}

/***/ }),

/***/ "./node_modules/vant/lib/index.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vant/lib/index.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-lazyload/vue-lazyload.js":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue-Lazyload.js v1.2.3
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.VueLazyload=t()}(this,function(){"use strict";function e(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){e=e||{};var t=arguments.length,i=0;if(1===t)return e;for(;++i<t;){var o=arguments[i];g(e)&&(e=o),r(o)&&n(e,o)}return e}function n(e,n){m(e,n);for(var o in n)if("__proto__"!==o&&i(n,o)){var a=n[o];r(a)?("undefined"===L(e[o])&&"function"===L(a)&&(e[o]=a),e[o]=t(e[o]||{},a)):e[o]=a}return e}function r(e){return"object"===L(e)||"function"===L(e)}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function a(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}function s(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),r=[],i=e.parentNode,o=i.offsetWidth*t,a=void 0,s=void 0,u=void 0;n=n.trim().split(","),n.map(function(e){e=e.trim(),a=e.lastIndexOf(" "),-1===a?(s=e,u=999998):(s=e.substr(0,a),u=parseInt(e.substr(a+1,e.length-a-2),10)),r.push([u,s])}),r.sort(function(e,t){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0});for(var l="",d=void 0,c=r.length,h=0;h<c;h++)if(d=r[h],d[0]>=o){l=d[1];break}return l}}function u(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}function l(){if(!k)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(t){e=!1}return e}function d(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,s=function(){r=Date.now(),n=!1,e.apply(o,a)};i>=t?s():n=setTimeout(s,t)}}}function c(e){return null!==e&&"object"===(void 0===e?"undefined":p(e))}function h(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function f(e){for(var t=e.length,n=[],r=0;r<t;r++)n.push(e[r]);return n}function v(){}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":p(e))},m=function(e,t){if(null===e||void 0===e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,r=Object(e),i=arguments.length,o=0;++o<i;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var l=s[u];n.call(a,l)&&(r[l]=a[l])}return r},w=Object.prototype.toString,L=function(t){var n=void 0===t?"undefined":p(t);return"undefined"===n?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===n||t instanceof String?"string":"number"===n||t instanceof Number?"number":"function"===n||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(n=w.call(t),"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":e(t)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object")},_=t,k="undefined"!=typeof window,E=k&&"IntersectionObserver"in window,A={event:"event",observer:"observer"},j=function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if(k)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return k?window.devicePixelRatio||e:e},T=function(){if(k){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),O={on:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];T?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},I=function(e,t,n){var r=new Image;r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(e){n(e)}},x=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},S=function(e){return x(e,"overflow")+x(e,"overflow-y")+x(e,"overflow-x")},$=function(e){if(k){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(S(t)))return t;t=t.parentNode}return window}},H={},Q=function(){function e(t){var n=t.el,r=t.src,i=t.error,o=t.loading,a=t.bindType,s=t.$parent,u=t.options,l=t.elRenderer;b(this,e),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=s,this.elRenderer=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return y(e,[{key:"initState",value:function(){this.el.dataset.src=this.src,this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,r=e.error,i=this.src;this.src=t,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;h(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var t=this;I({src:this.loading},function(n){t.render("loading",!1),e()},function(){e(),t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")})}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.loaded||H[this.src]?(this.state.loaded=!0,t(),this.render("loaded",!0)):void this.renderLoading(function(){e.attempt++,e.record("loadStart"),I({src:e.src},function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),H[e.src]=1,t()},function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),C="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",R=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],W={rootMargin:"0px",threshold:0},D=function(e){return function(){function t(e){var n=e.preLoad,r=e.error,i=e.throttleWait,o=e.preLoadTop,a=e.dispatchEvent,s=e.loading,u=e.attempt,c=e.silent,h=void 0===c||c,f=e.scale,v=e.listenEvents,p=(e.hasbind,e.filter),y=e.adapter,g=e.observer,m=e.observerOptions;b(this,t),this.version="1.2.3",this.mode=A.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:h,dispatchEvent:!!a,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||C,loading:s||C,attempt:u||3,scale:f||z(f),ListenEvents:v||R,hasbind:!1,supportWebp:l(),filter:p||{},adapter:y||{},observer:!!g,observerOptions:m||W},this._initEvent(),this.lazyLoadHandler=d(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?A.observer:A.event)}return y(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),k&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,r){var i=this;if(a(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),u=o.src,l=o.loading,d=o.error;e.nextTick(function(){u=s(t,i.options.scale)||u,i._observer&&i._observer.observe(t);var o=Object.keys(n.modifiers)[0],a=void 0;o&&(a=r.context.$refs[o],a=a?a.$el||a:document.getElementById(o)),a||(a=$(t));var c=new Q({bindType:n.arg,$parent:a,el:t,loading:l,error:d,src:u,elRenderer:i._elRenderer.bind(i),options:i.options});i.ListenerQueue.push(c),k&&(i._addListenerTarget(window),i._addListenerTarget(a)),i.lazyLoadHandler(),e.nextTick(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(t,n){var r=this,i=this._valueFormatter(n.value),o=i.src,a=i.loading,l=i.error;o=s(t,this.options.scale)||o;var d=u(this.ListenerQueue,function(e){return e.el===t});d&&d.update({src:o,loading:a,error:l}),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick(function(){return r.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=u(this.ListenerQueue,function(t){return t.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,t)&&t.destroy())}}},{key:"removeComponent",value:function(e){e&&(o(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;E||e!==A.observer||(e=A.event),this.mode=e,e===A.event?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=u(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===A.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,r){n.el===e&&(--n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach(function(r){return O[t?"on":"off"](e,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t].push(n)},this.$once=function(t,n){function r(){i.$off(t,r),n.apply(i,arguments)}var i=e;e.$on(t,r)},this.$off=function(t,n){if(!n)return void(e.Event.listeners[t]=[]);o(e.Event.listeners[t],n)},this.$emit=function(t,n,r){e.Event.listeners[t].forEach(function(e){return e(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,t=!1;this.ListenerQueue.forEach(function(n,r){n.state.loaded||(t=n.checkInView())&&n.load(function(){!n.error&&n.loaded&&e.ListenerQueue.splice(r,1)})})}},{key:"_initIntersectionObserver",value:function(){var e=this;E&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var a=new j(t,{detail:e});r.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,r=this.options.error;return c(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:t,loading:n,error:r}}}]),t}()},B=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),k&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},V=function(){function e(t){var n=t.lazy;b(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return y(e,[{key:"bind",value:function(e,t,n){var r=new N({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&r.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&(r.clear(),o(this._queue,r))}}]),e}(),M={selector:"img"},N=function(){function e(t){var n=t.el,r=t.binding,i=t.vnode,o=t.lazy;b(this,e),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return y(e,[{key:"update",value:function(e){var t=this,n=e.el,r=e.binding;this.el=n,this.options=_({},M,r.value),this.getImgs().forEach(function(e){t.lazy.add(e,_({},t.binding,{value:{src:e.dataset.src,error:e.dataset.error,loading:e.dataset.loading}}),t.vnode)})}},{key:"getImgs",value:function(){return f(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),e}();return{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=D(e),r=new n(t),i=new V({lazy:r}),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=r,t.lazyComponent&&e.component("lazy-component",B(r)),o?(e.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),e.directive("lazy-container",{bind:i.bind.bind(i),update:i.update.bind(i),unbind:i.unbind.bind(i)})):(e.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(e,t){_(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){r.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}}});


/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0c6ef0e7\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/mobile/js/components/Nav.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "van-tabbar",
    {
      model: {
        value: _vm.active,
        callback: function($$v) {
          _vm.active = $$v
        },
        expression: "active"
      }
    },
    [
      _c(
        "van-tabbar-item",
        { attrs: { name: "home", icon: "home-o", url: "/" } },
        [_vm._v("首页")]
      ),
      _vm._v(" "),
      _c(
        "van-tabbar-item",
        {
          attrs: { name: "categories", icon: "apps-o", url: "/categories.html" }
        },
        [_vm._v("分类")]
      ),
      _vm._v(" "),
      _c(
        "van-tabbar-item",
        {
          attrs: {
            name: "shopping-cart",
            icon: "shopping-cart-o",
            url: "cart.html"
          }
        },
        [_vm._v("购物车")]
      ),
      _vm._v(" "),
      _c(
        "van-tabbar-item",
        { attrs: { name: "user", icon: "user-o", url: "user.html" } },
        [_vm._v("我的")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0c6ef0e7", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.dev.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (!config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (!isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (i > pos || !tagName &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anyting as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving the component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (el.children.length !== 1 || ast.type !== 1) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (!template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/***/ (function(module, exports, __webpack_require__) {

if (false) {
  module.exports = require('./vue.common.prod.js')
} else {
  module.exports = __webpack_require__("./node_modules/vue/dist/vue.common.dev.js")
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/assets/mobile/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vant__ = __webpack_require__("./node_modules/vant/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vant_lib_index_css__ = __webpack_require__("./node_modules/vant/lib/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vant_lib_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vant_lib_index_css__);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vant__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('public-nav', __webpack_require__("./resources/assets/mobile/js/components/Nav.vue"));

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app'
});

/***/ }),

/***/ "./resources/assets/mobile/js/components/Nav.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/mobile/js/components/Nav.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0c6ef0e7\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/mobile/js/components/Nav.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/mobile/js/components/Nav.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c6ef0e7", Component.options)
  } else {
    hotAPI.reload("data-v-0c6ef0e7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/mobile/js/app.js");


/***/ })

/******/ });