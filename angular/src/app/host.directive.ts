import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {
  @HostBinding('style.backgroundColor') bgColorKey = 'olive';

  constructor() { }
  ngOnInit()
  {
    this.bgColorKey= "red";
  }

}
