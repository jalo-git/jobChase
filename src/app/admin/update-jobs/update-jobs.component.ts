import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { JobsAdminComponent } from '../jobs-admin/jobs-admin.component';
import Swal from 'sweetalert2';
import { empty } from 'rxjs';
@Component({
  selector: 'app-update-jobs',
  templateUrl: './update-jobs.component.html',
  styleUrls: ['./update-jobs.component.css']
})
export class UpdateJobsComponent implements OnInit {
jobs:any;
data: any;
id: any;
  constructor(private route:ActivatedRoute, private dataService: DataService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.getData();
    this.updateJob();
  
  }
  getData(){
   
    this.dataService.getUpdateJobById(this.route.snapshot.params.id).subscribe(res => {
      console.log(res);
      this.data = res;
      this.jobs = this.data;
    });
  }
  updateJob(){
    
    this.dataService.getUpdateJob(this.route.snapshot.params.id, this.jobs).subscribe(res => {
    // console.log(res);
    // if(res != empty){
    //   this.router.navigate(['/jobsAdmin']);
    // }
    
  })


  }
}
