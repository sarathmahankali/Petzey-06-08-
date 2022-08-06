import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): any {
    const currentyear = new Date().getFullYear();
    const DOBYear = value.getFullYear();
    const age = currentyear - DOBYear;
    return age;
  }

}
