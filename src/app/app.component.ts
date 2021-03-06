import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  compile,
  decompile,
  EmulatorSnapshot,
  Processor,
  ProcessorState,
  Registers,
  tokenize,
} from '@theredhead/emulated4719';
import { AboutBoxDialog } from './components/about-box/about-box.dialog';
import { OutputViewComponent } from './components/output-view/output-view.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(OutputViewComponent) outputView: OutputViewComponent;
  title = 'app';
  showCheatSheet = false;
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

  get speedTooltipText(): string {
    return `Adjust the number of milliseconds between each tick. Currently: ${this.processor.delayBetweenInstructions}`;
  }

  readonly processor = new Processor();
  readonly stateOptions = ProcessorState;

  go(source): void {
    const compiled = compile(source);
    this.processor.reset();
    this.processor.load(compiled);
    this.processor.run();
  }
  downloadMemoryToEditor(): void {
    const bytes = this.processor.memory.toByteArray();
    this.source = decompile(bytes);
  }
  uploadEditorToMemory(): void {
    const bytes = compile(this.source);
    this.processor.load(bytes);
  }

  showAboutDialog() {
    const ref = this.dialog.open(AboutBoxDialog, {
      height: '400px',
      width: '600px',
    });
  }
  loadExample(name: string) {
    const example = examples[name] ?? null;
    if (example) {
      this.source = example;
    } else {
      alert(`Oops, could not find example ${name}`);
    }
  }

  loadMemory(source: number[]) {
    this.processor.load(source);
  }
  loadRegisters(registers: Registers) {
    this.processor.registers = registers;
  }

  restoreFrame(frame: EmulatorSnapshot) {
    this.processor.load(frame.memory);
    this.processor.registers = frame.registers;
  }

  constructor(private dialog: MatDialog) {
    this.source = `# say hello
bell
prn 4 # H
prn 3 # E
prn 7 # L
prn 7 # L
prn 0 # O
bell
halt
`;

    this.processor.printHandler = (v) => {
      this.outputView.receive(v);
    };
  }
}

const examples = {
  ['hello-world']: `# say hello
bell
prn 4 # H
prn 3 # E
prn 7 # L
prn 7 # L
prn 0 # O
bell
halt
`,
  ['lecture-3']: `# this is the program created in lecture 3.
9  13 10 14
7  11 15 7
11 11 8  13
0  3  10 0
`,
};
