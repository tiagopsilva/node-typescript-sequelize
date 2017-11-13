import { testDouble, expect } from '../helpers';
import UserService from '../../src/services/user-service';

describe('Testes Unitários do Controller', () => {

    const model = require('../../src/models');

    const defaultUser = {
        id: 1,
        name: 'Default User',
        email: 'defaultuser@email.com',
        password: '1234'
    }

    before((done) => {
        model.sequelize.sync().then(result => {
            done();
        });
    });

    beforeEach((done) => {
        model.User.destroy({
            where: {}
        }).then(() => {
            model.User.create(defaultUser).then(() => {
                done();
            });
        })
    });

    describe('Método getAll', () => {
        it('Deve retornar uma lista com todos os usuários', () => {
            const service = new UserService();
            let users = service.getAll()
            expect(users).to.be.an('array');
            expect(users[0]).to.have.all.keys(['email', 'id', 'name', 'password']);
        });
    });

    describe('Método getById', () => {
        it('Deve retornar um usuário pelo id', () => {
            const service = new UserService();
            var user = service.getById(defaultUser.id);
            expect(user).to.have.all.keys(['email', 'id', 'name', 'password']);
        });
    });

    describe('Método Create', () => {
        it('Deve criar um novo usuário', () => {
            const novoUsuario = {
                id: 2,
                name: 'Novo usuário',
                email: 'novousuario@email.com',
                password: '1234'
            };
            const service = new UserService();
            return service.create(novoUsuario).then(result => {
                expect(result).to.have.all.keys(['createdAt', 'email', 'id', 'name', 'password', 'updatedAt']);
            });
        })
    });

    describe('Método Update', () => {
        it('Deve atualizar um usuário', () => {
            const usuarioAtualizado = {
                name: 'Nome atualizado',
                email: 'atualizado@email.com'
            };
            const service = new UserService();
            return service.update(defaultUser.id, usuarioAtualizado).then(result => {
                expect(result.affected).to.be.equal(1);
            });
        });
    });

    describe('Método Delete', () => {
        it('Deve excluir um usuário', () => {
            const service = new UserService();
            return service.delete(defaultUser.id).then(result => {
                expect(result.affected).to.be.equal(1);
            });
        });
    });

});