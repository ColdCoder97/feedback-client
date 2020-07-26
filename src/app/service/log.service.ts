import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../model/user';
import { Feedback } from '../model/feedback';


@Injectable({
  providedIn: 'root'
})
export class LogService {
 feeds: User[];

 private logSource = new BehaviorSubject<User>({employeeId: null, name : null, password: null,confirmPassword: null,createdAt:null });
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() { 
    this.feeds = [];
  }

  getLogs():void {
    if(localStorage.getItem('logs') === null) {
      this.feeds = [];
    } else {
      this.feeds = JSON.parse(localStorage.getItem('feeds'));
    }
  }

  deleteLog(user: User) {
    this.feeds.forEach((cur, index) => {
      if(user.employeeId === cur.employeeId) {
        this.feeds.splice(index, 1);
      }
    });

    localStorage.setItem('feeds',JSON.stringify(this.feeds));
  }

  clearState() {
    this.stateSource.next(true);
  }

}
