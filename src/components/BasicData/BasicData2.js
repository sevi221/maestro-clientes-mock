import React, { Component } from "react";
import { Row, Col, Descriptions, Divider, Typography } from "antd";
import "./BasicData.scss";

import axios from "axios";
const { Title } = Typography;
const urlMock =
  "https://ficha-cliente-v4.getsandbox.com/clientes/interlocutor/CT48000500/datos/generales";
class BasicData2 extends Component {
  state = {
    cabecera: [],
    cliente: [],
    direccion: [],
    status: null,
    buscar: {},
  };

  UNSAFE_componentWillMount() {
    this.getDatosCliente();
  }

  getDatosCliente() {
    axios.get(urlMock).then((res) => {
      console.log(res.data);
      this.setState({
        cabecera: res.data.cabecera,
        cliente: res.data.basico,
        direccion: res.data.direccion,
        status: "success",
      });
      console.log(this.state);
    });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span={24}>
            <Descriptions
              size="small"
              bordered
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item label="Núm. Identificador" span={3}>
                {this.state.cabecera.id}
              </Descriptions.Item>
              <Descriptions.Item label="Entidad legal" span={3}>
                {this.state.cliente.entidadLegal}
              </Descriptions.Item>
              <Descriptions.Item label="Tipo de documento" span={3}>
                {this.state.cliente.tipoDocumento}
              </Descriptions.Item>
              <Descriptions.Item label="Número de documento" span={3}>
                {this.state.cliente.nroDocumento}
              </Descriptions.Item>
              <Descriptions.Item label="Razón social" span={3}>
                {this.state.cliente.razonSocial}
              </Descriptions.Item>
              <Descriptions.Item label="Nombre comercial" span={3}>
                {this.state.cliente.nombreComercial}
              </Descriptions.Item>
              <Descriptions.Item
                label="Nombre del representante legal"
                span={3}
              >
                {this.state.cliente.nombreRepLegal}{" "}
                {this.state.cliente.priApeRepLegal}{" "}
                {this.state.cliente.segApeRepLegal}
              </Descriptions.Item>
              <Descriptions.Item
                label="Tipo de documento del rep. legal"
                span={3}
              >
                {this.state.cliente.tipDocRepLegal}
              </Descriptions.Item>
              <Descriptions.Item
                label="Número de documento del rep. legal"
                span={3}
              >
                {this.state.cliente.nroDocRepLegal}
              </Descriptions.Item>
              <Descriptions.Item label="Nombre del cargo" span={3}>
                {this.state.cliente.nombreCargo}
              </Descriptions.Item>
              <Descriptions.Item label="Cargo del interlocutor" span={3}>
                {this.state.cliente.cargoInterlocutor}
              </Descriptions.Item>
              <Descriptions.Item label="Departamento" span={3}>
                {this.state.cliente.dpto}
              </Descriptions.Item>
              <Descriptions.Item label="Usuario Web" span={3}>
                {this.state.cliente.usuarioWeb}
              </Descriptions.Item>
              <Descriptions.Item label="Clase profesional" span={3}>
                {this.state.cliente.claseProfesional}
              </Descriptions.Item>
              <Descriptions.Item label="Tipo de organización" span={3}>
                {this.state.cliente.tipoOrg}
              </Descriptions.Item>
              <Descriptions.Item
                label="Tipo de cliente según facturación"
                span={3}
              >
                {this.state.cliente.tipoClienteFact}
              </Descriptions.Item>
              <Descriptions.Item label="Código CNAE" span={3}>
                {this.state.cliente.codCnae}
              </Descriptions.Item>
              <Descriptions.Item label="Esquema SEPA" span={3}>
                {this.state.cliente.esqSepa}
              </Descriptions.Item>
              <Descriptions.Item label="Nº tarjeta Más Cerca" span={3}>
                {this.state.cliente.nroTarjetaMC}
              </Descriptions.Item>
              <Descriptions.Item label="Estado del cliente" span={3}>
                {this.state.cliente.estadoCliente}
              </Descriptions.Item>
              <Descriptions.Item label="Fecha de alta" span={3}>
                {this.state.cliente.fechaAlta}
              </Descriptions.Item>
              <Descriptions.Item label="Fecha de baja" span={3}>
                {this.state.cliente.fechaBaja}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        {/* <Divider orientation="left">Datos de Caracter Personal</Divider>
        <Descriptions
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.item label="Profesión">Empresario</Descriptions.item>
          <Descriptions.item label="Fecha de nacimiento">
            24/03/1957
          </Descriptions.item>
          <Descriptions.item label="Nacionalidad">Española</Descriptions.item>
          <Descriptions.item label="Género">Masculino</Descriptions.item>
          <Descriptions.item label="Estado civil">Casado</Descriptions.item>
          <Descriptions.item label="Unidad familiar">2 hijos</Descriptions.item>
          <Descriptions.item label="Aficiones">
            Pesca, Submarinismo
          </Descriptions.item>
        </Descriptions> */}
      </React.Fragment>
    );
  }
}

export default BasicData2;
