import React, { Component } from 'react';
import { Input } from "./components/Input"
import { List } from "./components/List"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.deleteCurrentTask = this.deleteCurrentTask.bind(this);
    this.state = {
      items: []
    }
  }

  addItem(task) {
    const item = {
      text: task,
      status: "active"
    }
    this.setState(
      {items:　this.state.items.concat({item})}
    )
    console.log(this.state.items);
  }

  deleteCurrentTask(index) {
    //this.state.items.splice(index, 1)
    this.state.items[index].item.status = "deleted";

    this.setState(
      {items: this.state.items}
    )
    // console.log(index);
    // console.log(this.state.items);
  }

  render() {
    
    return (
      <div className="App">
        <h2>ToDoList</h2>
        <Input addItem={this.addItem}/>
        <h3
        style={{
          float: "left",
          paddingLeft: 400
        }}>
        Task List</h3>
        <List 
        style={{
          paddingTop: 30
        }}
        tasks={this.state.items} deleteCurrentTask={(index) => this.deleteCurrentTask(index)}/>
      </div>
    );
  }
}

export default App;
