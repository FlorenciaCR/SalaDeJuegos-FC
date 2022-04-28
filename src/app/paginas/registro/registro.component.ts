import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuario } from 'src/app/clases/Usuario';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GenericDialogComponent } from 'src/app/dialogs/generic-dialog/generic-dialog.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  responseMessage : string ='';
  miUsuario : Usuario = new Usuario();

  constructor(private authService:AuthService,
              private router : Router,
              private errorDialog : MatDialog
             ) 
  {
  }

  ngOnInit(): void {
  }

  Registrar(){
      const {email,contrasenia} = this.miUsuario;
      this.authService.register(email,contrasenia)
      .catch(err =>{
        //this.responseMessage = err.message;
        switch(err.code)
        {
          case 'auth/email-already-in-use':
            this.responseMessage= 'Email ya registrado.';
            break;
          case 'auth/invalid-email':
            this.responseMessage= 'Email invalido.';
            break;       
          case 'auth/operation-not-allowed':
            this.responseMessage= 'Operacion no valido xd';
            break;      
            //auth/weak-password       
        }
        console.log('Error en el registro A: ',err);
      })
      .then(res=>{
        console.log("Se registro el usuario",res);
        if(res !=null )
        {
          this.router.navigate(['home']);
        }
      });      
  }

  IrAlLogin(){
    this.router.navigate(['login']);
  }

}
