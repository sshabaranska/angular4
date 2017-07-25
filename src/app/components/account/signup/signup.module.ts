import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { SignupService } from './signup.service';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SignupRoutingModule
    ],
    providers: [
        SignupService
    ]
})
export class SignupModule { }
