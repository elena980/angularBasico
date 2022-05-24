import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    declarations: [           // declaraciones dice qué componentes son los que tenemos
        HeroeComponent,
        ListadoComponent
    ],
    exports: [                // export son para las cosas que queremos hacer públicas
        ListadoComponent
    ],
    imports: [                // sólo se meten módulos, son los que queremos meter dentro
        CommonModule
    ]

})
export class HeroesModule {

}