import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formRegister! : FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {
      this.formRegister = this.fb.group({
        username : this.fb.control(""),
        password : this.fb.control("")
      })
  }

  handleRegister(){
    console.log(this.formRegister.value.username)
    this.authService.register(this.formRegister.value.username, this.formRegister.value.password).subscribe({
      next : response  => {
          this.authService.loadUser(response)
          this.router.navigateByUrl("/home")
         
      },
      error : err => {
        console.log(err)
      }
    });
  }

}
