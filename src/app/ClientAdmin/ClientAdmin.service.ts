import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root' 
})
export class ClientAdminService {

  readonly rootUrl=' http://localhost:63744/';
  constructor(private http :HttpClient) { }


  GetDropDowns()
  {
    return this.http.get(this.rootUrl+'api/GetDropDowns')
                    .pipe(catchError((error)=>{return Observable.throw(error);}))as any;
     
  
  }

}
