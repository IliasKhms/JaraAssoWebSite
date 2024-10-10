import { Component } from '@angular/core';
import { Event } from '../../models/event';

@Component({
  selector: 'app-event-for-coming-card',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './event-for-coming-card.component.html',
  styleUrl: './event-for-coming-card.component.scss'
})
export class EventForComingCardComponent {

  eventforcoming: Event = new Event(
    1,
    "Maraude",
    "143 Rue Saint Martin - 75004 Paris",
    "Distribution de repas chauds et de kits d'hygiène aux sans-abris début 19h00",
    new Date());


}
