import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServerService {
    constructor(private http:Http) {}

    storeServers (servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://angular4-452c6.firebaseio.com/data.json', servers, {headers: headers});
    }
}
