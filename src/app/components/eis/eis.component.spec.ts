import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EisComponent } from './eis.component';

describe('EisComponent', () => {
  let component: EisComponent;
  let fixture: ComponentFixture<EisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
