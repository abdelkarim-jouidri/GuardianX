import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin! : FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService){

  }

  ngOnInit(): void {
      this.formLogin = this.fb.group({
        username : this.fb.control(""),
        password : this.fb.control("")
      })
  }

  handleLogin(){
    console.log(this.formLogin.value)
    this.authService.login(this.formLogin.value.username, this.formLogin.value.password).subscribe({
      next : response => {

          this.authService.loadUser(response)
      },
      error : err => {
        console.log(err)
      }
    });
  }

}
