//DOM-Elements.js

const domElements = (function () {
    
    const projectButtonDiv = document.querySelector("#projectButtonDiv");
    const todoListButtonDiv = document.querySelector("#todoListButtonDiv");
    const addProjectButton = document.querySelector("#addProjectButton");
    const projectsPane = document.querySelector("#projectsPane");
    const todoListPaneContainer = document.querySelector("#todoListPaneContainer");
    
    const img = () => document.createElement("img");  

    const buildElement = (elemType, state) => {
        const element = document.createElement(elemType);
        element.setAttribute("id", state.id);
        if (state.name) element.setAttribute("name", state.name);
        if (state.elemClass) element.setAttribute("class", state.elemClass);
        if (state.type) element.setAttribute("type", state.type); 
        if (state.value) element.setAttribute("value", state.value);
        if (state.required) element.required = true;
        if (state.dataAction) element.dataset.action = state.dataAction;
        return { element };
    }

    const createLabel = (state) => {
        const label = document.createElement("label");
        label.setAttribute("for", state.id);
        if (state.text) label.innerText = state.text;
        return { label };
    };

    const createFieldset = (state) => {
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.innerText = state.text;
        fieldset.appendChild(legend);
        return { fieldset };
    };

    const createTextArea = (state) => {
        const textarea = document.createElement("textarea");
        textarea.setAttribute("id", state.id);
        if (state.name) textarea.setAttribute("name", state.name);
        if (state.placeholder) textarea.setAttribute("placeholder", state.placeholder);
        return { textarea }
    }

    const createSelectOption = (state) => {
        const option = document.createElement("option");
        option.setAttribute("value", state.value);
        option.innerText = state.text;
        return option;
    }

    const createPrioritySelector = (state) => {
        const selectOptions = document.createElement("select");
        selectOptions.setAttribute("name", state.name);
        selectOptions.setAttribute("id", state.id);

        const option1 = createSelectOption({value: "High", text: "High"});
        const option2 = createSelectOption({value: "Medium", text: "Medium"});
        const option3 = createSelectOption({value: "Low", text: "Low"});

        selectOptions.appendChild(option1);
        selectOptions.appendChild(option2);
        selectOptions.appendChild(option3);
        return { selectOptions }
    }
    return { buildElement, createLabel, createFieldset, createTextArea, img,
        createPrioritySelector, projectButtonDiv, todoListButtonDiv, addProjectButton,
        projectsPane, todoListPaneContainer
    };

})();

export { domElements }






