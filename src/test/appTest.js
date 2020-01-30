const chai = require('chai')
const chaiHttp = require('chai-http')
const express = require('express')
const expect = chai.expect;
chai.use(chaiHttp);
let server = require('../index');

describe('Status and content', async function () {
    describe('Main page', async function () {
        it('it should GET all the articles', async () => {
            let response = await chai.request(server).get('/articles/list').send();
            expect(response.status).equal(200);
        });
    });
});


