const request = require('supertest');
const {assert} = require('chai');

var chai = require('chai');
chai.use(require('chai-json-schema'));

describe('API Test for "reqres-in"', () => {
    it('Test - GET ALL Objects',async () => {
        const response = await request("https://reqres.in/api")
        .get("/users?page=2")
        console.log(response.statusCode);
    //assertions
    assert.equal(response.statusCode, 200);

    const jsonSchema = {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "type": "object",
      "properties": {
        "page": {
          "type": "integer"
        },
        "per_page": {
          "type": "integer"
        },
        "total": {
          "type": "integer"
        },
        "total_pages": {
          "type": "integer"
        },
        "data": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "email": {
                  "type": "string"
                },
                "first_name": {
                  "type": "string"
                },
                "last_name": {
                  "type": "string"
                },
                "avatar": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "email",
                "first_name",
                "last_name",
                "avatar"
              ]
            },
            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "email": {
                  "type": "string"
                },
                "first_name": {
                  "type": "string"
                },
                "last_name": {
                  "type": "string"
                },
                "avatar": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "email",
                "first_name",
                "last_name",
                "avatar"
              ]
            },
            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "email": {
                  "type": "string"
                },
                "first_name": {
                  "type": "string"
                },
                "last_name": {
                  "type": "string"
                },
                "avatar": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "email",
                "first_name",
                "last_name",
                "avatar"
              ]
            },
            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "email": {
                  "type": "string"
                },
                "first_name": {
                  "type": "string"
                },
                "last_name": {
                  "type": "string"
                },
                "avatar": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "email",
                "first_name",
                "last_name",
                "avatar"
              ]
            },
            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "email": {
                  "type": "string"
                },
                "first_name": {
                  "type": "string"
                },
                "last_name": {
                  "type": "string"
                },
                "avatar": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "email",
                "first_name",
                "last_name",
                "avatar"
              ]
            },
            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "email": {
                  "type": "string"
                },
                "first_name": {
                  "type": "string"
                },
                "last_name": {
                  "type": "string"
                },
                "avatar": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "email",
                "first_name",
                "last_name",
                "avatar"
              ]
            }
          ]
        },
        "support": {
          "type": "object",
          "properties": {
            "url": {
              "type": "string"
            },
            "text": {
              "type": "string"
            }
          },
          "required": [
            "url",
            "text"
          ]
        }
      },
      "required": [
        "page",
        "per_page",
        "total",
        "total_pages",
        "data",
        "support"
      ]
    }



    });

    it('Test - POST ALL Objects',async () => {
        const body = {
            "name": "morpheus",
            "job": "leader"
        }
        const response = await request("https://reqres.in/api")
        .post("/users")
        .send(body)
        console.log(response.statusCode);
        console.log(response.body);

        //assertions
        assert.equal(response.statusCode, 201);

        const jsonSchema = {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "job": {
                "type": "string"
              },
              "id": {
                "type": "string"
              },
              "createdAt": {
                "type": "string"
              }
            },
            "required": [
              "name",
              "job",
              "id",
              "createdAt"
            ]
          }

          assert.jsonSchema(response.body, jsonSchema);

    });

    it('Test - DELETE ALL Objects',async () => {
      const response = await request("https://reqres.in/api")
      .delete("/users/2")
      console.log(response.statusCode);

      //assertions
      assert.equal(response.statusCode, 204);
    });

    it('Test - PUT ALL Objects',async () => {
      const body = {
        "name": "morpheus",
        "job": "zion resident"
    }
      const response = await request("https://reqres.in/api")
      .put("/users/2")
      .send(body)
      console.log(response.statusCode);
      console.log(response.body);

      //assertions
      
      assert.equal(response.statusCode, 200);

      const jsonSchema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "job": {
            "type": "string"
          },
          "updatedAt": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "job",
          "updatedAt"
        ]
      }
      
      assert.jsonSchema(response.body, jsonSchema);

    });
});