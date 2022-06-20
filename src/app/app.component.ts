import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'git-search';

  ngOnInit() {
    if(!isDevMode())
      console.log = () => {};
  }
}
