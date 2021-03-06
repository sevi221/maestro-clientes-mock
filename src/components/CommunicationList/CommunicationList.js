import React, { Component } from "react";
import {
  Button,
  Card,
  Col,
  Checkbox,
  DatePicker,
  Descriptions,
  Divider,
  Form,
  Icon,
  Input,
  Modal,
  Popconfirm,
  Table,
  Tag,
  Typography,
  Row,
} from "antd";
import moment from "moment";
import "./CommunicationList.scss";

const { Title } = Typography;
const { confirm } = Modal;

const EditableContext = React.createContext();

const data = [];

// Campos de la lista
for (let i = 0; i < 3; i++) {
  data.push({
    key: i,
    id: `001`,
    comunication: `Comunicación Ejemplo`,
    fecha: `01/01/2020`,
    estado: `Abierto`,
  });
}

class CommunicationList extends React.Component {
  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Por favor, introduzca ${title}!`,
                },
              ],
              initialValue: record[dataIndex],
            })(<Input style={{ width: "100%" }} />)}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      dataSource: data,
      count: data.length,
      searchText: "",
      searchedColumn: "",
      editingKey: "",
    };

    // ESTO ES EL T HEAD
    this.columns = [
      {
        title: "ID",
        dataIndex: "id",
        sorter: (a, b) => a.id - b.id,
        sortDirections: ["descend", "ascend"],
        editable: true,
        ...this.getColumnSearchProps("id"),
      },
      {
        title: "Comunicación",
        dataIndex: "comunication",
        sorter: (a, b) => a.comunication.localeCompare(b.comunication),
        sortDirections: ["descend", "ascend"],
        editable: true,
        ...this.getColumnSearchProps("comunication"),
      },
      {
        title: "Fecha",
        dataIndex: "fecha",
        sorter: (a, b) => a.fecha - b.fecha,
        sortDirections: ["descend", "ascend"],
        editable: true,
        ...this.getColumnSearchProps("fecha"),
      },
      {
        title: "Estado",
        dataIndex: "estado",
        sorter: (a, b) => a.estado - b.estado,
        sortDirections: ["descend", "ascend"],
        editable: true,
        ...this.getColumnSearchProps("estado"),
      },
      {
        title: "Detalle",
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {(form) => (
                  <a
                    onClick={() => this.save(form, record.key)}
                    style={{ marginRight: 8 }}
                  >
                    {"Guardar\n"}
                  </a>
                )}
              </EditableContext.Consumer>
              <Popconfirm
                title="¿Seguro que quieres cancelar?"
                onConfirm={() => this.cancel(record.key)}
              >
                <a>Cancelar</a>
              </Popconfirm>
            </span>
          ) : (
            <span>
              {this.state.dataSource.length >= 1 ? (
                <div>
                  <Button type="primary" onClick={this.showModal}>
                    Ver más
                  </Button>
                  <Modal
                    width="100"
                    title="Detalle de comunicación"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    <Card>
                      <Row>
                        <Col span={24}>
                          <Title level={3}>Antonio Jiménez Jiménez</Title>
                          <Title level={4}>ID: CT28009509</Title>
                          <Descriptions bordered size={"small"}>
                            <Descriptions.Item
                              label="Mismo que Datos de contacto del cliente"
                              span={12}
                            >
                              Sí
                            </Descriptions.Item>
                            <Descriptions.Item label="Origen datos" span={5}>
                              CRM
                            </Descriptions.Item>
                            <Descriptions.Item
                              label="Nombre del cargo"
                              span={5}
                            >
                              Encargado
                            </Descriptions.Item>
                            <Descriptions.Item label="Departamento" span={5}>
                              Ventas
                            </Descriptions.Item>
                            <Descriptions.Item label="País" span={5}>
                              España
                            </Descriptions.Item>
                            <Descriptions.Item label="Código de País">
                              Alcalá
                            </Descriptions.Item>
                            <Descriptions.Item label="Tipo de Vía">
                              58
                            </Descriptions.Item>
                            <Descriptions.Item label="Calle">
                              3
                            </Descriptions.Item>
                            <Descriptions.Item label="Número">
                              3
                            </Descriptions.Item>
                            <Descriptions.Item label="Portal">
                              -
                            </Descriptions.Item>
                            <Descriptions.Item label="Puerta">
                              -
                            </Descriptions.Item>
                            <Descriptions.Item label="Bloque">
                              -
                            </Descriptions.Item>
                            <Descriptions.Item label="Escalera">
                              -
                            </Descriptions.Item>
                            <Descriptions.Item label="Piso">
                              -
                            </Descriptions.Item>
                            <Descriptions.Item label="Código Postal">
                              28050
                            </Descriptions.Item>
                            <Descriptions.Item label="Localidad">
                              Madrid
                            </Descriptions.Item>
                            <Descriptions.Item label="Provincia">
                              Madrid
                            </Descriptions.Item>
                            <Descriptions.Item label="Código Región">
                              MAD
                            </Descriptions.Item>
                            <Descriptions.Item label="Idioma">
                              Español
                            </Descriptions.Item>
                            <Descriptions.Item label="Teléfono">
                              915556565
                            </Descriptions.Item>
                            <Descriptions.Item label="Teléfono móvil">
                              622687895
                            </Descriptions.Item>
                            <Descriptions.Item label="Fax">
                              915556565
                            </Descriptions.Item>
                            <Descriptions.Item label="Correo Electrónico">
                              uno-e@bbva.es
                            </Descriptions.Item>
                            <Descriptions.Item label="Activo">
                              Si
                            </Descriptions.Item>
                            <Descriptions.Item label="Interlocutor Principal">
                              María Sánchez
                            </Descriptions.Item>
                          </Descriptions>
                        </Col>
                      </Row>
                    </Card>
                    {/* <Card>
                      <Divider orientation="left">GDPR</Divider>
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
                          Ofertas y promociones de empresas del grupo Correos y
                          terceras empresas
                          <br />
                          <Checkbox defaultChecked disabled />
                          Cesión de datos a empresas del Grupo Correos y a
                          terceras empresas
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
                        </Col>
                      </Row>
                    </Card> */}
                  </Modal>
                </div>
              ) : null}
            </span>
          );
        },
      },
    ];
  }

  isEditing = (record) => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: "" });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.dataSource];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ dataSource: newData, editingKey: "" });
      } else {
        newData.push(row);
        this.setState({ dataSource: newData, editingKey: "" });
      }
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Buscar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 190, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Buscar
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reiniciar
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        cell: CommunicationList,
      },
    };

    const columns = this.columns.map((col) => {
      return {
        ...col,
        onCell: (record) => ({
          record,
          inputType: "text",
          dataIndex: col.dataIndex,
          title: col.title,
        }),
      };
    });

    // Botón en el footer para añadir o eliminar registros
    const props = {
      bordered: true,
      pagination: {
        total: this.state.count,
        showTotal: (total) => `${total} resultados`,
        showSizeChanger: true,
        showQuickJumper: true,
      },
      rowSelection: {},
      components: components,
      rowClassName: () => "editable-row",
    };

    return (
      <EditableContext.Provider value={this.props.form}>
        <Table
          components={components}
          scroll={{ x: 500 }}
          {...props}
          dataSource={dataSource}
          columns={columns}
        />
      </EditableContext.Provider>
    );
  }
}

export default Form.create()(EditableTable);
