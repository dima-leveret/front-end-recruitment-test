import '../css/app.scss'

const button = document.querySelector('button')
const img = document.querySelector('img')

const sections = document.querySelectorAll('section')
sections[1].className = 'img-section'

button.addEventListener('click', () => {
  const newImg = img.cloneNode(true)
  newImg.className = 'new'
  sections[1].append(newImg)
})

