import React from 'react';
import './style.css';


export function UnorderList(props) {
    // console.log(props.key);
    return (
        <ul className={props.bootStrapList ? 'list-group' : ''}>
            {props.children}
        </ul>
    )
}

export function ListItem(props) {
   return  <li>{props.children}</li>
}