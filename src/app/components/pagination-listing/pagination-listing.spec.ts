import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationListing } from './pagination-listing';

describe('PaginationListing', () => {
  let component: PaginationListing;
  let fixture: ComponentFixture<PaginationListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationListing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
