import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingpageComponent } from './coworkingpage.component';

describe('CoworkingpageComponent', () => {
  let component: CoworkingpageComponent;
  let fixture: ComponentFixture<CoworkingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoworkingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
