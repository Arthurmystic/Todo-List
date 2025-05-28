// dialogProcessor.js

import { createFormFields } from "./createFormElements.js";
// import { storeData, changeLeftRightBorderColor } from "./universalFunctions.js";
import { changeLeftRightBorderColor } from "./universalFunctions.js";
import { parseISO, format } from "date-fns";

import { storeEditableDialog, storeReadOnlyDialog } from "./pageLoad.js"; 

// Sequence, on add note, editableDialog appears (via createDialog). on closing dialog, storeForm is invoked such that it
// stores the info into various stores and passes it on  to renderTodoPreview to be displayed on the screen as preview 
// in brief. createEditableTodoDialogs is used to open the form. storeFormInput processes and stores that form's data and then uses renderTodoPreview to show the result.

let inEditingMode = false; // not in editing mode by default notEditing

// const storeEditableDialog = storeData();
// const storeReadOnlyDialog = storeData();
// const storeProjectInfo = storeData(); // for storing project divs 



// Populates  summary/preview of notes on screen with Edit, Delete and View buttons attached.
function renderTodoPreview(currProjectDiv, title, notes, priorityValue, duedate, dataSetAttr) {
    // notes, priorityValue are indirectly used in retrieveandedit in the showModal(). deleting them here causes an error when that function is called and confirm button pressed

    const { todoPreviewDiv, quickDetailsDiv, quickActionDiv, duedateDiv, viewButton,
        editButton, deleteButton, checkBoxLabelDiv, checkbox } = createFormFields();

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

    currProjectDiv.appendChild(todoPreviewDiv);

    changeLeftRightBorderColor(todoPreviewDiv, priorityValue); // update border color

    todoPreviewDiv.querySelectorAll("*").forEach(child => {
        child.dataset.ref = dataSetAttr; // assign data-ref to children and grandchildren of todoPreviewDiv 
    });


    // viewButton.addEventListener("click", () => {
    //     retrieveAndDispDialog(dataSetAttr, storeReadOnlyDialog());
    // });
    // deleteButton.addEventListener("click", () => {
    //     retrieveAndDeleteDialog(dataSetAttr, storeEditableDialog());
    //     retrieveAndDeleteDialog(dataSetAttr, storeReadOnlyDialog());
    //     todoListPane.removeChild(todoPreviewDiv);
    // });

    // editButton.addEventListener("click", () => {
    //     retrieveAndEditDialog(dataSetAttr, storeEditableDialog(), storeReadOnlyDialog(),
    //         todoPreviewDiv);
        
    //     inEditingMode = true; // in editing mode
    // });
}

function renderProjectTitle() {
    inEditingMode = false;  // not in editing mode by default
    const { projectTitleDiv, quickDetailsDiv, quickActionDiv, editProjectNameBtn, delProjectBtn } = createFormFields();

    // Creating projectTitlePreview to display
    quickActionDiv.appendChild(editProjectNameBtn);
    quickActionDiv.appendChild(delProjectBtn);
    projectTitleDiv.appendChild(quickDetailsDiv);
    projectTitleDiv.appendChild(quickActionDiv);
    // projectsPane.appendChild(projectTitleDiv); 

    quickActionDiv.dataset.action = "selectProjectTitleDiv";
    quickDetailsDiv.dataset.action = "selectProjectTitleDiv";
    // editProjectNameBtn.dataset.action = "selectProjectTitleDiv";
    // delProjectBtn.dataset.action = "selectProjectTitleDiv";

    return { projectTitleDiv, quickDetailsDiv, editProjectNameBtn };
};

export { renderTodoPreview, renderProjectTitle };
