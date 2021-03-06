import { Component, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Registers } from '@theredhead/emulated4719';

@Component({
  selector: 'app-registers-view',
  templateUrl: './registers-view.component.html',
  styleUrls: ['./registers-view.component.scss'],
})
export class RegistersViewComponent implements OnInit {
  @Output() highlightedAddress$ = new BehaviorSubject<number | null>(null);
  @Input() registers: Registers;
  registerNames = RegisterName;
  readRegister(register: RegisterName): number {
    switch (register) {
      case RegisterName.IP:
        return this.registers.ip;
      case RegisterName.SS:
        return this.registers.ss;
      case RegisterName.R0:
        return this.registers.r0;
      case RegisterName.R1:
        return this.registers.r1;
      default:
        throw new Error(
          'Unknown register. Did you add a register without telling me?'
        );
    }
  }
  mouseEnter(register: RegisterName) {
    const address = this.readRegister(register);
    this.highlightedAddress$.next(address);
  }
  mouseLeave(register: RegisterName) {
    this.highlightedAddress$.next(null);
  }

  constructor() {}

  ngOnInit(): void {}
}

enum RegisterName {
  IP,
  SS,
  R0,
  R1,
}
