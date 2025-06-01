// createProject.js

import { domElements } from "./DOM-Elements.js";
import { createFormFields } from "./createFormElements.js";
import { storeProjectInfo } from "./pageLoad.js";

const { todoListPaneContainer } = domElements;

function generateProject(projectTitleDiv, dataAttr) {
    const { projectDiv, addNoteButtonToTodoListPane } = createFormFields();

    projectDiv.dataset.ref = dataAttr; // assigning data-ref to projectDiv
    projectTitleDiv.dataset.ref = dataAttr;
    addNoteButtonToTodoListPane.dataset.ref = dataAttr;

    projectTitleDiv.querySelectorAll("*").forEach(child => {
        child.dataset.ref = dataAttr; // assign data-ref to children and grandchildren of projectTitleDiv 
    });

    todoListButtonDiv.replaceChildren(addNoteButtonToTodoListPane);
    todoListPaneContainer.replaceChildren(projectDiv);

    const projectInfo = {
        projectDiv, // this will contain the to dos of a given project. todoPreview is stored in projectDiv
        projectTitleDiv,     // this contains the title of the project
        dataRef: dataAttr, // data-ref for both projectDiv and projectTitle. elements inside projectDiv also have their own unique but simila data-ref
        addNoteBtn: addNoteButtonToTodoListPane, // this contains the "addNoteBtn "of the project"
    };
    storeProjectInfo(projectInfo);
}

export { generateProject }
