/*eslint-env node*/

const auth = {
  getAuthToken:
    process.env.REACT_APP_ENDPOINT_OAUTH_ISAM + "/mga/sps/oauth/oauth20/",
  validarToken: process.env.REACT_APP_ENDPOINT_OAUTH + "/users",
  logoutISAM: process.env.REACT_APP_ENDPOINT_OAUTH_ISAM + "/pkmslogout",
};

// MICROSERVICIOS COMPONENTES
const maestros = {
  getcp: process.env.REACT_APP_ENDPOINT_MAESTRO + "/helloworld",
  // AQUÍ PONER EL MICRO DE BUSCAR ID
  getDatos: process.env.REACT_APP_ENDPOINT_MAESTRO + "/client",
};

const datos = {
  getDatos: process.env.REACT_APP_ENDPOINT_MAESTRO + "/client",
};

module.exports = {
  auth,
  maestros,
  datos,
};
