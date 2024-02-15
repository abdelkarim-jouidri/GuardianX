import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})




export class AuthService {

  

  url : string = "http://localhost:8000/auth"

  isAuthenticated : boolean = false;
  roles : any;
  username : any;
  jwtToken !: string;

  constructor(private http : HttpClient) { }

  login(username : string , password : string){
      let options = {
        headers : new HttpHeaders().set("Content-type", "application/json")
      }
      let params =  new HttpParams().set("username", username).set("password",password);
      return this.http.post(this.url+"/login", {"username": username, "password": password})
  }

  loadUser(response: any) {
    let token = response['token'];
    console.log(token)
  }
  
}
