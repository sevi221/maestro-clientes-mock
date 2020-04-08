import React, { Component } from "react";
import { Descriptions } from "antd";

class ContractsData extends Component {
  render() {
    return (
      <React.Fragment>
        <Descriptions
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Contrato">5234719</Descriptions.Item>
          <Descriptions.Item label="Tipo de contrato">
            Renovable
          </Descriptions.Item>
          <Descriptions.Item label="Id. Contrato">5234719</Descriptions.Item>
          <Descriptions.Item label="Estado del contrato">
            Activo
          </Descriptions.Item>
          <Descriptions.Item label="Productos/servicios contratados">
            Paquetería-Mensajería
          </Descriptions.Item>
          <Descriptions.Item label="Valor neto">-</Descriptions.Item>
          <Descriptions.Item label="Moneda">EUR</Descriptions.Item>
          <Descriptions.Item label="Fecha del inicio del contrato">
            01/01/01
          </Descriptions.Item>
          <Descriptions.Item label="Fecha de modificación del contrato">
            02/02/02
          </Descriptions.Item>
          <Descriptions.Item label="Fecha de fin del contrato">
            10/10/10
          </Descriptions.Item>
          <Descriptions.Item label="Nombre del firmante del contrato">
            Javier Jiménez
          </Descriptions.Item>
          <Descriptions.Item label="Cargo del firmante del contrato">
            Director de Logística
          </Descriptions.Item>
        </Descriptions>
      </React.Fragment>
    );
  }
}

export default ContractsData;
