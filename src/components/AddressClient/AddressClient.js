import React, { Component } from "react";
import { Descriptions } from "antd";

import axios from "axios";
const urlMock =
  "https://virtserver.swaggerhub.com/jrojsanc/ficha-cliente/1.0/interlocutor/1/datos/generales";
class AddressClient extends Component {
  state = {
    direccion: [],
    status: null,
  };

  UNSAFE_componentWillMount() {
    this.getCliente();
  }

  getCliente() {
    axios.get(urlMock).then((res) => {
      console.log(res.data);
      this.setState({
        direccion: res.data.direccion,
        status: "success",
      });
      console.log(this.state);
    });
  }
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
        <Descriptions.Item label="País">
          {this.state.direccion.pais}
        </Descriptions.Item>
        <Descriptions.Item label="Código de País">
          {this.state.direccion.codPais}
        </Descriptions.Item>
        <Descriptions.Item label="Tipo de Vía">
          {this.state.direccion.tipoVia}
        </Descriptions.Item>
        <Descriptions.Item label="Nombre de la Vía">
          {this.state.direccion.nombreVia}
        </Descriptions.Item>
        <Descriptions.Item label="Número de la Vía">
          {this.state.direccion.numero}
        </Descriptions.Item>
        <Descriptions.Item label="Portal">
          {this.state.direccion.portal}
        </Descriptions.Item>
        <Descriptions.Item label="Escalera">
          {this.state.direccion.escalera}
        </Descriptions.Item>
        <Descriptions.Item label="Piso">
          {this.state.direccion.piso}
        </Descriptions.Item>
        <Descriptions.Item label="Puerta">
          {this.state.direccion.puerta}
        </Descriptions.Item>
        <Descriptions.Item label="Bloque">
          {this.state.direccion.bloque}
        </Descriptions.Item>
        <Descriptions.Item label="Código Postal">
          {this.state.direccion.codPostal}
        </Descriptions.Item>
        <Descriptions.Item label="Localidad">
          {this.state.direccion.localidad}
        </Descriptions.Item>
        <Descriptions.Item label="Provincia">
          {this.state.direccion.provincia}
        </Descriptions.Item>
        <Descriptions.Item label="Código Región">
          {this.state.direccion.codRegion}
        </Descriptions.Item>
      </Descriptions>
    );
  }
}

export default AddressClient;
