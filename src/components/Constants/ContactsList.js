import React, { Component } from "react";
import { Table } from "antd";

const contacts = [
  {
    title: "Nombre",
    dataIndex: "name",
    render: (text) => <a href="/fichacontactos">{text}</a>,
  },
  {
    title: "Cliente Tipo",
    dataIndex: "client",
  },
  {
    title: "Teléfono",
    dataIndex: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "CIF",
    dataIndex: "cif",
  },
  {
    title: "Razón social",
    dataIndex: "rsocial",
  },
];

const data = [
  {
    key: "1",
    name: "José Barnuevo",
    client: "Cliente detallable",
    phone: "625625625",
    email: "jbarnuevo@ejemplo.es",
    cif: "V86538600",
    rsocial: "-",
  },
  {
    key: "2",
    name: "José Barnuevo",
    client: "Cliente detallable",
    phone: "625625625",
    email: "jbarnuevo@ejemplo.es",
    cif: "U68172527",
    rsocial: "-",
  },
  {
    key: "3",
    name: "José Barnuevo",
    client: "Cliente facturable",
    phone: "625625625",
    email: "jbarnuevo@ejemplo.es",
    cif: "U68172527",
    rsocial: "-",
  },
];

class ContactsList extends Component {
  render() {
    return (
      <Table
        columns={contacts}
        dataSource={data}
        bordered
        title={() => "Coincidencia de Interlocutores"}
      />
    );
  }
}

export default ContactsList;
