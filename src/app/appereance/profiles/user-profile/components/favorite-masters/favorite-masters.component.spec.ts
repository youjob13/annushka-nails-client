import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMastersComponent } from './favorite-masters.component';

describe('FavoriteMastersComponent', () => {
  let component: FavoriteMastersComponent;
  let fixture: ComponentFixture<FavoriteMastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteMastersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoriteMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
