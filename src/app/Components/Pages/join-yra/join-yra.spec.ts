import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinYra } from './join-yra';

describe('JoinYra', () => {
  let component: JoinYra;
  let fixture: ComponentFixture<JoinYra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinYra],
    }).compileComponents();

    fixture = TestBed.createComponent(JoinYra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
