$(document).ready(function(){

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
            cpf: {
                required: false
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler:function(form){
            alert('Cadastro realizado com sucesso')
        },
        invalidHandler:function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids();

            if(camposIncorretos){
                alert(`Existe(m) ${camposIncorretos} campo(s) incorreto(s)`)
            }
        }
    })

    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(__) _____-____'
    })
    $('#cpf').mask('000.000.000 - 00',{
        placeholder:'Digite seu Cpf'
    })
    $('#cep').mask('00000 - 000',{
        placeholder:'_____-___'
    })
})