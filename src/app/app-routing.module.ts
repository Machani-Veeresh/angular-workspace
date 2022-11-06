import { NgModule } from "@angular/core";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";

import { Routes, RouterModule } from "@angular/router";
import { ChildAComponent } from "./child-a/child-a.component";
import { ChildBComponent } from "./child-b/child-b.component";
import { YourGaurdGuard } from "./your-gaurd.guard";

const routes: Routes = [
    {
        path: 'first-component/:id', component: FirstComponent,
        children: [
            { path: 'child-a', component: ChildAComponent }, {
                path: 'child-b', component: ChildBComponent
            }]
    },
    {
        path: 'second-component', component: SecondComponent, canActivate: [YourGaurdGuard],
    },
    {
        path: '**', component: FirstComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }