import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react';
import Todos from './todos/Todos';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <Route path="/:theSelectedTodoId?" component={Todos} />
                </BrowserRouter>
            </div>
        );
    };
};

export default App;
