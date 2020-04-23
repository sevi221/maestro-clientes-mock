import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { Form, Row, Col, Input, Button, Modal } from "antd";
import "./MockSearch.scss";
import ContactsList from "../../components/Constants/ContactsList";

import axios from "axios";
const urlMock = "https://ficha-cliente.getsandbox.com/clientes/interlocutor/";
class MockSearch extends Component {
  idRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = { visible: false, user: {}, search: "" };
    this.value = {};
  }
  redirect = () => {
    window.location.href = "/fichacliente1";
  };

  getIdClient = () => {
    this.setState({
      search: this.idRef.current.state.value,
    });
    console.log(this.idRef.current.state.value);
    console.log(this.state.search);
    // this.getIdFromSearch();
  };

  // getIdFromSearch = () => {
  //   let id = this.state.search;
  //   let url = urlMock + id + "/datos/generales";
  //   axios.get(url).then((res) => {
  //     this.setState({
  //       buscar: res.data.buscar,
  //       status: "success",
  //     });
  //     console.log(this.state.buscar);
  //   });
  // };

  showModal = () => {
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

  onReset = (event) => {
    console.log(event);
    this.form.resetFields();
    console.log("onReset pulsado");
  };

  render() {
    return (
      <div className="Clients">
        <Form className="Form">
          <h2>Bienvenido a Maestro de Clientes</h2>
          <h3>Búsqueda de Cliente</h3>
          <Row>
            <Col lg={8}>
              <Form.Item label="Código del interlocutor">
                <Input ref={this.idRef} allowClear />
              </Form.Item>
            </Col>
          </Row>
          <div className="Botonera">
            <Form.Item>
              <Row>
                <Col lg={10}>
                  <Button size="large" type="primary" onClick={this.onReset}>
                    Borrar Campos
                  </Button>
                  <Button size="large" type="primary" onClick={this.redirect}>
                    Buscar
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </div>
        </Form>
        <div className="Form">
          <h3>Búsqueda de Contactos y Comunicaciones</h3>
          <Form className="Form">
            <Row>
              <Col lg={4}>
                <label>E-mail: </label>
                <Input style={{ width: "100% " }} allowClear />
              </Col>
              <Col lg={4}>
                <label>Teléfono: </label>
                <Input style={{ width: "100% " }} allowClear />
              </Col>
              <Col lg={4}>
                <label>Razón social: </label>
                <Input style={{ width: "100% " }} allowClear />
              </Col>
              <Col lg={4}>
                <label>CIF: </label>
                <Input style={{ width: "100% " }} allowClear />
              </Col>
              <Col lg={10}>
                <div className="Botonera">
                  <Button size="large" type="primary" onClick={this.onReset}>
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
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(MockSearch);
