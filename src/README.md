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