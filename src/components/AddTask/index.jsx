import React, { Component } from "react";

import "./AddTask.sass";

class AddTask extends Component {
    state = {
        label: "",
    };

    onChange = (e) => {
        //console.log(e.target.value);
        this.setState({
            label: e.target.value,
        });
        //console.log(this.state);
    };

    onAddedTask = (e) => {
        this.props.onAdded(this.state.label);
        this.setState({
            label: "",
        });
        e.preventDefault();
    };

    render() {
        return (
            <form className="wrapperInputTask" onSubmit={this.onAddedTask}>
                <input
                    className="inputTask"
                    type="text"
                    placeholder="Добавить задачу..."
                    value={this.state.label}
                    onChange={this.onChange}
                />
                <button
                    className="addBtn"
                    id="addBtn"
                >
                    <span>Добавить</span>
                </button>
            </form>
        );
    }
}

export default AddTask;
