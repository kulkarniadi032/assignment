import { Component } from '@angular/core';
import { Localization } from 'src/localization';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  localization = Localization;
  isSubmitForApproval: boolean = true;
  ispendingForApproval: boolean = false;
  isApproved: boolean = false;
  isrejected: boolean = false;

}
