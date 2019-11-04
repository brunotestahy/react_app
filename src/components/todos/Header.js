import { Link } from 'react-router-dom';
import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <div className='ui clearing segment top-header'>
                <div className='header-content'>
                    <h3 className='ui right floated header'>
                        <button className='ui blue basic button'>
                            <Link to='/'>Logout</Link>
                        </button>
                    </h3>
                    <h3 className='ui left floated header'
                        onClick={this.props.onSidebarToggle}>
                        <a href='#' id='toggle' className='view-ui item'>
                            <i className='sidebar icon'></i>
                            Menu
                        </a>
                    </h3>
                </div>
            </div>
        );
    }
};

export default Header;
