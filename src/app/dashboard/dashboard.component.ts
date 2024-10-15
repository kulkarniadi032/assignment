import { Component, OnInit } from '@angular/core';
import { Localization } from 'src/localization';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  localization = Localization;
  entryTime:string = '9:47 am';
  isShowQuickEntry: boolean = true;
  isShowReport: boolean = false;
  isShowActivity: boolean = false;

  constructor(){}

  ngOnInit(): void{

  }

  handleSelctedTab(selectedTab: string){
    if (selectedTab === 'quickEntry') {
      this.isShowActivity = false;
      this.isShowReport = false;
      this.isShowQuickEntry = true;
      document.getElementById(selectedTab)?.classList.add('isActive');
      document.getElementById(selectedTab)?.classList.add('btn-light');
      document.getElementById(selectedTab)?.classList.remove('btn-secondary');
      if (document.getElementById('report')?.classList.contains('btn-light')) {
        document.getElementById('report')?.classList.remove('btn-light');
        document.getElementById('report')?.classList.add('btn-secondary');
      }
      if (document.getElementById('activity')?.classList.contains('btn-light')) {
        document.getElementById('activity')?.classList.remove('btn-light');
        document.getElementById('activity')?.classList.add('btn-secondary');
      }
    }else if(selectedTab === 'report'){
      this.isShowActivity = false;
      this.isShowReport = true;
      this.isShowQuickEntry = false;
      document.getElementById(selectedTab)?.classList.add('isActive');
      document.getElementById(selectedTab)?.classList.add('btn-light');
      document.getElementById(selectedTab)?.classList.remove('btn-secondary');
      if (document.getElementById('quickEntry')?.classList.contains('btn-light')) {
        document.getElementById('quickEntry')?.classList.remove('btn-light');
        document.getElementById('quickEntry')?.classList.add('btn-secondary');
      }
      if (document.getElementById('activity')?.classList.contains('btn-light')) {
        document.getElementById('activity')?.classList.remove('btn-light');
        document.getElementById('activity')?.classList.add('btn-secondary');
      }
    }else{
      this.isShowActivity = true;
      this.isShowReport = false;
      this.isShowQuickEntry = false;
      document.getElementById(selectedTab)?.classList.add('isActive');
      document.getElementById(selectedTab)?.classList.add('btn-light');
      document.getElementById(selectedTab)?.classList.remove('btn-secondary');
      if (document.getElementById('quickEntry')?.classList.contains('btn-light')) {
        document.getElementById('quickEntry')?.classList.remove('btn-light');
        document.getElementById('quickEntry')?.classList.add('btn-secondary');
      }
      if (document.getElementById('report')?.classList.contains('btn-light')) {
        document.getElementById('report')?.classList.remove('btn-light');
        document.getElementById('report')?.classList.add('btn-secondary');
      }
    }
  } 
}
