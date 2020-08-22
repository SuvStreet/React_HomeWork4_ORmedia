import React from "react";

import './Header.sass';

const Header = () => {
    // компонент
    return (
        <h1 className="logo">
            <i className="fas fa-th-list"></i>
            <span>ToDoApp</span>
        </h1>
    );
};

export default Header;