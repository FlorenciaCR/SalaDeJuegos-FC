import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss']
})
export class MayorMenorComponent implements OnInit {
  comenzar:boolean = false;
  puntaje:number = 0;
  mensaje:string = "";
  mensaje2:string = "";
  intentos:number = 3;
  cartaNumber: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,14,15];
  carta: number =0;
  cartaSig: number=0;
  
  constructor() { }

  ngOnInit(): void {
    this.comenzarJuego();
  }
  
  comenzarJuego(){
    this.comenzar = true;
    this.carta = this.cartaNumber[Math.floor(Math.random() * this.cartaNumber.length)];
    console.log("Mazo: " + this.carta);
  }

  sigCarta(carta : number , opcion : string){
    this.cartaSig = this.cartaNumber[Math.floor(Math.random() * this.cartaNumber.length)];

    //Vemos si es mayor o menor.
    //y sumamos o restamos puntos.
    if(this.cartaSig > carta){
      if(opcion == 'mayor'){
        this.puntaje = this.puntaje + 1;
      }
    }
    if(this.cartaSig < carta){
        if(opcion == 'menor'){
        this.puntaje = this.puntaje + 1;
      }
    }
    if(this.cartaSig > carta){
      if(opcion == 'menor'){
        this.intentos = this.intentos - 1;
      }
    }
    if(this.cartaSig < carta){
      if(opcion == 'mayor'){
        this.intentos = this.intentos - 1;
      }
    }
    if(this.intentos == 0){
      //mensaje
      // swal({
      //   title: 'Perdiste! 😞',
      //   text: 'Np,intenta otra vez!'
      // })
      swal('Perdiste!')
      this.mensaje2 = "Puntos: " + this.puntaje;
    }

    if(this.puntaje ==3)
    {
      // swal({
      //   title: 'Ganaste! 😎',
      //   text: 'Un kpo'
      // })
      swal('Ganaste!😎');
      this.comenzar = false;
      this.mensaje = "";
      this.mensaje2 = "";
      this.puntaje = 0;
      this.intentos = 0;
    }

    //mandamos la carta que sigue.
    this.carta = this.cartaSig;
    console.log("NuevaCarta: " + this.carta);
  }

  mayorMenor(opcion :string ){
    this.sigCarta(this.carta, opcion);
  } 

  reintentarJuego(){
    this.comenzar = false;
    this.mensaje = "";
    this.mensaje2 = "";
    this.puntaje = 0;
    this.intentos = 3;
  }
}
