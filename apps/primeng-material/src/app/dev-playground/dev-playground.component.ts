import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import uuid from 'uuid';


@Component({
  selector: 'app-dev-playground',
  templateUrl: './dev-playground.component.html',
  styleUrls: ['./dev-playground.component.scss']
})
export class DevPlaygroundComponent implements OnInit {
  userToken: string;

  constructor(private cookieService: CookieService) {
  }

  ngOnInit() {
    this.userToken = this.cookieService.get('userToken');
    if (!this.userToken) {
      this.userToken = uuid();
      const date = new Date();
      date.setTime(date.getTime() + (5000 * 24 * 60 * 60 * 1000));
      this.cookieService.set('userToken', this.userToken, date);
    }
  }
}
