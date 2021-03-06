import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  compile,
  decompile,
  Processor,
  ProcessorState,
  Registers,
  tokenize,
} from '@theredhead/emulated4719';
import { AboutBoxDialog } from './components/about-box/about-box.dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  source: string = '';

  get compiled(): number[] {
    return compile(this.source);
  }
  get tokenized(): string[] {
    return tokenize(this.source);
  }

  get decompiled(): string {
    const bytes = this.processor.memory.toByteArray();
    return decompile(bytes);
  }

  readonly processor = new Processor();
  readonly stateOptions = ProcessorState;

  showAboutDialog() {
    const ref = this.dialog.open(AboutBoxDialog, {
      height: '400px',
      width: '600px',
    });
  }

  loadMemory(source: number[]) {
    this.processor.load(source);
  }
  loadRegisters(registers: Registers) {
    this.processor.registers = registers;
  }

  constructor(private dialog: MatDialog) {
    const lecture_3_program_hex = [
      ...[0x09, 0x0d, 0x0a, 0x0b],
      ...[0x07, 0x0b, 0x0f, 0x07],
      ...[0x0b, 0x0b, 0x08, 0x0d],
      ...[0, 3, 10, 0],
    ];
    this.loadMemory(lecture_3_program_hex);
  }
}
