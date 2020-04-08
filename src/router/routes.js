import {
  MockSearch,
  Admin,
  FichaCliente,
  FichaContactos,
  Home,
  Admision,
  Avisos,
  SubMenuUno,
  SubMenuDos,
  SubMenuTres,
  SubMenuCuatro,
} from "../pages";

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
    path: "/MockSearch",
    component: MockSearch,
    label: "Maestro de Clientes",
  },
  {
    path: "/fichacliente",
    component: FichaCliente,
    label: "Maestro de Clientes - Ficha",
  },
  {
    path: "/fichacontactos",
    component: FichaContactos,
    label: "Maestro de Clientes - Ficha de Contactos y Comunicaciones",
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
