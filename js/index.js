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

let ul = document.createElement('ul');
ul.className = 'ulContainer';
ul.id = 'myUL';

let li = document.createElement('li');
li.className = "checked"; 

ul.appendChild(li);
root.appendChild(ul);

var myTodoList = document.getElementsByTagName('li');
var i;
for (i = 0; i < myTodoList.length; i++) {
     var span = document.createElement('span');
     var txt = document.createTextNode("\u00D7");
     var edit = document.createElement('button');
     edit.className = 'edit';
     edit.innerText =  "Edit";
     span.className = 'close';
     span.appendChild(txt);
     myTodoList[i].appendChild(edit);
     myTodoList[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = (()=>{
        var div = this.parentElement;
        div.style.display = "none";
    })
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == ''){
        alert('Please Enter Value');
    }
    else{
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = "";

    let span = document.createElement('span');
    let text = document.createTextNode("\u00D7");
    let edit = document.createElement('button');
    edit.className = 'edit';
    edit.innerText =  "Edit";
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(edit);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
         close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
         }
    }

    const editBtn = document.querySelectorAll(".edit");
    editBtn.forEach(element => {
    element.addEventListener('click' , editItem);
    });

    function editItem(event){
    const listItem = event.target.parentNode;
    const itemText = listItem.firstChild;
    const newItemText = prompt("Enter the Edit Value", itemText.textContent);
    if(newItemText !== null){
    itemText.textContent = newItemText;
    }
  }
}