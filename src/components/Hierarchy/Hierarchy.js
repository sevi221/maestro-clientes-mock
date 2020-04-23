import React, { Component } from "react";
import "react-simple-tree-menu/dist/main.css";
import { Button, Icon, Input, List, Menu, TreeSelect } from "antd";
import "./Hierarchy.scss";

import TreeView from "devextreme-react/tree-view";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import axios from "axios";
const { SubMenu } = Menu;

const urlMock =
  "https://virtserver.swaggerhub.com/jrojsanc/ficha-cliente/1.0/interlocutor/1/jerarquia";

const treeData = [
  {
    id: "1",
    text: "Jerarquía del Cliente",
    expanded: true,
    items: [
      {
        id: "1_1",
        text: "BANCO BILBAO VIZCAYA ARGENTARIA, S. A.",
        expanded: true,
        items: [
          {
            id: "1_1_1",
            text: "BBVA CONTROL PRESUPUESTARIO. BANCO",
            items: [
              {
                id: "1_1_1_1",
                text: "UNO-E TARJETAS PRIVADAS",
                price: 220,
                items: [
                  {
                    id: "1_1_1_1_2",
                    text: "CLIENTE DETALLABLE",
                    price: 220,
                  },
                  {
                    id: "1_1_1_1_3",
                    text: "CLIENTE DETALLABLE",
                    price: 270,
                  },
                ],
              },
              {
                id: "1_1_1_2",
                text: "BBVA FACTORING",
                price: 220,
                items: [
                  {
                    id: "1_1_1_2_2",
                    text: "CLIENTE DETALLABLE",
                    price: 220,
                  },
                  {
                    id: "1_1_1_2_3",
                    text: "CLIENTE DETALLABLE",
                    price: 270,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

class Hierarchy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDiv: false,
      value: "contains",
    };
    this.valueChanged = this.valueChanged.bind(this);
  }

  render() {
    const { showDiv } = this.state;
    return (
      <React.Fragment>
        <Button
          type="primary"
          onClick={() => this.setState({ showDiv: !showDiv })}
        >
          <Icon type="apartment" />
          {/* {showDiv ? <Icon type="apartment" /> : <Icon type="apartment" />} */}
        </Button>
        {showDiv && (
          <div className="hierarchy">
            <Menu mode="inline" theme="light">
              <TreeView
                expandAll={true}
                id="treeview"
                items={treeData}
                searchMode={this.state.value}
                searchEnabled={true}
              />
            </Menu>
          </div>
        )}
      </React.Fragment>
    );
  }
  valueChanged(e) {
    this.setState({ value: e.value });
  }
}

export default Hierarchy;

// class Hierarchy extends Component {
//   state = {
//     principal: [],
//     collapsed: true,
//     status: null,
//   };

//   toggleCollapsed = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };

//   UNSAFE_componentWillMount() {
//     this.getPrincipal();
//   }

//   getPrincipal() {
//     axios.get(urlMock).then((res) => {
//       console.log(res.data.principal);
//       this.setState({
//         principal: res.data.principal,
//         status: "success",
//       });
//       console.log(this.state);
//     });
//   }
//   render() {
//     return (
//       <div className="hierarchy" style={{ width: 220 }}>
//         <Button
//           type="primary"
//           onClick={this.toggleCollapsed}
//           style={{ marginBottom: 16 }}
//         >
//           <Icon type="apartment" />
//         </Button>
//         <Menu
//           mode="inline"
//           theme="light"
//           inlineCollapsed={this.state.collapsed}
//         >
//           <SubMenu
//             key="sub1"
//             title={
//               <span>
//                 <Icon type="trophy" />
//                 <span>
//                   <a href="/fichacliente1">
//                     Cliente Principal:{" "}
//                     {this.state.principal.nombreClientePrincipal}
//                   </a>
//                 </span>
//               </span>
//             }
//           ></SubMenu>
//           <SubMenu
//             key="sub2"
//             title={
//               <span>
//                 <Icon type="user" />
//                 <span>
//                   {" "}
//                   <a href="/fichacliente2">
//                     Cliente Contratante:
//                     {/* {this.state.comerciales.nombreClientePrincipal} */}
//                     BBVA Control Presupuestario Banco
//                   </a>
//                 </span>
//               </span>
//             }
//           ></SubMenu>
//           <SubMenu
//             key="sub3"
//             title={
//               <span>
//                 <Icon type="user" />
//                 <span>
//                   {" "}
//                   <a href="/fichacliente3">
//                     Cliente Facturable: UNO-E Tarjetas Privadas
//                   </a>
//                 </span>
//               </span>
//             }
//           ></SubMenu>
//           <SubMenu
//             key="sub3"
//             title={
//               <span>
//                 <Icon type="user" />
//                 <span>
//                   {" "}
//                   <a href="/fichacliente4">
//                     Cliente Facturable: BBVA Factoring
//                   </a>
//                 </span>
//               </span>
//             }
//           ></SubMenu>
//           <SubMenu
//             key="sub3"
//             title={
//               <span>
//                 <Icon type="user" />
//                 <span> Cliente Detallable: (No tiene)</span>
//               </span>
//             }
//           ></SubMenu>
//         </Menu>
//       </div>
//     );
//   }
// }
// export default Hierarchy;

// class Hierarchy extends React.Component {
//   state = {
//     value: undefined,
//   };

//   onChange = (value) => {
//     console.log(value);
//     this.setState({ value });
//   };

//   render() {
//     return (
//       <TreeSelect
//         style={{ width: "100%" }}
//         value={this.state.value}
//         dropdownStyle={{ maxHeight: 500, overflow: "auto" }}
//         treeData={treeData}
//         placeholder="Jerarquía del Cliente"
//         draggable
//         treeDefaultExpandAll
//         onChange={this.onChange}
//       ></TreeSelect>
//     );
//   }
// }

// export default Hierarchy;
