const todoMainContainer = document.querySelector('.todos-container');
// edit todo function
export const editTodo = (todoContainer, todo) => {
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.className = 'editInput';
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

// remove todo function
export const removeTodo = (todo) => {
  todoMainContainer.removeChild(todo);
  let count = 0;
  const DataFromLocalStorage = JSON.parse(localStorage.getItem('list'));
  const data = Array.from(DataFromLocalStorage).filter((i) => i.completed === false);
  data.map((i) => i.index =count += 1); // eslint-disable-line
  localStorage.setItem(('list'), JSON.stringify(data));
};
