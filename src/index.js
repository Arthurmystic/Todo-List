// index.js

import "./styles.css";
import { createFormFields } from "./createFormElements.js";
import { createProjectHeadingDivAndDialog } from "./createDialogs.js"
import { storeProjectInfo, generateProject } from "./createProject.js"

addProjectButton.addEventListener("click", () => {

    document.querySelectorAll(".projectTitleDiv.selected").forEach(div=>{
        div.classList.remove("selected")// Remove any 'selected' from all projectTitleDivs
    })

    const { projectHeadingDialog, projectTitleDiv } = createProjectHeadingDivAndDialog();
    const { todoListPane, projectDiv, todoListPaneContainerDiv, addNoteButtonToTodoListPane, quickDetailsDiv, quickActionDiv } = createFormFields();
    
    generateProject(todoListPane, projectDiv, projectTitleDiv, todoListPaneContainerDiv, 
        addNoteButtonToTodoListPane)
    document.body.appendChild(projectHeadingDialog);
    projectHeadingDialog.showModal();
    projectTitleDiv.classList.add("selected"); // add selected to classlist 
    todoListPaneContainer.replaceChildren(projectDiv);
})

projectsPane.addEventListener("click", (e) => {
    if (e.target.dataset.ref) {
        
        document.querySelectorAll(".projectTitleDiv.selected").forEach(div=>{
            div.classList.remove("selected")// Remove 'selected' from all projectTitleDivs
        })

        const val = e.target.dataset.ref;
        const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef === val);
        // const currProjectDiv = storeProjectInfo()[idx].div;

        const { currDiv, projectTitleDiv } = storeProjectInfo()[idx];

        projectTitleDiv.classList.add("selected"); // and add selected to classlist seleected div if it isnt there
        
        todoListPaneContainer.replaceChildren(currDiv);
        
        const addTodoButton = storeProjectInfo()[idx].btn;
        todoListButton.replaceChildren(addTodoButton);
    };
})