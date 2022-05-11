import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any> | undefined;   
  
  constructor(private angularFirestore : AngularFirestore) 
  {
  }

  obtenerMensajes():AngularFirestoreCollection<any>
  {
    this.itemsCollection = this.angularFirestore.collection<any>('chats'); 
    return this.itemsCollection
  }

  guardarMensaje(mensaje:any, )
  {
    return this.itemsCollection?.add(mensaje);
  }

}