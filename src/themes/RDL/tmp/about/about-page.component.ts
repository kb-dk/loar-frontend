import { Component } from '@angular/core';
import { HeaderComponent as BaseComponent } from '../../../../app/header/header.component';

/**
 * Represents the header with the logo and simple navigation
 */
@Component({
  selector: 'ds-header',
  styleUrls: ['about-page.component.scss'],
  templateUrl: 'about-page.component.html',
})
export class AboutPageComponent extends BaseComponent {
}
