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
</section>`

const addTodo = require ('../src/index');
describe("Adding an item", ()=> {
  test('checked argument to addTodo item matches description in localstorage', ()=> {
    
  });
});