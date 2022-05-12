import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mi-juego',
  templateUrl: './mi-juego.component.html',
  styleUrls: ['./mi-juego.component.scss']
})
export class MiJuegoComponent implements OnInit {

  public puntos :number = 0;
  public pelota: any;
  public tiempo: number = 0;
  estaJugando : boolean = false;
  mensajeJugador : string ='';
 
  randNum :number =0;
  randNum2 :number =0;

  constructor() { }

  ngOnInit(): void {
    this.comenzarJuego();
  }
 
  comenzarJuego()
  {
   this.estaJugando = true;
   this.tiempo = 20;
   this.puntos = 0;
  }



 sumarPuntos(){
   if(this.estaJugando)
   {
     this.puntos++;
     this.pelota = document.getElementById("player");
     this.pelota.style.marginLeft = Math.round(Math.random()*270) + "px";
     this.pelota.style.marginTop = Math.round(Math.random()*270) + "px";
      if (this.puntos == 15) 
      {
      //  swal({
      //    title: 'Ganaste!😎',
      //    text: 'Un kpo, lo lograste!',
      //    icon: "success",
      //  })
      this.mensajeJugador = 'Ganaste 😎';
      //swal('Ganaste!😎');	
       this.estaJugando = false;
       this.tiempo =0;
      }
   }
}

  contador :any = interval(1000).subscribe((n)=>{
    if(this.tiempo > 0){
          this.tiempo--;
          if (this.tiempo == 0 && this.puntos < 15)
          {
            // swal({
            //         title: 'Perdiste!😞',
            //         text: 'Np, intenta otra vez.'
            // })
            //swal('Perdiste!😞');
            this.mensajeJugador = 'Perdiste😞';
            this.tiempo = 0;
            this.puntos = 0;
            this.estaJugando = false;
          }
        }
   });



}
