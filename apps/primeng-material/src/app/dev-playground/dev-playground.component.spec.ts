import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevPlaygroundComponent } from './dev-playground.component';

describe('DevPlaygroundComponent', () => {
  let component: DevPlaygroundComponent;
  let fixture: ComponentFixture<DevPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
