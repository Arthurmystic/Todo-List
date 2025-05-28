// index.js

import "./styles.css";
// import { storeEditableDialog, storeReadOnlyDialog, storeProjectInfo } from "./pageLoad.js";
import { createFormFields } from "./createFormElements.js";
import { createProjectHeadingDivAndDialog } from "./dialogFactory.js"
import { generateProject } from "./createProject.js"
import { storeInLocalStorage } from "./universalFunctions.js"
import { storeProjectInfo } from "./pageLoad.js";
import { setupEventListeners } from "./eventListeners.js"

setupEventListeners();

document.body.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        // console.log("buttonsbuttonsbuttonsbuttons");
        storeInLocalStorage();
    };
});

document.body.addEventListener("submit", (e) => {
    if (e.target.tagName === "FORM") {
        // console.log("formsformsformsformsforms");
        storeInLocalStorage();
    }
});

const btId = document.querySelector("#unload");

btId.addEventListener('click', () => {
    // console.log("eye", localStorage);
        // console.log(storeProjectInfo()[0].currDiv.innerHTML);
    // storeProjectInfo()[0].currDiv.innerHTML = 23;
    // console.log(storeProjectInfo()[0].currDiv.outerHTML);
    const newDiv = document.createElement("div");
    newDiv.innerHTML = storeProjectInfo()[0].currDiv.outerHTML
    console.log(newDiv);
    document.body.appendChild(newDiv);
})