// import _ from 'lodash';

import './style.css';

// Queries to HTML
// const section = document.querySelector('section');
const inputText = document.querySelector('input');
const todoMainContainer = document.querySelector('.todos-container');
// const ClearBtn = document.querySelector('button');

// class object
class MyObjects {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

// remove todo function
const removeTodo = (todo) => {
  todoMainContainer.removeChild(todo);
  let count = 0;
  const DataFromLocalStorage = JSON.parse(localStorage.getItem('list'));
  const data = Array.from(DataFromLocalStorage).filter((i) => i.completed = false);
  data.map((i) => i.index = count += 1);
  localStorage.setItem(('list'), JSON.stringify(data));
};

// edit todo function
const editTodo = (todoContainer, todo) => {
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.classList = 'editInput';
  editInput.value = todo.textContent;
  todoContainer.replaceChild(editInput, todo);
  editInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const todoContainers = document.querySelectorAll('.todoContainer');
      const DataFromLocalStorage = JSON.parse(localStorage.getItem('list'));
      for (let i = 0; i < todoContainers.length; i += 1) {
        if (todoContainers[i].classList.contains('checkedContainer')) {
          DataFromLocalStorage[i].description = editInput.value;
          localStorage.setItem('list', JSON.stringify(DataFromLocalStorage));
        }
      }
      editInput.parentElement.classList.remove('checkedContainer');
      todoContainer.replaceChild(todo, editInput);
      todo.textContent = editInput.value;
    }
  });
};


// Array of Objects
const myArray = [];

// Add Methods
const addTodo = (todoValue) => {
  const todoContainer = document.createElement('div');
  todoContainer.className = 'todoContainer';
  todoContainer.innerHTML = `
    <input type='checkbox' class='checkbox'>
    <span>${todoValue}</span>
    <i class='fas fa-ellipsis-v'></i>
    <i class='fas fa-trash-alt'></i>
  `;
  todoMainContainer.appendChild(todoContainer);
  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach((i) => {
    i.addEventListener('click', () => {
      i.parentElement.classList.toggle('checkedContainer');
      i.nextElementSibling.classList.toggle('checkToDo');
      i.parentElement.lastElementChild.classList.toggle('trash-active');
      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('edited-disable');
    });
  });

  // Objects
  const object = new MyObjects(todoValue, false, checkbox.length - 1);
  myArray.push(object);
  localStorage.setItem('list', JSON.stringify(myArray));

  const EditIcons = document.querySelectorAll('.fa-ellipsis-v');
  EditIcons.forEach((i) => {
    i.addEventListener('click', () => {
      editTodo(todoContainer, i.previousElementSibling);
    });
  });

  const removeIcons = document.querySelectorAll('.fa-trash-alt');
  removeIcons.forEach((i) => {
    i.addEventListener('click', () => {
      removeTodo(i.parentElement);
    });
  });
};

inputText.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputText.value) {
    e.preventDefault();
    addTodo(inputText.value);
    inputText.value = null;
  }
});
