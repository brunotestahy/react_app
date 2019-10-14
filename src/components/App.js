import { BrowserRouter, Route, Link } from 'react-router-dom'
import React from 'react';
import Header from './Header';
import Login from './Login';
import Todo from './Todo';
import Sidebar from './Sidebar';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={Login} />
                        <Route path="/Header" exact component={Header} />
                        <Route path="/Todo" exact component={Todo} />
                        <Route path="/Sidebar" exact component={Sidebar} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default App;
