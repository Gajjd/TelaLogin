function login(){
    const username = document.getElementById("username").value;
    // Criação de uma constante, que está pegando o valor que está dentro do elemento que tem id = username
    const password = document.getElementById("password").value;
    
    if (username === "admin" && password === "1234"){
        window.location.href="bemvindo.html"
    }
    else{
        document.getElementById("mensagem").textContent="Usuário ou senha incorretos."
    }
}