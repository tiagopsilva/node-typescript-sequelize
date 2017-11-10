"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./config/helpers");
describe('Testes de Integração', () => {
    describe('GET /', () => {
        it('Deve retornar a mensagem Hello, world!', done => {
            helpers_1.request(helpers_1.app)
                .get('/')
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.text).to.be.eql('Hello, world!');
                done(error);
            });
        });
    });
    describe('GET /ola/:nome', () => {
        it('Deve retornar a mensagem Hello, TypeScript Course', done => {
            const nome = 'TypeScript Course';
            helpers_1.request(helpers_1.app)
                .get(`/ola/${nome}`)
                .end((error, res) => {
                helpers_1.expect(res.status).to.be.eql(200);
                helpers_1.expect(res.text).to.be.equal('Hello, TypeScript Course');
                done(error);
            });
        });
    });
    describe('GET /api/users', () => {
        it('Deve retornar um Json com todos os usuários', done => {
            helpers_1.request(helpers_1.app)
                .get('/api/users')
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('GET /api/users/:id', () => {
        it('Deve retornar um Json com um usuário', done => {
            helpers_1.request(helpers_1.app)
                .get(`/api/users/${1}`)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('POST /api/users', () => {
        it('Deve criar um novo usuário', done => {
            const user = {
                nome: 'TesteCreate'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users')
                .send(user)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(201);
            });
        });
    });
    describe('PUT /api/users/:id', () => {
        const user = {
            nome: 'TesteUpdate'
        };
        it('Deve atualizar um usuário', done => {
            helpers_1.request(helpers_1.app)
                .put(`/api/users${1}`)
                .send(user)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('DELETE /api/users/:id', () => {
        it('Deve deletar um usuário', done => {
            helpers_1.request(helpers_1.app)
                .delete(`/api/users${1}`)
                .send()
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
});
