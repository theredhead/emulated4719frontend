import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatTooltipModule,
];

import { RegistersViewComponent } from './components/registers-view/registers-view.component';
import { MemoryViewComponent } from './components/memory-view/memory-view.component';
import { SnapshotViewComponent } from './components/snapshot-view/snapshot-view.component';
import { SnapshotListViewComponent } from './components/snapshot-list-view/snapshot-list-view.component';
import { HexPipe } from './hex.pipe';
import { AboutBoxDialog } from './components/about-box/about-box.dialog';
import { OutputViewComponent } from './components/output-view/output-view.component';
import { ByteArrayViewComponent } from './components/byte-array-view/byte-array-view.component';
import { CheatSheetComponent } from './components/cheat-sheet/cheat-sheet.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistersViewComponent,
    MemoryViewComponent,
    HexPipe,
    SnapshotViewComponent,
    SnapshotListViewComponent,
    AboutBoxDialog,
    OutputViewComponent,
    ByteArrayViewComponent,
    CheatSheetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ...materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
