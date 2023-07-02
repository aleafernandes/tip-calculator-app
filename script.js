let bill = document.querySelector('#billValue')
let people = document.querySelector('#people')
const tipPerson = document.getElementById('tip')
const amountPerson = document.getElementById('totalAmount')
const resetBtn = document.getElementById('reset')
const percent = document.querySelectorAll('#percentage')

console.log(bill.value,people.value)
// percent.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     console.log(button.value)
//     percentageChosen = button.value
//   })
// })

function callPerc(id, value){
  switch(id) {
    case 'percentage5':{
      percentageChosen = 5/100
      console.log(percentageChosen)
      break
    }
    case 'percentage10':{
      percentageChosen = 10/100
      console.log(percentageChosen)
      break
    }
    case 'percentage15':{
      percentageChosen = 15/100
      console.log(percentageChosen)
      break
    }
    case 'percentage20':{
      percentageChosen = 20/100
      console.log(percentageChosen)
      break
    }
    case 'percentage50':{
      percentageChosen = 50/100
      console.log(percentageChosen)
      break
    }
    case 'cPercentage':{
      percentageChosen = value/100
      console.log(percentageChosen)
      break
    }
  }
}

function calcTips(){
   
    let b = Number(bill.value)
    let pv = Number(people.value)
    let tipAmount = (b * percentageChosen/pv)
    let totalBill = tipAmount + (b/pv)
    console.log(b, percentageChosen, pv)
    tipPerson.innerHTML = `$ ${tipAmount.toFixed(2)}`
    amountPerson.innerHTML = `$ ${totalBill.toFixed(2)}`
}

function resetCalc(){
  tipPerson.innerHTML = `$ 00.00`
  amountPerson.innerHTML = `$ 00.00`
  bill.value = 0
  people.value = 0
}



