import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminSrviceService } from "../services/admin-srvice.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public adminPhone:string='';
  public adminPassword:string='';

  constructor(public adminServ :AdminSrviceService) { }
  onAdminLogin(form:NgForm){
    if (form.invalid) {
      return;
    }
    console.log(this.adminPhone)
    this.adminServ.login(this.adminPhone, this.adminPassword);
  
  }
  ngOnInit() {
  }

}
