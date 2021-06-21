import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDetails } from '../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class TweetServiceService {

  currentUser: BehaviorSubject<UserDetails>;

  constructor() { }

}
