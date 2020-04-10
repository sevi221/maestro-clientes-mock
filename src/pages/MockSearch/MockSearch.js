import React, { Component } from "react";
import {
  Anchor,
  Descriptions,
  Form,
  Row,
  Col,
  Input,
  Button,
  Modal,
} from "antd";
import "./MockSearch.scss";
import ContactsList from "../../components/Constants/ContactsList";

const { Link } = Anchor;
class MockSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.value = {};
  }

  showModal = () => {
    console.log("HOLAAAA");
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };
  handleReset = () => {
    console.log("Hola Reset");
    this.props.form.resetFields();
  };

  handleRedirect = () => {
    console.log("redirect");
    window.location.href = "/fichacliente";
  };
  render() {
    return (
      <div className="Clients">
        <Form className="Form">
          <h2>Atención al Cliente</h2>
          <h3>Formulario de admisión de datos</h3>
          <Form.Item label="Identificador Det.:">
            <Input style={{ width: "25% " }} />
            <div className="Botonera">
              <Button
                size="large"
                type="primary"
                onClick={this.handleReset.bind(this)}
              >
                Borrar Campos
              </Button>
              <Button size="large" type="primary" onClick={this.handleRedirect}>
                Buscar
              </Button>
            </div>
          </Form.Item>
        </Form>
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
                <Button size="large" type="primary" onClick={this.handleReset}>
                  Borrar Campos
                </Button>
                <Button size="large" type="primary" onClick={this.showModal}>
                  Buscar
                </Button>
                <Modal
                  visible={this.state.visible}
                  width={750}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <ContactsList />
                </Modal>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Form.create()(MockSearch);
