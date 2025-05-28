// eventListeners.js

import { createFormFields } from "./createFormElements.js";
import { createProjectHeadingDivAndDialog } from "./dialogFactory.js"
import { generateProject } from "./createProject.js"
import {
    handleAddProject, handleAddNote, handleViewNote, handleEditNote, handleDeleteNote, deleteElem, handleCloseDialog,
    handleEditableNoteForm, selectProjectOnClick, handleProjectForm, handleEditProjectName, handleCancelSaveProject,
    handleDeleteProject
} from "./eventListeners.js";

let inEditingMode = false;
let delTriggered = false;

function setupEventListeners() {
    const handlers = {
        // on screen todo Note
        "addNote": () => { inEditingMode = false; handleAddNote() },   // *** DONE *** //

        "viewNote": (e, dataAttr) => handleViewNote(dataAttr),  // *** DONE *** //

        "editNote": (e, dataAttr) => { handleEditNote(dataAttr); inEditingMode = true; }, // *** DONE *** //

        "deleteNote": (e, dataAttr) => handleDeleteNote(dataAttr),  // *** DONE *** //

        // project
        "addProject": () => { inEditingMode = false;   handleAddProject() }, // *** DONE *** //
        
        "editProjectName": (e, dataAttr) => { inEditingMode = true; handleEditProjectName(e, dataAttr) }, // *** DONE *** //

        "selectProjectTitleDiv": (e, dataAttr) => selectProjectOnClick(e, dataAttr, delTriggered), // *** DONE *** //

        "deleteProject": (e, dataAttr) => handleDeleteProject(e, dataAttr), // *** DONE *** //

        "resetForm": (ref) => handleClearForm(), // *** DONE *** //

        "cancelSaveProject": (e) => handleCancelSaveProject(e),  // *** DONE *** //

        // forms
        "editableNoteForm": (e, dataAttr) => handleEditableNoteForm(e, dataAttr, inEditingMode),  // *** DONE *** // handles save / confirm by default as a form eleement
        
        "projectTitleForm": (e, dataAttr) => handleProjectForm(e, dataAttr, inEditingMode), // *** DONE *** //

        // generic
        "closeDialog": (e) => handleCloseDialog(e), // *** DONE *** //
    }

    document.addEventListener("click", (e) => {
        // const action = e.target.dataset.action;
        const actionElement = e.target.closest("[data-action]"); // closest is for an element
        const action = actionElement ? actionElement.dataset.action : null;

        const dataAttr = e.target.dataset.ref;
        console.log("action: ", dataAttr)
        console.log ("11111111111: ", dataAttr)
        if (action && !action.includes("Form")) handlers[action](e, dataAttr, action);
    })

    document.addEventListener("submit", (e) => { // mayremove
        const form = e.target.closest("form");
        // const dialog = e.target.closest("dialog");
        // const form = e.target.form;
        // const action = e.target.closest("dataAction");
        // const action = form.querySelector("[data-action]").value;
        const action = form.dataset.action;
        const dataAttr = e.target.dataset.ref;
        console.log("submitted: ", dataAttr)

        if (action && action.includes("Form")) handlers[action](e, dataAttr, action);
    })
}

export { setupEventListeners };