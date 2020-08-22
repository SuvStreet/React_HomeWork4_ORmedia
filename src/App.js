import React from 'react';

import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import Count from './components/Count';

import './App.sass';

class App extends React.Component {
  maxId = 100;

  state = {
    todolist: [
      { message: "Task 1", important: false, done: false, id: 1 },
      { message: "Task 2", important: false, done: false, id: 2 },
      { message: "Task 3", important: false, done: false, id: 3 },
      { message: "Task 4", important: false, done: false, id: 4 },
      { message: "Task 5", important: false, done: false, id: 5 },
    ],
  };

  onDelete = (id) => {
    //console.log(id);
    this.setState((prevState) => {
      const todos = prevState.todolist.filter((todo) => {
        return todo.id !== id;
      })
      return {
        todolist: todos,
      }
    })
  }

  onAdded = (valueMessage) => {
    if (valueMessage.trim()) {
      this.setState((prevState) => {
        const addTodos = [
          ...prevState.todolist,
          { message: valueMessage, important: false, done: false, id: ++this.maxId }
        ]
        return {
          todolist: addTodos,
        }
      })
    }
  }

  onToggleDone = (id) => {
    this.setState((prevState) => {
      const todos = prevState.todolist.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
      return {
        todolist: todos,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState((prevState) => {
      const todos = prevState.todolist.map((todo) => {
        if (todo.id === id) {
          todo.important = !todo.important;
        }
        return todo;
      })
      return {
        todolist: todos,
      };
    });
  }

  render() {
    const { todolist } = this.state;
    const todoDone = todolist.filter((item) => item.done).length;
    const todoI = todolist.filter((item) => !item.important).length;
    const todoActive = todolist.length - todoDone;
    const todoImportant = todolist.length - todoI;

    return (
      <div className="wrapper">
        <Header />
        <SearchInput />
        <Filter todos={todolist}/>
        <TodoList
          todos={todolist}
          onDelete={this.onDelete}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant} />
        <AddTask onAdded={this.onAdded} />
        <Count done={todoDone} todoActive={todoActive} todoImportant={todoImportant} />
      </div>
    );
  }
}

export default App;
