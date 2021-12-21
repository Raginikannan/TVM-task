import { Component,OnInit } from '@angular/core';
import { TaskService } from './service/task.service';
import {FormGroup,FormControl,Validators,FormArray, FormBuilder} from '@angular/forms';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  Day = new Date();
  Number = 123456789;
  Per = 3;
  Cur = 1000;
  obj = {name: 'rakey' , age:26};
  arr = [1,2,3,4];
  
  title = 'angular project';
  submit= true;
  text=true;
  users= [{name: "xxx", Gen: "f"}, {name: "yyy", Gen: "m"}]
  
  constructor(public taskService: TaskService){
  }
  ngOninit()
  {
  
  }
  increaseCount()
  {
  this.taskService.count++;
  }

  

  


  }
