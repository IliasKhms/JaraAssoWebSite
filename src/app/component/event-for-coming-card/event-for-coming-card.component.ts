import { Component } from '@angular/core';
import { Event } from '../../models/event';
import { EventCardComponent } from "../event-card/event-card.component";
import { RouterLink } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event-for-coming-card',
  standalone: true,
  imports: [
    EventCardComponent,
    RouterLink
],
  templateUrl: './event-for-coming-card.component.html',
  styleUrl: './event-for-coming-card.component.scss'
})
export class EventForComingCardComponent {

  eventforcoming!: Event;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventforcoming = this.eventsService.eventById(1);

  }


}
