// createDialogs.js

import { createFormFields } from "./createFormElements.js";
import { retrieveAndDispDialog, retrieveAndDeleteDialog, retrieveAndEditDialog } from "./editDialogs.js";
import { storeData, changeLeftRightBorderColor } from "./universalFunctions.js";
import { parseISO, format } from "date-fns";

let inEditingMode = false; // not in editing mode by default notEditing

const storeEditableDialog = storeData(); 
const storeDisplayDialog = storeData();
const storeProjectInfo = storeData(); // store project divs 

// Displays summary of notes on screen with Edit, Delete and View buttons attached.
function storeQuickDisplayDiv(todoListPane, checkbox, title, notes, priorityValue, duedate, dataSetAttr) {
    // notes, priorityValue are indirectly used in retrieveandedit in the showModal(). deleting them here causes an error when that function is called and confirm button pressed

    const { todoPreviewDiv, quickDetailsDiv, quickActionDiv, duedateDiv, viewButton,
        editButton, deleteButton, checkBoxLabelDiv } = createFormFields();

    todoPreviewDiv.dataset.ref = dataSetAttr; // assigning data-ref to editable dialog.

    checkbox.label.innerText = `${title}`;
    duedateDiv.innerText = `${duedate}`;

    checkBoxLabelDiv.appendChild(checkbox.element);
    checkBoxLabelDiv.appendChild(checkbox.label);
    quickDetailsDiv.appendChild(checkBoxLabelDiv);

    quickActionDiv.appendChild(viewButton);
    quickActionDiv.appendChild(editButton);
    quickActionDiv.appendChild(deleteButton);

    todoPreviewDiv.appendChild(quickDetailsDiv);
    todoPreviewDiv.appendChild(duedateDiv);
    todoPreviewDiv.appendChild(quickActionDiv);

    todoListPane.appendChild(todoPreviewDiv);

    changeLeftRightBorderColor(todoPreviewDiv, priorityValue); // update border color

    viewButton.addEventListener("click", () => {
        retrieveAndDispDialog(dataSetAttr, storeDisplayDialog());
    });
    deleteButton.addEventListener("click", () => {
        retrieveAndDeleteDialog(dataSetAttr, storeEditableDialog());
        retrieveAndDeleteDialog(dataSetAttr, storeDisplayDialog());
        todoListPane.removeChild(todoPreviewDiv);
    });

    editButton.addEventListener("click", () => {
        retrieveAndEditDialog(dataSetAttr, checkbox, duedateDiv, storeEditableDialog(), storeDisplayDialog(),
            todoPreviewDiv);
        
        inEditingMode = true; // in editing mode
    });
}

// CREATE EDITABLE DIALOGBOX

function createDialogs(todoListPane) {
    const { todoTitle, todoNotes, dueDate, priority, closeButton, resetButton,
        confirmButton, editableForm, todoFieldset, editableDialog, btnDiv } = createFormFields();

    const dataAttr = crypto.randomUUID();

    // Creating editable dialog
    editableDialog.dataset.ref = dataAttr; // assigning data-ref to ediatble dialog.

    editableForm.setAttribute("method", "dialog"); // thus no need to .close() dialog, or preventdefault

    editableForm.appendChild(closeButton);

    editableForm.appendChild(todoTitle.label);
    editableForm.appendChild(todoTitle.element);  // the 'element' is 'input' in all.

    editableForm.appendChild(todoNotes.label);
    editableForm.appendChild(todoNotes.textarea);

    editableForm.appendChild(dueDate.label);
    editableForm.appendChild(dueDate.element);

    editableForm.appendChild(priority.label);
    editableForm.appendChild(priority.selectOptions);

    btnDiv.appendChild(resetButton);
    btnDiv.appendChild(confirmButton);

    editableForm.appendChild(btnDiv);

    // todoFieldset.appendChild(editableForm);
    // editableDialog.appendChild(todoFieldset);

    editableDialog.appendChild(editableForm);

    // Attach event listeners 
    closeButton.addEventListener("click", () => {
        editableDialog.close()
    });

    editableForm.addEventListener("submit", (e) => { // using form's submit event. no need 2 use confirmbutton. this listens to clicks n enter
        // e.preventDefault();

        if (!inEditingMode) { // check if in editing mode or not. only call storeFormInput if not in editing mode
            storeFormInput(editableForm, editableDialog, dataAttr, todoListPane)
        } else { // in editing mode
            inEditingMode = false; // switch back to non-editing mode
        }
        
        // editableDialog.close();
        // editableDialog.remove(); // removing dialog from document after capturing its information.
    });

    return { editableForm, editableDialog };
};

