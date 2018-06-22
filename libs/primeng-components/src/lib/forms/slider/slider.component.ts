import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderVal1: number;
  sliderVal2 = 50;
  sliderVal3: number;
  sliderVal4: number;
  sliderVal5: number;
  rangeValues: number[] = [20, 80];

  constructor() {}

  ngOnInit() {}
}
