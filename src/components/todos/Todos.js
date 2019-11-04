import React from 'react';
import Header from './Header';
import Sidebar from './sidebar/Sidebar';
import TodoList from './sidebar/TodoList';

class Todos extends React.Component {
    state = {
        isSidebarOpen: false,
        edittedText: '',
        todoLists: [
            {
                id: 'home',
                title: 'Home',
                items: [
                    { done: true, description: 'Buy grosseries', isTextEditable: false },
                    { done: false, description: 'Prepare dinner', isTextEditable: false },
                ]
            },
            {
                id: 'work',
                title: 'Work',
                items: [
                    { done: false, description: 'Talk to boss', isTextEditable: false },
                    { done: false, description: 'Meeting', isTextEditable: false },
                    { done: true, description: 'Prepare report', isTextEditable: false },
                ]
            },
            {
                id: 'vacation',
                title: 'Vacation',
                items: [
                    { done: true, description: 'Select destination', isTextEditable: false },
                    { done: true, description: 'Buy tickets', isTextEditable: false },
                    { done: false, description: 'Book hotel', isTextEditable: false },
                    { done: false, description: 'Package lightly, pleeeeease', isTextEditable: false },
                ]
            }
        ]
    };

    render () {

        const selected = this.props.match.params.theSelectedTodoId;
        const list = this.state.todoLists.find(item => selected === item.id);

        return (
            <Sidebar open={this.state.isSidebarOpen} todoLists={this.state.todoLists} selected={selected}>
                <Header onSidebarToggle={() => this.onSidebarToggle()} />
                <TodoList
                    selected={selected}
                    list={list}
                    onTaskToggle={(id, status) => this.onTaskToggle(id, status)}
                    removeTask={(id) => this.removeTask(id)}
                    hasTaskEditable={(id, status) => this.hasTaskEditable(id, status)}
                    getEdditedTask={(index, event) => this.getEdditedTask(index, event)}
                />
            </Sidebar>
        );
    }

    onSidebarToggle() {
        this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
   };

   onTaskToggle(id, status) {
       const selected = this.props.match.params.theSelectedTodoId;
       const selectedListIndex = this.state.todoLists.findIndex(item => selected === item.id);

       const newTodoLists = JSON.parse(JSON.stringify(this.state.todoLists)); // clone todo lists

       newTodoLists[selectedListIndex].items[id].done = status;
       this.setState({ todoLists: newTodoLists });
   };

   removeTask(index) {
       const selected = this.props.match.params.theSelectedTodoId;
       const selectedListIndex = this.state.todoLists.findIndex(item => selected === item.id);

       const newTodoLists = JSON.parse(JSON.stringify(this.state.todoLists));

       newTodoLists[selectedListIndex].items.splice(index, 1);
       this.setState({todoLists: newTodoLists});
   };

   //focusOut
   getEdditedTask(index, value) {
       console.log('focusOut - value: ', value);

       const selected = this.props.match.params.theSelectedTodoId;
       const selectedListIndex = this.state.todoLists.findIndex(item => selected === item.id);

       const newTodoLists = JSON.parse(JSON.stringify(this.state.todoLists));

       if(value && value !== '') {
          newTodoLists[selectedListIndex].items[index].description = value;
          newTodoLists[selectedListIndex].items[index].isTextEditable = false;
          console.log('focusOut: ', newTodoLists);
          this.setState({ todoLists: newTodoLists });
       }
   };

   hasTaskEditable(index, status, value) {
       debugger;
       const selected = this.props.match.params.theSelectedTodoId;
       const selectedListIndex = this.state.todoLists.findIndex(item => selected === item.id);

       const newTodoLists = JSON.parse(JSON.stringify(this.state.todoLists));
       console.log('status: ', status);
       if(!status) {
           newTodoLists[selectedListIndex].items[index].isTextEditable = true;
           this.setState({todoLists: newTodoLists});
       }
   };
};

export default Todos;
