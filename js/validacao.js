function validar(){
    
    nome = document.getElementById("txtNome");

    if(nome.value == "" || nome.value.length < 3){
        alert("Campo nome é obrigatório!");
        nome.style.backgroundColor = '#ffafaf';
        nome.focus();
        return false;
    }
    else{
        nome.style.backgroundColor = 'white';
    }


    sobrenome = document.getElementById("txtSobrenome");

    if(sobrenome.value == "" || sobrenome.value.length < 10){
        alert("Campo sobrenome é obrigatório!");
        sobrenome.style.backgroundColor = '#ffafaf';
        sobrenome.focus();
        return false;
    }
    else{
        sobrenome.style.backgroundColor = 'white';
    }

    email = document.getElementById("email");

    if(email.value == "" || email.value.length < 10){
        alert("Campo Email é obrigatório!");
        email.style.backgroundColor = '#ffafaf';
        email.focus();
        return false;
    }
    else{
        email.style.backgroundColor = 'white';
    }

    cpf = document.getElementById("cpf");

    if(cpf.value == "" || cpf.value.length < 11 || cpf.value.length > 11  ){
        alert("Campo CPF é obrigatório!");
        cpf.style.backgroundColor = '#ffafaf';
        cpf.focus();
        return false;
    }
    else{
        cpf.style.backgroundColor = 'white';
    }

    cep = document.getElementById("cep");

    if(cep.value == "" || cep.value.length < 8){
        alert("Campo CEP é obrigatório!");
        cep.style.backgroundColor = '#ffafaf';
        cep.focus();
        return false;
    }
    else{
        cep.style.backgroundColor = 'white';
    }

    

    cidade = document.getElementById("cidade");

    if(cidade.value == "" || cidade.value.length < 2){
        alert("Campo Cidade é obrigatório!");
        cidade.style.backgroundColor = '#ffafaf';
        cidade.focus();
        return false;
    }
    else{
        cidade.style.backgroundColor = 'white';
    }

    bairro = document.getElementById("bairro");

    if(bairro.value == "" || bairro.value.length < 5){
        alert("Campo Bairro é obrigatório!");
        bairro.style.backgroundColor = '#ffafaf';
        bairro.focus();
        return false;
    }
    else{
        bairro.style.backgroundColor = 'white';
    }

    endereco = document.getElementById("endereco");

    if(endereco.value == "" || endereco.value.length < 5){
        alert("Campo Endereço é obrigatório!");
        endereco.style.backgroundColor = '#ffafaf';
        endereco.focus();
        return false;
    }
    else{
        endereco.style.backgroundColor = 'white';
    }


    numero = document.getElementById("numero");

    if(numero.value == "" || numero.value.length < 1){
        alert("Campo Número é obrigatório!");
        numero.style.backgroundColor = '#ffafaf';
        numero.focus();
        return false;
    }
    else{
        numero.style.backgroundColor = 'white';
    }

    celular = document.getElementById("celular");

    if(celular.value == "" || celular.value.length < 10){
        alert("Campo Celular é obrigatório!");
        celular.style.backgroundColor = '#ffafaf';
        celular.focus();
        return false;
    }
    else{
        celular.style.backgroundColor = 'white';
    }

    
}
