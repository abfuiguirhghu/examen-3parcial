var dato1 = document.querySelector ("#dato1")
var dato2 = document.querySelector ("#dato2")
var Suma = document.querySelector ("#sum")
var Resta = document.querySelector ("#res")
var Multiplicacion = document.querySelector ("#mul")
var Division = document.querySelector ("#div")
var Resultado = document.querySelector ("#resul")

Suma.addEventListener("click", suma)
function suma(){
    var res = parseInt( dato1.value) + parseInt(dato2.value)
    Resultado.innerHTML = res
}

Resta.addEventListener("click", resta)
function resta(){
    var res = parseInt(dato1.value) - parseInt(dato2.value)
    Resultado.innerHTML = res
}

Multiplicacion.addEventListener("click", multiplicacion)
function multiplicacion(){
    var res = parseInt(dato1.value) * parseInt(dato2.value)
    Resultado.innerHTML = res
}

Division.addEventListener("click", division)
function division(){
    var res = parseInt(dato1.value) / parseInt(dato2.value)
    Resultado.innerHTML = res
}
