import { Component, Input } from '@angular/core';
import { Article } from '../../models/article';
import { NgClass, SlicePipe } from '@angular/common';


@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [SlicePipe,
            NgClass
  ],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
 @Input() layout :'vertical' | 'horizontal' = 'vertical';

  @Input() article!: Article;
  constructor() { }

  ngOnInit() {
  }
}
