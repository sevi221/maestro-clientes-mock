import React, { Component } from "react";
import { Row, Col, Menu } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { store } from "../../../store/store";
import pathRoutes from "../../../router/routes";

class MHorizontal extends Component {
  constructor(props) {
    super(props);

    //se carga el store en el componente
    store.load();

    // se guarda en una variable localStorage para uso en PrivateRoute las rutas internas de la app, sin el index ("inicio")
    store.data.auth.propertiesAcWeb = [...new Set(pathRoutes.filter(items => items.label !== "Inicio").map(rutas => rutas.path))];

    //guardar los datos en el Store
    store.save();

    this.state = {
      auth: store.data.auth
    }
  }

  cambiarSubMenu = (key) => {
    // para pruebas --- key es un @param
    //let key = "/admision";
    //----------------------------------
    let newSubMenu = []
    // let migas = []
    let acciones = this.state.auth.userInfo.accionesWeb;
    // migas.push({ path: key, label: pathRoutes[key - 1].label })

    newSubMenu = acciones.filter(function (items) {
      return items.path === key;
    }).filter(function (items) {
      return items.sub !== null;
    }).map(items => items.sub)[0]

    //se carga el store en el componente
    store.load();

    //guardar los datos en el Store
    store.data.auth.userInfo.subMenu = newSubMenu;
    store.data.migasDePan = [];
    //store.data.migasDePan = migas;
    store.save();
  }

  render() {
    let acciones = this.state.auth.userInfo.accionesWeb;
    return (
      <div className="MHorizontal">
        <Row>
          <Col span={1} />
          <Col>
            <Menu mode="horizontal" theme="dark">
              {this.props.items !== undefined && this.props.items
                // filtrar por "sin Inicio" --> por el icono en la barra de herramientas
                .filter(function (items) {
                  return items.label !== "Inicio";
                })
                // filtrar por "acciones web" - metodo "includes" no soportado para IE
                .filter(function (items) {
                  return acciones.map(ac => ac.path).includes(items.path);
                })
                //mapear como menu items del nav los items resultantes del filtro
                //importante: el formato arrow function !¡
                .map(({ path, label }) => 
                  (<Menu.Item key={path} onClick={() => {
                    this.props.modificarMigasDePan(1,{path,label});
                    this.props.clickMenu && this.props.clickMenu();
                    this.props.clickHome(false);
                    this.cambiarSubMenu(path);
                        }}
                      className={(this.props.areWeHome) ? ("noBackgroundColor"):("")}>
                      <Link to={path} className={(this.props.areWeHome) ? ("noBackgroundColor"):("")}>{label}</Link>
                    </Menu.Item>
                  )
                     
                )}
            </Menu>
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}

MHorizontal.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MHorizontal;