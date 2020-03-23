import React from 'react';


function searchTable(props) {
    // console.log(props.key);
    return (
        <div className="input-group">
            <label className="mr-3">Select Filter Option</label>
            <select className="custom-select-sm" value={props.selectSearch} onChange={props.selectChange}>
                <option defaultValue="title">Title</option>
                <option value="tech">Tech Used</option>
            </select>
            <input type="text" className="md ml-3" placeholder='Type search text here' onChange={props.filterFunc} ></input>

        </div>
    )

}

export default searchTable;