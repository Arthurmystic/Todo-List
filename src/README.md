 // const createDiv = (state) => {
    //     // const elemDiv = document.createElement("div");
    //     // elemDiv.setAttribute("class", state.elemClass);
    //     // elemDiv.setAttribute("id", state.id);
    //     // return elemDiv;
    // }


    // const createInput = (state) => {
    //     const input = document.createElement("input");
    //     input.setAttribute("name", state.name);
    //     input.setAttribute("id", state.id);
    //     if (state.type) input.setAttribute("type", state.type); // some inputs have 'type', other dont.
    //     if (state.value) input.setAttribute("value", state.value); // some inputs have 'value', other dont.
        
    //     return { input };
    // }

// function createDataAttribute (){
//     // const dataRef = crypto.randomUUID();
//     const getdataVal = () => crypto.randomUUID()
//     return getdataVal
// }

// function createDataAttribute2 (){
//     const dataRef = crypto.randomUUID();
//     const getdataVal = () => dataRef
//     return dataRef
// }


// function retrieveAndDeleteDialog(dataSetAttr){
//     const displayDialogArray = storeDisplayDialog() 

//     // console.log(displayDialogArray.length,`2________________2`,displayDialogArray[0]);
    
//     // console.log(displayDialogArray.length, "1____________1", displayDialogArray[0])

//     const index = displayDialogArray.findIndex(arr => arr.dataset.ref == dataSetAttr); // find index of dialogstore array whose data-ref == dataSetAttr
//     displayDialogArray.splice(index,); // go to index1, and delete 1 item from there.

//     // console.log(`${displayDialogArray[0]}, 2_____________ ${displayDialogArray.length} __________2`, displayDialogArray.length)
    
// }


// const createDisplayDialog = (function () {
//     // const displayForm = createElement("form", { name: "displayForm", id: crypto.randomUUID() }).element;
//     // const displayDialog = createElement("dialog", { id: crypto.randomUUID() }).element;
//     // const storeFormDiv = storeFormInput();

//     // displayForm.appendChild(storeFormDiv);
//     // displayDialog.appendChild(displayForm);
//     // document.body.appendChild(displayDialog);

//     return { displayDialog };
// })();

// const dialogs = (function () {
//     return {
//         ...createEditableDialog,
//         ...createDisplayDialog,

//     }
// })();

// dialogs();
// const { editableDialog, editableForm } = createEditableDialog();


 // CREATE SCREEN DISPLAY
// quickdispdiv
// checkbox // title // duedate // View // Edit / Delete 
// store data-id of dispdialog

// assign same data-id in dispdialog, quickdisp and edit dialo.

// on view click, find data-id in dispdialog, and displaye the array

// on edit click, find data-id in editable dial, and del, 
// and dispdig and delete and also delete the quickdisp (removechild).


// const viewButton = button("", "View", 'quickDispButton');
    // const editButton = button("Edit", 'quickDispButton');
    // const deleteButton = button("DEL", 'quickDispButton');
    
    
    // function changeDisplayedProject(e){
//     const val = e.target.dataset.ref;
//     const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef == val);
//     const currProjectDiv = storeProjectInfo()[idx].div;
//     return currProjectDiv;

// }

// const displayTodo = createButton("button", "DISP", { type: "button", elemClass: "displayButton", id: crypto.randomUUID() });
// document.body.appendChild(displayTodo); 

// addNoteButton.addEventListener("click",()=>{
//     const { editableDialog } = createDialogs();
//     document.body.appendChild(editableDialog); //
//     // editableForm.reset();
//     editableDialog.showModal();
// });

// displayTodo.addEventListener("click", ()=>{
//     const digs = storeDisplayDialog();
//     const digs2 = digs[digs.length-1];
//     // console.log("digsdigsdigs: ", digs2);
//     document.body.appendChild(digs2);
//     digs2.showModal();  
// } )


// function createProjectDivOnAddBtn() {
//     const { projectHeadingDialog, projectTitleDiv } = createProjectHeadingDivAndDialog();
//     const { todoListPane, projectDiv, todoListPaneContainerDiv, addNoteButtonToTodoListPane } = createFormFields();

//     generateProject(todoListPane, projectDiv, projectTitleDiv, todoListPaneContainerDiv, addNoteButtonToTodoListPane)

//     return { storeProjectInfo, projectDiv, projectHeadingDialog, projectTitleDiv };
// }




