import React, { Fragment } from "react";

function searchTable(props) {
  // console.log(props.key);
  return (
    <Fragment>
      <div className="col-md-6">
        {/* <div className="input-group-prepend"> */}
        <label className="mr-3">
          Select Filter Option
          <select
            className="custom-select"
            value={props.selectSearch}
            // defaultValue=
            onChange={props.selectChange}
          >
            <option defaultValue="tech">Tech Used</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>
      <div className="col-md-6 mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type search text here"
          onChange={props.filterFunc}
        />
      </div>
    </Fragment>
  );
}

export default searchTable;
