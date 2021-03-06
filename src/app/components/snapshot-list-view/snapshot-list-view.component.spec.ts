import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotListViewComponent } from './snapshot-list-view.component';

describe('SnapshotListViewComponent', () => {
  let component: SnapshotListViewComponent;
  let fixture: ComponentFixture<SnapshotListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapshotListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
