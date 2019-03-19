import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUpdatePageComponent } from './account-update-page.component';

describe('AccountUpdatePageComponent', () => {
  let component: AccountUpdatePageComponent;
  let fixture: ComponentFixture<AccountUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
