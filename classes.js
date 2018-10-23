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

const persona = new SerVivo(true, true)

console.log(persona)
// Podemos acceder a las propiedades sin el guión bajo, porque estamos usando el
// get y el set en la definición
console.log(`Este ser vivo, camina?: ${persona.caminar}`)
console.log(`Este ser vivo, respira?: ${persona.respirar}`)
console.log(SerVivo.getEspecies())
console.log(persona.getEspecies())
