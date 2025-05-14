import { createFormFields } from "./createFormElements";
import { domElements }  from "./DOM-Elements";

const { todoListPane } = createFormFields();
const { addProjectButton, projectsPane } = domElements


// on + project create todoPreviewContainer and initialise it with
// empty div saying 'click add task to add button' basically, if 
// attach empty 

// create obj 


// add todoListPane each time its created to default todoPreviewContainer

// const { buildElement } = domElements;

const projectDivArr = [];
const todoListPaneArr = [];

// on + project, call create rpoject. prompt to assign it a name. 
// extract to todoListPaneContainerDiv from it. 
// on + note, add note, todoListPane to todoListPaneContainerDiv and 
// turn its display on. 

// addProjectButton.addEventLister("click", () => {
//     console.log ('now runnign')
//     createProjectDivOnAddBtn();
//     // const tLPContainer = projDiv.todoListPaneContainerDiv

// })

function createProjectDivOnAddBtn() {
    console.log ('now runnign');
    const dataAttr = crypto.randomUUID();
    const { projectDiv } = createFormFields();
    
    
    const { todoListPaneContainerDiv, addNoteButtonToTodoListPane } = createFormFields();
    
    projectDiv.dataset.ref = dataAttr; // assigning data-ref to projectDiv

    todoListPaneContainerDiv.dataset.ref = dataAttr;
    console.log(projectDiv);

    todoListPaneContainerDiv.appendChild(addNoteButtonToTodoListPane);
    todoListPaneContainerDiv.appendChild(todoListPane)
    
    addNoteButtonToTodoListPane.addEventListener("click", () => {
        
        const { editableDialog } = createDialogs(todoListPane);

        document.body.appendChild(editableDialog); //
        // editableForm.reset();
        editableDialog.showModal();
    })

    projectDiv.appendChild(todoListPaneContainerDiv);
    // projectDiv.innerText = 'am div'
    // projectsPane.appendChild(projectDiv);

    // projectDiv = dataAttr;
    const projectDivObj = {
        div: projectDiv,
        dataSet: dataAttr,
    }

    projectDivArr.push(projectDivObj);

    return { projectDivArr, projectDiv };
}

function assignTodoListPaneToProjectDiv(e) {

}

// class DivMaker {
//     static createDiv(text, id, btn, divClass, todoListPane) {
//         const div1 = buildElement("div", { class: divClass, id: crypto.randomUUID() });
//         const dataRef = crypto.randomUUID();

//         todoListPane.dataset = dataRef;

//         // div.innerText = this.text;
//         div1.id = id;
//         div1.innerText = text;
//         div1.style.cssText = `
//                         display: block;
//                         width: 65px;
//                         height: 65px;
//                         border: 2px solid red;
//                         padding: 10px;
//                         margin: 5px;
//                                     `
//         const div = {
//             divObj: div1,
//             divButton: btn,
//             divAttr: dataRef,
//         };
//         divMat.push(div);
//         container.append(div1); // used in method 2;
//         return div;
//     }
// }

// const one = new DivMaker("This is Div ONE", "one");
// const divOne = DivMaker.createDiv("This is Div ONE", "one", "01");
// const divTwo = DivMaker.createDiv("This is Div TWO", "Two", "02");
// const divThree = DivMaker.createDiv("This is Div THREE", "Three", "03");
// const divFive = DivMaker.createDiv("This is Div FOUR", "Four", "04");


export { createProjectDivOnAddBtn }