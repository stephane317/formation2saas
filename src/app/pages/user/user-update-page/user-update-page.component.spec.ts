import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdatePageComponent } from './user-update-page.component';

describe('UserUpdatePageComponent', () => {
  let component: UserUpdatePageComponent;
  let fixture: ComponentFixture<UserUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
