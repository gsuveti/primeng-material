import { async, TestBed } from '@angular/core/testing';
import { SourceCodeTabViewModule } from './source-code-tab-view.module';

describe('SourceCodeTabViewModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SourceCodeTabViewModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(SourceCodeTabViewModule).toBeDefined();
  });
});
