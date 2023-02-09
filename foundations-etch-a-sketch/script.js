let containerdiv = document.querySelector(".container");
let btnreset = document.querySelector("button");

const containerwidth = containerdiv.offsetWidth;//.substring(0, -2);

let squareamount = 16 * 16;

btnreset.addEventListener('click', btnResetClick);

drawSqaures();

function drawSqaures() {
    const squarewidth = containerwidth / Math.sqrt(squareamount);

    containerdiv.innerHTML = "";

    for (let squares = 0; squares < squareamount; squares++) {

        let squarediv = document.createElement("div");
        squarediv.className = "grid-item";
        squarediv.style.height = `${squarewidth}px`;
        squarediv.style.width = `${squarewidth}px`;
        // squarediv.textContent = squares;
        squarediv.dataset.square = squares + 1;

        squarediv.addEventListener('mouseenter', (e) => {
            squarediv.classList.add('grid-item-hover');
        });

        containerdiv.appendChild(squarediv);
    }
}

function btnResetClick(e) {
    let input = prompt("Input a number");

    if(input > 100)
    {
        alert('Please enter a number below 100.')
        btnResetClick(e);

        return;
    }

    squareamount = input * input;

    drawSqaures();
}