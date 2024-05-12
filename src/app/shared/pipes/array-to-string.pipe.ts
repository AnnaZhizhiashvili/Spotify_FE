import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString',
  standalone: true
})
export class ArrayToStringPipe implements PipeTransform {

  transform(value: any[], property: string = 'name'): string {
    const arr = value.map(item => item[property]);
    return arr.join(', ');
  }

}
