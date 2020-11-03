import React, { Component } from 'react';
import Todoitems from './Todoitems';
class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <Todoitems />
        ))
    }

}

export default Todos;

