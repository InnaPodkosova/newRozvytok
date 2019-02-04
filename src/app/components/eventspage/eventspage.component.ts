import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventspage',
  templateUrl: './eventspage.component.html',
  styleUrls: ['./eventspage.component.scss']
})
export class EventspageComponent implements OnInit {
  currentImages = [
    '/assets/images/page_events/events_1.jpg',
    '/assets/images/page_events/events_2.jpg',
    '/assets/images/page_events/events_3.jpg',
    '/assets/images/page_events/events_4.jpg',
    '/assets/images/page_events/events_5.jpg',
    '/assets/images/page_events/events_6.jpg',
    '/assets/images/page_events/events_7.jpg',
    '/assets/images/page_events/events_8.jpg',
    '/assets/images/page_events/events_9.jpg',
  ];

  constructor() { }

  ngOnInit() {
  }

}
