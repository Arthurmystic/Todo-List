// dialogProcessor.js

import { createFormFields } from "./createFormElements.js";
// import { storeData, changeLeftRightBorderColor } from "./universalFunctions.js";
import { changeLeftRightBorderColor } from "./universalFunctions.js";
import { parseISO, format } from "date-fns";
import { storeEditableDialog, storeReadOnlyDialog } from "./pageLoad.js"; 

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
        child.dataset.ref = dataSetAttr;  
    });

}

function renderProjectTitle() {
    const { projectTitleDiv, quickDetailsDiv, quickActionDiv, editProjectNameBtn, delProjectBtn } = createFormFields();

    quickActionDiv.appendChild(editProjectNameBtn);
    quickActionDiv.appendChild(delProjectBtn);
    projectTitleDiv.appendChild(quickDetailsDiv);
    projectTitleDiv.appendChild(quickActionDiv);

    quickActionDiv.dataset.action = "selectProjectTitleDiv";
    quickDetailsDiv.dataset.action = "selectProjectTitleDiv";

    return { projectTitleDiv, quickDetailsDiv, editProjectNameBtn };
};

export { renderTodoPreview, renderProjectTitle };
