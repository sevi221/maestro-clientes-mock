import React from "react";
import {
  Row,
  Col,
  Input,
  Button,
  Table,
  Divider,
  Form,
  Modal,
  Tag,
  Popconfirm,
  Icon,
} from "antd";
const { confirm } = Modal;

const EditableContext = React.createContext();

const data = [];
const tagsEst = ["Pendiente", "Asignado", "En curso", "Completado"];
const codPos = ["28965", "28033", "48596", "30813"];

const getRandom = (longitud) => {
  return Math.floor(
    Math.pow(10, longitud - 1) + Math.random() * 9 * Math.pow(10, longitud - 1)
  );
};

for (let i = 0; i < 14568; i++) {
  data.push({
    key: i,
    id: getRandom(16),
    local: `Talamanca de Jarama`,
    cod: getRandom(8),
    cont: getRandom(10),
    cp: codPos[Math.floor(Math.random() * codPos.length)],
    poblacion: getRandom(6),
    desPob: getRandom(6),
    tags: new Array(tagsEst[Math.floor(Math.random() * tagsEst.length)]),
  });
}

class EditableCell extends React.Component {
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
      dataSource: data,
      count: data.length,
      searchText: "",
      searchedColumn: "",
      editingKey: "",
    };
    this.columns = [
      {
        title: "ID",
        dataIndex: "id",
        sorter: (a, b) => a.id - b.id,
        sortDirections: ["descend", "ascend"],
        editable: true,
        width: 90,
        ...this.getColumnSearchProps("id"),
      },
      {
        title: "Localidad",
        dataIndex: "local",
        sorter: (a, b) => a.local.localeCompare(b.local),
        sortDirections: ["descend", "ascend"],
        width: 130,
        editable: true,
        ...this.getColumnSearchProps("local"),
      },
      {
        title: "Código",
        dataIndex: "cod",
        sorter: (a, b) => a.cod - b.cod,
        sortDirections: ["descend", "ascend"],
        width: 115,
        editable: true,
        ...this.getColumnSearchProps("cod"),
      },
      {
        title: "Continente",
        dataIndex: "cont",
        sorter: (a, b) => a.cont - b.cont,
        sortDirections: ["descend", "ascend"],
        width: 140,
        editable: true,
        ...this.getColumnSearchProps("cont"),
      },
      {
        title: "CP",
        dataIndex: "cp",
        sorter: (a, b) => a.cp - b.cp,
        sortDirections: ["descend", "ascend"],
        width: 90,
        editable: true,
        ...this.getColumnSearchProps("cp"),
      },
      {
        title: "Población",
        dataIndex: "poblacion",
        sorter: (a, b) => a.poblacion - b.poblacion,
        sortDirections: ["descend", "ascend"],
        width: 130,
        editable: true,
        ...this.getColumnSearchProps("poblacion"),
      },
      {
        title: "Desglose Población",
        dataIndex: "desPob",
        sorter: (a, b) => a.desPob - b.desPob,
        sortDirections: ["descend", "ascend"],
        width: 140,
        editable: true,
        ...this.getColumnSearchProps("desPob"),
      },
      {
        title: "Estado",
        key: "tags",
        dataIndex: "tags",
        sorter: (a, b) => a.tags[0].localeCompare(b.tags[0]),
        sortDirections: ["descend", "ascend"],
        width: 120,
        filters: tagsEst.map((tag) => {
          return { text: tag, value: tag };
        }),
        filterMultiple: true,
        onFilter: (value, record) => record.tags[0].indexOf(value) === 0,
        render: (tags) => (
          <span>
            {tags.map((tag) => {
              let color = "";
              switch (tag) {
                case "Pendiente":
                  color = "red";
                  break;
                case "Asignado":
                  color = "blue";
                  break;
                case "En curso":
                  color = "cyan";
                  break;
                case "Completado":
                  color = "green";
                  break;
                default:
                  color = "volcano";
                  break;
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: "Acción",
        width: 100,
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
              <a
                disabled={editingKey !== ""}
                onClick={() => this.edit(record.key)}
              >
                Editar
              </a>
              <Divider type="vertical" />
              {this.state.dataSource.length >= 1 ? (
                <Popconfirm
                  title="¿Desea continuar?"
                  onConfirm={() => this.handleDelete(record.key)}
                >
                  <a href="#section">Eliminar</a>
                </Popconfirm>
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

  showConfirm = () => {
    confirm({
      closable: true,
      title: "Los siguientes registros se eliminarán permanentemente",
      content: "¿Desea continuar?",
      onOk() {},
      onCancel() {},
    });
  };

  handleDelete = (key) => {
    const { count, dataSource } = this.state;
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
      count: count - 1,
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      id: getRandom(16),
      local: `Talamanca de Jarama`,
      cod: getRandom(8),
      cont: getRandom(10),
      cp: codPos[Math.floor(Math.random() * codPos.length)],
      poblacion: getRandom(6),
      desPob: getRandom(6),
      tags: tagsEst[Math.floor(Math.random() * tagsEst.length)],
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  Save = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        cell: EditableCell,
      },
    };

    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          inputType: "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    const props = {
      bordered: true,
      pagination: {
        total: this.state.count,
        showTotal: (total) => `${total} resultados`,
        showSizeChanger: true,
        showQuickJumper: true,
      },
      footer: () => (
        <Row>
          <Col lg={15} />
          <Col>
            <Button type="default" onClick={this.showConfirm}>
              Eliminar seleccionados
            </Button>
            <Button type="primary" onClick={this.handleAdd}>
              Añadir nuevo registro
            </Button>
          </Col>
        </Row>
      ),
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
