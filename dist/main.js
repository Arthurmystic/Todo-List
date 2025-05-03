/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM-Elements.js":
/*!*****************************!*\
  !*** ./src/DOM-Elements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domElements: () => (/* binding */ domElements)\n/* harmony export */ });\nconst domElements = (function () {\n\n    const div = ()=> document.createElement(\"div\");\n    \n    const createInput = (state) => {\n        const input = document.createElement(\"input\");\n        input.setAttribute(\"id\", state.id);\n        input.setAttribute(\"type\", state.type);\n        input.setAttribute(\"value\", state.value);\n        input.setAttribute(\"name\", state.name);\n        return { input };\n    }\n\n    const createLabel = (state) => {\n        const label = document.createElement(\"label\");\n        label.setAttribute(\"for\", state.id);\n        label.innerText = state.text;\n        return { label };\n    };\n\n\n    const createFieldset = (state) => {\n        const fieldset = document.createElement(\"fieldset\");\n        const legend = document.createElement(\"legend\");\n        legend.innerText = state.text\n        fieldset.appendChild(legend);\n        return { fieldset };\n\n    };\n\n    return { createInput, createLabel, createFieldset, div };\n\n})();\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRE9NLUVsZW1lbnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjs7QUFFQSxhQUFhOztBQUViLENBQUM7O0FBRXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS1FbGVtZW50cy5qcz9jM2U5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvbUVsZW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGRpdiA9ICgpPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbiAgICBjb25zdCBjcmVhdGVJbnB1dCA9IChzdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgc3RhdGUuaWQpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHN0YXRlLnR5cGUpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBzdGF0ZS52YWx1ZSk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgc3RhdGUubmFtZSk7XG4gICAgICAgIHJldHVybiB7IGlucHV0IH07XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTGFiZWwgPSAoc3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBzdGF0ZS5pZCk7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IHN0YXRlLnRleHQ7XG4gICAgICAgIHJldHVybiB7IGxhYmVsIH07XG4gICAgfTtcblxuXG4gICAgY29uc3QgY3JlYXRlRmllbGRzZXQgPSAoc3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gICAgICAgIGxlZ2VuZC5pbm5lclRleHQgPSBzdGF0ZS50ZXh0XG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG4gICAgICAgIHJldHVybiB7IGZpZWxkc2V0IH07XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgY3JlYXRlSW5wdXQsIGNyZWF0ZUxhYmVsLCBjcmVhdGVGaWVsZHNldCwgZGl2IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGRvbUVsZW1lbnRzIH1cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/DOM-Elements.js\n");

/***/ }),

