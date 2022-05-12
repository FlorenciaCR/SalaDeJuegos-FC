import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';


@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent implements OnInit {

  estaJugando: boolean = false;
  puntos: number = 0;
  juegoPausado: boolean=false;
  todosLosPaisesApi : any=[];
  paisElegidoRespuesta : any;
  paisesOpciones : any =[];
  mensajeJugador : string ='';

  constructor(private apiPais : ApiService) 
  {
  }

  ngOnInit(): void 
  {
    setTimeout(() => {}, 50);
    this.apiPais.getPaises().subscribe(paises =>{
      this.todosLosPaisesApi = paises;
      //this.puntos=0;
      this.mensajeJugador='';
      console.log(this.todosLosPaisesApi)
    })
  }

  comenzarJuego()
  {
    this.mensajeJugador  ='';
    this.paisElegidoRespuesta = null;
    this.paisesOpciones = [];

    console.log('hola xd');
    for (let i = 0; i < 4; i++)
    {
      var numeroRandPais = Math.floor(Math.random() * (249 - 0) + 0);
      console.log('numeroPaisRandom '+ numeroRandPais);
      if(i ==0)
      {
        this.paisElegidoRespuesta = this.todosLosPaisesApi[numeroRandPais];
        console.log('pais'+this.paisElegidoRespuesta);
      }
      this.paisesOpciones.push(this.todosLosPaisesApi[numeroRandPais]);
    }
    console.log('pais elegido: '+this.paisElegidoRespuesta);
  }

  nuevoJuego()
  {
    this.puntos = 0;
    this.estaJugando = true;
    this.comenzarJuego();
  }

  elegirPais(pais: any)
  {
    if (pais == this.paisElegidoRespuesta) {
      console.log('gano');
      this.puntos++;
      this.comenzarJuego();
    } else {
      this.detenerJuego();
    }
  }

  detenerJuego()
  {
    this.estaJugando = false;
    this.juegoPausado = !this.estaJugando;
    // swal({
    //   title: 'Perdiste!😞',
    //   text: 'Np, intenta otra vez.'
    // })
    //swal('Perdiste!😞');
    this.mensajeJugador = 'Perdiste😞';
    //this.toastr.error('Intentalo de nuevo', '¡Perdiste!');
  }

}
