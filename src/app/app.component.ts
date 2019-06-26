import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  transparent = false;
  constructor(
   private activatedRoute: ActivatedRoute,
   private router: Router,
) {}
  ngOnInit() {
    console.log(this.activatedRoute);

    this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        this.transparent = window.location.pathname === '/';
      }
    });
  }

}


