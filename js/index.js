let root = document.getElementById('root');

let heading = document.createElement('h1');
heading.className = 'heading';
heading.innerHTML = "My Todos List";

root.appendChild(heading);

let inputContainer = document.createElement('div');
inputContainer.className = 'inputContainer';

let input = document.createElement('input');
input.className = 'input';
input.id = 'myInput';
input.type = 'text';
input.placeholder = 'Enter Title...';

let button = document.createElement('span');
button.className = 'btn';
button.innerHTML = 'Add';
button.onclick = ()=>{
    newElement();
}

inputContainer.appendChild(input);
inputContainer.appendChild(button);
root.appendChild(inputContainer);

function newElement(){
    
}