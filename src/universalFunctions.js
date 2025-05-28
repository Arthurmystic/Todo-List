// universalFunctions.js

import { storeEditableDialog, storeReadOnlyDialog, storeProjectInfo } from "./dialogFactory.js";

// Stores data in an array
function storeData() {
    const storageArr = [];
    return function dataStorage(data) {
        if (data !== undefined && !storageArr.includes(data)) storageArr.push(data); // store data if it is not already inside the storageArr
        return storageArr;
    }
};

function setActiveClass(className, div) {
    document.querySelectorAll(`.${className}.selected`).forEach(div => {
        div.classList.remove("selected")// Remove 'selected' from all divs
    })
    div.classList.add("selected"); // and add selected to classlist selected div if it isnt there
}

// Change left and right borders depeneding on priority level
function changeLeftRightBorderColor(div, priority) {
    const priorities = {
        High: ["5px", " #D9534F"],
        Medium: ["3px", " #5CB85C"],
        Low: ["2px", " #F0AD4E"],
    };
    div.style.cssText = `border-left: ${priorities[priority][0]} solid ${priorities[priority][1]};
                     border-right: ${priorities[priority][0]} solid ${priorities[priority][1]}`;
}

// function createStorageArrays() {
//     const storeEditableDialog = storeData();
//     const storeReadOnlyDialog = storeData();
//     const storeProjectInfo = storeData(); // for storing project divs
//     return { storeEditableDialog, storeReadOnlyDialog, storeProjectInfo};
// }

// stores to local storage
// function storeInLocalStorage() {
//     if (storeProjectInfo) localStorage.setItem("storeProjectInfoLS", JSON.stringify(storeProjectInfo));
//     if (storeReadOnlyDialog) localStorage.setItem("storeProjectInfoLS", JSON.stringify(storeReadOnlyDialog));
//     if (storeEditableDialog) localStorage.setItem("storeEditableDialogLS", JSON.stringify(storeEditableDialog));
//     // return(storeProjectInfoLS,storeProjectInfoLS, storeEditableDialogLS)
// }

function storeInLocalStorage() {
    // console.log(projectDiv.innerHTML); 


    // const text1 = ["arthur"];
    // const arr1 = storeReadOnlyDialog();

    // localStorage.setItem("trial", JSON.stringify(text1));
    // localStorage.setItem("array", JSON.stringify(arr1));

    // console.log ("text 1 - no inparse:  ", localStorage.getItem("trial"));
    // console.log ("text 1 - with parse:  ", JSON.parse(localStorage.getItem("trial")));

    // console.log ("Array  :  ", JSON.parse(localStorage.getItem("array")));
    // console.log ("Arr1  :  ", arr1.length>1?arr1[0]: ' ');







    // console.log (storeProjectInfo(), storeReadOnlyDialog(), storeEditableDialog())
    // const nam = ["arthir"];
    // const arr = storeReadOnlyDialog();
    // localStorage.setItem("nam", JSON.stringify(nam));
    // localStorage.setItem("storeProjectInfoLS", storeProjectInfo());
    // localStorage.setItem("storeDispDiagInfoLS", JSON.stringify(arr));
    // localStorage.setItem("storeEditableDialogLS", JSON.stringify(storeEditableDialog()));

    // // console.log (localStorage.getItem("nam"))
    // // console.log (localStorage.getItem("storeProjectInfoLS"),'pjInf', storeProjectInfo())
    // console.log("arr: ", arr)
    // console.log(localStorage.getItem("storeDispDiagInfoLS"), storeReadOnlyDialog())
    // // console.log (localStorage.getItem("storeEditableDialogLS"), storeEditableDialog())
    // // return(storeProjectInfoLS,storeProjectInfoLS, storeEditableDialogLS)
}

export { storeData, changeLeftRightBorderColor, storeInLocalStorage, setActiveClass }