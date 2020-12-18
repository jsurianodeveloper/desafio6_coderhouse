// function saludar () {

//     let nombreApellido = prompt('Por favor ingrese su nombre y apellido:');
    
//     alert(`Hola ${nombreApellido}, bienvenido a FastQuotes, tu próximo seguro, ahora más rapido y en el momento ;)`);

// }
// saludar();



// function calcularBeneficioEdad () {
    
//     let edad = parseInt(prompt('Por favor ingrese su edad'));
    
//     if ( edad < 18) {
        
//         alert('Lo sentimos pero sos menor de edad, te recordamos que el beneficio de la financiacion es solo para mayores de 18 años. Deberas pagar tu seguro en efectivo :(');
//     }else if ( edad >= 18 && edad < 60) {
        
//         alert('Hey! te contamos que estas accediendo al beneficio de financiacion del seguro que elijas :)');
//     }else if ( edad > 60 ){
        
//         alert('Hey! te contamos que al ser mayor de 60, ademas de acceder al beneficio de financiacion del seguro que elijas, te damos un 20% de descuento más por elegirnos :D ');
//     }else {
//         alert('Ingresaste una edad incorrecta');
//     }
    
// }

// calcularBeneficioEdad();


// function titularidadAuto() {
    
//     let duenioDelAuto = Number(prompt('Si usted es dueño elija 1, si es otra persona, elija 2, si es de la empresa, elija 3'));
    
//     switch ( duenioDelAuto) {
        
//         case 1: 
//         alert('Sos dueño del auto ;), OK, sigamos ;)');
//         break;
        
//         case 2:
//             alert('El auto que queres asegurar no es tuyo. OK, sigamos :)');
//             break;
            
//             case 3: 
//             alert('El auto que queres asegurar es de la empresa. OK, sigamos :)');
//             break;
//         }
        
//     }
//     titularidadAuto();



// ///////////////////////////////////////////////////////////////////////
// /////////////////////// DESAFIO 5 ////////////////////////////////////
// /////////////////////////////////////////////////////////////////////

// function Auto (_modelo, _anio) {

//     this.modelo = _modelo;
//     this.anio = _anio;

//     this.getModelo = function () {
//         return modelo;
//     }

//     this.getAnio = function () {
//         return anio;
//     }

// }

// const modelo = prompt('Ingrese el modelo de su auto');
// const anio = prompt('Ingrese el año');

// let nuevoAuto = new Auto (modelo, anio);

// if ( nuevoAuto.modelo <= 1990) {
//     alert ('Tu auto no paga patente, y cuenta con el beneficio de auto vintage ;)');
// }else {
//     alert ('Tu auto cuenta con acceso a posibles descuentos en nuestra tienda online'); 

// }

// if ( nuevoAuto.modelo == 'Ford'|| nuevoAuto.modelo == 'Chevrolet' || nuevoAuto.modelo == 'Fiat'|| nuevoAuto.modelo ==  'Volkswagen') {
//     alert ('Tu modelo se encuentra en el listado de los más asegurados aquí, estamos felices de que seas uno mas confiando en nosotros! ');
// }else {
//     if( confirm(`Confirmas que tu modelo es ${modelo}?`))alert('OK, ya guardamos tu informacion! Dentro de poco recibiras un mail con toda la info');
//     else{
//         alert('Por favor volvé a ingresar los datos ;)');
//     }
// }

// console.log('Gracias por elegir FastQuotes para asegurar tu auto!');

///////////////////////////////////////////////////////////////////////
/////////////////////// DESAFIO 6 ////////////////////////////////////
/////////////////////////////////////////////////////////////////////

let seguro1 = {
    nombre: 'Seguro todo riesgo',
    precio: 1200,
    tipo: 'Con franquicia'
}

let seguro2 = {
    nombre: 'Seguro ante choques',
    precio: 1000,
    tipo: 'Con franquicia parcial'
}

let seguro3 = {
    nombre: 'Seguro ante terceros',
    precio: 900,
    tipo: 'Sin franquicia'

}

let misSeguros = [seguro1, seguro2, seguro3];

misSeguros.forEach( seguro => {
    console.log(seguro.nombre);
    
}) 

let eleccionDeSeguros = ['Seguro todo Riesgo', 'Seguro Ante Choques', 'Seguro ante terceros'];

alert('Junto con el mail de confirmacion te va a llegar info detallada de nuestros 3 tipos de Seguros! ;) ');

console.log(eleccionDeSeguros.join( " ; "));

