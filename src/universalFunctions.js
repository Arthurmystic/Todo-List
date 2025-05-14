// universalFunctions.js

// Stores data in an array
function storeData() {
    const storageArr = [];
    return function dataStorage(data) {
        if (data !== undefined && !storageArr.includes(data)) storageArr.push(data); // store data if it is not already inside the storageArr
        return storageArr;
    }
};

export { storeData }


// const val = e.target.dataset.ref;
// const idx = storeProjectInfo().findIndex(projInfo => projInfo.dataRef == val);
// const currProjectDiv = storeProjectInfo()[idx].div;
// const addTodoButton = storeProjectInfo()[idx].button;
// todoListPaneContainer.replaceChildren(currProjectDiv);
// todoListButton.replaceChildren(addTodoButton);


// (function defaultProject() {
//     const isDefault = true;
//     const { projectTitleDiv, projectDiv, todoListPane, todoListPaneContainerDiv, 
//         addNoteButtonToTodoListPane, button } = createFormFields();
//     projectTitleDiv.innerText = "Default Project";
//     projectsPane.appendChild(projectTitleDiv);
//     generateProject() // (todoListPane, projectDiv, projectTitleDiv, todoListPaneContainerDiv, addNoteButtonToTodoListPane)
//     todoListPaneContainer.replaceChildren(projectDiv);
//     return { projectTitleDiv }; 
// })();