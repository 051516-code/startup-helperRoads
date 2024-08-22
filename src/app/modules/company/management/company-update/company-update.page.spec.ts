import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyUpdatePage } from './company-update.page';

describe('CompanyUpdatePage', () => {
  let component: CompanyUpdatePage;
  let fixture: ComponentFixture<CompanyUpdatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
