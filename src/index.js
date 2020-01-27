const express = require( "express" );
const bodyParser = require( "body-parser" );
var cookieParser = require('cookie-parser')
const config = require( "./config" );
const customResponses = require( "./middlewares/customResponses" );
const logger = require( "./utilities/logger" );
// swagger
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');
const app = express( );
const port = process.env.PORT || config.port;
const ENV = process.env.NODE_ENV || config.env;

app.set( "env", ENV );

app.use( bodyParser.json( ) );
app.use( customResponses );
app.use(cookieParser())
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
require( "./config/mongoose" )( app );
require( "./app" )( app );

// Extended: https://swagger.io/specification/#infoObject
// https://itnext.io/setting-up-swagger-in-a-node-js-application-d3c4d7aa56d4
// https://github.com/brian-childress/node-autogenerate-swagger-documentation/blob/master/app.js
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:1234"]
    }
  },
  // ['.routes/*.js']
  apis: ['./app']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use( ( req, res ) => {
    res.notFound( );
} );

app.use( ( err, req, res, next ) => {
    logger.error( err.stack );
    next( err );
} );

// Don't remove next !!!!
app.use( ( err, req, res, next ) => { // eslint-disable-line no-unused-vars
    res.status( 503 ).json( {
        success: false,
        error: "server_error",
    } );
} );

app.listen( port, ( ) => {
    logger.info( `Listening on port ${ port }` );
} );
