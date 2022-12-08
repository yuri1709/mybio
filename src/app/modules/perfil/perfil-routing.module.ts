import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PerfilListComponent } from "./perfil-list/perfil-list.component";

const routes: Routes = [
    { path: '', component: PerfilListComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PerfisRoutingModule {}