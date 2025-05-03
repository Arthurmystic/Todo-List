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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domElements: () => (/* binding */ domElements)\n/* harmony export */ });\n//DOM-Elements.js\n\nconst domElements = (function () {\n\n    const createDiv = (state) => {\n        // const elemDiv = document.createElement(\"div\");\n        // elemDiv.setAttribute(\"class\", state.elemClass);\n        // elemDiv.setAttribute(\"id\", state.id);\n        // return elemDiv;\n    }\n\n    const createDialogBox = (state) => {\n        dialogBox = document.createElement(\"dialog\");\n        dialogBox.setAttribute(\"id\", state.id);\n        return dialogBox;\n    }\n\n    // <form id=\"modalForm\"></form>\n    \n    const createElement = (elemType, state) => {\n        const element = document.createElement(elemType);\n        element.setAttribute(\"name\", state.name);\n        element.setAttribute(\"id\", state.id);\n        if (state.elemClass) element.setAttribute(\"class\", state.elemClass);\n\n        if (state.type) element.setAttribute(\"type\", state.type); // some inputs have 'type', other dont.\n        if (state.value) element.setAttribute(\"value\", state.value); // some inputs have 'value', other dont.\n        \n        return { element };\n    }\n\n\n    // const createElement = (state) => {\n    //     const input = document.createElement(\"input\");\n    //     input.setAttribute(\"name\", state.name);\n    //     input.setAttribute(\"id\", state.id);\n    //     if (state.type) input.setAttribute(\"type\", state.type); // some inputs have 'type', other dont.\n    //     if (state.value) input.setAttribute(\"value\", state.value); // some inputs have 'value', other dont.\n        \n    //     return { input };\n    // }\n\n    const createLabel = (state) => {\n        const label = document.createElement(\"label\");\n        label.setAttribute(\"for\", state.id);\n        if (state.text) label.innerText = state.text;\n        return { label };\n    };\n\n\n    const createFieldset = (state) => {\n        const fieldset = document.createElement(\"fieldset\");\n        const legend = document.createElement(\"legend\");\n        legend.innerText = state.text\n        fieldset.appendChild(legend);\n        return { fieldset };\n\n    };\n\n    const createTextArea = (state) => {\n        const textarea = document.createElement(\"textarea\");\n        if (state.placeholder) textarea.setAttribute(\"placeholder\", state.placeholder);\n        return { textarea }\n    }\n\n    const createSelectOption = (state) => {\n        const option = document.createElement(\"option\");\n        option.setAttribute(\"value\", state.value);\n        option.innerText = state.text;\n\n        return option;\n\n    }\n\n    const createPrioritySelector = (state) => {\n        const selectOptions = document.createElement(\"select\");\n        selectOptions.setAttribute(\"name\", state.name);\n        selectOptions.setAttribute(\"id\", state.id);\n\n        const option1 = createSelectOption({value: \"high\", text: \"High\"});\n        const option2 = createSelectOption({value: \"medium\", text: \"Medium\"});\n        const option3 = createSelectOption({value: \"low\", text: \"Low\"});\n\n        selectOptions.appendChild(option1);\n        selectOptions.appendChild(option2);\n        selectOptions.appendChild(option3);\n\n        return { selectOptions }\n\n    }\n\n    return { createElement, createLabel, createFieldset, createDiv, createDialogBox, createTextArea, createPrioritySelector };\n\n})();\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRE9NLUVsZW1lbnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrRUFBa0U7QUFDbEUscUVBQXFFO0FBQ3JFO0FBQ0EsaUJBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRSxzRUFBc0U7QUFDdEU7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsNEJBQTRCO0FBQ3hFLDRDQUE0QyxnQ0FBZ0M7QUFDNUUsNENBQTRDLDBCQUEwQjs7QUFFdEU7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7O0FBRUEsYUFBYTs7QUFFYixDQUFDOztBQUVxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00tRWxlbWVudHMuanM/YzNlOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0RPTS1FbGVtZW50cy5qc1xuXG5jb25zdCBkb21FbGVtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBjcmVhdGVEaXYgPSAoc3RhdGUpID0+IHtcbiAgICAgICAgLy8gY29uc3QgZWxlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIC8vIGVsZW1EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgc3RhdGUuZWxlbUNsYXNzKTtcbiAgICAgICAgLy8gZWxlbURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBzdGF0ZS5pZCk7XG4gICAgICAgIC8vIHJldHVybiBlbGVtRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZURpYWxvZ0JveCA9IChzdGF0ZSkgPT4ge1xuICAgICAgICBkaWFsb2dCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgICAgICBkaWFsb2dCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgc3RhdGUuaWQpO1xuICAgICAgICByZXR1cm4gZGlhbG9nQm94O1xuICAgIH1cblxuICAgIC8vIDxmb3JtIGlkPVwibW9kYWxGb3JtXCI+PC9mb3JtPlxuICAgIFxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbVR5cGUsIHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1UeXBlKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIHN0YXRlLm5hbWUpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHN0YXRlLmlkKTtcbiAgICAgICAgaWYgKHN0YXRlLmVsZW1DbGFzcykgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdGF0ZS5lbGVtQ2xhc3MpO1xuXG4gICAgICAgIGlmIChzdGF0ZS50eXBlKSBlbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgc3RhdGUudHlwZSk7IC8vIHNvbWUgaW5wdXRzIGhhdmUgJ3R5cGUnLCBvdGhlciBkb250LlxuICAgICAgICBpZiAoc3RhdGUudmFsdWUpIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgc3RhdGUudmFsdWUpOyAvLyBzb21lIGlucHV0cyBoYXZlICd2YWx1ZScsIG90aGVyIGRvbnQuXG4gICAgICAgIFxuICAgICAgICByZXR1cm4geyBlbGVtZW50IH07XG4gICAgfVxuXG5cbiAgICAvLyBjb25zdCBjcmVhdGVFbGVtZW50ID0gKHN0YXRlKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIC8vICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIHN0YXRlLm5hbWUpO1xuICAgIC8vICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBzdGF0ZS5pZCk7XG4gICAgLy8gICAgIGlmIChzdGF0ZS50eXBlKSBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHN0YXRlLnR5cGUpOyAvLyBzb21lIGlucHV0cyBoYXZlICd0eXBlJywgb3RoZXIgZG9udC5cbiAgICAvLyAgICAgaWYgKHN0YXRlLnZhbHVlKSBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBzdGF0ZS52YWx1ZSk7IC8vIHNvbWUgaW5wdXRzIGhhdmUgJ3ZhbHVlJywgb3RoZXIgZG9udC5cbiAgICAgICAgXG4gICAgLy8gICAgIHJldHVybiB7IGlucHV0IH07XG4gICAgLy8gfVxuXG4gICAgY29uc3QgY3JlYXRlTGFiZWwgPSAoc3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBzdGF0ZS5pZCk7XG4gICAgICAgIGlmIChzdGF0ZS50ZXh0KSBsYWJlbC5pbm5lclRleHQgPSBzdGF0ZS50ZXh0O1xuICAgICAgICByZXR1cm4geyBsYWJlbCB9O1xuICAgIH07XG5cblxuICAgIGNvbnN0IGNyZWF0ZUZpZWxkc2V0ID0gKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICAgICAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICAgICAgICBsZWdlbmQuaW5uZXJUZXh0ID0gc3RhdGUudGV4dFxuICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuICAgICAgICByZXR1cm4geyBmaWVsZHNldCB9O1xuXG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVRleHRBcmVhID0gKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICBpZiAoc3RhdGUucGxhY2Vob2xkZXIpIHRleHRhcmVhLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHN0YXRlLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgcmV0dXJuIHsgdGV4dGFyZWEgfVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVNlbGVjdE9wdGlvbiA9IChzdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgc3RhdGUudmFsdWUpO1xuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gc3RhdGUudGV4dDtcblxuICAgICAgICByZXR1cm4gb3B0aW9uO1xuXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUHJpb3JpdHlTZWxlY3RvciA9IChzdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsZWN0T3B0aW9ucy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIHN0YXRlLm5hbWUpO1xuICAgICAgICBzZWxlY3RPcHRpb25zLnNldEF0dHJpYnV0ZShcImlkXCIsIHN0YXRlLmlkKTtcblxuICAgICAgICBjb25zdCBvcHRpb24xID0gY3JlYXRlU2VsZWN0T3B0aW9uKHt2YWx1ZTogXCJoaWdoXCIsIHRleHQ6IFwiSGlnaFwifSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbjIgPSBjcmVhdGVTZWxlY3RPcHRpb24oe3ZhbHVlOiBcIm1lZGl1bVwiLCB0ZXh0OiBcIk1lZGl1bVwifSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbjMgPSBjcmVhdGVTZWxlY3RPcHRpb24oe3ZhbHVlOiBcImxvd1wiLCB0ZXh0OiBcIkxvd1wifSk7XG5cbiAgICAgICAgc2VsZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChvcHRpb24xKTtcbiAgICAgICAgc2VsZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChvcHRpb24yKTtcbiAgICAgICAgc2VsZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChvcHRpb24zKTtcblxuICAgICAgICByZXR1cm4geyBzZWxlY3RPcHRpb25zIH1cblxuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUxhYmVsLCBjcmVhdGVGaWVsZHNldCwgY3JlYXRlRGl2LCBjcmVhdGVEaWFsb2dCb3gsIGNyZWF0ZVRleHRBcmVhLCBjcmVhdGVQcmlvcml0eVNlbGVjdG9yIH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGRvbUVsZW1lbnRzIH1cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/DOM-Elements.js\n");

