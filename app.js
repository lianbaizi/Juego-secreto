//document:         el metodo permite acceder a todo tipo de elemento.
//querySelector:    Selecciona solo ese objeto
//                  como parametro al elemento tipo h1.
//getElementById:   selecciona el elemento(en este caso un id ='valor_us' de HTML) 
//                  dorne seleccionara el valor con value
//includes:         Verifica si el valor existe en la lista

let numero_secreto = 1;
let intentos = 0;
let lista_numeros_sorteados = [];
let numero_maximo = 10;

//Creando funcion para crear titulo 
function asignar_texto_elemento(elemento, texto){
    //Seleccionando el elemento y almacenando en la variable elementoHTML
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificar_intento(){
    let numero_de_usuario = parseInt(document.getElementById('valor_us').value);

    //console.log(numero_secreto)
    //console.log(intentos);
    if (numero_de_usuario === numero_secreto){
        asignar_texto_elemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces' }!!`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    }
    else{
        //Caso si el usuario no acierta
        if(numero_de_usuario > numero_secreto){
            asignar_texto_elemento('p','El numero es menor ');
        }
        else{
            asignar_texto_elemento('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    return;
    }
}

function reiniciar_juego(){
    //Necesitamos limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    
    //Generar el numero aleatorio
   
    //inicializar el numero intentos
    condiciones_iniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //Iniciar el numero de intentos

}
function limpiarCaja(){
    //capturamos el id del input en HTML
    document.querySelector('#valor_us').value='';

}
function generar_numero_secreto(){
   
    let numero_generado =  Math.floor(Math.random()*numero_maximo)+1;

    console.log(numero_generado);
    console.log(lista_numeros_sorteados);
    // si ya se sorteo todos los numeros hasta numero_maximo:
    if (lista_numeros_sorteados.length ==  numero_maximo){
        asignar_texto_elemento('p','Ya se sortearon todos los numeros posibles ');
    }else{
         // --> si el numero generadp ensta incluido en la lista
         if (lista_numeros_sorteados.includes(numero_generado)){
            return generar_numero_secreto();
        }else{
            lista_numeros_sorteados.push(numero_generado);
            return numero_generado;
        }
    }
    
}
function condiciones_iniciales(){
    asignar_texto_elemento('h1','Juego del Numero secreto!');
    asignar_texto_elemento('p',`Indica un numero del 1 al ${numero_maximo}`);
    numero_secreto = generar_numero_secreto();
    intentos = 1;
}

condiciones_iniciales();

