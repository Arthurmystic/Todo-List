// eventHandlers.js

import { parseISO, format } from "date-fns";
import { changeLeftRightBorderColor, setActiveClass } from "./universalFunctions.js";
import { createEditableTodoDialogs, createReadOnlyDialog, createProjectTitleDialog, renderProjectTitle } from "./dialogFactory.js";
import { generateProject } from "./createProject.js"
import { storeProjectInfo, storeEditableDialog, storeReadOnlyDialog } from "./pageLoad.js";
import { renderTodoPreview } from "./dialogProcessor.js";

// PROJECT RELATED

// Opens the dialog to create a new project.
function handleProjectForm(e, dataAttr, inEditingMode) {
    // event.preventDefault(); no need since method was set to dialog so it acts accordingly
    const currProjectTitleDialog = e.target.closest("dialog");
    const currProjectTitleForm = currProjectTitleDialog.querySelector("form");
    const projectName = currProjectTitleForm.elements["project-Name"].value;
    let quickDetailsDiv; let projectTitleDiv;

    if (inEditingMode) {
        projectTitleDiv = document.querySelector(`.projectTitleDiv[data-ref="${dataAttr}"]`); // can also find it from storeProjectInfo();
        quickDetailsDiv = projectTitleDiv.querySelector(".quickDetailsDiv");
        inEditingMode = false; // Getting out of editing mode

    } else {
        ({ projectTitleDiv, quickDetailsDiv } = renderProjectTitle());
        projectsPane.appendChild(projectTitleDiv);
        generateProject(projectTitleDiv, dataAttr);
        setActiveClass("projectTitleDiv", projectTitleDiv);
        inEditingMode = false; // Getting out of editing mode
    }
    quickDetailsDiv.innerText = projectName;
}

// Opens the dialog to edit an existing project.
function handleAddProject() {
    const { projectHeadingDialog } = createProjectTitleDialog();
    document.body.appendChild(projectHeadingDialog);
    projectHeadingDialog.showModal();
}

// Submits project data (new or edited).
function handleEditProjectName(dataAttr) {
    const projectTitleDiv = document.querySelector(`.projectTitleDiv[data-ref="${dataAttr}"]`); // can also find it from storeProjectInfo();
    const currProjectHeadingDialog = document.querySelector(`.projectHeadingDialog[data-ref="${dataAttr}"]`)
    setActiveClass("projectTitleDiv", projectTitleDiv);
    currProjectHeadingDialog.showModal();
}

// Cancels the save and closes the dialog.
function handleCancelSaveProject(e) {
    const currProjectTitleDialog = e.target.closest("dialog");
    currProjectTitleDialog.close()
}

// Deletes the current project, its name and switches to the previous one.
function handleDeleteProject(e, dataAttr) {
    const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef === dataAttr);
    const currProjectDiv = storeProjectInfo()[idx].currDiv;
    const currTodoListAddBtn = storeProjectInfo()[idx].btn
    const currProjectTitleDiv = storeProjectInfo()[idx].projectTitleDiv;
    const prevProjTitlDiv = storeProjectInfo()[idx - 1].projectTitleDiv;

    // ** below makes currDiv and its btn present to the dom, in case user didnt first select them.
    // useful if user, while on a different projectTitleDiff, deletes another projectTitleDiv
    // without selecting it first.
    todoListPaneContainer.replaceChildren(currProjectDiv); // **
    todoListButtonDiv.replaceChildren(currTodoListAddBtn); // **

    todoListPaneContainer.removeChild(currProjectDiv);
    todoListButtonDiv.removeChild(currTodoListAddBtn);

    storeProjectInfo().splice(idx, 1);
    projectsPane.removeChild(currProjectTitleDiv);

    // triggering click to previous project
    prevProjTitlDiv.click();
}

// Handles switching between projects (whether by click or custom event) and updates the UI to reflect the selected project..
function selectProjectOnClick(e, dataAttr, delTriggered) { // 
    // const titleDiv = e.target;
    const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef === dataAttr);
    const selectedProjectTitleDiv = storeProjectInfo()[idx].projectTitleDiv;
    const correspondingProjectDiv = storeProjectInfo()[idx].currDiv;
    const correspondingaddNoteBtn = storeProjectInfo()[idx].btn;

    if (!delTriggered) {
        setActiveClass("projectTitleDiv", selectedProjectTitleDiv);
        todoListPaneContainer.replaceChildren(correspondingProjectDiv);
        todoListButtonDiv.replaceChildren(correspondingaddNoteBtn);
    };
    delTriggered = false;
}

//TODO NOTE REALTED

// Opens dialog to add a new todo.
function handleAddNote() {
    const currProjectDiv = todoListPaneContainer.querySelector(".projectDiv")
    const { editableDialog } = createEditableTodoDialogs(currProjectDiv);
    document.body.appendChild(editableDialog);
    editableDialog.showModal();
}

