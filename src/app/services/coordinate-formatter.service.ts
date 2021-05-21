import { Injectable } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {core} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class CoordinateFormatterService {

  constructor(private decimalPipe: DecimalPipe) { }
  numberCoordinates(
    coordinates: number[],
    fractionDigits: number = 0,
    template?: string,
  ){
    template = template || '{x} {y}';
    const x = coordinates[0];
    const y = coordinates[1];
    const digitInfo = `1.${fractionDigits}-${fractionDigits}`;
    const sX = this.decimalPipe.transform(x, digitInfo);
    const sY = this.decimalPipe.transform(y, digitInfo);
    return template.replace('{x}', sX).replace('{y}', sY);
  }
}
