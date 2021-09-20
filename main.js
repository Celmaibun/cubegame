const button = document.querySelector('#roll');

const youDisplay = document.querySelector('.you-display');
const enemyDisplay = document.querySelector('.enemy-display');

const youScore = document.querySelector('.you-score');
const enemyScore = document.querySelector('.enemy-score');
const screen = document.querySelector('.won-screen');
const sign = document.querySelector('.sign');
const restartBtn = document.querySelector('.restart');


const youCube = document.querySelector('.you-cube');
const enemyCube = document.querySelector('.enemy-cube');

const input = document.querySelector('input');
const inputScore = document.querySelector('.input-score')

let you = 0;
let enemy = 0;
let finishNumber = 10;


const roll = function(){

    const you = Math.floor(Math.random() * (1 - 6)) + 6
    const enemy = Math.floor(Math.random() * (1 - 6)) + 6

    return [you, enemy]
}

const update = function(){
    let values = roll()
    if(values[0] > values[1]){
        you++;
    }
    else if(values[0] < values[1]){
        enemy++
    }

    youCube.src = `img/${values[0]}.png`
    enemyCube.src = `img/${values[1]}.png`

    youScore.textContent = `YOU: ${you}`
    enemyScore.textContent = `ENEMY: ${enemy}`

    inputScore.innerHTML = `<p class="p-score">PLAY TO:</p>${finishNumber}`


    endGame()
}

const endGame = function(){

    if(you >= finishNumber){

        sign.textContent = 'YOU WON'
        screen.style.display = "flex";

    }
    else if(enemy >= finishNumber){
        sign.textContent = 'ENEMY WON'
        screen.style.display = "flex";
    }

}
const inputNumber = function (){

    console.log(finishNumber);

    if(input.value <= 0){
        finishNumber = 10;
    }
    else if(input.value > 100){
        finishNumber = 100;
    }
    else{
        finishNumber = input.value;
    }
    
}

const restart = function(){
    screen.style.display = "none";
    you = 0;
    enemy = 0;
    youScore.textContent = `YOU: ${you}`
    enemyScore.textContent = `ENEMY: ${enemy}`
    youCube.src = `img/${0}.png`
    enemyCube.src = `img/${0}.png`
}



button.addEventListener('click', update);
restartBtn.addEventListener('click', restart)
input.addEventListener('input', inputNumber)