(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_oliwerbig_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_home_oliwerbig_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_home_oliwerbig_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_home_oliwerbig_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_Screen_Screen__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_Keypad_Keypad__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),Calculator=function(_React$Component){Object(_home_oliwerbig_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,_React$Component);var _super=Object(_home_oliwerbig_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(){var _this;Object(_home_oliwerbig_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={equation:"",result:0},_this.onButtonPress=function(event){var equation=_this.state.equation,pressedButton=event.target.innerHTML;if("C"===pressedButton)return _this.clear();if(pressedButton>="0"&&pressedButton<="9"||"."===pressedButton)equation+=pressedButton;else if(-1!==["+","-","*","/","%"].indexOf(pressedButton))equation+=" "+pressedButton+" ";else if("="===pressedButton)try{var evalResult=eval(equation),result=Number.isInteger(evalResult)?evalResult:evalResult.toFixed(2);_this.clear(),_this.setState({result:result})}catch(error){alert("Invalid Mathematical Equation")}else equation=equation.trim(),equation=equation.substr(0,equation.length-1);_this.setState({equation:equation})},_this}return Object(_home_oliwerbig_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"clear",value:function(){this.setState({equation:"",result:0})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("main",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Screen_Screen__WEBPACK_IMPORTED_MODULE_5__.a,{equation:this.state.equation,result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Keypad_Keypad__WEBPACK_IMPORTED_MODULE_6__.a,{onButtonPress:this.onButtonPress}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=Calculator},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),_=function(e){return a.a.createElement("div",{className:"keypad__row"},e.children)},o=function(e){var t=["btn"];return"undefined"!==typeof e&&"undefined"!==typeof e.type&&t.push("btn--"+e.type),a.a.createElement("button",{className:t.join(" "),onClick:e.onButtonPress},e.children)},s=function(e){return a.a.createElement(o,Object.assign({type:"large"},e))};t.a=function(e){return a.a.createElement("section",{className:"keypad"},a.a.createElement(_,null,a.a.createElement(o,{type:"primary",onButtonPress:e.onButtonPress},"C"),a.a.createElement(o,{type:"primary",onButtonPress:e.onButtonPress},"\u2190"),a.a.createElement(o,{type:"operator",onButtonPress:e.onButtonPress},"%"),a.a.createElement(o,{type:"operator",onButtonPress:e.onButtonPress},"/")),a.a.createElement(_,null,a.a.createElement(o,{onButtonPress:e.onButtonPress},"9"),a.a.createElement(o,{onButtonPress:e.onButtonPress},"8"),a.a.createElement(o,{onButtonPress:e.onButtonPress},"7"),a.a.createElement(o,{type:"operator",onButtonPress:e.onButtonPress},"*")),a.a.createElement(_,null,a.a.createElement(o,{onButtonPress:e.onButtonPress},"6"),a.a.createElement(o,{onButtonPress:e.onButtonPress},"5"),a.a.createElement(o,{onButtonPress:e.onButtonPress},"4"),a.a.createElement(o,{type:"operator",onButtonPress:e.onButtonPress},"-")),a.a.createElement(_,null,a.a.createElement(o,{onButtonPress:e.onButtonPress},"3"),a.a.createElement(o,{onButtonPress:e.onButtonPress},"2"),a.a.createElement(o,{onButtonPress:e.onButtonPress},"1"),a.a.createElement(o,{type:"operator",onButtonPress:e.onButtonPress},"+")),a.a.createElement(_,null,a.a.createElement(o,{onButtonPress:e.onButtonPress},"0"),a.a.createElement(o,{onButtonPress:e.onButtonPress},"."),a.a.createElement(s,{onButtonPress:e.onButtonPress},"=")))}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),_=function(e){return a.a.createElement("div",{className:"result-screen"},e.children)},o=function(e){return a.a.createElement("div",{className:"computation-screen"},e.children)};t.a=function(e){return a.a.createElement("section",{className:"screen"},a.a.createElement(_,null,e.result),a.a.createElement(o,null,e.equation))}},,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),_=n(2),o=n.n(_),s=(n(15),n(16),n(3)),l=function(){return a.a.createElement("div",{className:"app"},a.a.createElement(s.a,null))},c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-calculator","/service-worker.js");c?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):u(t,e)}))}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.2599f25c.chunk.js.map