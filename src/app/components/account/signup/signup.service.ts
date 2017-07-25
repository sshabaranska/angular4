import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../models/user.model';


@Injectable()
export class SignupService {

    constructor(private authService: AuthService,
                private router: Router) {}

    signupUser(user: User) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(
                (response: any) => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getToken()
                        .then(
                            (token: string) =>  {
                                this.authService.auth(token);
                            }
                        )
                }
            )
            .catch(
                (error: any) => console.log(error)
            );
    }
}
