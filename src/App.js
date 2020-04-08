/* eslint-disable */
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row, Col, Layout, Icon, Button, ConfigProvider } from "antd";
import Spanish from "antd/es/locale/es_ES";
import { Login } from "./pages";
import createHistory from "history/createBrowserHistory";

// Componentes Transversales
import {
  Header,
  MHorizontal,
  MLateral,
  BreadCrumb,
  PrivateRoute
} from "./components/shared";

import { store } from "./store/store";
import pathRoutes from "./router/routes";

// Declararación del Content del Layout de antd
const { Content } = Layout;

store.load();
class App extends Component {
  constructor(props) {
    super(props);
    require("dotenv").config();
    this.state = {
      showMenu: false,
      auth: store.data.auth,
      migasDePan: [pathRoutes[0]],
      areWeHome: true //Indica si se esta en "/" para renderizar un estilo u otro
    };
  }

  UNSAFE_componentWillMount = () => {
    if (window.location.hash !== "undefined") {
      let id_Token = window.location.hash;
      store.data.idTokenNoVal = id_Token;
    }
    if (window.location.pathname === "/login") {
      store.data.urlOrigen = "/";
    } else {
      store.data.urlOrigen = window.location.pathname;
    }
    store.save();

    // evita pantalla en blanco si hay algún error al recuperar el token
    if (
      store.data.auth.userInfo === undefined &&
      store.data.idTokenNoVal !== ""
    ) {
      while (window.location.pathname !== "/login") {
        const history = createHistory({ forceRefresh: false });
        history.push("/login");
      }
    }
  };

  /* *
   * Muestra el menú o lo oculta
   * según el estado rederizado al hacer click al botón
   * */
  clickMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  clickHome = key => {
    this.setState({ areWeHome: key });
  };

  modificarMigasDePan = (i, route) => {
    let migasDePan = [...this.state.migasDePan];
    migasDePan[i] = route;
    migasDePan = migasDePan.slice(0, i + 1);
    this.setState({ migasDePan });
  };

  render() {
    let menuLateral = "";
    let migasDePan = "";
    let menuPPal = "";
    if (this.state.auth.token === "" || window.location.pathname === "/login") {
      menuPPal = <div className="MHorizontal"></div>;
    } else {
      menuPPal = (
        <MHorizontal
          items={pathRoutes}
          clickMenu={this.state.showMenu && this.clickMenu}
          areWeHome={this.state.areWeHome}
          clickHome={this.clickHome}
          modificarMigasDePan={this.modificarMigasDePan}
        />
      );
      if (this.state.showMenu) {
        menuLateral = (
          <div>
            <Row>
              <Col span={22}></Col>
              <Col span={1}>
                <Button
                  size="small"
                  onClick={this.clickMenu}
                  className="btnMenu"
                >
                  <Icon type="menu" />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col lg={4} style={{ width: "auto" }}>
                <MLateral
                  items={pathRoutes}
                  subMnu={this.state.auth.userInfo.subMenu}
                  clickMenu={this.clickMenu}
                  modificarMigasDePan={this.modificarMigasDePan}
                />
              </Col>
            </Row>
          </div>
        );
        migasDePan = <BreadCrumb items={this.state.migasDePan} />;
      } else {
        menuLateral = (
          <Row>
            {/*
            <Col span={1}>
               Icono burger menu */}
            {/* <Button size="small" onClick={this.clickMenu} className="btnMenu">
                <Icon type="menu" /> 
              </Button> 
            </Col>*/}
            <Col lg={24}>
              <BreadCrumb items={this.state.migasDePan} />
            </Col>
          </Row>
        );
      }
    }
    return (
      <ConfigProvider locale={Spanish}>
        <Router>
          <div className="App">
            <Layout>
              <Header
                name="Maestro de Clientes"
                clickMenu={this.state.showMenu && this.clickMenu}
                clickHome={this.clickHome}
                modificarMigasDePan={this.modificarMigasDePan}
              />
              <Layout>{menuPPal}</Layout>
              <Layout>
                <Row>
                  <Col span={1} />
                  <Col lg={22}>
                    <Layout>
                      {menuLateral}
                      <Layout>
                        {migasDePan}
                        <Content>
                          <Switch>
                            {pathRoutes.map(({ component, path }) => (
                              <PrivateRoute
                                exact
                                key={path}
                                path={path}
                                component={component}
                                auth={this.state.auth}
                              />
                            ))}
                            <Route path="/Login" component={Login} />
                          </Switch>
                        </Content>
                      </Layout>
                    </Layout>
                  </Col>
                  <Col span={1} />
                </Row>
              </Layout>
            </Layout>
          </div>
        </Router>
      </ConfigProvider>
    );
  }
}

export default App;
