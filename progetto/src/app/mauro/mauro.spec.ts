import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mauro } from './mauro';

describe('Mauro', () => {
  let component: Mauro;
  let fixture: ComponentFixture<Mauro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mauro],
    }).compileComponents();

    fixture = TestBed.createComponent(Mauro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
