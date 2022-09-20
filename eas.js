// eas.js
const body = document.body;

console.log("Hello world");
let text;
let newDiv;
const wrapper = document.getElementById('grid-container');
let gItems;
let buttonItem = document.getElementById('btn');

for (let i = 0; i < 256; i++) {
    newDiv = document.createElement("div");
    // text = document.createTextNode(`new div ${i + 1}`);
    text = document.createTextNode(`${i + 1}`);
    newDiv.appendChild(text);
    newDiv.setAttribute("id", "grid-item");
    wrapper.appendChild(newDiv);
    newDiv.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'red';
    });
}

buttonItem.addEventListener('click', e => {
    let response = prompt('Enter number of squares per side you want (100 max)');
    console.log('prompt response = ' + response);

    //remove child nodes grid-item
    const container = document.querySelector('#grid-container');
    removeAllChildNodes(container);

})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

