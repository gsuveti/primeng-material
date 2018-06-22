import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeTabViewComponent } from './source-code-tab-view.component';

describe('SourceCodeTabViewComponent', () => {
  let component: SourceCodeTabViewComponent;
  let fixture: ComponentFixture<SourceCodeTabViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceCodeTabViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceCodeTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
