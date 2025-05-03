// checkbox.js  (ill rename this later)

import { domElements } from "./DOM-Elements.js"

import { basicButtonStyles } from "./js-styles.js"

const { createElement, createLabel, createFieldset, createTextArea, createPrioritySelector } = domElements;

// CREATE DIV

const editableFormDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "editableFormDiv" }).element;

const formElement = createElement("form", { id: crypto.randomUUID() }).element;

const todoFieldset = createFieldset({ text: "TODO LIST" }).fieldset

const dialogBox = createElement("dialog", { id: crypto.randomUUID() }).element;


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

const checkbox = inputElement("input", { name: "todo-checkbox", type: "checkbox", text: "Title: ", id: crypto.randomUUID() });

const todoTitle = inputElement("input", { name: "todo-title", type: "text", text: "Title: ", id: crypto.randomUUID() });

const todoNotes = textArea({ name: "todo-notes", id: crypto.randomUUID(), placeholder: "Notes" });

const dueDate = inputElement("input", { name: "todo-dueDate", type: "date", text: "Due Date: ", id: crypto.randomUUID() });

const priority = priorityOptions({ name: "priorityList", text: "Priority: ", id: crypto.randomUUID() });

const closeButton = createButton("button", "X", basicButtonStyles, { type: "button", elemClass: "closeButton", id: crypto.randomUUID() });
dialogBox.appendChild(closeButton);

const resetButton = createButton("button", "Clear", basicButtonStyles, { type: "reset", elemClass: "resetButton", id: crypto.randomUUID() });
resetButton.style.cssText = "width: 5rem; font-size: 12px";

const confirmButton = createButton("button", "Confirm", basicButtonStyles, { type: "submit", elemClass: "submitButton", id: crypto.randomUUID() });
confirmButton.style.cssText = "width: 5rem; font-size: 12px";

// console.log("check1.id: ", checkbox.label, checkbox.input);


// APPEND TO DIV


formElement.appendChild(todoTitle.label);
formElement.appendChild(todoTitle.element);

formElement.appendChild(todoNotes.label);
formElement.appendChild(todoNotes.textarea);

formElement.appendChild(dueDate.label);
formElement.appendChild(dueDate.element);

formElement.appendChild(priority.label);
formElement.appendChild(priority.selectOptions);

formElement.appendChild(checkbox.element);
formElement.appendChild(checkbox.label);

formElement.appendChild(resetButton);
formElement.appendChild(confirmButton);

todoFieldset.appendChild(formElement);




dialogBox.appendChild(todoFieldset);

closeButton.addEventListener("click",()=>dialogBox.close());

editableFormDiv.appendChild(dialogBox);

export { editableFormDiv, dialogBox, createButton }






