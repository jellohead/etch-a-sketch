// eas.js
// container div id = grid-container
const body = document.body;
// body.append("hello world");


console.log("Hello world");
let text;
let newDiv;
const wrapper = document.getElementById('grid-container');
let gItems;


for (let i = 0; i < 256; i++) {
    newDiv = document.createElement("div");
    text = document.createTextNode(`new div ${i + 1}`);
    newDiv.appendChild(text);
    newDiv.setAttribute("id", "grid-item");
    wrapper.appendChild(newDiv);
    newDiv.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'red';
    });
}

// gItems = document.querySelectorAll('grid-item');
// console.log("gItems = " + gItems);
// gItems.forEach(addEventListener('mouseover', e => {
    // console.log(e);
    // e.target.style.color = 'red';

// }));


