import { Component, OnInit } from '@angular/core';
import { Localization } from 'src/localization';

@Component({
  selector: 'app-quick-entry',
  templateUrl: './quick-entry.component.html',
  styleUrls: ['./quick-entry.component.css']
})
export class QuickEntryComponent implements OnInit {
  localization = Localization;
  entryTime:string = '9:47 am';

  constructor(){}

  ngOnInit(): void{

  }

  handleSelctedTab(selectedTab: string){
    if (selectedTab === 'quickEntry') {
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
