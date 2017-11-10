import { app, request, expect } from './config/helpers';

describe('Testes de Integração', () => {

    describe('GET /', () => {
        it('Deve retornar a mensagem Hello, world!', done => {
            request(app)
                .get('/')
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.text).to.be.eql('Hello, world!');
                    done(error);
                });
        });
    });

    describe('GET /ola/:nome', () => {
        it ('Deve retornar a mensagem Hello, TypeScript Course', done => {
            const nome = 'TypeScript Course';
            request(app)
                .get(`/ola/${nome}`)
                .end((error, res) => {
                    expect(res.status).to.be.eql(200);
                    expect(res.text).to.be.equal('Hello, TypeScript Course');
                    done(error);
                });
        });
    });

    describe('GET /api/users', () => {
        it('Deve retornar um Json com todos os usuários', done => {
            request(app)
                .get('/api/users')
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        })
    });

    describe('GET /api/users/:id', () => {
        it('Deve retornar um Json com um usuário', done => {
            request(app)
                .get(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        })
    });

    describe('POST /api/users', () => {
        it('Deve criar um novo usuário', done => {
            const user = {
                nome: 'TesteCreate'
            };
            request(app)
                .post('/api/users')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(201);
                });
        })
    });

    describe('PUT /api/users/:id', () => {
        const user = {
            nome: 'TesteUpdate'
        };
        it('Deve atualizar um usuário', done => {
            request(app)
                .put(`/api/users${1}`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        })
    });

    describe('DELETE /api/users/:id', () => {
        it('Deve deletar um usuário', done => {
            request(app)
                .delete(`/api/users${1}`)
                .send()
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        })
    });

});