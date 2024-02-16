import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterSwitcherComponent } from './login-register-switcher.component';

describe('LoginRegisterSwitcherComponent', () => {
  let component: LoginRegisterSwitcherComponent;
  let fixture: ComponentFixture<LoginRegisterSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginRegisterSwitcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginRegisterSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
