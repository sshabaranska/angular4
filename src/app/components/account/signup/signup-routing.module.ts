import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';

const signupRoutes: Routes = [
    { path: '', component: SignupComponent }
];

@NgModule({
    imports: [RouterModule.forChild(signupRoutes)],
    exports: [RouterModule]
})
export class SignupRoutingModule {

}
