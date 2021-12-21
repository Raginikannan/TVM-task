import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'append',
    pure: false

}
)

export class AppendPipe implements PipeTransform{
  transform(value: any, ...args: any[]) {
      console.log("pipe",value);
    return value + 'program';
  } 
    
}