// if (!isDefaultProject) {
    //     console.log(delProjectBtn)
    //     delProjectBtn.addEventListener("click", () => {
    //         // console.log(storeProjectInfo())
    //         const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef === dataAttr);
    //         storeProjectInfo().splice(idx, 1);
    //     });
    // }


    // if (!isDefaultProject) {
    //     console.log(delProjectBtn)
    //     delProjectBtn.addEventListener("click", () => {
    //         // console.log(storeProjectInfo())
    //         const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef === dataAttr);
    //         storeProjectInfo().splice(idx, 1);
    //     });
    // }

    // projectTitleDiv.addEventListener("click", (e) => {
    //     todoListPaneContainer.replaceChildren(projectDiv);
    //     todoListButton.replaceChildren(addNoteButtonToTodoListPane);
    //     if (e.target.className == "projectDelBtn") {
    //         if (!isDefaultProject) {
    //             console.log(delProjectBtn)
    //             delProjectBtn.addEventListener("click", () => {
    //                 // console.log(storeProjectInfo())
    //                 const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef === dataAttr);
    //                 storeProjectInfo().splice(idx, 1);
    //             });
    //         }
    //     }
    // })





// function handleProjectSelection(selector, titleDiv, newDiv, btn) {
//     document.querySelectorAll(selector).forEach(div => {
//         div.classList.remove("selected")// Remove 'selected' from all projectTitleDivs
//     })
//     titleDiv.classList.add("selected"); // and add selected to classlist selected div if it isnt there

//     todoListPaneContainer.replaceChildren(newDiv);
//     todoListButton.replaceChildren(btn);
//     console.log('eeyyeeeeyyyee')
// }

// function handleProjectSelection() {
//     document.querySelectorAll(".projectTitleDiv.selected").forEach(div => {
//         div.classList.remove("selected")// Remove 'selected' from all projectTitleDivs
//     })
//     projectTitleDiv.classList.add("selected"); // and add selected to classlist selected div if it isnt there

//     todoListPaneContainer.replaceChildren(projectDiv);
//     todoListButton.replaceChildren(addNoteButtonToTodoListPane);
// }





// delProjectBtn.addEventListener("click", (e) => {

//         const myProjectClickEvent = new Event('my-project-click', { bubbles: true, cancelable: true });


//         const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef === dataAttr);
//         const currTodoListPaneCont = storeProjectInfo()[idx].currDiv;
//         const currTodoListAddBtn = storeProjectInfo()[idx].btn;

//         // todoListPaneContainer.replaceChildren(currTodoListPaneCont);
//         // todoListButton.replaceChildren(currTodoListAddBtn);

//         // currTodoListPaneCont.dispatchEvent(myProjectClickEvent);

//         console.log(e.target.dataset.ref, dataAttr, currTodoListPaneCont)


//         const currtodoListPane = storeProjectInfo()[idx].todoListPane;
//         const prevProjTitlDiv = storeProjectInfo()[idx - 1].projectTitleDiv;

//         // const currProjTitlDiv = storeProjectInfo()[idx].projectTitleDiv;
//         prevProjTitlDiv.dispatchEvent(myProjectClickEvent);
//         // console.log(currProjTitlDiv, prevProjTitlDiv )

//         // console.log("prevProjTitlDiv:", prevProjTitlDiv);
//         // console.log("Is prevProjTitlDiv in the DOM?", document.body.contains(prevProjTitlDiv));

//         todoListPaneContainer.removeChild(currTodoListPaneCont);
//         currTodoListPaneCont.removeChild(currtodoListPane);
//         todoListButton.removeChild(currTodoListAddBtn);

//         storeProjectInfo().splice(idx, 1);


//         // prevProjTitlDiv.dispatchEvent(myProjectClickEvent);


//         // prevProjTitlDiv.dispatchEvent(new Event("my-project-click"));

//         // prevProjTitlDiv.click();

//         projectsPane.removeChild(projectTitleDiv);
//         // prevProjTitlDiv.click();

//         // console.log("todoListPaneContainer: ",todoListPaneContainer, 
//         //     "currTodoListPaneDiv: ",currTodoListPaneDiv, 
//         //     "projectTitleDiv: ", projectTitleDiv,  
//         //     "todoListButton: ", todoListButton,
//         //     "currTodoListAddBtn: ", currTodoListAddBtn
//         // )
//     });

