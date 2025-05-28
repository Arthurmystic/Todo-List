// dialogFactory.js

import { createFormFields } from "./createFormElements.js";
// import { storeData, changeLeftRightBorderColor } from "./universalFunctions.js";
import { changeLeftRightBorderColor } from "./universalFunctions.js";
import { parseISO, format } from "date-fns";
import { renderTodoPreview, renderProjectTitle} from "./dialogProcessor.js";
import { storeProjectInfo, storeEditableDialog, storeReadOnlyDialog } from "./pageLoad.js";

// Sequence, on add note, editableDialog appears (via createDialog). on closing dialog, storeForm is invoked such that it
// stores the info into various stores and passes it on  to renderTodoPreview to be displayed on the screen as preview 
// in brief. createEditableTodoDialogs is used to open the form. renderTodoPreview processes and stores that form's data and then uses renderTodoPreview to show the result.

let inEditingMode = false; // not in editing mode by default notEditing

// const storeEditableDialog = storeData();
// const storeReadOnlyDialog = storeData();
// const storeProjectInfo = storeData(); // for storing project divs 

// CREATE EDITABLE DIALOGBOX

function createEditableTodoDialogs(currProjectDiv) {
    const { todoTitle, todoNotes, dueDate, priority, closeButton, resetButton,
        confirmButton, editableForm, todoFieldset, editableDialog, btnDiv } = createFormFields();

    const dataAttr = crypto.randomUUID();
    // const dataAttr = currProjectDiv.dataset.ref // also const dataAttr = currProjectDiv.getAttribute("data-ref")

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

    editableDialog.querySelectorAll("*").forEach(child => {
        child.dataset.ref = dataAttr; // assign data-ref to children and grandchildren of editableDialog 
    });

    return { editableForm, editableDialog };
};

function createReadOnlyDialog(todoEditableForm, dataSetAttr) {
    const { readOnlyDialog, readOnlyForm, storeFormDiv, closeButton } = createFormFields();

    readOnlyDialog.dataset.ref = dataSetAttr; // assigning data-ref attribute

    const titleValue = todoEditableForm.elements["todo-title"].value;
    const notesValue = todoEditableForm.elements["todo-notes"].value;

    // format(duedate, "yyyy-MM-dd")

    const rawDueDateValue = todoEditableForm.elements["todo-dueDate"].value; // in yyyy-mm-dd format (default)  
    const dueDateValue = rawDueDateValue ? format(rawDueDateValue, "MMMM d, yyyy") : ''; // in mmmm d, yyyy format

    const priorityListValue = todoEditableForm.elements["priorityList"].value;

    storeFormDiv.innerHTML = `
                            <strong>Title: </strong>   ${titleValue} <br> <br>
                            <strong>Notes: </strong>     ${notesValue} <br><br>
                            <strong>Due Date: </strong>  ${dueDateValue} <br> <br>
                            <strong>Priority: </strong>  ${priorityListValue}
                            `
    readOnlyForm.appendChild(closeButton);
    readOnlyForm.appendChild(storeFormDiv);
    readOnlyDialog.appendChild(readOnlyForm);

    readOnlyDialog.querySelectorAll("*").forEach(child => {
        child.dataset.ref = dataSetAttr; // assign data-ref to children and grandchildren of readOnlyDialog 
    });
    storeReadOnlyDialog(readOnlyDialog);
    return { titleValue, notesValue, priorityListValue, dueDateValue }
}

function createProjectTitleDialog() {
    inEditingMode = false;  // not in editing mode by default
    const { projectHeadingDialog, projectTitleForm, projectTitle, button, btnDiv, closeButton } = createFormFields();

    projectTitleForm.setAttribute("method", "dialog");
    const dataAttr = crypto.randomUUID();

    projectTitleForm.appendChild(closeButton);

    const saveProjectButton = button("submit", "Save", "projectTitleButton", "saveProjectTitleForm");
    const cancelProjectButton = button("button", "Cancel", "projectTitleButton", "cancelSaveProject");
    saveProjectButton.classList.add("confirmButton");
    cancelProjectButton.classList.add("cancelButton");
    btnDiv.appendChild(cancelProjectButton);
    btnDiv.appendChild(saveProjectButton);

    // Creating project name dialog
    projectTitleForm.appendChild(projectTitle.label);
    projectTitleForm.appendChild(projectTitle.element);
    projectTitleForm.appendChild(btnDiv);
    projectHeadingDialog.appendChild(projectTitleForm);

    projectHeadingDialog.dataset.ref = dataAttr; 
    projectHeadingDialog.querySelectorAll("*").forEach(child => {
        child.dataset.ref = dataAttr; // assign data-ref to children and grandchildren of projectHeadingDialog 
    });

    return { projectHeadingDialog, dataAttr };
};

export { createEditableTodoDialogs, createReadOnlyDialog, createProjectTitleDialog, renderProjectTitle };