const assert = require('assert')

// escreva greet abaixo
const greet = (nome, saudacao = "Hi") => `${saudacao} ${nome}`


assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")