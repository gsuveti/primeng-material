import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  // rating

  ratingVal1;
  ratingVal2;
  ratingVal3;
  ratingVal4;
  msg: string;

  constructor() {}

  ngOnInit() {}

  handleRate(event) {
    this.msg = 'You have rated ' + event.value;
  }

  handleCancel(event) {
    this.msg = 'Rating Cancelled';
  }
}
