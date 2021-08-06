import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  
  user: any = FormGroup;

  submitted = false;
 
  mydata: any;

  

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router : Router
  ) { }

  ngOnInit(): void {
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
    // {
    //   validator: this.MustMatch('password', 'confirmpassword')
    // }
    );
  }
  
  currentUser = window.localStorage.getItem("user-id");

 
  onSubmit() {
    console.log(this.user.value);
    this.submitted = true;
   
    this.http.post(`http://127.0.0.1:8000/api/resume/create/${this.currentUser}/${this}`, this.user.value).subscribe((data: any)=> {
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
}
  