/***/ "./src/checkBox.js":
/*!*************************!*\
  !*** ./src/checkBox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   div1: () => (/* binding */ div1)\n/* harmony export */ });\n/* harmony import */ var _DOM_Elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-Elements.js */ \"./src/DOM-Elements.js\");\n\n\nconst { createInput, createLabel, createFieldset, div } = _DOM_Elements_js__WEBPACK_IMPORTED_MODULE_0__.domElements;\n\nfunction createCheckBox(state) {  // using composition to create the checkbox\n    state.type = \"checkbox\";\n    return {\n        ...createInput(state),\n        ...createLabel(state),\n    }\n}\n\nconst check1 = createCheckBox({ id: \"01\", value: \"trial\", name: \"dig\", text: \"This is a sample\" })\n\nconst div1 = div();\ndiv1.appendChild(check1.input);\ndiv1.appendChild(check1.label);\n\n\n\n\n// const toDoItem = ()=>{\n//     title,\n//     notes,\n//     dueDate,\n//     priority,\n// }\n\n\n// checkBox1 = checkBox({ id:'item1', value:\"toDo1\", name:\"toDoList\", text:'inputText' })\n// checkBox1.appendfieldSet1\n\n// const checkBox = (state) => {\n//     const input = document.createElement(\"input\")\n//     input.setAttribute(\"id\",state.id);\n//     input.setAttribute(\"type\",\"checkbox\");\n//     input.setAttribute(\"value\",state.value);\n//     input.setAttribute(\"name\",state.name);\n\n//     const label = document.createElement(\"label\");\n//     label.setAttribute(\"for\", state.id);\n//     label.innerText = state.text;\n\n//     return {input, label}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hlY2tCb3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7O0FBRS9DLFFBQVEsZ0RBQWdELEVBQUUseURBQVc7O0FBRXJFLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLGlFQUFpRTs7QUFFakc7QUFDQTtBQUNBOztBQUVlOzs7QUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDBCQUEwQiw4REFBOEQ7QUFDeEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NoZWNrQm94LmpzPzgyYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tIFwiLi9ET00tRWxlbWVudHMuanNcIlxuXG5jb25zdCB7IGNyZWF0ZUlucHV0LCBjcmVhdGVMYWJlbCwgY3JlYXRlRmllbGRzZXQsIGRpdiB9ID0gZG9tRWxlbWVudHM7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrQm94KHN0YXRlKSB7ICAvLyB1c2luZyBjb21wb3NpdGlvbiB0byBjcmVhdGUgdGhlIGNoZWNrYm94XG4gICAgc3RhdGUudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5jcmVhdGVJbnB1dChzdGF0ZSksXG4gICAgICAgIC4uLmNyZWF0ZUxhYmVsKHN0YXRlKSxcbiAgICB9XG59XG5cbmNvbnN0IGNoZWNrMSA9IGNyZWF0ZUNoZWNrQm94KHsgaWQ6IFwiMDFcIiwgdmFsdWU6IFwidHJpYWxcIiwgbmFtZTogXCJkaWdcIiwgdGV4dDogXCJUaGlzIGlzIGEgc2FtcGxlXCIgfSlcblxuY29uc3QgZGl2MSA9IGRpdigpO1xuZGl2MS5hcHBlbmRDaGlsZChjaGVjazEuaW5wdXQpO1xuZGl2MS5hcHBlbmRDaGlsZChjaGVjazEubGFiZWwpO1xuXG5leHBvcnQgeyBkaXYxIH1cblxuXG4vLyBjb25zdCB0b0RvSXRlbSA9ICgpPT57XG4vLyAgICAgdGl0bGUsXG4vLyAgICAgbm90ZXMsXG4vLyAgICAgZHVlRGF0ZSxcbi8vICAgICBwcmlvcml0eSxcbi8vIH1cblxuXG4vLyBjaGVja0JveDEgPSBjaGVja0JveCh7IGlkOidpdGVtMScsIHZhbHVlOlwidG9EbzFcIiwgbmFtZTpcInRvRG9MaXN0XCIsIHRleHQ6J2lucHV0VGV4dCcgfSlcbi8vIGNoZWNrQm94MS5hcHBlbmRmaWVsZFNldDFcblxuLy8gY29uc3QgY2hlY2tCb3ggPSAoc3RhdGUpID0+IHtcbi8vICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuLy8gICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsc3RhdGUuaWQpO1xuLy8gICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImNoZWNrYm94XCIpO1xuLy8gICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsc3RhdGUudmFsdWUpO1xuLy8gICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixzdGF0ZS5uYW1lKTtcblxuLy8gICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuLy8gICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBzdGF0ZS5pZCk7XG4vLyAgICAgbGFiZWwuaW5uZXJUZXh0ID0gc3RhdGUudGV4dDtcblxuLy8gICAgIHJldHVybiB7aW5wdXQsIGxhYmVsfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/checkBox.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-Elements */ \"./src/DOM-Elements.js\");\n/* harmony import */ var _checkBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkBox.js */ \"./src/checkBox.js\");\n// import \"./styles.css\";\n\n\n\nconsole.log(_DOM_Elements__WEBPACK_IMPORTED_MODULE_0__.domElements)\nconsole.log('hey ya');\n// alert (\"hey\");\n// p=L;\n\ndocument.body.appendChild(_checkBox_js__WEBPACK_IMPORTED_MODULE_1__.div1); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDOEM7QUFDVDs7QUFFckMsWUFBWSxzREFBVztBQUN2QjtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLDhDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBkb21FbGVtZW50cyB9ICBmcm9tIFwiLi9ET00tRWxlbWVudHNcIjtcbmltcG9ydCB7IGRpdjEgfSBmcm9tIFwiLi9jaGVja0JveC5qc1wiO1xuXG5jb25zb2xlLmxvZyhkb21FbGVtZW50cylcbmNvbnNvbGUubG9nKCdoZXkgeWEnKTtcbi8vIGFsZXJ0IChcImhleVwiKTtcbi8vIHA9TDtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYxKTsgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;