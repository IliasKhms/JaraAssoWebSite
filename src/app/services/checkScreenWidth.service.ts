import {Injectable, OnInit} from '@angular/core';
import {ViewportRuler} from '@angular/cdk/scrolling'; //permet de deyecter la taille de l'ecran

@Injectable({
  providedIn: 'root'
})

export class CheckScreenWidthService implements OnInit {
  constructor(private viewportRuler: ViewportRuler) {
  }

  ngOnInit() {
    this.chekScreenWidth();

  }

  chekScreenWidth() : boolean {
    if (this.viewportRuler.getViewportSize().width < 900) {
      return true;
    } else {
      return false;
    }
  }



}