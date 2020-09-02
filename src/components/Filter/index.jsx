import React from "react";

import "./Filter.sass";

const RESET = {
  Все: "allTask",
  Важные: "importantTask",
  Выполненые: "doneTask",
};

class Filter extends React.Component {
  state = { ...RESET, Все: "allTask checked" };
  

  filterToggle = ({ target: { className } }) => {
    for (const key in RESET) {
      if (className.includes(RESET[key])) {
        const temp = RESET[key];
        this.props.onFilterTask(temp);
        this.setState({ ...RESET, [key]: `${temp} checked` });
      }
    }
  };

  render() {
    const btnArr = [];
    let id = 0;
    for (const key in this.state) {
      btnArr.push(<button className={this.state[key]} key={id++}>{key}</button>);
    }

    return (
      <div className="filterButton" onClick={this.filterToggle}>
        {btnArr}
      </div>
    );
  }
}

export default Filter;
