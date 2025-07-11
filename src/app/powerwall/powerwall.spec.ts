import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Powerwall } from './powerwall';

describe('Powerwall', () => {
  let component: Powerwall;
  let fixture: ComponentFixture<Powerwall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Powerwall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Powerwall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
