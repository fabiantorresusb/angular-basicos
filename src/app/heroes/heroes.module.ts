import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


// *** Hacemos uso del @decorador @NgModule ***
@NgModule({
    // *** Indica que COMPONENTES, PIPES, ENTRE OTROS tiene este módulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // *** Indicar que elementos quiero que sean visibles fuera de este modulo  ***
    // Los [export] indican que elementos quiero hacer PUBLICOS para poderlos utilizar en otros archivos
    // Ejemplo: ListadoComponent  => <app-listado></app-listado> para utilizarlo en app.component.html
    exports: [
        ListadoComponent
    ],
    // *** Aqui van MODULOS. Usualmente en los imports se colocan solo MODULOS ***
    imports: [
        // En este caso importamos el CommonModule y no el BrowserModule como en el
        // archivo principal app.module.ts
        // *** Ofrece directivas como el *ngIf y el *ngFor, entre otras caracteristicas ***
        CommonModule 

    ]
})
export class HeroesModule {

}