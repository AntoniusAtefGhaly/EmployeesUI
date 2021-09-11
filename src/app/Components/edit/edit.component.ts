import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  name:any;
  email:any;
  mobile:any;
  salary:any;
  id:any;
  employee:any;
  constructor(private myActivated:ActivatedRoute,private empService:EmployeesService) { 
    this.id=myActivated.snapshot.params.id;
    this.empService.getByID(this.id).subscribe(
      (res)=>{this.employee = res.body;},
      (err)=>{console.log(err);}
    );
  
  }

  ngOnInit(): void {
  }
  Save(){
    this.empService.Update(this.id,this.employee);
    location.href="/home"
  }
}






  