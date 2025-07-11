import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelY } from './model-y';

describe('ModelY', () => {
  let component: ModelY;
  let fixture: ComponentFixture<ModelY>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelY]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelY);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
