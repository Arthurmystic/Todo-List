import { createFormFields } from "./createFormElements.js";
import { createDialogs, storeProjectInfo } from "./createDialogs.js";

(function defaultProject() {
    const { projectTitleDiv, projectDiv, todoListPane, todoListPaneContainerDiv,
        addNoteButtonToTodoListPane, editProjectNameBtn, delProjectBtn,
        quickDetailsDiv, quickActionDiv } = createFormFields();

    quickDetailsDiv.innerText = "Default Project";

    quickActionDiv.appendChild(editProjectNameBtn);
    quickActionDiv.appendChild(delProjectBtn);
    editProjectNameBtn.classList.add("default");
    delProjectBtn.classList.add("default");

    projectTitleDiv.appendChild(quickDetailsDiv);
    projectTitleDiv.appendChild(quickActionDiv);
    projectsPane.appendChild(projectTitleDiv);

    const dataAttr = crypto.randomUUID();
    generateProject(todoListPane, projectDiv, projectTitleDiv, todoListPaneContainerDiv,
        addNoteButtonToTodoListPane, dataAttr);
    todoListPaneContainer.replaceChildren(projectDiv);

    return { projectTitleDiv };
})();

function generateProject(todoListPane, projectDiv, projectTitleDiv, todoListPaneContainerDiv,
    addNoteButtonToTodoListPane, dataAttr) {

    projectDiv.dataset.ref = dataAttr; // assigning data-ref to projectDiv

    projectTitleDiv.dataset.ref = dataAttr;

    projectTitleDiv.querySelectorAll("*").forEach(child => {
        child.dataset.ref = dataAttr; // assign data-ref to children and grandchildren of projectTitleDiv 
    });

    todoListPaneContainerDiv.dataset.ref = dataAttr;

    todoListButton.replaceChildren(addNoteButtonToTodoListPane);
    projectDiv.appendChild(todoListPane);


    // Event Listeners
    addNoteButtonToTodoListPane.addEventListener("click", () => {
        const { editableDialog } = createDialogs(todoListPane);
        document.body.appendChild(editableDialog);
        editableDialog.showModal();
    });

    projectTitleDiv.addEventListener("click", (e) => {
        document.querySelectorAll(".projectTitleDiv.selected").forEach(div => {
            div.classList.remove("selected")// Remove 'selected' from all projectTitleDivs
        })
        projectTitleDiv.classList.add("selected"); // and add selected to classlist selected div if it isnt there

        todoListPaneContainer.replaceChildren(projectDiv);
        todoListButton.replaceChildren(addNoteButtonToTodoListPane);
    })

    const projectInfo = {
        currDiv: projectDiv,
        projectTitleDiv,
        dataRef: dataAttr,
        btn: addNoteButtonToTodoListPane,
    };

    storeProjectInfo(projectInfo)
}

export { generateProject }