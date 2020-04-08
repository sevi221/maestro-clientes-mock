import React, { Component } from "react";
import { Row, Col, Checkbox, DatePicker } from "antd";
import "./Gdpr.scss";

import moment from "moment";
class Gdpr extends Component {
  render() {
    return (
      <Row>
        <Col span={6}>
          <Checkbox defaultChecked={false} disabled />
          Ofertas Filatelia
          <br />
          <Checkbox defaultChecked disabled />
          Ofertas y promociones de Correos
          <br />
        </Col>
        <Col span={6}>
          <Checkbox defaultChecked={false} disabled />
          Ofertas y promociones de empresas del grupo Correos y terceras
          empresas
          <br />
          <Checkbox defaultChecked disabled />
          Cesión de datos a empresas del Grupo Correos y a terceras empresas
          <br />
        </Col>
        <Col span={6}>
          <Checkbox defaultChecked disabled />
          Perfilado con fuentes externas
          <br />
          <Checkbox defaultChecked disabled />
          Ultima versión aceptada de condiciones de servicio
          <br />
          <br />
          Fecha de última versión aceptada
          <DatePicker
            defaultValue={moment("2015-06-06", "YYYY-MM-DD")}
            disabled
          />
          <br />
        </Col>
      </Row>
    );
  }
}

export default Gdpr;
