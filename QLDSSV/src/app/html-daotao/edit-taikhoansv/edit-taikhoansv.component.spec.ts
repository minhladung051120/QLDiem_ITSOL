import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaikhoansvComponent } from './edit-taikhoansv.component';

describe('EditTaikhoansvComponent', () => {
  let component: EditTaikhoansvComponent;
  let fixture: ComponentFixture<EditTaikhoansvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTaikhoansvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaikhoansvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
