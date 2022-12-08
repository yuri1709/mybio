import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { PerfilModule } from "../perfil/perfil.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [ 
        HomeComponent,
    ],
    imports: [ 
        SharedModule, 
        HomeRoutingModule, 
        PerfilModule
    ],
    exports: []
})
export class HomeModule {}