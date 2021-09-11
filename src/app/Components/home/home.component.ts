import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
employees:any;
  constructor(private empService:EmployeesService) { }

  ngOnInit(): void {
    this.empService.getAll().subscribe(
      res=>{this.employees=res.body},
      err=>{console.log(err)}
    )
  }

  delete(id:string ):void{    
    this.empService.Delete(id).subscribe( );
    location.reload();
}
}