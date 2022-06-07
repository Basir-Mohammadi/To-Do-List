// import _ from 'lodash';
import './style.css';

// Queries to HTML
const section = document.querySelector('section');
const inputText = document.querySelector('input');
const todoMainContainer = document.querySelector('.todos-container');
const ClearBtn = document.querySelector('button');

class MyObjects {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const myArray = [];
const todosContainer = document.querySelector
