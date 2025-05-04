// index.js

// import "./styles.css";
// import { domElements }  from "./DOM-Elements";

import { editableFormDiv, dialogBox, createButton } from "./createFormElements.js";
import { basicButtonStyles } from "./js-styles.js"


const addTodoButton = createButton("button", "+", basicButtonStyles, { type: "button", elemClass: "addButton", id: crypto.randomUUID() });
document.body.appendChild(addTodoButton);

document.body.appendChild(editableFormDiv);

// const sam  = "arthur";
// const sama  = "mugoya";
// const same  = "maliza";
// const samo  = "erisa";

// const samDiv = document.createElement("div");
// const samDiv2 = document.createElement("div");
// const samDiv3 = document.createElement("div");
// const samDiv4 = document.createElement("div");
// const p = document.createElement("p");

// samDiv.innerText = `I am: ${sam}`;
// document.body.appendChild(samDiv);

// samDiv2.innerText = `I am: ${sama}`;
// document.body.appendChild(samDiv2);

// samDiv3.innerText = `I am: ${same}`;
// document.body.appendChild(samDiv3);

// document.body.appendChild(p);

// samDiv4.innerText = `I am: ${sam}
//                     And I am : ${sama}
//                     And I am : ${same}
//                     And I am : ${samo}
//                     And I am done

//                     `;


// document.body.appendChild(samDiv4);




addTodoButton.addEventListener("click",()=>dialogBox.showModal());

 