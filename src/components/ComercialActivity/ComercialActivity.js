import React, { Component } from "react";
import { Descriptions } from "antd";

class ComercialActivity extends Component {
  render() {
    return (
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Visitas realizadas anualmente">
          5
        </Descriptions.Item>
        <Descriptions.Item label="Ofertas presentadas anualmente">
          1
        </Descriptions.Item>
        <Descriptions.Item label="Ofertas aceptadas anualmente">
          2
        </Descriptions.Item>
        <Descriptions.Item label="% de ventas aceptadas">30%</Descriptions.Item>
      </Descriptions>
    );
  }
}

export default ComercialActivity;
