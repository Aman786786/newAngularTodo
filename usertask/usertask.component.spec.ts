import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertaskComponent } from './usertask.component';

describe('UsertaskComponent', () => {
  let component: UsertaskComponent;
  let fixture: ComponentFixture<UsertaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsertaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
