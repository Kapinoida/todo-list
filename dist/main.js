/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\n  background-color: rgba(0,0,0,0);\n  width: .5rem;\n}\n\n::-webkit-scrollbar-track {\n  margin-block: .5rem;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgba(255,255,255,0.2);\n  border-radius: 100vw;\n  border: .25rem solid rgba(0,0,0,0);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: 3rem 11fr;\n  grid-template-columns: 8rem 8fr;\n  max-width: 100vw;\n  height: 100vh;\n  color: white;\n}\n\nheader {\n  background-color: rgba(0,0,0,0.8);\n  grid-area: 1 / 1 / 2 / 3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.left, .right {\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 1rem;\n  padding: 0 1rem;\n}\n\nh1 {\n   font-size: 1.5rem;\n   text-align: center;\n   width: 100%;\n}\n\naside {\n  background-color: rgba(0,0,0,0.8);\n  grid-area: 2 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 1rem;\n  gap: 1rem; \n  font-size: 1.25rem;\n}\n\n.aside-select {\n  cursor: pointer;\n}\n\nmain {\n  background-color: rgba(0,0,0,0.9);\n  grid-area: 2 / 2 / 3 / 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n}\n\n.list {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  width: 85%;\n}\n\n.item {\n  height: 2rem;\n  width: calc(100% - 4rem);\n  margin: 0 1rem;\n  padding: 0 1rem;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: .5rem;\n}\n\n.item * {\n  position: relative;\n  width:calc(100% / 6);\n}\n\n.strike * {\n  text-decoration: line-through;\n}\n\n.trash {\n  cursor: pointer;\n  text-decoration: none !important;\n}\n\n.trash:hover {\n  color: rgba(238, 59, 59, 0.8)\n}\n\n.menu, .quick-add {\n  cursor: pointer;\n}\n\n.menu:hover, .quick-add:hover {\n  color: rgba(255,255,255,.7);\n}\n\n.add-task, .add-project {\n  justify-content: end;\n  cursor: pointer;\n}\n\n.add-project {\n  font-size: 1rem;\n}\n\n.add-task:hover, .add-project:hover {\n  color: rgba(90, 216, 107, 0.8);\n}\n\n.check {\n  display: none;\n}\n\n.check + *::before{\n  content: \"\";\n  display: inline-block;\n  vertical-align: bottom;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 100%;\n  border-style: solid;\n  border-width: 0.1rem;\n  border-color: gray;\n}\n\n.check:checked + *::before {\n  content: \"✓\";\n  color: white;\n  text-align: center;\n  background: rgba(90, 216, 107, 0.8);\n  border-color: rgba(90, 216, 107, 0.8);\n}\n\n.check:checked + * {\n  color: rgba(90, 216, 107, 0.8);;\n}\n\n.modal {\n  /* display: none; Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100vw; /* Full width */\n  height: 100vh; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgba(0,0,0,.9);\n}\n\n\n/* Modal Content/Box */\n.modal-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(0,0,0,.9);\n  margin: auto; /* 15% from the top and centered */\n  padding: 1rem;\n  border: 1px solid grey;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  width: 33vw;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  position: fixed;\n  right: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-content div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .15rem;\n}\n\n.project-submit {\n  background-color: rgba(0,0,0,.9);\n  color: white;\n  border: .1rem solid grey;\n  padding: .5rem 1.5rem;\n  cursor: pointer;\n  transition: all .05s;\n}\n\n.project-submit:active {\n  outline: .2rem solid white;\n  font-weight: bold;\n}\n\ninput[type=\"text\"] {\n  padding: .25rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uCAAuC;EACvC,oBAAoB;EACpB,kCAAkC;AACpC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;EACb,6BAA6B;EAC7B,+BAA+B;EAC/B,gBAAgB;EAChB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,iCAAiC;EACjC,wBAAwB;EACxB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,SAAS;EACT,eAAe;AACjB;;AAEA;GACG,iBAAiB;GACjB,kBAAkB;GAClB,WAAW;AACd;;AAEA;EACE,iCAAiC;EACjC,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,wBAAwB;EACxB,cAAc;EACd,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE;AACF;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,mCAAmC;EACnC,qCAAqC;AACvC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,qCAAqC;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,YAAY,EAAE,eAAe;EAC7B,aAAa,EAAE,gBAAgB;EAC/B,cAAc,EAAE,4BAA4B;EAC5C,gCAAgC;AAClC;;;AAGA,sBAAsB;AACtB;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,gCAAgC;EAChC,YAAY,EAAE,kCAAkC;EAChD,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;;AAEA,qBAAqB;AACrB;EACE,WAAW;EACX,eAAe;EACf,WAAW;EACX,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,gCAAgC;EAChC,YAAY;EACZ,wBAAwB;EACxB,qBAAqB;EACrB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB","sourcesContent":["::-webkit-scrollbar {\n  background-color: rgba(0,0,0,0);\n  width: .5rem;\n}\n\n::-webkit-scrollbar-track {\n  margin-block: .5rem;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgba(255,255,255,0.2);\n  border-radius: 100vw;\n  border: .25rem solid rgba(0,0,0,0);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: 3rem 11fr;\n  grid-template-columns: 8rem 8fr;\n  max-width: 100vw;\n  height: 100vh;\n  color: white;\n}\n\nheader {\n  background-color: rgba(0,0,0,0.8);\n  grid-area: 1 / 1 / 2 / 3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.left, .right {\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 1rem;\n  padding: 0 1rem;\n}\n\nh1 {\n   font-size: 1.5rem;\n   text-align: center;\n   width: 100%;\n}\n\naside {\n  background-color: rgba(0,0,0,0.8);\n  grid-area: 2 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 1rem;\n  gap: 1rem; \n  font-size: 1.25rem;\n}\n\n.aside-select {\n  cursor: pointer;\n}\n\nmain {\n  background-color: rgba(0,0,0,0.9);\n  grid-area: 2 / 2 / 3 / 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n}\n\n.list {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  width: 85%;\n}\n\n.item {\n  height: 2rem;\n  width: calc(100% - 4rem);\n  margin: 0 1rem;\n  padding: 0 1rem;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: .5rem;\n}\n\n.item * {\n  position: relative;\n  width:calc(100% / 6);\n}\n\n.strike * {\n  text-decoration: line-through;\n}\n\n.trash {\n  cursor: pointer;\n  text-decoration: none !important;\n}\n\n.trash:hover {\n  color: rgba(238, 59, 59, 0.8)\n}\n\n.menu, .quick-add {\n  cursor: pointer;\n}\n\n.menu:hover, .quick-add:hover {\n  color: rgba(255,255,255,.7);\n}\n\n.add-task, .add-project {\n  justify-content: end;\n  cursor: pointer;\n}\n\n.add-project {\n  font-size: 1rem;\n}\n\n.add-task:hover, .add-project:hover {\n  color: rgba(90, 216, 107, 0.8);\n}\n\n.check {\n  display: none;\n}\n\n.check + *::before{\n  content: \"\";\n  display: inline-block;\n  vertical-align: bottom;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 100%;\n  border-style: solid;\n  border-width: 0.1rem;\n  border-color: gray;\n}\n\n.check:checked + *::before {\n  content: \"✓\";\n  color: white;\n  text-align: center;\n  background: rgba(90, 216, 107, 0.8);\n  border-color: rgba(90, 216, 107, 0.8);\n}\n\n.check:checked + * {\n  color: rgba(90, 216, 107, 0.8);;\n}\n\n.modal {\n  /* display: none; Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100vw; /* Full width */\n  height: 100vh; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgba(0,0,0,.9);\n}\n\n\n/* Modal Content/Box */\n.modal-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(0,0,0,.9);\n  margin: auto; /* 15% from the top and centered */\n  padding: 1rem;\n  border: 1px solid grey;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  width: 33vw;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  position: fixed;\n  right: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-content div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .15rem;\n}\n\n.project-submit {\n  background-color: rgba(0,0,0,.9);\n  color: white;\n  border: .1rem solid grey;\n  padding: .5rem 1.5rem;\n  cursor: pointer;\n  transition: all .05s;\n}\n\n.project-submit:active {\n  outline: .2rem solid white;\n  font-weight: bold;\n}\n\ninput[type=\"text\"] {\n  padding: .25rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/aside.js":
/*!**********************!*\
  !*** ./src/aside.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAside": () => (/* binding */ renderAside)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function renderAside() {
  const aside = document.createElement('aside');
  const inbox = document.createElement('div');
  const today = document.createElement('div');
  const week = document.createElement('div');
  const list = document.createElement('div');
  const addProject = document.createElement('div');

  inbox.innerText = 'Inbox';
  inbox.classList.add('aside-select');
  inbox.dataset.index = 0;
  today.innerText = 'Today';
  today.classList.add('aside-select');
  week.innerText = 'This Week';
  week.classList.add('aside-select');

  const ul = document.createElement('ul');
  ___WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((project, index) => {
    if (project.name == 'Inbox') return;
    ul.innerHTML += `<li class="aside-select" data-index="${index}">${project.name}</li>`
  })

  list.appendChild(ul);
  addProject.innerHTML = `Add Project <i class="fa-solid fa-plus"></i>`;
  addProject.classList.add('add-project');

  aside.appendChild(inbox);
  aside.appendChild(today);
  aside.appendChild(week);
  aside.appendChild(addProject);
  aside.appendChild(ul);
  

  ___WEBPACK_IMPORTED_MODULE_0__.body.appendChild(aside);
}



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function renderHeader() {
  const header = document.createElement('header');
  const heading = document.createElement('h1');
  const right = document.createElement('div');
  const quickAdd = document.createElement('div');

  heading.innerText = 'Todo List';
  header.appendChild(heading);

  right.classList.add('right');
  quickAdd.classList.add('quick-add','fa-solid','fa-plus');
  right.appendChild(quickAdd);
  header.appendChild(right);

  ___WEBPACK_IMPORTED_MODULE_0__.body.appendChild(header);
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside */ "./src/aside.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-modal */ "./src/project-modal.js");
/* harmony import */ var _task_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-modal */ "./src/task-modal.js");







const body = document.querySelector('body');

let projectList = JSON.parse(localStorage.getItem('projectList')) || [];

class Project {
  constructor(name,desc) {
    this.name = name;
    this.desc = desc;
    this.tasks = [];
  }
}

class Task {
  constructor(name, desc, dueDate, priority) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false;
    this.subtasks = [];
  }
}

let inbox;
let curProject = 0;
let tempProject;

function initialize() {
  if(projectList.length === 0) {
    inbox = new Project('Inbox', 'Default');
    projectList.push(inbox);
    curProject = 0;

    const task = new Task('stuff', '', '', 'Low');
    task.complete = true;
    inbox.tasks.push(task);

    const task2 = new Task('things', '', '', 'Low');
    inbox.tasks.push(task2);

    const task3 = new Task('that', '', '', 'Low');
    inbox.tasks.push(task3);
    localStorage.setItem('projectList', JSON.stringify(projectList));
  };
}

function home(curProject) {
  body.innerHTML = '';
  (0,_header__WEBPACK_IMPORTED_MODULE_0__.renderHeader)();
  (0,_aside__WEBPACK_IMPORTED_MODULE_1__.renderAside)();
  console.log(curProject);
  (0,_project__WEBPACK_IMPORTED_MODULE_2__.renderProject)(curProject);
}

document.addEventListener('click', (e) => {
  const classes = e.target.classList;
  const index = e.target.dataset.index;
  const modal = document.querySelector('.modal');

  if(classes.value.includes('trash')){
    projectList[curProject].tasks.splice(index,1);
    localStorage.setItem('projectList', JSON.stringify(projectList));
    home(curProject);
  }

  if(classes.value.includes('check')){
    e.target.checked ? projectList[curProject].tasks[index].complete = true : projectList[curProject].tasks[index].complete = false;
    localStorage.setItem('projectList', JSON.stringify(projectList));
    home(curProject);
  }

  if(classes.value.includes('add-project')){
    (0,_project_modal__WEBPACK_IMPORTED_MODULE_4__.renderProjectModal)();
  }

  if(classes.value.includes('add-task')){
    (0,_task_modal__WEBPACK_IMPORTED_MODULE_5__.renderTaskModal)();
  }

  if(classes.value.includes('project-submit')){
    e.preventDefault();
    const pname = document.querySelector('#name').value;
    const pdesc = document.querySelector('#desc').value;
    const newProject = new Project(pname, pdesc);
    projectList.push(newProject);
    localStorage.setItem('projectList', JSON.stringify(projectList));
    curProject = projectList.length - 1;
    home(curProject);
  }

  if(classes.value.includes('task-submit')){
    e.preventDefault();
    const tname = document.querySelector('#name').value;
    const tdesc = document.querySelector('#desc').value;
    const tdueDate = document.querySelector('#dueDate').value;
    const tpriority = document.querySelector('#priority').value;
    const newTask = new Task(tname, tdesc, tdueDate, tpriority);
    projectList[curProject].tasks.push(newTask);
    localStorage.setItem('projectList', JSON.stringify(projectList));
    if(tempProject != curProject && !isNaN(tempProject)) {
      curProject = tempProject;
      tempProject = NaNfiueoij        ;
    }
    home(curProject);
    
  }

  if(classes.value.includes('quick-add')){
    tempProject = curProject;
    curProject = 0;
    (0,_task_modal__WEBPACK_IMPORTED_MODULE_5__.renderTaskModal)();
  }

  if(classes.value.includes('aside-select')){
    curProject = index;
    home(curProject)
  }

  if(e.target == modal || classes.value.includes('close')){
    home(curProject);
  }

})

// initialize();
home(curProject);



/***/ }),

