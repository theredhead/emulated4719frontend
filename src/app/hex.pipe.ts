import { Pipe, PipeTransform } from '@angular/core';
import { hexFormat } from 'src/utils';

@Pipe({
  name: 'hex',
})
export class HexPipe implements PipeTransform {
  transform(value: number, length: number = 2): string {
    return hexFormat(value, length);
  }
}
