import React, { Component } from "react";
import { Tabs, Row, Col } from "antd";
import "./FichaCliente.scss";
// DATOS GENERALES
import Hierarchy from "../../components/Hierarchy/Hierarchy";
import CamposCore from "../../components/CamposCore/CamposCore";
import BasicData from "../../components/BasicData/BasicData";
import AddressClient from "../../components/AddressClient/AddressClient";
import ContactData from "../../components/ContactData/ContactData";
import BankData from "../../components/BankData/BankData";
import ContactPeopleData from "../../components/ContactPeopleData/ContactPeopleData";

// DATOS TRANSACCIONALES
import SalesArea from "../../components/SalesArea/SalesArea.js";
import Claims from "../../components/Claims/Claims";
import Billing from "../../components/Billing/Billing";
import BillingChart from "../../components/BillingChart/BillingChart";
import Communications from "../../components/Communications/Communications";
import ContractsData from "../../components/ContractsData/ContractsData";
import ComercialActivity from "../../components/ComercialActivity/ComercialActivity";
import PresentedOffers from "../../components/PresentedOffers/PresentedOffers";
import GeneralEnquiries from "../../components/GeneralEnquiries/GeneralEnquiries";
import PruebasJerarquia from "../PruebasJerarquia/PruebasJerarquia";
const { TabPane } = Tabs;
// const { Title } = Typography;

class FichaCliente extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="FichaCliente">
          <div className="Form">
            <h3>Ficha de Cliente</h3>
            <Tabs type="card">
              <TabPane tab="Datos Básicos de cliente" key="1">
                <Row>
                  <Col span={3}>
                    <PruebasJerarquia />
                  </Col>
                  <Col span={19}>
                    <CamposCore />
                    <br />
                    <BasicData />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Dirección del cliente" key="2">
                <AddressClient />
              </TabPane>
              <TabPane tab="Datos de contacto del cliente" key="3">
                <ContactData />
              </TabPane>
              <TabPane tab="Datos Bancarios del Cliente" key="4">
                <BankData />
              </TabPane>
              <TabPane tab="Personas de contacto" key="5">
                <Row>
                  <Col span={3}>
                    {/* <Hierarchy /> */}
                    <PruebasJerarquia />
                  </Col>
                  <Col span={19}>
                    <ContactPeopleData />
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </div>
        </div>
        <div className="Admision">
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
        </div>
      </React.Fragment>
    );
  }
}

export default FichaCliente;
