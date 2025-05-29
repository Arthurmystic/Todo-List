// createProject.js

import { domElements } from "./DOM-Elements.js";
import { createFormFields } from "./createFormElements.js";
import { storeProjectInfo } from "./pageLoad.js";
import { setActiveClass } from "./universalFunctions.js"

const {  todoListPaneContainer } = domElements;

(function defaultProject() {
    const { projectTitleDiv, editProjectNameBtn, delProjectBtn, quickDetailsDiv, quickActionDiv } = createFormFields();
    const dataAttr = crypto.randomUUID();

    quickActionDiv.dataset.action = "selectProjectTitleDiv";
    quickDetailsDiv.dataset.action = "selectProjectTitleDiv";
    quickDetailsDiv.innerText = "Default Project";

    quickActionDiv.appendChild(editProjectNameBtn);
    quickActionDiv.appendChild(delProjectBtn);
    editProjectNameBtn.classList.add("default");
    delProjectBtn.classList.add("default");

    projectTitleDiv.appendChild(quickDetailsDiv);
    projectTitleDiv.appendChild(quickActionDiv);
    projectsPane.appendChild(projectTitleDiv);

    setActiveClass("projectTitleDiv", projectTitleDiv);
    generateProject(projectTitleDiv, dataAttr);

    return { projectTitleDiv };
})();

function generateProject(projectTitleDiv, dataAttr) {
    const { projectDiv, addNoteButtonToTodoListPane, todoListPaneContainerDiv } = createFormFields();

    projectDiv.dataset.ref = dataAttr; // assigning data-ref to projectDiv
    projectTitleDiv.dataset.ref = dataAttr;

    projectTitleDiv.querySelectorAll("*").forEach(child => {
        child.dataset.ref = dataAttr; // assign data-ref to children and grandchildren of projectTitleDiv 
    });

    todoListPaneContainerDiv.dataset.ref = dataAttr;
    todoListButtonDiv.replaceChildren(addNoteButtonToTodoListPane);
    todoListPaneContainer.replaceChildren(projectDiv); 

    const projectInfo = {
        currDiv: projectDiv, // this contains the to dos of a given project. todoPreview is stored in projectDiv
        projectTitleDiv,     // this contains the title of the project
        dataRef: dataAttr, // data-ref for both projectDiv and projectTitle. elements inside projectDiv also have their own unique but simila data-ref
        btn: addNoteButtonToTodoListPane, // this contains the "addNote btn "of the project"
    };
    storeProjectInfo(projectInfo)
}

export { generateProject }
