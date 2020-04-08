import React, { Component } from "react";
import { Descriptions, Badge, Button, Modal } from "antd";

class Billing extends Component {
  render() {
    return (
      <Descriptions bordered>
        <Descriptions.Item label="Facturación Anual" span={3}>
          <Badge color="yellow" text="Total facturación anual: 20.000.000€" />
          <br />
          <Badge
            color="yellow"
            text="Total facturación bruta anual: 25.000.000€"
          />
          <br />
          <Badge
            color="yellow"
            text="Bonificaciones en facturación anual: 600.000€"
          />
          <br />
          <Badge color="yellow" text="% Bonificaciones s/Factur.Bruta anual:" />
          <br />
          <Badge
            color="yellow"
            text="Total facturación neta anual: 23.000.000€"
          />
          <br />
          <Badge
            color="yellow"
            text="Total facturación media mensual: 1.666.666,67€"
          />
        </Descriptions.Item>
        <Descriptions.Item label="Canales de facturación" span={3}>
          Red de venta
          <br />
          Condiciones de pago por canal de facturación: Pago a 10 días manual
          <br />
          Forma de pago por canal: Domiciliación bancaria
          <br />
          Facturación anual neta y precios por producto Paquetería - 10.000.000
          € - 4 €/envío Burofax - 10.000.000 € - 1 €/envío
          <br />
          <div>
            <br />
          </div>
        </Descriptions.Item>
      </Descriptions>
    );
  }
}

export default Billing;
