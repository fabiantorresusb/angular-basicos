import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// *** COMPONENTES ***
import { AppComponent } from './app.component';

// *** MODULOS ***
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  // **** Aquí se definen todos los componentes ****
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule, // Nuevo modulo creado
    ContadorModule // Nuevo modulo creado
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }