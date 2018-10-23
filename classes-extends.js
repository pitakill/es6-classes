class SerVivo {
  constructor(respirar = '', caminar = '') {
    this._respirar = respirar
    this._caminar = caminar
  }

  get caminar() {
    return this._caminar
  }

  get respirar() {
    return this._respirar
  }

  set caminar(caminar) {
    this._caminar = caminar
  }

  set respirar(respirar) {
    this._respirar = respirar
  }

  static getEspecies() {
    return 'Animales y plantas'
  }
}

class Persona extends SerVivo {
  constructor(respirar = false, caminar = false) {
    super(respirar, caminar)
  }

  saludar(nombre) {
    return `Hola ${nombre}`
  }

  get respirar() {
    return `Hola, está en mi naturaleza respirar?: ${this._respirar ? 'Sí' : 'No'}`
  }
}

const persona = new Persona(true, true)

console.log(persona)
console.log(persona.saludar('Extraño'))
console.log(persona.respirar)
