import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { ErrorComponent } from './paginas/error/error.component';
import { QuienSoyComponent } from './paginas/quien-soy/quien-soy.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './juegos/mayor-menor/mayor-menor.component';
import { JuegosrComponent } from './juegos/juegosr/juegosr.component';



@NgModule({
  declarations: [
   AppComponent,
   LoginComponent,
   HomeComponent,
   ErrorComponent,
   QuienSoyComponent,
   RegistroComponent,
   PreguntadosComponent,
   AhorcadoComponent,
   MayorMenorComponent,
   JuegosrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
