import React, { Component } from "react";
import { Card, Col, Divider, Descriptions, Row, Typography } from "antd";
import Communications from "../../components/Communications/Communications";
import HierarchyContacts from "../../components/HierarchyContacts/HierarchyContacts";
const { Title } = Typography;
class ContactosDatos extends Component {
  render() {
    return (
      <div className="Admision">
        <div className="Form">
          <h3>Persona de Contacto</h3>
          <Divider></Divider>
          <Card>
            <Row>
              <Col span={24}>
                <Title level={3}>Antonio Jiménez Jiménez</Title>
                <Title level={4}>ID: CT28009509</Title>
                <Descriptions bordered size={"small"}>
                  <Descriptions.Item
                    label="Mismo que Datos de contacto del cliente"
                    span={12}
                  >
                    Sí
                  </Descriptions.Item>
                  <Descriptions.Item label="Origen datos" span={5}>
                    CRM
                  </Descriptions.Item>
                  <Descriptions.Item label="Nombre del cargo" span={5}>
                    Encargado
                  </Descriptions.Item>
                  <Descriptions.Item label="Departamento" span={5}>
                    Ventas
                  </Descriptions.Item>
                  <Descriptions.Item label="País" span={5}>
                    España
                  </Descriptions.Item>
                  <Descriptions.Item label="Código de País">
                    Alcalá
                  </Descriptions.Item>
                  <Descriptions.Item label="Tipo de Vía">58</Descriptions.Item>
                  <Descriptions.Item label="Calle">3</Descriptions.Item>
                  <Descriptions.Item label="Número">3</Descriptions.Item>
                  <Descriptions.Item label="Portal">-</Descriptions.Item>
                  <Descriptions.Item label="Puerta">-</Descriptions.Item>
                  <Descriptions.Item label="Bloque">-</Descriptions.Item>
                  <Descriptions.Item label="Escalera">-</Descriptions.Item>
                  <Descriptions.Item label="Piso">-</Descriptions.Item>
                  <Descriptions.Item label="Código Postal">
                    28050
                  </Descriptions.Item>
                  <Descriptions.Item label="Localidad">
                    Madrid
                  </Descriptions.Item>
                  <Descriptions.Item label="Provincia">
                    Madrid
                  </Descriptions.Item>
                  <Descriptions.Item label="Código Región">
                    MAD
                  </Descriptions.Item>
                  <Descriptions.Item label="Idioma">Español</Descriptions.Item>
                  <Descriptions.Item label="Teléfono">
                    915556565
                  </Descriptions.Item>
                  <Descriptions.Item label="Teléfono móvil">
                    622687895
                  </Descriptions.Item>
                  <Descriptions.Item label="Fax">915556565</Descriptions.Item>
                  <Descriptions.Item label="Correo Electrónico">
                    uno-e@bbva.es
                  </Descriptions.Item>
                  <Descriptions.Item label="Activo">Si</Descriptions.Item>
                  <Descriptions.Item label="Interlocutor Principal">
                    María Sánchez
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
          </Card>
          <br />
          <Card
            style={{ height: "450px" }}
            title="Relaciones de la persona de contacto"
          >
            <HierarchyContacts />
          </Card>
          <br />
          <Card title="Comunicaciones">
            <Communications />
            <Divider orientation="left">
              Comunicaciones relacionadas con el cliente
            </Divider>
            <Communications />
          </Card>
          <br />
        </div>
      </div>
    );
  }
}

export default ContactosDatos;
