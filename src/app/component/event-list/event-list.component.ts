import { Component } from '@angular/core';
import { Event } from '../../models/event';
import { EventCardComponent } from '../event-card/event-card.component';
import { ModalJoinUsComponent } from '../modal-join-us/modal-join-us.component';
import { EventsService } from '../../services/events.service';
import { NgIf } from '@angular/common';
import { ModalWindowService } from '../../services/modal-window.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    EventCardComponent,
    ModalJoinUsComponent,
    NgIf
  ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent {

  events!: Event[];
  

  constructor(
            private eventsService : EventsService,
            public modalWindowService: ModalWindowService
    
  ) { }

  ngOnInit() {
    this.events = this.eventsService.getEvents();

  }

}
