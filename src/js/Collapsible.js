import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Collapsible extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };

  render() {
    const { title, children } = this.props;
    return (
      <div className="panel">
        <div className="panel-heading">
          <h2>{title}</h2>
        </div>
        <div className="panel-collapse">
          <div className="panel-body">{children}</div>
        </div>
      </div>
    );
  }
}
