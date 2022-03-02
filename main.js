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

let projectList = [];

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
let curProject;
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

  };
}

function home(curProject) {
  body.innerHTML = '';
  (0,_header__WEBPACK_IMPORTED_MODULE_0__.renderHeader)();
  (0,_aside__WEBPACK_IMPORTED_MODULE_1__.renderAside)();
  (0,_project__WEBPACK_IMPORTED_MODULE_2__.renderProject)(curProject);
}

document.addEventListener('click', (e) => {
  const classes = e.target.classList;
  const index = e.target.dataset.index;
  const modal = document.querySelector('.modal');

  if(classes.value.includes('trash')){
    projectList[curProject].tasks.splice(index,1);
    home(curProject);
  }

  if(classes.value.includes('check')){
    e.target.checked ? projectList[curProject].tasks[index].complete = true : projectList[curProject].tasks[index].complete = false;
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
    if(tempProject != curProject && tempProject!= '') {
      curProject = tempProject;
      tempProject = '';
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

initialize();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FzaWRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LW1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLW1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxuICB3aWR0aDogLjVyZW07XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgbWFyZ2luLWJsb2NrOiAuNXJlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XFxuICBib3JkZXItcmFkaXVzOiAxMDB2dztcXG4gIGJvcmRlcjogLjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMCk7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMTFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOHJlbSA4ZnI7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGVmdCwgLnJpZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbmgxIHtcXG4gICBmb250LXNpemU6IDEuNXJlbTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbiAgZ2FwOiAxcmVtOyBcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLmFzaWRlLXNlbGVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAuNXJlbTtcXG4gIHdpZHRoOiA4NSU7XFxufVxcblxcbi5pdGVtIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0cmVtKTtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogLjVyZW07XFxufVxcblxcbi5pdGVtICoge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6Y2FsYygxMDAlIC8gNik7XFxufVxcblxcbi5zdHJpa2UgKiB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRyYXNoIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udHJhc2g6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjM4LCA1OSwgNTksIDAuOClcXG59XFxuXFxuLm1lbnUsIC5xdWljay1hZGQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudTpob3ZlciwgLnF1aWNrLWFkZDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XFxufVxcblxcbi5hZGQtdGFzaywgLmFkZC1wcm9qZWN0IHtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIsIC5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg5MCwgMjE2LCAxMDcsIDAuOCk7XFxufVxcblxcbi5jaGVjayB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2sgKyAqOjpiZWZvcmV7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjFyZW07XFxuICBib3JkZXItY29sb3I6IGdyYXk7XFxufVxcblxcbi5jaGVjazpjaGVja2VkICsgKjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSg5MCwgMjE2LCAxMDcsIDAuOCk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpO1xcbn1cXG5cXG4uY2hlY2s6Y2hlY2tlZCArICoge1xcbiAgY29sb3I6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpOztcXG59XFxuXFxuLm1vZGFsIHtcXG4gIC8qIGRpc3BsYXk6IG5vbmU7IEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwdnc7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwdmg7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xcbn1cXG5cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC45KTtcXG4gIG1hcmdpbjogYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMzN2dztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogLjE1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjA1cztcXG59XFxuXFxuLnByb2plY3Qtc3VibWl0OmFjdGl2ZSB7XFxuICBvdXRsaW5lOiAuMnJlbSBzb2xpZCB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFt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LFlBQVk7RUFDWix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxuICB3aWR0aDogLjVyZW07XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgbWFyZ2luLWJsb2NrOiAuNXJlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XFxuICBib3JkZXItcmFkaXVzOiAxMDB2dztcXG4gIGJvcmRlcjogLjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMCk7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMTFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOHJlbSA4ZnI7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGVmdCwgLnJpZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbmgxIHtcXG4gICBmb250LXNpemU6IDEuNXJlbTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbiAgZ2FwOiAxcmVtOyBcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLmFzaWRlLXNlbGVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAuNXJlbTtcXG4gIHdpZHRoOiA4NSU7XFxufVxcblxcbi5pdGVtIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0cmVtKTtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogLjVyZW07XFxufVxcblxcbi5pdGVtICoge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6Y2FsYygxMDAlIC8gNik7XFxufVxcblxcbi5zdHJpa2UgKiB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRyYXNoIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udHJhc2g6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjM4LCA1OSwgNTksIDAuOClcXG59XFxuXFxuLm1lbnUsIC5xdWljay1hZGQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudTpob3ZlciwgLnF1aWNrLWFkZDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XFxufVxcblxcbi5hZGQtdGFzaywgLmFkZC1wcm9qZWN0IHtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIsIC5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg5MCwgMjE2LCAxMDcsIDAuOCk7XFxufVxcblxcbi5jaGVjayB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2sgKyAqOjpiZWZvcmV7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjFyZW07XFxuICBib3JkZXItY29sb3I6IGdyYXk7XFxufVxcblxcbi5jaGVjazpjaGVja2VkICsgKjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSg5MCwgMjE2LCAxMDcsIDAuOCk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpO1xcbn1cXG5cXG4uY2hlY2s6Y2hlY2tlZCArICoge1xcbiAgY29sb3I6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpOztcXG59XFxuXFxuLm1vZGFsIHtcXG4gIC8qIGRpc3BsYXk6IG5vbmU7IEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwdnc7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwdmg7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xcbn1cXG5cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC45KTtcXG4gIG1hcmdpbjogYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMzN2dztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogLjE1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjA1cztcXG59XFxuXFxuLnByb2plY3Qtc3VibWl0OmFjdGl2ZSB7XFxuICBvdXRsaW5lOiAuMnJlbSBzb2xpZCB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGJvZHksIHByb2plY3RMaXN0IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gcmVuZGVyQXNpZGUoKSB7XG4gIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBpbmJveC5pbm5lclRleHQgPSAnSW5ib3gnO1xuICBpbmJveC5jbGFzc0xpc3QuYWRkKCdhc2lkZS1zZWxlY3QnKTtcbiAgaW5ib3guZGF0YXNldC5pbmRleCA9IDA7XG4gIHRvZGF5LmlubmVyVGV4dCA9ICdUb2RheSc7XG4gIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ2FzaWRlLXNlbGVjdCcpO1xuICB3ZWVrLmlubmVyVGV4dCA9ICdUaGlzIFdlZWsnO1xuICB3ZWVrLmNsYXNzTGlzdC5hZGQoJ2FzaWRlLXNlbGVjdCcpO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBpZiAocHJvamVjdC5uYW1lID09ICdJbmJveCcpIHJldHVybjtcbiAgICB1bC5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImFzaWRlLXNlbGVjdFwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiPiR7cHJvamVjdC5uYW1lfTwvbGk+YFxuICB9KVxuXG4gIGxpc3QuYXBwZW5kQ2hpbGQodWwpO1xuICBhZGRQcm9qZWN0LmlubmVySFRNTCA9IGBBZGQgUHJvamVjdCA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXNcIj48L2k+YDtcbiAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcpO1xuXG4gIGFzaWRlLmFwcGVuZENoaWxkKGluYm94KTtcbiAgYXNpZGUuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICBhc2lkZS5hcHBlbmRDaGlsZCh3ZWVrKTtcbiAgYXNpZGUuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG4gIGFzaWRlLmFwcGVuZENoaWxkKHVsKTtcbiAgXG5cbiAgYm9keS5hcHBlbmRDaGlsZChhc2lkZSk7XG59XG5cbmV4cG9ydCB7IHJlbmRlckFzaWRlIH0iLCJpbXBvcnQgeyBib2R5IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHF1aWNrQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaGVhZGluZy5pbm5lclRleHQgPSAnVG9kbyBMaXN0JztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG4gIHF1aWNrQWRkLmNsYXNzTGlzdC5hZGQoJ3F1aWNrLWFkZCcsJ2ZhLXNvbGlkJywnZmEtcGx1cycpO1xuICByaWdodC5hcHBlbmRDaGlsZChxdWlja0FkZCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChyaWdodCk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJIZWFkZXIgfTsiLCJpbXBvcnQgeyByZW5kZXJIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyByZW5kZXJBc2lkZSB9IGZyb20gJy4vYXNpZGUnO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlclByb2plY3RNb2RhbCB9IGZyb20gJy4vcHJvamVjdC1tb2RhbCc7XG5pbXBvcnQgeyByZW5kZXJUYXNrTW9kYWwgfSBmcm9tICcuL3Rhc2stbW9kYWwnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5sZXQgcHJvamVjdExpc3QgPSBbXTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsZGVzYykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbn1cblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICB0aGlzLnN1YnRhc2tzID0gW107XG4gIH1cbn1cblxubGV0IGluYm94O1xubGV0IGN1clByb2plY3Q7XG5sZXQgdGVtcFByb2plY3Q7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gIGlmKHByb2plY3RMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIGluYm94ID0gbmV3IFByb2plY3QoJ0luYm94JywgJ0RlZmF1bHQnKTtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKGluYm94KTtcbiAgICBjdXJQcm9qZWN0ID0gMDtcblxuXG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKCdzdHVmZicsICcnLCAnJywgJ0xvdycpO1xuICAgIHRhc2suY29tcGxldGUgPSB0cnVlO1xuICAgIGluYm94LnRhc2tzLnB1c2godGFzayk7XG5cbiAgICBjb25zdCB0YXNrMiA9IG5ldyBUYXNrKCd0aGluZ3MnLCAnJywgJycsICdMb3cnKTtcbiAgICBpbmJveC50YXNrcy5wdXNoKHRhc2syKTtcblxuICAgIGNvbnN0IHRhc2szID0gbmV3IFRhc2soJ3RoYXQnLCAnJywgJycsICdMb3cnKTtcbiAgICBpbmJveC50YXNrcy5wdXNoKHRhc2szKTtcblxuICB9O1xufVxuXG5mdW5jdGlvbiBob21lKGN1clByb2plY3QpIHtcbiAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgcmVuZGVySGVhZGVyKCk7XG4gIHJlbmRlckFzaWRlKCk7XG4gIHJlbmRlclByb2plY3QoY3VyUHJvamVjdCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IGUudGFyZ2V0LmNsYXNzTGlzdDtcbiAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gIGlmKGNsYXNzZXMudmFsdWUuaW5jbHVkZXMoJ3RyYXNoJykpe1xuICAgIHByb2plY3RMaXN0W2N1clByb2plY3RdLnRhc2tzLnNwbGljZShpbmRleCwxKTtcbiAgICBob21lKGN1clByb2plY3QpO1xuICB9XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygnY2hlY2snKSl7XG4gICAgZS50YXJnZXQuY2hlY2tlZCA/IHByb2plY3RMaXN0W2N1clByb2plY3RdLnRhc2tzW2luZGV4XS5jb21wbGV0ZSA9IHRydWUgOiBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XS50YXNrc1tpbmRleF0uY29tcGxldGUgPSBmYWxzZTtcbiAgICBob21lKGN1clByb2plY3QpO1xuICB9XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygnYWRkLXByb2plY3QnKSl7XG4gICAgcmVuZGVyUHJvamVjdE1vZGFsKCk7XG4gIH1cblxuICBpZihjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCdhZGQtdGFzaycpKXtcbiAgICByZW5kZXJUYXNrTW9kYWwoKTtcbiAgfVxuXG4gIGlmKGNsYXNzZXMudmFsdWUuaW5jbHVkZXMoJ3Byb2plY3Qtc3VibWl0Jykpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gICAgY29uc3QgcGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzYycpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwbmFtZSwgcGRlc2MpO1xuICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgY3VyUHJvamVjdCA9IHByb2plY3RMaXN0Lmxlbmd0aCAtIDE7XG4gICAgaG9tZShjdXJQcm9qZWN0KTtcbiAgfVxuXG4gIGlmKGNsYXNzZXMudmFsdWUuaW5jbHVkZXMoJ3Rhc2stc3VibWl0Jykpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0bmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gICAgY29uc3QgdGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzYycpLnZhbHVlO1xuICAgIGNvbnN0IHRkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKS52YWx1ZTtcbiAgICBjb25zdCB0cHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZTtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodG5hbWUsIHRkZXNjLCB0ZHVlRGF0ZSwgdHByaW9yaXR5KTtcbiAgICBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XS50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIGlmKHRlbXBQcm9qZWN0ICE9IGN1clByb2plY3QgJiYgdGVtcFByb2plY3QhPSAnJykge1xuICAgICAgY3VyUHJvamVjdCA9IHRlbXBQcm9qZWN0O1xuICAgICAgdGVtcFByb2plY3QgPSAnJztcbiAgICB9XG4gICAgaG9tZShjdXJQcm9qZWN0KTtcbiAgICBcbiAgfVxuXG4gIGlmKGNsYXNzZXMudmFsdWUuaW5jbHVkZXMoJ3F1aWNrLWFkZCcpKXtcbiAgICB0ZW1wUHJvamVjdCA9IGN1clByb2plY3Q7XG4gICAgY3VyUHJvamVjdCA9IDA7XG4gICAgcmVuZGVyVGFza01vZGFsKCk7XG4gIH1cblxuICBpZihjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCdhc2lkZS1zZWxlY3QnKSl7XG4gICAgY3VyUHJvamVjdCA9IGluZGV4O1xuICAgIGhvbWUoY3VyUHJvamVjdClcbiAgfVxuXG4gIGlmKGUudGFyZ2V0ID09IG1vZGFsIHx8IGNsYXNzZXMudmFsdWUuaW5jbHVkZXMoJ2Nsb3NlJykpe1xuICAgIGhvbWUoY3VyUHJvamVjdCk7XG4gIH1cblxufSlcblxuaW5pdGlhbGl6ZSgpO1xuaG9tZShjdXJQcm9qZWN0KTtcblxuZXhwb3J0IHsgYm9keSwgcHJvamVjdExpc3QgfTsiLCJpbXBvcnQgeyBib2R5IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdE1vZGFsKCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zdWJtaXQnKTtcblxuICBjbG9zZS5pbm5lckhUTUwgPSBgJnRpbWVzO2A7XG5cbiAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gIG5hbWUuaW5uZXJUZXh0ID0gJ05hbWU6ICdcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gIG5hbWUuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICBkZXNjLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2MnKTtcbiAgZGVzYy5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246ICdcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2MnKTtcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjJyk7XG4gIGRlc2MuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblxuICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RNb2RhbCB9IiwiaW1wb3J0IHsgYm9keSwgcHJvamVjdExpc3QgfSBmcm9tIFwiLlwiO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KGN1clByb2plY3QpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY3VycmVudCA9IHByb2plY3RMaXN0W2N1clByb2plY3RdO1xuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICBoZWFkaW5nLmlubmVyVGV4dCA9IGN1cnJlbnQubmFtZTtcblxuICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcblxuICBjdXJyZW50LnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICBjaGVja2JveC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgaWYodGFzay5jb21wbGV0ZSl7XG4gICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdHJpa2UnKTtcbiAgICB9XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgbmFtZS5pbm5lclRleHQgPSB0YXNrLm5hbWU7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIGRhdGUuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICBwcmlvcml0eS5pbm5lclRleHQgPSB0YXNrLnByaW9yaXR5O1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgdHJhc2guY2xhc3NMaXN0LmFkZCgndHJhc2gnLCdmYS1zb2xpZCcsJ2ZhLXRyYXNoLWNhbicpO1xuICAgIHRyYXNoLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRyYXNoKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xuXG4gIGFkZFRhc2suaW5uZXJIVE1MID0gYEFkZCBUYXNrIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiPjwvaT5gXG4gIGFkZFRhc2suY2xhc3NMaXN0LmFkZCgnaXRlbScsJ2FkZC10YXNrJyk7XG4gIGxpc3QuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChsaXN0KTtcbiAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdCB9OyIsImltcG9ydCB7IGJvZHkgfSBmcm9tIFwiLlwiO1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrTW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG4gIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCd0YXNrLXN1Ym1pdCcpO1xuXG4gIGNsb3NlLmlubmVySFRNTCA9IGAmdGltZXM7YDtcblxuICBuYW1lLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgbmFtZS5pbm5lclRleHQgPSAnTmFtZTogJztcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gIG5hbWUuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICBkZXNjLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2MnKTtcbiAgZGVzYy5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246ICc7XG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjJyk7XG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzYycpO1xuICBkZXNjLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gIGR1ZURhdGUuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlOiAnO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlRGF0ZScpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGUnKTtcbiAgZHVlRGF0ZS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gIHByaW9yaXR5LmlubmVyVGV4dCA9ICdQcmlvcml0eTogJztcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gIGxvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0xvdycpXG4gIGxvdy5pbm5lclRleHQgPSAnTG93JztcbiAgbWVkLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTWVkaXVtJylcbiAgbWVkLmlubmVyVGV4dCA9ICdNZWRpdW0nO1xuICBoaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpXG4gIGhpZ2guaW5uZXJUZXh0ID0gJ2hpZ2gnO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxvdyk7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobWVkKTtcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdoKTtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKG5hbWUpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2MpO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZSk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuICBib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyVGFza01vZGFsIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=