

function verificarEdad(){
    
    const EDAD = parseInt(prompt("Ingresa tu edad"));
     
        if(EDAD >= 18){

            let ingresoDeNombre = prompt("Nombre:");
            console.log("Hola, " + ingresoDeNombre + " .Te esperamos!")
            
            
        }else{
            console.log("No puede jugar") 
        }
        
        let numero = 0;
            while(numero < 7){
                verificarEdad();
                numero ++;
        
            }
     }

     verificarEdad();


