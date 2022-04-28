import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/Usuario';
import { AuthService } from 'src/app/servicios/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  responseMessage : string ='';
  miUsuario : Usuario = new Usuario();


  constructor(private authService:AuthService, private router: Router) {

  }

  ngOnInit(): void {
  }


    
  Ingresar(){
    try{
      console.log(this.miUsuario);
      const {email,contrasenia} = this.miUsuario;
      this.authService.logIn(email,contrasenia)
      .catch(err =>{
        //this.responseMessage = err.message;
        switch(err.code)
        {
          case 'auth/user-disabled':
            this.responseMessage= 'Usuario deshabilitado.';
            break;
          case 'auth/user-not-found':
            this.responseMessage= 'Usuario no encontrado.';
            break;       
          case 'auth/wrong-password':
            this.responseMessage= 'Contrasenia incorrecta.';
            break;  
          case 'auth/invalid-email':
           this.responseMessage= 'Email invalido.';
            break;     
            //auth/weak-password       
        }
        console.log('Error en login A: ',err);
      })
      .then(res=>{
        console.log("Se logueo el usuario",res);
        if(res !=null )
        {
          let usuarioJson : any = {
            email : this.miUsuario.email,
            date: new Date() 
          }
          this.authService.SendUserLog(usuarioJson);
          this.router.navigate(['home']);
        }
      }); 

    }catch(err){
      console.log("Error ingresar",err);
    }
  }

  CompletarDatos(){
    this.miUsuario.email='invitado@hotmail.com'
    this.miUsuario.contrasenia = '123456'
  }

  IrAlRegistro(){
    this.router.navigate(['registro']);
  }




  

}
