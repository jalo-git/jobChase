import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {

  applicants: any;

  constructor(private dataService:DataService,
              private http : HttpClient) { }

  ngOnInit(): void {
    this.getApplicantsData();
    }
  getApplicantsData(){
    this.dataService.getApplicantData().subscribe ( res =>{
      this.applicants = res;
      console.log(this.applicants);
    });
   
        
  }
  delete(id:any){
   this.http.delete(`http://127.0.0.1:8000/api/resume/delete/${id}`).subscribe(response=>{
     console.log(response);
   });

   //window.location.reload();
   
}
}


function id(id: any) {
  throw new Error('Function not implemented.');
}

