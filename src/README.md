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