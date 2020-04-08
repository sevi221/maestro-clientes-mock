import React, { Component } from "react";
import { Row, Col, Descriptions, Divider, Typography } from "antd";
import "./BasicData.scss";

const { Title } = Typography;

const user = {
  name: "Javier Jiménez",
  ID: "CT28009509",
  cc_top: "Sociedad Maderera Española"
};
class BasicData extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span={24}>
            <Title level={3}>Javier Jiménez</Title>
            <Title level={4}>ID: CT28009509</Title>
            <Title level={4}>
              Cliente Principal: Sociedad Maderera Española
            </Title>
            <Descriptions
              bordered
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item label="Funcion de Cliente">
                Cliente Detallable
              </Descriptions.Item>
              <Descriptions.Item label="Entidad legal">
                Persona Física
              </Descriptions.Item>
              <Descriptions.Item label="Tipo de documento">
                CIF
              </Descriptions.Item>
              <Descriptions.Item label="Número de documento">
                F2906023C
              </Descriptions.Item>
              <Descriptions.Item label="Razón social">
                Muebles Pulido SL
              </Descriptions.Item>
              <Descriptions.Item label="Nombre comercial">
                Muebles Pulido SL
              </Descriptions.Item>
              <Descriptions.Item label="Nombre del representante legal">
                Juan Jiménez
              </Descriptions.Item>
              <Descriptions.Item label="Tipo de documento del rep. legal">
                NIF
              </Descriptions.Item>
              <Descriptions.Item label="Número de documento del rep. legal">
                12345678H
              </Descriptions.Item>
              <Descriptions.Item label="Nombre del cargo">
                Encargado jefe
              </Descriptions.Item>
              <Descriptions.Item label="Departamento">
                Equipo directivo
              </Descriptions.Item>
              <Descriptions.Item label="Usuario Web">
                juan.jimenez
              </Descriptions.Item>
              <Descriptions.Item label="Clase profesional">
                PYME
              </Descriptions.Item>
              <Descriptions.Item label="Tipo de organización">
                SL
              </Descriptions.Item>
              <Descriptions.Item label="Tipo de cliente según facturación">
                Cliente Tipo 1
              </Descriptions.Item>
              <Descriptions.Item label="Código CNAE">
                31 Fabricación de Muebles
              </Descriptions.Item>
              <Descriptions.Item label="Esquema SEPA">
                Esquema Core
              </Descriptions.Item>
              <Descriptions.Item label="Nº tarjeta Más Cerca">
                -
              </Descriptions.Item>
              <Descriptions.Item label="Estado del cliente">
                Activo
              </Descriptions.Item>
              <Descriptions.Item label="Fecha de alta">
                10/10/2008
              </Descriptions.Item>
              <Descriptions.Item label="Fecha de baja">-</Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Divider orientation="right">Datos de Caracter Personal</Divider>
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
        </Descriptions>
      </React.Fragment>
    );
  }
}

export default BasicData;
