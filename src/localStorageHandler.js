// localStorageHandlers.js

import { storeEditableDialog, storeReadOnlyDialog, storeProjectInfo } from "./pageLoad.js";
import { storeData } from "./universalFunctions.js";

// Stores all current app state into localStorage
function storeInLocalStorage() {
     // Temporary in-memory storage for project info (using closure)
    let projectInfoStoreTemp = storeData();

    // Extract and serialize each project's relevant DOM data
    for (let arr of storeProjectInfo()) {
        const projInfoLS = {
            projectDivLS: arr.projectDiv.innerHTML,
            projectTitleDivLS: arr.projectTitleDiv.innerHTML,
            dataRefLS: arr.dataRef,
            addNoteBtnLS: arr.addNoteBtn.innerHTML,
        };
        projectInfoStoreTemp(projInfoLS); // Store this project snapshot
    };
    // Extract serialized HTML content of dialogs
    const editableDialogsHTML = storeEditableDialog().map(dialog => dialog.innerHTML); // can also iterate as above
    const readOnlyDialogsHTML = storeReadOnlyDialog().map(dialog => dialog.innerHTML); 
    
    // Save all extracted data to localStorage
    localStorage.setItem("projectInfoStoreLS", JSON.stringify(projectInfoStoreTemp()));
    localStorage.setItem("editableDialogStoreLS", JSON.stringify(editableDialogsHTML));
    localStorage.setItem("readOnlyDiagStoreLS", JSON.stringify(readOnlyDialogsHTML));
};

// Generic function to retrieve and parse data from localStorage.
const getFromLocalStorage = (key) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
};   

// Functions to retrieve stored project information, editable dialogs and readonly dialogs from localStorage.
const getProjectInfo = () => getFromLocalStorage("projectInfoStoreLS");
const getEditableDialogs = () => getFromLocalStorage("editableDialogStoreLS");
const getReadOnlyDialogs = () => getFromLocalStorage("readOnlyDiagStoreLS");

export { storeInLocalStorage, getProjectInfo, getEditableDialogs, getReadOnlyDialogs }