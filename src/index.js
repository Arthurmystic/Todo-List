// index.js

// import "./styles.css";
// import { domElements }  from "./DOM-Elements";
// import { storeUserInput } from "./operations.js"

import { createButton } from "./createFormElements.js";
import { basicButtonStyles } from "./js-styles.js";
import { createDialogs, storeEditableDialog, storeDisplayDialog } from "./createDialogs.js";

const { editableForm, editableDialog } = createDialogs();

const addTodoButton = createButton("button", "+", basicButtonStyles, { type: "button", elemClass: "addButton", id: crypto.randomUUID() });
document.body.appendChild(addTodoButton);   

const displayTodo = createButton("button", "DISP", basicButtonStyles, { type: "button", elemClass: "addButton", id: crypto.randomUUID() });
document.body.appendChild(displayTodo);

document.body.appendChild(editableDialog); //

addTodoButton.addEventListener("click",()=>{
    editableForm.reset();
    editableDialog.showModal();
});

displayTodo.addEventListener("click", ()=>{
    const digs = storeDisplayDialog();
    const digs2 = digs[digs.length-1];
    console.log("digsdigsdigs: ", digs2);
    document.body.appendChild(digs2);
    digs2.showModal();  
} )

 