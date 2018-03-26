import React from 'react';
import Todo from './Todo'

export default function List(props){
    var list =props.list.map((val, i) =>{
        return (
        <Todo key={i} item={val}/>
        )
    })
    return <div>{list}</div>;
}
