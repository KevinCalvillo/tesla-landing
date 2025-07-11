import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelX } from './model-x';

describe('ModelX', () => {
  let component: ModelX;
  let fixture: ComponentFixture<ModelX>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelX]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelX);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
