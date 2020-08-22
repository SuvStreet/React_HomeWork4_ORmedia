import React from "react";

import "./SearchInput.sass";

class SearchInput extends React.Component {
    /* state = {
      todos: ,
    }; */

    onInput = (e) => {
        console.log(e.target.value);
        //console.log(todos);



        /* this.setState({
            label: e.target.value,
        }); */
        //console.log(this.state);
    };

    render() {
        return (
            <div className="inputAliveSearch">
                <input
                    type="text"
                    placeholder="Найти задачу..."
                    id="search"
                    className="aliveSearch"
                    onInput={this.onInput}
                />
            </div>
        );
    }
}

export default SearchInput;
