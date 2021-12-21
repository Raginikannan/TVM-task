import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskService } from './service/task.service';
import { OneComponent } from './one/one.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { PipeconceptPipe } from './pipeconcept.pipe';
import { AppendPipe} from './custom.pipe';
import { HostDirective } from './host.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    Comp1Component,
    Comp2Component,
    PipeconceptPipe,
    AppendPipe,
    HomeComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,FormsModule
     ],
  providers: [TaskService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
