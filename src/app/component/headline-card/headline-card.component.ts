import { Component } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-headline-card',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './headline-card.component.html',
  styleUrl: './headline-card.component.scss'
})
export class HeadlineCardComponent {

}
