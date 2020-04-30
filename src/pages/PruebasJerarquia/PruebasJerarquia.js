import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Input, Menu, Tree, Tooltip } from "antd";
import "./PruebasJerarquia.scss";

const { TreeNode } = Tree;
const { Search } = Input;

class PruebasJerarquia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      showDiv: false,
      // data: treeData,
    };
  }

  render() {
    const { showDiv } = this.state;
    return (
      <div className="jerarquia">
        <Tooltip title="Jerarquía del cliente">
          <Button
            type="primary"
            onClick={() => this.setState({ showDiv: !showDiv })}
          >
            <Icon type="apartment" />
          </Button>
        </Tooltip>
        <Tooltip title="Descargar PDF">
          <Link to="../../../public/pdf/test.pdf" target="_blank" download>
            <Button type="primary">PDF</Button>
          </Link>
        </Tooltip>
        {showDiv && (
          <div className="jerarquia-body">
            <Menu mode="inline" theme="light">
              <Search
                className="jerarquia-buscar"
                placeholder="Buscar en la jerarquía"
                style={{ width: "300px" }}
                onSearch={(value) => console.log(value)}
                enterButton
              />
              <Tree
                showLine
                showIcon
                defaultExpandedKeys={[
                  "0-0-0",
                  "0-0-1",
                  "0-0-2",
                  "0-0-2-0",
                  "0-0-3",
                  "0-0-3-0",
                ]}
              >
                <TreeNode
                  icon={<Icon type="apartment" />}
                  title="Jerarquía del cliente"
                  key="0-0"
                >
                  <TreeNode
                    icon={<Icon type="trophy" />}
                    title={
                      <Link to={"/fichacliente1"}>
                        Cliente Principal: BANCO BILBAO VIZCAYA ARGENTARIA, S.
                        A.
                      </Link>
                    }
                    key="0-0-0"
                  ></TreeNode>

                  <TreeNode
                    icon={<Icon type="user" />}
                    title={
                      <Link to={"/fichacliente2"}>
                        Cliente Contratante: BBVA CONTROL PRESUPUESTARIO. BANCO
                      </Link>
                    }
                    key="0-0-1"
                  ></TreeNode>
                  <TreeNode
                    icon={<Icon type="user" />}
                    title={
                      <Link to={"/fichacliente3"}>
                        Cliente Facturable: UNO-E Tarjetas Privadas
                      </Link>
                    }
                    key="0-0-2"
                  >
                    <TreeNode
                      icon={<Icon type="user" />}
                      title="Cliente Detallable: (no tiene)"
                      key="0-0-2-0"
                    />
                  </TreeNode>
                  <TreeNode
                    icon={<Icon type="user" />}
                    title={
                      <Link to={"/fichacliente4"}>
                        Cliente Facturable: BBVA Factoring
                      </Link>
                    }
                    key="0-0-3"
                  >
                    <TreeNode
                      icon={<Icon type="user" />}
                      title="Cliente Detallable: (no tiene)"
                      key="0-0-3-0"
                    />
                  </TreeNode>
                </TreeNode>
              </Tree>
            </Menu>
          </div>
        )}
      </div>
    );
  }
}
export default PruebasJerarquia;
