// index.js

// import "./styles.css";
// import { domElements }  from "./DOM-Elements";
// import { storeUserInput } from "./operations.js"

import { createButton, createEditableDialog } from "./createFormElements.js";
import { basicButtonStyles } from "./js-styles.js"

const { editableDialog, editableForm } = createEditableDialog;


const addTodoButton = createButton("button", "+", basicButtonStyles, { type: "button", elemClass: "addButton", id: crypto.randomUUID() });
document.body.appendChild(addTodoButton);   

const displayTodo = createButton("button", "DISP", basicButtonStyles, { type: "button", elemClass: "addButton", id: crypto.randomUUID() });
document.body.appendChild(displayTodo);

document.body.appendChild(editableDialog); //

addTodoButton.addEventListener("click",()=>{
    editableForm.reset();
    editableDialog.showModal()
});

displayTodo.addEventListener("click", ()=>{
    displayDialog.showModal();
} )

 