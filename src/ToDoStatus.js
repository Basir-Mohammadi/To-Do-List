import { editTodo, removeTodo } from './functionalities';
import { myArray } from './index';// eslint-disable-line

const todoMainContainer = document.querySelector('.todos-container');

// get from localstorage function
const getFromLocal = () => {
  const data = JSON.parse(localStorage.getItem('list'));
  data.map(i => {// eslint-disable-line
    myArray.push(i);
    const todoContainer = document.createElement('div');
    todoContainer.className = 'todoContainer';
    todoContainer.innerHTML += `
      <input type='checkbox' class='checkbox'>
      <span>${i.description}</span>
      <i class='fas fa-ellipsis-v'></i>
      <i class='fas fa-trash-alt'></i>
    `;
    todoMainContainer.appendChild(todoContainer);

    const EditIcons = document.querySelectorAll('.fa-ellipsis-v');
    EditIcons.forEach((i) => {
      i.addEventListener('click', () => {
        editTodo(todoContainer, i.previousElementSibling);
        i.parentElement.classList.add('checkedContainer');
      });
    });
  });

  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach((i) => {
    i.addEventListener('click', () => {
      i.parentElement.classList.toggle('checkedContainer');
      i.nextElementSibling.classList.toggle('checkToDo');
      i.parentElement.lastElementChild.classList.toggle('trash-active');
      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('edited-disable');
      updateLocalStorage();// eslint-disable-line
    });
  });

  const removeIcons = document.querySelectorAll('.fa-trash-alt');
  removeIcons.forEach((i) => {
    i.addEventListener('click', () => {
      removeTodo(i.parentElement);
    });
  });
  localStorage.setItem('list', JSON.stringify(myArray));
};

// window.addEventListener('load', getFromLocal);


// Update local Storage
const updateLocalStorage = () => {
  const localData = JSON.parse(localStorage.getItem('list'));
  const todos = document.querySelectorAll('span');
  for (let i = 0; i < todos.length; i += 1) {
    if (todos[i].classList.contains('checkToDo')) {
      localData[i].completed = true;
    } else {
      localData[i].completed = false;
    }
  }
  localStorage.setItem('list', JSON.stringify(localData));
};

export { getFromLocal, updateLocalStorage };
