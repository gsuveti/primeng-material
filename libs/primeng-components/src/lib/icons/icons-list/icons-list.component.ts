import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'primeng-material-icons-list',
  templateUrl: './icons-list.component.html',
  styleUrls: ['./icons-list.component.scss']
})
export class IconsListComponent implements OnInit {
  public icons: string[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get(
        'https://raw.githubusercontent.com/google/material-design-icons/master/iconfont/codepoints',
        {
          responseType: 'text'
        }
      )
      .subscribe(
        data => {
          this.icons = data
            .split('\n')
            .map(icon => {
              const iconLabel = icon.split(' ')[0];
              return iconLabel.replace(new RegExp('_', 'g'), '-');
            })
            .filter(icon => icon);
        },
        error => {
          console.error(error);
        }
      );
  }
}
