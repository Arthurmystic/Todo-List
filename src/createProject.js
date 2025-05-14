import { createFormFields } from "./createFormElements.js";
import { createDialogs } from "./createDialogs.js";
import { storeData } from "./universalFunctions.js";

const storeProjectInfo = storeData(); // store project divs

(function defaultProject() {
    const { projectTitleDiv, projectDiv, todoListPane, todoListPaneContainerDiv, 
        addNoteButtonToTodoListPane, button } = createFormFields();
    projectTitleDiv.innerText = "Default Project";
    projectsPane.appendChild(projectTitleDiv);
    generateProject(todoListPane, projectDiv, projectTitleDiv, todoListPaneContainerDiv, addNoteButtonToTodoListPane)
    todoListPaneContainer.replaceChildren(projectDiv);
    return { projectTitleDiv }; 
})();

function generateProject(todoListPane, projectDiv, projectTitleDiv, todoListPaneContainerDiv, addNoteButtonToTodoListPane) {
    
    const dataAttr = crypto.randomUUID();
    projectDiv.dataset.ref = dataAttr; // assigning data-ref to projectDiv
    projectTitleDiv.dataset.ref = dataAttr;
    todoListPaneContainerDiv.dataset.ref = dataAttr;

    console.log(".... genereting 1", addNoteButtonToTodoListPane)
    projectDiv.appendChild(addNoteButtonToTodoListPane);
    projectDiv.appendChild(todoListPane);

    addNoteButtonToTodoListPane.addEventListener("click", () => {
        const { editableDialog } = createDialogs(todoListPane);
        document.body.appendChild(editableDialog);
        editableDialog.showModal();
    });

    const projectInfo = {
        div: projectDiv,
        divName: projectTitleDiv,
        dataRef: dataAttr,
    };

    storeProjectInfo(projectInfo)
}

// function createProjectDivOnAddBtn() {
//     const { projectHeadingDialog, projectTitleDiv } = createProjectHeadingDivAndDialog();
//     const { todoListPane, projectDiv, todoListPaneContainerDiv, addNoteButtonToTodoListPane } = createFormFields();

//     generateProject(todoListPane, projectDiv, projectTitleDiv, todoListPaneContainerDiv, addNoteButtonToTodoListPane)

//     return { storeProjectInfo, projectDiv, projectHeadingDialog, projectTitleDiv };
// }


export { storeProjectInfo, generateProject }