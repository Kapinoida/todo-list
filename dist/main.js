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
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\n  background-color: rgba(0,0,0,0);\n  width: .5rem;\n}\n\n::-webkit-scrollbar-track {\n  margin-block: .5rem;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgba(255,255,255,0.2);\n  border-radius: 100vw;\n  border: .25rem solid rgba(0,0,0,0);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: 3rem 11fr;\n  grid-template-columns: 8rem 8fr;\n  max-width: 100vw;\n  height: 100vh;\n  color: white;\n}\n\nheader {\n  background-color: rgba(0,0,0,0.8);\n  grid-area: 1 / 1 / 2 / 3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.left, .right {\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 1rem;\n  padding: 0 1rem;\n}\n\nh1 {\n   font-size: 1.5rem;\n   text-align: center;\n   width: 100%;\n}\n\naside {\n  background-color: rgba(0,0,0,0.8);\n  grid-area: 2 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 1rem;\n  gap: 1rem; \n  font-size: 1.25rem;\n}\n\n.aside-select {\n  cursor: pointer;\n}\n\naside ul {\n  margin:0;\n  padding:0;\n  list-style: none;\n}\n\nmain {\n  background-color: rgba(0,0,0,0.9);\n  grid-area: 2 / 2 / 3 / 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n}\n\n.list {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  width: 65%;\n}\n\n.item {\n  height: 2rem;\n  width: calc(100% - 4rem);\n  margin: 0 1rem;\n  padding: 0 1rem;\n  display: grid;\n  grid-template-columns: 1rem 6fr 5rem 3.5rem 1rem;\n  align-items: center;\n  gap: .25rem;\n}\n\n.item label {\n  display: flex;\n  justify-content: center;\n  width: 1rem;\n}\n\n.strike * {\n  text-decoration: line-through;\n}\n\n.task-name {\n  cursor: pointer;\n}\n\n.task-delete, .project-delete {\n  cursor: pointer;\n  text-decoration: none !important;\n}\n\n.task-delete, .project-delete i {\n   width: 1rem;\n}\n\n.task-delete:hover, .project-delete:hover {\n  color: rgba(238, 59, 59, 0.8)\n}\n\n.quick-add {\n  cursor: pointer;\n}\n\n.quick-add:hover {\n  color: rgba(255,255,255,.7);\n}\n\n.add-task, .add-project, .project-delete {\n  justify-content: end;\n  cursor: pointer;\n}\n\n.add-task, .project-delete {\n  display: flex;\n}\n\n.add-task i {\n  width: 1rem;\n}\n\n.add-project {\n  font-size: .75rem;\n}\n\n.add-task:hover, .add-project:hover {\n  color: rgba(90, 216, 107, 0.8);\n}\n\n.check {\n  display: none;\n}\n\n.check + *::before{\n  content: \"\";\n  display: flex;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 100%;\n  border-style: solid;\n  border-width: 0.1rem;\n  border-color: gray;\n}\n\n.check:checked + *::before {\n  content: \"✓\";\n  color: white;\n  text-align: center;\n  background: rgba(90, 216, 107, 0.8);\n  border-color: rgba(90, 216, 107, 0.8);\n}\n\n.check:checked + * {\n  color: rgba(90, 216, 107, 0.8);\n}\n\n.modal {\n  /* display: none; Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100vw; /* Full width */\n  height: 100vh; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgba(0,0,0,.9);\n}\n\n\n/* Modal Content/Box */\n.modal-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(0,0,0,.9);\n  margin: auto; /* 15% from the top and centered */\n  padding: 1rem;\n  border: 1px solid grey;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  width: 33vw;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  position: fixed;\n  right: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-content label {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .15rem;\n}\n\n.project-submit, .task-submit, .task-edit-submit {\n  background-color: rgba(0,0,0,.9);\n  color: white;\n  border: .1rem solid grey;\n  padding: .5rem 1.5rem;\n  cursor: pointer;\n  transition: all .05s;\n}\n\n.project-submit:active, .task-submit:active, .task-edit-submit:active {\n  outline: .2rem solid white;\n  font-weight: bold;\n}\n\ninput[type=\"text\"] {\n  padding: .25rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["::-webkit-scrollbar {\n  background-color: rgba(0,0,0,0);\n  width: .5rem;\n}\n\n::-webkit-scrollbar-track {\n  margin-block: .5rem;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgba(255,255,255,0.2);\n  border-radius: 100vw;\n  border: .25rem solid rgba(0,0,0,0);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: 3rem 11fr;\n  grid-template-columns: 8rem 8fr;\n  max-width: 100vw;\n  height: 100vh;\n  color: white;\n}\n\nheader {\n  background-color: rgba(0,0,0,0.8);\n  grid-area: 1 / 1 / 2 / 3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.left, .right {\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 1rem;\n  padding: 0 1rem;\n}\n\nh1 {\n   font-size: 1.5rem;\n   text-align: center;\n   width: 100%;\n}\n\naside {\n  background-color: rgba(0,0,0,0.8);\n  grid-area: 2 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 1rem;\n  gap: 1rem; \n  font-size: 1.25rem;\n}\n\n.aside-select {\n  cursor: pointer;\n}\n\naside ul {\n  margin:0;\n  padding:0;\n  list-style: none;\n}\n\nmain {\n  background-color: rgba(0,0,0,0.9);\n  grid-area: 2 / 2 / 3 / 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n}\n\n.list {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  width: 65%;\n}\n\n.item {\n  height: 2rem;\n  width: calc(100% - 4rem);\n  margin: 0 1rem;\n  padding: 0 1rem;\n  display: grid;\n  grid-template-columns: 1rem 6fr 5rem 3.5rem 1rem;\n  align-items: center;\n  gap: .25rem;\n}\n\n.item label {\n  display: flex;\n  justify-content: center;\n  width: 1rem;\n}\n\n.strike * {\n  text-decoration: line-through;\n}\n\n.task-name {\n  cursor: pointer;\n}\n\n.task-delete, .project-delete {\n  cursor: pointer;\n  text-decoration: none !important;\n}\n\n.task-delete, .project-delete i {\n   width: 1rem;\n}\n\n.task-delete:hover, .project-delete:hover {\n  color: rgba(238, 59, 59, 0.8)\n}\n\n.quick-add {\n  cursor: pointer;\n}\n\n.quick-add:hover {\n  color: rgba(255,255,255,.7);\n}\n\n.add-task, .add-project, .project-delete {\n  justify-content: end;\n  cursor: pointer;\n}\n\n.add-task, .project-delete {\n  display: flex;\n}\n\n.add-task i {\n  width: 1rem;\n}\n\n.add-project {\n  font-size: .75rem;\n}\n\n.add-task:hover, .add-project:hover {\n  color: rgba(90, 216, 107, 0.8);\n}\n\n.check {\n  display: none;\n}\n\n.check + *::before{\n  content: \"\";\n  display: flex;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 100%;\n  border-style: solid;\n  border-width: 0.1rem;\n  border-color: gray;\n}\n\n.check:checked + *::before {\n  content: \"✓\";\n  color: white;\n  text-align: center;\n  background: rgba(90, 216, 107, 0.8);\n  border-color: rgba(90, 216, 107, 0.8);\n}\n\n.check:checked + * {\n  color: rgba(90, 216, 107, 0.8);\n}\n\n.modal {\n  /* display: none; Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100vw; /* Full width */\n  height: 100vh; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgba(0,0,0,.9);\n}\n\n\n/* Modal Content/Box */\n.modal-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(0,0,0,.9);\n  margin: auto; /* 15% from the top and centered */\n  padding: 1rem;\n  border: 1px solid grey;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  width: 33vw;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  position: fixed;\n  right: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-content label {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .15rem;\n}\n\n.project-submit, .task-submit, .task-edit-submit {\n  background-color: rgba(0,0,0,.9);\n  color: white;\n  border: .1rem solid grey;\n  padding: .5rem 1.5rem;\n  cursor: pointer;\n  transition: all .05s;\n}\n\n.project-submit:active, .task-submit:active, .task-edit-submit:active {\n  outline: .2rem solid white;\n  font-weight: bold;\n}\n\ninput[type=\"text\"] {\n  padding: .25rem;\n}\n"],"sourceRoot":""}]);
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
  const list = document.createElement('div');
  const addProject = document.createElement('div');

  inbox.innerText = 'Inbox';
  inbox.classList.add('aside-select');
  inbox.dataset.index = 0;

  const ul = document.createElement('ul');
  ___WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((project, index) => {
    if (project.name == 'Inbox') return;
    ul.innerHTML += `<li class="aside-select" data-index="${index}">${project.name}</li>`
  })

  list.appendChild(ul);
  addProject.innerHTML = `Add Project <i class="fa-solid fa-plus add-project-trigger"></i>`;
  addProject.classList.add('add-project','add-project-trigger');

  aside.appendChild(inbox);
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
/* harmony import */ var _task_edit_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-edit-modal */ "./src/task-edit-modal.js");








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

  if(classes.value.includes('task-delete')){
    projectList[curProject].tasks.splice(index,1);
    localStorage.setItem('projectList', JSON.stringify(projectList));
    home(curProject);
  }

  if(classes.value.includes('project-delete-trigger')){
    projectList.splice(curProject, 1);
    localStorage.setItem('projectList', JSON.stringify(projectList));
    curProject = 0;
    home(curProject);
  }

  if(classes.value.includes('check')){
    e.target.checked ? projectList[curProject].tasks[index].complete = true : projectList[curProject].tasks[index].complete = false;
    localStorage.setItem('projectList', JSON.stringify(projectList));
    home(curProject);
  }

  if(classes.value.includes('add-project-trigger')){
    (0,_project_modal__WEBPACK_IMPORTED_MODULE_4__.renderProjectModal)();
  }

  if(classes.value.includes('add-task-trigger')){
    (0,_task_modal__WEBPACK_IMPORTED_MODULE_5__.renderTaskModal)();
  }

  if(classes.value.includes('project-submit')){
    e.preventDefault();
    const pname = document.querySelector('#name').value;
    const pdesc = document.querySelector('#desc').value;
    if(pname=='') {
      alert('Name required')
      return;
    }
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
    if(tname=='') {
      alert('Name required')
      return;
    }
    const newTask = new Task(tname, tdesc, tdueDate, tpriority);
    projectList[curProject].tasks.push(newTask);
    localStorage.setItem('projectList', JSON.stringify(projectList));
    if(tempProject != curProject && !isNaN(tempProject)) {
      curProject = tempProject;
      tempProject = NaNfiueoij        ;
    }
    home(curProject);
    
  }

  if(classes.value.includes('task-name')){
    const index = e.target.dataset.index;
    const curName = projectList[curProject].tasks[index].name;
    const curDueDate = projectList[curProject].tasks[index].dueDate;
    const curDesc = projectList[curProject].tasks[index].desc;
    const curPriority = projectList[curProject].tasks[index].priority;
    (0,_task_edit_modal__WEBPACK_IMPORTED_MODULE_6__.renderTaskEdit)(curName,curDueDate,curDesc,curPriority,index)
  }

  if(classes.value.includes('task-edit-submit')){
    e.preventDefault();
    const tname = document.querySelector('#name').value;
    const tdesc = document.querySelector('#desc').value;
    const tdueDate = document.querySelector('#dueDate').value;
    const tpriority = document.querySelector('#priority').value;
    const index = document.querySelector('#name').dataset.index;
    if(tname=='') {
      alert('Name required')
      return;
    }
    projectList[curProject].tasks[index].name = tname;
    projectList[curProject].tasks[index].desc = tdesc;
    projectList[curProject].tasks[index].dueDate = tdueDate;
    projectList[curProject].tasks[index].priority = tpriority;
    localStorage.setItem('projectList', JSON.stringify(projectList));
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
  nameInput.setAttribute('required','required');
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
  const deleteProject = document.createElement('div');

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
    name.dataset.index = index;
    name.classList.add('task-name');
    element.appendChild(name);

    date.innerText = task.dueDate;
    element.appendChild(date);

    priority.innerText = task.priority;
    element.appendChild(priority);

    trash.classList.add('task-delete','fa-solid','fa-trash-can');
    trash.dataset.index = index;
    element.appendChild(trash);

    list.appendChild(element);
  });

  addTask.innerHTML = `Add Task <i class="fa-solid fa-plus add-task-trigger"></i>`
  addTask.classList.add('item','add-task','add-task-trigger');
  list.appendChild(addTask);

  deleteProject.innerHTML = 'Delete Project <i class="fa-solid fa-trash-can project-delete-trigger"></i>';
  deleteProject.classList.add('item','project-delete','project-delete-trigger');

  if(current.name !== 'Inbox') list.appendChild(deleteProject);

  main.appendChild(heading);
  main.appendChild(list);
  ___WEBPACK_IMPORTED_MODULE_0__.body.appendChild(main);
}



