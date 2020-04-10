import React, { Component } from "react";
import { Descriptions } from "antd";

class AddressClient extends Component {
  render() {
    return (
      <Descriptions
        bordered
        size="small"
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Mismo que Dirección del cliente">
          Sí
        </Descriptions.Item>
        <Descriptions.Item label="País">España</Descriptions.Item>
        <Descriptions.Item label="Código de País">ES</Descriptions.Item>
        <Descriptions.Item label="Tipo de Vía">Avenida</Descriptions.Item>
        <Descriptions.Item label="Nombre de la Vía">
          Manoteras
        </Descriptions.Item>
        <Descriptions.Item label="Número de la Vía">58</Descriptions.Item>
        <Descriptions.Item label="Portal">3</Descriptions.Item>
        <Descriptions.Item label="Escalera">-</Descriptions.Item>
        <Descriptions.Item label="Piso">-</Descriptions.Item>
        <Descriptions.Item label="Puerta">-</Descriptions.Item>
        <Descriptions.Item label="Bloque">-</Descriptions.Item>
        <Descriptions.Item label="Código Postal">28050</Descriptions.Item>
        <Descriptions.Item label="Localidad">Madrid</Descriptions.Item>
        <Descriptions.Item label="Código Región">MAD</Descriptions.Item>
      </Descriptions>
    );
  }
}

export default AddressClient;
