const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = "";
        let consola = "";
        let nombreArchivo = `./salida/tabla-${base}.txt`;

        for (let multiplier = 1; multiplier <= hasta; multiplier++) {
            salida += `${base} x ${multiplier} = ${base * multiplier} \n`;
            consola += `${base} ${"x".green} ${multiplier} ${"=".green} ${
                base * multiplier
            } \n`;
        }

        if (listar) {
            console.log("=============================".green);
            console.log(
                `       TABLA DEL: ${colors.red(base).bold}      `.green
            );
            console.log("=============================".green);
            console.log(consola);
        }

        fs.writeFileSync(nombreArchivo, salida);

        return nombreArchivo;
    } catch (error) {
        throw error;
    }
};

module.exports = { crearArchivo };
