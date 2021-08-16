import { Component } from "@angular/core";

@Component({
    // *** Selector empieza con [app] para indicar que es personalizado *** 
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'Ironman';
    edad  : number = 45;

    // *** No es un método es un GETTER ***
    // [Se invoca directamente si los () ]
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        // *** template literal ***
        // [Esto es propio de JavaScript MAS PRÁCTICO]
        return `${ this.nombre } - ${ this.edad }`;
        // *** Es lo mismo que la línea de arriba
        // return this.nombre + ' - ' + this.edad;
    }

    cambiarNombre(): void {
        // No es necesario colocar ; al final de una sentencia en TS
        // *** Se recomienda como BUENA PRACTICA
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;    
    }
}