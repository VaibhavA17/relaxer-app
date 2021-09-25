const container = document.getElementById("container")
const text = document.getElementById("text")

const totalTime = 7500
const breatheTime = (totalTime/5)* 2
const holdTime = totalTime/5

animationTime()

function animationTime(){
  text.innerHTML = 'Breathe In'
  container.className = 'container grow'

  setTimeout(()=>{
    text.innerHTML = 'Hold'

    setTimeout(()=>{
      text.innerHTML = 'Breathe Out'
      container.className = 'container shrink'
    },holdTime)
  }, breatheTime)
}

setInterval(animationTime, totalTime)

const colors = ['1','2','3','4']
let random = {}
let clickMe = document.getElementById("btn")
const color = document.querySelector('.color')

clickMe.addEventListener('click', function(){
  const randomNumber = randomColor() 
  console.log(randomNumber)
  document.body.style.background = `url('./img/bg${colors[randomNumber]}.jpg')`
  color.className = `gradient-circle${colors[randomNumber]}`
})

function randomColor(){
  return Math.floor(Math.random()*colors.length)  
}
