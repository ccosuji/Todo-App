import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
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
                completed: false
            },
            {
                id: 3,
                title: 'Call Mum',
                completed: false
            },
        ]
    }
    render() {

        return (
            <div className="App">
                <Todos todos={this.state.todos} />


            </div>
        );
    }

}

export default App;
