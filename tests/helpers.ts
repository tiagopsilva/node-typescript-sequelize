import * as mocha from 'mocha';
import * as Chai from 'chai';
import * as td from 'testdouble';

const supertest = require('supertest');
const app = require('../src/app');

const request = supertest;
const expect = Chai.expect;
const testDouble = td;

export { app, expect, request, testDouble };