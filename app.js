const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");
require("colors");

console.clear();

// console.log(process.argv);

// console.log(argv);

// console.log("base: yargs", argv.base);

crearArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
    .catch((err) => console.log(err));

// COMO SE ACCEDE SIN YARGS
// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(base);

// crearArchivo(base)
//     .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
//     .catch((err) => console.log(err));
