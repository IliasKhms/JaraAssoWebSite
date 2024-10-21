import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { ArticlesService } from '../../services/articles.service';


@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [
    ArticleCardComponent,
  ],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {

  articles!: Article[];
  
   

  constructor(private articleService : ArticlesService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();

  }

}