function storeFormInput(todoEditableForm, todoEditableDialog, dataSetAttr, todoListPane) {
    const { checkbox, displayDialog, displayForm, storeFormDiv } = createFormFields();
    displayDialog.dataset.ref = dataSetAttr; // assigning data-ref attribute

    const titleValue = todoEditableForm.elements["todo-title"].value;
    const notesValue = todoEditableForm.elements["todo-notes"].value;

    // format(duedate, "yyyy-MM-dd")

    const rawDueDateValue = todoEditableForm.elements["todo-dueDate"].value; // in yyyy-mm-dd format (default)  
    const dueDateValue = rawDueDateValue ? format(rawDueDateValue, "MMMM d, yyyy") : ''; // in mmmm d, yyyy format

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
    storeQuickDisplayDiv(todoListPane, checkbox, titleValue, notesValue, priorityListValue, dueDateValue, dataSetAttr);
};

function createProjectHeadingDivAndDialog() {
    inEditingMode = false;  // not in editing mode by default
    const { projectHeadingDialog, projectTitleForm, projectTitle, projectTitleDiv, button, quickDetailsDiv,
        quickActionDiv, editProjectNameBtn, delProjectBtn, btnDiv, closeButton } = createFormFields();

    projectTitleForm.setAttribute("method", "dialog");
    const dataAttr = crypto.randomUUID();

    projectTitleForm.appendChild(closeButton);

    const saveProjectButton = button("submit", "Save", "projectTitleButton");
    const cancelProjectButton = button("button", "Cancel", "projectTitleButton");
    saveProjectButton.classList.add("confirmButton");
    cancelProjectButton.classList.add("cancelButton");
    btnDiv.appendChild(cancelProjectButton);
    btnDiv.appendChild(saveProjectButton);

    // Creating project name dialog
    projectTitleForm.appendChild(projectTitle.label);
    projectTitleForm.appendChild(projectTitle.element);
    projectTitleForm.appendChild(btnDiv);
    projectHeadingDialog.appendChild(projectTitleForm);

    // Creating project title to display
    quickActionDiv.appendChild(editProjectNameBtn);
    quickActionDiv.appendChild(delProjectBtn);
    projectTitleDiv.appendChild(quickDetailsDiv);
    projectTitleDiv.appendChild(quickActionDiv);

    // Event Listeners
    closeButton.addEventListener("click", () => {
        projectHeadingDialog.close()
    });

    projectTitleForm.addEventListener("submit", (e) => { // switiching between project headings
        // event.preventDefault();
        const projectName = projectTitleForm.elements["project-Name"].value;
        quickDetailsDiv.innerText = projectName;
        if (inEditingMode) {
            projectsPane.replaceChild(projectTitleDiv, projectTitleDiv);
            inEditingMode = false; // Getting out of editing mode
        } else {
            projectsPane.appendChild(projectTitleDiv);
        }
        // projectHeadingDialog.close();
        // projectHeadingDialog.remove(); // remove from document (it was added in document in index.js with document.body.appendChild(projectHeadingDialog);)
    });

    cancelProjectButton.addEventListener("click", () => projectHeadingDialog.close())
    // projectHeadingDialog.remove();

    editProjectNameBtn.addEventListener("click", (e) => {
        inEditingMode = true;
        projectHeadingDialog.showModal();
    })

    delProjectBtn.addEventListener("click", (e) => {

        const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef === dataAttr);
        const currTodoListPaneCont = storeProjectInfo()[idx].currDiv;
        const currTodoListAddBtn = storeProjectInfo()[idx].btn
        const currtodoListPane = storeProjectInfo()[idx].todoListPane;

        const prevProjTitlDiv = storeProjectInfo()[idx - 1].projectTitleDiv;

        // ** below makes currDiv and its btn present to the dom, in case user didnt first select them.
        // useful if user, while on a different projectTitleDiff, deletes another projectTitleDiv
        // without selecting it first.
        todoListPaneContainer.replaceChildren(currTodoListPaneCont); // **
        todoListButton.replaceChildren(currTodoListAddBtn);          // **

        todoListPaneContainer.removeChild(currTodoListPaneCont);
        currTodoListPaneCont.removeChild(currtodoListPane);
        todoListButton.removeChild(currTodoListAddBtn);

        const autoSwitchSelector = new CustomEvent("switch-to-prevProjTitlDiv", { bubbles: true, cancelable: true });
        prevProjTitlDiv.dispatchEvent(autoSwitchSelector);

        storeProjectInfo().splice(idx, 1);
        // prevProjTitlDiv.click();

        projectsPane.removeChild(projectTitleDiv);
    });

    return { projectHeadingDialog, projectTitleDiv, editProjectNameBtn, delProjectBtn, dataAttr };
};

export {
    createDialogs, storeFormInput, storeEditableDialog, storeDisplayDialog,
    createProjectHeadingDivAndDialog, storeProjectInfo
};