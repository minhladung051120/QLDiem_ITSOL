import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaotaothemsvComponent } from './daotaothemsv.component';

describe('DaotaothemsvComponent', () => {
  let component: DaotaothemsvComponent;
  let fixture: ComponentFixture<DaotaothemsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaotaothemsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaotaothemsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
