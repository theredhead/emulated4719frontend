import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-byte-array-view',
  templateUrl: './byte-array-view.component.html',
  styleUrls: ['./byte-array-view.component.scss'],
})
export class ByteArrayViewComponent {
  @Input() bytes: number[] = [];
}
