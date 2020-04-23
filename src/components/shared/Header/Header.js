import React, { Component } from "react";
import { Row, Col, Icon, Dropdown, Tooltip } from "antd";
import PropTypes from "prop-types";
import MUser from "../MUser/MUser";
import LogoCorreos from "../../../../public/images/LogoCorreos2019_Azul.svg";
import { store } from "../../../store/store";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    store.load();
    require("dotenv").config();
  }

  render() {
    /*si estas autenticado aparecerá el menu usuario con sus respectivos datos
    en caso negativo, no aparecerá nada. */
    const altProp = "Logo Correos";
    let AuthButton;
    if (store.data.auth.token !== "") {
      AuthButton = (
        <Dropdown overlay={<MUser />}>
          <Icon type="user" />
        </Dropdown>
      );
    } else {
      AuthButton = <Icon type="user" />;
    }

    /*Logo y nombre de aplicacion (this.props.name)
    + barra de herramientas (notif, home y ayuda)
    + dropdown auto --> MUser, responsive con el sistema Grid*/

    return (
      <div className="header">
        <Row>
          <Col span={1} />
          <Col md={9} lg={7} xl={6} xxl={5}>
            <img src={LogoCorreos} alt={altProp} />
            <h1>{this.props.name}</h1>
          </Col>
          <Col md={8} lg={12} xl={14} xxl={15} />
          <Col md={5} lg={4} xl={3} xxl={3} align="right">
            <div className="icons">
              {/* <Icon type="bell" /> */}
              <Tooltip placement="bottom" title="Navegar a Inicio">
                <Link
                  to="/"
                  onClick={() => {
                    this.props.modificarMigasDePan(0, {
                      path: "/",
                      label: "Inicio",
                    });
                    this.props.clickMenu && this.props.clickMenu();
                    this.props.clickHome(true);
                    store.load();
                    store.data.auth.userInfo.subMenu = [];
                    store.save();
                  }}
                >
                  <Icon type="home" />
                </Link>
              </Tooltip>
              <Icon type="question-circle" />
              {AuthButton}
            </div>
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
