import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './TodoLists.css';


const TodoLists = (props) => {
    const selected = props.selected;

    return (
        <div>
            <div className="ui inverted segment">
                <i className="pointer circular inverted plus icon todolists--add_icon-position" onClick={() => props.addLists()}/>
            </div>
            { props.list.map((todoList, index) => {
                return (
                    <div key={todoList.id}>
                        <Link
                            className={classNames('item', { 'todolists--item-selected': selected === todoList.id })} to={todoList.id}>
                            {todoList.title}
                            <i className="pointer inverted minus icon" onClick={() => props.removeLists(index)}/>
                        </Link>
                    </div>
                );
            }) }
        </div>);
}

export default TodoLists;
