import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonajeswComponent } from './personajesw/personajesw.component';
import { AppRoutingModule } from './app-routing.module';
import { ListadoswComponent } from './listadosw/listadosw.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonajeswComponent,
    ListadoswComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
