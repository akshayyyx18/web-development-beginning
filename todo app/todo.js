let todoList=[
    {item:'Buy Milk',
    dueDate:'04/05/2026'},
     {item:'go to college',
    dueDate:'04/05/2026'}
];
//array to store todo things
displayItems()//ek br page load hone p use hoga then item add hone p
function addtodo(){
let inputElement=document.querySelector('#todo-input');
let dateElement=document.querySelector('#todo-date');
let todoItem=inputElement.value;
let todoDate=dateElement.value;
todoList.push({item: todoItem, dueDate: todoDate});

//input vala box khali krnek liye
inputElement.value='';
dateElement.value='';
displayItems(); 
}
function displayItems(){
let containerElement=document.querySelector('.todo-container');
let newHtml='';
// displayElement.innerText='';//important to use taki purana input dubara add na ho
for(let i=0;i<todoList.length;i++){
    let item=todoList[i].item;
    let dueDate= todoList[i].dueDate;
    newHtml += `
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="td-delete"onclick="todoList.splice(${i},1);
    displayItems();" 
    >Delete</button>
    
    `;
    //splice is used to delete a specific item and then use displayitem to change the display
}
containerElement.innerHTML = newHtml;
//this is used when we change anything delete or add anything it change the html
}