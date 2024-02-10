import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasicComponent } from './clasic.component';

describe('ClasicComponent', () => {
  let component: ClasicComponent;
  let fixture: ComponentFixture<ClasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
