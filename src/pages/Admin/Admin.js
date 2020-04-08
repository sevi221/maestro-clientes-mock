import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import MyTable from './../../components/MyTable/MyTable';

class Admin extends Component {
  render() {
    return (
      <div className="Admin">
        <Row>
          <Col lg={18}>
            <h2>Reglas de adminstración</h2>
          </Col>
          <Col lg={5}>
            <span>
              <a href="#section">Generar CSV</a>
              <Divider type="vertical" />
              <a href="#section">Generar Excel</a>
            </span>
          </Col>
        </Row>
        <Row>
          <MyTable />
        </Row>
      </div>
    );
  }
}

export default Admin;
