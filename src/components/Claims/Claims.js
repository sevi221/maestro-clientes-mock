import React, { Component } from "react";
import { Descriptions, Divider } from "antd";

class Claims extends Component {
  render() {
    return (
      <React.Fragment>
        <Descriptions
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Total de Reclamaciones">
            5
          </Descriptions.Item>
          <Descriptions.Item label="Total de relcamaciones/año">
            1
          </Descriptions.Item>
          <Descriptions.Item label="Fecha última reclamación">
            10/12/2019
          </Descriptions.Item>
          <Descriptions.Item label="Total de incidencias">3</Descriptions.Item>
          <Descriptions.Item label="Fecha última incidencia">
            05/01/2019
          </Descriptions.Item>
          <Descriptions.Item label="Canal más habitual de contacto">
            Teléfono
          </Descriptions.Item>
          <Descriptions.Item label="Total de indemnizaciones abonadas">
            0
          </Descriptions.Item>
          <Descriptions.Item label="Total de solicitudes abiertas">
            1
          </Descriptions.Item>
        </Descriptions>

        <Divider orientation="right">
          Histórico de reclamaciones de deudas
        </Divider>
        <Descriptions bordered>
          <Descriptions.Item label="Id de la reclamación de deuda">
            0000000
          </Descriptions.Item>
          <Descriptions.Item label="Fecha inicial de la deuda">
            01/01/01
          </Descriptions.Item>
          <Descriptions.Item label="Estado de reclamación de la deuda">
            Burofax
          </Descriptions.Item>
          <Descriptions.Item label="Última fecha de reclamación de la deuda">
            01/01/01
          </Descriptions.Item>
          <Descriptions.Item label="Resultado del análisis de riesgos">
            Positivo
          </Descriptions.Item>
          <Descriptions.Item label="Lista negra de Correos">
            No
          </Descriptions.Item>
        </Descriptions>
        <br />
      </React.Fragment>
    );
  }
}

export default Claims;
