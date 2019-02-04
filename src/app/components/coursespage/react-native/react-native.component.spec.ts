import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactNativeComponent } from './react-native.component';

describe('ReactNativeComponent', () => {
  let component: ReactNativeComponent;
  let fixture: ComponentFixture<ReactNativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactNativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
