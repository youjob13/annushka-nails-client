import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceApplicationFormComponent } from './service-application-form.component';

describe('ServiceApplicationFormComponent', () => {
  let component: ServiceApplicationFormComponent;
  let fixture: ComponentFixture<ServiceApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceApplicationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
