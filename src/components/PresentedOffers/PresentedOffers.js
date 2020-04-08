import React, { Component } from "react";
import { Table } from "antd";

const comunicaciones = [
  {
    title: "Id de oferta",
    dataIndex: "idOferta",
    width: 150
  },
  {
    title: "Estado de la oferta",
    dataIndex: "estadoOferta",
    width: 150
  },
  {
    title: "Productos/servicios ofertados",
    dataIndex: "serviciosOfertados",
    width: 120
  },
  {
    title: "Valor neto",
    dataIndex: "VNeto",
    width: 150
  },
  {
    title: "Moneda",
    dataIndex: "moneda",
    width: 150
  },
  {
    title: "Fecha inicio de la oferta",
    dataIndex: "dateStart",
    width: 150
  },
  {
    title: "Fecha de validez de la oferta",
    dataIndex: "dateValid",
    width: 150
  },
  {
    title: "Área responsable",
    dataIndex: "responsable",
    width: 150
  },
  {
    title: "Empleado responsable",
    dataIndex: "empleado",
    width: 150
  },
  {
    title: "Persona de contacto (cliente)",
    dataIndex: "cliente",
    width: 150
  },
  {
    title: "Motivo de rechazo",
    dataIndex: "rechazo",
    width: 150
  }
];
const comunicacionesData = [];
for (let i = 0; i < 100; i++) {
  comunicacionesData.push({
    key: i,
    idOferta: `10${i}`,
    estadoOferta: `Activo`,
    serviciosOfertados: `Paquetería`,
    VNeto: `-`,
    moneda: `EUR`,
    dateStart: `01/01/01`,
    dateValid: `01/01/01`,
    responsable: `Juan Jiménez`,
    empleado: `Javier Jiménez`,
    cliente: `Muebles Pulido`,
    rechazo: `-`
  });
}

class PresentedOffers extends Component {
  render() {
    return (
      <Table
        columns={comunicaciones}
        dataSource={comunicacionesData}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 240 }}
      />
    );
  }
}

export default PresentedOffers;
