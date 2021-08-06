import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  user: any = FormGroup;

  submitted = false;
 
  mydata: any;

  jobs: any;
  status: any;
  jobId:any
 
  

  constructor(private dataService:DataService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router : Router,
    //  private route: Router,
     private route: ActivatedRoute,
     ) { }

  ngOnInit(): void {
    this.getJobData();
    this.delete(id);
    this.user = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.minLength(11)]],
      contactNumber: ['', [Validators.required, Validators.minLength(11)]],
      education: ['', [Validators.required, Validators.minLength(5)]],
      previousJob: ['', [Validators.required, Validators.minLength(5)]],
      company: ['', [Validators.required, Validators.minLength(5)]],
      skills: ['', [Validators.required, Validators.minLength(5)]],
      reference: ['', [Validators.required, Validators.minLength(2)]],
      
    }, 
    );
  }

  currentUser = window.localStorage.getItem("user-id");
 
 
  onSubmit() {
    console.log(this.user.value);
    this.submitted = true;
   
    this.http.post(`http://127.0.0.1:8000/api/resume/create/${this.currentUser}/${this.jobId}`, this.user.value).subscribe((data: any)=> {
    console.log(data);
   
    
    this.mydata = this.user;
    
    Swal.fire({
      text: 'Submitted Successfully!',
      icon: 'success'
    });
    },
    errors=>{
      console.log(errors);
      Swal.fire('Oops...', 'Something went wrong!', 'error')
    });
  }
  getJobData(){
    console.log(this.route.snapshot.params.id);
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




  onDisplayResume = false;
  applyJob(id:any){
    console.log(id);
    this.jobId = id
    
    this.onDisplayResume = true; 
  }
  }
  
  
  function id(id: any) {
    throw new Error('Function not implemented.');
  }
  
    

  

  
