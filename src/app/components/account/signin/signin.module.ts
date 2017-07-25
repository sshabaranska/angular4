import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';
import { SigninService } from './signin.service';
import { SigninRoutingModule } from './signin-routing.module';

@NgModule({
    declarations: [
        SigninComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SigninRoutingModule
    ],
    providers: [
        SigninService
    ]
})
export class SigninModule { }
