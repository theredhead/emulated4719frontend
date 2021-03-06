import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-view',
  templateUrl: './output-view.component.html',
  styleUrls: ['./output-view.component.scss'],
})
export class OutputViewComponent implements OnInit {
  @Input() bytes: number[] = [];

  receive(byte: number): void {
    this.bytes.push(byte);
  }
  constructor() {}

  ngOnInit(): void {}
}
