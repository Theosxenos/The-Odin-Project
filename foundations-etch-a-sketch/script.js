let containerdiv = document.querySelector(".container");

for (let rows = 1; rows<=255;rows++)
{

    let squarediv = document.createElement("div");
    squarediv.className = "grid-item";
    squarediv.textContent = rows;

    containerdiv.appendChild(squarediv);
}