/***/ }),

/***/ "./src/task-edit-modal.js":
/*!********************************!*\
  !*** ./src/task-edit-modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTaskEdit": () => (/* binding */ renderTaskEdit)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function renderTaskEdit(curName,curDueDate,curDesc,curPriority,index) {
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
  submit.classList.add('task-edit-submit');

  close.innerHTML = `&times;`;

  name.setAttribute('for', 'name');
  name.innerText = 'Name: ';
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  nameInput.dataset.index = index;
  nameInput.value = curName;
  name.appendChild(nameInput);

  desc.setAttribute('for', 'desc');
  desc.innerText = 'Description: ';
  descInput.setAttribute('type', 'text');
  descInput.setAttribute('id', 'desc');
  descInput.setAttribute('name', 'desc');
  descInput.value = curDesc;
  desc.appendChild(descInput);

  dueDate.setAttribute('for', 'dueDate');
  dueDate.innerText = 'Due Date: ';
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'dueDate');
  dueDateInput.setAttribute('name', 'dueDate');
  dueDateInput.value = curDueDate;
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
  high.innerText = 'High';
  curPriority == 'Low' ? low.setAttribute('selected', 'selected') : curPriority == 'Medium' ? med.setAttribute('selected', 'selected') : curPriority == 'High' ? high.setAttribute('selected', 'selected') : '';
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
  high.innerText = 'High';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc2lkZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1lZGl0LW1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLW1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxuICB3aWR0aDogLjVyZW07XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgbWFyZ2luLWJsb2NrOiAuNXJlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XFxuICBib3JkZXItcmFkaXVzOiAxMDB2dztcXG4gIGJvcmRlcjogLjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMCk7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMTFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOHJlbSA4ZnI7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGVmdCwgLnJpZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbmgxIHtcXG4gICBmb250LXNpemU6IDEuNXJlbTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbiAgZ2FwOiAxcmVtOyBcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLmFzaWRlLXNlbGVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmFzaWRlIHVsIHtcXG4gIG1hcmdpbjowO1xcbiAgcGFkZGluZzowO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmxpc3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IC41cmVtO1xcbiAgd2lkdGg6IDY1JTtcXG59XFxuXFxuLml0ZW0ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRyZW0pO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxcmVtIDZmciA1cmVtIDMuNXJlbSAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogLjI1cmVtO1xcbn1cXG5cXG4uaXRlbSBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLnN0cmlrZSAqIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stZGVsZXRlLCAucHJvamVjdC1kZWxldGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi50YXNrLWRlbGV0ZSwgLnByb2plY3QtZGVsZXRlIGkge1xcbiAgIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4udGFzay1kZWxldGU6aG92ZXIsIC5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyMzgsIDU5LCA1OSwgMC44KVxcbn1cXG5cXG4ucXVpY2stYWRkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnF1aWNrLWFkZDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XFxufVxcblxcbi5hZGQtdGFzaywgLmFkZC1wcm9qZWN0LCAucHJvamVjdC1kZWxldGUge1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzaywgLnByb2plY3QtZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hZGQtdGFzayBpIHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAuNzVyZW07XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciwgLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDkwLCAyMTYsIDEwNywgMC44KTtcXG59XFxuXFxuLmNoZWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVjayArICo6OmJlZm9yZXtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDAuMXJlbTtcXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmNoZWNrOmNoZWNrZWQgKyAqOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKck1xcXCI7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDkwLCAyMTYsIDEwNywgMC44KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSg5MCwgMjE2LCAxMDcsIDAuOCk7XFxufVxcblxcbi5jaGVjazpjaGVja2VkICsgKiB7XFxuICBjb2xvcjogcmdiYSg5MCwgMjE2LCAxMDcsIDAuOCk7XFxufVxcblxcbi5tb2RhbCB7XFxuICAvKiBkaXNwbGF5OiBub25lOyBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMHZ3OyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMHZoOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC45KTtcXG59XFxuXFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOSk7XFxuICBtYXJnaW46IGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDMzdnc7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogLjE1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1zdWJtaXQsIC50YXNrLXN1Ym1pdCwgLnRhc2stZWRpdC1zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjA1cztcXG59XFxuXFxuLnByb2plY3Qtc3VibWl0OmFjdGl2ZSwgLnRhc2stc3VibWl0OmFjdGl2ZSwgLnRhc2stZWRpdC1zdWJtaXQ6YWN0aXZlIHtcXG4gIG91dGxpbmU6IC4ycmVtIHNvbGlkIHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLG9CQUFvQjtFQUNwQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7R0FDRyxpQkFBaUI7R0FDakIsa0JBQWtCO0dBQ2xCLFdBQVc7QUFDZDs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtHQUNHLFdBQVc7QUFDZDs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWSxFQUFFLGVBQWU7RUFDN0IsYUFBYSxFQUFFLGdCQUFnQjtFQUMvQixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLGdDQUFnQztBQUNsQzs7O0FBR0Esc0JBQXNCO0FBQ3RCO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxZQUFZLEVBQUUsa0NBQWtDO0VBQ2hELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbiAgd2lkdGg6IC41cmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIG1hcmdpbi1ibG9jazogLjVyZW07XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxuICBib3JkZXI6IC4yNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDApO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDExZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhyZW0gOGZyO1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnQsIC5yaWdodCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXG4gIGdhcDogMXJlbTsgXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5hc2lkZS1zZWxlY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5hc2lkZSB1bCB7XFxuICBtYXJnaW46MDtcXG4gIHBhZGRpbmc6MDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAuNXJlbTtcXG4gIHdpZHRoOiA2NSU7XFxufVxcblxcbi5pdGVtIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0cmVtKTtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMXJlbSA2ZnIgNXJlbSAzLjVyZW0gMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC4yNXJlbTtcXG59XFxuXFxuLml0ZW0gbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDFyZW07XFxufVxcblxcbi5zdHJpa2UgKiB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWRlbGV0ZSwgLnByb2plY3QtZGVsZXRlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGFzay1kZWxldGUsIC5wcm9qZWN0LWRlbGV0ZSBpIHtcXG4gICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLnRhc2stZGVsZXRlOmhvdmVyLCAucHJvamVjdC1kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjM4LCA1OSwgNTksIDAuOClcXG59XFxuXFxuLnF1aWNrLWFkZCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5xdWljay1hZGQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjcpO1xcbn1cXG5cXG4uYWRkLXRhc2ssIC5hZGQtcHJvamVjdCwgLnByb2plY3QtZGVsZXRlIHtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2ssIC5wcm9qZWN0LWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWRkLXRhc2sgaSB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIsIC5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSg5MCwgMjE2LCAxMDcsIDAuOCk7XFxufVxcblxcbi5jaGVjayB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2sgKyAqOjpiZWZvcmV7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjFyZW07XFxuICBib3JkZXItY29sb3I6IGdyYXk7XFxufVxcblxcbi5jaGVjazpjaGVja2VkICsgKjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSg5MCwgMjE2LCAxMDcsIDAuOCk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpO1xcbn1cXG5cXG4uY2hlY2s6Y2hlY2tlZCArICoge1xcbiAgY29sb3I6IHJnYmEoOTAsIDIxNiwgMTA3LCAwLjgpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgLyogZGlzcGxheTogbm9uZTsgSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDB2dzsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDB2aDsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOSk7XFxufVxcblxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xcbiAgbWFyZ2luOiBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiAzM3Z3O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC4xNXJlbTtcXG59XFxuXFxuLnByb2plY3Qtc3VibWl0LCAudGFzay1zdWJtaXQsIC50YXNrLWVkaXQtc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4wNXM7XFxufVxcblxcbi5wcm9qZWN0LXN1Ym1pdDphY3RpdmUsIC50YXNrLXN1Ym1pdDphY3RpdmUsIC50YXNrLWVkaXQtc3VibWl0OmFjdGl2ZSB7XFxuICBvdXRsaW5lOiAuMnJlbSBzb2xpZCB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGJvZHksIHByb2plY3RMaXN0IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gcmVuZGVyQXNpZGUoKSB7XG4gIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaW5ib3guaW5uZXJUZXh0ID0gJ0luYm94JztcbiAgaW5ib3guY2xhc3NMaXN0LmFkZCgnYXNpZGUtc2VsZWN0Jyk7XG4gIGluYm94LmRhdGFzZXQuaW5kZXggPSAwO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBpZiAocHJvamVjdC5uYW1lID09ICdJbmJveCcpIHJldHVybjtcbiAgICB1bC5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImFzaWRlLXNlbGVjdFwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiPiR7cHJvamVjdC5uYW1lfTwvbGk+YFxuICB9KVxuXG4gIGxpc3QuYXBwZW5kQ2hpbGQodWwpO1xuICBhZGRQcm9qZWN0LmlubmVySFRNTCA9IGBBZGQgUHJvamVjdCA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXMgYWRkLXByb2plY3QtdHJpZ2dlclwiPjwvaT5gO1xuICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0JywnYWRkLXByb2plY3QtdHJpZ2dlcicpO1xuXG4gIGFzaWRlLmFwcGVuZENoaWxkKGluYm94KTtcbiAgYXNpZGUuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG4gIGFzaWRlLmFwcGVuZENoaWxkKHVsKTtcbiAgXG5cbiAgYm9keS5hcHBlbmRDaGlsZChhc2lkZSk7XG59XG5cbmV4cG9ydCB7IHJlbmRlckFzaWRlIH0iLCJpbXBvcnQgeyBib2R5IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHF1aWNrQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaGVhZGluZy5pbm5lclRleHQgPSAnVG9kbyBMaXN0JztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG4gIHF1aWNrQWRkLmNsYXNzTGlzdC5hZGQoJ3F1aWNrLWFkZCcsJ2ZhLXNvbGlkJywnZmEtcGx1cycpO1xuICByaWdodC5hcHBlbmRDaGlsZChxdWlja0FkZCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChyaWdodCk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJIZWFkZXIgfTsiLCJpbXBvcnQgeyByZW5kZXJIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyByZW5kZXJBc2lkZSB9IGZyb20gJy4vYXNpZGUnO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlclByb2plY3RNb2RhbCB9IGZyb20gJy4vcHJvamVjdC1tb2RhbCc7XG5pbXBvcnQgeyByZW5kZXJUYXNrTW9kYWwgfSBmcm9tICcuL3Rhc2stbW9kYWwnO1xuaW1wb3J0IHsgcmVuZGVyVGFza0VkaXQgfSBmcm9tICcuL3Rhc2stZWRpdC1tb2RhbCc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmxldCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpIHx8IFtdO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSxkZXNjKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxufVxuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc3VidGFza3MgPSBbXTtcbiAgfVxufVxuXG5sZXQgaW5ib3g7XG5sZXQgY3VyUHJvamVjdCA9IDA7XG5sZXQgdGVtcFByb2plY3Q7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gIGlmKHByb2plY3RMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIGluYm94ID0gbmV3IFByb2plY3QoJ0luYm94JywgJ0RlZmF1bHQnKTtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKGluYm94KTtcbiAgICBjdXJQcm9qZWN0ID0gMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaG9tZShjdXJQcm9qZWN0KSB7XG4gIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gIHJlbmRlckhlYWRlcigpO1xuICByZW5kZXJBc2lkZSgpO1xuICByZW5kZXJQcm9qZWN0KGN1clByb2plY3QpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XG4gIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuICBpZihjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCd0YXNrLWRlbGV0ZScpKXtcbiAgICBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XS50YXNrcy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICBob21lKGN1clByb2plY3QpO1xuICB9XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygncHJvamVjdC1kZWxldGUtdHJpZ2dlcicpKXtcbiAgICBwcm9qZWN0TGlzdC5zcGxpY2UoY3VyUHJvamVjdCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICBjdXJQcm9qZWN0ID0gMDtcbiAgICBob21lKGN1clByb2plY3QpO1xuICB9XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygnY2hlY2snKSl7XG4gICAgZS50YXJnZXQuY2hlY2tlZCA/IHByb2plY3RMaXN0W2N1clByb2plY3RdLnRhc2tzW2luZGV4XS5jb21wbGV0ZSA9IHRydWUgOiBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XS50YXNrc1tpbmRleF0uY29tcGxldGUgPSBmYWxzZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgIGhvbWUoY3VyUHJvamVjdCk7XG4gIH1cblxuICBpZihjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCdhZGQtcHJvamVjdC10cmlnZ2VyJykpe1xuICAgIHJlbmRlclByb2plY3RNb2RhbCgpO1xuICB9XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygnYWRkLXRhc2stdHJpZ2dlcicpKXtcbiAgICByZW5kZXJUYXNrTW9kYWwoKTtcbiAgfVxuXG4gIGlmKGNsYXNzZXMudmFsdWUuaW5jbHVkZXMoJ3Byb2plY3Qtc3VibWl0Jykpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gICAgY29uc3QgcGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzYycpLnZhbHVlO1xuICAgIGlmKHBuYW1lPT0nJykge1xuICAgICAgYWxlcnQoJ05hbWUgcmVxdWlyZWQnKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocG5hbWUsIHBkZXNjKTtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgY3VyUHJvamVjdCA9IHByb2plY3RMaXN0Lmxlbmd0aCAtIDE7XG4gICAgaG9tZShjdXJQcm9qZWN0KTtcbiAgfVxuXG4gIGlmKGNsYXNzZXMudmFsdWUuaW5jbHVkZXMoJ3Rhc2stc3VibWl0Jykpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0bmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gICAgY29uc3QgdGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzYycpLnZhbHVlO1xuICAgIGNvbnN0IHRkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKS52YWx1ZTtcbiAgICBjb25zdCB0cHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZTtcbiAgICBpZih0bmFtZT09JycpIHtcbiAgICAgIGFsZXJ0KCdOYW1lIHJlcXVpcmVkJylcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRuYW1lLCB0ZGVzYywgdGR1ZURhdGUsIHRwcmlvcml0eSk7XG4gICAgcHJvamVjdExpc3RbY3VyUHJvamVjdF0udGFza3MucHVzaChuZXdUYXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgIGlmKHRlbXBQcm9qZWN0ICE9IGN1clByb2plY3QgJiYgIWlzTmFOKHRlbXBQcm9qZWN0KSkge1xuICAgICAgY3VyUHJvamVjdCA9IHRlbXBQcm9qZWN0O1xuICAgICAgdGVtcFByb2plY3QgPSBOYU5maXVlb2lqICAgICAgICA7XG4gICAgfVxuICAgIGhvbWUoY3VyUHJvamVjdCk7XG4gICAgXG4gIH1cblxuICBpZihjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCd0YXNrLW5hbWUnKSl7XG4gICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IGN1ck5hbWUgPSBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XS50YXNrc1tpbmRleF0ubmFtZTtcbiAgICBjb25zdCBjdXJEdWVEYXRlID0gcHJvamVjdExpc3RbY3VyUHJvamVjdF0udGFza3NbaW5kZXhdLmR1ZURhdGU7XG4gICAgY29uc3QgY3VyRGVzYyA9IHByb2plY3RMaXN0W2N1clByb2plY3RdLnRhc2tzW2luZGV4XS5kZXNjO1xuICAgIGNvbnN0IGN1clByaW9yaXR5ID0gcHJvamVjdExpc3RbY3VyUHJvamVjdF0udGFza3NbaW5kZXhdLnByaW9yaXR5O1xuICAgIHJlbmRlclRhc2tFZGl0KGN1ck5hbWUsY3VyRHVlRGF0ZSxjdXJEZXNjLGN1clByaW9yaXR5LGluZGV4KVxuICB9XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygndGFzay1lZGl0LXN1Ym1pdCcpKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IHRkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2MnKS52YWx1ZTtcbiAgICBjb25zdCB0ZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJykudmFsdWU7XG4gICAgY29uc3QgdHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgaW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLmRhdGFzZXQuaW5kZXg7XG4gICAgaWYodG5hbWU9PScnKSB7XG4gICAgICBhbGVydCgnTmFtZSByZXF1aXJlZCcpXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHByb2plY3RMaXN0W2N1clByb2plY3RdLnRhc2tzW2luZGV4XS5uYW1lID0gdG5hbWU7XG4gICAgcHJvamVjdExpc3RbY3VyUHJvamVjdF0udGFza3NbaW5kZXhdLmRlc2MgPSB0ZGVzYztcbiAgICBwcm9qZWN0TGlzdFtjdXJQcm9qZWN0XS50YXNrc1tpbmRleF0uZHVlRGF0ZSA9IHRkdWVEYXRlO1xuICAgIHByb2plY3RMaXN0W2N1clByb2plY3RdLnRhc2tzW2luZGV4XS5wcmlvcml0eSA9IHRwcmlvcml0eTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgIGhvbWUoY3VyUHJvamVjdCk7XG4gIH1cblxuICBpZihjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCdxdWljay1hZGQnKSl7XG4gICAgdGVtcFByb2plY3QgPSBjdXJQcm9qZWN0O1xuICAgIGN1clByb2plY3QgPSAwO1xuICAgIHJlbmRlclRhc2tNb2RhbCgpO1xuICB9XG5cbiAgaWYoY2xhc3Nlcy52YWx1ZS5pbmNsdWRlcygnYXNpZGUtc2VsZWN0Jykpe1xuICAgIGN1clByb2plY3QgPSBpbmRleDtcbiAgICBob21lKGN1clByb2plY3QpXG4gIH1cblxuICBpZihlLnRhcmdldCA9PSBtb2RhbCB8fCBjbGFzc2VzLnZhbHVlLmluY2x1ZGVzKCdjbG9zZScpKXtcbiAgICBob21lKGN1clByb2plY3QpO1xuICB9XG5cbn0pXG5cbmluaXRpYWxpemUoKTtcbmhvbWUoY3VyUHJvamVjdCk7XG5cbmV4cG9ydCB7IGJvZHksIHByb2plY3RMaXN0IH07IiwiaW1wb3J0IHsgYm9keSB9IGZyb20gXCIuXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RNb2RhbCgpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcbiAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc3VibWl0Jyk7XG5cbiAgY2xvc2UuaW5uZXJIVE1MID0gYCZ0aW1lcztgO1xuXG4gIG5hbWUuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICBuYW1lLmlubmVyVGV4dCA9ICdOYW1lOiAnXG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3JlcXVpcmVkJyk7XG4gIG5hbWUuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICBkZXNjLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2MnKTtcbiAgZGVzYy5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246ICdcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2MnKTtcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjJyk7XG4gIGRlc2MuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblxuICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RNb2RhbCB9IiwiaW1wb3J0IHsgYm9keSwgcHJvamVjdExpc3QgfSBmcm9tIFwiLlwiO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KGN1clByb2plY3QpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY3VycmVudCA9IHByb2plY3RMaXN0W2N1clByb2plY3RdO1xuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gY3VycmVudC5uYW1lO1xuXG4gIGxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuXG4gIGN1cnJlbnQudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0cmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG5cbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuICAgIGNoZWNrYm94LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICBpZih0YXNrLmNvbXBsZXRlKXtcbiAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0cmlrZScpO1xuICAgIH1cbiAgICBsYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICBuYW1lLmlubmVyVGV4dCA9IHRhc2submFtZTtcbiAgICBuYW1lLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICBkYXRlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgcHJpb3JpdHkuaW5uZXJUZXh0ID0gdGFzay5wcmlvcml0eTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIHRyYXNoLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlJywnZmEtc29saWQnLCdmYS10cmFzaC1jYW4nKTtcbiAgICB0cmFzaC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0cmFzaCk7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcblxuICBhZGRUYXNrLmlubmVySFRNTCA9IGBBZGQgVGFzayA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXMgYWRkLXRhc2stdHJpZ2dlclwiPjwvaT5gXG4gIGFkZFRhc2suY2xhc3NMaXN0LmFkZCgnaXRlbScsJ2FkZC10YXNrJywnYWRkLXRhc2stdHJpZ2dlcicpO1xuICBsaXN0LmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gIGRlbGV0ZVByb2plY3QuaW5uZXJIVE1MID0gJ0RlbGV0ZSBQcm9qZWN0IDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIHByb2plY3QtZGVsZXRlLXRyaWdnZXJcIj48L2k+JztcbiAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdpdGVtJywncHJvamVjdC1kZWxldGUnLCdwcm9qZWN0LWRlbGV0ZS10cmlnZ2VyJyk7XG5cbiAgaWYoY3VycmVudC5uYW1lICE9PSAnSW5ib3gnKSBsaXN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobGlzdCk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3QgfTsiLCJpbXBvcnQgeyBib2R5IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gcmVuZGVyVGFza0VkaXQoY3VyTmFtZSxjdXJEdWVEYXRlLGN1ckRlc2MsY3VyUHJpb3JpdHksaW5kZXgpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcbiAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWRpdC1zdWJtaXQnKTtcblxuICBjbG9zZS5pbm5lckhUTUwgPSBgJnRpbWVzO2A7XG5cbiAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gIG5hbWUuaW5uZXJUZXh0ID0gJ05hbWU6ICc7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICBuYW1lSW5wdXQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICBuYW1lSW5wdXQudmFsdWUgPSBjdXJOYW1lO1xuICBuYW1lLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjJyk7XG4gIGRlc2MuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzYycpO1xuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2MnKTtcbiAgZGVzY0lucHV0LnZhbHVlID0gY3VyRGVzYztcbiAgZGVzYy5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpO1xuICBkdWVEYXRlLmlubmVyVGV4dCA9ICdEdWUgRGF0ZTogJztcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZURhdGUnKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGN1ckR1ZURhdGU7XG4gIGR1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICBwcmlvcml0eS5pbm5lclRleHQgPSAnUHJpb3JpdHk6ICc7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICBsb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdMb3cnKVxuICBsb3cuaW5uZXJUZXh0ID0gJ0xvdyc7XG4gIG1lZC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ01lZGl1bScpXG4gIG1lZC5pbm5lclRleHQgPSAnTWVkaXVtJztcbiAgaGlnaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0hpZ2gnKVxuICBoaWdoLmlubmVyVGV4dCA9ICdIaWdoJztcbiAgY3VyUHJpb3JpdHkgPT0gJ0xvdycgPyBsb3cuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpIDogY3VyUHJpb3JpdHkgPT0gJ01lZGl1bScgPyBtZWQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpIDogY3VyUHJpb3JpdHkgPT0gJ0hpZ2gnID8gaGlnaC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJykgOiAnJztcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3cpO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG1lZCk7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG59XG5cbmV4cG9ydCB7IHJlbmRlclRhc2tFZGl0IH0iLCJpbXBvcnQgeyBib2R5IH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gcmVuZGVyVGFza01vZGFsKCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBtZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgndGFzay1zdWJtaXQnKTtcblxuICBjbG9zZS5pbm5lckhUTUwgPSBgJnRpbWVzO2A7XG5cbiAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gIG5hbWUuaW5uZXJUZXh0ID0gJ05hbWU6ICc7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICBuYW1lLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjJyk7XG4gIGRlc2MuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzYycpO1xuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2MnKTtcbiAgZGVzYy5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpO1xuICBkdWVEYXRlLmlubmVyVGV4dCA9ICdEdWUgRGF0ZTogJztcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZURhdGUnKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJyk7XG4gIGR1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICBwcmlvcml0eS5pbm5lclRleHQgPSAnUHJpb3JpdHk6ICc7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICBsb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdMb3cnKVxuICBsb3cuaW5uZXJUZXh0ID0gJ0xvdyc7XG4gIG1lZC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ01lZGl1bScpXG4gIG1lZC5pbm5lclRleHQgPSAnTWVkaXVtJztcbiAgaGlnaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0hpZ2gnKVxuICBoaWdoLmlubmVyVGV4dCA9ICdIaWdoJztcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3cpO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG1lZCk7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG59XG5cbmV4cG9ydCB7IHJlbmRlclRhc2tNb2RhbCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9