/**
 * @jest-environment jsdom
 */



document.body.innerHTML =`
<section class="todo-container">
<div class="header">
  <h1>Today's ToDo</h1>
  <i class="fas fa-sync"></i>

</div>
<form>
  <input type="text" placeholder="Add to your list..." >
  <div class="todos-container">

  </div>
  <button type="button">Clear all completed</button>
</form>
</section>`;


import addTodo from '../src/index';
import { getFromLocal, updateLocalStorage } from '../src/ToDoStatus.js';


describe("Adding an item", ()=> {
  test('checked argument to addTodo item matches description in localstorage', ()=> {
    addTodo('item1');

    expect(JSON.parse(localStorage.getItem('list'))).toEqual([ 
      { description: 'item1', completed: false, index: -1 },
    ]);

    expect(document.querySelector('.todos-container').childNodes.length).toBe(1);
  });
});