import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: any;
  status: any;
  

  constructor(private dataService:DataService, private http:HttpClient) { }

  ngOnInit(): void {
    this.getJobData();
    this.delete(id);
  }
getJobData(){
  this.dataService.getJobData().subscribe ( res =>{
    this.jobs = res;
     
  });
 
}
delete(id:any){

this.dataService.delete(id).subscribe(res=>{
  this.getJobData();
});
  
  // this.http.delete('http://127.0.0.1:8000/api/delete/'+id)
  // .subscribe(() => this.status = 'Delete successful');
  // console.log("dfdsf");
}
}


function id(id: any) {
  throw new Error('Function not implemented.');
}


