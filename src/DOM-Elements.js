export const domElements = (function () {

    const createInput = (state) => {
        const input = document.createElement("input");
        input.setAttribute("id", state.id);
        input.setAttribute("type", state.id);
        input.setAttribute("value", state.value);
        input.setAttribute("name", state.name);
        return { input };
    }

    const createLabel = (state) => {
        const label = document.createElement("label");
        label.setAttribute("for", state.id);
        label.innerText = state.text;
        return { label };
    };

    function createCheckBox(state){  // using composition to create my checkbox
        return{
            ...createInput(state),
            ...createLabel(state),
        }

    }
    // const createCheckBox = (state) => {
    //     const input = document.createElement("input");
    //     input.setAttribute("id", state.id);
    //     input.setAttribute("type", "checkbox");
    //     input.setAttribute("value", state.value);
    //     input.setAttribute("name", state.name);

    //     const label = document.createElement("label");
    //     label.setAttribute("for", state.id);
    //     label.innerText = state.text;

    //     return { input, label }
    // };

    const createEmptyFieldset = (state) => {
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.innerText = state.text
        fieldset.appendChild(legend);

        return { fieldset };

    };

    const legend = () => {
        legenddocument.createElement("legend")

    };

})();





