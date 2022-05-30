function compara(){
    var a=2;
    var b=2;
    if(a==b)
    alert("a y b son iguales")
    else
    alert("a y b son diferentes")
}

function resta(x,y){
    var rest=x-y;
    document.write("<h2> la restas es: " + rest + "</h2>");
}

function suma(a,b){
    var sum=a+b;
    document.write("<h2> la suma es: " + sum + "</h2>");
}

function escribir(){
    valor=document.getElementById('entrada').value;
    document.getElementById('contenido').innerHTML=''+valor;
}