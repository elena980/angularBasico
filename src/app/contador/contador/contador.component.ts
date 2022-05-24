import { Component } from "@angular/core"; // para crear un component hay que importar Compoonent de angular core


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1> 

        <button (click)=" acumular(-1) "> - 1 </button>
        <span> {{numero}} </span>
        <button (click) = " acumular(1) "> + 1 </button>
    `
})
export class ContadorComponent{
    title = 'Contador app';                            // nombre de la app
    numero: number = 10;
  
    /* sumar(){
      this.numero += 1;
    }
  
    restar(){
      this.numero -= 1;
    } */
  
    // metemos la resta y la suma en una única función
    acumular(valor: number){
      this.numero += valor;
    }
  
    base: number = 5;  // (tarea)

}