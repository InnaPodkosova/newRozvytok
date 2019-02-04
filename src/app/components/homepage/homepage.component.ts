import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  currentImages = [
    '/assets/images/home_page/rozvytok_1.jpg',
    '/assets/images/home_page/rozvytok_2.jpg',
    '/assets/images/home_page/rozvytok_3.jpg',
    '/assets/images/home_page/rozvytok_4.jpg',
    '/assets/images/home_page/rozvytok_5.jpg',
    '/assets/images/home_page/rozvytok_6.jpg',
    '/assets/images/home_page/rozvytok_7.jpg',
    '/assets/images/home_page/rozvytok_8.jpg',
    '/assets/images/home_page/rozvytok_9.jpg',
  ];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute);
  }

}


