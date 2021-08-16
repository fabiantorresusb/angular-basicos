import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    // *** Indica que COMPONENTES, PIPES, ENTRE OTROS tiene este módulo
    declarations: [
        ContadorComponent   
    ],
    // *** Indicar que elementos quiero que sean visibles fuera de este modulo  ***
    // Los [export] indican que elementos quiero hacer PUBLICOS para poderlos utilizar en otros archivos
    exports: [
        ContadorComponent
    ] // ,
    // *** No se define el módulo CommonModule ya que en el componente contador no usamos DIRECTIVAS *** 
    /*
    imports: [

    ]*/
})
export class ContadorModule {

}