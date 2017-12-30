import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '.././user.service';

@Component({
  selector: 'app-validate-user',
  templateUrl: './validate-user.component.html',
  styleUrls: ['./validate-user.component.css']
})
export class ValidateUserComponent implements OnInit {

Phonenumber:string="";
Emailid:string="";
  constructor(private router:Router,private newservice1: UserService) { }

  ngOnInit() {
  }

ValidateUser(e){
  e.preventDefault();
  var Phone=e.target.elements[0].value;
  var Email=e.target.elements[1].value;
  
  // console.log(Phone);

var UserInfo ={

            phonenumber : Phone,
            EmailId : Email          
 };
 
}
}
