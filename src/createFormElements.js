// createFormElements.js

import { domElements } from "./DOM-Elements.js"
import { basicButtonStyles } from "./js-styles.js"

const { createElement, createLabel, createFieldset, createTextArea, createPrioritySelector } = domElements;

// CREATE BUTTONS
function createButton(buttonType, text, cssStyle, state) {
    const button = createElement(buttonType, state).element;
    button.innerText = text;
    button.style.cssText = cssStyle;
    return button;
}

// CREATE INPUT ELEMENT
function inputElement(elemType, state) {  // using composition to create the element
    return {
        ...createElement(elemType, state),  // input element
        ...createLabel(state),
    }
}

// CREATE TEXTAREA
function textArea(state) {  // using composition to create the element
    return {
        ...createTextArea(state),
        ...createLabel(state),
    }
}

// CREATE PRIORITY OPTIONS
function priorityOptions(state) {  // using composition to create the element
    return {
        ...createPrioritySelector(state),
        ...createLabel(state),
    }
}

const formFields = (function () {

    const editableFormDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "editableFormDiv" }).element;
    const editableForm = createElement("form", { name: "editableForm", id: crypto.randomUUID() }).element;
    const todoFieldset = createFieldset({ text: "TODO LIST" }).fieldset
    const dialogBox = createElement("dialog", { id: crypto.randomUUID() }).element;

    const checkbox = inputElement("input", { name: "todo-checkbox", type: "checkbox", text: "Title: ", id: crypto.randomUUID() });

    const todoTitle = inputElement("input", { name: "todo-title", type: "text", text: "Title: ", id: crypto.randomUUID() });

    const todoNotes = textArea({ name: "todo-notes", id: crypto.randomUUID(), placeholder: "Notes" });

    const dueDate = inputElement("input", { name: "todo-dueDate", type: "date", text: "Due Date: ", id: crypto.randomUUID() });

    const priority = priorityOptions({ name: "priorityList", text: "Priority: ", id: crypto.randomUUID() });

    const closeButton = createButton("button", "X", basicButtonStyles, { type: "button", elemClass: "closeButton", id: crypto.randomUUID() });

    const resetButton = createButton("button", "Clear", basicButtonStyles, { type: "reset", elemClass: "resetButton", id: crypto.randomUUID() });

    const confirmButton = createButton("button", "Confirm", basicButtonStyles, { type: "submit", elemClass: "submitButton", id: crypto.randomUUID() });

    // console.log("check1.id: ", checkbox.label, checkbox.input);

    return { checkbox, todoTitle, todoNotes, dueDate, priority, closeButton, resetButton, confirmButton, editableFormDiv, editableForm, todoFieldset, dialogBox };

})();


const { checkbox, todoTitle, todoNotes, dueDate, priority, closeButton, resetButton, confirmButton, editableFormDiv, editableForm, todoFieldset, dialogBox } = formFields

dialogBox.appendChild(closeButton);
resetButton.style.cssText = "width: 5rem; font-size: 12px";
confirmButton.style.cssText = "width: 5rem; font-size: 12px";


// APPEND TO DIV

editableForm.appendChild(todoTitle.label);
editableForm.appendChild(todoTitle.element);

editableForm.appendChild(todoNotes.label);
editableForm.appendChild(todoNotes.textarea);

editableForm.appendChild(dueDate.label);
editableForm.appendChild(dueDate.element);

editableForm.appendChild(priority.label);
editableForm.appendChild(priority.selectOptions);

editableForm.appendChild(checkbox.element);
editableForm.appendChild(checkbox.label);

editableForm.appendChild(resetButton);
editableForm.appendChild(confirmButton);

todoFieldset.appendChild(editableForm);

dialogBox.appendChild(todoFieldset);

editableFormDiv.appendChild(dialogBox);

closeButton.addEventListener("click", () => dialogBox.close());

export { editableFormDiv, dialogBox, createButton, editableForm }






