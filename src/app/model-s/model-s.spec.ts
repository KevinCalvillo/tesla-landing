import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelS } from './model-s';

describe('ModelS', () => {
  let component: ModelS;
  let fixture: ComponentFixture<ModelS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
