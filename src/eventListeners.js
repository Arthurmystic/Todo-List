// eventListeners.js

import { storeInLocalStorage } from "./localStorageHandler.js";
import { handleAddProject, handleAddNote, handleViewNote, handleEditNote, handleDeleteNote, handleCloseDialog,
         handleEditableNoteForm, selectProjectOnClick, handleProjectForm, handleEditProjectName, handleCancelSaveProject,
         handleDeleteProject, handleCheckBox 
        } from "./eventHandlers.js";

let inEditingMode = false;

function setupEventListeners() {
    const handlers = {
        // TODO NOTES
        addNote: () => { inEditingMode = false; handleAddNote() },
        viewNote: (state) => handleViewNote(state.dataAttr),
        editNote: (state) => { handleEditNote(state.dataAttr); inEditingMode = true; },
        deleteNote: (state) => handleDeleteNote(state.dataAttr),
        toggleCheckbox: (state) => handleCheckBox(state.dataAttr),

        // PROJECTS
        addProject: () => { inEditingMode = false; handleAddProject() },
        editProjectName: (state) => { inEditingMode = true; handleEditProjectName(state.dataAttr) },
        selectProjectTitleDiv: (state) => selectProjectOnClick(state.e, state.dataAttr),
        deleteProject: (state) => handleDeleteProject(state.e, state.dataAttr),
        cancelSaveProject: (state) => handleCancelSaveProject(state.e),

        // FORMS
        editableNoteForm: (state) => handleEditableNoteForm(state.e, state.dataAttr, inEditingMode),  // handles what happens after submit form
        projectTitleForm: (state) => handleProjectForm(state.e, state.dataAttr, inEditingMode),

        // GENERIC
        closeDialog: (state) => handleCloseDialog(state.e),
    }

    document.addEventListener("click", (e) => {
        // const action = e.target.dataset.action; 
        const actionElement = e.target.closest("[data-action]"); // closest is for an element
        const action = actionElement ? actionElement.dataset.action : null;
        const dataAttr = e.target.dataset.ref;
        if (action && !action.includes("Form")) handlers[action]({e, dataAttr});
        if (action === "deleteNote" || action === "deleteProject" ) storeInLocalStorage();
    })

    document.addEventListener("submit", (e) => {
        // const form = e.target.form; // not as effective, if target is not on form yet intention is form
        const form = e.target.closest("form");
        const action = form ? form.dataset.action : null;
        const dataAttr = e.target.dataset.ref;
        if (action && action.includes("Form")) handlers[action]({e, dataAttr});
        // NB: Reset form is intrinsically implemented since 'clear' button type was set to`reset` - no need for event listeners for it.
        // NB: Much as submit is handled intrinsically (since button type for save/confirm is submit), the event listener for it is required 
        // so as to process the form after submission. No processing is required for reset/clear hence no need to listen for it.
        storeInLocalStorage();
    })

    document.addEventListener("change", (e) => {
        const type = e.target.type;
        const dataAttr = e.target.dataset.ref;
        if (type === "checkbox") handlers["toggleCheckbox"]({dataAttr}); 
        storeInLocalStorage();
    })
}

export { setupEventListeners };