//     function handleProjectSave(event) {
//         event.preventDefault();
//         const projectName = projectTitleForm.elements["project-Name"].value;
//         quickDetailsDiv.innerText = projectName;
//         if (inEditingMode) {
//             projectsPane.replaceChild(projectTitleDiv, projectTitleDiv);
//             inEditingMode = false; // Getting out of editing mode
//         } else {
//             projectsPane.appendChild(projectTitleDiv);
//         }
//         projectHeadingDialog.close();
//         // projectHeadingDialog.remove(); // remove from document (it was added in document in index.js with document.body.appendChild(projectHeadingDialog);)
//     }
//     return { projectHeadingDialog, projectTitleDiv, editProjectNameBtn, delProjectBtn, dataAttr };
// };

// const addTodoBtnDiv = buildElement("div", { id: crypto.randomUUID(), elemClass: "addTodoBtnDiv" }).element;

// editButton.addEventListener("click", () => {
    //     retrieveAndEditDialog(dataSetAttr, checkbox, duedateDiv, storeEditableDialog(), storeDisplayDialog(),
    //         todoPreviewDiv);
        
    //     inEditingMode = true; // in editing mode
    // });
}


// function retrieveAndEditDialog(dataSetAttr, dialogCheckbox, dialogDueDateDiv, editableDialogStore, displayDialogStore, todoPreviewDivUpdate) {
//     const index1 = editableDialogStore.findIndex(dialogBox => dialogBox.dataset.ref == dataSetAttr); // find index of dialog whose data-ref == dataSetAttr
//     const index2 = displayDialogStore.findIndex(dialogBox => dialogBox.dataset.ref == dataSetAttr);
//     const editableDialog = editableDialogStore[index1];
//     const displayDialog = displayDialogStore[index2];

//     editableDialog.showModal(); // show editable dialog for editing.

//     // const confirmButton = editableDialog.querySelector("form .submitButton"); // select form > submmitButton

//     const editForm = editableDialog.querySelector("form");

//     const updatedStoreFormDiv = displayDialog.querySelector("div");

//     editForm.addEventListener("submit", () => {

//         // get updated values on pressing confirm in editable dialog.
//         const updatedTitle = editableDialog.querySelector("form").elements["todo-title"].value;

//         const rawDueDateValue = editableDialog.querySelector("form").elements["todo-dueDate"].value; // in format yyyy-mm-dd (default format)  
//         const updatedDueDate = rawDueDateValue ? format(rawDueDateValue, "MMMM d, yyyy") : '';

//         const updatedNotes = editableDialog.querySelector("form").elements["todo-notes"].value;
//         const updatedPriorityValue = editableDialog.querySelector("form").elements["priorityList"].value;
        
//         changeLeftRightBorderColor(todoPreviewDivUpdate, updatedPriorityValue); // update border color
        
//         // update values in the quickdisplaydiv
//         dialogCheckbox.label.innerText = updatedTitle;
//         dialogDueDateDiv.innerText = `${updatedDueDate}`;

//         // update values in the displayDialog
//         updatedStoreFormDiv.innerText = `
//                         Title:   ${updatedTitle}
//                         Notes:    ${updatedNotes}
//                         Due Date: ${updatedDueDate}
//                         Priority: ${updatedPriorityValue}
//                         `
//     });
// }

// function storeFormInput(todoEditableForm, todoEditableDialog, dataSetAttr, todoListPane) {
   
//     const { readOnlyDialog, displayForm, storeFormDiv } = createFormFields();
//     readOnlyDialog.dataset.ref = dataSetAttr; // assigning data-ref attribute

//     const titleValue = todoEditableForm.elements["todo-title"].value;
//     const notesValue = todoEditableForm.elements["todo-notes"].value;

//     // format(duedate, "yyyy-MM-dd")

//     const rawDueDateValue = todoEditableForm.elements["todo-dueDate"].value; // in yyyy-mm-dd format (default)  
//     const dueDateValue = rawDueDateValue ? format(rawDueDateValue, "MMMM d, yyyy") : ''; // in mmmm d, yyyy format

//     const priorityListValue = todoEditableForm.elements["priorityList"].value;

//     storeFormDiv.innerText = `
//                             Title:   ${titleValue}
//                             Notes:    ${notesValue}
//                             Due Date: ${dueDateValue}
//                             Priority: ${priorityListValue}
//                             `
//     displayForm.appendChild(storeFormDiv);
//     readOnlyDialog.appendChild(displayForm);

