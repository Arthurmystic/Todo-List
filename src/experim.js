const domElements = (function () {

    const div = ()=> document.createElement("div");
    
    const createInput = (state) => {
        const input = document.createElement("input");
        input.setAttribute("id", state.id);
        input.setAttribute("type", state.type);
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


    const createFieldset = (state) => {
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.innerText = state.text
        fieldset.appendChild(legend);
        return { fieldset };

    };

    return { createInput, createLabel, createFieldset, div };

})();


function createCheckBox(state){  // using composition to create the checkbox
    state.type = "checkbox";
    return{
        ...domElements.createInput(state),
        ...domElements.createLabel(state),
    }
}

const check1 = createCheckBox ({id:"01", value:"trial", name:"dig", text:"This is a sample"})
const div1 = domElements.div()
div1.appendChild(check1.input);
div1.appendChild(check1.label);

document.body.appendChild(div1);