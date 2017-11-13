import * as HttpStatus from 'http-status';
import { app, request, expect } from '../helpers';

describe('Testes de Integração', () => {

    'use strict';
    const config = require('../../src/config/config');
    const model = require('../../src/models');

    const userDefault = {
        id: 1,
        name: 'Default user',
        email: 'default@gmail.com',
        password: 'default'
    };

    const userTest = {
        id: 2,
        name: 'Usuário Teste',
        email: 'teste@gmail.com',
        password: 'teste'
    };

    before((done) => {
        model.sequelize.sync().then(result => {
            done();
        });
    });

    beforeEach((done) => {
        model.User.destroy({
            where: {}
        }).then(() => {
            return model.User.create(userDefault);
        }).then(user => {
            model.User.create(userTest).then(() => {
                done();
            })
        });
    });

    describe('GET /api/users', () => {
        it('Deve retornar todos os usuários', done => {
            request(app)
                .get('/api/users')
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.OK);

                    let users = res.body;
                    console.log(users);
                    expect(users).to.be.an('array');
                    expect(users[0].name).to.be.equal(userDefault.name);
                    expect(users[0].emil).to.be.equal(userDefault.email)

                    done(error);
                });
        })
    });

    describe('GET /api/users/:id', () => {
        it('Deve retornar um usuário', done => {
            request(app)
                .get(`/api/users/${userDefault.id}`)
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.OK);

                    let user = res.body;
                    console.log(user);
                    expect(user.id).to.be.equal(userDefault.id);
                    expect(user.name).to.be.equal(userDefault.name);
                    expect(user).to.have.all.keys(['id', 'name', 'email', 'password']);

                    done(error);
                });
        })
    });

    describe('POST /api/users', () => {
        it('Deve criar um novo usuário', done => {
            const user = {
                id: 100,
                name: 'Usuário Teste',
                email: 'usuario@email.com',
                password: 'novousuario'
            };

            request(app)
                .post('/api/users')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.CREATED);

                    let user = res.body;
                    console.log(user);
                    expect(user.id).to.be.equal(user.id);
                    expect(user.name).to.be.equal(user.name);
                    expect(user.email).to.be.equal(user.email);

                    done(error);
                });
        })
    });

    describe('PUT /api/users/:id', () => {
        const user = {
            name: 'TesteUpdate',
            email: 'update@email.com'
        };

        it('Deve atualizar um usuário', done => {
            request(app)
                .put(`/api/users/${userTest.id}`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.OK);

                    let result = res.body;
                    console.log(result);
                    expect(result.success).to.be.equal(true);
                    expect(result.affected).to.be.equal(userTest.id)

                    done(error);
                });
        })
    });

    describe('DELETE /api/users/:id', () => {
        it('Deve deletar um usuário', done => {
            request(app)
                .delete(`/api/users/${userTest.id}`)
                .send()
                .end((error, res) => {
                    expect(res.status).to.equal(HttpStatus.OK);

                    let result = res.body;
                    console.log(result);
                    expect(result.success).to.be.equal(true);
                    expect(result.affected).to.be.equal(userTest.id)

                    done(error);
                });
        })
    });

});