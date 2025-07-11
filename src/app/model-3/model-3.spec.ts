import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model3 } from './model-3';

describe('Model3', () => {
  let component: Model3;
  let fixture: ComponentFixture<Model3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
