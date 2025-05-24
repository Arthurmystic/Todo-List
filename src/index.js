// index.js

import "./styles.css";
import { createFormFields } from "./createFormElements.js";
import { createProjectHeadingDivAndDialog } from "./createDialogs.js"
import { generateProject } from "./createProject.js"
import { storeInLocalStorage } from "./universalFunctions.js"

addProjectButton.addEventListener("click", () => {
    document.querySelectorAll(".projectTitleDiv.selected").forEach(div => {
        div.classList.remove("selected")// Remove any 'selected' from all projectTitleDivs
    });

    const { projectHeadingDialog, projectTitleDiv, dataAttr } = createProjectHeadingDivAndDialog();
    const { todoListPane, projectDiv, todoListPaneContainerDiv, addNoteButtonToTodoListPane } = createFormFields();
    generateProject(todoListPane, projectDiv, projectTitleDiv, todoListPaneContainerDiv,
        addNoteButtonToTodoListPane, dataAttr);
    document.body.appendChild(projectHeadingDialog);
    projectHeadingDialog.showModal();
    projectTitleDiv.classList.add("selected"); // add selected to classlist 
    todoListPaneContainer.replaceChildren(projectDiv);
})


document.body.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        console.log("buttonsbuttonsbuttonsbuttons");
        storeInLocalStorage();
    };
});

document.body.addEventListener("submit", (e) => {
    if (e.target.tagName === "FORM") {
        console.log("formsformsformsformsforms");
        storeInLocalStorage();
    }
});