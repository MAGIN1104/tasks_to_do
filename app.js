// const { require } = require("yargs");

const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./tasktodo/to_do');
let comando = argv._[0];
switch(comando) {

    case 'crear':
        let tarea =porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('\nTAREAS PENDIENTES'.blue);
        console.log('....................'.blue);
        for (let tarea of listado) {
            console.log(`\nTarea: ${tarea.descripcion}`);
            if(tarea.completado == false){
                console.log(`Estado: Tarea no terminada.`.red);
            }else{
                console.log(`Estado: Tarea terminada.`.green);
            }
        }
        console.log('\n....................'.blue)
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido...');
}