//     readOnlyDialog.querySelectorAll("*").forEach(child => {
//         child.dataset.ref = dataAttr; // assign data-ref to children and grandchildren of readOnlyDialog 
//     });

//     storeEditableDialog(todoEditableDialog);
//     storeReadOnlyDialog(readOnlyDialog);
//     renderTodoPreview(todoListPane, titleValue, notesValue, priorityListValue, dueDateValue, dataSetAttr);
// };


  // addNoteButtonToTodoListPane.addEventListener("click", () => {
        // const currProjectDiv = todoListPaneContainer.querySelector(".projectDiv")
    //     const { editableDialog } = createEditableTodoDialogs(currProjectDiv);
    //     document.body.appendChild(editableDialog);
    //     editableDialog.showModal();
    // });

    // console.log(projectDiv.innerHTML);
    
    
    // const dataProjectGroup = crypto.randomUUID(); // data attr relwted to project level divs and elements only
    // projectTitleDiv.dataset.projectGroup = dataProjectGroup;
    // projectDiv.dataset.projectGroup = dataProjectGroup;
    // addNoteButtonToTodoListPane.dataset.projectGroup = dataProjectGroup;

    
    
    

// function storeFormInput(todoEditableForm, todoEditableDialog, dataSetAttr, todoListPane) {
   
//     const { readOnlyDialog, displayForm, storeFormDiv } = createFormFields();
//     readOnlyDialog.dataset.ref = dataSetAttr; // assigning data-ref attribute

//     const titleValue = todoEditableForm.elements["todo-title"].value;
//     const notesValue = todoEditableForm.elements["todo-notes"].value;

//     // format(duedate, "yyyy-MM-dd")

//     const rawDueDateValue = todoEditableForm.elements["todo-dueDate"].value; // in yyyy-mm-dd format (default)  
//     const dueDateValue = rawDueDateValue ? format(rawDueDateValue, "MMMM d, yyyy") : ''; // in mmmm d, yyyy format

//     const priorityListValue = todoEditableForm.elements["priorityList"].value;

//     storeFormDiv.innerText = `
//                             Title:   ${titleValue}
//                             Notes:    ${notesValue}
//                             Due Date: ${dueDateValue}
//                             Priority: ${priorityListValue}
//                             `
//     displayForm.appendChild(storeFormDiv);
//     readOnlyDialog.appendChild(displayForm);

//     readOnlyDialog.querySelectorAll("*").forEach(child => {
//         child.dataset.ref = dataAttr; // assign data-ref to children and grandchildren of readOnlyDialog 
//     });

//     storeEditableDialog(todoEditableDialog);
//     storeReadOnlyDialog(readOnlyDialog);
//     renderTodoPreview(todoListPane, titleValue, notesValue, priorityListValue, dueDateValue, dataSetAttr);
// };

// addProjectButton.addEventListener("click", () => {
//     document.querySelectorAll(".projectTitleDiv.selected").forEach(div => {
//         div.classList.remove("selected")// Remove any 'selected' from all projectTitleDivs
//     });

//     const { projectHeadingDialog, projectTitleDiv, dataAttr } = createProjectHeadingDivAndDialog();
//     const { todoListPane, projectDiv, todoListPaneContainerDiv, addNoteButtonToTodoListPane } = createFormFields();
//     generateProject(todoListPane, projectDiv, projectTitleDiv, todoListPaneContainerDiv,
//         addNoteButtonToTodoListPane, dataAttr);
//     document.body.appendChild(projectHeadingDialog);
//     projectHeadingDialog.showModal();
//     projectTitleDiv.classList.add("selected"); // add selected to classlist 
//     todoListPaneContainer.replaceChildren(projectDiv);
// })


// "projectTitleForm": (e, dataAttr, action) => {
//             const close = handleProjectForm(e, dataAttr, inEditingMode)
   //          console.log(action)
      //       if (action === "cancelSaveProjectForm") {
         //        console.log('sdsdchibdv')
                close()};
        // },  // *** DONE **


