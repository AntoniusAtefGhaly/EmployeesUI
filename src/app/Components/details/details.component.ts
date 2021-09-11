import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  employee:any;
  id:any;



  constructor(private myActivated:ActivatedRoute,private empService:EmployeesService) { 
    this.id=myActivated.snapshot.params.id;
  }

  ngOnInit(): void {
    this.empService.getByID(this.id).subscribe(
        (res)=>{this.employee = res.body;},
        (err)=>{console.log(err);}
      );
    }
}