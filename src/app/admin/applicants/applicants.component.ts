import { Component, OnInit } from '@angular/core';


import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {

  applicants: any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getApplicantsData();
    }
  getApplicantsData(){
    this.dataService.getApplicantData().subscribe ( res =>{
      this.applicants = res;
    });
  
  }
}
