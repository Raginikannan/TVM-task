import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` 
  <div>
  <h1>Home</h1>
</div>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
