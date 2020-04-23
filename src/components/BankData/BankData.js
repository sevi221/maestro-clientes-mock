import React, { Component } from "react";
import { Descriptions, Divider } from "antd";

import axios from "axios";
const urlMock =
  "https://virtserver.swaggerhub.com/jrojsanc/ficha-cliente/1.0/interlocutor/1/datos/generales";
class BankData extends Component {
  state = {
    bancario: [],
    status: null,
  };

  UNSAFE_componentWillMount() {
    this.getCliente();
  }
  getCliente() {
    axios.get(urlMock).then((res) => {
      console.log(res.data);
      this.setState({
        bancario: res.data.bancario,
        status: "success",
      });
      console.log(this.state);
    });
  }
  render() {
    return (
      <React.Fragment>
        <Descriptions
          size="small"
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Condición de pago" span={3}>
            {this.state.bancario.condPago}
          </Descriptions.Item>
          <Descriptions.Item label="Forma de pago" span={3}>
            {this.state.bancario.formaPago}
          </Descriptions.Item>
          <Descriptions.Item label="Titular de la cuenta" span={3}>
            {this.state.bancario.titularCuenta}
          </Descriptions.Item>
          <Descriptions.Item label="Apto para recibir fondos" span={3}>
            {this.state.bancario.aptoRecibeFondos}
          </Descriptions.Item>
          <Descriptions.Item label="Id datos bancarios" span={3}>
            {this.state.bancario.id}
          </Descriptions.Item>
          <Descriptions.Item label="Clave de país del banco" span={3}>
            {this.state.bancario.clavePaisBanco}
          </Descriptions.Item>
          <Descriptions.Item label="Clave del banco" span={3}>
            {this.state.bancario.claveBanco}
          </Descriptions.Item>
          <Descriptions.Item label="Nº cuenta bancaria" span={3}>
            {this.state.bancario.ctaBancaria}
          </Descriptions.Item>
          <Descriptions.Item label="Nº tarjeta de pago" span={3}>
            {this.state.bancario.nroTarjetaPago}
          </Descriptions.Item>
          <Descriptions.Item label="Clave de control de bancos" span={3}>
            {this.state.bancario.claveControlBanco}
          </Descriptions.Item>
          <Descriptions.Item label="Denominación datos bancarios" span={3}>
            {this.state.bancario.denominacion}
          </Descriptions.Item>
          <Descriptions.Item label="Inicio validez de datos bancarios" span={3}>
            {this.state.bancario.inicioValidez}
          </Descriptions.Item>
          <Descriptions.Item label="Fin validez de datos bancarios" span={3}>
            {this.state.bancario.finValidez}
          </Descriptions.Item>
          <Descriptions.Item label="Titular de la tarjeta" span={3}>
            {this.state.bancario.titularCuenta}
          </Descriptions.Item>
          <Descriptions.Item label="Fecha de caducidad" span={3}>
            {this.state.bancario.fechaCaducidad}
          </Descriptions.Item>
          <Descriptions.Item label="Datos de pago por PayPal" span={3}>
            {this.state.bancario.datosPaypal}
          </Descriptions.Item>
        </Descriptions>
        <Divider orientation="right">Datos de Evolutivo Profesional</Divider>
        <Descriptions bordered size="small">
          <Descriptions.item label="Fecha de fundación de la empresa" span={3}>
            1988
          </Descriptions.item>
          <Descriptions.item label="Posición en el mercado" span={3}>
            22
          </Descriptions.item>
          <Descriptions.item label="Núm. de empleados" span={3}>
            126.973 (2019)​
          </Descriptions.item>
          <Descriptions.item label="Cambio en la razón social" span={3}>
            -
          </Descriptions.item>
          <Descriptions.item label="Motivo del cambio" span={3}>
            -
          </Descriptions.item>
          <Descriptions.item label="Filiales de la empresa" span={3}>
            BBVA
          </Descriptions.item>
          <Descriptions.item label="Empresa matriz" span={3}>
            Banco Bilbao Vizcaya Argentaria, S. A.
          </Descriptions.item>
          <Descriptions.item label="Quiebras anteriores" span={3}>
            -
          </Descriptions.item>
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
