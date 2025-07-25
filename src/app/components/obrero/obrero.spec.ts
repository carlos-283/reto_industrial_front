import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obrero } from './obrero';

describe('Obrero', () => {
  let component: Obrero;
  let fixture: ComponentFixture<Obrero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obrero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obrero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
