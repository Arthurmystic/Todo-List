// index.js

import "./styles.css";
// import { domElements }  from "./DOM-Elements";
// import { storeUserInput } from "./operations.js"
// import { basicButtonStyles } from "./js-styles.js";

import { createButton } from "./createFormElements.js";
import { createDialogs, storeEditableDialog, storeDisplayDialog } from "./createDialogs.js";

const addTodoButton = createButton("button", "+", { type: "button", elemClass: "addButton", id: crypto.randomUUID() });
document.body.appendChild(addTodoButton);   

const displayTodo = createButton("button", "DISP", { type: "button", elemClass: "displayButton", id: crypto.randomUUID() });
document.body.appendChild(displayTodo);

addTodoButton.addEventListener("click",()=>{
    const { editableForm, editableDialog } = createDialogs();
    document.body.appendChild(editableDialog); //
    // editableForm.reset();
    editableDialog.showModal();
});

displayTodo.addEventListener("click", ()=>{
    const digs = storeDisplayDialog();
    const digs2 = digs[digs.length-1];
    // console.log("digsdigsdigs: ", digs2);
    document.body.appendChild(digs2);
    digs2.showModal();  
} )

 