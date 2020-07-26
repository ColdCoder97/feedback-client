import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = 'http://localhost:8181/api/v1/login';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  public loginUserFromRemote(user: User):Observable<any>{
    return this.http.post<any>("http://localhost:8181/api/v1/login",user)

  }
  public registerUser(user: User):Observable<any>{
    return this.http.post<any>("http://localhost:8181/api/v1/register",user)

  }

  

}
