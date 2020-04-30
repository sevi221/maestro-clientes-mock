import React, { Component } from "react";
import createHistory from "history/createBrowserHistory";
import { Button } from "antd";
import { store } from "../../store/store";
import { auth } from "../../Api/ApiUrl";
import rolesWeb from "../../router/rolesweb";
import uuidv4 from "uuid/v4";
import decode from "jwt-decode";

class Login extends Component {
  capturarToken() {
    try {
      let search = store.data.idTokenNoVal;
      let pares = search.slice(1).split("#");
      let params = {};

      pares.map((par) => {
        // eslint-disable-line array-callback-return
        let [id, tokenISAM] = par.split("&")[0].split("="); // id_token : token
        let [estado, cod] = par.split("&")[1].split("=");
        params[id] = decodeURIComponent(tokenISAM);
        params[estado] = cod;
      });

      // Guardar el token valido en el store
      let idToken = params["id_token"];
      store.data.auth.token = idToken;
      store.save();

      // decodificar el token - sacar la info (paso como parametro la respuesta [infoEncoded])
      this.decodeToken(store.data.auth.token);

      //  Redirigir al usuario a la urlOrigen guardada en el store
      const history = createHistory({ forceRefresh: true });
      let url = this.urlDestino("token");
      // if (store.data.idTokenNoVal !== '' && url.includes(store.data.idTokenNoVal)) url = url.substring(0, url.indexOf('#'));
      history.push(url);
    } catch (error) {
      // tratando de evitar el error de que entre sin permisos y vacíos - vacía todo y manda al login
      console.log("error.login: ", error);
      store.data.auth = {};
      store.data.idTokenNoVal = "";
      store.save();
      alert(
        "El token no es válido o ha expirado. Por favor, vuelva a iniciar sesión."
      );
    }
  }

  urlDestino(path) {
    let urlDestino =
      (path !== undefined && path !== "token"
        ? process.env.REACT_APP_ENDPOINT_WEB
        : "") + store.data.urlOrigen;
    return urlDestino;
  }

  UNSAFE_componentWillMount() {
    /* // FLUJOS //
		flujo 1: si hay token en la url, procesa ese token y le da todos los permisos.
		flujo 2: si no lo hay, se redirige al ISAM de vuelta deberá tener ese token y seguirá el flujo 1. */

    if (store.data.idTokenNoVal !== "") {
      this.capturarToken();
    } else {
      this.login();
    }
  }

  // función que loggea al usuario llamando al ISAM
  login() {
    // en este caso, no hay token en la url y al dar al botón redirigira y luego
    // vuelve a la página para procesar la info - se ve el botón un segundo
    try {
      let urlDestino = this.urlDestino("");

      let url =
        auth.getAuthToken +
        "authorize?" +
        "response_type=id_token" +
        "&scope=openid" +
        "&client_id=" +
        process.env.REACT_APP_CLIENT_ID +
        "&client_secret=" +
        process.env.REACT_APP_CLIENT_SECRET +
        "&redirect_uri=" +
        encodeURIComponent(urlDestino) +
        "&state=" +
        uuidv4() +
        "&nonce=" +
        uuidv4();

      window.location.href = url;
      // window.location = url;
    } catch (error) {
      console.log("error.llamadaISAM", error);
    }
  }

  decodeToken(infoEncoded) {
    // decodificamos el token jwt
    const info = decode(infoEncoded);

    //setear las necesarias de forma manual - se guardan en la variable de sesión store
    store.data.auth.userInfo.nombre = info.nombre;
    store.data.auth.userInfo.apellidos = info.apellidos;
    store.data.auth.userInfo.codired = info.codired;
    store.data.auth.userInfo.identificador = info.UC;

    //matchear el rol con lo devuelto en json - metodo "includes" no soportado para IE
    const accionesWeb = rolesWeb.filter(function (items) {
      return info.roles.includes(items.rol);
    });

    store.data.auth.userInfo.accionesWeb = [
      ...new Set(accionesWeb.map((ac) => ac.accion)[0]),
    ];
    store.data.auth.userInfo.rol = [
      ...new Set(accionesWeb.map((ac) => ac.label)),
    ];

    //guardar los datos en el Store
    store.save();

    //comprobamos el estado del auth - solo para el desarrollo, prohibido en "pro"
    // console.log('[LOGIN] store.auth', store.data.auth);
  }

  render() {
    const token = store.data.idTokenNoVal;
    let botonLogin;
    if (token === "") {
      botonLogin = (
        <div style={{ position: "relative", top: "1.786em" }}>
          <Button variant="contained" color="primary" onClick={this.login}>
            Login
          </Button>
        </div>
      );
    } else {
      botonLogin = "";
    }

    return <div>{botonLogin}</div>;
  }
}

export default Login;
