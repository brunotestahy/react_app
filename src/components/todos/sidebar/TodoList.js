import React from 'react';
import classNames from 'classnames';

class TodoList extends React.Component {

    render() {
        const { title, id, items } = this.props.list;
        return (
            <div className="ui form ui segment">
              <div className="todolists--item grouped fields">
                <h2 className="todolists--item-title">Edit your <strong>{title}</strong> list! </h2>
                <div className="todolists--item-description">
                    { items.map((item, index) => {
                        return (
                            <div className="field grid-container todoLists--item-buttons-tasks" key={index}>
                              <div className={classNames('ui', {'read-only' : this.props.isTaskEditable}, 'checkbox', 'todolists--item-onlyItem', 'grid-item')}>
                                    <input
                                        id={`item_${index}`}
                                        type="checkbox"
                                        onChange={() => this.props.onTaskToggle(index, !item.done)}
                                        checked={item.done}/>
                                    <label
                                        className={classNames({'pointer' : !this.props.isTaskEditable}, {'todolists-item--done' : item.done})}
                                        onDoubleClick={() => this.props.hasTaskEditable(index, item.done)}
                                        contentEditable={item.isTaskEditable}
                                        onMouseLeave={(event) => this.props.getEdditedTask(index, event.currentTarget.innerText)}>
                                        {item.description}
                                    </label> {/*htmlFor={`item_${index}`}*/}
                              </div>
                              <div className="todolists--item-buttons grid-item">
                                  <i className={classNames('mini', {'pointer' : !item.done}, 'edit icon', 'button--save')}
                                    onClick={() => this.props.hasTaskEditable(index, item.done)}></i>
                                  <i className="mini pointer trash alternate icon"
                                    onClick={() => this.props.removeTask(index)}></i>
                              </div>
                            </div>
                        );
                    }) }
                </div>
                <div>
                    <button
                        className="todolists-item--addTask ui mini primary button"
                        onClick={() => this.props.addTask()}>
                      add
                    </button>
                </div>
            </div>
        </div>
        );
    };
}

export default TodoList;
