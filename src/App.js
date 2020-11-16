import React, { Component } from 'react';
import Header from './Components/layouts/Header';
import './App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import Clock from './Components/Clock';
class App extends Component {



    state = {
        todos: [
            {
                id: 1,
                title: 'Take Out the trash',
                completed: false
            },
            {
                id: 2,
                title: 'Dinner with wife',
                completed: true
            },
            {
                id: 3,
                title: 'Call Mum',
                completed: false
            },
        ]
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }
    // Delete Todo
    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    // // Add Todo
    addTodo = (title) => {
        const newTodo = {
            id: 4,
            title,
            completed: false,
        }
        this.setState({ todos: [...this.state.todos, newTodo] })
    }
    render() {
        return (
            <div className="App">
                <div className="container">

                    <Clock />
                    <Header />
                    <AddTodo addTodo={this.addTodo} />
                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />

                </div>


            </div>
        );
    }

}

export default App;
