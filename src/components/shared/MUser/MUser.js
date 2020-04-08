import React from "react";
import { store } from "../../../store/store";
import { Menu, Icon } from "antd";
import createHistory from "history/createBrowserHistory";
import moment from "moment";
import "moment/locale/es";
import { auth } from "../../../Api/ApiUrl";
import instance from "../../../Api/Instance";

class MUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  //función para cerrar sesion: borrar la cookie de la persistencia del store y cierra sesión en el ISAM
  handleUrlLogin = () => {
    sessionStorage.removeItem("store.data");
    instance
      .post(auth.logoutISAM)
      .then(res => {
        //console.log("Logout ISAM");
        this.setState({ redirect: true }, () => window.location.refresh(true));
      })
      .catch(error => {
        console.log("error.logout: ", error);
        // que redirija de todas formas
        this.setState({ redirect: true }, () => window.location.refresh(true));
      });
  };

  //Coger fecha y hora del sistema actual
  getDate = () => {
    setInterval(function() {
      document.getElementById("hora").innerText = moment()
        .locale("es")
        .format("dddd, DD/MM/YYYY HH:mm:ss");
    }, 1000);
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      const history = createHistory({ forceRefresh: true });
      return history.push("/login");
    }
    return (
      <div className="MUser" onLoad={this.getDate()}>
        <Menu>
          <Menu.Item key="1" className="datos">
            <h4>{store.data.auth.userInfo.identificador}</h4>
            <p id="hora"></p>
            <p>{store.data.auth.userInfo.codired}</p>
            <p>
              {store.data.auth.userInfo.nombre}{" "}
              {store.data.auth.userInfo.apellidos}
            </p>
            <p>{store.data.auth.userInfo.rol}</p>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="2" onClick={this.handleUrlLogin} className="botones">
            <Icon type="team" color="secondary" className="iconoAuth" />
            Cambiar de Usuario
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3" onClick={this.handleUrlLogin} className="botones">
            <Icon type="logout" color="secondary" className="iconoAuth" />
            Cerrar sesión
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default MUser;
