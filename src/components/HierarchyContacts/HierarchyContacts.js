import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Input, Menu, Tree } from "antd";
import "./HierarchyContacts.scss";

const { TreeNode } = Tree;
const { Search } = Input;

class HierarchyContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
  }

  render() {
    return (
      <div className="jerarquia">
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
                      Cliente Principal: BANCO BILBAO VIZCAYA ARGENTARIA, S. A.
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
      </div>
    );
  }
}
export default HierarchyContacts;
