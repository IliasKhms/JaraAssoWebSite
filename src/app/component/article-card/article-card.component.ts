import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  headLineArticle: Article = new Article(
    1, 
    "Un titre un peu long pour voir comment ça s'affiche", 
    "JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...",
    "https://media.gettyimages.com/id/995097896/fr/photo/femme-donner-de-largent-%C3%A0-beggar-homme.jpg?s=2048x2048&w=gi&k=20&c=5urwX9JU0XB8cD3_-bXLI_F_PpHYvgUkXVauL3WjsfM=",  
    new Date()
  );
}
