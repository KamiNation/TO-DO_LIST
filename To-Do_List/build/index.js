"use strict";
// Here we got the button element and set the type to HTMLButtonElement
let button = document.querySelector("button");
// Here we got the input element and set the type to HTMLInputElement
let inputs = document.querySelector("input");
// Here we got the ul element and set the type to HTMLElement
let ul = document.querySelector("ul");
// Here we created a new array and set the type to string, so it is 
// an array of type string
let newInput = [];
console.log(inputs);
console.log(inputs.value);
// Here we added an eventlistener to the button, and that event listener
// has 2 parameter, one is a click which is the type of event we want to
// happen and then an anonymous function.
button.addEventListener("click", () => {
    // let input: string = inputs.value;
    // console.log(input);
    // console.log(newInput);
    // newInput.push(inputs.value);
    // console.log(newInput)
    if (inputs.value.length > 0) {
        newInput.push(inputs.value);
        inputs.value = '';
        displayCurrentTodo();
    }
});
const displayCurrentTodo = () => {
    let listHtml = '';
    for (let i = 0; i < newInput.length; i++) {
        listHtml += `<li> ${newInput[i]} <br>
        <button onclick='editMyTask(${i})'>Edit</button> 
        <button onclick='deleteMyTask(${i})'>Completed</button></li>`;
    }
    ;
    console.log(newInput);
    console.log(listHtml);
    ul.innerHTML = listHtml;
    // ul.innerHTML += `<li> ${newInput[i]} <br> <button>Edit</button> <button onclick="deleteTask(${i})">Completed</button></li>`
};
const deleteMyTask = (index) => {
    newInput.splice(index, 1);
    displayCurrentTodo();
};
const editMyTask = (index) => {
    let a = prompt("Enter your new task");
    if (a !== '') {
        newInput.splice(index, 1, `${a}`);
        displayCurrentTodo();
    }
};
// button.addEventListener("click", ()=> {
//     // The anonymous function has a var called inputed that stores the value of 
//     // the input html element  
//     let inputed: string = input.value;
//     console.log(inputed);
//     // We then pushed the value saved in the inputed variable into the array we
//     // declared above
//     console.log(newInput)
//     // We have an if function that checks the number of children 
//     // of the ul element by using the childElementCount property. 
//     // The childElementCount property returns the number of child 
//     // elements of this element.
//     // if the ul.childElementCount  is greater than 0 then we 
//     // specified a condition of replacing the the ul children using
//     // the replaceChildren() method.
//     // The replaceChildren() method replaces the existing children 
//     // of a Document with a specified "new set of children".
//     // if (ul.childElementCount>0){
//     //     ul.replaceChildren();
//     // }
//     // We have a for loop that loops through the array so that 
//     // whenever we have a new value from the input element it
//     // displays it dynamically 
//     for(let i: number = 0; i < newInput.length; i++){
//         // We created a new element of the unordered list "li"
//         // let li = document.createElement('li')
//         // We assigned the values that were pushed into the 
//         // array using the innerText property to the newly 
//         // created li element
//         // li.innerText+= newInput[i];
//         // Then we appended that new li element to our existing 
//         // ul element using the appendChild method
//         // The appendChild method adds a node to the end of the 
//         // list of children of a specified parent node.
//         // ul.appendChild(li)
//         if(input.value.length > 0){
//             newInput.push(inputed) ;
//             input.value = '';
//         }
//         ul.innerHTML += `<li> ${newInput[i]} <br> <button>Edit</button> <button onclick="deleteTask(${i})">Completed</button></li>`
//         // We created a new element of the button element and stored it
//         // a var called edit.
//     }
// });  
