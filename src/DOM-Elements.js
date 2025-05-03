const domElements = (function () {

    const createDiv = (state) => {
        const elemDiv = document.createElement("div");
        elemDiv.setAttribute("class", state.elemClass);
        elemDiv.setAttribute("id", state.id);
        return elemDiv;
    }

    const createDialogBox = (state) => {
        dialogBox = document.createElement("dialog");
        dialogBox.setAttribute("id", state.id);
        return dialogBox;
    }

    const createInput = (state) => {
        const input = document.createElement("input");
        input.setAttribute("name", state.name);
        input.setAttribute("id", state.id);
        if (state.type) input.setAttribute("type", state.type); // some inputs have 'type', other dont.
        if (state.value) input.setAttribute("value", state.value); // some inputs have 'value', other dont.
        return { input };
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
        legend.innerText = state.text
        fieldset.appendChild(legend);
        return { fieldset };
    };

    const createTextArea = (state) => {
        const textarea = document.createElement("textarea");
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
        const option1 = createSelectOption({ value: "high", text: "High" });
        const option2 = createSelectOption({ value: "medium", text: "Medium" });
        const option3 = createSelectOption({ value: "low", text: "Low" });

        selectOptions.appendChild(option1);
        selectOptions.appendChild(option2);
        selectOptions.appendChild(option3);
        return { selectOptions }
    }

    return { createInput, createLabel, createFieldset, createDiv, createDialogBox, createTextArea, createPrioritySelector };
})();

export { domElements }





