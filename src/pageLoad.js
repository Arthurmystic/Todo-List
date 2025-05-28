import { storeData } from "./universalFunctions.js";

// if not in dom, create storage data with store = stadata() for each 

document.addEventListener("DOMContentLoaded", () => {
    console.log('loaded')

});

let storeProjectInfo = storeData();
let storeReadOnlyDialog = storeData();
let storeEditableDialog = storeData();

// document.addEventListener("DOMContentLoaded", () => {
//     console.log("loaded");
//     const stringProjInfo = localStorage.getItem("storeProjectInfoLS1");
//     const stringDispDialInfo = localStorage.getItem("storeDisplayDialogLS1");
//     const stringEditDiaInfo = localStorage.getItem("storeEditableDialogLS1");

//     console.log(typeof stringProjInfo, stringDispDialInfo, stringEditDiaInfo)
//     storeProjectInfo = (stringProjInfo)?
//         JSON.parse(stringProjInfo) :
//         storeData();
//     storeReadOnlyDialog = (stringDispDialInfo)?
//         JSON.parse(stringDispDialInfo) :
//         storeData();
//     storeEditableDialog = (stringEditDiaInfo)?
//         JSON.parse(stringEditDiaInfo) :
//         storeData();
//     return { storeEditableDialog, storeReadOnlyDialog, storeProjectInfo };
// })

export { storeEditableDialog, storeReadOnlyDialog, storeProjectInfo };


function storeInLocalStorage() {
    if (storeProjectInfo) localStorage.setItem("storeProjectInfoLS", JSON.stringify(storeProjectInfo));
    if (storeReadOnlyDialog) localStorage.setItem("storeDisplayDialogLS", JSON.stringify(storeReadOnlyDialog));
    if (storeEditableDialog) localStorage.setItem("storeEditableDialogLS", JSON.stringify(storeEditableDialog));
}