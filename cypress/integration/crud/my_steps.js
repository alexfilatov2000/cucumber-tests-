import { Then, Given, When } from "cypress-cucumber-preprocessor/steps";

const CryptoJS = require("crypto-js");
const date = new Date();
let ts = date.getTime();
const publicKey = '366d13c242e7d58e1b048b5a8a52bd03';
const privateKey = '1522dd1e5cad26374167cff4ff8c10240d9caa56';
const hash = CryptoJS.MD5(ts+privateKey+publicKey).toString();

let url = ``;
let status = '';

Given("I Set Get Marvel service api endpoint", function () {
    url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
});

When("I Send a Get HTTP request", function () {
    cy.request('GET', url).then(res => status = res.body);
});

Then("I receive valid HTTP Response code {int}", function () {
    expect(status).to.have.property('code', 200);
});

Given("I Set Post Marvel service api endpoint", function () {
    url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
});

When("I Send a Post HTTP request", function () {
    cy.request('GET', url).then(res => status = res.body);
});

Then("I receive valid HTTP Response code", function () {
    expect(status).to.have.property('code', 201);
});
