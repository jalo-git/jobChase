import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient) { }


  getApplicantData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/resume/user')
  }
  getJobData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/create/jobs')
  }
  delete(id: string){
    return this.httpClient.delete('http://127.0.0.1:8000/api/delete/'+id);
  }
  getJobById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/update/'+id);
  }
  getUpdateJobById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/update/'+id);
  }
  getUpdateJob(id: string,data: string){
    return this.httpClient.put(`http://127.0.0.1:8000/api/updated/${id}}`,data);
  }
}
