$(document).ready(function(){
    const novaTarefa = $('<li></li>')
    
    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        

    $(`<li>${nomeTarefa}</li>`).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul')
    $('#nome-tarefa').val('');

    })

    let tarefaRealizada = novaTarefa;

    $(tarefaRealizada).click(function(){
        $(this).css("text-decoration","line-through");
    })
})