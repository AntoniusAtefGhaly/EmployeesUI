import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';
import { Validators,FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})




export class CreatComponent implements OnInit {


  get primEmail(){
    return this.userEmails.get('primaryEmail')
    }

    get secondEmail(){
    return this.userEmails.get('secondaryEmail')
    }

    userEmails = new FormGroup({
      primaryEmail: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      secondaryEmail: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
      });
  constructor(private empServes:EmployeesService) { }

  ngOnInit(): void {
  }
   

    

  name:any;
  email:any;
  mobile:any;
  salary:any;
  id:any;
  Add(){
    let e={
      id:this.id,
      name:this.name,
      mobile:this.mobile,
      email:this.email,
      salary:this.salary
    };
  console.log(e);
    this.empServes.Add(e).subscribe( );
    location.href="/home"
  }
}

