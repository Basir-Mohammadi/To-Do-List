/* eslint-disable */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  background-color: lightgrey;\\n}\\n\\nsection {\\n  box-shadow: 1px 6px 17px -1px rgba(34, 60, 80, 0.19);\\n  width: 40vw;\\n  font-family: Poppins, serif;\\n  font-size: 18px;\\n  background-color: #fff;\\n  margin-left: 28%;\\n  margin-top: 10%;\\n}\\n\\n.todos-Container {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.todoContainer {\\n  margin: 10px 15px;\\n  padding: 30px 10px;\\n  border-bottom: 1px solid lightgrey;\\n}\\n\\ni {\\n  float: right;\\n}\\n\\n.header {\\n  display: flex;\\n  justify-content: space-between;\\n  margin: auto 15px;\\n  font-weight: 500;\\n}\\n\\n.header .fa-sync {\\n  margin-top: 25px;\\n}\\n\\n.header h1 {\\n  font-weight: 600;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\nform input {\\n  border: transparent;\\n  border-bottom: 1px solid grey;\\n  margin: auto 10px;\\n  font-style: italic;\\n  padding: 10px;\\n}\\n\\nform button {\\n  border: none;\\n  padding: 14px;\\n  color: lightgray;\\n}\\n\\nform button:hover {\\n  color: grey;\\n  text-decoration: underline;\\n  cursor: pointer;\\n}\\n\\n.fa-trash-alt {\\n  display: none;\\n}\\n\\n.trash-active {\\n  display: block;\\n}\\n\\n.edited-disable {\\n  display: none;\\n}\\n\\n.checkedContainer {\\n  background-color: rgb(250, 237, 220);\\n}\\n\\n.checkToDo {\\n  text-decoration: line-through;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/
  /***/ ((module) => {
  
  eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");
  
  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
  /*!**************************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
    \**************************************************************/
  /***/ ((module) => {
  
  eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");
  
  /***/ }),
  
  /***/ "./src/style.css":
  /*!***********************!*\
    !*** ./src/style.css ***!
    \***********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/
  /***/ ((module) => {
  
  eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
  /*!********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
    \********************************************************************/
  /***/ ((module) => {
  
  eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
    \**********************************************************************/
  /***/ ((module) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
    \**********************************************************************************/
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
  /*!***************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
    \***************************************************************/
  /***/ ((module) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
    \*********************************************************************/
  /***/ ((module) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");
  
  /***/ }),
  
  /***/ "./src/ToDoStatus.js":
  /*!***************************!*\
    !*** ./src/ToDoStatus.js ***!
    \***************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFromLocal\": () => (/* binding */ getFromLocal),\n/* harmony export */   \"updateLocalStorage\": () => (/* binding */ updateLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _functionalities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functionalities */ \"./src/functionalities.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n// eslint-disable-line\r\n\r\nconst todoMainContainer = document.querySelector('.todos-container');\r\n\r\n// get from localstorage function\r\nconst getFromLocal = () => {\r\n  const data = JSON.parse(localStorage.getItem('list'));\r\n  data.map(i => {// eslint-disable-line\r\n    _index__WEBPACK_IMPORTED_MODULE_1__.myArray.push(i);\r\n    const todoContainer = document.createElement('div');\r\n    todoContainer.className = 'todoContainer';\r\n    todoContainer.innerHTML += `\r\n      <input type='checkbox' class='checkbox'>\r\n      <span>${i.description}</span>\r\n      <i class='fas fa-ellipsis-v'></i>\r\n      <i class='fas fa-trash-alt'></i>\r\n    `;\r\n    todoMainContainer.appendChild(todoContainer);\r\n\r\n    const EditIcons = document.querySelectorAll('.fa-ellipsis-v');\r\n    EditIcons.forEach((i) => {\r\n      i.addEventListener('click', () => {\r\n        (0,_functionalities__WEBPACK_IMPORTED_MODULE_0__.editTodo)(todoContainer, i.previousElementSibling);\r\n        i.parentElement.classList.add('checkedContainer');\r\n      });\r\n    });\r\n  });\r\n\r\n  const checkbox = document.querySelectorAll('.checkbox');\r\n  checkbox.forEach((i) => {\r\n    i.addEventListener('click', () => {\r\n      i.parentElement.classList.toggle('checkedContainer');\r\n      i.nextElementSibling.classList.toggle('checkToDo');\r\n      i.parentElement.lastElementChild.classList.toggle('trash-active');\r\n      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('edited-disable');\r\n      updateLocalStorage();// eslint-disable-line\r\n    });\r\n  });\r\n\r\n  const removeIcons = document.querySelectorAll('.fa-trash-alt');\r\n  removeIcons.forEach((i) => {\r\n    i.addEventListener('click', () => {\r\n      (0,_functionalities__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(i.parentElement);\r\n    });\r\n  });\r\n  localStorage.setItem('list', JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_1__.myArray));\r\n};\r\n\r\n// window.addEventListener('load', getFromLocal);\r\n\r\n// Update local Storage\r\nconst updateLocalStorage = () => {\r\n  const localData = JSON.parse(localStorage.getItem('list'));\r\n  const todos = document.querySelectorAll('span');\r\n  for (let i = 0; i < todos.length; i += 1) {\r\n    if (todos[i].classList.contains('checkToDo')) {\r\n      localData[i].completed = true;\r\n    } else {\r\n      localData[i].completed = false;\r\n    }\r\n  }\r\n  localStorage.setItem('list', JSON.stringify(localData));\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/ToDoStatus.js?");
  
  /***/ }),
  
  /***/ "./src/functionalities.js":
  /*!********************************!*\
    !*** ./src/functionalities.js ***!
    \********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editTodo\": () => (/* binding */ editTodo),\n/* harmony export */   \"removeTodo\": () => (/* binding */ removeTodo)\n/* harmony export */ });\nconst todoMainContainer = document.querySelector('.todos-container');\r\n\r\n// edit todo function\r\nconst editTodo = (todoContainer, todo) => {\r\n  const editInput = document.createElement('input');\r\n  editInput.type = 'text';\r\n  editInput.className = 'editInput';\r\n  editInput.value = todo.textContent;\r\n  todoContainer.replaceChild(editInput, todo);\r\n  editInput.addEventListener('keypress', (e) => {\r\n    if (e.key === 'Enter') {\r\n      const todoContainers = document.querySelectorAll('.todoContainer');\r\n      const DataFromLocalStorage = JSON.parse(localStorage.getItem('list'));\r\n      for (let i = 0; i < todoContainers.length; i += 1) {\r\n        if (todoContainers[i].classList.contains('checkedContainer')) {\r\n          DataFromLocalStorage[i].description = editInput.value;\r\n          localStorage.setItem('list', JSON.stringify(DataFromLocalStorage));\r\n        }\r\n      }\r\n      editInput.parentElement.classList.remove('checkedContainer');\r\n      todoContainer.replaceChild(todo, editInput);\r\n      todo.textContent = editInput.value;\r\n    }\r\n  });\r\n};\r\n\r\n// remove todo function\r\nconst removeTodo = (todo) => {\r\n  todoMainContainer.removeChild(todo);\r\n  let count = 0;\r\n  const DataFromLocalStorage = JSON.parse(localStorage.getItem('list'));\r\n  const data = Array.from(DataFromLocalStorage).filter(i => i.completed === false);// eslint-disable-line\r\n  data.map(i => i.index = count += 1); // eslint-disable-line\r\n  localStorage.setItem(('list'), JSON.stringify(data));\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/functionalities.js?");
  
  /***/ }),
  
  /***/ "./src/index.js":
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myArray\": () => (/* binding */ myArray)\n/* harmony export */ });\n/* harmony import */ var _functionalities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functionalities */ \"./src/functionalities.js\");\n/* harmony import */ var _ToDoStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoStatus */ \"./src/ToDoStatus.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n// eslint-disable-line\n\n\n// Queries to HTML\nconst inputText = document.querySelector('input');\nconst todoMainContainer = document.querySelector('.todos-container');\nconst ClearBtn = document.querySelector('button');\n\n// class object\nclass MyObjects {\n  constructor(description, completed, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\n// Array of Objects\nconst myArray = [];\n\n// Add Methods\nconst addTodo = (todoValue) => {\n  const todoContainer = document.createElement('div');\n  todoContainer.className = 'todoContainer';\n  todoContainer.innerHTML += `\n    <input type='checkbox' class='checkbox'>\n    <span>${todoValue}</span>\n    <i class='fas fa-ellipsis-v'></i>\n    <i class='fas fa-trash-alt'></i>\n  `;\n  todoMainContainer.appendChild(todoContainer);\n  const checkbox = document.querySelectorAll('.checkbox');\n  checkbox.forEach((i) => {\n    i.addEventListener('click', () => {\n      i.parentElement.classList.toggle('checkedContainer');\n      i.nextElementSibling.classList.toggle('checkToDo');\n      i.parentElement.lastElementChild.classList.toggle('trash-active');\n      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('edited-disable');\n      (0,_ToDoStatus__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();\n    });\n  });\n\n  // Objects\n  const object = new MyObjects(todoValue, false, checkbox.length - 1);\n  myArray.push(object);\n  localStorage.setItem('list', JSON.stringify(myArray));\n\n  const EditIcons = document.querySelectorAll('.fa-ellipsis-v');\n  EditIcons.forEach((i) => {\n    i.addEventListener('click', () => {\n      (0,_functionalities__WEBPACK_IMPORTED_MODULE_0__.editTodo)(todoContainer, i.previousElementSibling);\n      i.parentElement.classList.add('checkedContainer');\n    });\n  });\n\n  const removeIcons = document.querySelectorAll('.fa-trash-alt');\n  removeIcons.forEach((i) => {\n    i.addEventListener('click', () => {\n      (0,_functionalities__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(i.parentElement);\n    });\n  });\n};\n\ninputText.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter' && inputText.value) {\n    // e.preventDefault();\n    addTodo(inputText.value);\n    inputText.value = null;\n  }\n});\n\n(0,_ToDoStatus__WEBPACK_IMPORTED_MODULE_1__.getFromLocal)();\n\n// Clear all function\nconst ClearAllBtn = () => {\n  const localData = JSON.parse(localStorage.getItem('list'));\n  const todoContainer = document.querySelectorAll('.todoContainer');\n  todoContainer.forEach((i) => {\n    if (i.classList.contains('checkedContainer')) {\n      (0,_functionalities__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(i);\n    }\n  });\n  let count = 0;\n  const data = Array.from(localData).filter(i => i.completed === false);// eslint-disable-line\n  data.map(i.index = count += 1); // eslint-disable-line\n  localStorage.setItem('list', JSON.stringify(data));\n};\nClearBtn.addEventListener('click', ClearAllBtn);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			id: moduleId,
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	(() => {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/ 		__webpack_require__.n = (module) => {
  /******/ 			var getter = module && module.__esModule ?
  /******/ 				() => (module['default']) :
  /******/ 				() => (module);
  /******/ 			__webpack_require__.d(getter, { a: getter });
  /******/ 			return getter;
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 			}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/nonce */
  /******/ 	(() => {
  /******/ 		__webpack_require__.nc = undefined;
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  /******/ 	
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module is referenced by other modules so it can't be inlined
  /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/ 	
  /******/ })()
  ;