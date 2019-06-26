import { Component, OnInit, Input, } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   @Input('isTransparent') isTransparent: boolean;

  constructor(private _scrollToService: ScrollToService) { }
  public myFooterScroll() {

    const config: ScrollToConfigOptions = {
      target: 'myFooter'
    };

    this._scrollToService.scrollTo(config);
  }

  ngOnInit() {
  }
}



