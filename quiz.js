console.log("PRUEBA QUIZ PRACTICO");

function Tipo_motor(motores) {
    



    switch(motores) {
    
    case 0:
    alert("no hay un valor establecido par este tipo de bomba")
    break;
    case 1: 
    alert("la bomba es una bomba de agua");
    break;
    case 2: 
    alert("la  bomba es una bomba de gasolina");
    break;
    case 3: 
    alert("la bomba es una bomba de hormigon");
    break;
    case 4:
    alert("la bommba es una bomba de pasta alimenticia");
    break;
    default:
    alert("No hay un valor establecido para este tipó de  bomba");
    break;
    }
}
 Tipo_motor(parseInt(prompt("escribaa el numero de motor")));

console.log (Tipo_motor)
/*segundo punto*/

function obtenerValorConImpuestos (valorsinimpuestos, tipo_producto) {
    switch(tipo_producto)
    {
    case 1:
    valor = valorsinimpuestos*21/100; 
    valortotal = valor + valorsinimpuestos;
    alert("el valor del producto 1 es 121");
break; 
case 2:
    valor = valorsinimpuestos*10/100; 
    valortotal = valor + valorsinimpuestos;
    alert("el valor del producto 2 es 110");
break; 
case 3:
    valor = valorsinimpuestos*5/100; 
    valortotal = valor + valorsinimpuestos;
    alert("el valor del producto 3 es 105");
    default:

break; 
    }
};  
