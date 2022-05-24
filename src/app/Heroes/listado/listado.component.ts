import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan América'];
  heroeBorrado: string = '';
  contadorHeroes: number = 0;

  borrarHeroe() {
    console.log('borrando..');
    /* this.heroes.shift(); */

    /* // podemos ver en la consola los heroes que se van borrando con el siguinte código:
    const heroeBorrado = this.heroes.shift();
    console.log(heroeBorrado);
    */
    this.heroeBorrado = this.heroes.shift() || '';
    this.contadorHeroes = this.heroes.length;
  }


}
