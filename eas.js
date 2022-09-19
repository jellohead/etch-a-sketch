// eas.js
// container div id = grid-container
const body = document.body;
// body.append("hello world");


console.log("Hello world");
let text;
let newDiv;
const wrapper = document.getElementById('grid-container');

for (let i = 0; i < 16; i++) {
    newDiv = document.createElement("div");
    text = document.createTextNode(`new div ${i + 1}`);
    newDiv.appendChild(text);
    newDiv.classList.add("grid-item");
    wrapper.appendChild(newDiv);
}