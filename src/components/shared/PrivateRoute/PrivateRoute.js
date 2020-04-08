import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from '../../../store/store';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    store.load();
    let check = true;
    // recoge las properties declaradas en MHorizontal.js
    let propertiesAcWeb = store.data.auth.propertiesAcWeb;

    // Para usuarios ya autenticados || Para usuarios en login
    let acciones = [...new Set(store.data.auth.userInfo.accionesWeb.map(ac => ac.path))] ||
        [...new Set(auth.userInfo.accionesWeb.map(ac => ac.path))]

    function buscarSubMenu(key) {
        let newSubMenu = []
        // Para usuarios ya autenticados || Para usuarios en login
        let ac = [...new Set(store.data.auth.userInfo.accionesWeb.map(ac => ac))] || 
            [...new Set(auth.userInfo.accionesWeb.map(ac => ac))]

        //Para buscar los submenus permitidos
        newSubMenu = ac.filter(function (items) {
            return items.path === key;
        }).filter(function (items) {
            return items.sub !== null;
        }).map(items => items.sub)[0]

        return newSubMenu
    }

    //incluir los submenus
    acciones.map(function (ac) {
        let aux = buscarSubMenu(ac);
        if (aux !== undefined) {
            return acciones.push.apply(acciones,aux.map(sub => sub.path));
        } else {
            return acciones;
        }
    })

    if (propertiesAcWeb.includes(rest.path)) {
        check = (acciones.includes(rest.path));
        // esta condición (sólo aplicable si la url está en properties) comprueba que la url está en sus accionesWeb
        // true por defecto para el resto puesto que son pantallas que dependen en las anteriores de menú
    }
    return <Route {...rest} render={props => (
        auth.token && check === true //comprueba que haya token + la url a la que intente acceder esté en su token (redundante)
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
}

export default PrivateRoute;