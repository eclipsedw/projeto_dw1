function validarCampos () {
    let ret = true;
    let form = document.forms["formContato"];
    let msgErro = document.getElementById("msgErro");
    msgErro.innerHTML = "";

    if(form.nomeesobrenome.value.trim() == "") {
        msgErro.innerHTML = "Por favor, preencha o campo nome! <br>";
        form.nomeesobrenome.focus();
        ret = false;
    }

    if((form.email.value.indexOf(".") == -1 ) ||
        (form.email.value.indexOf("@") == -1) ||
        (form.email.value.indexOf(".") - form.email.value.indexOf("@") == 1)) {
            msgErro.innerHTML= msgErro.innerHTML + "Por favor, preencha o campo e-mail! <br>";
            form.email.focus();
            ret = false;
    }

    if(form.telefone.value.trim() == "") {
        msgErro.innerHTML = msgErro.innerHTML + "Por favor, preencha o campo telefone! <br>";
        form.telefone.focus();
        ret = false;
    }

    if(form.mensagem.value.trim() == "") {
        msgErro.innerHTML = msgErro.innerHTML + "Por favor, preencha o campo mensagem! <br>";
        form.mensagem.focus();
        ret = false;
    }

    if(form.contato.selectedIndex < 0) {
        msgErro.innerHTML = msgErro.innerHTML + "Por favor, selecione o campo contato! <br>";
        form.periodo.focus();
        ret = false;
    }

    if(form.periodo.selectedIndex < 0) {
        msgErro.innerHTML = msgErro.innerHTML + "Por favor, selecione o campo período! <br>";
        form.periodo.focus();
        ret = false;
    }

    console.log("Nome e Sobrenome: " + form.nomeesobrenome);
    return ret;
}