import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private authService: AuthService) {}
    ngOnInit() {
        firebase.initializeApp({
            apiKey: "AIzaSyCKBR2v5sL91OTah8qB9EcBV818FphLN_w",
            authDomain: "angular4-452c6.firebaseapp.com"
        });
    }
}
