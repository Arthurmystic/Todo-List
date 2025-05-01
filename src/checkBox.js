import checkBox from "./DOM-Elements.js"


function createCheckBox(state){  // using composition to create the checkbox
    return{
        ...createInput(state),
        ...createLabel(state),
    }

// const toDoItem = ()=>{
//     title,
//     notes,
//     dueDate,
//     priority,
// }


// checkBox1 = checkBox({ id:'item1', value:"toDo1", name:"toDoList", text:'inputText' })
// checkBox1.appendfieldSet1

// const checkBox = (state) => {
//     const input = document.createElement("input")
//     input.setAttribute("id",state.id);
//     input.setAttribute("type","checkbox");
//     input.setAttribute("value",state.value);
//     input.setAttribute("name",state.name);

//     const label = document.createElement("label");
//     label.setAttribute("for", state.id);
//     label.innerText = state.text;

//     return {input, label}