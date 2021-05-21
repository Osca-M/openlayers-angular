import {Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ElementRef, Input} from '@angular/core';
import Map from "ol/Map";

@Component({
  selector: 'app-map-layers',
  template: `
    <p>
      map-layers works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapLayersComponent implements AfterViewInit {
  @Input() map!: Map;
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.map.setTarget(this.elementRef.nativeElement);
  }

}
