import React, { Component } from "react";
import { Divider, Tabs, Row, Col } from "antd";

// DATOS GENERALES
import Hierarchy from "../../components/Hierarchy/Hierarchy";
import BasicDataContact from "../../components/BasicDataContact/BasicDataContact";
import ContactsList from "../../components/ContactsList/ContactsList";
import CommunicationList from "../../components/CommunicationList/CommunicationList";
import ContactPeopleData from "../../components/ContactPeopleData/ContactPeopleData";
import PruebasJerarquia from "../PruebasJerarquia/PruebasJerarquia";

const { TabPane } = Tabs;

class FichaContactos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Admision">
          <div className="Form">
            <h3>Contactos y Comunicaciones</h3>
            <Tabs type="card">
              <TabPane tab="Ficha básica de Contacto" key="1">
                <Row>
                  <Col>
                    <BasicDataContact />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Contactos y comunicaciones" key="2">
                <ContactsList />
                <Divider>Comunicaciones</Divider>
                <CommunicationList />
                <Divider>Información</Divider>
                <h3>Información del contacto</h3>
              </TabPane>
              <TabPane tab="Personas de contacto" key="6">
                <Row>
                  <Col span={3}>
                    <PruebasJerarquia />
                  </Col>
                  <Col span={19}>
                    <ContactPeopleData />
                    <Divider>Comunicaciones</Divider>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FichaContactos;
