import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeconcept'
})
export class PipeconceptPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
