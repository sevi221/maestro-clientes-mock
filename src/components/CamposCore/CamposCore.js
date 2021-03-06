import React, { Component } from "react";
import { Descriptions, Empty, Row, Col, Card, Typography } from "antd";
import { datos } from "../../Api/ApiUrl";

import axios from "axios";
const { Title } = Typography;
const urlMockResumen =
  "https://ficha-cliente.getsandbox.com/clientes/interlocutor/9980013084/datos/generales";

class CamposCore extends Component {
  state = {
    resumen: [],
    basico: [],
    status: null,
  };

  UNSAFE_componentWillMount() {
    this.getCamposCore();
    this.getDataCore();
  }

  getCamposCore() {
    axios.get(urlMockResumen).then((res) => {
      console.log(res.data.core);
      this.setState({
        resumen: res.data.core,
        status: "success",
      });
    });
  }
  getDataCore() {
    axios.get(urlMockResumen).then((res) => {
      this.setState({
        basico: res.data.basico,
        status: "success",
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <Row>
            <Col span={24}>
              <Title level={2}>{this.state.basico.nombreComercial} </Title>
              <Title level={4}>{this.state.resumen.personaTipo} </Title>
              <Title level={4}>
                {this.state.resumen.tipoDocumento}{" "}
                {this.state.resumen.nroDocumento}
              </Title>
              <Title level={4}>Sector CNAE: {this.state.resumen.codCnae}</Title>
              <Title level={4}>Contrato: {this.state.resumen.contrato}</Title>
              <Title level={4}>Anexos: {this.state.resumen.anexos}</Title>
              <Title level={4}>CE: {this.state.resumen.ce}</Title>
              <Title level={4}>
                Total facturación anual: {this.state.resumen.totalFactAnual}€
              </Title>
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }
}

export default CamposCore;
