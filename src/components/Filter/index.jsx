import React from "react";

import "./Filter.sass";

class Filter extends React.Component {
    render() {
        return (
            <div className="filterButton">
                <button className="allFilterBtn" autoFocus>Все</button>
                <button className="favoritFilterBtn">Избранные</button>
                <button className="doneFilterBtn">Выполненые</button>
            </div>
        );
    }
}

/* const Filter = () => {
    // компонент
    return (
        <div className="filterButton">
            <button className="allFilterBtn" autoFocus>
                Все
            </button>
            <button className="favoritFilterBtn">
                Избранные
            </button>
            <button className="doneFilterBtn" >
                Выполненые
            </button>
        </div>
    );
}; */

export default Filter;
