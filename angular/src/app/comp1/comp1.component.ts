import { Component, OnInit,HostBinding , HostListener} from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-comp1',
  template: `<h1>hi </h1>`,
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {



  constructor(public taskService: TaskService) {
 }
  ngOnInit(): void {

  }



}

  