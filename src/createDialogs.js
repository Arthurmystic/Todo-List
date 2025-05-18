// createDialogs.js

import { createFormFields } from "./createFormElements.js";
import { retrieveAndDispDialog, retrieveAndDeleteDialog, retrieveAndEditDialog } from "./editDialogs.js";
import { storeData } from "./universalFunctions.js";

let inEditingMode = false; // not in editing mode by default notEditing

const storeEditableDialog = storeData();
const storeDisplayDialog = storeData();
const storeProjectInfo = storeData(); // store project divs

// Displays summary of notes on screen with Edit, Delete and View buttons attached.
function storeQuickDisplayDiv(todoListPane, checkbox, title, notes, priorityList, duedate, dataSetAttr) {
    // notes, priorityList are indirectly used in retrieveandedit in the showModal(). deleting them here causes an error when that function is called and confirm button pressed

    const { todoPreviewDiv, quickDetailsDiv, quickActionDiv, duedateDiv, viewButton,
        editButton, deleteButton, addNoteButtonToTodoListPane } = createFormFields();

    todoPreviewDiv.dataset.ref = dataSetAttr; // assigning data-ref to editable dialog.

    checkbox.label.innerText = `${title}`;
    duedateDiv.innerText = `Due date: ${duedate}`;

    quickDetailsDiv.appendChild(checkbox.element);
    quickDetailsDiv.appendChild(checkbox.label);
    quickDetailsDiv.appendChild(duedateDiv);

    quickActionDiv.appendChild(viewButton);
    quickActionDiv.appendChild(editButton);
    quickActionDiv.appendChild(deleteButton);

    todoPreviewDiv.appendChild(quickDetailsDiv);
    todoPreviewDiv.appendChild(quickActionDiv);

    todoListPane.appendChild(todoPreviewDiv);

    viewButton.addEventListener("click", () => {
        console.log(storeDisplayDialog())
        retrieveAndDispDialog(dataSetAttr, storeDisplayDialog());
    });
    deleteButton.addEventListener("click", () => {
        retrieveAndDeleteDialog(dataSetAttr, storeEditableDialog());
        retrieveAndDeleteDialog(dataSetAttr, storeDisplayDialog());
        todoListPane.removeChild(todoPreviewDiv);
    });
    editButton.addEventListener("click", () => {
        retrieveAndEditDialog(dataSetAttr, checkbox, duedateDiv,
            storeEditableDialog(), storeDisplayDialog());

        inEditingMode = true; // in editing mode
    });
}

// CREATE EDITABLE DIALOGBOX

function createDialogs(todoListPane) {
    const { todoTitle, todoNotes, dueDate, priority, closeButton, resetButton,
        confirmButton, editableForm, todoFieldset, editableDialog } = createFormFields();

    const dataAttr = crypto.randomUUID();

    // Creating editable dialog
    editableDialog.dataset.ref = dataAttr; // assigning data-ref to ediatble dialog.

    editableDialog.appendChild(closeButton);
    resetButton.style.cssText = "width: 5rem; font-size: 12px";
    confirmButton.style.cssText = "width: 5rem; font-size: 12px";

    editableForm.appendChild(todoTitle.label);
    editableForm.appendChild(todoTitle.element);  // the 'element' is 'input' in all.

    editableForm.appendChild(todoNotes.label);
    editableForm.appendChild(todoNotes.textarea);

    editableForm.appendChild(dueDate.label);
    editableForm.appendChild(dueDate.element);

    editableForm.appendChild(priority.label);
    editableForm.appendChild(priority.selectOptions);

    editableForm.appendChild(resetButton);
    editableForm.appendChild(confirmButton);

    // todoFieldset.appendChild(editableForm);
    // editableDialog.appendChild(todoFieldset);

    editableDialog.appendChild(editableForm);

    // Attach event listeners 
    closeButton.addEventListener("click", () => editableDialog.close());
    confirmButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (!inEditingMode) { // check if in editing mode or not. only call storeFormInput if not in editing mode
            storeFormInput(editableForm, editableDialog, dataAttr, todoListPane)
        } else { // in editing mode
            inEditingMode = false; // switch back to non-editing mode
        }
        editableDialog.close();
        // editableDialog.remove(); // removing dialog from document after capturing its information.
    });

    // editableForm.addEventListener("submit", (e)=>{
    //     e.preventDefault();
    //     if (!inEditingMode) { // check if in editing mode or not. only call storeFormInput if not in editing mode
    //         storeFormInput(editableForm, editableDialog, dataAttr, todoListPane)
    //     } else { // in editing mode
    //         inEditingMode = false; // switch back to non-editing mode
    //     }
    //     editableDialog.close();
    //     // editableDialog.remove(); // removing dialog from document after capturing its information.
    // })


    return { editableForm, editableDialog };
};

