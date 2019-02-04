import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalDsmaxComponent } from './digital-dsmax.component';

describe('DigitalDsmaxComponent', () => {
  let component: DigitalDsmaxComponent;
  let fixture: ComponentFixture<DigitalDsmaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalDsmaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalDsmaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
