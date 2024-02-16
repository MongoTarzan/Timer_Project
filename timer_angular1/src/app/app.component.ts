import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  buttonPressed = false;
  seconds = 0;
  @ViewChild("timer") timer: any;

  constructor() {
    setInterval(() => {
      if (this.buttonPressed) {
        this.seconds++;
        this.timer.nativeElement.innerText = this.timeFormat(this.seconds);
      }
    }, 1000)
  }

  timeFormat(sec: number) {
    let min = 0;
    while (sec >= 60) {
      min++;
      sec-=60;
    }
    return `${min}m ${sec}s`
  }

  start() {
    this.buttonPressed = true;
  }

  stop() {
    this.buttonPressed = false;
    this.seconds = 0;
  }
}
