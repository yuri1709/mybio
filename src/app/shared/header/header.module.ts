import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "src/app/modules/home/home-routing.module";
import { PerfisRoutingModule } from "src/app/modules/perfil/perfil-routing.module";
import { HeaderComponent } from "./header.component";

@NgModule({
    declarations:[HeaderComponent],
    imports:[
        HomeRoutingModule, //para cada novo modulo, você vai precisar importar aqui o RoutingModule
        PerfisRoutingModule
    ],
    exports:[HeaderComponent]
})
export class HeaderModule {}