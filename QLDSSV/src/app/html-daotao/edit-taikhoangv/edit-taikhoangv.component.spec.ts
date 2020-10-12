import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaikhoangvComponent } from './edit-taikhoangv.component';

describe('EditTaikhoangvComponent', () => {
  let component: EditTaikhoangvComponent;
  let fixture: ComponentFixture<EditTaikhoangvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTaikhoangvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaikhoangvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
