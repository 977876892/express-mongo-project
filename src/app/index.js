const usersRouter = require( "./users/router" );
const articlesRouter = require( "./articles/router" );
const sessionRouter = require( "./session/router" );
const validateToken = require( "../middlewares/validateToken" );
var blogsRouter = require('./blogs/router');

module.exports = ( app ) => {
    app.use( "/session", sessionRouter );
    app.use( "/users", usersRouter );
    app.use( "/articles", articlesRouter );
    app.use( "/blogs", blogsRouter );
};
