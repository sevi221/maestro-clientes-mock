const rolesWeb = [
  {
    rol: "DGT_PRE_US_ACCESO",
    accion: [
      {
        path: "/admision",
        sub: [
          { path: "/subMenuuno", sub: null },
          { path: "/subMenudos", sub: null },
          { path: "/subMenutres", sub: null }
        ]
      },
      {
        path: "/admin",
        sub: [{ path: "/subMenucuatro", sub: null }]
      },
      { path: "/avisos", sub: null },
      { path: "/MockSearch", sub: null },
      { path: "/fichacliente", sub: null },
      { path: "/fichacontactos", sub: null }
    ],
    label: "Administrador"
  },
  {
    rol: "DGT_PRE_US_OFICENTDIRE",
    accion: [{ path: "/admision", sub: null }],
    label: "Centro directivo"
  }
];
export default rolesWeb;
