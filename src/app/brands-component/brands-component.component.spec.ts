import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsComponentComponent } from './brands-component.component';

describe('BrandsComponentComponent', () => {
  let component: BrandsComponentComponent;
  let fixture: ComponentFixture<BrandsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
