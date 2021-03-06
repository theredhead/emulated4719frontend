import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByteArrayViewComponent } from './byte-array-view.component';

describe('ByteArrayViewComponent', () => {
  let component: ByteArrayViewComponent;
  let fixture: ComponentFixture<ByteArrayViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByteArrayViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByteArrayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
