// createDialogs.js

import { domElements } from "./DOM-Elements.js";
import { createButton, createFormFields } from "./createFormElements.js";

const { createElement } = domElements;
let notEditing = true;

function storeData() {
    const storageArr = [];
    return function dataStorage(data) {
        if (data !== undefined && !storageArr.includes(data)) storageArr.push(data); // store data if it is not already inside the storageArr
        // if (!storageArr.includes (id)) storageArr.push(editableDialog);
        return storageArr;
    }
};

const storeEditableDialog = storeData();
const storeDisplayDialog = storeData();

// CREATE SCREEN DISPLAY
// quickdispdiv
// checkbox // title // duedate // View // Edit / Delete 
// store data-id of dispdialog

// assign same data-id in dispdialog, quickdisp and edit dialo.

// on view click, find data-id in dispdialog, and displaye the array

// on edit click, find data-id in editable dial, and del, 
// and dispdig and delete and also delete the quickdisp (removechild).


function retrieveAndDispDialog(dataSetAttr) {
    // const dial =  storeDisplayDialog();
    const displayDialogArray = storeDisplayDialog() // get the array containing displadialogs
        .filter((arr) => arr.dataset.ref == dataSetAttr); // filter out the array whose data-ref == datasetAttr
    console.log("........", displayDialogArray[0])
    document.body.appendChild(displayDialogArray[0]);
    displayDialogArray[0].showModal();
}

function retrieveAndDeleteDialog(dataSetAttr, dialogStore) {
    const index = dialogStore.findIndex(arr => arr.dataset.ref == dataSetAttr); // find index of dialogstore array whose data-ref == dataSetAttr
    dialogStore.splice(index, 1); // go to index1, and delete 1 item from there.
}



function retrieveAndEditDialog(dataSetAttr, dialogCheckbox, dialogDueDateDiv, editableDialogStore, displayDialogStore) {

    const index1 = editableDialogStore.findIndex(dialogBox => dialogBox.dataset.ref == dataSetAttr); // find index of dialog whose data-ref == dataSetAttr
    const index2 = displayDialogStore.findIndex(dialogBox => dialogBox.dataset.ref == dataSetAttr);
    const editableDialog = editableDialogStore[index1];
    const displayDialog = displayDialogStore[index2];

    editableDialog.showModal(); // show editable dialog for editing.

    const confirmButton = editableDialog.querySelector("form .submitButton"); // select form > submmitButton

    const updatedStoreFormDiv = displayDialog.querySelector("div");

    confirmButton.addEventListener("click", () => {

        // get updated values on pressing confirm in editable dialog.
        const updatedTitle = editableDialog.querySelector("form").elements["todo-title"].value;
        const updatedDueDate = editableDialog.querySelector("form").elements["todo-dueDate"].value;
        const updatedNotes = editableDialog.querySelector("form").elements["todo-notes"].value;
        const priorityListValue = editableDialog.querySelector("form").elements["priorityList"].value;

        // update values in the quickdisplaydiv
        dialogCheckbox.label.innerText = updatedTitle;
        dialogDueDateDiv.innerText = updatedDueDate;

        // update values in the displayDialog
        updatedStoreFormDiv.innerText = `
                        Title:   ${updatedTitle}
                        Notes:    ${updatedNotes}
                        Due Date: ${updatedDueDate}
                        Priority: ${priorityListValue}
                        `
    });
}




