import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './about-box.dialog.html',
  styleUrls: ['./about-box.dialog.scss'],
})
export class AboutBoxDialog implements OnInit {
  constructor(public dialogRef: MatDialogRef<AboutBoxDialog>) {}

  openLink(ev: MouseEvent) {
    const link = ev.target as HTMLElement;
    const href = link.getAttribute('data-href');
    window.open(href, '_blank');
  }
  ngOnInit(): void {}
}
