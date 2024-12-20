import { Component, OnInit, HostListener} from '@angular/core';
import { CheckScreenWidthService } from '../../services/checkScreenWidth.service';
import { ModalWindowService } from '../../services/modal-window.service';
import { NgIf,NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ModalJoinUsComponent } from "../modal-join-us/modal-join-us.component";



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    RouterLink,
    ModalJoinUsComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  
  showMenuBurger = false;
  showVerticalMenu = false;

  constructor(
              private checkScreenWidthService: CheckScreenWidthService,
              public modalWindowService: ModalWindowService
  ) {} 
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenWidth(); // Appelle la méthode du service lors du redimensionnement
  }

  ngOnInit(): void {
    this.checkScreenWidth(); // Appelle la méthode dès l'initialisation du composant
  }

  checkScreenWidth(): void {
    this.showMenuBurger = this.checkScreenWidthService.chekScreenWidth(); // Utilise la méthode du service
  }

  showMenu(): void {
    this.showVerticalMenu = !this.showVerticalMenu;//inverse la valeur de showVerticalMenu
    console.log(this.showVerticalMenu);
  }

 

  

}

