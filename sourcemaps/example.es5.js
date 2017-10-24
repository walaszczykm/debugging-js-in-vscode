var Person = function (name, lastname) {
  this.name = name
  this.lastname = lastname
}

Person.prototype.greet = function () {
  return 'Hi ' + this.name + ' ' + this.lastname
}

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('#es5')

  const createJohn = function (event) {
    var johnDoe = new Person('Jone', 'Doe')
    console.log('ES5 ' + johnDoe.greet())
  }

  btn.addEventListener('click', createJohn)
})
