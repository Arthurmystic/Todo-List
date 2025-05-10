// createFormElements.js

import { domElements } from "./DOM-Elements.js";
import { basicButtonStyles } from "./js-styles.js";

const { createElement, createLabel, createFieldset, createTextArea, createPrioritySelector } = domElements;

// CREATE BUTTONS
function createButton(buttonType, text, state) {
    const button = createElement(buttonType, state).element;
    button.innerText = text;
    // button.style.cssText = cssStyle;
    return button;
}

// CREATE INPUT ELEMENT
function createInputElement(elemType, state) {  // using composition to create the element
    return {
        ...createElement(elemType, state),  // input element
        ...createLabel(state),
    }
}

// CREATE TEXTAREA
function createTextAreaElement(state) {  // using composition to create the element
    return {
        ...createTextArea(state),
        ...createLabel(state),
    }
}

// CREATE PRIORITY OPTIONS
function createPriorityOptions(state) {  // using composition to create the element
    return {
        ...createPrioritySelector(state),
        ...createLabel(state),
    }
}

const createFormFields = function () {
    const editableDialog = createElement("dialog", { id: crypto.randomUUID() }).element;
    const todoFieldset = createFieldset({ text: "TODO LIST" }).fieldset
    const editableForm = createElement("form", { name: "editableForm", id: crypto.randomUUID() }).element;
    const displayForm = createElement("form", { name: "displayForm", id: crypto.randomUUID() }).element;
    const displayDialog = createElement("dialog", { id: crypto.randomUUID() }).element;
    const checkbox = createInputElement("input", { name: "todo-checkbox", type: "checkbox", elemClass: "checkbox", text: "Title: ", id: crypto.randomUUID() });
    const todoTitle = createInputElement("input", { name: "todo-title", type: "text", text: "Title: ", id: crypto.randomUUID() });
    const todoNotes = createTextAreaElement({ name: "todo-notes", id: crypto.randomUUID(), placeholder: "Notes" });
    const dueDate = createInputElement("input", { name: "todo-dueDate", type: "date", text: "Due Date: ", id: crypto.randomUUID() });
    const priority = createPriorityOptions({ name: "priorityList", text: "Priority: ", id: crypto.randomUUID() });
    const closeButton = createButton("button", "X", { type: "button", elemClass: "closeButton", id: crypto.randomUUID() });
    const resetButton = createButton("button", "Clear", { type: "reset", elemClass: "resetButton", id: crypto.randomUUID() });
    const confirmButton = createButton("button", "Confirm", { type: "submit", elemClass: "submitButton", id: crypto.randomUUID() });
    const button = (buttonType, text, buttonClass) => createButton("button", text, { type: buttonType, elemClass: buttonClass, id: crypto.randomUUID() });

    // Display & Storrage fields
    const storeFormDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "storeFormDiv" }).element;
    const quickDisplayDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "quickDisplayDiv" }).element;
    const quickDetailsDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "quickDetailsDiv" }).element;
    const quickActionDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "quickActionDiv" }).element;
    const duedateDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "quickElemDisplayDiv" }).element;
    const viewButton = createButton("button", "View", { type: "button", elemClass: "quickDispButton", id: crypto.randomUUID() });
    const editButton = createButton("button", "Edit", { type: "button", elemClass: "quickDispButton", id: crypto.randomUUID() });
    const deleteButton = createButton("button", "DEL", { type: "button", elemClass: "quickDispButton", id: crypto.randomUUID() });

    return { checkbox, todoTitle, todoNotes, dueDate, priority, closeButton, resetButton, confirmButton, button, editableForm, todoFieldset, editableDialog, displayForm, displayDialog,
        quickDisplayDiv, quickDetailsDiv, quickActionDiv, duedateDiv, viewButton, editButton, deleteButton, storeFormDiv
     };
};

export { createButton, createFormFields };  






