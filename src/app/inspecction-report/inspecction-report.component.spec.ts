import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspecctionReportComponent } from './inspecction-report.component';

describe('InspecctionReportComponent', () => {
  let component: InspecctionReportComponent;
  let fixture: ComponentFixture<InspecctionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspecctionReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspecctionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
