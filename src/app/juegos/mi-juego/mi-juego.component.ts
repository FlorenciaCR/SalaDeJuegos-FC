import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-juego',
  templateUrl: './mi-juego.component.html',
  styleUrls: ['./mi-juego.component.scss']
})
export class MiJuegoComponent implements OnInit {

  puntos :number = 0;
  tiempo :number= 60;
  necesarios :number= 30;
  randNum :number =0;
  randNum2 :number =0;

  constructor() { }

  ngOnInit(): void {
  }

//no anda :()
a : any = interval(1000).subscribe(()=>{
  this.restarTiempo;
})
 //setInterval(restarTiempo,1000);
 
 sumarPuntos(){
   this.puntos++;
   //document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   this.randNum =  Math.round(Math.random()*300);
   this.randNum2 =  Math.round(Math.random()*300);

  //  document.getElementById("player").style.marginTop =this.randNum + 'px';
  //  document.getElementById("player").style.marginLeft =this. randNum2 + 'px';
   if (this.puntos == 30) {
   	alert("ganaste");
   }
}


restarTiempo() {
	this.tiempo--;
	//document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (this.tiempo == 0) {
		alert("perdiste maestro");
		this.tiempo = 0;
		this.puntos = 0;
	}
}



}
