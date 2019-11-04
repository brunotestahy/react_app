import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './TodoLists.css';


const TodoLists = (props) => {
    const selected = props.selected;

    return (
        <div>
            <div className="ui inverted segment">
                <i className="pointer circular inverted plus icon"
                    onClick={() => props.addLists()}></i>
            </div>
            { props.list.map((todoList) => {
                return (
                    <Link key={todoList.id}
                        className={classNames('item', { 'todolists--item-selected': selected === todoList.id })} to={todoList.id}>
                        {todoList.title}
                    </Link>
                );
            }) }
        </div>);
}

export default TodoLists;
