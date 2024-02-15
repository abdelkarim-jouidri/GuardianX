import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{

  constructor(private adminService : AdminService){

  }

  ngOnInit(): void {
      this.adminService.fetchAdminMessage().subscribe(
        data=>console.log(data),
        error=>console.log(error)
      )
  }

}
