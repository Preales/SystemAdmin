import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Global } from './global';

@Injectable()
export class UserService {

    public url : string;
    constructor(
        private _http : HttpClient
    )
    {
        this.url = Global.url;
    }

    Login(user):Observable<any>{
        let params = JSON.stringify(user);
        /*let headers = new HttpHeaders({
            'Content-Type' : 'application/json; charset=utf-8',
            'Accept'       : 'application/json'
        });*/

        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'User/Login',params, {headers : headers});
    }
}