function storeQuickDisplayDiv(checkbox, title, notes, priorityList, duedate, dataSetAttr) {
    const quickDisplayDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "quickDisplayDiv" }).element;
    quickDisplayDiv.dataset.ref = dataSetAttr; // assigning data-ref to editable dialog.

    const quickDetailsDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "quickDetailsDiv" }).element;
    const quickActionDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "quickActionDiv" }).element;

    quickDetailsDiv.appendChild(checkbox.element);
    const titleDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "quickElemDisplayDiv" }).element;
    const duedateDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "quickElemDisplayDiv" }).element;
    // titleDiv.innerText = `${title}`;
    checkbox.label.innerText = `${title}`;
    duedateDiv.innerText = `${duedate}`;
    // quickDetailsDiv.appendChild(titleDiv);
    quickDetailsDiv.appendChild(checkbox.label);
    quickDetailsDiv.appendChild(duedateDiv);

    const viewButton = createButton("button", "View", { type: "button", elemClass: "quickDispButton", id: crypto.randomUUID() });
    const editButton = createButton("button", "Edit", { type: "button", elemClass: "quickDispButton", id: crypto.randomUUID() });
    const deleteButton = createButton("button", "DEL", { type: "button", elemClass: "quickDispButton", id: crypto.randomUUID() });
    quickActionDiv.appendChild(viewButton);
    quickActionDiv.appendChild(editButton);
    quickActionDiv.appendChild(deleteButton);

    quickDisplayDiv.appendChild(quickDetailsDiv);
    quickDisplayDiv.appendChild(quickActionDiv);

    document.body.appendChild(quickDisplayDiv);

    viewButton.addEventListener("click", () => {
        retrieveAndDispDialog(dataSetAttr)
    });

    deleteButton.addEventListener("click", () => {
        retrieveAndDeleteDialog(dataSetAttr, storeEditableDialog());
        retrieveAndDeleteDialog(dataSetAttr, storeDisplayDialog());
        // retrieveAndDeleteDialog(dataSetAttr);
        document.body.removeChild(quickDisplayDiv);
    });

    editButton.addEventListener("click", () => {

        retrieveAndEditDialog(dataSetAttr, checkbox, duedateDiv, storeEditableDialog(), storeDisplayDialog());
        
        notEditing = false;
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

    // editableForm.appendChild(checkbox.element);
    // editableForm.appendChild(checkbox.label);

    editableForm.appendChild(resetButton);
    editableForm.appendChild(confirmButton);

    todoFieldset.appendChild(editableForm);

    editableDialog.appendChild(todoFieldset);

    // Attach event listeners 

    closeButton.addEventListener("click", () => editableDialog.close());
    confirmButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (notEditing) { // check if in editing mode or not. only call storeFormInput if not in editing mode
            storeFormInput(editableForm, editableDialog, dataAttr)
        } else { // in editing mode
            notEditing = true; // switch back to non-editing mode
        }
        // console.log(retrieveFormInput);
        editableDialog.close();
    });
    return { editableForm, editableDialog };
};

function storeFormInput(todoForm, todoDialog, dataSetAttr) {
    const { checkbox, displayDialog, displayForm } = createFormFields();
    displayDialog.dataset.ref = dataSetAttr; // assigning data-ref attribute

    const storeFormDiv = createElement("div", { id: crypto.randomUUID(), elemClass: "storeFormDiv" }).element;
    const titleValue = todoForm.elements["todo-title"].value;
    const notesValue = todoForm.elements["todo-notes"].value;
    const dueDateValue = todoForm.elements["todo-dueDate"].value;
    const priorityListValue = todoForm.elements["priorityList"].value;


    storeFormDiv.innerText = `
                            Title:   ${titleValue}
                            Notes:    ${notesValue}
                            Due Date: ${dueDateValue}
                            Priority: ${priorityListValue}
                            `
    displayForm.appendChild(storeFormDiv);
    displayDialog.appendChild(displayForm);

    console.log("todoDialog: ", todoDialog);
    console.log("displayDialog", displayDialog);

    storeEditableDialog(todoDialog);
    storeDisplayDialog(displayDialog);
    storeQuickDisplayDiv(checkbox, titleValue, notesValue, priorityListValue, dueDateValue, dataSetAttr);

    // console.log ('disp ddiaaa: ', todoForm );
    console.log('----stoEditdata-------: ', storeDisplayDialog()[0].dataset.ref);
    console.log('----stoEditdata-------: ', storeDisplayDialog);

    // return { storeEditableDialog, storeDisplayDialog };
};


export { createDialogs, storeFormInput, storeEditableDialog, storeDisplayDialog };

