import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
//import { HttpClient } from 'http-client';
//import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http:Http) { }
Validateuser(data){
 var userData ={

            phonenumber : data.phonenumber,
            EmailId : data.EmailId
           
 };
 var head = new Headers();
head.append('Content-Type','application/json');
head.append('AppClientId','sjjfdjakjk');
//head.append('Access-Control-Allow-Origin','*');

let opts:RequestOptionsArgs = { headers: head };
 console.log(userData);
 console.log(head);
// let options = new RequestOptions({ headers: headers });

 return this.http.post('http://localhost:5000/api/ValidateUser',userData,opts)
 .map(
   (response:Response)=>response.json()
 )
}
}
