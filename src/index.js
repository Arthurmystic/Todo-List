// index.js

import "./styles.css";
import { domElements }  from "./DOM-Elements";
import { createButton } from "./createFormElements.js";
import { createDialogs, storeDisplayDialog, createProjectHeadingDivAndDialog } from "./createDialogs.js";
import { createProjectDivOnAddBtn } from "./createProject.js"

// const { projectButton, todoListButton, addProjectButton, projectsPane, todoListPaneContainer } = domElements; 

const addNoteButton = createButton("button", "+", { type: "button", elemClass: "addNoteButton", id: crypto.randomUUID() });
todoListButton.appendChild(addNoteButton);   

// const displayTodo = createButton("button", "DISP", { type: "button", elemClass: "displayButton", id: crypto.randomUUID() });
// document.body.appendChild(displayTodo); 

// addNoteButton.addEventListener("click",()=>{
//     const { editableDialog } = createDialogs();
//     document.body.appendChild(editableDialog); //
//     // editableForm.reset();
//     editableDialog.showModal();
// });

// displayTodo.addEventListener("click", ()=>{
//     const digs = storeDisplayDialog();
//     const digs2 = digs[digs.length-1];
//     // console.log("digsdigsdigs: ", digs2);
//     document.body.appendChild(digs2);
//     digs2.showModal();  
// } )

addProjectButton.addEventListener("click", () => {

    // const { createProjectDivOnAddBtn } =
    const projectHeadingDialog = createProjectHeadingDivAndDialog(); 
    document.body.appendChild(projectHeadingDialog);
    projectHeadingDialog.showModal();
    const { projectDiv } = createProjectDivOnAddBtn();
    // todoListPaneContainer.appendChild(projectDiv);
    todoListPaneContainer.replaceChildren(projectDiv);
    
    // const tLPContainer = projDiv.todoListPaneContainerDiv

})

