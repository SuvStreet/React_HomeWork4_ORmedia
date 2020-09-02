import React from "react";

import "./SearchInput.sass";

class SearchInput extends React.Component {
  /* onInput = (e) => {
    this.props.onSearchTask();
    //console.log(e.target.value);
  }; */

  render() {
    return (
      <div className="inputAliveSearch">
        <input
          type="text"
          placeholder="Найти задачу..."
          id="search"
          className="aliveSearch"
          onInput={(e) => this.props.onSearchTask(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchInput;
