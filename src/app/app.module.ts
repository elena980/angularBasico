import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './Heroes/heroes.module';

// Tarea: Crear un módulo llamado ContadorModule (declaraciones y exportaciones)
// al fin y al cabo @NgModule es un decorador que da más funcionalidad a la clase AppModule
@NgModule({
  declarations: [       // para que se vea en el html hay que declarar los módulos aquí, digamos que creas una "etiqueta personalizada"
    AppComponent
  ],
  imports: [
    BrowserModule,   // IMPORTANTE para el app.module.ts "general" hay que importar todas los módulos que se haya hecho en los microfronts
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
