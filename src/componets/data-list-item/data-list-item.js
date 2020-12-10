import React, { Fragment } from 'react';
import './data-list-item.css';

const DataListItem = ({ data }) => {
    const { name, type, season} = data;

    return (
      <Fragment>
          <span>{name}</span>
          <span>{type}</span>
          <span>{season}</span>
      </Fragment>
    );
}

export default DataListItem;