const todoList =['make dinner', 'bing watch'];

 function rendertodoList(){
let todolistHTML = '';

for(let i = 0; i < todoList.length; i++){
    const todo =todoList[i];
    const html = `<p>${todo}</p>`;
    todolistHTML+= html;
}
document.write(todolistHTML);


document.querySelector('.def')
.innerHTML = todolistHTML;
 }


function todol(){
  const lame = document.querySelector('.abc');
  const total = lame.value;

  lame.value = '';

  rendertodoList();
}