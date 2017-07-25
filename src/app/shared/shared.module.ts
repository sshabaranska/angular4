import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        //HeaderModule
        AppRoutingModule
    ],
    exports: [HeaderComponent]
})
export class SharedModule { }
