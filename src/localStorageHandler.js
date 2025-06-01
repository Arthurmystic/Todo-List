// localStorageHandlers.js

import { storeEditableDialog, storeReadOnlyDialog, storeProjectInfo } from "./pageLoad.js";
import { storeData } from "./universalFunctions.js";

function storeInLocalStorage() {
    let projectInfoStoreTemp = storeData();

    for (let arr of storeProjectInfo()) {
        const projInfoLS = {
            projectDivLS: arr.projectDiv.innerHTML,
            projectTitleDivLS: arr.projectTitleDiv.innerHTML,
            dataRefLS: arr.dataRef,
            addNoteBtnLS: arr.addNoteBtn.innerHTML,
        }
        projectInfoStoreTemp(projInfoLS);
    };
    const editableDialogsHTML = storeEditableDialog().map(dialog => dialog.innerHTML); // can also iterate as above
    const readOnlyDialogsHTML = storeReadOnlyDialog().map(dialog => dialog.innerHTML); 
    
    localStorage.setItem("projectInfoStoreLS", JSON.stringify(projectInfoStoreTemp()));
    localStorage.setItem("editableDialogStoreLS", JSON.stringify(editableDialogsHTML));
    localStorage.setItem("readOnlyDiagStoreLS", JSON.stringify(readOnlyDialogsHTML));
};

const getFromLocalStorage = (key) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
};   

const getProjectInfo = () => getFromLocalStorage("projectInfoStoreLS");
const getEditableDialogs = () => getFromLocalStorage("editableDialogStoreLS");
const getReadOnlyDialogs = () => getFromLocalStorage("readOnlyDiagStoreLS");

export { storeInLocalStorage, getProjectInfo, getEditableDialogs, getReadOnlyDialogs }