// Handles the submission of an editable todo form (both add and edit).
function handleEditableNoteForm(e, dataAttr, inEditingMode) {
    // e.preventDefault();
    const currEditableDialog = e.target.closest("dialog");
    const currProjectDiv = document.querySelector(".projectDiv");
    const currEditableForm = currEditableDialog.querySelector("form");
    
    if (!inEditingMode) {
        storeEditableDialog(currEditableDialog);
        const { titleValue, notesValue, priorityListValue, dueDateValue } = createReadOnlyDialog(currEditableForm, dataAttr);
        renderTodoPreview(currProjectDiv, titleValue, notesValue, priorityListValue, dueDateValue, dataAttr);

    } else { // in editing mode
        // get updated values on pressing confirm in editable dialog.
        const index1 = storeReadOnlyDialog().findIndex(dialogBox => dialogBox.dataset.ref === dataAttr);
        const readOnlyDialog = storeReadOnlyDialog()[index1];
        const currProjectDiv = document.querySelector(".projectDiv");

        const todoPreviewDivUpdate = currProjectDiv.querySelector(`.todoPreviewDiv[data-ref = "${dataAttr}"]`);
        const updatedReadOnlyFormDiv = readOnlyDialog.querySelector("div");
        const updatedTitle = currEditableDialog.querySelector("form").elements["todo-title"].value;

        const rawDueDateValue = currEditableDialog.querySelector("form").elements["todo-dueDate"].value; // in format yyyy-mm-dd (default format)  
        const updatedDueDate = rawDueDateValue ? format(rawDueDateValue, "MMMM d, yyyy") : '';

        const updatedNotes = currEditableDialog.querySelector("form").elements["todo-notes"].value;
        const updatedPriorityValue = currEditableDialog.querySelector("form").elements["priorityList"].value;

        changeLeftRightBorderColor(todoPreviewDivUpdate, updatedPriorityValue); // update border color

        // update values in the readOnlyDialog
        const dialogCheckboxInput = todoPreviewDivUpdate.querySelector("input[type = 'checkbox']");
        const dialogCheckboxLabel = todoPreviewDivUpdate.querySelector(`label[for = '${dialogCheckboxInput.id}']`);
        const dialogDueDateDiv = todoPreviewDivUpdate.querySelector(".duedateDiv");

        dialogCheckboxLabel.innerText = updatedTitle;
        dialogDueDateDiv.innerText = `${updatedDueDate}`;

        updatedReadOnlyFormDiv.innerHTML = `
                        <strong>Title: </strong>   ${updatedTitle}<br> <br>
                        <strong>Notes: </strong>   ${updatedNotes}<br> <br>
                        <strong>Due Date: </strong> ${updatedDueDate}<br> <br>
                        <strong>Priority: </strong> ${updatedPriorityValue}
                        `
        inEditingMode = false; // switch back to non-editing mode
    }
}

// Opens the dialog for editing an existing todo.
function handleEditNote(dataAttr) {
    const idx = storeEditableDialog().findIndex(dialogBox => dialogBox.dataset.ref === dataAttr);
    const editableDialog = storeEditableDialog()[idx];
    editableDialog.showModal(); // show editable dialog for editing.
}

// Opens the read-only dialog for a todo.
function handleViewNote(dataAttr) {
    const displayDialogArray = storeReadOnlyDialog() // get the array containing readOnlyDialog
        .filter((arr) => arr.dataset.ref === dataAttr); // filter out the array whose data-ref == datasetAttr
    document.body.appendChild(displayDialogArray[0]);
    displayDialogArray[0].showModal();
}

// Deletes a todo and removes it from the UI and data stores.
function handleDeleteNote(dataAttr) {
    deleteElem(dataAttr, storeEditableDialog());
    deleteElem(dataAttr, storeReadOnlyDialog());
    const currProjectDiv = todoListPaneContainer.querySelector(".projectDiv");
    const previewDivsList = document.querySelectorAll(".todoPreviewDiv");
    const selectedPreviewDiv = Array.from(previewDivsList)
        .filter(div => div.dataset.ref === dataAttr)[0];
    currProjectDiv.removeChild(selectedPreviewDiv);
}

// Utility to remove a dialog from a given store by data-ref
function deleteElem(dataAttr, dialogStore) {
    const index = dialogStore.findIndex(arr => arr.dataset.ref === dataAttr); // find index in dialogstore array for arg whose data-ref == dataAttr
    dialogStore.splice(index, 1); // go to index, and delete 1 item from there.
}

// GENERIC

// Closes any dialog when the "X" is clicked.
function handleCloseDialog(e) {
    const dialog = e.target.closest("dialog");
    dialog.close()
}

export { handleAddProject, handleAddNote, handleViewNote, handleEditNote, handleDeleteNote, handleCloseDialog,
         handleEditableNoteForm, selectProjectOnClick, handleProjectForm, handleEditProjectName, handleCancelSaveProject,
         handleDeleteProject };