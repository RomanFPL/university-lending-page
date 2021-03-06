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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/method */ "./src/js/modules/method.js");
/* harmony import */ var _modules_test_f__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/test-f */ "./src/js/modules/test-f.js");
/* harmony import */ var _modules_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/maps */ "./src/js/modules/maps.js");





new _modules_method__WEBPACK_IMPORTED_MODULE_0__["default"]().sayIt();
Object(_modules_test_f__WEBPACK_IMPORTED_MODULE_1__["showStatus"])();
Object(_modules_maps__WEBPACK_IMPORTED_MODULE_2__["initialize"])();

/***/ }),

/***/ "./src/js/modules/maps.js":
/*!********************************!*\
  !*** ./src/js/modules/maps.js ***!
  \********************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });


const initialize = () => {
  let myLatlng = new google.maps.LatLng(55.78367643143814, 37.71923783732045);
  let myOptions = {
    zoom: 16,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  let map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  let contentString = '<div id="content">???????????????????? ??????????????</div>';
  let infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  let marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "??. ??????????????????????, ????. ???????????????????????? ??????, ?????? 2"
  });
  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
  });
};



/***/ }),

/***/ "./src/js/modules/method.js":
/*!**********************************!*\
  !*** ./src/js/modules/method.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mmethod; });


class Mmethod {
  sayIt() {
    console.log("Method works");
  }

}

/***/ }),

/***/ "./src/js/modules/test-f.js":
/*!**********************************!*\
  !*** ./src/js/modules/test-f.js ***!
  \**********************************/
/*! exports provided: showStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showStatus", function() { return showStatus; });


const showStatus = () => {
  console.log("function is imported");
};

 // export { name1, name2, ???, nameN };
// export { variable1 as name1, variable2 as name2, ???, nameN };
// export let name1, name2, ???, nameN; // ?????? var
// export let name1 = ???, name2 = ???, ???, nameN; // ?????? var, const
// export default ??????????????????;
// export default function (???) { ??? } // ?????? class, function*
// export default function name1(???) { ??? } // ?????? class, function*
// export { name1 as default, ??? };
// export * from ???;
// export { name1, name2, ???, nameN } from ???;
// export { import1 as name1, import2 as name2, ???, nameN } from ???;

/***/ })

/******/ });
//# sourceMappingURL=script.js.map