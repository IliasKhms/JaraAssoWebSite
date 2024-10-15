import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { PresentationCardComponent } from "../presentation-card/presentation-card.component";
import { HeadlineCardComponent } from '../headline-card/headline-card.component';
import { EventForComingCardComponent } from "../event-for-coming-card/event-for-coming-card.component";
import { FooterComponent } from "../footer/footer.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    PresentationCardComponent,
    HeadlineCardComponent,
    EventForComingCardComponent,
    FooterComponent, 
    ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jara-app';
}