// function handleAddProject() {
//     console.log("action");
//     const { projectHeadingDialog, projectTitleDiv, dataAttr } = createProjectHeadingDivAndDialog();
//     // const { todoListPane, projectDiv, todoListPaneContainerDiv, addNoteButtonToTodoListPane } = createFormFields();
//     generateProject(projectTitleDiv, dataAttr);
//     document.body.appendChild(projectHeadingDialog);
//     projectHeadingDialog.showModal();
//     setActiveClass("projectTitleDiv",projectTitleDiv)
//     // todoListPaneContainer.replaceChildren(projectDiv);
// }


// const { todoListPane } = createFormFields();

    // console.log(todoListPane);
    // todoListPane.innerHtml = 23;
    // console.log(todoListPane.innerHtml);


    // console.log(todoListPane);
    // todoListPane.innerHTML = 23;
    // console.log(todoListPane.innerHTML);
    
    
    
// function createProjectHeadingDivAndDialog() {
//     inEditingMode = false;  // not in editing mode by default
//     const { projectHeadingDialog, projectTitleForm, projectTitle, projectTitleDiv, button, quickDetailsDiv,
//         quickActionDiv, editProjectNameBtn, delProjectBtn, btnDiv, closeButton } = createFormFields();

//     projectTitleForm.setAttribute("method", "dialog");
//     const dataAttr = crypto.randomUUID();

//     projectTitleForm.appendChild(closeButton);

//     const saveProjectButton = button("submit", "Save", "projectTitleButton");
//     const cancelProjectButton = button("button", "Cancel", "projectTitleButton");
//     saveProjectButton.classList.add("confirmButton");
//     cancelProjectButton.classList.add("cancelButton");
//     btnDiv.appendChild(cancelProjectButton);
//     btnDiv.appendChild(saveProjectButton);

//     // Creating project name dialog
//     projectTitleForm.appendChild(projectTitle.label);
//     projectTitleForm.appendChild(projectTitle.element);
//     projectTitleForm.appendChild(btnDiv);
//     projectHeadingDialog.appendChild(projectTitleForm);

//     // Creating projectTitlePreview to display
//     quickActionDiv.appendChild(editProjectNameBtn);
//     quickActionDiv.appendChild(delProjectBtn);
//     projectTitleDiv.appendChild(quickDetailsDiv);
//     projectTitleDiv.appendChild(quickActionDiv);
//     // projectsPane.appendChild(projectTitleDiv); 

//     quickActionDiv.dataset.action = "selectProjectTitleDiv";
//     quickDetailsDiv.dataset.action = "selectProjectTitleDiv";
//     // editProjectNameBtn.dataset.action = "selectProjectTitleDiv";
//     // delProjectBtn.dataset.action = "selectProjectTitleDiv";

//     projectHeadingDialog.querySelectorAll("*").forEach(child => {
//         child.dataset.ref = dataAttr; // assign data-ref to children and grandchildren of projectTitleDiv 
//     });

//     projectTitleDiv.querySelectorAll("*").forEach(child => {
//         child.dataset.ref = dataAttr; // assign data-ref to children and grandchildren of projectTitleDiv 
//     });

//     // Event Listeners
//     // closeButton.addEventListener("click", () => {
//     //     projectHeadingDialog.close()
//     // });

//     // projectTitleForm.addEventListener("submit", (e) => { // 
//     //     // event.preventDefault();
//     //     const projectName = projectTitleForm.elements["project-Name"].value;
//     //     quickDetailsDiv.innerText = projectName;
//     //     if (inEditingMode) {
//     //         projectsPane.replaceChild(projectTitleDiv, projectTitleDiv);
//     //         inEditingMode = false; // Getting out of editing mode
//     //     } else {
//     //         projectsPane.appendChild(projectTitleDiv); 
//     //     }
//     //     // projectHeadingDialog.close();
//     //     // projectHeadingDialog.remove(); // remove from document (it was added in document in index.js with document.body.appendChild(projectHeadingDialog);)
//     // });

//     cancelProjectButton.addEventListener("click", () => projectHeadingDialog.close())
//     // projectHeadingDialog.remove();

//     editProjectNameBtn.addEventListener("click", (e) => {
//         inEditingMode = true;
//         projectHeadingDialog.showModal();
//     })

//     delProjectBtn.addEventListener("click", (e) => {
//         const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef === dataAttr);
//         const currTodoListPaneCont = storeProjectInfo()[idx].currDiv;
//         const currTodoListAddBtn = storeProjectInfo()[idx].btn
//         const currtodoListPane = storeProjectInfo()[idx].todoListPane;

//         const prevProjTitlDiv = storeProjectInfo()[idx - 1].projectTitleDiv;

