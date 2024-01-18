$(document).ready(function(){
    $('#CPF').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000')
    $('#CEP').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            cpf: 'Por favor, insira seu CPF.',
            email: 'Por favor, insira seu melhor E-mail.',
            telefone: 'Por favor, insira seu Telefone corretamente.',
            cep: 'Por favor, insira o seu CEP',
            endereco: 'Por favor, insira o seu endereço.'
        },
        submitHandler: function(form) {
            form.submit();
            alert('Formulário Enviado! Obrigado.');
        },
        invalidHandler: function(event, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        },
        errorClass: "error",
        errorElement:"span",
    })
});