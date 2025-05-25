import { storeData } from "./universalFunctions.js";

// if not in dom, create storage data with store = stadata() for each 

document.addEventListener("DOMContentLoaded", () => {
    console.log('loaded')

});

let storeProjectInfo = storeData();
let storeDisplayDialog = storeData();
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
//     storeDisplayDialog = (stringDispDialInfo)?
//         JSON.parse(stringDispDialInfo) :
//         storeData();
//     storeEditableDialog = (stringEditDiaInfo)?
//         JSON.parse(stringEditDiaInfo) :
//         storeData();
//     return { storeEditableDialog, storeDisplayDialog, storeProjectInfo };
// })

export { storeEditableDialog, storeDisplayDialog, storeProjectInfo };


function storeInLocalStorage() {
    if (storeProjectInfo) localStorage.setItem("storeProjectInfoLS", JSON.stringify(storeProjectInfo));
    if (storeDisplayDialog) localStorage.setItem("storeDisplayDialogLS", JSON.stringify(storeDisplayDialog));
    if (storeEditableDialog) localStorage.setItem("storeEditableDialogLS", JSON.stringify(storeEditableDialog));
}