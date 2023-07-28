$(document).ready(function(){
    const novaTarefa = $('<li></li>');
    
    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        
        $(`<li>${nomeTarefa}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('#listaTarefas');
        $('#nome-tarefa').val('');

    })

    function riscaTarefa(){
        $(this).addClass('feito');
        console.log('clicou')
    }

    $(novaTarefa).on('click','li', riscaTarefa);
        
})