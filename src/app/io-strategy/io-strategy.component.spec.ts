import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoStrategyComponent } from './io-strategy.component';

describe('IoStrategyComponent', () => {
  let component: IoStrategyComponent;
  let fixture: ComponentFixture<IoStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
