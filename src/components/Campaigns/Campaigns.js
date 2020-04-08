import React, { Component } from "react";
import { Table } from "antd";

const campaigns = [
  {
    title: "Id de campaña",
    dataIndex: "id",
    width: 150
  },
  {
    title: "Tipo de campaña",
    dataIndex: "tipo",
    width: 150
  },
  {
    title: "Nombre de campaña",
    dataIndex: "nombre",
    width: 120
  },
  {
    title: "Motivo",
    dataIndex: "motivo",
    width: 150
  },
  {
    title: "Servicio asociado",
    dataIndex: "servicio",
    width: 150
  },
  {
    title: "Cód. promocional",
    dataIndex: "promocion",
    width: 150
  },
  {
    title: "Canal de com.",
    dataIndex: "canal",
    width: 150
  },
  {
    title: "Fecha inicio",
    dataIndex: "fecha_ini",
    width: 150
  }
];
const campaignsData = [];
for (let j = 0; j < 100; j++) {
  campaignsData.push({
    key: j,
    id: `01/01/01`,
    tipo: `Recordatorio`,
    nombre: `123${j}`,
    motivo: `Email`,
    servicio: `Abierta`,
    promocion: `Ventas`,
    canal: `Juan Jiménez`,
    fecha_ini: `Javier Jiménez`
  });
}
class Campaigns extends Component {
  render() {
    return (
      <Table
        columns={campaigns}
        dataSource={campaignsData}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 240 }}
      />
    );
  }
}

export default Campaigns;
