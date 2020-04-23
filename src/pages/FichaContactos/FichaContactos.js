import React, { Component } from "react";
import { Divider, Tabs, Row, Col } from "antd";

// DATOS GENERALES
import Hierarchy from "../../components/Hierarchy/Hierarchy";
import BasicDataContact from "../../components/BasicDataContact/BasicDataContact";
import ContactsList from "../../components/ContactsList/ContactsList";
import CommunicationList from "../../components/CommunicationList/CommunicationList";
import AddressClient from "../../components/AddressClient/AddressClient";
import ContactData from "../../components/ContactData/ContactData";
import BankData from "../../components/BankData/BankData";
import ContactPeopleData from "../../components/ContactPeopleData/ContactPeopleData";

// DATOS TRANSACCIONALES
// import SalesArea from "../../components/SalesArea/SalesArea.js";
// import Claims from "../../components/Claims/Claims";
// import Billing from "../../components/Billing/Billing";
// import BillingChart from "../../components/BillingChart/BillingChart";
// import Communications from "../../components/Communications/Communications";
// import ContractsData from "../../components/ContractsData/ContractsData";
// import ComercialActivity from "../../components/ComercialActivity/ComercialActivity";
// import PresentedOffers from "../../components/PresentedOffers/PresentedOffers";
// import GeneralEnquiries from "../../components/GeneralEnquiries/GeneralEnquiries";
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
                  <Col span={3}>
                    <Hierarchy />
                  </Col>
                  <Col span={19}>
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
              <TabPane tab="Dirección del cliente" key="3">
                <AddressClient />
              </TabPane>
              <TabPane tab="Datos de contacto del cliente" key="4">
                <ContactData />
              </TabPane>
              <TabPane tab="Datos Bancarios del Cliente" key="5">
                <BankData />
              </TabPane>
              <TabPane tab="Personas de contacto" key="6">
                <Row>
                  <Col span={3}>
                    <Hierarchy />
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
        {/* <div className="Admision">
          <div className="Form">
            <h3>Datos transaccionales</h3>
            <Tabs type="card">
              <TabPane tab="Facturación" key="1">
                <BillingChart />
                <Billing />
              </TabPane>
              <TabPane tab="Reclamaciones" key="2">
                <Claims />
              </TabPane>
              <TabPane tab="Comunicaciones a Cliente" key="3">
                <Communications />
              </TabPane>
              <TabPane tab="Histórico de contrato" key="4">
                <ContractsData />
              </TabPane>
              <TabPane tab="Área de ventas" key="5">
                <SalesArea />
              </TabPane>
              <TabPane tab="Nivel de actividad comercial" key="6">
                <ComercialActivity />
              </TabPane>
              <TabPane tab="Histórico de ofertas presentadas" key="7">
                <PresentedOffers />
              </TabPane>
              <TabPane tab="Consultas generales" key="8">
                <GeneralEnquiries />
              </TabPane>
            </Tabs>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default FichaContactos;
