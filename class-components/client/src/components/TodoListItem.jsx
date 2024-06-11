import { Component } from "react";

import { Card, Button } from 'antd';

export default class TodoListItem extends Component {
  render() {
    return (
      <Card
        title={this.props.label}
        style={{
          width: 300,
          backgroundColor: this.props.isComplete ? 'red' : 'green'
        }}
      >

        <Button type="primary" onClick={() => this.props.toggleTodo(this.props.id)} >Done</Button>
      </Card>
    );
  }
}
