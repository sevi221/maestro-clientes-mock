import React, { Component } from "react";
import { Anchor, Descriptions, Row, Col, Input, Button, Modal } from "antd";
import "./MockSearch.scss";

const { Link } = Anchor;

class MockSearch extends Component {
 constructor(props) {
  super(props);
   this.state = { visible: false };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    return (
      <div className="Clients">
        <div className="Form">
          <h2>Atención al Cliente</h2>
          <h3>Formulario de admisión de datos</h3>
          <Row>
            <Col lg={4}>
              <label>Identificador Det.: </label>

              <Input style={{ width: "100% " }} />
            </Col>
            <Col lg={8}>
              <div className="Botonera">
                <Button size="large" type="primary">
                  Borrar Campos
                </Button>
                <Button size="large" type="primary" >
                  Buscar
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="Form">
          <h3>Búsqueda avanzada</h3>
          <Row>
            <Col lg={4}>
              <label>E-mail: </label>

              <Input style={{ width: "100% " }} />
            </Col>
            <Col lg={4}>
              <label>Teléfono: </label>

              <Input style={{ width: "100% " }} />
            </Col>
            <Col lg={4}>
              <label>Razón social: </label>
              <Input style={{ width: "100% " }} />
            </Col>
            <Col lg={4}>
              <label>CIF: </label>
              <Input style={{ width: "100% " }} />
            </Col>
            <Col lg={17}>
              <div className="Botonera">
                <Button size="large" type="primary">
                  Borrar Campos
                </Button>
                <Button size="large" type="primary" onClick={this.showModal}>
                  Buscar
                </Button>
                <Modal
                  title="Coincidencia de Contactos y Comunicaciones"
                  visible={this.state.visible}
                  width={750}
                >
                  <Descriptions bordered size="small">
                    <Descriptions.Item label="Usuario">
                      <Anchor affix={false}>
                        <Link href="/fichacontactos" title="Javier Jiménez" />
                      </Anchor>
                    </Descriptions.Item>
                    <Descriptions.Item label="Cliente">
                      Cliente Detallable
                    </Descriptions.Item>
                    <Descriptions.Item label="Id">CT28009509</Descriptions.Item>
                    <Descriptions.Item label="E-Mail">
                      info@mueblespulido.es
                    </Descriptions.Item>
                    <Descriptions.Item label="CIF">0545789H</Descriptions.Item>
                    <Descriptions.Item label="Teléfono">
                      621621266
                    </Descriptions.Item>
                  </Descriptions>
                  <Descriptions bordered size="small">
                    <Descriptions.Item label="Usuario">
                      <Anchor affix={false}>
                        <Link title="Javier Jiménez" />
                      </Anchor>
                    </Descriptions.Item>
                    <Descriptions.Item label="Cliente">
                      Cliente Facturable
                    </Descriptions.Item>
                    <Descriptions.Item label="Id">CT28009509</Descriptions.Item>
                    <Descriptions.Item label="E-Mail">
                      info@mueblespulido.es
                    </Descriptions.Item>
                    <Descriptions.Item label="CIF">0545789H</Descriptions.Item>
                    <Descriptions.Item label="Teléfono">
                      621621266
                    </Descriptions.Item>
                  </Descriptions>
                </Modal>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default MockSearch;
