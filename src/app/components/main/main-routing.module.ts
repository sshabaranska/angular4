import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { AuthGuard } from '../../auth/auth.guard.service'

const mainRoutes: Routes = [
    { path: '', component: MainComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})
export class MainRoutingModule {}
