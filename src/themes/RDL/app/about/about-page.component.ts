import { Component } from '@angular/core';
import { HomePageComponent as BaseComponent } from '../../../../app/home-page/home-page.component';

/**
 * Represents the header with the logo and simple navigation
 */
@Component({
  selector: 'ds-about',
  styleUrls: ['about-page.component.scss'],
  templateUrl: 'about-page.component.html',
})
export class AboutPageComponent extends BaseComponent {
}
