import React, { Component } from "react";
import { Row, Col, Input, Select, DatePicker, TimePicker, Checkbox, Radio, Button } from "antd";

const { Option } = Select;

class Admision extends Component {
  render() {
    return (
      <div className="Admision">
        <div className="Form">
          <h2>Admisión</h2>
          <h3>Formulario de admisión de datos</h3>
          <Row>
            <Col lg={7}>
              <label>País: </label>
              <br />
              <Select defaultValue="España" style={{ width: "100% " }}>
                <Option value="España">España</Option>
                <Option value="Portugal">Portugal</Option>
                <Option value="Francia">Francia</Option>
              </Select>
            </Col>
            <Col lg={4}>
              <label>Codigo de envio: </label>
              <br />
              <Input style={{ width: "100% " }} />
            </Col>
            <Col lg={4}>
              <label>Número de envio: </label>
              <br />
              <Input style={{ width: "100% " }} />
            </Col>
            <Col lg={4}>
              <label>Hora del envio: </label>
              <br />
              <TimePicker style={{ width: "100% " }} />
            </Col>
          </Row>
          <Row>
            <h3>Aeropuerto origen</h3>
            <Col lg={5}>
              <label></label>
              <br />
              <Select defaultValue="S31">
                <Option value="S31">S31</Option>
                <Option value="A23">A23</Option>
              </Select>
              <Input style={{ marginLeft: "0.64em", width: " 60%" }} />
            </Col>
            <Col lg={7}>
              <label></label>
              <br />
              <Input style={{ width: "100%" }} />
            </Col>
            <Col lg={4}>
              <label>Código PCI:</label>
              <br />
              <Input style={{ width: "100%" }} />
            </Col>
            <Col lg={4}>
              <label>Fecha entrega:</label>
              <br />
              <DatePicker style={{ width: "100%" }} />
            </Col>
          </Row>
          <Row>
            <h3>Producto</h3>
            <select multiple className="selPaq">
              <option value="PaqNacional">Paquete Nacional</option>
              <option value="PaqInternacional">Paquete Internacional</option>
              <option value="PaqInternacionalPremium">
                Paquete Internacional Premium
              </option>
              <option value="PaqPremiumPrefranqueado">
                Paquete Premium Prefranqueado
              </option>
              <option value="PaqInternacionalLight">
                Paquete Internacional Light
              </option>
            </select>
          </Row>
          <Row>
            <h3>Producto</h3>
            <Checkbox.Group style={{ width: "100%" }}>
              <Checkbox value="avión" defaultChecked>
                Limite reembolso avión
              </Checkbox>
              <Checkbox value="superficie" defaultChecked>
                Límite superficie
              </Checkbox>
              <Checkbox value="bandeja">Admite bandeja</Checkbox>
              <Checkbox value="sacaPci">Admite saca PCI</Checkbox>
            </Checkbox.Group>
          </Row>
          <Row>
            <Radio.Group>
              <Radio value={1}>Grado A</Radio>
              <Radio value={2}>Grado B</Radio>
              <Radio value={3}>Grado C</Radio>
              <Radio value={4}>Grado D</Radio>
            </Radio.Group>
          </Row>
        </div>
        <div className="Botonera">
          <Button size="large" type="primary">
            Cancelar
          </Button>
          <Button size="large" type="primary">
            Guardar cambios
          </Button>
        </div>
      </div>
    );
  }
}

export default Admision;
