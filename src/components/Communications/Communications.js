import React, { Component } from "react";
import { Table } from "antd";

const comunicaciones = [
  {
    title: "Fecha de contacto",
    dataIndex: "fecha",
    width: 150
  },
  {
    title: "Motivo de contacto",
    dataIndex: "motivo",
    width: 150
  },
  {
    title: "Id. Asociado a Com.",
    dataIndex: "id",
    width: 120
  },
  {
    title: "Canal de contacto",
    dataIndex: "canal",
    width: 150
  },
  {
    title: "Estado de Com.",
    dataIndex: "estado",
    width: 150
  },
  {
    title: "Área responsable",
    dataIndex: "area",
    width: 150
  },
  {
    title: "Empleado responsable",
    dataIndex: "encargado",
    width: 150
  },
  {
    title: "Persona de contacto",
    dataIndex: "cliente",
    width: 150
  }
];
const comunicacionesData = [];
for (let j = 0; j < 100; j++) {
  comunicacionesData.push({
    key: j,
    fecha: `01/01/01`,
    motivo: `Recordatorio`,
    id: `123${j}`,
    canal: `Email`,
    estado: `Abierta`,
    area: `Ventas`,
    encargado: `Juan Jiménez`,
    cliente: `Javier Jiménez`
  });
}
class Communications extends Component {
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

export default Communications;
