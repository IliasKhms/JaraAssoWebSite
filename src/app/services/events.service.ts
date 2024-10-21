import {Injectable} from '@angular/core';
import { Event } from '../models/event';



@Injectable({
  providedIn: 'root'
})

export class EventsService {

    private events :  Event [] = [ 
        new Event(
            1,
            "Maraude",
            "143 Rue Saint Martin - 75004 Paris",
            "Distribution de repas chauds et de kits d'hygiène aux sans-abris début 19h00",
            "assets/logo.png",
            new Date()),
        new Event(
            2,
            "Maraude 2",
            "143 Rue Saint Martin - 75004 Paris",
            "Distribution de repas chauds et de kits d'hygiène aux sans-abris début 19h00",
            "assets/logo.png",
            new Date()),
        new Event(
            3,
            "Maraude 3",
            "143 Rue Saint Martin - 75004 Paris",
            "Distribution de repas chauds et de kits d'hygiène aux sans-abris début 19h00",
            "assets/logo.png",
            new Date())
    ];

    getEvents(): Event[]{
        return [...this.events]; 
    }

    eventById(id: number): Event {
        const foundEvent = this.events.find(event => event.id === id);
        if(!foundEvent){
            throw new Error('Event not found');
        }
        return foundEvent;
    }
}