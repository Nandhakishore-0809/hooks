import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showLifeCycle: boolean = false;
  value: string = 'nandha';

  constructor() {}
  onShowOrHide(): void {
    this.showLifeCycle = !this.showLifeCycle;
  }
}
