"use strict";

const util = require("util");
const path = require("path");
const express = require("express");
const swagger = require("swagger-express-middleware");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const uuidv4 = require("uuid/v4");
const Middleware = swagger.Middleware;

let app = express();
let middleware = new Middleware(app);

//Crear el token que se va a enviar
/** Información acerca de los Roles:
 * - Los roles se definen en el LDAP, un rol conlleva un único menú en base a la arquitectura clave-valor.
 * - El atributo "roles" esta relacionado con los grupos del LDAP.
 * - La relación del rol con los menús, esta se define en el archivo “rolesweb.js”,
 *   para más información hay un readme.md en el directorio src/routes del boiler.
 */
const privateKey = fs.readFileSync(
  path.join(__dirname, "../key/rsa_private.key"),
  "utf8"
);
const payload = {
  nonce: uuidv4(),
  nombre: "DGT",
  apellidos: "USUARIO PRUEBAS FUNCIONAL",
  codired: "2800010",
  UC: "P016854",
  roles: "DGT_PRE_US_ACCESO",
  iat: Math.round(new Date().getTime() / 1000), //Fecha y hora actual en formato epoch
};

const signOptions = {
  issuer: "https://pocisampre.correos.es",
  subject: "P016854",
  expiresIn: 60 * 60, //expires in 1 hour
  audience: "dgt",
  algorithm: "RS256", // RSASSA [ "RS256", "RS384", "RS512" ]
};
const token = jwt.sign(payload, privateKey, signOptions);

// Initialize Swagger Express Middleware with our Swagger file
let swaggerFile = path.join(__dirname, "../base/MockAuth.yaml");
middleware.init(swaggerFile, (err) => {
  app.use(middleware.metadata());
  app.use(middleware.files());
  app.use(middleware.parseRequest());

  // These two middleware don't have any options (yet)
  app.use(middleware.CORS(), middleware.validateRequest());

  // Add custom middleware
  app.get("/mga/sps/oauth/oauth20/authorize", (req, res, next) => {
    //console.log("hola desde el middleware");
    res.redirect(
      "http://localhost:3000/#id_token=" + token + "&state=" + uuidv4()
    );
    //console.log(token);
    next();
  });

  // Add custom middleware
  app.get("/helloworld", (req, res, next) => {
    //console.log("hola desde el middleware");
    res.send("hola mundo !");
    //console.log(token);
    next();
  });

  // Add custom middleware
  app.get("/hellolaura", (req, res, next) => {
    //console.log("hola desde el middleware");
    res.send("Hola ficha de cliente");
    //console.log(token);
    next();
  });

  // The mock middleware will use our custom data store,
  // which we already pre-populated with mock data
  app.use(middleware.mock());

  // Add a custom error handler that returns errors as HTML
  app.use((err, req, res, next) => {
    res.status(err.status);
    res.type("html");
    res.send(
      util.format(
        "<html><body><h1>%d Error!</h1><p>%s</p></body></html>",
        err.status,
        err.message
      )
    );
  });

  app.listen(8000, () => {
    console.log("The Swagger is now running at http://localhost:8000");
  });
});
