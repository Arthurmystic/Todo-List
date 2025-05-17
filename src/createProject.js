import { createFormFields } from "./createFormElements.js";
import { createDialogs } from "./createDialogs.js";
import { storeData } from "./universalFunctions.js";

const storeProjectInfo = storeData(); // store project divs
// const storeProjectInfo = [];

(function defaultProject() {
    const { projectTitleDiv, projectDiv, todoListPane, todoListPaneContainerDiv,
        addNoteButtonToTodoListPane, editProjectNameBtn, delProjectBtn,
        quickDetailsDiv, quickActionDiv } = createFormFields();

    quickDetailsDiv.innerText = "Default Project";

    quickActionDiv.appendChild(editProjectNameBtn);
    quickActionDiv.appendChild(delProjectBtn);

    projectTitleDiv.appendChild(quickDetailsDiv); 
    projectTitleDiv.appendChild(quickActionDiv);

    projectsPane.appendChild(projectTitleDiv);
    generateProject(todoListPane, projectDiv, projectTitleDiv, todoListPaneContainerDiv, 
        addNoteButtonToTodoListPane);
    todoListPaneContainer.replaceChildren(projectDiv);

    return { projectTitleDiv };
})();

function generateProject(todoListPane, projectDiv, projectTitleDiv, todoListPaneContainerDiv, 
    addNoteButtonToTodoListPane) {

    const dataAttr = crypto.randomUUID();
    projectDiv.dataset.ref = dataAttr; // assigning data-ref to projectDiv

    projectTitleDiv.dataset.ref = dataAttr;

    projectTitleDiv.querySelectorAll("*").forEach(child => {
        child.dataset.ref = dataAttr; // assign data-ref to children and grandchildren of projectTitleDiv 
    })

    todoListPaneContainerDiv.dataset.ref = dataAttr;

    todoListButton.replaceChildren(addNoteButtonToTodoListPane);
    projectDiv.appendChild(todoListPane);

    addNoteButtonToTodoListPane.addEventListener("click", () => {
        const { editableDialog } = createDialogs(todoListPane);
        document.body.appendChild(editableDialog);
        editableDialog.showModal();
    });

    const projectInfo = {
        currDiv: projectDiv,
        projectTitleDiv,
        dataRef: dataAttr,
        btn: addNoteButtonToTodoListPane,
    };

    storeProjectInfo(projectInfo)
    // storeProjectInfo.push(projectInfo)
}

export { storeProjectInfo, generateProject }