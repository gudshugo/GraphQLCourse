const usuarios = [
    {
        id : 1,
        nome: 'Hugo',
        email: 'email@email.com',
        idade: 24,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id : 2,
        nome: 'Gilberto',
        email: 'email@email.com',
        idade: 21,
        perfil_id: 2,
        status: 'INATIVO'
    },
    {
        id : 3,
        nome: 'Elizeu',
        email: 'email@email.com',
        idade: 25,
        perfil_id: 1,
        status: 'BLOQUEADO'
    }
]

const perfis = [
    {
        id: 1,
        nome: 'Comum'
    },
    {
        id: 2,
        nome: 'Administrador'
    }
]

module.exports = {usuarios, perfis}