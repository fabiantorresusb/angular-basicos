import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';
  // heroeBorrado: string | undefined = '';
  borrarHeroe() {
    console.log('Borrando...');
    // *** remueve el primer elemento de un array ***
    // const heroeBorrado = this.heroes.shift();
    // console.log(heroeBorrado);
    // *** El operador || se encarga de definir '' cuando es undefined
    // MEJOR PRÁCTICA esta
    this.heroeBorrado = this.heroes.shift() || '';
    // *** Otra alternativa definir la variable como string | undefined
    // this.heroeBorrado = this.heroes.shift();
  }

}
