import { editTodo, removeTodo } from './functionalities';
import { getFromLocal, updateLocalStorage } from './ToDoStatus';// eslint-disable-line
import './style.css';

// Queries to HTML
const inputText = document.querySelector('input');
const todoMainContainer = document.querySelector('.todos-container');
const ClearBtn = document.querySelector('button');

// class object
class MyObjects {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

// Array of Objects
export const myArray = [];

// Add Methods
const addTodo = (todoValue) => {
  const todoContainer = document.createElement('div');
  todoContainer.className = 'todoContainer';
  todoContainer.innerHTML += `
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
      updateLocalStorage();
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
      i.parentElement.classList.add('checkedContainer');
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

window.addEventListener('load', getFromLocal);

// Clear all function
const ClearAllBtn = () => {
  const localData = JSON.parse(localStorage.getItem('list'));
  const todoContainer = document.querySelectorAll('.todoContainer');
  todoContainer.forEach((i) => {
    if (i.classList.contains('checkedContainer')) {
      removeTodo(i);
    }
  });
  let count = 0;
  const data = Array.from(localData).filter(i => i.completed === false);// eslint-disable-line
  data.map(i => i.index = count += 1); // eslint-disable-line
  localStorage.setItem('list', JSON.stringify(data));
};
ClearBtn.addEventListener('click', ClearAllBtn);