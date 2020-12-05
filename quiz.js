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
let x = (21, 10, 5);
let y = (1, 2, 3);


     return (x*y);
    alert("El valor sin impuestos más el 21% si el tipo de producto es 1");
    return (x*y);
    alert("El valor sin impuestos más el 10% si el tipo de producto es 2");
    return (x*y);
    alert("El valor sin impuestos más el 5% si el tipo de producto es 3");

}
