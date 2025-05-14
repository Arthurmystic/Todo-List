// editDialogs.js

function retrieveAndDispDialog(dataSetAttr,displayDialogStore) {

    const displayDialogArray = displayDialogStore // get the array containing displadialogs
        .filter((arr) => arr.dataset.ref == dataSetAttr); // filter out the array whose data-ref == datasetAttr

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

    console.log (editableDialogStore);
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
        dialogDueDateDiv.innerText = `Due date: ${updatedDueDate}`;

        // update values in the displayDialog
        updatedStoreFormDiv.innerText = `
                        Title:   ${updatedTitle}
                        Notes:    ${updatedNotes}
                        Due Date: ${updatedDueDate}
                        Priority: ${priorityListValue}
                        `
    });
}

export { retrieveAndDispDialog, retrieveAndDeleteDialog, retrieveAndEditDialog };