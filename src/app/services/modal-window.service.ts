import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {
  showJoinUS: boolean = false;
  constructor() { }

  openModal(): void {
    this.showJoinUS = true;
  }

  closeModal(): void {
    this.showJoinUS = false;
  }
}
