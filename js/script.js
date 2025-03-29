const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

const restartGame = () => {
    result.innerHTML = '';
    userInput.value = '';
    let numberRandom = Math.floor(Math.random() * 3) + 1;
    let countdownNumber = 5;
    countdown.innerHTML = `<p id="countdownText">Cuenta atrás: ${countdownNumber} segundos</p>`;
    
    let interval = setInterval(() => {
        countdown.innerHTML = `<p id="countdownText">Cuenta atrás: ${countdownNumber} segundos</p>`;
        countdownNumber--;
        
        if (countdownNumber < 0) {
            clearInterval(interval);
            const userNumber = parseInt(userInput.value);
            if (isNaN(userNumber) || userNumber < 1 || userNumber > 3) {
                result.innerHTML = `
                    <p id="resultText2">Por favor, ingresa un número válido</p>
                `;
            } else if (numberRandom === userNumber) {
                result.innerHTML = `
                    <p id="resultText1">¡Has salvado el mundo!</p>
                    <p id="resultText2">Tu número ${userNumber} es el mismo que el número ${numberRandom}</p>
                `;
            } else {
                result.innerHTML = `
                    <p id="resultText1">La bomba ha estallado</p>
                    <p id="resultText2">Tu número ${userNumber} no es el mismo que el número ${numberRandom}</p>
                `;
            }
        }
    }, 1000);
};

restartGame();
restart.addEventListener('click', restartGame);
