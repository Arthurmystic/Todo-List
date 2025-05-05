// createDialogs.js

import { domElements } from "./DOM-Elements.js";
import { createFormFields } from "./createFormElements.js";

const { createElement } = domElements;

function storeData(){
    const storageArr = [];
    return function dataStorage(data){
        // storageArr.push(data);
        if (data !== undefined && !storageArr.includes (data)) storageArr.push(data);
        // if (!storageArr.includes (id)) storageArr.push(editableDialog);
        return storageArr;
    }
};

const storeEditableDialog = storeData();
const storeDisplayDialog = storeData();

// CREATE EDITABLE DIALOGBOX

function createDialogs() {
    const { checkbox, todoTitle, todoNotes, dueDate, priority, closeButton, resetButton, confirmButton, editableForm, todoFieldset, editableDialog } = createFormFields();
    // Creating editable dialog
    editableDialog.appendChild(closeButton);
    resetButton.style.cssText = "width: 5rem; font-size: 12px";
    confirmButton.style.cssText = "width: 5rem; font-size: 12px";

    editableForm.appendChild(todoTitle.label);
    editableForm.appendChild(todoTitle.element);

    editableForm.appendChild(todoNotes.label);
    editableForm.appendChild(todoNotes.textarea);

    editableForm.appendChild(dueDate.label);
    editableForm.appendChild(dueDate.element);

    editableForm.appendChild(priority.label);
    editableForm.appendChild(priority.selectOptions);

    editableForm.appendChild(checkbox.element);
    editableForm.appendChild(checkbox.label);

    editableForm.appendChild(resetButton);
    editableForm.appendChild(confirmButton);

    todoFieldset.appendChild(editableForm);

    editableDialog.appendChild(todoFieldset);

    // Attach event listeners 

    closeButton.addEventListener("click", () => editableDialog.close());
    confirmButton.addEventListener("click", (e) => {
        e.preventDefault();
        storeFormInput(editableForm, editableDialog); //   
        // console.log(retrieveFormInput);

        editableDialog.close();

    });
    return { editableForm, editableDialog };
};

function storeFormInput(todoForm, todoDialog) {
    const { displayDialog, displayForm } = createFormFields();

    // console.log("todoForm.id 3434: ", todoForm.id);
    // console.log("hmmmmm.....", todoForm.elements["todo-title"]);
    
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

    storeEditableDialog(todoDialog);
    storeDisplayDialog(displayDialog); 

    // console.log ('disp ddiaaa: ', todoForm )
    // console.log ('stoEditdata: ', storeDisplayDialog() )

    // return { storeEditableDialog, storeDisplayDialog };
};

export { createDialogs, storeFormInput, storeEditableDialog, storeDisplayDialog };

