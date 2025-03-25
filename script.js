function changeSole(type) {
    alert("Sola alterada para: " + type);
}

function adjustFit(value) {
    let status = "Solto";
    if (value >= 4 && value <= 7) status = "Médio";
    if (value > 7) status = "Apertado";
    document.getElementById("fitStatus").innerText = "Ajuste: " + status;
}

function cleanShoes(button) {
    let humidityBar = document.getElementById("humidity");
    let dirtBar = document.getElementById("dirt");

    if (humidityBar && dirtBar) {
        humidityBar.style.width = "0%";
        dirtBar.style.width = "0%";
    }

    button.style.backgroundColor = "green"; // Fica verde ao ativar
    setTimeout(() => { button.style.backgroundColor = "blue"; }, 500); // Volta ao azul

    alert("Autolimpeza ativada! O tênis agora está limpo.");
}
