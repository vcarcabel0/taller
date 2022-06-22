//creamos una variable en la que el usuario determinara que operacion realizar
var operador = parseInt(prompt(" 1-Suma \n 2-Resta\n 3-Multiplicacion \n 4-División \n\n ¿Que operacion desea realizar?"));

//en base a esa variable usamos switch para realizar x tarea
switch(operador){
        case 1: 
            var num1 = parseInt(prompt("Ingrese un numero"));
            var num2 = parseInt(prompt("Ingrese otro numero"));
            var resultado = (num1 + num2);
            alert("la Suma de los numeros ingresados es: " + resultado);
        break;

        case 2:
            var num1 = parseInt(prompt("Ingrese un numero"));
            var num2 = parseInt(prompt("Ingrese otro numero"));
            var resultado = (num1 - num2);
            alert("la Resta de los numeros ingresados es: " + resultado);
        break;
        default:
            alert("ese dato no es valido, por favor intentelo de nuevo")
}