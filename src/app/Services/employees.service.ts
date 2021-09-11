import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
 baseurl="https://localhost:44361/api/Employee"
//   baseurl="https://jsonplaceholder.typicode.com/todos"
  
constructor(private myclient:HttpClient) { }
  getAll(){
    return this.myclient.get(this.baseurl,{observe:"response"});
  }
  getByID(id:any){
    return this.myclient.get(this.baseurl+"/"+id,{observe:"response"});
  }
  Add(Employee:any){
    return this.myclient.post(this.baseurl,Employee);
  }
  Delete(id:any){
    return this.myclient.delete(this.baseurl+"/"+id);
  }
  postId:any;
  Update(id:any,Employee:any){
//    return this.myclient.put(this.baseurl+"/"+id,Employee);
this.myclient.put<any>(this.baseurl+"/"+id, Employee)
.subscribe({
    next: data => {
        this.postId = data.id;
    },
    error: error => {
        console.log(error.message);
        console.error('There was an error!', error);
    }
});
    return this.myclient.put<any>(this.baseurl+"/"+id,Employee).
    subscribe(data => this.postId = data.id);

  }
}
