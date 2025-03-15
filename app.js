let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo'); 
    let nombreDeAmigo = input.value.trim(); // 

    if (nombreDeAmigo !== "") { 
        amigos.push(nombreDeAmigo); 
        actualizarLista(); 

        input.value = ""; 
        input.focus(); 
    }
}
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function actualizarLista() {
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ""; 

    amigos.forEach(amigo => {
        let li = document.createElement("li"); 
        li.textContent = amigo; 
        lista.appendChild(li); 
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "<li>No hay amigos en la lista para sortear.</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<li> (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧Tu amigo secreto es: <strong>${amigoSecreto}</strong> (ﾉ^_^)ﾉ</li>`;
}