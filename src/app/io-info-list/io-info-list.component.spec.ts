import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoInfoListComponent } from './io-info-list.component';

describe('IoInfoListComponent', () => {
  let component: IoInfoListComponent;
  let fixture: ComponentFixture<IoInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
