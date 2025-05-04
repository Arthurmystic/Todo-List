// createFormElements.js

import { domElements } from "./DOM-Elements.js";
import { basicButtonStyles } from "./js-styles.js";
// import { storeUserInput } from "./operations.js";

const { createElement, createLabel, createFieldset, createTextArea, createPrioritySelector } = domElements;

// CREATE BUTTONS
function createButton(buttonType, text, cssStyle, state) {
    const button = createElement(buttonType, state).element;
    button.innerText = text;
    button.style.cssText = cssStyle;
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

const createFormFields = (function () {
    const editableDialog = createElement("dialog", { id: crypto.randomUUID() }).element;
    const todoFieldset = createFieldset({ text: "TODO LIST" }).fieldset
    const editableForm = createElement("form", { name: "editableForm", id: crypto.randomUUID() }).element;

    const displayForm = createElement("form", { name: "displayForm", id: crypto.randomUUID() }).element;
    const displayDialog = createElement("dialog", { id: crypto.randomUUID() }).element;

    const checkbox = createInputElement("input", { name: "todo-checkbox", type: "checkbox", text: "Title: ", id: crypto.randomUUID() });
    const todoTitle = createInputElement("input", { name: "todo-title", type: "text", text: "Title: ", id: crypto.randomUUID() });
    const todoNotes = createTextAreaElement({ name: "todo-notes", id: crypto.randomUUID(), placeholder: "Notes" });
    const dueDate = createInputElement("input", { name: "todo-dueDate", type: "date", text: "Due Date: ", id: crypto.randomUUID() });
    const priority = createPriorityOptions({ name: "priorityList", text: "Priority: ", id: crypto.randomUUID() });
    const closeButton = createButton("button", "X", basicButtonStyles, { type: "button", elemClass: "closeButton", id: crypto.randomUUID() });
    const resetButton = createButton("button", "Clear", basicButtonStyles, { type: "reset", elemClass: "resetButton", id: crypto.randomUUID() });
    const confirmButton = createButton("button", "Confirm", basicButtonStyles, { type: "submit", elemClass: "submitButton", id: crypto.randomUUID() });

    return { checkbox, todoTitle, todoNotes, dueDate, priority, closeButton, resetButton, confirmButton, editableForm, todoFieldset, editableDialog, displayForm, displayDialog };
})();

// CREATE EDITABLE DIALOGBOX

const createEditableDialog = (function () {
    const { checkbox, todoTitle, todoNotes, dueDate, priority, closeButton, resetButton, confirmButton, editableForm, todoFieldset, editableDialog, displayForm, displayDialog } = createFormFields;

    editableDialog.appendChild(closeButton);
    resetButton.style.cssText = "width: 5rem; font-size: 12px";
    confirmButton.style.cssText = "width: 5rem; font-size: 12px";

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

    editableDialog.appendChild(todoFieldset);

    // Attach event listeners 

    closeButton.addEventListener("click", () => editableDialog.close());
    confirmButton.addEventListener("click", (e) => {
        e.preventDefault();
        const retrieveFormInput = storeFormInput(); // 
        console.log(retrieveFormInput);
        editableDialog.close();

        displayForm.appendChild(retrieveFormInput);
        displayDialog.appendChild(displayForm);
        document.body.appendChild(displayDialog);
    });

    return { editableDialog, editableForm, displayDialog, displayForm };
})();


const storeFormInput = function () {
    const { editableForm } = createFormFields;
    console.log(editableForm);
    const storeFormDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "storeFormDiv" }).element;
    const titleValue = editableForm.elements["todo-title"].value;
    const notesValue = editableForm.elements["todo-notes"].value;
    const dueDateValue = editableForm.elements["todo-dueDate"].value;
    const priorityListValue = editableForm.elements["priorityList"].value;

    storeFormDiv.innerText = `
                            Title:   ${titleValue}
                            Notes:    ${notesValue}
                            Due Date: ${dueDateValue}
                            Priority: ${priorityListValue}
                            `
    return storeFormDiv;
};

export { createButton, createEditableDialog };






