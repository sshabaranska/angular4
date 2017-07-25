import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthService {

    auth(token: string) {
        Cookie.set('token', token);
        //$cookies.put('token', token);
        //$http.defaults.headers.common['Authorization'] = 'Bearer ' + $cookies.get('token');
    }
    unAuth() {
        Cookie.set('token', null);
        firebase.auth().signOut();
        //$cookies.remove('token');
        //$http.defaults.headers.common['Authorization'] = '';
    }

    getToken () {
        return Cookie.get('token');
    }

    isUserAuthorized() {
        return Cookie.get('token') !== 'null';
    }
}
