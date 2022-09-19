// eas.js
// container div id = grid-container
const body = document.body;
// body.append("hello world");


console.log("Hello world");
let text;
let newDiv;
const wrapper = document.getElementById('grid-container');

for (let i = 0; i < 256; i++) {
    newDiv = document.createElement("div");
    text = document.createTextNode(`new div ${i + 1}`);
    newDiv.appendChild(text);
    newDiv.setAttribute("id", "grid-item");
    wrapper.appendChild(newDiv);
}