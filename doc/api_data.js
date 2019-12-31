define({ "api": [
  {
    "group": "Article",
    "type": "delete",
    "url": "/:id",
    "title": "Deleting an existing article.",
    "version": "0.0.0",
    "filename": "src/app/articles/router.js",
    "groupTitle": "Article",
    "name": "DeleteId"
  },
  {
    "group": "Article",
    "type": "get",
    "url": "/",
    "title": "Displaying the list with existing articles.",
    "version": "0.0.0",
    "filename": "src/app/articles/router.js",
    "groupTitle": "Article",
    "name": "Get"
  },
  {
    "group": "Article",
    "type": "get",
    "url": "/:id",
    "title": "Displaying details of an existing article.",
    "version": "0.0.0",
    "filename": "src/app/articles/router.js",
    "groupTitle": "Article",
    "name": "GetId"
  },
  {
    "group": "Article",
    "type": "post",
    "url": "/",
    "title": "Creating new article.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article's title is required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>The article's body is required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorId",
            "description": "<p>The article's author ID is required.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example response:",
        "content": " {\n   \"article\": {\n      \"title\": \"Tech stuff\",\n      \"body\": \"This is the body of the article\",\n      \"authorId\": \"123\"\n     }\n}",
        "type": "response"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/articles/router.js",
    "groupTitle": "Article",
    "name": "Post"
  },
  {
    "group": "Article",
    "type": "put",
    "url": "/:id",
    "title": "Updating an existing article.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article's title can be changed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>The article's body can be changed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/articles/router.js",
    "groupTitle": "Article",
    "name": "PutId"
  },
  {
    "group": "User",
    "type": "delete",
    "url": "/delete",
    "title": "Delete an user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User ID required.</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Example header",
          "content": "{\n    id:123456789\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/app/users/router.js",
    "groupTitle": "User",
    "name": "DeleteDelete"
  },
  {
    "group": "User",
    "type": "post",
    "url": "/registration",
    "title": "Adding an user to the db.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User ID required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Mandatory age. Minimum 18.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>Mandatory sex.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example response:",
        "content": " {\n   \"user\": {\n      \"id\": 123456789,\n      \"username\": \"user123\"\n      \"password\": \"pass123\"\n      \"name\": \"Ana\",\n      \"sex\": \"female\",\n      \"age\": 30\n     }\n}",
        "type": "response"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/users/router.js",
    "groupTitle": "User",
    "name": "PostRegistration"
  },
  {
    "group": "User",
    "type": "post",
    "url": "/session",
    "title": "User login route.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password required.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example response:",
        "content": " {\n   \"user\": {\n      \"token\": dahljkhajfhajku32974eq9kjh\n     }\n}",
        "type": "response"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/session/router.js",
    "groupTitle": "User",
    "name": "PostSession"
  },
  {
    "group": "User",
    "type": "put",
    "url": "/edit",
    "title": "Edit the profile and filtering options.",
    "description": "<p>Useful to change profile information</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User ID required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Mandatory age. Minimum 18.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>Mandatory sex.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/users/router.js",
    "groupTitle": "User",
    "name": "PutEdit"
  }
] });
