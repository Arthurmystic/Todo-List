//pageLoad.js

import { storeData, defaultProject } from "./universalFunctions.js";
import { getProjectInfo, getEditableDialogs, getReadOnlyDialogs } from "./localStorageHandler.js";
import { domElements } from "./DOM-Elements.js";
import { setActiveClass } from "./universalFunctions.js";
import { createFormFields } from "./createFormElements.js";
import { createProjectTitleDialog } from "./dialogFactory.js";

const { todoListPaneContainer, projectsPane } = domElements;

let storeProjectInfo = storeData();
let storeReadOnlyDialog = storeData();
let storeEditableDialog = storeData();

document.addEventListener("DOMContentLoaded", () => {
    if (getProjectInfo()) {
        (function reinstateProjectDataFromLocalStorage() {
            for (let projectInfoFromLS of getProjectInfo()) {
                const { projectDiv, addNoteButtonToTodoListPane, projectTitleDiv } = createFormFields();
                projectDiv.innerHTML = projectInfoFromLS.projectDivLS;
                projectTitleDiv.innerHTML = projectInfoFromLS.projectTitleDivLS;
                const dataAttr = projectInfoFromLS.dataRefLS;
                addNoteButtonToTodoListPane.innerHTML = projectInfoFromLS.addNoteBtnLS;

                //Re-assign data-refs
                projectDiv.dataset.ref = dataAttr;
                projectTitleDiv.dataset.ref = dataAttr;
                addNoteButtonToTodoListPane.dataset.ref = dataAttr;

                const projectInfo = {
                    projectDiv,
                    projectTitleDiv,
                    dataRef: dataAttr,
                    addNoteBtn: addNoteButtonToTodoListPane,
                }
                storeProjectInfo(projectInfo);

                //repopulating projectTitleDiv and creating new dialogs for them
                projectsPane.appendChild(projectTitleDiv);
                const { projectHeadingDialog } = createProjectTitleDialog(dataAttr);
                document.body.appendChild(projectHeadingDialog);
            }

            // Setting up default project
            const defProjIdx = storeProjectInfo().findIndex(Proj => Proj.dataRef.includes("defaultProject"));
            const { projectDiv, projectTitleDiv, addNoteBtn } = storeProjectInfo()[defProjIdx];

            todoListPaneContainer.replaceChildren(projectDiv);
            todoListButtonDiv.replaceChildren(addNoteBtn);
            setActiveClass("projectTitleDiv", projectTitleDiv);

            // restoring dialogs
            getEditableDialogs().forEach(dialog => {
                const { editableDialog } = createFormFields();
                editableDialog.innerHTML = dialog;
                editableDialog.dataset.ref = editableDialog.firstChild.dataset.ref; // reassigning dataref
                storeEditableDialog(editableDialog);
                document.body.appendChild(editableDialog);
            })

            getReadOnlyDialogs().forEach(dialog => {
                const { readOnlyDialog } = createFormFields();
                readOnlyDialog.innerHTML = dialog;
                readOnlyDialog.dataset.ref = readOnlyDialog.firstChild.dataset.ref; // reassigning dataref
                storeReadOnlyDialog(readOnlyDialog);
                document.body.appendChild(readOnlyDialog);
            })
        })();

    } else {
        defaultProject()
    }
});

export { storeEditableDialog, storeReadOnlyDialog, storeProjectInfo };