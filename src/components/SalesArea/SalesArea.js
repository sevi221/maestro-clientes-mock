import React, { Component } from "react";
import { Descriptions } from "antd";

class ContactData extends Component {
  render() {
    return (
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Organización de ventas">-</Descriptions.Item>
        <Descriptions.Item label="Gestor comercial">
          Juan Jiménez
        </Descriptions.Item>
        <Descriptions.Item label="Coordinador">Juan Jiménez</Descriptions.Item>
        <Descriptions.Item label="Función del interlocutor">
          Encargado Jefe
        </Descriptions.Item>
        <Descriptions.Item label="Canal de distribución">
          info@mueblespulido.com
        </Descriptions.Item>
        <Descriptions.Item label="Zona de ventas">España</Descriptions.Item>
        <Descriptions.Item label="Oficina de ventas">-</Descriptions.Item>
      </Descriptions>
    );
  }
}

export default ContactData;
