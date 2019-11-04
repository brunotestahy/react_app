import React from 'react';
import classNames from 'classnames';

class TodoList extends React.Component {

    render() {
        const { title, id, items } = this.props.list;
        return (
            <div className="ui form">
              <div className="todolists--item grouped fields">
                <h2 className="todolists--item-title">Edit your <strong>{title}</strong> list! </h2>
                <div className="todolists--item-description">
                    { items.map((item, index) => {
                        return (
                            <div className="field grid-container" key={index}>
                              <div className="ui checkbox todolists--item-onlyItem grid-item">
                                    <input
                                        id={`item_${index}`}
                                        type="checkbox"
                                        onChange={() => this.props.onTaskToggle(index, !item.done)}
                                        checked={item.done}/>
                                    <label
                                        className={classNames({'pointer' : !this.props.isTextEditable}, {'todolists-item--done' : item.done})}
                                        onDoubleClick={() => this.props.hasTaskEditable(index, item.done)}
                                        contentEditable={item.isTextEditable}
                                        onBlur={(index, event) => this.props.getTextEdditedValue(index, event)}>
                                        {item.description}
                                    </label> {/*htmlFor={`item_${index}`}*/}
                              </div>
                              <div className="todolists--item-buttons grid-item">
                                  <button
                                    className="mini ui primary button button--save">
                                    Edit
                                  </button>
                                  <button
                                    className="mini ui button"
                                    onClick={() => this.props.removeTask(index)}>
                                    Discard
                                  </button>
                              </div>
                            </div>
                        );
                    }) }
                </div>
            </div>
        </div>
        );
    };
}

export default TodoList;
