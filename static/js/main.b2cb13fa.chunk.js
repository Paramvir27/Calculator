(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var E_STUDY_REACT_Projects_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),E_STUDY_REACT_Projects_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),E_STUDY_REACT_Projects_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),E_STUDY_REACT_Projects_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_cal_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(15),_cal_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_cal_css__WEBPACK_IMPORTED_MODULE_5__),Calculator=function(_Component){Object(E_STUDY_REACT_Projects_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,_Component);var _super=Object(E_STUDY_REACT_Projects_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(){var _this;return Object(E_STUDY_REACT_Projects_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),_this=_super.call(this),_this.button=function(_,e,t){var a;return a="CLR"==_?function(){_this.clearValue()}:"Del"==_?function(){_this.del()}:"="==_?function(){_this.equal()}:function(){_this.inputValue(_)},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{id:e,className:"d-flex justify-content-center \n            align-items-center w-100 ".concat(t),onClick:a},_))},_this.equal=function(){var h=_this.state.value,k=h.replace(/x/g,"*");try{if(""!=h){var a=String(eval(k));_this.setState({value:a},(function(){_this.state.x.current.focus()}))}}catch(err){alert("Invalid Expression"),_this.state.x.current.focus()}},_this.del=function(){var _,e=_this.state.value;void 0!=e&&((_=e.split("")).pop(),_=_.join(""),_this.setState({value:_}))},_this.inputValue=function(_){var e=_this.state.value,t=(e+=_).split(""),a=["+","-","*","/",".","x"],l=t[t.length-1],n=0;-1!=a.indexOf(l)&&e.length>1&&-1!=a.indexOf(t[t.length-2])&&(n=1),1!=n?_this.setState({value:e},(function(){_this.state.x.current.focus()})):_this.state.x.current.focus()},_this.clearValue=function(){_this.setState({value:""},(function(){_this.state.x.current.focus()}))},_this.update=function(_){var e=_.target.value,t=e.split(""),a=["+","-","*","/","."],l=t[t.length-1],n=0;-1!=a.indexOf(l)&&e.length>1&&-1!=a.indexOf(t[t.length-2])&&(n=1);var c=e[e.length-1];-1==["1","2","3","4","5","6","7","8","9","0","+","/",".","*","-"].indexOf(c)&&""!=e||1!=n&&_this.setState({value:e})},_this.press=function(_){13===_.keyCode&&_this.equal()},_this.state={value:"",x:react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef()},_this}return Object(E_STUDY_REACT_Projects_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"container",onKeyDown:this.press},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row d-flex align-items-center",style:{height:"100vh"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-12"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-12 p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input",{type:"text",spellCheck:"false",ref:this.state.x,placeholder:"0.00",onChange:this.update,value:this.state.value,id:"t1",className:"w-100 box"}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("CLR","op6","opButton bg-danger text-white")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-6 bg-info p-0"},this.button("Del","op7","opButton bg-secondary text-white")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("/","op1","opButton bg-warning"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("7","n7","numButton bg-light")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("8","n8","numButton bg-light")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("9","n9","numButton bg-light")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("x","op2","opButton  bg-warning"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("4","n4","numButton bg-light")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("5","n5","numButton bg-light")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("6","n6","numButton bg-light")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("-","op3","opButton  bg-warning"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("1","n1","numButton bg-light")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("2","n2","numButton bg-light")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("3","n3","numButton bg-light")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("+","op4","opButton  bg-warning"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("0","nz1","numButton bg-light")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button("00","nz2","numButton bg-light")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 bg-info p-0"},this.button(".","dot","numButton bg-light")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 p-0"},this.button("=","op5","opButton bg-success text-white")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-12 p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5",{className:"text-secondary font-weight-light text-center"},"\xa9 Designed By: ",react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a",{href:"https://paramvir27.github.io/"},"Paramvir Singh"))))))))}},{key:"componentDidMount",value:function(){this.state.x.current.focus()}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=Calculator},,,,,function(_,e,t){_.exports=t(17)},,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){},,function(_,e,t){"use strict";t.r(e);var a=t(0),l=t.n(a),n=t(2),c=t.n(n),r=(t(13),t(14),t(3));var o=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(16);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()})).catch((function(_){console.error(_.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b2cb13fa.chunk.js.map