import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminSrviceService } from "../services/admin-srvice.service";

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
 public adminPhone:string='';
 public adminPassword:string='';



  constructor(public adminServ :AdminSrviceService) { }

  onAdminSignup(form:NgForm){
    if (form.invalid) {
      return;
    }
    console.log(this.adminPhone) 
    this.adminServ.createAdmin(this.adminPhone, this.adminPassword);
 
  }

  ngOnInit() {
  }

}
