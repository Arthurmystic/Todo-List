// createFormElements.js

import { domElements } from "./DOM-Elements.js";
import editIcon from "./images/pen.png";
import deleteIcon from "./images/bin.png";
import viewIcon from "./images/eye.png";

const { buildElement, createLabel, createFieldset, createTextArea, createPrioritySelector, img } = domElements;

// CREATE BUTTONS 
function createButton(buttonType, text, state) {
    const button = buildElement(buttonType, state).element;  // buildElement  buildElement
    if (text) button.innerText = text;
    // button.style.cssText = cssStyle;
    return button;  // document.createElemen
}

// CREATE INPUT ELEMENT
function createInputElement(elemType, state) {  // using composition to create the element
    return {
        ...buildElement(elemType, state),  // input element
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


// Adding icon to button
function addIcon(iconButton, imgIcon, ImgAltText) {
    const image = img();
    image.src = imgIcon;
    image.altText = ImgAltText;
    image.style.cssText = `           
                        width: 20px;
                        height: 20px;
                        `
    // image.style.width = "inherit";
    // image.style.height = "inherit";
    iconButton.appendChild(image);
    iconButton.style.cssText = `
                            display: flex;
                            align-items: center;
                            justify-content: center;             
                            `
    return iconButton;
}

const createFormFields = function () {
    const editableDialog = buildElement("dialog", { id: crypto.randomUUID() }).element;
    const todoFieldset = createFieldset({ text: "TODO LIST" }).fieldset
    const editableForm = buildElement("form", { name: "editableForm", id: crypto.randomUUID() }).element;
    const displayForm = buildElement("form", { name: "displayForm", id: crypto.randomUUID() }).element;
    const displayDialog = buildElement("dialog", { id: crypto.randomUUID() }).element;
    const checkbox = createInputElement("input", { name: "todo-checkbox", type: "checkbox", elemClass: "checkbox", text: "Title: ", id: crypto.randomUUID() });
    const todoTitle = createInputElement("input", { name: "todo-title", type: "text", text: "Title: ", id: crypto.randomUUID() });
    const todoNotes = createTextAreaElement({ name: "todo-notes", id: crypto.randomUUID(), placeholder: "Notes" });
    const dueDate = createInputElement("input", { name: "todo-dueDate", type: "date", text: "Due Date: ", id: crypto.randomUUID() });
    const priority = createPriorityOptions({ name: "priorityList", text: "Priority: ", id: crypto.randomUUID() });
    const closeButton = createButton("button", "X", { type: "button", elemClass: "closeButton", id: crypto.randomUUID() });
    const resetButton = createButton("button", "Clear", { type: "reset", elemClass: "resetButton", id: crypto.randomUUID() });
    const confirmButton = createButton("button", "Confirm", { type: "submit", elemClass: "submitButton", id: crypto.randomUUID() });
    const button = (buttonType, text, buttonClass) => createButton("button", text, { type: buttonType, elemClass: buttonClass, id: crypto.randomUUID() });
    const addNoteButtonToTodoListPane = createButton("button", "+", { type: "button", elemClass: "addNoteButton", id: crypto.randomUUID() });
    
    const todoListPane = buildElement("div", { id: crypto.randomUUID(), elemClass: "todoListPane" }).element;

    const todoListPaneContainerDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "todoListPaneContainer" }).element;
    
    // const addProjectButton = createButton("button", "+", { type: "button", elemClass: "addProjectButton", id: crypto.randomUUID() });
    // const projectDiv = buildElement("div", { class: "projectDiv", id: crypto.randomUUID() });

    // Display & Storrage fields
    const storeFormDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "storeFormDiv" }).element;
    const todoPreviewDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "todoPreviewDiv" }).element;
    const quickDetailsDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "quickDetailsDiv" }).element;
    const quickActionDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "quickActionDiv" }).element;
    const duedateDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "quickElemDisplayDiv" }).element;

    const todoPreviewContainer = buildElement("div", { id: crypto.randomUUID(), elemClass: "todoPreviewContainer" }).element;
    const projectDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "projectDiv" }).element;

    // const viewButton = createButton("button", "View", { type: "button", elemClass: "quickDispButton", id: crypto.randomUUID() });
    const rawButton = () => createButton("button", undefined, { type: "button", elemClass: "quickDispButton", id: crypto.randomUUID() });

    const editButton = addIcon(rawButton(), editIcon, "Edit");
    const deleteButton = addIcon(rawButton(), deleteIcon, "Delete");
    const viewButton = addIcon(rawButton(), viewIcon, "View"); 

    const projectHeadingDialog = buildElement("dialog", { id: crypto.randomUUID() }).element;
    const projectTitle = createInputElement("input", { name: "project-Name", type: "text", text: "Project Name: ", id: crypto.randomUUID() });
    const projectTitleForm = buildElement("form", { name: "projectTitleForm", id: crypto.randomUUID() }).element;
    const projectTitleDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "projectTitleDiv" }).element;


    return {
        checkbox, todoTitle, todoNotes, dueDate, priority, closeButton, resetButton, confirmButton, button, editableForm, todoFieldset, 
        editableDialog, displayForm, displayDialog, todoPreviewDiv, quickDetailsDiv, quickActionDiv, duedateDiv, viewButton, editButton, 
        deleteButton, storeFormDiv, addNoteButtonToTodoListPane, projectDiv, projectTitleForm, projectTitleDiv,
        todoListPaneContainerDiv, todoListPane, projectHeadingDialog, projectTitle
    };
};


// <button>
//     <img src="your-image.png" alt="Button Image" width="30" height="30">
// </button>




// const { deleteButton, editButton } = createFormFields();



// console.log(editImg);


export { createButton, createFormFields };






