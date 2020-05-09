const { perfis } = require('../data/db')

module.exports = {
    salario (usuario){
        return usuario.salario_real
    },
    perfil(usuario){
        const selected = perfis
        .filter(p => p.id === usuario.perfil_id)
        return selected ? selected[0] : null
    }
}