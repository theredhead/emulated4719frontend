import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotViewComponent } from './snapshot-view.component';

describe('SnapshotViewComponent', () => {
  let component: SnapshotViewComponent;
  let fixture: ComponentFixture<SnapshotViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapshotViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
