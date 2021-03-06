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

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
];

import { RegistersViewComponent } from './components/registers-view/registers-view.component';
import { MemoryViewComponent } from './components/memory-view/memory-view.component';
import { SnapshotViewComponent } from './components/snapshot-view/snapshot-view.component';
import { SnapshotListViewComponent } from './components/snapshot-list-view/snapshot-list-view.component';
import { HexPipe } from './hex.pipe';
import { AboutBoxDialog } from './components/about-box/about-box.dialog';
@NgModule({
  declarations: [
    AppComponent,
    RegistersViewComponent,
    MemoryViewComponent,
    HexPipe,
    SnapshotViewComponent,
    SnapshotListViewComponent,
    AboutBoxDialog,
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
