import React from 'react';
import './App.css';
import List from './components/List';
import ToDoHeader from './components/ToDoHeader';
import{toDoItems} from "../mock/toDoItems";
import {v4 as uuidv4}from 'uuid';
class App extends React.Component {
  state={
    toDoItems,
  }
  addToDo = (text)=> {
    const newToDo = {
      id: uuidv4(),
      text: text,
      done: false
    }
    this.setState({
      toDoItems:[...this.state.toDoItems,newToDo]
    })
  }
  editToDo=(id)=>{
    const index=this.state.toDoItems.findIndex((toDo)=>toDo.id===id)
    const editingToDoitem=this.state.toDoItems.find((toDo)=>toDo.id===id)
    const newItems=[...this.state.toDoItems]
    newItems.splice(index,1,{...editingToDoitem,done: !editingToDoitem.done})
    this.setState({toDoItems:newItems})
  }
  removeToDo = (id) => {
    const index = this.state.toDoItems.findIndex(
      (toDo) => toDo.id === id
    );
    const newItems = [...this.state.toDoItems];

    newItems.splice(index, 1);
    this.setState({ toDoItems: newItems });
  };


  render(){
    return(
      < div className="App">
      <ToDoHeader />
      <List toDoItems={this.state.toDoItems} />
    </div>
    );
  }
}
 

export default App;
