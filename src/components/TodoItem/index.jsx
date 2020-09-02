import React from "react";

import "./TodoItem.sass";

class TodoItem extends React.Component {
    /* state = {
        done: false,
        important: false,
    }; */

    /* constructor() {
        super();
        this.state = {
            done: true,
        };
    } */

    toggleDone() {
        /* this.setState((prevState) => {
            return {
                done: !prevState.done,
            };
        }); */
        this.props.onToggleDone();
    }

    removeHandler() {
        this.props.onDelete();
    }

    toggleImportant() {
        /* this.setState((prevState) => {
            return {
                important: !prevState.important,
            };
        }); */
        this.props.onToggleImportant();
    }

    onFilterImportant() {
        this.props.onFilterImportant();
    }
    
    render() {
        const { message, done, important } = this.props;
        let classNameText = "task-text";

        if (done) {
            classNameText += " text_is_done";
        }

        if (important) {
            classNameText += " text_is_important";
        }

        return (
            <div className="item">
                <span
                    className={classNameText}
                    onClick={() => this.toggleDone()}
                >
                    {message}
                </span>
                <div className="wrapperRemoveFavorites">
                    <button className="buttonRemove">
                        <i
                            className="fas fa-trash-alt"
                            onClick={() => this.removeHandler()}
                        ></i>
                    </button>
                    <button
                        className="buttonFavorites"
                        onClick={() => this.toggleImportant()}
                    >
                        <i
                            className="fas fa-star"
                        ></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoItem;
