import { Component } from '@angular/core';
import { Localization } from 'src/localization';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  localization = Localization;

}
