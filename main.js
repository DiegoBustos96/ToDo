document.querySelector('#push').addEventListener('click', function () {
    if (document.querySelector('#nuevaTarea input').value.length == 0) {
        alert("Debes ingresar una tarea")
    }
    else {
        manejadorTarea();
        document.querySelector('#nuevaTarea input').value = "";
    }
})
function manejadorTarea() {
    document.querySelector('#listaTareas').innerHTML += `
        <div class="tarea">
            <div>
                <div class="custom-checkbox"></div>
                <span class="nombreTarea">
                    ${document.querySelector('#nuevaTarea input').value}
                </span>
            </div>
            <button class="borrar">
            <i class="bi bi-trash3"></i>
            </button>

        </div>
        `;
        document.querySelectorAll(".borrar")
            .forEach(tarea => tarea.addEventListener('click', function(){
                this.parentNode.remove()
            }));
        document.querySelectorAll(".custom-checkbox")
        .forEach(tarea=> tarea.addEventListener('click', function(){
            this.parentNode.classList.toggle("tarea-completada");
        }));
}