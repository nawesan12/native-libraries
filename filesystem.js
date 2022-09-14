const fs = require("fs")

const alumnos = [
    {name: "Naza", age: "64"}, {name: "Mathias", age:"100"}
]

// fs.writeFile("alumnos.json", JSON.stringify(alumnos), (error) => {
//     if(error) {
//         console.log(error)
//     }
// })

// fs.readFile("alumnos.json", "utf-8", (error, data) => {
//     if(!error) {
//         const dniRegex = /8 numeros y 8 de largo como maximo/g

//         const coincidencias = ["41212347", "1378532", "17247143"]

//         const skillers = "Llamada a la base de datos"

//         coincidencias.map((coincidencia) => {
//             // Llamada a la base de datos de skillers
//             skillers.map((skiller) => {
//                 skillers.dni === coincidencia ? "Subir un presente" : "Ausente tal dia"
//             })
            
//         })

        
//     } else {
//         console.log(error)
//     }
// })

// fs.rename("alumnos.txt", "lista.txt", (error) => {
//     console.log("Listo!")
// })

// fs.writeFile("lista.txt", JSON.stringify(alumnos), (error) => {
//     if(error) {
//         console.log(error)
//     }
//     console.log("Archivo escrito!")
// })

// fs.appendFile("log.txt", `\n Datos extra: ${JSON.stringify(alumnos)}`, (error) => {
//     console.log("Listooo, contenido agregado!")
// })

// fs
//     .createReadStream("lista.txt")
//     .pipe(fs.createWriteStream("lista_copia.txt"))

// fs.unlink("lista_copia.txt", (error) => {
//     console.log("Archivo eliminado!")
// })

fs.readdir("./", (error, files) => {
    if(!error) {
        files.map((file) => {
            fs.
                createReadStream(file)
                .pipe(fs.createWriteStream(`copia_${file}`))
        })

        console.log(files)
    } else {
        console.log(error)
    }
})
