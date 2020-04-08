/*eslint-env node*/

// MICROSERVICIOS
const auth = {
  getAuthToken:
    process.env.REACT_APP_ENDPOINT_OAUTH_ISAM + "/mga/sps/oauth/oauth20/",
  validarToken: process.env.REACT_APP_ENDPOINT_OAUTH + "/users",
  logoutISAM: process.env.REACT_APP_ENDPOINT_OAUTH_ISAM + "/pkmslogout",
};

const maestros = {
  getcp: process.env.REACT_APP_ENDPOINT_MAESTRO + "/helloworld",
};

module.exports = {
  auth,
  maestros,
};
