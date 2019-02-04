import {Component, OnInit, ɵEMPTY_ARRAY} from '@angular/core';
import {timer} from 'rxjs';


@Component({
  selector: 'app-photoshop',
  templateUrl: './photoshop.component.html',
  styleUrls: ['./photoshop.component.scss']
})

export class PhotoshopComponent implements OnInit {
  finishDay = `30/12/2018`;
  startTimer;
  endTimer;
  differenceDate;
  newTimer;

  ngOnInit() {
    let t = this;
    t.endTimer = t.conversion(t.finishDay);

    let timerId = setInterval(function () {
      t.differenceDate = t.initTime();
      t.newTimer = t.leftTime();
        if (t.differenceDate > 0){
          clearInterval(timerId);
          console.log(`Timer stop`);
          return;
        }
      console.log(`${t.newTimer}`);
      }, 1000);
  }
  conversion(date): number {
    let arrString = date.split('/');
    return (new Date(`${arrString[1]} ${arrString[0]} ${arrString[2]}`).getTime());
  }
  initTime(): number {
    this.startTimer = new Date().getTime();
    return this.endTimer - this.startTimer;
  }
 leftTime(): string {
    let seconds = Math.floor((this.differenceDate / 1000) % 60);
    let minutes = Math.floor((this.differenceDate / 1000 / 60) % 60);
    let hours = Math.floor((this.differenceDate / (1000 * 60 * 60)) % 24);
    let days = Math.floor(this.differenceDate / (1000 * 60 * 60 * 24));
    return `${days} днів  ${hours} : ${minutes} : ${seconds}`;
  }
}
