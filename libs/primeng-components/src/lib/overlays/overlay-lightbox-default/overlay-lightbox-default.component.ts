import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-overlay-lightbox-default',
  templateUrl: './overlay-lightbox-default.component.html',
  styleUrls: ['./overlay-lightbox-default.component.scss']
})
export class OverlayLightboxDefaultComponent implements OnInit {
  images: any[] = [];

  constructor() {}

  ngOnInit() {
    this.images.push(
      {
        source: 'http://fakeimg.pl/560x315/ffd740/fff?text=Lorem',
        thumbnail: 'http://fakeimg.pl/100x100/ffd740/fff?text=Lorem',
        title: 'Lorem'
      },
      {
        source: 'http://fakeimg.pl/560x315/ff9800/fff?text=ipsum',
        thumbnail: 'http://fakeimg.pl/100x100/ff9800/fff?text=ipsum',
        title: 'ipsum'
      },
      {
        source: 'http://fakeimg.pl/560x315/f44336/fff?text=dolor',
        thumbnail: 'http://fakeimg.pl/100x100/f44336/fff?text=dolor',
        title: 'dolor'
      }
    );
  }
}
