// checkbox.js  (ill rename this later)

import { domElements } from "./DOM-Elements.js"

const { createElement, createLabel, createFieldset, createDiv, createDialogBox, createTextArea, createPrioritySelector } = domElements;

// CREATE DIV

const div = createElement("div", { id: crypto.randomUUID(), elemClass: "formDiv" }).element;

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

div.appendChild(todoTitle.label);
div.appendChild(todoTitle.element);

div.appendChild(todoNotes.label);
div.appendChild(todoNotes.textarea);

div.appendChild(dueDate.label);
div.appendChild(dueDate.element);

div.appendChild(priority.label);
div.appendChild(priority.selectOptions);

div.appendChild(checkbox.element);
div.appendChild(checkbox.label);

export { div }






