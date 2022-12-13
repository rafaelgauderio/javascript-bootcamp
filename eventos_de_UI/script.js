console.log("\nProgramar eventos é escrever funções para serem executadas quando o evento ocorrer.");

const inputName = document.forms.formulario.name;
const inputEmail = document.forms.formulario.email;
let inputTelefone = document.forms.formulario.telefone;
console.log(inputName);
console.log(inputEmail);

//evento ao levantar uma tecla
//função quando é chamada como argumento não tem parenteses. É apenas uma referências a função
inputName.addEventListener('keyup',handleInputNameKeyUp);

function handleInputNameKeyUp(event) {
    console.log(event.target.value);
}

inputEmail.addEventListener('change', handleInputEmailChange);

function handleInputEmailChange(event) {
    if(validarEmail(event.target.value)) {
        console.log("email informado: " + event.target.value);
        console.log("Email informado é válido");
        event.target.classList.remove("entrada-erro");
        
    } else {
        event.target.classList.add("entrada-erro");
        console.log("Email informado é INVÁLIDO");
        window.alert("Email inválido");
    }
    
}

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validarEmail(email) {
    // validar email utilizando expressão regular
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  //const botaoEnviar = document.forms.formulario.btn;
  const botaoEnviar = document.querySelector('[type="submit"]');

  botaoEnviar.addEventListener('click', handleButtonSubmitOnClick);

  function handleButtonSubmitOnClick(event) {
    event.preventDefault();
    console.log("Dados do formulário\n" + inputName.value + "\n" + inputEmail.value + "\n"+ inputTelefone.value);
  }



