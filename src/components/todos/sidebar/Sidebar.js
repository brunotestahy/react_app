import { Link } from 'react-router-dom';
import React from 'react';
import TodoLists from './TodoLists';
import classNames from 'classnames';

class Sidebar extends React.Component {
    render() {
        const open = this.props.open;
        return (
            <div>
                <div className={classNames('ui', 'left', { visible: open }, 'sidebar', 'inverted', 'vertical', 'menu')}>
                    <TodoLists
                        selected={this.props.selected}
                        list={this.props.todoLists}
                        addLists={() => this.props.addLists()}
                        removeLists={(index) => this.props.removeLists(index)} />
                </div>
                <div className='pusher'>
                    { this.props.children }
                </div>
            </div>
        );
    }
};

export default Sidebar;
