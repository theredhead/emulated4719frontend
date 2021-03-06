import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { EmulatorSnapshot } from '@theredhead/emulated4719';
import { MemoryViewComponent } from '../memory-view/memory-view.component';
import { RegistersViewComponent } from '../registers-view/registers-view.component';

@Component({
  selector: 'app-snapshot-view',
  templateUrl: './snapshot-view.component.html',
  styleUrls: ['./snapshot-view.component.scss'],
})
export class SnapshotViewComponent implements AfterViewInit {
  @ViewChild(RegistersViewComponent) registersView: RegistersViewComponent;
  @ViewChild(MemoryViewComponent) memoryView: MemoryViewComponent;
  @Input() snapshot: EmulatorSnapshot;
  @Input() highlight: number | null;

  constructor() {}

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.registersView.highlightedAddress$.subscribe((address) => {
        this.highlight = address;
      });
    });
  }
}
