function guardarDato(){
    var nombre=document.getElementById("nombre").value;
    var movil=document.getElementById("movil").value;
    localStorage.setItem(nombre,movil);
    document.getElementById("nombre").value="";
    document.getElementById("celular").value="";
    actualizarDatos();
}

function recuperarDato(){}

function eliminarDato(){}

function guardarDato(){}

function eliminarTodo(){}

function actualizarDatos(){}