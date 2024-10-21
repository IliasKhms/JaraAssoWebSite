import { Component } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { RouterLink } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-headline-card',
  standalone: true,
  imports: [ArticleCardComponent,
            RouterLink,
            ArticleListComponent,
            
  ],
  templateUrl: './headline-card.component.html',
  styleUrl: './headline-card.component.scss'
})
export class HeadlineCardComponent {

  headline!: Article;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.headline = this.articlesService.articleById(1);

  }


}
