import React from 'react';
import Header from './Header';
import Sidebar from './sidebar/Sidebar';
import TodoList from './sidebar/TodoList';
import InicialPage from './sidebar/InicialPage';

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
            <Sidebar
                open={this.state.isSidebarOpen}
                todoLists={this.state.todoLists}
                selected={selected}
                addLists={() => this.addLists()}
                removeLists={(index) => this.removeLists(index)}>
                <Header onSidebarToggle={() => this.onSidebarToggle()} />
                {!selected && <InicialPage />}
                {selected && <TodoList
                    selected={selected}
                    list={list}
                    onTaskToggle={(id, status) => this.onTaskToggle(id, status)}
                    removeTask={(id) => this.removeTask(id)}
                    setTaskEditableStatus={(id) => this.setTaskEditableStatus(id)}
                    getEdditedTask={(index, event) => this.getEdditedTask(index, event)}
                    addTask={() => this.addTask()}
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
       const taskDescription = this.state.todoLists[selectedListIndex].items[index].description;
       const currTaskDescription = event.trim();

       if(currTaskDescription && currTaskDescription !== '' && currTaskDescription !== taskDescription) {
           newTodoLists[selectedListIndex].items[index].description = currTaskDescription;
       }

       this.setState({ todoLists: newTodoLists });

   };

   setTaskEditableStatus(index) {
       const selected = this.props.match.params.theSelectedTodoId;
       const selectedListIndex = this.state.todoLists.findIndex(item => selected === item.id);
       const newTodoLists = JSON.parse(JSON.stringify(this.state.todoLists));

       newTodoLists[selectedListIndex].items[index].isTaskEditable = true;
       this.setState({todoLists: newTodoLists});
   };

   addTask() {
       const selected = this.props.match.params.theSelectedTodoId;
       const selectedListIndex = this.state.todoLists.findIndex(item => selected === item.id);

       const newTodoLists = JSON.parse(JSON.stringify(this.state.todoLists));

       newTodoLists[selectedListIndex].items.unshift({
           done: false,
           description: 'edit me',
           isTaskEditable: false
       });

       this.setState({ todoLists: newTodoLists })
   };

   addLists() {
       const newTodoLists = JSON.parse(JSON.stringify(this.state.todoLists));
       newTodoLists.unshift({
           id: 'Type something',
           title: 'Type something',
           items: [
               { done: false, description: 'type something...', isTaskEditable: false },
           ]
       });

       this.setState({ todoLists: newTodoLists });
   };

   removeLists(index) {
       debugger;
       const newTodoLists = JSON.parse(JSON.stringify(this.state.todoLists));
       newTodoLists.splice(index, 1);
       this.setState({ todoLists: newTodoLists });
   };
};

export default Todos;
