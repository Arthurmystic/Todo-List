// checkbox.js  (ill rename this later)

import { domElements } from "./DOM-Elements.js"

const { createElement, createLabel, createFieldset, createTextArea, createPrioritySelector } = domElements;

// CREATE DIV

const formDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "formDiv" }).element;

const formElement = createElement("form", { id: crypto.randomUUID() }).element;

const todoFieldset = createFieldset ({ text: "TODO LIST" }).fieldset;

const dialogBox = createElement("dialog", { id: crypto.randomUUID() }).element;

// CREATE INPUT ELEMENT
function inputElement(elemType, state) {  // using composition to create the element
    return {
        ...createElement(elemType,state),  // input element
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

const checkbox = inputElement("input",{ name: "todo-checkbox", type: "checkbox", text: "Title: ", id: crypto.randomUUID() });

const todoTitle = inputElement("input",{ name: "todo-title", type: "text", text: "Title: ", id: crypto.randomUUID() });

const todoNotes = textArea({ name: "todo-notes", id: crypto.randomUUID(), placeholder: "Notes" });

const dueDate = inputElement("input",{ name: "todo-dueDate", type: "date", text: "Due Date: ", id: crypto.randomUUID() });

const priority = priorityOptions({ name: "priorityList", text: "Priority: ", id: crypto.randomUUID() });

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

todoFieldset.appendChild(formElement);

dialogBox.appendChild(todoFieldset);

formDiv.appendChild(dialogBox);

document.body.appendChild(formDiv);

dialogBox.showModal();

export { formDiv }






