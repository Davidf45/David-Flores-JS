//Inscripción Futbol 7
//La idea es de crear una plataforma de futbol 7 para que 14 personas se unan para jugar futbol y se encuentren en algun punto de la ciudad.
//Dichas personas tienen que ser necesariamente mayores de edad y cada equipo esta conformado por 7 personas.


function verificarEdad(){

    let EDAD = prompt("¿Todos son mayores de edad? (responder con si o no)");
     
        if((EDAD == "si") || (EDAD == "Si") || (EDAD == "SI")){

            for(let i = 1 ; i <=7; i ++){
            
            let ingresoDeNombre = prompt("Nombres de tus amiguitos:");
            console.log("Hola, " + ingresoDeNombre + " .Estas Inscrito. Te esperamos!")
                
            }
        }else{
            console.log("No pueden jugar, por niñitos.")
        }
        
     }

const resultadoEdad = verificarEdad();
console.log(resultadoEdad);

