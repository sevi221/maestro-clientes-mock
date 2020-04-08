import React, { Component } from "react";
import { Table, Descriptions, Divider } from "antd";

const enquiries = [
  {
    title: "Número de consulta",
    dataIndex: "id_query",
    width: 120
  },
  {
    title: "Encargado de la consulta",
    dataIndex: "person",
    width: 150
  },
  {
    title: "Tipo",
    dataIndex: "kind",
    width: 150
  },
  {
    title: "Canal",
    dataIndex: "channel",
    width: 150
  },
  {
    title: "Causa",
    dataIndex: "reason",
    width: 150
  },
  {
    title: "Fecha creación",
    dataIndex: "date_creation",
    width: 150
  },
  {
    title: "Fecha límite de respuesta",
    dataIndex: "date_answer",
    width: 150
  },
  {
    title: "Estado",
    dataIndex: "status",
    width: 150
  }
];
const enquiriesData = [];
for (let j = 0; j < 100; j++) {
  enquiriesData.push({
    key: j,
    id_query: `123${j}`,
    person: `Javier Jiménez`,
    kind: `(tipo de consulta)`,
    channel: `mail`,
    reason: `(motivo de consulta)`,
    date_creation: `01/01/01`,
    date_answer: `01/01/01`,
    status: `Abierta`
  });
}

class GeneralEnquiries extends Component {
  render() {
    return (
      <React.Fragment>
        <Descriptions bordered>
          <Descriptions.Item label="Total de consultas/año">
            21
          </Descriptions.Item>
          <Descriptions.Item label="Tipo de consulta habitual">
            -
          </Descriptions.Item>
          <Descriptions.Item label="Canal de consulta habitual">
            Mail
          </Descriptions.Item>
          <Descriptions.Item label="Fecha de última consulta">
            01/01/01
          </Descriptions.Item>
        </Descriptions>
        <Divider orientation="right">Consultas</Divider>
        <Table
          columns={enquiries}
          dataSource={enquiriesData}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
      </React.Fragment>
    );
  }
}

export default GeneralEnquiries;
