import { Component } from "react";
import { Space } from 'antd';
import TodoListItem from "./TodoListItem";

export default class TodoList extends Component {
    render() {
        return (
            <>
                <Space direction="vertical" size={16}>
                    {this.props.todos.map(todo => <TodoListItem key={todo.id} {...todo} toggleTodo={this.props.toggleTodo} />)}
                </Space>
            </>
        );
    }
}