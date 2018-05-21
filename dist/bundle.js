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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ \"./src/server.js\");\n\n\nvar PORT = 3000;\n\n_server__WEBPACK_IMPORTED_MODULE_0__[\"http\"].listen(PORT, function () {\n  console.log(\"I'm listening\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHR0cCB9IGZyb20gJy4vc2VydmVyJ1xuXG5jb25zdCBQT1JUID0gMzAwMFxuXG5odHRwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiSSdtIGxpc3RlbmluZ1wiKVxufSlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar setupMidware = function setupMidware(app) {\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({ extended: true }));\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.json());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setupMidware);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWlkZGxld2FyZS5qcz81YTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuXG5jb25zdCBzZXR1cE1pZHdhcmUgPSBhcHAgPT4ge1xuICBhcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKVxuICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXR1cE1pZHdhcmVcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/middleware.js\n");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: http, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"http\", function() { return http; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recastai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recastai */ \"recastai\");\n/* harmony import */ var recastai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recastai__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware */ \"./src/middleware.js\");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar http = http__WEBPACK_IMPORTED_MODULE_2___default.a.Server(app);\nvar io = socket_io__WEBPACK_IMPORTED_MODULE_3___default()(http);\n\nObject(_middleware__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(app);\nvar client = new recastai__WEBPACK_IMPORTED_MODULE_1___default.a.build('55cb6cf097c4704b0441c7e70273f7c5');\n\nio.on('connection', function (socket) {\n  console.log('user connected');\n  // socket.on('chat message', msg => console.log(msg))\n  socket.on('chat_bot', function (message) {\n    client.dialog({ type: 'text', content: message }, { conversationId: 'CONVERSATION_ID' }).then(function (res) {\n      // const resMsg = res.messages.length > 0 ? res.messages[0].content : \"Sorry, I don't understand\"\n\n      console.log('you: ' + message);\n      console.log('bot: ' + res.messages[0].content);\n      // Do your code\n    }).catch(function (err) {\n      return console.error('Something went wrong', err);\n    });\n  });\n});\n\napp.get('/chat', function (req, res) {\n  res.sendFile('/run/media/natasha/Emerald/PROGRAMMING/Projects/bullying/dist/index.html');\n});\n\n// app.post('/bot', function(req, res) {\n//   client\n//     .dialog({ type: 'text', content: 'what is your name ?' }, { conversationId: 'CONVERSATION_ID' })\n//     .then(res => {\n//       console.log(res.messages)\n//       // Do your code\n//     })\n//     .catch(err => console.error('Something went wrong', err))\n// })\n\napp.all('*', function (req, res) {\n  res.send('someday somewhere');\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zZXJ2ZXIuanM/OGZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHJlY2FzdGFpIGZyb20gJ3JlY2FzdGFpJ1xuaW1wb3J0IGh0dHBMaWIgZnJvbSAnaHR0cCdcbmltcG9ydCBzb2NrZXRJbyBmcm9tICdzb2NrZXQuaW8nXG5cbmltcG9ydCBzZXR1cE1pZHdhcmUgZnJvbSAnLi9taWRkbGV3YXJlJ1xuXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmV4cG9ydCBjb25zdCBodHRwID0gaHR0cExpYi5TZXJ2ZXIoYXBwKVxuY29uc3QgaW8gPSBzb2NrZXRJbyhodHRwKVxuXG5zZXR1cE1pZHdhcmUoYXBwKVxuY29uc3QgY2xpZW50ID0gbmV3IHJlY2FzdGFpLmJ1aWxkKCc1NWNiNmNmMDk3YzQ3MDRiMDQ0MWM3ZTcwMjczZjdjNScpXG5cbmlvLm9uKCdjb25uZWN0aW9uJywgc29ja2V0ID0+IHtcbiAgY29uc29sZS5sb2coJ3VzZXIgY29ubmVjdGVkJylcbiAgLy8gc29ja2V0Lm9uKCdjaGF0IG1lc3NhZ2UnLCBtc2cgPT4gY29uc29sZS5sb2cobXNnKSlcbiAgc29ja2V0Lm9uKCdjaGF0X2JvdCcsIG1lc3NhZ2UgPT4ge1xuICAgIGNsaWVudFxuICAgICAgLmRpYWxvZyh7IHR5cGU6ICd0ZXh0JywgY29udGVudDogbWVzc2FnZSB9LCB7IGNvbnZlcnNhdGlvbklkOiAnQ09OVkVSU0FUSU9OX0lEJyB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgLy8gY29uc3QgcmVzTXNnID0gcmVzLm1lc3NhZ2VzLmxlbmd0aCA+IDAgPyByZXMubWVzc2FnZXNbMF0uY29udGVudCA6IFwiU29ycnksIEkgZG9uJ3QgdW5kZXJzdGFuZFwiXG5cbiAgICAgICAgY29uc29sZS5sb2coJ3lvdTogJyArIG1lc3NhZ2UpXG4gICAgICAgIGNvbnNvbGUubG9nKCdib3Q6ICcgKyByZXMubWVzc2FnZXNbMF0uY29udGVudClcbiAgICAgICAgLy8gRG8geW91ciBjb2RlXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycsIGVycikpXG4gIH0pXG59KVxuXG5hcHAuZ2V0KCcvY2hhdCcsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZEZpbGUoJy9ydW4vbWVkaWEvbmF0YXNoYS9FbWVyYWxkL1BST0dSQU1NSU5HL1Byb2plY3RzL2J1bGx5aW5nL2Rpc3QvaW5kZXguaHRtbCcpXG59KVxuXG4vLyBhcHAucG9zdCgnL2JvdCcsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4vLyAgIGNsaWVudFxuLy8gICAgIC5kaWFsb2coeyB0eXBlOiAndGV4dCcsIGNvbnRlbnQ6ICd3aGF0IGlzIHlvdXIgbmFtZSA/JyB9LCB7IGNvbnZlcnNhdGlvbklkOiAnQ09OVkVSU0FUSU9OX0lEJyB9KVxuLy8gICAgIC50aGVuKHJlcyA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhyZXMubWVzc2FnZXMpXG4vLyAgICAgICAvLyBEbyB5b3VyIGNvZGVcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnLCBlcnIpKVxuLy8gfSlcblxuYXBwLmFsbCgnKicsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCgnc29tZWRheSBzb21ld2hlcmUnKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgYXBwXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server.js\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZDE5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///http\n");

/***/ }),

/***/ "recastai":
/*!***************************!*\
  !*** external "recastai" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"recastai\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjYXN0YWkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWNhc3RhaVwiPzJmZDUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjYXN0YWlcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///recastai\n");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmlvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCI/Y2IzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///socket.io\n");

/***/ })

/******/ });