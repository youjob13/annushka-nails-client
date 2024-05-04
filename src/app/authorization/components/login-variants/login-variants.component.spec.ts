import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVariantsComponent } from './login-variants.component';

describe('LoginVariantsComponent', () => {
  let component: LoginVariantsComponent;
  let fixture: ComponentFixture<LoginVariantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginVariantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
