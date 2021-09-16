import '../css/form.scss'

const form = document.getElementById('form')
const btn = document.getElementById('btn')

const fName = document.getElementById('fName')
const lName = document.getElementById('lName')
const email = document.getElementById('email')
const country = document.getElementById('country')
const postalCode = document.getElementById('postalCode')
const phoneNum = document.getElementById('phoneNum')

const creditCardNum = document.getElementById('creditCardNum')
const securityCode = document.getElementById('securityCode')
const expirationDate = document.getElementById('expirationDate')

function hasNumbers (str){
  let regex = /\d/g
  return regex.test(str)
}

function hasLetters (str) {
  let regex = /^[a-zA-Z]+$/
  return regex.test(str)
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (hasNumbers(fName.value) || hasNumbers(lName.value)) {
    alert('First and/or last names are contain number!')
  }

  if (country.value === '' || country.value === null) {
    alert('Please select the country')
  }

  if (postalCode.value.length !== 5) {
    alert('Please enter the correct postal code')
  }

  if (phoneNum.value.length < 9) {
    alert('Please enter the correct phone number')
  }

  if (creditCardNum.value.length !== 16) {
    alert('Please enter the correct credit card number')
  }

  if (securityCode.value.length !== 3) {
    alert('Please enter the correct security code')
  }

  if (hasLetters(expirationDate)) {
    alert('Please enter the correct expiration date MM/YY')
  }

  let data = {
    firstName: fName.value,
    lastName: lName.value,
    email: email.value,
    country: country.value,
    postalCode: postalCode.value,
    phone: phoneNum.value,
    creditCard: creditCardNum.value,
    CVV: securityCode.value,
    expDate: expirationDate.value,
  }

  fetch('/order', {
    method: 'POST',
    headers: {
      'Contetn-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => console.log(data))
})

// btn.addEventListener('click', (e) => {
//   e.preventDefault()
//   const data = fetch('/order', {
//     method: 'POST',
//     body: JSON.stringify(),
//   })
//     .then(response => console.log(response))
//     .then(body => console.log(body))
//   console.log(data)
// })

const dataMockup = {
  firstName: 'dima',
  lastName: 'leveret',
  email: 'dima@gmail.com',
  country: 'Poland',
  postalCode: '00000',
  phone: '000000000',
  creditCard: '0000 0000 0000 0000',
  CVV: '000',
  expDate: '00/00',
}

fetch('/order', {
  method: 'POST',
  headers: {
    'Contetn-Type': 'application/vnd.api+json',
  },
  body: JSON.stringify(dataMockup),
})
  .then(response => response.json())
  .then(data => console.log(data))

