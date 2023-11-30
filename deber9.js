//Diseñar una función constructora que acepte un apodo, 
//un número de vidas y un valor de carta (del 1 al 7). 
//Además, se requiere incluir dos métodos como propiedades:
// uno para reducir las vidas y otro para mostrar el apodo junto con la cantidad de vidas restantes

`use strict`

function jugador(apodo, vidas, valorCarta) {
   
    this.apodo = apodo;
    this.vidas = vidas;
    this.valorCarta = valorCarta;
  
    this.reducirVidas = function (cantidad) {
      this.vidas = this.vidas+cantidad;
      //if (this.vidas <= 1) 

      alert(`Ingrese su apodo${this.apodo} perdió ${cantidad} vidas! Vidas restantes: ${this.vidas}`);
    };
  
    
    this.mostrarInfo = function () {
      alert(`Apodo: ${this.apodo}, Vidas restantes: ${this.vidas}`);
    }
  }
  

  let jugador1 = new jugador(Jugador1, 5, 3);
  

  jugador1.reducirVidas(2);
  jugador1.mostrarInfo();

 