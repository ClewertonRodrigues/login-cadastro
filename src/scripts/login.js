const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");
const inputConfirmSenha = document.getElementById("verifica-senha")
const formLogin = document.getElementById("form-login")
const formCadastro = document.getElementById("form-cadastro")

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    verificaFormLogin()
})

function verificaFormLogin(){
    const valorEmail = inputEmail.value;
    const valorSenha = inputSenha.value;
    
    if(valorEmail === ""){
        Swal.fire({
            title: 'Erro!',
            text: 'Preencha o campo de email!',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        return;
    }

    if(valorSenha.length < 8){
        Swal.fire({
            title: 'Erro!',
            text: 'Sua senha deve ter pelo menos 8 dígitos',
            icon: 'error',
            confirmButtonText: 'Ok'
          })

          return;
    } else {
        Swal.fire({
            title: 'Sucesso!',
            text: 'Você entrou na sua conta!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
    }

    inputEmail.value = ""
    inputSenha.value = "";
}

