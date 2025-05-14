// index.js

import "./styles.css";
import { createFormFields } from "./createFormElements.js";
import { createProjectHeadingDivAndDialog } from "./createDialogs.js"
import { storeProjectInfo, generateProject } from "./createProject.js"


addProjectButton.addEventListener("click", () => {

    const { projectHeadingDialog, projectTitleDiv } = createProjectHeadingDivAndDialog();
    const { todoListPane, projectDiv, todoListPaneContainerDiv, addNoteButtonToTodoListPane } = createFormFields();
    
    generateProject(todoListPane, projectDiv, projectTitleDiv, todoListPaneContainerDiv, addNoteButtonToTodoListPane)

    document.body.appendChild(projectHeadingDialog);
    projectHeadingDialog.showModal();
    todoListPaneContainer.replaceChildren(projectDiv);
})

projectsPane.addEventListener("click", (e) => {
    if (e.target.dataset.ref) {
        const val = e.target.dataset.ref;
        const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef == val);
        const currProjectDiv = storeProjectInfo()[idx].div;
        todoListPaneContainer.replaceChildren(currProjectDiv);

        const addTodoButton = storeProjectInfo()[idx].btn;
        todoListButton.replaceChildren(addTodoButton);

    };
})
// const val = e.target.dataset.ref;
// const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef == val);
// const currProjectDiv = storeProjectInfo()[idx].div;
// const addTodoButton = storeProjectInfo()[idx].button;
// todoListPaneContainer.replaceChildren(currProjectDiv);
// todoListButton.replaceChildren(addTodoButton);