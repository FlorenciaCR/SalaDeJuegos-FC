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
import { JuegosMenuComponent } from './paginas/juegos-menu/juegos-menu.component';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "src/environments/environment";
import { NavBarComponent } from './paginas/nav-bar/nav-bar.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GenericDialogComponent } from './dialogs/generic-dialog/generic-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';



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
   JuegosMenuComponent,
   NavBarComponent,
   GenericDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
