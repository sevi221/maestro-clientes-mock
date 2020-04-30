export const store = {
  data: {
    loaded: 0,
    idTokenNoVal: "",
    urlOrigen: "",
    auth: {
      userInfo: {
        nombre: "",
        apellidos: "",
        codired: "",
        identificador: "",
        accionesWeb: [],
        rol: "",
      },
      token: "",
      propertiesAcWeb: [],
    },
    clienteId: "",
  },
  save: function () {
    sessionStorage.setItem("store.data", JSON.stringify(store.data));
  },
  load: function () {
    if (!store.data.loaded) {
      var data = sessionStorage.getItem("store.data");
      if (data) {
        store.data = JSON.parse(data);
        store.data.loaded = 1;
      }
    }
  },
};
