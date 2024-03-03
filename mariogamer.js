const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const background = document.querySelector('.background');
const bottomBackground = document.querySelector('.bottom-background');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')



    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        background.style.animation = 'none';//quando dá game over, a animação do background para.
        bottomBackground.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/game-over.png';//diretório do mario de game over foi mudado
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);


document.addEventListener('keydown', jump);