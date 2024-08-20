const request = require('supertest');
const {assert} = require('chai');

var chai = require('chai');
chai.use(require('chai-json-schema'));

describe('API Test for "restful-api-dev"', () => {
    it('Test - GET ALL Objects',async () => {
        const response = await request("https://api.restful-api.dev/")
        .get("objects")

    //assertions
    assert.equal(response.statusCode, 200);
    assert.equal(response.body[0].name, "Google Pixel 6 Pro")
    assert.equal(response.body[0].data.color, "Cloudy White")
    });

    it('Test - POST ALL Objects',async () => {
        const body = {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2019,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         }
        const response = await request("https://api.restful-api.dev/")
        .post("objects")
        .send(body)
        console.log(response.statusCode);
        console.log(response.body);

        //assertions
        assert.equal(response.statusCode, 200);

        const jsonSchema = {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "data": {
                "type": "object",
                "properties": {
                  "year": {
                    "type": "integer"
                  },
                  "price": {
                    "type": "number"
                  },
                  "CPU model": {
                    "type": "string"
                  },
                  "Hard disk size": {
                    "type": "string"
                  }
                },
                "required": [
                  "year",
                  "price",
                  "CPU model",
                  "Hard disk size"
                ]
              },
              "createdAt": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "name",
              "data",
              "createdAt"
            ]
          }

          assert.jsonSchema(response.body, jsonSchema);

    });
});