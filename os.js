const os = require("os")

const cpu = os.cpus()
console.log(cpu)

const sistema = os.platform()
console.log(sistema)

const dispositivo = os.hostname()
console.log(dispositivo)

const arquitectura = os.arch()
console.log(arquitectura)