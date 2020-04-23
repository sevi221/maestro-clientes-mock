import React, { Component } from "react";
import { Descriptions } from "antd";

import axios from "axios";
const urlMock =
  "https://virtserver.swaggerhub.com/jrojsanc/ficha-cliente/1.0/interlocutor/1/datos/generales";
class ContactData extends Component {
  state = {
    contacto: [],
    status: null,
  };

  UNSAFE_componentWillMount() {
    this.getCliente();
  }

  getCliente() {
    axios.get(urlMock).then((res) => {
      console.log(res.data);
      this.setState({
        contacto: res.data.contacto,
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
        <Descriptions.Item label="Idioma" span={2}>
          {this.state.contacto.idioma}
        </Descriptions.Item>
        <Descriptions.Item label="Teléfono" span={2}>
          {this.state.contacto.telefono}
        </Descriptions.Item>
        <Descriptions.Item label="Teléfono móvil" span={2}>
          {this.state.contacto.telefonoMovil}
        </Descriptions.Item>
        <Descriptions.Item label="Fax" span={2}>
          {this.state.contacto.fax}
        </Descriptions.Item>
        <Descriptions.Item label="Correo electrónico" span={3}>
          {this.state.contacto.correo}
        </Descriptions.Item>
        <Descriptions.Item label="Web" span={3}>
          {this.state.contacto.web}
        </Descriptions.Item>
      </Descriptions>
    );
  }
}

export default ContactData;
