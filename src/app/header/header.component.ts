import { Component } from '@angular/core'; 
import { Localization } from 'src/localization';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  localization = Localization;
}
