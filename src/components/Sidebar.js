import { Link } from 'react-router-dom';
import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggleClass: 'ui left sidebar inverted vertical menu'
        };
    };

    toggleSidebar = (prop) => {
        if(!prop) {
            this.setState({toggleClass: "ui left visible sidebar inverted vertical menu")};
        } else {
            this.setState({toggleClass: "ui left sidebar inverted vertical menu")};
        }
    };
    
    render() {
        return (
            <div>
                <div className="{this.state.toggleClass}">
                    <a className="item">
                        <Link to="/Todo">Show ToDo</Link>
                    </a>
                </div>
                <div className="pusher">
                    <div className="ui container">SIDEBAR</div>
                </div>
            </div>
        );
    }
};

export default Sidebar;
