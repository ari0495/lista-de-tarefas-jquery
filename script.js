$(document).ready(function() {
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault();
        var tarefa = $('#nome-tarefa').val();
        $('#lista-tarefas').append('<li><div class="tarefa">' + tarefa + '<button class="btn-excluir">X</button></div></li>');
        $('#nome-tarefa').val('');
    });

    $('#lista-tarefas').on('click', '.tarefa', function() {
        $(this).css('text-decoration', 'line-through');
    });

    $('#lista-tarefas').on('click', '.btn-excluir', function(e) {
        e.stopPropagation();
        $(this).parent().remove();
    });
});