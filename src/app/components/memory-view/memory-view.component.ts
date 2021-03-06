import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-view',
  templateUrl: './memory-view.component.html',
  styleUrls: ['./memory-view.component.scss'],
})
export class MemoryViewComponent implements OnInit {
  @Input() memory: number[];
  @Input() highlight: number | null;
  constructor() {}

  ngOnInit(): void {}
}
