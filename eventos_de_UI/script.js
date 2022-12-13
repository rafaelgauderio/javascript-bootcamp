console.log("\nProgramar eventos é escrever funções para serem executadas quando o evento ocorrer.");

const inputName = document.forms.formulario.name;
const inputEmail = document.forms.formulario.email;
const inputTelefone = document.forms.formulario.telefone;
console.log(inputName);
console.log(inputEmail);

//evento ao levantar uma tecla
//função quando é chamada como argumento não tem parenteses. É apenas uma referências a função
inputName.addEventListener('keyup',handleInputNameKeyUp);

function handleInputNameKeyUp(event) {
    console.log("Nome: " + event.target.value);
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

inputTelefone.addEventListener('change',handleInputTelefoneChange);

function handleInputTelefoneChange(event) {
    if(validarTelefone(event.target.value)) {        
        event.target.classList.remove("entrada-erro");
        console.log("Telefone informado é válido");
        
        
    } else {
        event.target.classList.add("entrada-erro"); 
        window.alert("telefone inválido");
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

  function validarTelefone(telefone) {
    return String(telefone)
    .toLowerCase()
    .match(
       /^(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})$/     
    );

  }

  //const botaoEnviar = document.forms.formulario.btn;
  const botaoEnviar = document.querySelector('[type="submit"]');

  botaoEnviar.addEventListener('click', handleButtonSubmitOnClick);

  function handleButtonSubmitOnClick(event) {
    event.preventDefault();
    console.log("Dados do formulário\n" + inputName.value + "\n" + inputEmail.value + "\n"+ inputTelefone.value);
  }



