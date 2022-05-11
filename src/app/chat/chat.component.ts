import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AuthService } from '../servicios/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  mensaje : string='';
  mensajes : any[] = []
  angularFirestoreCollection : AngularFirestoreCollection<any> | undefined;   

  usuarioLogueado : any;

  constructor(private auth : AuthService, private angularFirestore : AngularFirestore) 
  { 
    this.angularFirestoreCollection = this.angularFirestore.collection<any>('chats', ref => ref.orderBy('fecha', 'asc').limit(25)); 
    this.angularFirestoreCollection.valueChanges().subscribe(x => {
      this.mensajes = x
    })
    if(this.mensajes == null){
      this.mensajes = []
    }
  }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(usuario=>{
      this.usuarioLogueado = usuario;
    })
  }

  enviarMensaje()
  {
    let fecha = (moment(new Date())).format('DD-MM-YYYY HH:mm:ss')

    let mensaje =  {
      usuario:{
        id: this.usuarioLogueado.uid,
        // nombre: this.usuarioLogueado.nombre,
        email: this.usuarioLogueado.email,
      },
      texto:this.mensaje,
      fecha: fecha
    }
    // this.mensajes.push(mensaje);
    this.angularFirestoreCollection?.add(mensaje);
    this.mensaje = ""
  }
}
