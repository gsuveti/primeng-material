import { async, TestBed } from '@angular/core/testing';
import { PrimengComponentsModule } from './primeng-components.module';

describe('PrimengComponentsModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [PrimengComponentsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(PrimengComponentsModule).toBeDefined();
  });
});
