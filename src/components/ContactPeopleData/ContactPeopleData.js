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
import "./ContactPeopleData.scss";

const { Title } = Typography;
const { confirm } = Modal;

const EditableContext = React.createContext();

const data = [];

// Usamos esta función para el Mock
// const getRandom = (longitud) => {
//   return Math.floor(
//     Math.pow(10, longitud - 1) + Math.random() * 9 * Math.pow(10, longitud - 1)
//   );
// };

// Campos de la lista
for (let i = 0; i < 14568; i++) {
  data.push({
    key: i,
    id: `CT28009509`,
    nombre: `Antonio Jiménez`,
    cargo: `Encargado`,
    depart: `Ventas`,
  });
}

class ContactPeopleData extends React.Component {
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
        title: "Nombre de Contacto",
        dataIndex: "nombre",
        sorter: (a, b) => a.nombre.localeCompare(b.nombre),
        sortDirections: ["descend", "ascend"],
        editable: true,
        ...this.getColumnSearchProps("nombre"),
      },
      {
        title: "Cargo",
        dataIndex: "cargo",
        sorter: (a, b) => a.cargo - b.cargo,
        sortDirections: ["descend", "ascend"],
        editable: true,
        ...this.getColumnSearchProps("cargo"),
      },
      {
        title: "Departamento",
        dataIndex: "depart",
        sorter: (a, b) => a.depart - b.depart,
        sortDirections: ["descend", "ascend"],
        editable: true,
        ...this.getColumnSearchProps("depart"),
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
                    title="Datos de contacto"
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
                              Manoteras
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
                              antonio@mueblespulido.es
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
                    <Card>
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
                    </Card>
                  </Modal>
                </div>
              ) : null}
              {/* <a
                disabled={editingKey !== ""}
                onClick={() => this.edit(record.key)}
              >
                Editar
              </a>
              <Divider type="vertical" /> */}
              {/* {this.state.dataSource.length >= 1 ? (
                <Popconfirm
                  title="¿Desea continuar?"
                  onConfirm={() => this.handleDelete(record.key)}
                >
                  <a href="#section">Ver más</a>
                </Popconfirm>
              ) : null} */}
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

  // showConfirm = () => {
  //   confirm({
  //     closable: true,
  //     title: "Los siguientes registros se eliminarán permanentemente",
  //     content: "¿Desea continuar?",
  //     onOk() {},
  //     onCancel() {},
  //   });
  // };

  // Eliminar contacto
  // handleDelete = (key) => {
  //   const { count, dataSource } = this.state;
  //   this.setState({
  //     dataSource: dataSource.filter((item) => item.key !== key),
  //     count: count - 1,
  //   });
  // };

  // Añadir Contacto
  //  handleAdd = () => {
  //    const { count, dataSource } = this.state;
  //    const newData = {
  //      key: count,
  //      id: `CT28009509`,
  //      nombre: `Javier Jiménez`,
  //      cargo: `Encargado`,
  //      depart: `Ventas`,
  //    };
  //   this.setState({
  //     dataSource: [...dataSource, newData],
  //     count: count + 1,
  //   });
  // };

  // Salvar contacto
  // Save = (row) => {
  //   const newData = [...this.state.dataSource];
  //   const index = newData.findIndex((item) => row.key === item.key);
  //   const item = newData[index];
  //   newData.splice(index, 1, {
  //     ...item,
  //     ...row,
  //   });
  //   this.setState({ dataSource: newData });
  // };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        cell: ContactPeopleData,
      },
    };

    const columns = this.columns.map((col) => {
      // if (!col.editable) {
      //   return col;
      // }
      return {
        ...col,
        onCell: (record) => ({
          record,
          inputType: "text",
          dataIndex: col.dataIndex,
          title: col.title,
          // editing: this.isEditing(record),
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
      // footer: () => (
      //   <Row>
      //     <Col lg={15} />
      //     <Col>
      //       <Button type="default" onClick={this.showConfirm}>
      //         Eliminar seleccionados
      //       </Button>
      //       <Button type="primary" onClick={this.handleAdd}>
      //         Añadir nuevo registro
      //       </Button>
      //     </Col>
      //   </Row>
      // ),
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
