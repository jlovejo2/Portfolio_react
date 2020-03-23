import React from 'react';


function searchTable(props) {
    // console.log(props.key);
    return (
        <div className="input-group mb-3">

            <select className="custom-select-sm" value={props.selectSearch} onChange={props.selectChange}>
                <option defaultValue="allProjects">All Projects</option>
                <option value="tech">Tech Used</option>
            </select>
            <input type="text" className="form-control" onChange={props.filterFunc} ></input>

        </div>
    )

}

export default searchTable;