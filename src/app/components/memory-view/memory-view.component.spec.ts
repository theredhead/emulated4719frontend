import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryViewComponent } from './memory-view.component';

describe('MemoryViewComponent', () => {
  let component: MemoryViewComponent;
  let fixture: ComponentFixture<MemoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
