import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmulatorSnapshot } from '@theredhead/emulated4719';

@Component({
  selector: 'app-snapshot-list-view',
  templateUrl: './snapshot-list-view.component.html',
  styleUrls: ['./snapshot-list-view.component.scss'],
})
export class SnapshotListViewComponent implements OnInit {
  @Input() history: EmulatorSnapshot[];
  @Output() restore = new EventEmitter<EmulatorSnapshot>();

  constructor() {}

  ngOnInit(): void {}
}
