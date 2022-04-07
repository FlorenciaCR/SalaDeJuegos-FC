import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { JuegosrComponent } from './juegos/juegosr/juegosr.component';
import { MayorMenorComponent } from './juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { ErrorComponent } from './paginas/error/error.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { QuienSoyComponent } from './paginas/quien-soy/quien-soy.component';
import { RegistroComponent } from './paginas/registro/registro.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'quienSoy', component:QuienSoyComponent},
  {path:'', redirectTo: '/home',pathMatch:'full'},
  {path:'juegos', component:JuegosrComponent, children:[
    {path:'mayorMenor',component:MayorMenorComponent},
    {path:'ahorcado',component:AhorcadoComponent},
    {path:'preguntados',component:PreguntadosComponent}
  ]},
  {path:'**', component:ErrorComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
