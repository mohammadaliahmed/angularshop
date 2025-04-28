import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductListComponentComponent } from './admin-product-list-component.component';

describe('AdminProductListComponentComponent', () => {
  let component: AdminProductListComponentComponent;
  let fixture: ComponentFixture<AdminProductListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProductListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
