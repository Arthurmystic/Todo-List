// universalFunctions.js

import { createFormFields } from "./createFormElements.js";
import { generateProject } from "./createProject.js"   

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

function defaultProject() {
    const { projectTitleDiv, editProjectNameBtn, delProjectBtn, quickDetailsDiv, quickActionDiv } = createFormFields();
    const dataAttr = `${crypto.randomUUID()} - defaultProject`;

    quickActionDiv.dataset.action = "selectProjectTitleDiv";
    quickDetailsDiv.dataset.action = "selectProjectTitleDiv";
    quickDetailsDiv.innerText = "Default Project";

    quickActionDiv.appendChild(editProjectNameBtn);
    quickActionDiv.appendChild(delProjectBtn);
    editProjectNameBtn.classList.add("default");
    delProjectBtn.classList.add("default");

    projectTitleDiv.appendChild(quickDetailsDiv);
    projectTitleDiv.appendChild(quickActionDiv);
    projectsPane.appendChild(projectTitleDiv);

    setActiveClass("projectTitleDiv", projectTitleDiv);
    generateProject(projectTitleDiv, dataAttr);
    
    return { projectTitleDiv };
};

export { storeData, changeLeftRightBorderColor, setActiveClass, defaultProject}