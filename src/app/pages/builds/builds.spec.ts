import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Builds } from './builds';

describe('Builds', () => {
  let component: Builds;
  let fixture: ComponentFixture<Builds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Builds],
    }).compileComponents();

    fixture = TestBed.createComponent(Builds);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
