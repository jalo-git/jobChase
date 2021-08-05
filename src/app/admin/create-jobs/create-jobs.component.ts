import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-jobs',
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.css']
})
export class CreateJobsComponent implements OnInit {

  jobs: any = FormGroup;

  submitted = false;
 
  jobsData: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  
  ngOnInit(): void {
    this.jobs = this.formBuilder.group({
      jobName: ['', [Validators.required]],
     salary: ['', [Validators.required, Validators.minLength(3)]],
      option: ['', [Validators.required, Validators.minLength(2)]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(11)]],
    },
    );
  }
  url = "http://127.0.0.1:8000/api/create";
 
  onSubmit() {
    console.log(this.jobs.value);
    this.submitted = true;
   
    this.http.post(this.url, this.jobs.value).subscribe((data: any)=> {
    console.log(data);
    this.jobsData = this.jobs
    Swal.fire({
      text: 'Jobs Created Successfully!',
      icon: 'success'
    });
    },
    errors=>{
      console.log(errors);
      Swal.fire('Oops...', 'Something went wrong!', 'error')
    });
  }
}
  


