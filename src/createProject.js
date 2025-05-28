// createProject.js

import { createFormFields } from "./createFormElements.js";
// import { createEditableTodoDialogs, storeProjectInfo } from "./dialogFactory.js";
import { createEditableTodoDialogs } from "./dialogFactory.js";
import { storeProjectInfo } from "./pageLoad.js";
import { setActiveClass } from "./universalFunctions.js"

// let delTriggered = false;

(function defaultProject() {
    const { projectTitleDiv, editProjectNameBtn, delProjectBtn, quickDetailsDiv, quickActionDiv } = createFormFields();

    quickActionDiv.dataset.action = "selectProjectTitleDiv";
    quickDetailsDiv.dataset.action = "selectProjectTitleDiv";
    // editProjectNameBtn.dataset.action = "selectProjectTitleDiv";
    // delProjectBtn.dataset.action = "selectProjectTitleDiv";
    quickDetailsDiv.innerText = "Default Project";

    quickActionDiv.appendChild(editProjectNameBtn);
    quickActionDiv.appendChild(delProjectBtn);
    editProjectNameBtn.classList.add("default");
    delProjectBtn.classList.add("default");

    projectTitleDiv.appendChild(quickDetailsDiv);
    projectTitleDiv.appendChild(quickActionDiv);
    projectsPane.appendChild(projectTitleDiv);

    const dataAttr = crypto.randomUUID();

    setActiveClass("projectTitleDiv", projectTitleDiv);

    generateProject(projectTitleDiv, dataAttr);
    // todoListPaneContainer.replaceChildren(projectDiv);

    // console.log(projectDiv)

    // const projectInfo = {
    //     currDiv: projectDiv,
    //     projectTitleDiv,
    //     dataRef: dataAttr,
    //     btn: addNoteButtonToTodoListPane,
    // };

    // storeProjectInfo(projectInfo)

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
    // projectDiv.appendChild(todoListPane);

    todoListPaneContainer.replaceChildren(projectDiv);
    // Event Listeners

    // delTriggered prevents this event listener from running twice
    // esp wen delbtn is pressed. ;
    projectTitleDiv.addEventListener("switch-to-prevProjTitlDiv", () => { // triggereed if delbtn. switches to a prevProjTitlDiv
        delTriggered = true;
        handleProjectSelection();

    });

    // projectTitleDiv.addEventListener("click", () => { // triggered by directly clicking on a ProjTitlDiv to switch to that project
    //     if (!delTriggered) {
    //         handleProjectSelection();
    //     };
    //     delTriggered = false;
    // });

    function handleProjectSelection() {
        
        setActiveClass("projectTitleDiv", projectTitleDiv);

        todoListPaneContainer.replaceChildren(projectDiv);
        todoListButtonDiv.replaceChildren(addNoteButtonToTodoListPane);
    }

    const projectInfo = {
        currDiv: projectDiv, // this contains the to dos of a given project. todoPreview is stored in todoListPane which is stored in projectDiv
        projectTitleDiv,     // this contains the title of the project
        dataRef: dataAttr,
        btn: addNoteButtonToTodoListPane, // this contains the "add to do btn "of the project/
    };
    console.log('creatteee pjt:  ', dataAttr)

    storeProjectInfo(projectInfo)


}

export { generateProject }
