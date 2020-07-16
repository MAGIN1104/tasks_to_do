const opt_1 = {
    descripcion : {
        demand: true,
        desc: 'Descripcion de la tarea por hacer.',
        alias : 'd'
    }
}
const opt_2 = {
    descripcion : {
        demand: true,
        desc: 'Actualiza estado de una tarea.',
        alias : 'd'
    },
    completado : {
        alias : 'c',
        default: true
    }
}

const opt_3 = {
    descripcion : {
        demand: true,
        desc: ' Elimina una tarea.',
        alias : 'd'
    }
}

const argv = require('yargs')
                .command('crear','Crea un nueva tarea por hacer.', opt_1)
                .command('actualizar','Actualiza el estado completado de una tarea.', opt_2)
                .command('borrar','Elimina un tarea.',opt_3)
                .help()
                .argv;
module.exports={
    argv
}