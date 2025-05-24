// editDialogs.js
import { parseISO, format } from "date-fns";
import { changeLeftRightBorderColor } from "./universalFunctions.js";

function retrieveAndDispDialog(dataSetAttr, displayDialogStore) {
    const displayDialogArray = displayDialogStore // get the array containing displadialogs
        .filter((arr) => arr.dataset.ref == dataSetAttr); // filter out the array whose data-ref == datasetAttr

    document.body.appendChild(displayDialogArray[0]);
    displayDialogArray[0].showModal();
}

function retrieveAndDeleteDialog(dataSetAttr, dialogStore) {
    const index = dialogStore.findIndex(arr => arr.dataset.ref == dataSetAttr); // find index of dialogstore array whose data-ref == dataSetAttr
    dialogStore.splice(index, 1); // go to index, and delete 1 item from there.
}

function retrieveAndEditDialog(dataSetAttr, dialogCheckbox, dialogDueDateDiv, editableDialogStore, displayDialogStore, todoPreviewDivUpdate) {
    const index1 = editableDialogStore.findIndex(dialogBox => dialogBox.dataset.ref == dataSetAttr); // find index of dialog whose data-ref == dataSetAttr
    const index2 = displayDialogStore.findIndex(dialogBox => dialogBox.dataset.ref == dataSetAttr);
    const editableDialog = editableDialogStore[index1];
    const displayDialog = displayDialogStore[index2];

    editableDialog.showModal(); // show editable dialog for editing.

    // const confirmButton = editableDialog.querySelector("form .submitButton"); // select form > submmitButton

    const editForm = editableDialog.querySelector("form");

    const updatedStoreFormDiv = displayDialog.querySelector("div");

    editForm.addEventListener("submit", () => {

        // get updated values on pressing confirm in editable dialog.
        const updatedTitle = editableDialog.querySelector("form").elements["todo-title"].value;

        const rawDueDateValue = editableDialog.querySelector("form").elements["todo-dueDate"].value; // in format yyyy-mm-dd (default format)  
        const updatedDueDate = rawDueDateValue ? format(rawDueDateValue, "MMMM d, yyyy") : '';

        const updatedNotes = editableDialog.querySelector("form").elements["todo-notes"].value;
        const updatedPriorityValue = editableDialog.querySelector("form").elements["priorityList"].value;
        
        changeLeftRightBorderColor(todoPreviewDivUpdate, updatedPriorityValue); // update border color
        
        // update values in the quickdisplaydiv
        dialogCheckbox.label.innerText = updatedTitle;
        dialogDueDateDiv.innerText = `${updatedDueDate}`;

        // update values in the displayDialog
        updatedStoreFormDiv.innerText = `
                        Title:   ${updatedTitle}
                        Notes:    ${updatedNotes}
                        Due Date: ${updatedDueDate}
                        Priority: ${updatedPriorityValue}
                        `
    });
}

export { retrieveAndDispDialog, retrieveAndDeleteDialog, retrieveAndEditDialog };