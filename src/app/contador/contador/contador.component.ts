// *** Usamos el @decorador para transformar esta simple Clase en un componente propio de Angular
import { Component } from "@angular/core";      

// *** Colocamos la palabra [export] porque quiero utilizar esta clase fuera de este archivo ***

@Component({
    selector: 'app-contador',
    // *** En este caso usamos una plantilla normal ***
    template: `
        <h1>{{ titulo }}</h1>
        <button (click)="acumular(base)">+{{ base }}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base)">-{{ base }}</button>
        <h3>La base es: <strong>{{ base }}</strong></h3>
    `
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }
}