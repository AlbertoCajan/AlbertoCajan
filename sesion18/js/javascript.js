function guardarDatos(){
    localStorage.nombre=document.getElementById("nombre").value;
    localStorage.contraseña=document.getElementById("contraseña").value;
}

function recuperarDatos(){
    if((localStorage.nombre!=undefined)&&(localStorage.contraseña!=undefined)){
        document.getElementById("datos").innerHTML="Nombre: "+localStorage.nombre+"<br> Contraseña: "+localStorage.contraseña;
    }
    else{
        document.getElementById("datos").innerHTML="No has ingresado datos " 
    }
}