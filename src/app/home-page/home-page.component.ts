import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  constructor(private authService: AuthService){

  }
  ngOnInit(): void {
      console.log(this.authService.isAuthenticated)
  }
}
