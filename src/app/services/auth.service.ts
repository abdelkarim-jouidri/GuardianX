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

  constructor(private http : HttpClient) {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      this.isAuthenticated = true;
      this.jwt = token;
      const decodedJwt: any = jwtDecode(this.jwt);
      this.username = decodedJwt.username;
      this.roles = decodedJwt.aut.split(" ");
    }
   }

  login(username : string , password : string){
  
      return this.http.post(this.url+"/login", {"username": username, "password": password});
  }

  register(username : string , password : string){
    return this.http.post(this.url+"/register", {"username": username, "password": password})
  }

  loadUser(response: any) {
    this.isAuthenticated = true;
    this.jwt = response['token'];
    let decodedJwt : any = jwtDecode(this.jwt);
    this.username = decodedJwt.username;
    this.roles = decodedJwt.aut.split(" ");
    localStorage.setItem('jwt_token', this.jwt);

  }

  getJwtToken(){
    return this.jwt;
  }

  logout(){
    this.isAuthenticated = false;
    this.jwt = '';
    this.username = undefined;
    this.roles = undefined;
    localStorage.removeItem('jwt_token');
  }
  
}
