import { Link } from 'react-router-dom';
import React from 'react';
import Sidebar from './Sidebar';

class Header extends React.Component {
    state = {
        isMenuClicked: false
    };

    hasMenuClicked = () => {
        this.setState({isMenuClicked: true});
    };

    render () {
        return (
            <div>
                <div className='ui clearing segment top-header'>
                    <div className='header-content'>
                        <h3 className='ui right floated header'>
                            <button className='ui blue basic button'>
                                <Link to='/'>Logout</Link>
                            </button>
                        </h3>
                        <h3 className='ui left floated header' onClick={this.hasMenuClicked}>
                            <a href='#' id='toggle' className='view-ui item'>
                                <i className='sidebar icon'></i> 
                                Menu
                            </a>
                        </h3>
                    </div>
                </div>
                <p>--- {this.state.isMenuClicked}</p>
                <Sidebar isVisible={this.state.isMenuClicked}/>
            </div>
        );
    }
};

export default Header;
