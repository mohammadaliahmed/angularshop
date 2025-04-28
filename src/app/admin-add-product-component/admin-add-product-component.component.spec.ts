import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddProductComponentComponent } from './admin-add-product-component.component';

describe('AdminAddProductComponentComponent', () => {
  let component: AdminAddProductComponentComponent;
  let fixture: ComponentFixture<AdminAddProductComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddProductComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
