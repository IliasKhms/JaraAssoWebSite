import { Component } from '@angular/core';
import { Event } from '../../models/event';
import { EventCardComponent } from '../event-card/event-card.component';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    EventCardComponent
  ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent {

  events!: Event[];
  

  constructor(private eventsService : EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.getEvents();

  }

}
