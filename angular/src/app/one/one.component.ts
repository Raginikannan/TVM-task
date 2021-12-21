import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-one',
  template: `<h1> Using component directive  </h1>`,
  styles: [`h1 { font-size: 18px ; }`]
  
})
export class OneComponent implements OnInit {
  constructor (private taskService: TaskService) { 
   
  }

  ngOnInit(): void {
  }

}

