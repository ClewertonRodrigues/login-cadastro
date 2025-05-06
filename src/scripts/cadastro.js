const formCadastro = document.getElementById("form-cadastro");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");
const inputConfirmSenha = document.getElementById("verifica-senha");

formCadastro.addEventListener("submit", (event) => {
  event.preventDefault();

  verificaFormCadastro();
});

function verificaFormCadastro() {
  const valorEmailCadastro = inputEmail.value;
  const valorSenhaCadastro = inputSenha.value;
  const valorSenhaConfirm = inputConfirmSenha.value;

  if (valorEmailCadastro === "") {
    Swal.fire({
      title: "Erro!",
      text: "Preencha o campo de email!",
      icon: "error",
      confirmButtonText: "Ok",
    });
    return;
  }

  if (valorSenhaCadastro.length < 8) {
    Swal.fire({
      title: "Erro!",
      text: "Sua senha deve ter pelo menos 8 dígitos",
      icon: "error",
      confirmButtonText: "Ok",
    });
    return;
  }

  if (valorSenhaCadastro === valorSenhaConfirm) {
    Swal.fire({
      title: "Sucesso!",
      text: "Conta feita com sucesso!",
      icon: "success",
      confirmButtonText: "Ok",
    });
  } else {
    Swal.fire({
      title: "Erro!",
      text: "As senha devem ser iguais!",
      icon: "error",
      confirmButtonText: "Ok",
    });
  }
}