function storeFormInput(todoEditableForm, todoEditableDialog, dataSetAttr, todoListPane) {
    const { checkbox, displayDialog, displayForm, storeFormDiv } = createFormFields();
    displayDialog.dataset.ref = dataSetAttr; // assigning data-ref attribute

    const titleValue = todoEditableForm.elements["todo-title"].value;
    const notesValue = todoEditableForm.elements["todo-notes"].value;
    const dueDateValue = todoEditableForm.elements["todo-dueDate"].value;
    const priorityListValue = todoEditableForm.elements["priorityList"].value;

    storeFormDiv.innerText = `
                            Title:   ${titleValue}
                            Notes:    ${notesValue}
                            Due Date: ${dueDateValue}
                            Priority: ${priorityListValue}
                            `
    displayForm.appendChild(storeFormDiv);
    displayDialog.appendChild(displayForm);

    storeEditableDialog(todoEditableDialog);
    storeDisplayDialog(displayDialog);
    storeQuickDisplayDiv(todoListPane, checkbox, titleValue, notesValue,
        priorityListValue, dueDateValue, dataSetAttr);
};

function createProjectHeadingDivAndDialog() {
    inEditingMode = false;  // not in editing mode by default
    const { projectHeadingDialog, projectTitleForm, projectTitle, projectTitleDiv,
        button, quickDetailsDiv, quickActionDiv, editProjectNameBtn,
        delProjectBtn } = createFormFields();

    const saveProjectButton = button("button", "Save", "projectTitleButton");
    const cancelProjectButton = button("button", "Cancel", "projectTitleButton");
    const dataAttr = crypto.randomUUID(); 

    // Creating project name dialog
    projectTitleForm.appendChild(projectTitle.label);
    projectTitleForm.appendChild(projectTitle.element);
    projectTitleForm.appendChild(cancelProjectButton);
    projectTitleForm.appendChild(saveProjectButton);
    projectHeadingDialog.appendChild(projectTitleForm);

    // Creating project title to display
    quickActionDiv.appendChild(editProjectNameBtn);
    quickActionDiv.appendChild(delProjectBtn);
    projectTitleDiv.appendChild(quickDetailsDiv);
    projectTitleDiv.appendChild(quickActionDiv);

    // Event Listeners
    projectTitleForm.addEventListener("submit", (event) => handleProjectSave(event)); // handles if enter button is pressed
    saveProjectButton.addEventListener("click", (event) => handleProjectSave(event));
    cancelProjectButton.addEventListener("click", () => projectHeadingDialog.close())
    // projectHeadingDialog.remove();
    
    editProjectNameBtn.addEventListener("click", (e) => {
        inEditingMode = true;
        projectHeadingDialog.showModal();
    })

    delProjectBtn.addEventListener("click", () => {
        const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef === dataAttr);
        storeProjectInfo().splice(idx, 1);
    });

    function handleProjectSave(event) {
        event.preventDefault();
        const projectName = projectTitleForm.elements["project-Name"].value;
        quickDetailsDiv.innerText = projectName;
        if (inEditingMode){
            projectsPane.replaceChild(projectTitleDiv, projectTitleDiv);
            inEditingMode = false; // Getting out of editing mode
        }else{
            projectsPane.appendChild(projectTitleDiv);
        }
        projectHeadingDialog.close();
        // projectHeadingDialog.remove(); // remove from document (it was added in document in index.js with document.body.appendChild(projectHeadingDialog);)
    }
    return { projectHeadingDialog, projectTitleDiv, editProjectNameBtn, delProjectBtn, dataAttr };
};

export {
    createDialogs, storeFormInput, storeEditableDialog, storeDisplayDialog,
    createProjectHeadingDivAndDialog, storeProjectInfo
};