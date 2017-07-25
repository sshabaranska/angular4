import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { AuthService } from '../../../auth/auth.service';

@Injectable()
export class SigninService {

    constructor(private authService: AuthService,
                private router: Router) {}

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            (response: any) => {
                firebase.auth().currentUser.getToken()
                    .then(
                        (token: string) => {
                            this.authService.auth(token);
                            this.router.navigate(['/']);
                        }
                    )
            }
        )
        .catch(
            (error: any) => console.log(error)
        );
    }
}
