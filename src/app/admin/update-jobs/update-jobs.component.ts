import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { JobsAdminComponent } from '../jobs-admin/jobs-admin.component';

@Component({
  selector: 'app-update-jobs',
  templateUrl: './update-jobs.component.html',
  styleUrls: ['./update-jobs.component.css']
})
export class UpdateJobsComponent implements OnInit {
jobs:any;
data: any;
id: any;
  constructor(private route:ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.getData();
  }
  getData(){
   
    this.dataService.getJobById(this.route.snapshot.params.id).subscribe(res => {
      // console.log(res);
      this.data = res;
      this.jobs = this.data;
    });
  }
  // update(){
    
  //   this.dataService.updateJob(this.route.snapshot.params.id).subscribe(res => {
  //   console.log(res);
    
  //   })
  // }

}
