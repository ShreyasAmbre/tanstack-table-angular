import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-action-cell',
  imports: [],
  templateUrl: './action-cell.html',
  styleUrl: './action-cell.scss',
})
export class ActionCell {
  row = input.required<any>();

  isViewVisible = input<boolean>(false);
  isEditVisible = input<boolean>(false);
  isDeleteVisible = input<boolean>(false);

  viewBtnLabel = input<string>('viewBtnLabel');
  editBtnLabel = input<string>('editBtnLabel');
  deleteBtnLabel = input<string>('deleteBtnLabel');

  view = output<any>();
  edit = output<any>();
  delete = output<any>();

  onView() {
    this.view.emit(this.row());
  }

  onEdit() {
    this.edit.emit(this.row());
  }

  onDelete() {
    this.delete.emit(this.row());
  }

}
