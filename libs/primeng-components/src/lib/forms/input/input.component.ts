import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  name;
  email;
  password;

  constructor() {}

  ngOnInit() {}
}
