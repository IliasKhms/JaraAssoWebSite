import { Component } from '@angular/core';
import { ModalWindowService } from '../../services/modal-window.service';



@Component({
  selector: 'app-modal-join-us',
  standalone: true,
  imports: [
  ],
  templateUrl: './modal-join-us.component.html',
  styleUrl: './modal-join-us.component.scss'
})
export class ModalJoinUsComponent {
  constructor(public modalWindowService: ModalWindowService) { }

}
