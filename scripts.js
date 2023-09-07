function getInputValue(){
  let numbers = document.getElementById("numbers").value

  if (!numbers.trim()){
    alert("valor não informado")
    throw new Error("1")
  }

  numbers = numbers.split(",").map(number => {
    const num = Number(number)

    if(isNaN(num)){
      alert("tu é burro? bota um número")
      throw new Error("2")
    }

    return num
  })


  return numbers
}

function getHigherNumber(){
  const numbers = getInputValue().reduce(function(number1,number2){
    console.log(number1,number2)
    if (number1>=number2){
      return number1
    }

    return number2
  })

  alert(numbers)
} 

function getNumbersSum(){
  let total = 0
  const numbers = getInputValue()

  for(const number of numbers){
    total += number 
  }

  alert(total)
}