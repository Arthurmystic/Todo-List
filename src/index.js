// import "./styles.css";
// import { domElements }  from "./DOM-Elements";

import { editableFormDiv, dialogBox, createButton } from "./checkBox.js";
import { basicButtonStyles } from "./js-styles.js"


const addTodoButton = createButton("button", "+", basicButtonStyles, { type: "button", elemClass: "addButton", id: crypto.randomUUID() });
document.body.appendChild(addTodoButton);

document.body.appendChild(editableFormDiv);


addTodoButton.addEventListener("click",()=>dialogBox.showModal());

 