class Person {
  constructor (name, lastname) {
    this.name = name
    this.lastname = lastname
  }

  greet () {
    return 'Hi ' + this.name + ' ' + this.lastname
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#es6')

  const createJohn = (event) => {
    var johnDoe = new Person('Jone', 'Doe')
    console.log('ES6 ' + johnDoe.greet())
  }

  btn.addEventListener('click', createJohn)
})
