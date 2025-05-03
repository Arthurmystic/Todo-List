// checkbox.js (ill rename this later)



import { domElements } from "./DOM-Elements.js"



const { createInput, createLabel, createFieldset, createDiv, createDialogBox, createTextArea, createPrioritySelector } = domElements;



// CREATE DIV

const div = createDiv({ id: crypto.randomUUID(), elemClass: "formDiv" });



// CREATE INPUT ELEMENT

function inputElement(state) { // using composition to create the element

    return {

        ...createInput(state), // similar results to : const input = createInput(state);

        ...createLabel(state),

    }

}



// CREATE TEXTAREA

function textArea(state) { // using composition to create the element

    return {

        ...createTextArea(state),

        ...createLabel(state),

    }

}



// CREATE PRIORITY OPTIONS

function priorityOptions(state) { // using composition to create the element

    return {

        ...createPrioritySelector(state),

        ...createLabel(state),

    }

}



const checkbox = inputElement({ name: "todo-checkbox", type: "checkbox", text: "Title: ", id: crypto.randomUUID() });



const todoTitle = inputElement({ name: "todo-title", type: "text", text: "Title: ", id: crypto.randomUUID() });



const todoNotes = textArea({ name: "todo-notes", id: crypto.randomUUID(), placeholder: "Notes" });



const dueDate = inputElement({ name: "todo-dueDate", type: "date", text: "Due Date: ", id: crypto.randomUUID() });



const priority = priorityOptions({ name: "priorityList", text: "Priority: ", id: crypto.randomUUID() });



console.log("check1.id: ", checkbox.label, checkbox.input);







// APPEND TO DIV



div.appendChild(todoTitle.label);

div.appendChild(todoTitle.input);



div.appendChild(todoNotes.label);

div.appendChild(todoNotes.textarea);



div.appendChild(dueDate.label);

div.appendChild(dueDate.input);



div.appendChild(priority.label);

div.appendChild(priority.selectOptions);



div.appendChild(checkbox.input);

div.appendChild(checkbox.label);



export { div }



