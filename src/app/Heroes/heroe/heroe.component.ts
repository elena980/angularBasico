import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre : string = 'Ironman';
    edad   : number = 45;

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`; // seria lo mismo que return this.nombre + '-' + this.edad.toString()
    }

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman'
    }
    cambiarEdad(): void {
        this.edad = 24;
    }

}