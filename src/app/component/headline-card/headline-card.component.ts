import { Component } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headline-card',
  standalone: true,
  imports: [ArticleCardComponent,
            RouterLink
  ],
  templateUrl: './headline-card.component.html',
  styleUrl: './headline-card.component.scss'
})
export class HeadlineCardComponent {

}
