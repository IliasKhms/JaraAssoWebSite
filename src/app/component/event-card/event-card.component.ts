import { Component,Input} from '@angular/core';
import { Event } from '../../models/event';
import { NgClass} from '@angular/common';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  @Input() layout :'vertical' | 'horizontal' = 'horizontal';
  
  @Input() event!: Event;
    constructor() { }
  
    ngOnInit() {
     
    }

}
