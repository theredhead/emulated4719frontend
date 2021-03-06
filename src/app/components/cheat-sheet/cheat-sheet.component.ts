import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cheat-sheet',
  templateUrl: './cheat-sheet.component.html',
  styleUrls: ['./cheat-sheet.component.scss'],
})
export class CheatSheetComponent {
  @Output() readonly loadExample = new EventEmitter<string>();
}
