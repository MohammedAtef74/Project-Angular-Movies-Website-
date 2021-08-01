import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient : HttpClient , private _Router:Router) {
 
    if(localStorage.getItem('userToken') != null)
    {
        this.saveCurrentUser();
    }

   }
 
  currentUser = new BehaviorSubject(null) ;

  saveCurrentUser()
  {
    let token:any = localStorage.getItem('userToken');
     this.currentUser.next(jwtDecode(token)) ;
     console.log(this.currentUser);
  }
  
  register(FormData:any):Observable<any>

  {
   return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',FormData)
  }

  login(FormData:any):Observable<any>

  {
   return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',FormData)
  }
   
  logout()
  {
      this.currentUser.next(null);
      localStorage.removeItem('userToken');
      this._Router.navigate(['login'])
  }

}
