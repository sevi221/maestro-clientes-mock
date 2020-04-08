import React, { Component } from "react";
import { Descriptions, Divider } from "antd";

class BankData extends Component {
  render() {
    return (
      <React.Fragment>
        <Descriptions
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Condición de pago">
            Pago 40 días fecha de factura
          </Descriptions.Item>
          <Descriptions.Item label="Forma de pago">
            {" "}
            Transferencia
          </Descriptions.Item>
          <Descriptions.Item label="Titular de la cuenta">
            Javier Jimenez
          </Descriptions.Item>
          <Descriptions.Item label="Apto para recibir fondos">
            Sí
          </Descriptions.Item>
          <Descriptions.Item label="Id datos bancarios">-</Descriptions.Item>
          <Descriptions.Item label="Clave de país del bancoo">
            ES
          </Descriptions.Item>
          <Descriptions.Item label="Nº cuenta bancaria" span={10}>
            ES44 2068 8695 8628 1801 5854
          </Descriptions.Item>
          <Descriptions.Item label="Clave de control de bancos">
            881
          </Descriptions.Item>
          <Descriptions.Item label="Denominación datos bancarios">
            -
          </Descriptions.Item>
          <Descriptions.Item label="Inicio validez de datos bancarios">
            20/02/20
          </Descriptions.Item>
          <Descriptions.Item label="Fin validez de datos bancarios">
            20/02/25
          </Descriptions.Item>
          <Descriptions.Item label="Titular de la tarjeta">
            Javier Jimenez
          </Descriptions.Item>
          <Descriptions.Item label="Nº tarjeta de pago" span={10}>
            4827 9806 6980 7162
          </Descriptions.Item>
          <Descriptions.Item label="Fecha de caducidad">
            12/23
          </Descriptions.Item>
          <Descriptions.Item label="Datos de pago por PayPal">
            -
          </Descriptions.Item>
        </Descriptions>
        <Divider orientation="right">Datos de Evolutivo Profesional</Divider>
        <Descriptions bordered>
          <Descriptions.item label="Fecha de fundación de la empresa">
            25/06/1994
          </Descriptions.item>
          <Descriptions.item label="Posición en el mercado">
            1456
          </Descriptions.item>
          <Descriptions.item label="Núm. de empleados">142</Descriptions.item>
          <Descriptions.item label="Cambio en la razón social">
            -
          </Descriptions.item>
          <Descriptions.item label="Motivo del cambio">-</Descriptions.item>
          <Descriptions.item label="Filiales de la empresa">
            Hnos. Pulido; Muebles Fábrica S.L.
          </Descriptions.item>
          <Descriptions.item label="Empresa matriz">
            Muebles Pulido
          </Descriptions.item>
          <Descriptions.item label="Quiebras anteriores">-</Descriptions.item>
          <Descriptions.item label="Lista negra externa">-</Descriptions.item>
          <Descriptions.item label="Última fecha de publicación de cuentas">
            -
          </Descriptions.item>
          <Descriptions.item label="Liquidez anual">-</Descriptions.item>
          <Descriptions.item label="Facturación anual">-</Descriptions.item>
          <Descriptions.item label="Valores de la empresa">-</Descriptions.item>
        </Descriptions>
      </React.Fragment>
    );
  }
}

export default BankData;
