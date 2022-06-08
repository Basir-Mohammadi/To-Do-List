// import _ from 'lodash';
import './style.css';

// Queries to HTML
const section = document.querySelector("section");
const inputText = document.querySelector("input");
const todoMainContainer = document.querySelector(".todos-container");
const ClearBtn = document.querySelector("button");

// class object
class MyObjects {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const myArray = [];
const addTodo = (todoValue) => {
  const todoContainer = document.createElement('div');
  todoContainer.className = 'todoContainer';
  todoContainer.innerHTML = `
    <input type='checkbox' class='checkbox';
    <span>${todoValue}</span>
    <i class="fas fa-ellipsis-v"></i>
    <i class="fas fa-trash-alt"></i>
  `;
  todoMainContainer.appendChild(todoContainer);
};

inputText.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputText.value) {
    e.preventDefault();
    addTodo(inputText.value);
    inputText.value = null;
  }
});
