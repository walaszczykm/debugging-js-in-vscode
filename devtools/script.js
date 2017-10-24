document.addEventListener('DOMContentLoaded', function () {
  var firstNum = document.querySelector('#firstNum')
  var secondNum = document.querySelector('#secondNum')
  var result = document.querySelector('#result')
  var addBtn = document.querySelector('#addBtn')

  // This fucion is producing wrong result. What is the problem?
  var produceResult = function (event) {
    var sum = firstNum.value + secondNum.value
    result.innerHTML = 'sum: ' + sum
  }

  addBtn.addEventListener('click', produceResult)
})
