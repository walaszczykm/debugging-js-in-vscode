document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn')
  console.log(btn)

  const output = document.querySelector('#output')
  console.log(output)

  btn.addEventListener('click', event => {
    console.log(event)
    output.innerHTML = 'Hello World!'
  })
})
