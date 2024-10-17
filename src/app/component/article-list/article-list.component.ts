import { Component } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {

  articles: Article[] = [ new Article(
    1, 
    "Un titre un peu long pour voir comment ça s'affiche", 
    "JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...",
    "https://media.gettyimages.com/id/995097896/fr/photo/femme-donner-de-largent-%C3%A0-beggar-homme.jpg?s=2048x2048&w=gi&k=20&c=5urwX9JU0XB8cD3_-bXLI_F_PpHYvgUkXVauL3WjsfM=",  
    new Date()
  ),
  new Article(
    2, 
    "Un titre un peu long pour voir comment ça s'affiche 2", 
    "JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...",
    "https://media.gettyimages.com/id/995097896/fr/photo/femme-donner-de-largent-%C3%A0-beggar-homme.jpg?s=2048x2048&w=gi&k=20&c=5urwX9JU0XB8cD3_-bXLI_F_PpHYvgUkXVauL3WjsfM=",  
    new Date()
  ),
  new Article(
    3, 
    "Un titre un peu long pour voir comment ça s'affiche 3", 
    "JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...JARA est une association caritative qui lutte contre la précarité et l'isolement à travers plusieurs actions : maraudes, collectes, organisation d'activités pour enfants en situation particulière, préparation de paniers-repas, distribution de produits d'hygiène...",
    "https://media.gettyimages.com/id/995097896/fr/photo/femme-donner-de-largent-%C3%A0-beggar-homme.jpg?s=2048x2048&w=gi&k=20&c=5urwX9JU0XB8cD3_-bXLI_F_PpHYvgUkXVauL3WjsfM=",  
    new Date()
  )];
   

  constructor() { }

  ngOnInit() {
  }

}
