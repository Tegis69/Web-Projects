const addToDo = document.getElementById('addToDo');
const textInput = document.getElementById('inputField');
const toDoContainer = document.getElementById('toDoContainer')


//button click function for adding to-dos
addToDo.addEventListener('click', function() {
    let paragraph = document.createElement('button');
    paragraph.innerText = textInput.value;
    toDoContainer.appendChild(paragraph);
    //doccument.getElementById('inputField').reset;
})

//p.addEventListener('click', function() {

//})