/***/ "./src/project-modal.js":
/*!******************************!*\
  !*** ./src/project-modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectModal": () => (/* binding */ renderProjectModal)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function renderProjectModal() {
  const modal = document.createElement('div');
  const close = document.createElement('span');
  const form = document.createElement('form');
  const name = document.createElement('label');
  const nameInput = document.createElement('input');
  const desc = document.createElement('label');
  const descInput = document.createElement('input');
  const submit = document.createElement('input');

  modal.classList.add('modal');
  form.classList.add('modal-content');
  close.classList.add('close');
  submit.classList.add('project-submit');

  close.innerHTML = `&times;`;

  name.setAttribute('for', 'name');
  name.innerText = 'Name: '
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  name.appendChild(nameInput);

  desc.setAttribute('for', 'desc');
  desc.innerText = 'Description: '
  descInput.setAttribute('type', 'text');
  descInput.setAttribute('id', 'desc');
  descInput.setAttribute('name', 'desc');
  desc.appendChild(descInput);

  submit.setAttribute('type', 'submit');

  form.appendChild(name);
  form.appendChild(desc);
  form.appendChild(submit);
  modal.appendChild(close);
  modal.appendChild(form);
  ___WEBPACK_IMPORTED_MODULE_0__.body.appendChild(modal);
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProject": () => (/* binding */ renderProject)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function renderProject(curProject) {
  const main = document.createElement('main');
  const heading = document.createElement('h2');
  const list = document.createElement('div');
  const current = ___WEBPACK_IMPORTED_MODULE_0__.projectList[curProject];
  const addTask = document.createElement('div');

  heading.classList.add('title');
  heading.innerText = current.name;

  list.classList.add('list');

  current.tasks.forEach((task, index) => {
    const element = document.createElement('div');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const name = document.createElement('div');
    const date = document.createElement('div');
    const priority = document.createElement('div');
    const trash = document.createElement('i');


    element.classList.add('item');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('check');
    checkbox.dataset.index = index;
    if(task.complete){
      checkbox.setAttribute('checked', 'checked');
      element.classList.add('strike');
    }
    label.appendChild(checkbox);
    label.appendChild(span);
    element.appendChild(label);

    name.innerText = task.name;
    element.appendChild(name);

    date.innerText = task.dueDate;
    element.appendChild(date);

    priority.innerText = task.priority;
    element.appendChild(priority);

    trash.classList.add('trash','fa-solid','fa-trash-can');
    trash.dataset.index = index;
    element.appendChild(trash);

    list.appendChild(element);
  });

  addTask.innerHTML = `Add Task <i class="fa-solid fa-plus"></i>`
  addTask.classList.add('item','add-task');
  list.appendChild(addTask);

  main.appendChild(heading);
  main.appendChild(list);
  ___WEBPACK_IMPORTED_MODULE_0__.body.appendChild(main);
}



