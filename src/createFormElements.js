// createFormElements.js

import { domElements } from "./DOM-Elements.js";
import editIcon from "./images/pen.png";
import deleteIcon from "./images/bin.png";
import viewIcon from "./images/eye.png";
import editIcon2 from "./images/pen2.png";
import deleteIcon2 from "./images/trash3.png";

const { buildElement, createLabel, createFieldset, createTextArea, createPrioritySelector, img } = domElements;

// CREATE BUTTONS 
function createButton(buttonType, text, state) {
    const button = buildElement(buttonType, state).element;  // buildElement  buildElement
    if (text) button.innerText = text;
    return button;  // document.createElemen
};

// CREATE INPUT ELEMENT
function createInputElement(elemType, state) {  // using composition to create the element
    return {
        ...buildElement(elemType, state),  // input element
        ...createLabel(state),
    };
}

// CREATE TEXTAREA
function createTextAreaElement(state) {  // using composition to create the element
    return {
        ...createTextArea(state),
        ...createLabel(state),
    };
}

// CREATE PRIORITY OPTIONS
function createPriorityOptions(state) {  // using composition to create the element
    return {
        ...createPrioritySelector(state),
        ...createLabel(state),
    };
}

// Adding icon to button
function addIcon(iconButton, imgIcon, ImgAltText, btnClass, dataAction) {
    const image = img();
    image.src = imgIcon;
    image.altText = ImgAltText;
    image.style.cssText = `           
                        width: 20px;
                        height: 20px;
                        `
    iconButton.appendChild(image);
    iconButton.setAttribute("class", btnClass);
    if (dataAction) iconButton.dataset.action = dataAction;
    iconButton.style.cssText = `
                            display: flex;
                            align-items: center;
                            justify-content: center;             
                            `
    return iconButton;
}

const createFormFields = function () {
    // generic
    const button = (buttonType, text, buttonClass, action="default") => createButton("button", text, { type: buttonType, elemClass: buttonClass, id: crypto.randomUUID(), dataAction: action });
    const rawButton = () => createButton("button", undefined, { type: "button", id: crypto.randomUUID() });
    const closeButton = createButton("button", "X", { type: "button", elemClass: "closeButton", id: crypto.randomUUID(), dataAction: "closeDialog" });
    const resetButton = createButton("button", "Clear", { type: "reset", elemClass: "resetButton", id: crypto.randomUUID(), dataAction: "resetForm" });
    const confirmButton = createButton("button", "Confirm", { type: "submit", elemClass: "confirmButton", id: crypto.randomUUID(), dataAction: "saveForm" });
    
    // TODO LIST PANE RELATED
    //General
    const todoListPaneContainerDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "todoListPaneContainer" }).element;
    // const todoListPane = buildElement("div", { id: crypto.randomUUID(), elemClass: "todoListPane" }).element;
    const addNoteButtonToTodoListPane = createButton("button", "+ New Task", { type: "button", elemClass: "addNoteButton", id: crypto.randomUUID(), dataAction: "addNote"});
    const btnDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "btnDiv" }).element;

    // Editable dialog related
    const editableDialog = buildElement("dialog", { id: crypto.randomUUID() }).element;
    const todoFieldset = createFieldset({ text: "TODO LIST" }).fieldset;
    const editableForm = buildElement("form", { name: "editableForm", id: crypto.randomUUID(), dataAction: "editableNoteForm" }).element;
    const todoNotes = createTextAreaElement({ name: "todo-notes", id: crypto.randomUUID(), placeholder: "Notes" });
    const checkbox = createInputElement("input", { name: "todo-checkbox", type: "checkbox", elemClass: "checkbox", text: "Title: ", id: crypto.randomUUID() });
    const todoTitle = createInputElement("input", { name: "todo-title", type: "text", text: "Title: ", id: crypto.randomUUID(), required: "required" });
    const dueDate = createInputElement("input", { name: "todo-dueDate", type: "date", text: "Due Date: ", id: crypto.randomUUID() });
    const priority = createPriorityOptions({ name: "priorityList", text: "Priority: ", id: crypto.randomUUID() });
    
    
    // display dialog related on clicking view
    const readOnlyForm = buildElement("form", { name: "readOnlyForm", id: crypto.randomUUID(), dataAction: "readOnlyForm" }).element;
    const readOnlyDialog = buildElement("dialog", { id: crypto.randomUUID() }).element;

    // Display & Storage fields
    const storeFormDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "storeFormDiv" }).element;
    const duedateDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "duedateDiv" }).element;

    // todoPreview related
    const todoPreviewDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "todoPreviewDiv" }).element; 
    const quickDetailsDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "quickDetailsDiv" }).element;
    const quickActionDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "quickActionDiv" }).element;
    const checkBoxLabelDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "checkBoxLabelDiv" }).element;
    const editButton = addIcon(rawButton(), editIcon, "Edit", "quickDispButton", "editNote");
    const deleteButton = addIcon(rawButton(), deleteIcon, "Delete", "quickDispButton", "deleteNote");
    const viewButton = addIcon(rawButton(), viewIcon, "View", "quickDispButton", "viewNote"); 

    // PROJECT PANE RELATED
    const projectHeadingDialog = buildElement("dialog", { id: crypto.randomUUID(), elemClass: "projectHeadingDialog" }).element;
    const projectTitle = createInputElement("input", { name: "project-Name", type: "text", text: "Project Name: ", id: crypto.randomUUID(), required: "required" });
   
    const projectTitleForm = buildElement("form", { name: "projectTitleForm", id: crypto.randomUUID(), dataAction: "projectTitleForm" }).element;
    const projectTitleDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "projectTitleDiv", dataAction: "selectProjectTitleDiv" }).element;
    const projectDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "projectDiv" }).element;
    const editProjectNameBtn = addIcon(rawButton(), editIcon2, "Edit", "projectEditBtn", "editProjectName");
    const delProjectBtn = addIcon(rawButton(), deleteIcon2, "Delete", "projectDelBtn", "deleteProject");

    return {
        checkbox, todoTitle, todoNotes, dueDate, priority, closeButton, resetButton, confirmButton, button, editableForm,
        editableDialog, readOnlyForm, readOnlyDialog, todoPreviewDiv, quickDetailsDiv, quickActionDiv, duedateDiv, viewButton, 
        editButton, deleteButton, storeFormDiv, addNoteButtonToTodoListPane, projectDiv, projectTitleForm, projectTitleDiv,
        todoFieldset, todoListPaneContainerDiv, projectHeadingDialog, projectTitle, editProjectNameBtn,
        delProjectBtn, btnDiv, checkBoxLabelDiv
    };
};

export { createButton, createFormFields };