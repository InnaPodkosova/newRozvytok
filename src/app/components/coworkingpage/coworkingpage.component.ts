import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coworkingpage',
  templateUrl: './coworkingpage.component.html',
  styleUrls: ['./coworkingpage.component.scss']
})
export class CoworkingpageComponent implements OnInit {

  currentImages = [
    '/assets/images/page_coworking/coworking_1.jpg',
    '/assets/images/page_coworking/coworking_2.jpg',
    '/assets/images/page_coworking/coworking_3.jpg',
    '/assets/images/page_coworking/coworking_4.jpg',
    '/assets/images/page_coworking/coworking_5.jpg',
    '/assets/images/page_coworking/coworking_6.jpg',
    '/assets/images/page_coworking/coworking_7.jpg',
    '/assets/images/page_coworking/coworking_8.jpg',
    '/assets/images/page_coworking/coworking_9.jpg',
  ];

  constructor() { }

  ngOnInit() {
  }

}
