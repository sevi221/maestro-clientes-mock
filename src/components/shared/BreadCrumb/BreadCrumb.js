import React, { Component } from "react";

import PropTypes from "prop-types";

import { Breadcrumb } from "antd";

class BreadCrumb extends Component {
  render() {
    return (
      <div className="BreadCrumb">
        <Breadcrumb>
          {this.props.items.map(({ label }) => (
            <Breadcrumb.Item key={label}>{label}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
    );
  }
}

BreadCrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired
    })
  ).isRequired
};

export default BreadCrumb;
