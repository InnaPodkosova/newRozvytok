import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterContentInit {
  @Input('images') images: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    setTimeout(() => {
      $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoHeight : false,
        autoHeightClass: 'owl-height',
        autoPlay : false,
        slideSpeed : 200,

        loop: true,
        margin: 10,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          500: {
            items: 1,
            nav: false
          },
          600: {
            items: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: false,
            loop: false,
          }
        },
        smartSpeed: 450,
        dots: true,

      });
    }, 0);

  }
}
