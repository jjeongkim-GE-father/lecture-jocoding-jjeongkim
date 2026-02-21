const drawButton = document.getElementById('draw-button');
const lottoNumbersDiv = document.querySelector('.lotto-numbers');

drawButton.addEventListener('click', () => {
    lottoNumbersDiv.innerHTML = '';
    const numbers = generateLottoNumbers();
    numbers.forEach((number, index) => {
        setTimeout(() => {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('number');
            numberDiv.textContent = number;
            lottoNumbersDiv.appendChild(numberDiv);
        }, index * 500);
    });
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}