import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ArticleCardComponent } from "../article-card/article-card.component";
import { ModalJoinUsComponent } from "../modal-join-us/modal-join-us.component";
import { ModalWindowService } from '../../services/modal-window.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    ArticleCardComponent,
    ModalJoinUsComponent,
   
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public modalWindowService: ModalWindowService) { }
  
  title = 'jara-app';
}
