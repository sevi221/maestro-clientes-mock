import React, { Component } from "react";
import { Menu, Layout } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { store } from "../../../store/store";

//const { SubMenu } = Menu;
const { Sider } = Layout;

class MLateral extends Component {
  /*El proposito de este menu es estar sincronizado con el menu horizontal,
  puesto que representan a partir del 2 nivel de nav, es decir, con el primer subnivel
  en colaboración con la page abierta actualmente*/
  constructor(props) {
    super(props);

    if (this.props.subMnu === undefined || this.props.subMnu.length===0) this.props.clickMenu();

    //se carga el store en el componente
    store.load();

    this.state = {
      auth: store.data.auth
    }
  }

  render() {
    let subMnu = this.props.subMnu || [];
    return (
      <div className="Menu">
        <Sider>
          <Menu mode="inline" theme="light">
            {this.props.items
              // filtrar por "this.props.subMnu = acciones web sub-menu" - metodo "includes" no soportado para IE
              .filter(function (items) {
                return subMnu.map(ac => ac.path).includes(items.path);
              })
              //mapear como menu items del nav los items resultantes del filtro
              .map(({ path, label }) => (
                <Menu.Item key={path} onClick={() => this.props.modificarMigasDePan(2,{path,label})}>
                  <Link to={path}>{label}</Link>
                </Menu.Item>
              ))}
          </Menu>
        </Sider>
      </div>
    );
  }
}

MLateral.propTypes = {
  subMnu: PropTypes.array,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MLateral;
