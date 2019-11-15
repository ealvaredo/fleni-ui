import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(name: string): string {
    if (null != name) {
    return name.replace(new RegExp("_", 'g'), " ");
  } else {
    return "";
  }
  }

}
