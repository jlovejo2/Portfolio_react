import React from 'react';

function tableRow(props) {
    // console.log(props.key);
    return (
        <tr>
            <th scope={props.scope}>{props.num + 1}</th>
            <td>{props.title}</td>
            <td><img className='img-thumbnail' alt='thumbnail' src={props.image} ></img></td>
            <td>{props.gifLink}</td>
            <td>
                <a href={props.appLink}>{props.appLink}</a>
            </td>            
            <td>{props.desc}</td>
            <td>{props.children}</td>
        </tr>
    )

}

export default tableRow;