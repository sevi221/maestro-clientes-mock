# fwk-correos-scripts

El presente documento explica las diferentes configuraciones y scripts que contiene y cómo desarrollar aplicaciones usando Create Correos App:

- [Principales Librerías](#principales-librerias)
- [La configuración de las variables de entorno](#La-configuracion-de-las-variables-de-entorno)
- [La configuración del despliegue con Maven](#La-configuracion-del-despliegue-con-Maven)
- [¿Cómo trabajar sin el ISAM ? (En el entorno local)](<#¿Cómo-trabajar-sin-el-ISAM-?-(En-el-entorno-local)>)
- [Scripts](#Scripts)
- [Testing](#Testing)
- [Estructura de la aplicación de ejemplo](#Estructura-de-la-aplicación-de-ejemplo)
- [Las URL's del ISAM habilitadas](#Las-URL's-del-ISAM-habilitadas)
- [Recomendaciones](#Recomendaciones)

# Principales Librerías

Las librerías para desarrollar son:

- [ant documentación](https://ant.design/docs/react/introduce)
- [ant 3.19.2](https://www.npmjs.com/package/antd)
- [axios documentación](https://github.com/axios/axios)
- [axios ^0.19.0](https://www.npmjs.com/package/axios)
- [ESLint documentación](https://eslint.org/)
- [ESLint Rules](https://eslint.org/docs/rules/#best-practices)
- [ESLint 5.16.0](https://www.npmjs.com/package/eslint/v/5.16.0)
- [react-router ](https://github.com/ReactTraining/react-router#readme)
- [react-router 5.0.1](https://www.npmjs.com/package/react-router)
- [Redux 4.0.1](https://github.com/reactjs/redux)
- [Redux documentación](https://es.redux.js.org/)
- [Jest 24.7.1](https://www.npmjs.com/package/jest)
- [Jest documentación](https://jestjs.io/docs/en/getting-started.html)
- [cpr 3.0.1](https://www.npmjs.com/package/cpr)
- [moment documentación](https://momentjs.com/)
- [moment 2.24.0](https://www.npmjs.com/package/moment)
- [BizCharts 3.5.5](https://www.npmjs.com/package/bizcharts)
- [BizCharts documentación](https://bizcharts.net/index)
- [mvn-deploy-file 1.0.1](https://www.npmjs.com/package/mvn-deploy-file)
- [npm-build-zip 1.0.2](https://www.npmjs.com/package/npm-build-zip)
- [jsonwebtoken 8.5.1](https://www.npmjs.com/package/jsonwebtoken)
- [jwt-decode 2.2.0](https://www.npmjs.com/package/jwt-decode)
- [serve ^11.3.0](https://www.npmjs.com/package/serve)

Por lo tanto, NO ES NECESARIO INSTALARLAS.

# La configuración de las variables de entorno

Se añade la configuración de las variables de entorno en los correspondientes ficheros asignados para ello:

- .env.dev (Desarrollo).
- .env.pro (Producción).
- .env.loc (Local).
- .env.pre (Preproducción).
- […] (tantos archivos como entornos).

Asi pues, en los [Scripts](#Scripts) del package.json se añanden las siguientes líneas (una por cada entorno _"creado"_):

- `"start_<entorno>": "cpr .env.<entorno> .env -o && react-scripts start"`.
- `"build_<entorno>": "cpr .env.<entorno> .env -o && react-scripts build"`.

# La configuración del despliegue con Maven

En el package.json del proyecto se encuentran las opciones de configuración:

```json
{
  "type_version": "release",
  "mvn-deploy-file": {
    "snapshot": {
      "groupId": "es.correos.fwk.prueba",
      "url": "https://ic.correos.es/nexus/repository/ARQ-Repositorio[...]-Snapshot",
      "repositoryId": "snapshots",
      "classifier": "static-files"
    },
    "release": {
      "groupId": "es.correos.fwk.prueba",
      "url": "https://ic.correos.es/nexus/repository/ARQ-Repositorio[...]-Release",
      "repositoryId": "releases",
      "classifier": "static-files"
    }
  }
}
```

Se tiene que cambiar la url correspondiente al repositorio de Nexus (tener en cuenta que **ic** es para **redes internas** e **icprov** es para **redes externas**), el groupId siguiendo la normativa vigente y el type version (release | snapshot) para poder ejecutar correctamente Maven.

# ¿Cómo trabajar sin el ISAM ? (En el entorno local)

En una doble terminal del VSCode:

1. En la parte izda, ejecutar primero el script _"mock_auth"_.
2. En la parte dcha, ejecutar después el script _"start_loc"_.

Consideraciones a realizar:

- Para cambiar el usuario se debe hacer manualmente en **./mock/auth/config/configauth.js**:

  1. Donde pone _"subject"_ cambiarlo por el usuario indicado:

     ```js
     const signOptions = {
       issuer: "https://pocisampre.correos.es",
       subject: "P016854",
       expiresIn: 60 * 60, //expires in 1 hour
       audience: "dgt",
       algorithm: "RS256", // RSASSA [ "RS256", "RS384", "RS512" ]
     };
     ```

  2. Reiniciar el swagger, es decir, ejecutar otra vez el script "mock_auth".

- Se debe poner el rsa_public del mock para el entorno local en el back (application-local.yaml).

# Scripts

```code
    start_<entorno>: 'cpr .env.<entorno> .env -o && react-scripts start',
    build_<entorno>: 'cpr .env.<entorno> .env -o && react-scripts build',
    start: 'react-scripts start',
    build: 'react-scripts build && npm run zip',
    test: 'react-scripts test',
    testCoverage: 'npm test -- --coverage',
    testCoverageHtml: 'serve -s coverage/lcov-report',
    testCoverageClean: 'rimraf ./coverage',
    mock: 'node ./mock/example/config/config.js',
    mockAuth: 'node ./mock/auth/config/configauth.js',
    cleanDist: 'rimraf ./build',
    preBuild: 'npm run cleanDist',
    server: 'serve -s build',
    lint: "eslint src/**/*.js",
    zip: "npm-build-zip",
    deploy_release: "mvn-deploy-file release *.zip",
    deploy_snapshot: "mvn-deploy-file snapshot *.zip"
```

`start_<entorno>`: Ejecuta la aplicación en el modo de desarrollo con las variables de entorno asignadas en el `.env.<entorno>` ejecutandose el `.env`, así como la recarga de módulos en caliente. La app la puedes ver en el navegador en la siguiente url: http:localhost:3000

`build_<entorno>`: Construye la aplicación, en el directorio build con las variables de entorno asignadas en el `.env.<entorno>` ejecutandose el `.env`. Realiza correctamente los bundles en modo producción, sin minified y ejecutar el script "zip".

`build`: Construye la aplicación, en el directorio build. Realiza correctament ls bundles en modo production, sin minified y ejecutar el script "zip".

`test`: Ejecuta los test que se encuentren en ./src/\*\* . Toda la información para configurar los [Testing](#Testing)

`test:coverage`: Ejecuta los test y muestra el coverage.

`test:testCoverageHtml`: Levanta un servidor node para mostrar los test en formato html.

`testCoverageClean`: Borra el directorio ./coverage.

`mock`: Levanta un servidor de mocks. Aquí podrás persistir tus datos.

`mockauth`: Levanta un servidor de mocks para mockear la parte de seguridad entornos locales.

`cleanDist`: Ejectura el script npm run cleanDist y elimina el directorio ./build.

`server`: Levanta el builden un servidor node.

`lint`: Ejecuta eslint en todo el proyecto.

`zip`: Crear el archivo .zip que contenga el directorio build.

`deploy_<perfil>`: Desplegar en Nexus el zip del directorio build con la ayuda de Maven, se puede desplegar según el modo descito en el config del deploy en el package.json.

# Testing

Jest buscará los archivos con la siguiente nomenclatura:

- .test.js
- .pect.js
- y en directorio **tests**

Estos archivos deben de estar en el directorio ./src/\*\*

# Estructura de la aplicación de ejemplo

La aplicación de ejemplo consta de las siguientes paginas, que se pueden elimimar y/o modificar si procede: **"Admin", "Admision", "Avisos", "Home" y los "SubMenu\*"** con sus respectivos ficheros sass.

Por otro lado, se tendrá que modificar los siguentes ficheros: **"./src/router/routes", "./src/router/rolesweb" y "./src/scss/\_theme.scss"**, respectivamente.

Por último, como anotación las imagenes se guardan en el directorio: **./public/images/**.

# Las URL's del ISAM habilitadas

las url’s de ISAM son:

- pre: https://pocisam.correospre.es
- pro: https://pocisam.correos.es
- desa: https://pocisam.correosdesa.es

# Recomendaciones

Para el desarrollo deberías de instalar las siguientes extensiones:

- [React Developer Tools](https://github.com/facebook/react-devtools#react-developer-tools-)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
