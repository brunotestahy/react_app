import { Link } from 'react-router-dom';
import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleClass: 'ui left sidebar inverted vertical menu',
            isClicked: false
        };
    };

    componentDidMount() {
        this.setState({isClicked: this.props.invisible});
    };

    toggleSidebar(props) {
        // eslint-disable-next-line no-debugger
        debugger;
        console.log('props --> sidebar: ', this.props);
        if (this.props.isVisible) {
            return this.setState({toggleClass: 'ui left visible sidebar inverted vertical menu'});
        } else {
            return this.setState({toggleClass: 'ui left sidebar inverted vertical menu'});
        }
    };

    render() {
        return (
            <div>
                <div className={this.state.toggleClass}>
                    <Link to='/Todo' className='item'>
                       Show ToDo
                    </Link>
                </div>
                <div className='pusher'>
                    <div className='ui container'>SIDEBAR</div>
                </div>
            </div>
        );
    }
};

export default Sidebar;