/***/ }),

/***/ "./src/checkBox.js":
/*!*************************!*\
  !*** ./src/checkBox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   div: () => (/* binding */ div)\n/* harmony export */ });\n/* harmony import */ var _DOM_Elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-Elements.js */ \"./src/DOM-Elements.js\");\n// checkbox.js  (ill rename this later)\n\n\n\nconst { createElement, createLabel, createFieldset, createDiv, createDialogBox, createTextArea, createPrioritySelector } = _DOM_Elements_js__WEBPACK_IMPORTED_MODULE_0__.domElements;\n\n// CREATE DIV\n\nconst div = createElement(\"div\", { id: crypto.randomUUID(), elemClass: \"formDiv\" }).element;\n\n// CREATE INPUT ELEMENT\nfunction inputElement(elemType, state) {  // using composition to create the element\n    return {\n        ...createElement(elemType,state),  // input element\n        ...createLabel(state),\n    }\n}\n\n// CREATE TEXTAREA\nfunction textArea(state) {  // using composition to create the element\n    return {\n        ...createTextArea(state),\n        ...createLabel(state),\n    }\n}\n\n// CREATE PRIORITY OPTIONS\nfunction priorityOptions(state) {  // using composition to create the element\n    return {\n        ...createPrioritySelector(state),\n        ...createLabel(state),\n    }\n}\n\nconst checkbox = inputElement(\"input\",{ name: \"todo-checkbox\", type: \"checkbox\", text: \"Title: \", id: crypto.randomUUID() });\n\nconst todoTitle = inputElement(\"input\",{ name: \"todo-title\", type: \"text\", text: \"Title: \", id: crypto.randomUUID() });\n\nconst todoNotes = textArea({ name: \"todo-notes\", id: crypto.randomUUID(), placeholder: \"Notes\" });\n\nconst dueDate = inputElement(\"input\",{ name: \"todo-dueDate\", type: \"date\", text: \"Due Date: \", id: crypto.randomUUID() });\n\nconst priority = priorityOptions({ name: \"priorityList\", text: \"Priority: \", id: crypto.randomUUID() });\n\n// console.log(\"check1.id: \", checkbox.label, checkbox.input);\n\n\n// APPEND TO DIV\n\ndiv.appendChild(todoTitle.label);\ndiv.appendChild(todoTitle.element);\n\ndiv.appendChild(todoNotes.label);\ndiv.appendChild(todoNotes.textarea);\n\ndiv.appendChild(dueDate.label);\ndiv.appendChild(dueDate.element);\n\ndiv.appendChild(priority.label);\ndiv.appendChild(priority.selectOptions);\n\ndiv.appendChild(checkbox.element);\ndiv.appendChild(checkbox.label);\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hlY2tCb3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFK0M7O0FBRS9DLFFBQVEsaUhBQWlILEVBQUUseURBQVc7O0FBRXRJOztBQUVBLG1DQUFtQywrQ0FBK0M7O0FBRWxGO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxtRkFBbUY7O0FBRTNILHlDQUF5Qyw0RUFBNEU7O0FBRXJILDZCQUE2QixtRUFBbUU7O0FBRWhHLHVDQUF1QyxpRkFBaUY7O0FBRXhILG1DQUFtQyxtRUFBbUU7O0FBRXRHOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2hlY2tCb3guanM/ODJhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjaGVja2JveC5qcyAgKGlsbCByZW5hbWUgdGhpcyBsYXRlcilcblxuaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tIFwiLi9ET00tRWxlbWVudHMuanNcIlxuXG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUxhYmVsLCBjcmVhdGVGaWVsZHNldCwgY3JlYXRlRGl2LCBjcmVhdGVEaWFsb2dCb3gsIGNyZWF0ZVRleHRBcmVhLCBjcmVhdGVQcmlvcml0eVNlbGVjdG9yIH0gPSBkb21FbGVtZW50cztcblxuLy8gQ1JFQVRFIERJVlxuXG5jb25zdCBkaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksIGVsZW1DbGFzczogXCJmb3JtRGl2XCIgfSkuZWxlbWVudDtcblxuLy8gQ1JFQVRFIElOUFVUIEVMRU1FTlRcbmZ1bmN0aW9uIGlucHV0RWxlbWVudChlbGVtVHlwZSwgc3RhdGUpIHsgIC8vIHVzaW5nIGNvbXBvc2l0aW9uIHRvIGNyZWF0ZSB0aGUgZWxlbWVudFxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNyZWF0ZUVsZW1lbnQoZWxlbVR5cGUsc3RhdGUpLCAgLy8gaW5wdXQgZWxlbWVudFxuICAgICAgICAuLi5jcmVhdGVMYWJlbChzdGF0ZSksXG4gICAgfVxufVxuXG4vLyBDUkVBVEUgVEVYVEFSRUFcbmZ1bmN0aW9uIHRleHRBcmVhKHN0YXRlKSB7ICAvLyB1c2luZyBjb21wb3NpdGlvbiB0byBjcmVhdGUgdGhlIGVsZW1lbnRcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5jcmVhdGVUZXh0QXJlYShzdGF0ZSksXG4gICAgICAgIC4uLmNyZWF0ZUxhYmVsKHN0YXRlKSxcbiAgICB9XG59XG5cbi8vIENSRUFURSBQUklPUklUWSBPUFRJT05TXG5mdW5jdGlvbiBwcmlvcml0eU9wdGlvbnMoc3RhdGUpIHsgIC8vIHVzaW5nIGNvbXBvc2l0aW9uIHRvIGNyZWF0ZSB0aGUgZWxlbWVudFxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNyZWF0ZVByaW9yaXR5U2VsZWN0b3Ioc3RhdGUpLFxuICAgICAgICAuLi5jcmVhdGVMYWJlbChzdGF0ZSksXG4gICAgfVxufVxuXG5jb25zdCBjaGVja2JveCA9IGlucHV0RWxlbWVudChcImlucHV0XCIseyBuYW1lOiBcInRvZG8tY2hlY2tib3hcIiwgdHlwZTogXCJjaGVja2JveFwiLCB0ZXh0OiBcIlRpdGxlOiBcIiwgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCkgfSk7XG5cbmNvbnN0IHRvZG9UaXRsZSA9IGlucHV0RWxlbWVudChcImlucHV0XCIseyBuYW1lOiBcInRvZG8tdGl0bGVcIiwgdHlwZTogXCJ0ZXh0XCIsIHRleHQ6IFwiVGl0bGU6IFwiLCBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSB9KTtcblxuY29uc3QgdG9kb05vdGVzID0gdGV4dEFyZWEoeyBuYW1lOiBcInRvZG8tbm90ZXNcIiwgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksIHBsYWNlaG9sZGVyOiBcIk5vdGVzXCIgfSk7XG5cbmNvbnN0IGR1ZURhdGUgPSBpbnB1dEVsZW1lbnQoXCJpbnB1dFwiLHsgbmFtZTogXCJ0b2RvLWR1ZURhdGVcIiwgdHlwZTogXCJkYXRlXCIsIHRleHQ6IFwiRHVlIERhdGU6IFwiLCBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSB9KTtcblxuY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eU9wdGlvbnMoeyBuYW1lOiBcInByaW9yaXR5TGlzdFwiLCB0ZXh0OiBcIlByaW9yaXR5OiBcIiwgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCkgfSk7XG5cbi8vIGNvbnNvbGUubG9nKFwiY2hlY2sxLmlkOiBcIiwgY2hlY2tib3gubGFiZWwsIGNoZWNrYm94LmlucHV0KTtcblxuXG4vLyBBUFBFTkQgVE8gRElWXG5cbmRpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUubGFiZWwpO1xuZGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZS5lbGVtZW50KTtcblxuZGl2LmFwcGVuZENoaWxkKHRvZG9Ob3Rlcy5sYWJlbCk7XG5kaXYuYXBwZW5kQ2hpbGQodG9kb05vdGVzLnRleHRhcmVhKTtcblxuZGl2LmFwcGVuZENoaWxkKGR1ZURhdGUubGFiZWwpO1xuZGl2LmFwcGVuZENoaWxkKGR1ZURhdGUuZWxlbWVudCk7XG5cbmRpdi5hcHBlbmRDaGlsZChwcmlvcml0eS5sYWJlbCk7XG5kaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkuc2VsZWN0T3B0aW9ucyk7XG5cbmRpdi5hcHBlbmRDaGlsZChjaGVja2JveC5lbGVtZW50KTtcbmRpdi5hcHBlbmRDaGlsZChjaGVja2JveC5sYWJlbCk7XG5cbmV4cG9ydCB7IGRpdiB9XG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/checkBox.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkBox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkBox.js */ \"./src/checkBox.js\");\n// import \"./styles.css\";\n// import { domElements }  from \"./DOM-Elements\";\n\n\n// console.log(domElements)\nconsole.log('hey ya');\n// alert (\"hey\");\n// p=L;\n\ndocument.body.appendChild(_checkBox_js__WEBPACK_IMPORTED_MODULE_0__.div); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLFlBQVksZUFBZTtBQUNTOztBQUVwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsNkNBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbi8vIGltcG9ydCB7IGRvbUVsZW1lbnRzIH0gIGZyb20gXCIuL0RPTS1FbGVtZW50c1wiO1xuaW1wb3J0IHsgZGl2IH0gZnJvbSBcIi4vY2hlY2tCb3guanNcIjtcblxuLy8gY29uc29sZS5sb2coZG9tRWxlbWVudHMpXG5jb25zb2xlLmxvZygnaGV5IHlhJyk7XG4vLyBhbGVydCAoXCJoZXlcIik7XG4vLyBwPUw7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTsgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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