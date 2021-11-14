import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { Global } from './global';
@Injectable()
export class EmployeeService {

    public url : string;
    constructor(
        private _http : HttpClient
    )
    {
        this.url = Global.url;
    }

    getAll():Observable<any>{
        let token = localStorage.getItem('token');
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json; charset=utf-8',
            'Accept'       : 'application/json',
            'Authorization' : 'Bearer '+token
        });
        //console.log(headers);
        return this._http.get(this.url+'Employee',{headers : headers});
    }

    getById(Id):Observable<any>{
        let token = localStorage.getItem('token');
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json; charset=utf-8',
            'Accept'       : 'application/json',
            'Authorization' : 'Bearer '+token
        });
        //console.log(headers);
        return this._http.get(this.url+'Employee/'+Id,{headers : headers});
    }

    post(employee):Observable<any>{
        let params = JSON.stringify(employee);
        let token = localStorage.getItem('token');
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json; charset=utf-8',
            'Accept'       : 'application/json',
            'Authorization' : 'Bearer '+token
        });
        console.log(params,headers);
        return this._http.post(this.url+'Employee',params, {headers : headers});
    }

    put(employee):Observable<any>{
        let params = JSON.stringify(employee);
        let token = localStorage.getItem('token');
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json; charset=utf-8',
            'Accept'       : 'application/json',
            'Authorization' : 'Bearer '+token
        });
        return this._http.put(this.url+'Employee',params, {headers : headers});
    }
}