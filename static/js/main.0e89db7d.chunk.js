(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _mnt_h_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_mnt_h_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_mnt_h_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_mnt_h_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_Screen_Screen__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_Keypad_Keypad__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),Calculator=function(_React$Component){Object(_mnt_h_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,_React$Component);var _super=Object(_mnt_h_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(){var _this;Object(_mnt_h_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={equation:"",result:0},_this.onButtonPress=function(event){var equation=_this.state.equation,pressedButton=event.target.innerHTML;if("C"===pressedButton)return _this.clear();if(pressedButton>="0"&&pressedButton<="9"||"."===pressedButton)equation+=pressedButton;else if(-1!==["+","-","*","/","%"].indexOf(pressedButton))equation+=" "+pressedButton+" ";else if("="===pressedButton)try{var evalResult=eval(equation),result=Number.isInteger(evalResult)?evalResult:evalResult.toFixed(2);_this.clear(),_this.setState({result:result})}catch(error){alert("Invalid Mathematical Equation")}else equation=equation.trim(),equation=equation.substr(0,equation.length-1);_this.setState({equation:equation})},_this}return Object(_mnt_h_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"clear",value:function(){this.setState({equation:"",result:0})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("main",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Screen_Screen__WEBPACK_IMPORTED_MODULE_5__.a,{equation:this.state.equation,result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Keypad_Keypad__WEBPACK_IMPORTED_MODULE_6__.a,{onButtonPress:this.onButtonPress}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=Calculator},,,,function(e,t,_){"use strict";var n=_(0),a=_.n(n),r=function(e){return a.a.createElement("div",{className:"keypad__row"},e.children)},s=function(e){var t=["btn"];return"undefined"!==typeof e&&"undefined"!==typeof e.type&&t.push("btn--"+e.type),a.a.createElement("button",{className:t.join(" "),onClick:e.onButtonPress},e.children)},o=function(e){return a.a.createElement(s,Object.assign({type:"large"},e))};t.a=function(e){return a.a.createElement("section",{className:"keypad"},a.a.createElement(r,null,a.a.createElement(s,{type:"primary",onButtonPress:e.onButtonPress},"C"),a.a.createElement(s,{type:"primary",onButtonPress:e.onButtonPress},"\u2190"),a.a.createElement(s,{type:"operator",onButtonPress:e.onButtonPress},"%"),a.a.createElement(s,{type:"operator",onButtonPress:e.onButtonPress},"/")),a.a.createElement(r,null,a.a.createElement(s,{onButtonPress:e.onButtonPress},"9"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"8"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"7"),a.a.createElement(s,{type:"operator",onButtonPress:e.onButtonPress},"*")),a.a.createElement(r,null,a.a.createElement(s,{onButtonPress:e.onButtonPress},"6"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"5"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"4"),a.a.createElement(s,{type:"operator",onButtonPress:e.onButtonPress},"-")),a.a.createElement(r,null,a.a.createElement(s,{onButtonPress:e.onButtonPress},"3"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"2"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"1"),a.a.createElement(s,{type:"operator",onButtonPress:e.onButtonPress},"+")),a.a.createElement(r,null,a.a.createElement(s,{onButtonPress:e.onButtonPress},"0"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"."),a.a.createElement(o,{onButtonPress:e.onButtonPress},"=")))}},function(e,t,_){"use strict";var n=_(0),a=_.n(n),r=function(e){return a.a.createElement("div",{className:"result-screen"},e.children)},s=function(e){return a.a.createElement("div",{className:"computation-screen"},e.children)};t.a=function(e){return a.a.createElement("section",{className:"screen"},a.a.createElement(r,null,e.result),a.a.createElement(s,null,e.equation))}},,function(e,t,_){e.exports=_(17)},,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var n=_(0),a=_.n(n),r=_(2),s=_.n(r),o=(_(15),_(16),_(3)),l=function(){return a.a.createElement("div",{className:"app"},a.a.createElement(o.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.0e89db7d.chunk.js.map