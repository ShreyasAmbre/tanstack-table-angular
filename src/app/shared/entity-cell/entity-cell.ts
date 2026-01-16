import { Component, input } from '@angular/core';

@Component({
  selector: 'app-entity-cell',
  imports: [],
  templateUrl: './entity-cell.html',
  styleUrl: './entity-cell.scss',
})
export class EntityCell {
  avatarImgUrl = input<string>();
  cellTitle = input.required<string>();
  cellSubTitle = input<string>();


  get initial(): string {
    return this.cellTitle() ? this.cellTitle().charAt(0).toUpperCase() : '?';
  }

}
