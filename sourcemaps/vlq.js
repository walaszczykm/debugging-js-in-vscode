const vlq = require('vlq')

if (process.argv.length > 3) {
  const action = process.argv[2]
  const arg = process.argv[3]
  let result = ''

  if (action === 'decode') {
    result = vlq.decode(arg)
  } else if (action === 'encode') {
    result = vlq.encode(arg)
  }

  console.log(result)
}
