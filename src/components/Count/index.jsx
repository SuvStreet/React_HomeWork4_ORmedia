import React from "react";

import "./Count.sass";

const Count = ({done, todoActive, todoImportant}) => {
    // компонент
    return (
        <div className="wrapperPrintCount">
            <p>
                Количество выполненых задач: <span>{done}</span>
            </p>
            <p>
                Количество избранных задач: <span>{todoImportant}</span>
            </p>
            <p>
                Количество активных задач: <span>{todoActive}</span>
            </p>
        </div>
    );
};

export default Count;
