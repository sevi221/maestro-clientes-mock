import React, { Component } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => a.name - b.name,
    },
    render: (text) => <a href="/contactoscomunicaciones">{text}</a>,
  },
  {
    title: "Cliente",
    dataIndex: "cliente",
    sorter: {
      compare: (a, b) => a.cliente - b.cliente,
    },
    render: (text) => <a href="/contactosdatos">{text}</a>,
  },
  {
    title: "Teléfono",
    dataIndex: "phone",
    sorter: {
      compare: (a, b) => a.phone - b.phone,
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: {
      compare: (a, b) => a.email - b.email,
    },
  },
  {
    title: "Cif",
    dataIndex: "cif",
    sorter: {
      compare: (a, b) => a.cif - b.cif,
    },
  },
  {
    title: "Razón social",
    dataIndex: "rsocial",
    sorter: {
      compare: (a, b) => a.rsocial - b.rsocial,
    },
  },
];

const data = [
  {
    key: "1",
    name: "UNO-E TARJETAS PRIVADAS",
    cliente: "Cliente Facturable",
    phone: "625625625",
    email: "uno-e@bbva.es",
    cif: "V86538600",
    rsocial: "BBVA",
  },
  {
    key: "2",
    name: "BBVA UNO-E",
    cliente: "Cliente Facturable",
    phone: "625625625",
    email: "uno-e@bbva.es",
    cif: "U68172527",
    rsocial: "BBVA",
  },
  {
    key: "3",
    name: "Antonio Jiménez",
    cliente: "Persona de contacto",
    phone: "97844584",
    email: "uno-e@bbva.es",
    cif: "N0114156C",
    rsocial: "BBVA",
  },
  {
    key: "4",
    name: "Alberto Vázquez",
    cliente: "Persona de contacto",
    phone: "64517852",
    email: "uno-e@bbva.es",
    cif: "S3801265D",
    rsocial: "BBVA",
  },
  {
    key: "5",
    name: "María del Río",
    cliente: "Persona de contacto",
    phone: "648598123",
    email: "uno-e@bbva.es",
    cif: "J35520287",
    rsocial: "BBVA",
  },
];

class CoincidenceContacts extends Component {
  onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  render() {
    return (
      <Table
        bordered
        columns={columns}
        dataSource={data}
        onChange={this.onChange}
      />
    );
  }
}

export default CoincidenceContacts;
