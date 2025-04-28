import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersComponentComponent } from './my-orders-component.component';

describe('MyOrdersComponentComponent', () => {
  let component: MyOrdersComponentComponent;
  let fixture: ComponentFixture<MyOrdersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOrdersComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOrdersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
