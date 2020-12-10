import React, { Component } from 'react';
import DataListItem from "../data-list-item";

import './data-list.css';

export default class DataList extends Component {

    render() {
        const {data} = this.props;

        console.log(data);

        return (
          <ul>
              {
                  data.map((item) => {
                      return (
                        <li key={item.code}>
                            <DataListItem data={item} />
                        </li>
                      );
                  })
              }
          </ul>
        );

    }
}

