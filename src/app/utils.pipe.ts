import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utils'
})
export class UtilsPipe implements PipeTransform {

  transform(data: any[], searching : string): any {
   
    if(!searching) return data;
    return data.filter( x => (x.name.toLowerCase().includes(searching)) || (x.email.toLowerCase().includes(searching)));
    
  }
}
