import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('About us dynamic');
    this.meta.setTag('og:description', 'This is dynamic decription ');
    this.meta.setTag('og:title', 'This is dynamic title with meta og ');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');
  }

  ngOnInit() {
  }

}
