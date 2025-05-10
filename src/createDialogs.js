// createDialogs.js

import { domElements } from "./DOM-Elements.js";
import { createFormFields } from "./createFormElements.js";
import { retrieveAndDispDialog, retrieveAndDeleteDialog, retrieveAndEditDialog } from "./editDialogs.js";

const { createElement } = domElements;
let inEditingMode = false; // not in editing mode by default notEditing

// Stores data in an array
function storeData() {
    const storageArr = [];
    return function dataStorage(data) {
        if (data !== undefined && !storageArr.includes(data)) storageArr.push(data); // store data if it is not already inside the storageArr
        return storageArr;
    }
};

const storeEditableDialog = storeData(); 
const storeDisplayDialog = storeData();

// Displays summary of notes on screen with Edit, Delete and View buttons attached.
function storeQuickDisplayDiv(checkbox, title, notes, priorityList, duedate, dataSetAttr) {
    // notes, priorityList are indirectly used in retrieveandedit in the showModal(). deleting them here causes an error when that functions is called and confirm button pressed
    
    const { quickDisplayDiv, quickDetailsDiv, quickActionDiv, duedateDiv, viewButton, editButton, deleteButton } = createFormFields();

    quickDisplayDiv.dataset.ref = dataSetAttr; // assigning data-ref to editable dialog.

    checkbox.label.innerText = `${title}`;
    duedateDiv.innerText = `${duedate}`;

    quickDetailsDiv.appendChild(checkbox.element);
    quickDetailsDiv.appendChild(checkbox.label);
    quickDetailsDiv.appendChild(duedateDiv);

    quickActionDiv.appendChild(viewButton);
    quickActionDiv.appendChild(editButton);
    quickActionDiv.appendChild(deleteButton);
 
    quickDisplayDiv.appendChild(quickDetailsDiv);
    quickDisplayDiv.appendChild(quickActionDiv);

    document.body.appendChild(quickDisplayDiv);

    viewButton.addEventListener("click", () => {
        retrieveAndDispDialog(dataSetAttr, storeDisplayDialog());
    });
    deleteButton.addEventListener("click", () => {
        retrieveAndDeleteDialog(dataSetAttr, storeEditableDialog());
        retrieveAndDeleteDialog(dataSetAttr, storeDisplayDialog());
        document.body.removeChild(quickDisplayDiv);
    });
    editButton.addEventListener("click", () => {
        retrieveAndEditDialog(dataSetAttr, checkbox, duedateDiv, storeEditableDialog(), storeDisplayDialog());
        inEditingMode = true; // in editing mode
    });
}

// CREATE EDITABLE DIALOGBOX

function createDialogs() {
    const { todoTitle, todoNotes, dueDate, priority, closeButton, resetButton, confirmButton, editableForm, todoFieldset, editableDialog } = createFormFields();

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

    todoFieldset.appendChild(editableForm);

    editableDialog.appendChild(todoFieldset);

    // Attach event listeners 
    closeButton.addEventListener("click", () => editableDialog.close());
    confirmButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (!inEditingMode) { // check if in editing mode or not. only call storeFormInput if not in editing mode
            storeFormInput(editableForm, editableDialog, dataAttr)
        } else { // in editing mode
            inEditingMode = false; // switch back to non-editing mode
        }
        editableDialog.close();
    });
    return { editableForm, editableDialog };
};

function storeFormInput(todoEditableForm, todoEditableDialog, dataSetAttr) {
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
    storeQuickDisplayDiv(checkbox, titleValue, notesValue, priorityListValue, dueDateValue, dataSetAttr);
};


export { createDialogs, storeFormInput, storeEditableDialog, storeDisplayDialog };

