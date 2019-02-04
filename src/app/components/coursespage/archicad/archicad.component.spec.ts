import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchicadComponent } from './archicad.component';

describe('ArchicadComponent', () => {
  let component: ArchicadComponent;
  let fixture: ComponentFixture<ArchicadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchicadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchicadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
