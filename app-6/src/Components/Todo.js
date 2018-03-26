import React from 'react';

function Todo(props){
    var displayList = props.list.map((val) => {
        return (
            <div>
                <h2>{val}</h2>
            </div>
        )
    })
    return <div>{displayList}</div>;
}

export default Todo;