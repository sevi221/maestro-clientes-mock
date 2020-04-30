import React, { Component } from "react";
import { Card, Divider } from "antd";
import Communications from "../../components/Communications/Communications";
import ContactPeopleData from "../../components/ContactPeopleData/ContactPeopleData";
import CamposCore3 from "../../components/CamposCore/CamposCore3";
import HierarchyContacts from "../../components/HierarchyContacts/HierarchyContacts";

class ContactosComunicaciones extends Component {
  render() {
    return (
      <div className="Admision">
        <div className="Form">
          <h3>Contactos y Comunicaciones</h3>
          <Divider></Divider>
          <Card
            size="small"
            title="UNO-E TARJETAS PRIVADAS"
            span={5}
            extra={<a href="/fichacliente3">Más información</a>}
          >
            <CamposCore3 />
          </Card>
          <br />
          <Card title="Contactos">
            <ContactPeopleData />
          </Card>
          <br />
          <Card title="Comunicaciones al cliente">
            <Communications />
            <Divider orientation="left">
              Comunicaciones relacionadas con el cliente
            </Divider>
            <Communications />
          </Card>
          <br />
          <Card
            style={{ height: "450px" }}
            title="Relaciones de la persona de contacto"
          >
            <HierarchyContacts />
          </Card>
        </div>
      </div>
    );
  }
}
export default ContactosComunicaciones;
