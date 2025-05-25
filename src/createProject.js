import { createFormFields } from "./createFormElements.js";
// import { createDialogs, storeProjectInfo } from "./createDialogs.js";
import { createDialogs } from "./createDialogs.js";
import { storeProjectInfo } from "./pageLoad.js";

let delTriggered = false;

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
    
    console.log(projectDiv)

    const projectInfo = {
        currDiv: projectDiv,
        projectTitleDiv,
        dataRef: dataAttr,
        btn: addNoteButtonToTodoListPane,
        todoListPane,
    };

    storeProjectInfo(projectInfo)

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

    // delTriggered prevents this event listener from running twice
    // esp wen delbtn is pressed. ;
    projectTitleDiv.addEventListener("switch-to-prevProjTitlDiv", () => { // triggereed if delbtn. switches to a prevProjTitlDiv
        delTriggered = true;
        handleProjectSelection();

    });

    projectTitleDiv.addEventListener("click", () => { // triggered by directly clicking on a ProjTitlDiv to switch to that project
        if (!delTriggered) {
            handleProjectSelection();
        };
        delTriggered = false;
    });

    addNoteButtonToTodoListPane.addEventListener("click", () => {
        const { editableDialog } = createDialogs(todoListPane);
        document.body.appendChild(editableDialog);
        editableDialog.showModal();
    });

    // console.log(projectDiv.innerHTML);



    const projectInfo = {
        currDiv: projectDiv, // this contains the to dos of a given project. todoPreview is stored in todoListPane which is stored in projectDiv
        projectTitleDiv,     // this contains the title of the project
        dataRef: dataAttr,
        btn: addNoteButtonToTodoListPane, // this contains the "add to do btn "of the project
        todoListPane,
    };

    storeProjectInfo(projectInfo)

    function handleProjectSelection() {
        document.querySelectorAll(".projectTitleDiv.selected").forEach(div => {
            div.classList.remove("selected")// Remove 'selected' from all projectTitleDivs
        })
        projectTitleDiv.classList.add("selected"); // and add selected to classlist selected div if it isnt there

        todoListPaneContainer.replaceChildren(projectDiv);
        todoListButton.replaceChildren(addNoteButtonToTodoListPane);
    }
}

export { generateProject }