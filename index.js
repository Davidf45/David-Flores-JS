//Inscripción Futbol 7
//La idea es de crear una plataforma de futbol 7 para que 14 personas se unan para jugar futbol y se encuentren en algun punto de la ciudad.
//Dichas personas tienen que ser necesariamente mayores de edad y cada equipo esta conformado por 7 personas.
//Se ha creado que cada persona cuenta con un equipo y cancha asignada
//A su vez se debe escoger un metodo de pago.


const boton = document.getElementById("boton");
boton.addEventListener('click', function verificarEdad(){


function verificarEdad(){

    let EDAD = prompt("¿Todos son mayores de edad? (responder con si o no)");
     
        if((EDAD == "si") || (EDAD == "Si") || (EDAD == "SI")){

            for(let i = 1 ; i <=7; i ++){
            
            let ingresoDeNombre = prompt("Nombres de tus amiguitos:");
            console.log("Hola, " + ingresoDeNombre + " .Estás Inscrito. Te esperamos!")
            
            function Jugadores(nombre, equipo, cancha){
            
                this.nombre = nombre
                this.equipo = equipo
                this.cancha = cancha
            }
            const jugador= new Jugadores(ingresoDeNombre,"Estarás en el equipo: Blanco","Te esperamos en la cancha #10")
            console.log(jugador);

            const jugadoresArray =[
                new Jugadores(ingresoDeNombre,"Estarás en el equipo: Blanco","Te esperamos en la cancha #10"),
               
            ]
            const nuevosJugadores = document.getElementById("nuevosJugadores"); 
            
            function agregarCards(lista){
                lista.forEach(Jugadores =>{
                    const card = document.createElement("div");
                    card.classList.add("card");
                    card.innerHTML = `
                                        <h2>Hola! ${Jugadores.nombre}</h2>
                                        <p>Equipo: ${Jugadores.equipo}</p>
                                        <p>Cancha: ${Jugadores.cancha}</p>
                                        `
                nuevosJugadores.appendChild(card);
                
                })
            }
            
            agregarCards(jugadoresArray);

            }
        }else{
            console.log("No pueden jugar, por niñitos.")
            alert('No pueden jugar, por niñitos.')
        }
        
        
     }


const resultadoEdad = verificarEdad();
console.log(resultadoEdad);
})

let metodoPago = ["Tarjeta de credito o debito", "Transferencia", "Billetera digital", "Paypal"];

let Pago = metodoPago.slice(1,2);

console.log(Pago + ", es tu metodo de pago");
localStorage.setItem("Metodo de Pago",Pago);





