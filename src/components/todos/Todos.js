import React from 'react';
import Header from './Header';
import Sidebar from './sidebar/Sidebar';
import TodoList from './sidebar/TodoList';

class Todos extends React.Component {
    state = {
        isSidebarOpen: false,
        edittedTask: '',
        todoLists: [
            {
                id: 'home',
                title: 'Home',
                items: [
                    { done: true, description: 'Buy grosseries', isTaskEditable: false },
                    { done: false, description: 'Prepare dinner', isTaskEditable: false },
                ]
            },
            {
                id: 'work',
                title: 'Work',
                items: [
                    { done: false, description: 'Talk to boss', isTaskEditable: false },
                    { done: false, description: 'Meeting', isTaskEditable: false },
                    { done: true, description: 'Prepare report', isTaskEditable: false },
                ]
            },
            {
                id: 'vacation',
                title: 'Vacation',
                items: [
                    { done: true, description: 'Select destination', isTaskEditable: false },
                    { done: true, description: 'Buy tickets', isTaskEditable: false },
                    { done: false, description: 'Book hotel', isTaskEditable: false },
                    { done: false, description: 'Package lightly, pleeeeease', isTaskEditable: false },
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
                {selected && <TodoList
                    selected={selected}
                    list={list}
                    onTaskToggle={(id, status) => this.onTaskToggle(id, status)}
                    removeTask={(id) => this.removeTask(id)}
                    hasTaskEditable={(id, status) => this.hasTaskEditable(id, status)}
                    getEdditedTask={(index, event) => this.getEdditedTask(index, event)}
                />}
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
   getEdditedTask(index, event) {
       const selected = this.props.match.params.theSelectedTodoId;
       const selectedListIndex = this.state.todoLists.findIndex(item => selected === item.id);
       const newTodoLists = JSON.parse(JSON.stringify(this.state.todoLists));

       newTodoLists[selectedListIndex].items[index].isTaskEditable = false;

       if(event && event !== '') {
           newTodoLists[selectedListIndex].items[index].description = event;
       }
       this.setState({ todoLists: newTodoLists });
   };

   hasTaskEditable(index, status) {
       if(status) {
           return;
       };

       const selected = this.props.match.params.theSelectedTodoId;
       const selectedListIndex = this.state.todoLists.findIndex(item => selected === item.id);
       const newTodoLists = JSON.parse(JSON.stringify(this.state.todoLists));

       newTodoLists[selectedListIndex].items[index].isTaskEditable = true;
       this.setState({todoLists: newTodoLists});
   }
};

export default Todos;
