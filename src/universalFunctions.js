// universalFunctions.js

import { storeEditableDialog, storeDisplayDialog, storeProjectInfo } from "./createDialogs.js";

// Stores data in an array
function storeData() {
    const storageArr = [];
    return function dataStorage(data) {
        if (data !== undefined && !storageArr.includes(data)) storageArr.push(data); // store data if it is not already inside the storageArr
        return storageArr;
    }
};

// Change left and right borders depeneding on priority level
function changeLeftRightBorderColor(div, priority) {
    const priorities = {
        high: ["5px", " #D9534F"],
        medium: ["3px", " #5CB85C"],
        low: ["2px", " #F0AD4E"],
    };
    div.style.cssText = `border-left: ${priorities[priority][0]} solid ${priorities[priority][1]};
                     border-right: ${priorities[priority][0]} solid ${priorities[priority][1]}`;
}

// stores to local storage
function storeInLocalStorage() {
    if(storeProjectInfo) localStorage.setItem("storeProjectInfoLS", JSON.stringify(storeProjectInfo));
    if (storeDisplayDialog) localStorage.setItem("storeDisplayDialogLS", JSON.stringify(storeDisplayDialog));
    if (storeEditableDialog) localStorage.setItem("storeEditableDialogLS", JSON.stringify(storeEditableDialog));
}

export { storeData, changeLeftRightBorderColor, storeInLocalStorage }