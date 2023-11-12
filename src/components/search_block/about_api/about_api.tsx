import React, { Component } from 'react';
import './style.css';

export default class AboutApi extends Component {
  apiBlock = [
    'people/ The URL root for People resources',
    'planets/ The URL root for Planet resources',
    'species/ The URL root for Species resources',
    'starships/ The URL root for Starships resources',
    'vehicles/ The URL root for Vehicles resources',
  ];

  render() {
    return (
      <div className="api_description">
        <ul className={'api_link_list'}>
          {this.apiBlock.map((url, index) => (
            <li key={index} className={'api_link_item'}>
              {url}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
