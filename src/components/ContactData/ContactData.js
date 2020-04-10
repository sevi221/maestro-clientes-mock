import React, { Component } from "react";
import { Descriptions } from "antd";

class ContactData extends Component {
  render() {
    return (
      <Descriptions
        bordered
        size="small"
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Idioma" span={2}>
          Español
        </Descriptions.Item>
        <Descriptions.Item label="Teléfono" span={2}>
          999 999 999
        </Descriptions.Item>
        <Descriptions.Item label="Teléfono móvil" span={2}>
          -
        </Descriptions.Item>
        <Descriptions.Item label="Fax" span={2}>
          -
        </Descriptions.Item>
        <Descriptions.Item label="Correo electrónico" span={3}>
          info@mueblespulido.com
        </Descriptions.Item>
        <Descriptions.Item label="Web" span={3}>
          www.everis.com
        </Descriptions.Item>
      </Descriptions>
    );
  }
}

export default ContactData;
