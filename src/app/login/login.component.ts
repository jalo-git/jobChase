import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = FormGroup;
  submitted = false;
 
  mydata: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.user = this.formBuilder.group({
      // firstname: ['', [Validators.required, Validators.minLength(2)]],
      // lastname: ['', [Validators.required, Validators.minLength(2)]],
      // address: ['', [Validators.required, Validators.minLength(10)]],
      emailAddress: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      // confirmpassword: ['', Validators.required]
    }, 
    // {
    //   validator: this.MustMatch('password', 'confirmpassword')
     //}
     );
  }
  get f() { return this.user.controls; }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        //return if another validator has already found an error on the matchingcontrol

        return;
      }
      //set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }

  }

  url = "http://127.0.0.1:8000/api/login";
  // spinner = true;
  onSubmit() {
    this.submitted = true;
    //stop here if form is invalid

    // this.spinner = false;
    if (this.user.invalid) {
      return;
    }
    console.warn(this.user.value);
    this.http.post(this.url, this.user.value).subscribe((data: any)=> {
    this.mydata = data;

    Swal.fire({
      text: 'You Login Successfully!',
      icon: 'success'
    });

    console.log(data);
    
    this.router.navigate(['/user'])
    }
    , (errors: { error: { errors: any; }; })=>{
      // alert("Username is already existing!");
      Swal.fire('Oops...', 'Something went wrong!', 'error')
      console.log(errors.error.errors);
    });
  }
}
  

