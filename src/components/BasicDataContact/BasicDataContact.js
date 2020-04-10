import React, { Component } from "react";
import { Row, Col, Descriptions, Divider, Typography } from "antd";
import "./BasicDataContact.scss";

const { Title } = Typography;

class BasicDataContact extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span={24}>
            <Title level={3}>José Barnuevo</Title>
            <Title level={4}>ID: CT28009510</Title>
            <Title level={4}>Cliente Principal: Ediciones Grupo Letras</Title>
            <Descriptions
              size="small"
              bordered
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item label="Funcion de Cliente" span={3}>
                Cliente Detallable
              </Descriptions.Item>
              <Descriptions.Item label="Entidad legal" span={3}>
                Persona Física
              </Descriptions.Item>
              <Descriptions.Item label="Tipo de documento" span={3}>
                CIF
              </Descriptions.Item>
              <Descriptions.Item label="Número de documento" span={3}>
                F2906023C
              </Descriptions.Item>
              <Descriptions.Item label="Razón social" span={3}>
                Grupo Letras SL
              </Descriptions.Item>
              <Descriptions.Item label="Nombre comercial" span={3}>
                Grupo Letras SL
              </Descriptions.Item>
              <Descriptions.Item
                label="Nombre del representante legal"
                span={3}
              >
                Juan Jiménez
              </Descriptions.Item>
              <Descriptions.Item
                label="Tipo de documento del rep. legal"
                span={3}
              >
                NIF
              </Descriptions.Item>
              <Descriptions.Item
                label="Número de documento del rep. legal"
                span={3}
              >
                12345678H
              </Descriptions.Item>
              <Descriptions.Item label="Nombre del cargo" span={3}>
                Encargado jefe
              </Descriptions.Item>
              <Descriptions.Item label="Departamento" span={3}>
                Equipo directivo
              </Descriptions.Item>
              <Descriptions.Item label="Usuario Web" span={3}>
                jose.barnuevo
              </Descriptions.Item>
              <Descriptions.Item label="Clase profesional" span={3}>
                PYME
              </Descriptions.Item>
              <Descriptions.Item label="Tipo de organización" span={3}>
                SL
              </Descriptions.Item>
              <Descriptions.Item
                label="Tipo de cliente según facturación"
                span={3}
              >
                Cliente Tipo 1
              </Descriptions.Item>
              <Descriptions.Item label="Código CNAE" span={3}>
                31 Fabricación de Muebles
              </Descriptions.Item>
              <Descriptions.Item label="Esquema SEPA" span={3}>
                Esquema Core
              </Descriptions.Item>
              <Descriptions.Item label="Nº tarjeta Más Cerca" span={3}>
                -
              </Descriptions.Item>
              <Descriptions.Item label="Estado del cliente" span={3}>
                Activo
              </Descriptions.Item>
              <Descriptions.Item label="Fecha de alta" span={3}>
                10/10/2008
              </Descriptions.Item>
              <Descriptions.Item label="Fecha de baja" span={3}>
                -
              </Descriptions.Item>
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

export default BasicDataContact;
