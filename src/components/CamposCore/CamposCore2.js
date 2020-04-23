import React, { Component } from "react";
import { Descriptions, Empty, Row, Col, Card, Typography } from "antd";
import { datos } from "../../Api/ApiUrl";

import axios from "axios";
const { Title } = Typography;
const urlMockResumen =
  "https://ficha-cliente-v4.getsandbox.com/clientes/interlocutor/CT48000500/datos/generales";
// "http://www.mocky.io/v2/5ea198bd31000056291eec46";
// CLIENTE CONTRATANTE
class CamposCore2 extends Component {
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
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }
}

export default CamposCore2;
