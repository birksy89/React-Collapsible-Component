import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Collapsible extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };

  state = {
    isExpanded: false,
  };

  handleToggle = e => {
    e.preventDefault();
    const { isExpanded } = this.state;
    this.setState({
      isExpanded: !isExpanded,
    });
  };

  render() {
    const { title, children } = this.props;
    const { isExpanded } = this.state;
    return (
      <div
        className={`panel ${isExpanded ? 'is-expanded' : ''}`}
        onClick={e => this.handleToggle(e)}
      >
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
