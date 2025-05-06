// createDialogs.js

import { domElements } from "./DOM-Elements.js";
import { createButton, createFormFields } from "./createFormElements.js";

const { createElement } = domElements; 

function storeData(){
    const storageArr = [];
    return function dataStorage(data){
        if (data !== undefined && !storageArr.includes (data)) storageArr.push(data);
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

 
function retrieveAndDispDialog(dataSetAttr){
    const dialArr =  storeDisplayDialog();
    const dispdial = dialArr.filter((arr) => arr.dataset.ref == dataSetAttr);
    document.body.appendChild(dispdial[0]);
    dispdial[0].showModal();
    console.log("........", dispdial[0])
}


function storeQuickDisplayDiv(checkbox, title, duedate, dataSetAttr){
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
    })
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
        storeFormInput(editableForm, editableDialog, dataAttr); //
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
    storeQuickDisplayDiv(checkbox, titleValue, dueDateValue, dataSetAttr);  

    // console.log ('disp ddiaaa: ', todoForm );
    console.log ('----stoEditdata-------: ', storeDisplayDialog()[0].dataset.ref );
    console.log ('----stoEditdata-------: ', storeDisplayDialog );

    // return { storeEditableDialog, storeDisplayDialog };
};


export { createDialogs, storeFormInput, storeEditableDialog, storeDisplayDialog };

