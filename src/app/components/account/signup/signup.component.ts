import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SignupService } from './signup.service';
import { User } from '../../../models/user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    user: User;
    constructor(private signupService: SignupService) { }

    ngOnInit() {}

    onSignup(form: NgForm) {
        const name = form.value.name;
        const email = form.value.email;
        const password = form.value.password;
        this.user = new User(name, email, password);
        this.signupService.signupUser(this.user);
    }
}
