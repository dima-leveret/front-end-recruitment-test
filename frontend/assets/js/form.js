import '../css/form.scss'

const form = document.getElementById('form')

const fName = document.getElementById('fName')

const btn = document.getElementsByClassName('btn')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(fName.value)
})
