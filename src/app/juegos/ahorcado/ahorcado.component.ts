import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/Usuario';

import { Router } from '@angular/router';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  letrasBotones = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  intentosRestantes : number = 6; 
  cantidadLetrasPalabra : string[] = [];
  palabras : string[] = ['hola', 'quiero', 'aprobar', 'laboratorio'];
  palabraAdivinar : string = '';
  numeroFoto : number = 0;
  estaJugando : boolean = false;
  mensajeJugador : string='';

  constructor() { }

  ngOnInit(): void {
    this.comenzarJuego();
  }

  

  comenzarJuego(){

    this.intentosRestantes = 6;
    this.numeroFoto = 0;
    this.palabraAdivinar = this.palabras[Math.round(Math.random() * (this.palabras.length - 1))];
    this.cantidadLetrasPalabra = Array(this.palabraAdivinar.length).fill('_');
    this.estaJugando = true;
   

  }

  letraElegida(letraApretada : string){
    if(this.estaJugando)
    {
      let flag : boolean = false;
      for(let i = 0; i < this.palabraAdivinar.length; i++){
        if(letraApretada.toLowerCase() == this.palabraAdivinar[i]){
          this.cantidadLetrasPalabra[i] = letraApretada;
          flag = true;
        }
      }
  
      if(!flag){
        this.intentosRestantes--;
        if(this.intentosRestantes == 0){
          this.numeroFoto++;
          this.detenerJuego();
        }else{
          this.numeroFoto++;
        }
      }
      //console.log(this.cantidadLetrasPalabra);
      this.estadoJugador();

    }
  }

  estadoJugador(){
    var gano=true;

    for (const i of this.cantidadLetrasPalabra) {
      if(i == "_"){
        gano=false;
      }
    }
    if(gano)
    { 

      setTimeout(() =>{
        // swal({
        //   title: 'Ganaste!😎',
        //   text: 'Un kpo, lo lograste!',
        //   icon: "success",
        // })
        //swal('Ganaste!😎');
        this.mensajeJugador='Ganaste!😎'
      }, 2000);
    }
  }

  detenerJuego(){
    this.estaJugando = false;
    setTimeout(() =>{
      // swal({
      //   title: 'Perdiste!😞',
      //   text: 'Np, intenta otra vez.'
      // })
     
      //swal('Perdiste!😞.');
      this.mensajeJugador='Perdiste!😞';
      this.comenzarJuego();
    }, 1000);

  }
  




  
 
  
}