/***/ }),

/***/ "./src/task-modal.js":
/*!***************************!*\
  !*** ./src/task-modal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTaskModal": () => (/* binding */ renderTaskModal)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function renderTaskModal() {
  const modal = document.createElement('div');
  const close = document.createElement('span');
  const form = document.createElement('form');
  const name = document.createElement('label');
  const nameInput = document.createElement('input');
  const desc = document.createElement('label');
  const descInput = document.createElement('input');
  const dueDate = document.createElement('label');
  const dueDateInput = document.createElement('input');
  const priority = document.createElement('label');
  const priorityInput = document.createElement('select');
  const low = document.createElement('option');
  const med = document.createElement('option');
  const high = document.createElement('option');
  const submit = document.createElement('input');

  modal.classList.add('modal');
  form.classList.add('modal-content');
  close.classList.add('close');
  submit.classList.add('task-submit');

  close.innerHTML = `&times;`;

  name.setAttribute('for', 'name');
  name.innerText = 'Name: ';
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  name.appendChild(nameInput);

  desc.setAttribute('for', 'desc');
  desc.innerText = 'Description: ';
  descInput.setAttribute('type', 'text');
  descInput.setAttribute('id', 'desc');
  descInput.setAttribute('name', 'desc');
  desc.appendChild(descInput);

  dueDate.setAttribute('for', 'dueDate');
  dueDate.innerText = 'Due Date: ';
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'dueDate');
  dueDateInput.setAttribute('name', 'dueDate');
  dueDate.appendChild(dueDateInput);

  priority.setAttribute('for', 'priority');
  priority.innerText = 'Priority: ';
  priorityInput.setAttribute('id', 'priority');
  priorityInput.setAttribute('name', 'priority');
  low.setAttribute('value', 'Low')
  low.innerText = 'Low';
  med.setAttribute('value', 'Medium')
  med.innerText = 'Medium';
  high.setAttribute('value', 'High')
  high.innerText = 'high';
  priorityInput.appendChild(low);
  priorityInput.appendChild(med);
  priorityInput.appendChild(high);
  priority.appendChild(priorityInput);

  submit.setAttribute('type', 'submit');

  form.appendChild(name);
  form.appendChild(desc);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(submit);
  modal.appendChild(close);
  modal.appendChild(form);
  ___WEBPACK_IMPORTED_MODULE_0__.body.appendChild(modal);
}



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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc2lkZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbiAgd2lkdGg6IC41cmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIG1hcmdpbi1ibG9jazogLjVyZW07XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxuICBib3JkZXI6IC4yNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDApO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDExZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhyZW0gOGZyO1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnQsIC5yaWdodCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXG4gIGdhcDogMXJlbTsgXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5hc2lkZS1zZWxlY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogLjVyZW07XFxuICB3aWR0aDogODUlO1xcbn1cXG5cXG4uaXRlbSB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNHJlbSk7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uaXRlbSAqIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOmNhbGMoMTAwJSAvIDYpO1xcbn1cXG5cXG4uc3RyaWtlICoge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50cmFzaCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnRyYXNoOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDIzOCwgNTksIDU5LCAwLjgpXFxufVxcblxcbi5tZW51LCAucXVpY2stYWRkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnU6aG92ZXIsIC5xdWljay1hZGQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjcpO1xcbn1cXG5cXG4uYWRkLXRhc2ssIC5hZGQtcHJvamVjdCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyLCAuYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpO1xcbn1cXG5cXG4uY2hlY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNoZWNrICsgKjo6YmVmb3Jle1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMC4xcmVtO1xcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uY2hlY2s6Y2hlY2tlZCArICo6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDkwLCAyMTYsIDEwNywgMC44KTtcXG59XFxuXFxuLmNoZWNrOmNoZWNrZWQgKyAqIHtcXG4gIGNvbG9yOiByZ2JhKDkwLCAyMTYsIDEwNywgMC44KTs7XFxufVxcblxcbi5tb2RhbCB7XFxuICAvKiBkaXNwbGF5OiBub25lOyBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMHZ3OyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMHZoOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC45KTtcXG59XFxuXFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOSk7XFxuICBtYXJnaW46IGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDMzdnc7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC4xNXJlbTtcXG59XFxuXFxuLnByb2plY3Qtc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4wNXM7XFxufVxcblxcbi5wcm9qZWN0LXN1Ym1pdDphY3RpdmUge1xcbiAgb3V0bGluZTogLjJyZW0gc29saWQgd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLCtCQUErQjtFQUMv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QUFDYjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbiAgd2lkdGg6IC41cmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIG1hcmdpbi1ibG9jazogLjVyZW07XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxuICBib3JkZXI6IC4yNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDApO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDExZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhyZW0gOGZyO1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnQsIC5yaWdodCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXG4gIGdhcDogMXJlbTsgXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5hc2lkZS1zZWxlY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogLjVyZW07XFxuICB3aWR0aDogODUlO1xcbn1cXG5cXG4uaXRlbSB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNHJlbSk7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uaXRlbSAqIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOmNhbGMoMTAwJSAvIDYpO1xcbn1cXG5cXG4uc3RyaWtlICoge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50cmFzaCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnRyYXNoOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDIzOCwgNTksIDU5LCAwLjgpXFxufVxcblxcbi5tZW51LCAucXVpY2stYWRkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnU6aG92ZXIsIC5xdWljay1hZGQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjcpO1xcbn1cXG5cXG4uYWRkLXRhc2ssIC5hZGQtcHJvamVjdCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyLCAuYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpO1xcbn1cXG5cXG4uY2hlY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNoZWNrICsgKjo6YmVmb3Jle1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMC4xcmVtO1xcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uY2hlY2s6Y2hlY2tlZCArICo6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDkwLCAyMTYsIDEwNywgMC44KTtcXG59XFxuXFxuLmNoZWNrOmNoZWNrZWQgKyAqIHtcXG4gIGNvbG9yOiByZ2JhKDkwLCAyMTYsIDEwNywgMC44KTs7XFxufVxcblxcbi5tb2RhbCB7XFxuICAvKiBkaXNwbGF5OiBub25lOyBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMHZ3OyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMHZoOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC45KTtcXG59XFxuXFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOSk7XFxuICBtYXJnaW46IGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDMzdnc7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC4xNXJlbTtcXG59XFxuXFxuLnByb2plY3Qtc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4wNXM7XFxufVxcblxcbi5wcm9qZWN0LXN1Ym1pdDphY3RpdmUge1xcbiAgb3V0bGluZTogLjJyZW0gc29saWQgd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBib2R5LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckFzaWRlKCkge1xuICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaW5ib3guaW5uZXJUZXh0ID0gJ0luYm94JztcbiAgaW5ib3guY2xhc3NMaXN0LmFkZCgnYXNpZGUtc2VsZWN0Jyk7XG4gIGluYm94LmRhdGFzZXQuaW5kZXggPSAwO1xuICB0b2RheS5pbm5lclRleHQgPSAnVG9kYXknO1xuICB0b2RheS5jbGFzc0xpc3QuYWRkKCdhc2lkZS1zZWxlY3QnKTtcbiAgd2Vlay5pbm5lclRleHQgPSAnVGhpcyBXZWVrJztcbiAgd2Vlay5jbGFzc0xpc3QuYWRkKCdhc2lkZS1zZWxlY3QnKTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgaWYgKHByb2plY3QubmFtZSA9PSAnSW5ib3gnKSByZXR1cm47XG4gICAgdWwuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJhc2lkZS1zZWxlY3RcIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIj4ke3Byb2plY3QubmFtZX08L2xpPmBcbiAgfSlcblxuICBsaXN0LmFwcGVuZENoaWxkKHVsKTtcbiAgYWRkUHJvamVjdC5pbm5lckhUTUwgPSBgQWRkIFByb2plY3QgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVzXCI+PC9pPmA7XG4gIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QnKTtcblxuICBhc2lkZS5hcHBlbmRDaGlsZChpbmJveCk7XG4gIGFzaWRlLmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgYXNpZGUuYXBwZW5kQ2hpbGQod2Vlayk7XG4gIGFzaWRlLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuICBhc2lkZS5hcHBlbmRDaGlsZCh1bCk7XG4gIFxuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoYXNpZGUpO1xufVxuXG5leHBvcnQgeyByZW5kZXJBc2lkZSB9IiwiaW1wb3J0IHsgYm9keSB9IGZyb20gXCIuXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBxdWlja0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ1RvZG8gTGlzdCc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuICBxdWlja0FkZC5jbGFzc0xpc3QuYWRkKCdxdWljay1hZGQnLCdmYS1zb2xpZCcsJ2ZhLXBsdXMnKTtcbiAgcmlnaHQuYXBwZW5kQ2hpbGQocXVpY2tBZGQpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocmlnaHQpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVySGVhZGVyIH07IiwiaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgcmVuZGVyQXNpZGUgfSBmcm9tICcuL2FzaWRlJztcbmltcG9ydCB7IHJlbmRlclByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0TW9kYWwgfSBmcm9tICcuL3Byb2plY3QtbW9kYWwnO1xuaW1wb3J0IHsgcmVuZGVyVGFza01vZGFsIH0gZnJvbSAnLi90YXNrLW1vZGFsJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxubGV0IHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKSkgfHwgW107XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLGRlc2MpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG59XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5zdWJ0YXNrcyA9IFtdO1xuICB9XG59XG5cbmxldCBpbmJveDtcbmxldCBjdXJQcm9qZWN0ID0gMDtcbmxldCB0ZW1wUHJvamVjdDtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgaWYocHJvamVjdExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgaW5ib3ggPSBuZXcgUHJvamVjdCgnSW5ib3gnLCAnRGVmYXVsdCcpO1xuICAgIHByb2plY3RMaXN0LnB1c2goaW5ib3gpO1xuICAgIGN1clByb2plY3QgPSAwO1xuXG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKCdzdHVmZicsICcnLCAnJywgJ0xvdycpO1xuICAgIHRhc2suY29tcGxldGUgPSB0cnVlO1xuICAgIGluYm94LnRhc2tzLnB1c2godGFzayk7XG5cbiAgICBjb25zdCB0YXNrMiA9IG5ldyBUYXNrKCd0aGluZ3MnLCAnJywgJycsICdMb3cnKTtcbiAgICBpbmJveC50YXNrcy5wdXNoKHRhc2syKTtcblxuICAgIGNvbnN0IHRhc2szID0gbmV3IFRhc2soJ3RoYXQnLCAnJywgJycsICdMb3cnKTtcbiAgICBpbmJveC50YXNrcy5wdXNoKHRhc2szKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBob21lKGN1clByb2plY3QpIHtcbiAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgcmVuZGVySGVhZGVyKCk7XG4gIHJlbmRlckFzaWRlKCk7XG4gIGNvbnNvbGUubG9nKGN1clByb2plY3QpO1xuICByZW5kZXJQcm9qZWN0KGN1clByb2plY3QpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XG4gIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuICBpZihjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCd0cmFzaCcpKXtcbiAgICBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XS50YXNrcy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICBob21lKGN1clByb2plY3QpO1xuICB9XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygnY2hlY2snKSl7XG4gICAgZS50YXJnZXQuY2hlY2tlZCA/IHByb2plY3RMaXN0W2N1clByb2plY3RdLnRhc2tzW2luZGV4XS5jb21wbGV0ZSA9IHRydWUgOiBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XS50YXNrc1tpbmRleF0uY29tcGxldGUgPSBmYWxzZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgIGhvbWUoY3VyUHJvamVjdCk7XG4gIH1cblxuICBpZihjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCdhZGQtcHJvamVjdCcpKXtcbiAgICByZW5kZXJQcm9qZWN0TW9kYWwoKTtcbiAgfVxuXG4gIGlmKGNsYXNzZXMudmFsdWUuaW5jbHVkZXMoJ2FkZC10YXNrJykpe1xuICAgIHJlbmRlclRhc2tNb2RhbCgpO1xuICB9XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygncHJvamVjdC1zdWJtaXQnKSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgICBjb25zdCBwZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjJykudmFsdWU7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHBuYW1lLCBwZGVzYyk7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgIGN1clByb2plY3QgPSBwcm9qZWN0TGlzdC5sZW5ndGggLSAxO1xuICAgIGhvbWUoY3VyUHJvamVjdCk7XG4gIH1cblxuICBpZihjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCd0YXNrLXN1Ym1pdCcpKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IHRkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2MnKS52YWx1ZTtcbiAgICBjb25zdCB0ZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJykudmFsdWU7XG4gICAgY29uc3QgdHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRuYW1lLCB0ZGVzYywgdGR1ZURhdGUsIHRwcmlvcml0eSk7XG4gICAgcHJvamVjdExpc3RbY3VyUHJvamVjdF0udGFza3MucHVzaChuZXdUYXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgIGlmKHRlbXBQcm9qZWN0ICE9IGN1clByb2plY3QgJiYgIWlzTmFOKHRlbXBQcm9qZWN0KSkge1xuICAgICAgY3VyUHJvamVjdCA9IHRlbXBQcm9qZWN0O1xuICAgICAgdGVtcFByb2plY3QgPSBOYU5maXVlb2lqICAgICAgICA7XG4gICAgfVxuICAgIGhvbWUoY3VyUHJvamVjdCk7XG4gICAgXG4gIH1cblxuICBpZihjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCdxdWljay1hZGQnKSl7XG4gICAgdGVtcFByb2plY3QgPSBjdXJQcm9qZWN0O1xuICAgIGN1clByb2plY3QgPSAwO1xuICAgIHJlbmRlclRhc2tNb2RhbCgpO1xuICB9XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygnYXNpZGUtc2VsZWN0Jykpe1xuICAgIGN1clByb2plY3QgPSBpbmRleDtcbiAgICBob21lKGN1clByb2plY3QpXG4gIH1cblxuICBpZihlLnRhcmdldCA9PSBtb2RhbCB8fCBjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCdjbG9zZScpKXtcbiAgICBob21lKGN1clByb2plY3QpO1xuICB9XG5cbn0pXG5cbi8vIGluaXRpYWxpemUoKTtcbmhvbWUoY3VyUHJvamVjdCk7XG5cbmV4cG9ydCB7IGJvZHksIHByb2plY3RMaXN0IH07IiwiaW1wb3J0IHsgYm9keSB9IGZyb20gXCIuXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RNb2RhbCgpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcbiAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc3VibWl0Jyk7XG5cbiAgY2xvc2UuaW5uZXJIVE1MID0gYCZ0aW1lcztgO1xuXG4gIG5hbWUuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICBuYW1lLmlubmVyVGV4dCA9ICdOYW1lOiAnXG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICBuYW1lLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjJyk7XG4gIGRlc2MuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOiAnXG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjJyk7XG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzYycpO1xuICBkZXNjLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cbiAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKG5hbWUpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2MpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0TW9kYWwgfSIsImltcG9ydCB7IGJvZHksIHByb2plY3RMaXN0IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdChjdXJQcm9qZWN0KSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGN1cnJlbnQgPSBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XTtcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgaGVhZGluZy5pbm5lclRleHQgPSBjdXJyZW50Lm5hbWU7XG5cbiAgbGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG5cbiAgY3VycmVudC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcblxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgY2hlY2tib3guZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgIGlmKHRhc2suY29tcGxldGUpe1xuICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RyaWtlJyk7XG4gICAgfVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIG5hbWUuaW5uZXJUZXh0ID0gdGFzay5uYW1lO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICBkYXRlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgcHJpb3JpdHkuaW5uZXJUZXh0ID0gdGFzay5wcmlvcml0eTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIHRyYXNoLmNsYXNzTGlzdC5hZGQoJ3RyYXNoJywnZmEtc29saWQnLCdmYS10cmFzaC1jYW4nKTtcbiAgICB0cmFzaC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0cmFzaCk7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcblxuICBhZGRUYXNrLmlubmVySFRNTCA9IGBBZGQgVGFzayA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXNcIj48L2k+YFxuICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nLCdhZGQtdGFzaycpO1xuICBsaXN0LmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobGlzdCk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3QgfTsiLCJpbXBvcnQgeyBib2R5IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gcmVuZGVyVGFza01vZGFsKCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBtZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgndGFzay1zdWJtaXQnKTtcblxuICBjbG9zZS5pbm5lckhUTUwgPSBgJnRpbWVzO2A7XG5cbiAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gIG5hbWUuaW5uZXJUZXh0ID0gJ05hbWU6ICc7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICBuYW1lLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjJyk7XG4gIGRlc2MuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzYycpO1xuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2MnKTtcbiAgZGVzYy5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpO1xuICBkdWVEYXRlLmlubmVyVGV4dCA9ICdEdWUgRGF0ZTogJztcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZURhdGUnKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJyk7XG4gIGR1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICBwcmlvcml0eS5pbm5lclRleHQgPSAnUHJpb3JpdHk6ICc7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICBsb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdMb3cnKVxuICBsb3cuaW5uZXJUZXh0ID0gJ0xvdyc7XG4gIG1lZC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ01lZGl1bScpXG4gIG1lZC5pbm5lclRleHQgPSAnTWVkaXVtJztcbiAgaGlnaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0hpZ2gnKVxuICBoaWdoLmlubmVyVGV4dCA9ICdoaWdoJztcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3cpO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG1lZCk7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG59XG5cbmV4cG9ydCB7IHJlbmRlclRhc2tNb2RhbCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9