//         // ** below makes currDiv and its btn present to the dom, in case user didnt first select them.
//         // useful if user, while on a different projectTitleDiff, deletes another projectTitleDiv
//         // without selecting it first.
//         todoListPaneContainer.replaceChildren(currTodoListPaneCont); // **
//         todoListButtonDiv.replaceChildren(currTodoListAddBtn);          // **

//         todoListPaneContainer.removeChild(currTodoListPaneCont);
//         currTodoListPaneCont.removeChild(currtodoListPane);
//         todoListButtonDiv.removeChild(currTodoListAddBtn);

//         const autoSwitchSelector = new CustomEvent("switch-to-prevProjTitlDiv", { bubbles: true, cancelable: true });
//         prevProjTitlDiv.dispatchEvent(autoSwitchSelector);

//         storeProjectInfo().splice(idx, 1);
//         // prevProjTitlDiv.click();

//         projectsPane.removeChild(projectTitleDiv);
//     });

//     return { projectHeadingDialog, projectTitleDiv, editProjectNameBtn, delProjectBtn, dataAttr };
// };




// Attach event listeners 
    // closeButton.addEventListener("click", () => {
    //     editableDialog.close()
    // });

    // editableForm.addEventListener("submit", (e) => { // using form's submit event. no need 2 use confirmbutton. this listens to clicks n enter
    //     // e.preventDefault();

    //     if (!inEditingMode) { // check if in editing mode or not. only call storeFormInput if not in editing mode
    //         storeEditableDialog(editableDialog);
    //         const { titleValue, notesValue, priorityListValue, dueDateValue } = createReadOnlyDialog(editableForm, dataAttr);
    //         renderTodoPreview(currProjectDiv, titleValue, notesValue, priorityListValue, dueDateValue, dataAttr);

    //     } else { // in editing mode
    //         inEditingMode = false; // switch back to non-editing mode
    //     }

    //     // editableDialog.close();
    //     // editableDialog.remove(); // removing dialog from document after capturing its information.
    // });
    
    
    
    // editForm.addEventListener("submit", () => {

    // // get updated values on pressing confirm in editable dialog.
    // const updatedTitle = editableDialog.querySelector("form").elements["todo-title"].value;

    // const rawDueDateValue = editableDialog.querySelector("form").elements["todo-dueDate"].value; // in format yyyy-mm-dd (default format)  
    // const updatedDueDate = rawDueDateValue ? format(rawDueDateValue, "MMMM d, yyyy") : '';

    // const updatedNotes = editableDialog.querySelector("form").elements["todo-notes"].value;
    // const updatedPriorityValue = editableDialog.querySelector("form").elements["priorityList"].value;

    // changeLeftRightBorderColor(todoPreviewDivUpdate, updatedPriorityValue); // update border color

    // // update values in the quickdisplaydiv
    // const dialogCheckbox = todoPreviewDivUpdate.querySelector("input[type = 'checkbox']");
    // const dialogDueDateDiv = todoPreviewDivUpdate.querySelector(".duedateDiv");
    // dialogCheckbox.label.innerText = updatedTitle;
    // dialogDueDateDiv.innerText = `${updatedDueDate}`;

    // // update values in the readOnlyDialog
    // updatedStoreFormDiv.innerText = `
    //                 Title:   ${updatedTitle}
    //                 Notes:    ${updatedNotes}
    //                 Due Date: ${updatedDueDate}
    //                 Priority: ${updatedPriorityValue}
    //                 `
    // });
    
    "displayForm": (ref) => handleDisplayForm(),

  // projectTitleDiv.addEventListener("switch-to-prevProjTitlDiv", () => { // triggereed if delbtn. switches to a prevProjTitlDiv
    //     delTriggered = true;
    //     handleProjectSelection();
    
     // projectTitleDiv.addEventListener("click", () => { // triggered by directly clicking on a ProjTitlDiv to switch to that project
    //     if (!delTriggered) {
    //         handleProjectSelection();
    //     };
    //     delTriggered = false;
    // });
    
    // todoListPaneContainer.replaceChildren(projectDiv);

    // console.log(projectDiv)

    // const projectInfo = {
    //     currDiv: projectDiv,
    //     projectTitleDiv,
    //     dataRef: dataAttr,
    //     btn: addNoteButtonToTodoListPane,
    // };

    // storeProjectInfo(projectInfo)