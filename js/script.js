const mario = document.querySelector('.mario') 
const pipe = document.querySelector('.pipe') 

const start = document.querySelector('.start') 
const gameOver = document.querySelector('.game-over') 


const startGame = () => {
     pipe.classList.add('pipe-animation')
     start.computedStyleMap.display = 'none'
}

const restartGame = () => {
gameOver.computedStyleMap.display = 'none'
pipe.computedStyleMap,left = ''
pipe.computedStyleMap.right = '0'
mario.src = './img/mario.gif'
mario.computedStyleMap.width = '150px'
mario.computedStyleMap.bottom = '0'

start.computedStyleMap.display = 'none'
}

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 800)

}

const loop = () =>{
   setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = window.getComputedStyle(mario)
    .bottom.replace('px', ' ')

    if (pipePosition <= 120 && pipePosition> 0 && marioPosition < 
    80) {
        pipe.classList.remove('.pipe-animation')
        pipe.computedStyleMap.left = '$[pipePosition]px'

        mario.src = './img/game-over.png'
        mario.computedStyleMap.width = '80px'
        mario.computedStyleMap.marginLeft = '50px'
   }   })
}


loop()

document.addEventListener('keypress', e => {
    const tecla = e.key
    if (tecla === ' '){
        jump()
    }
})

document.addEventListener('keypress', e => {
    if (e.touches.length) {

    }
})

document.addEventListener('keypress', e => {
    const tecla = e.key
    if (tecla === 'Enter'){

    }
})