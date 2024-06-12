// Class components DON'T use hooks!!! Use live sycle methods such as 'componentDidMount', 'componentDidCatch', 'componentDidUpdate', 'componentWillUnmount'.

import { Component } from "react"; // We must import React, if we want to use class components.

import { Menu } from "antd";
import TodoList from "./components/TodoList";
import TodoContext from "./context/TodoContext";
import Header from "./components/Header";

class App extends Component {
  // In class components we have ONLY one state a.k.a the constructor
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      name: 'Pesho'
    }

    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }


  componentDidMount() {
    console.log('componentDidMount');

    fetch('http://localhost:3030/jsonstore/todos')
    .then(res => res.json())
    .then(result => {
      this.setState({
        todos: Object.values(result)
      })
    })
  }

  toggleTodo(todoId) {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === todoId ? {...todo, isCompleted: !todo.isCompleted} : todo)
    })
  }

  deleteTodo(todoId) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId),
    })
  }

    render() {
        return (
            <TodoContext.Provider value={{ name: this.state.name, todos: this.state.todos }}>
              <Header />
              <h1>{this.state.name}</h1>

              <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} />
            </TodoContext.Provider>
        )
    }
}

export default App;
