import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoListComponent } from './anno-list.component';

describe('AnnoListComponent', () => {
  let component: AnnoListComponent;
  let fixture: ComponentFixture<AnnoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
