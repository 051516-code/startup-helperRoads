import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyEntryPage } from './company-entry.page';

describe('CompanyEntryPage', () => {
  let component: CompanyEntryPage;
  let fixture: ComponentFixture<CompanyEntryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
