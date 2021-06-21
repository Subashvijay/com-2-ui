import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {

  }

  logOut(): void {
    this.auth.logOut();
  }

}
