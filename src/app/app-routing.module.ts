import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { EncuestaComponent } from './paginas/encuesta/encuesta.component';
import { ErrorComponent } from './paginas/error/error.component';
import { HomeComponent } from './paginas/home/home.component';
import { JuegosMenuComponent } from './paginas/juegos-menu/juegos-menu.component';
import { LoginComponent } from './paginas/login/login.component';
import { QuienSoyComponent } from './paginas/quien-soy/quien-soy.component';
import { RegistroComponent } from './paginas/registro/registro.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'quienSoy', component:QuienSoyComponent},
  {path:'chat', component: ChatComponent},
  {path:'encuesta', component: EncuestaComponent},
  {path:'', redirectTo: 'login',pathMatch:'full'},
  {
    path: "juegos",
    loadChildren: () => import('./juegos/juegos-routing.module').then(m => m.JuegosRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
