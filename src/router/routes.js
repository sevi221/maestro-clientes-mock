import {
  FichaCliente,
  FichaContactos,
  Home,
  Admin,
  Admision,
  // Avisos,
  // SubMenuUno,
  // SubMenuDos,
  // SubMenuTres,
  // SubMenuCuatro,
} from "../pages";
import FichaCliente1 from "../pages/Mock/FichaCliente1";
import FichaCliente2 from "../pages/Mock/FichaCliente2";
import FichaCliente3 from "../pages/Mock/FichaCliente3";
import FichaCliente4 from "../pages/Mock/FichaCliente4";
import ContactosComunicaciones from "../pages/ContactosComunicaciones/ContactosComunicaciones";
import ContactosDatos from "../pages/ContactosComunicaciones/ContactosDatos";

import PruebasJerarquia from "../pages/PruebasJerarquia/PruebasJerarquia";
//MOCK

const pathRoutes = [
  {
    path: "/",
    component: Home,
    label: "Inicio",
  },
  {
    path: "/admision",
    component: Admision,
    label: "Admisión",
  },
  {
    path: "/fichacliente1",
    component: FichaCliente1,
    label: "Maestro de Clientes - Ficha",
  },
  {
    path: "/contactoscomunicaciones",
    component: ContactosComunicaciones,
    label: "Maestro de Clientes - Ficha de Contactos y Comunicaciones",
  },

  // MOCK
  {
    path: "/fichacliente1",
    component: FichaCliente1,
    label: " ",
  },
  {
    path: "/fichacliente2",
    component: FichaCliente2,
    label: " ",
  },
  {
    path: "/fichacliente3",
    component: FichaCliente3,
    label: " ",
  },
  {
    path: "/fichacliente4",
    component: FichaCliente4,
    label: " ",
  },
  {
    path: "/contactoscomunicaciones",
    component: ContactosComunicaciones,
    label: " ",
  },
  {
    path: "/contactosdatos",
    component: ContactosDatos,
    label: " ",
  },
  {
    path: "/pruebasjerarquia",
    component: PruebasJerarquia,
    label: "Reglas de administración",
  },
  // Menú NAV para dirigir directamente a las páginas

  {
    path: "/admin",
    component: Admin,
    label: "Reglas de administración",
  },
  // {
  //   path: "/avisos",
  //   component: Avisos,
  //   label: "Avisos"
  // },
  // {
  //   path: "/subMenuuno",
  //   component: SubMenuUno,
  //   label: "SubMenu 1"
  // },
  // {
  //   path: "/subMenudos",
  //   component: SubMenuDos,
  //   label: "SubMenu 2"
  // },
  // {
  //   path: "/subMenutres",
  //   component: SubMenuTres,
  //   label: "SubMenu 3"
  // },
  // {
  //   path: "/subMenucuatro",
  //   component: SubMenuCuatro,
  //   label: "SubMenu 4"
  // }
];

export default pathRoutes;
