import React, { Component } from "react";
import { Descriptions, Row, Col, Card, Typography } from "antd";
import { datos } from "../../Api/ApiUrl";

import axios from "axios";
const { Title } = Typography;
const urlMock =
  "https://virtserver.swaggerhub.com/jrojsanc/ficha-cliente/1.0/interlocutor/datos/generales/1";
class Cliente extends Component {
  // state = {
  //   client = [],
  //   status = null
  // }

  UNSAFE_componentWillMount() {
    this.getClient();
  }

  getClient() {
    axios.get(urlMock).then((res) => {
      console.log(res.data);
      console.log(res.data.cabecera);
      // this.setState({
      //   client: res.data.client,
      //   status: "success"
      // })
    });
  }

  render() {
    let cliente = {
      nombre: "Javier Jiménez",
      id: "CT28009509",
      cctop: "Sociedad Maderera Española",
    };
    return (
      <React.Fragment>
        <Card>
          <Row>
            <Col span={24}>
              <Title level={3}>{cliente.nombre}</Title>
              <Title level={4}>ID: {cliente.id}</Title>
              <Title level={4}>Cliente Principal: {cliente.cctop}</Title>
              <Descriptions bordered size={"small"}>
                <Descriptions.Item label="País" span={5}>
                  España
                </Descriptions.Item>
                <Descriptions.Item label="Código de País" span={5}>
                  ES
                </Descriptions.Item>
                <Descriptions.Item label="Tipo de Vía" span={5}>
                  Calle
                </Descriptions.Item>
                <Descriptions.Item label="Nombre de la Vía">
                  Alcalá
                </Descriptions.Item>
                <Descriptions.Item label="Número de la Vía">
                  58
                </Descriptions.Item>
                <Descriptions.Item label="Portal">3</Descriptions.Item>
                <Descriptions.Item label="Escalera">-</Descriptions.Item>
                <Descriptions.Item label="Piso">-</Descriptions.Item>
                <Descriptions.Item label="Puerta">-</Descriptions.Item>
                <Descriptions.Item label="Bloque">-</Descriptions.Item>
                <Descriptions.Item label="Código Postal">
                  28050
                </Descriptions.Item>
                <Descriptions.Item label="Localidad">Madrid</Descriptions.Item>
                <Descriptions.Item label="Código Región">MAD</Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Descriptions bordered size={"small"}>
                <Descriptions.Item label="Forma de pago">
                  Transferencia
                </Descriptions.Item>
                <Descriptions.Item label="Titular de la cuenta">
                  Javier Jimenez
                </Descriptions.Item>
                <Descriptions.Item label="Apto para recibir fondos">
                  Sí
                </Descriptions.Item>
                <Descriptions.Item label="Id datos bancarios">
                  -
                </Descriptions.Item>
                <Descriptions.Item label="Clave de país del banco">
                  ES
                </Descriptions.Item>
                <Descriptions.Item label="Clave de país del banco">
                  -
                </Descriptions.Item>
                <Descriptions.Item label="Nº cuenta bancaria" span={10}>
                  ES44 2068 8695 8628 1801 5854
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Descriptions bordered size={"small"}>
                <Descriptions.Item label="Idioma">Español</Descriptions.Item>
                <Descriptions.Item label="Teléfono">
                  999 999 999
                </Descriptions.Item>
                <Descriptions.Item label="Teléfono móvil">-</Descriptions.Item>
                <Descriptions.Item label="Fax">-</Descriptions.Item>
                <Descriptions.Item label="Correo electrónico">
                  info@mueblespulido.com
                </Descriptions.Item>
                <Descriptions.Item label="Web">
                  www.everis.com
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }
}

export default Cliente;
