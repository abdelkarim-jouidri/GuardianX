import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})




export class AuthService {

  

  url : string = "http://localhost:8000/auth"

  isAuthenticated : boolean = false;
  roles : any;
  username : any;
  jwt !: string;

  constructor(private http : HttpClient) { }

  login(username : string , password : string){
      let options = {
        headers : new HttpHeaders().set("Content-type", "application/json")
      }
      let params =  new HttpParams().set("username", username).set("password",password);
      return this.http.post(this.url+"/login", {"username": username, "password": password})
  }

  loadUser(response: any) {
    this.isAuthenticated = true;
    this.jwt = response['token'];
    let decodedJwt : any = jwtDecode(this.jwt);
    this.username = decodedJwt.username;
    this.roles = decodedJwt.aut.split(" ");
  }

  getJwtToken(){
    return this.jwt;
  }
  
}
