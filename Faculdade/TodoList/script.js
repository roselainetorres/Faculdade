// Permite adicionar tarefa com o "enter" 
var input = document.getElementById("AdicionarTarefa");
input.addEventListener("keyup", function(event) 
{
    if (event.keyCode === 13) 
    { 
        event.preventDefault();
        tarefas();
    }
});

function tarefas() 
{
    var AdicionarTarefa = document.getElementById("AdicionarTarefa");
    var ListaTarefa = document.getElementById("ListaTarefa");
    var maxTasks = 20; // limite máximo de tarefas
    
    if (AdicionarTarefa.value === "") 
    {
        alert("Erro, Campo de tarefa Vazio.");
        return;
    } 
    
    var li = document.createElement("li");
    li.textContent = AdicionarTarefa.value;

    li.onclick = function() // Um clique conclui a tarefa
    {
        tarefaFeita(this);
    };

    li.ondblclick = function() // Dois cliques edita a tarefa
    {
        editarTarefa(this);
    };
    
    ListaTarefa.appendChild(li);
    AdicionarTarefa.value = ""; // Limpa o campo de entrada
}


function tarefaFeita(task) {
    task.classList.toggle("completa");
}

function editarTarefa(task) {
    var newTask = prompt("Edite a tarefa:", task.textContent);
    if (newTask !== null) {
        task.textContent = newTask;
    }
}

function tarefasConcluidas() {
    var completedTasks = document.querySelectorAll(".completa");
    completedTasks.forEach(function(task) {
        task.style.display = "none";
    });
}
