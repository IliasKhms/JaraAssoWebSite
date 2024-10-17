import { Component } from '@angular/core';
import { PresentationCardComponent } from '../presentation-card/presentation-card.component';
import { HeadlineCardComponent } from '../headline-card/headline-card.component';
import { EventForComingCardComponent } from '../event-for-coming-card/event-for-coming-card.component';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    PresentationCardComponent,
    HeadlineCardComponent,
    EventForComingCardComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
