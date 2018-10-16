import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  songLimit = 5;

  onLimitChange(newLimit) {
    this.songLimit = newLimit;
  }
}
