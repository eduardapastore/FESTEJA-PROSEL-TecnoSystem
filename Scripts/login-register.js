const inputNome = document.getElementById('name')
const inputCNPJ = document.getElementById('CNPJ')
const inputEmail = document.getElementById('email')
const inputSenha = document.getElementById('senha')
const inputEmaiLLogin = document.getElementById('emailLogin')
const inputSenhaLogin = document.getElementById('senhaLogin')
const botaoRegistrar = document.getElementById('botaoRegistrar')
const botaoLogin = document.getElementById('botaoLogin')

let itens = JSON.parse(localStorage.getItem('dbfunc')) ?? []

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

botaoRegistrar.addEventListener('click', e => {
    e.preventDefault()

    itens = getItensBD()

    itens.push({
        nome: inputNome.value,
        cnpj: inputCNPJ.value,
        email: inputEmail.value,
        senha: inputSenha.value
    });

    setItensBD()

    alert("Registro salvo com sucesso!")

    // limpar campos
    inputNome.value = ''
    inputCNPJ.value = ''
    inputEmail.value = ''
    inputSenha.value = ''
});

botaoLogin.addEventListener('click', E => {
    E.preventDefault();

    itens = getItensBD()

    const emailDigitado = inputEmaiLLogin.value;
    const senhaDigitada = inputSenhaLogin.value;

    const usuarioValido = itens.find(reg => reg.email === emailDigitado && reg.senha === senhaDigitada )

    if(usuarioValido)
    {
        alert("Login bem-sucedido")
        window.location.href = "home.html"
    }
    else{
        alert("Email ou senha incorretos")
    }
})


