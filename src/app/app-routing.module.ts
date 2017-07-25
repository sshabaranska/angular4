import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './components/main/main.module#MainModule' },
  { path: 'signin', loadChildren: './components/account/signin/signin.module#SigninModule'},
  { path: 'signup', loadChildren: './components/account/signup/signup.module#SignupModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
