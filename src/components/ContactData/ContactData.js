import React, { Component } from "react";
import { Descriptions } from "antd";

class ContactData extends Component {
  render() {
    return (
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Idioma">Español</Descriptions.Item>
        <Descriptions.Item label="Teléfono">999 999 999</Descriptions.Item>
        <Descriptions.Item label="Teléfono móvil">-</Descriptions.Item>
        <Descriptions.Item label="Fax">-</Descriptions.Item>
        <Descriptions.Item label="Correo electrónico">
          info@mueblespulido.com
        </Descriptions.Item>
        <Descriptions.Item label="Web">www.everis.com</Descriptions.Item>
      </Descriptions>
    );
  }
}

export default ContactData;
