const controller = require("./controller");

const express = require("express");

const router = express.Router();

// use apiDoc to generate documentation for API routes
// Details on how to use on: http://apidocjs.com/
// install apidoc globally: npm install apidoc -g
// Generate documentation: apidoc -i src/ -o apidoc/

/**
*    @apiGroup Article
*    @api {post} / Creating new article.
*    @apiParam {String} title  The article's title is required.
*    @apiParam {String} body  The article's body is required.
*    @apiParam {String} authorId  The article's author ID is required.
*    @apiExample {response} Example response:
*       {
*         "article": {
*            "title": "Tech stuff",
*            "body": "This is the body of the article",
*            "authorId": "123"
*           }
*      }
*/
router.post("/create", controller.create);

/**
*    @apiGroup Article
*    @api {put} /:id Updating an existing article.
*    @apiParam {String} title  The article's title can be changed.
*    @apiParam {String} body  The article's body can be changed.
*/
router.put("/update/:id", controller.update);

/**
*    @apiGroup Article
*    @api {delete} /:id Deleting an existing article.
*/
router.delete("/remove/:id", controller.delete);

/**
*    @apiGroup Article
*    @api {get} / Displaying the list with existing articles.
*/
router.get("/list", controller.list);

/**
*    @apiGroup Article
*    @api {get} /:id Displaying details of an existing article.
*/

router.delete("/deletemany/:id", controller.deletemany);

router.put('/findandupdate/:id', controller.findOneAndUpdate);
router.put('/updatemany/:id', controller.updatemany);
router.get('/customapi/:district', controller.customapi);
router.get("/detail/:id", controller.detail);
router.get("/test", controller.test);
router.get("/aggregate", controller.aggregatefun);
router.put('/updatetitle/:id', controller.updatetitle);
router.get('/dummyJson', controller.dummyJson);
router.get('/projection', controller.projection);
router.get('/paginate/:page', controller.pagination);
router.get('/globalsearch/:search', controller.search);

module.exports = router;
