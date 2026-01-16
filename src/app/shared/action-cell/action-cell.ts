import { Component, input, output } from '@angular/core';
import { Person } from '../../components/models/persons.model';

@Component({
  selector: 'app-action-cell',
  imports: [],
  templateUrl: './action-cell.html',
  styleUrl: './action-cell.scss',
})
export class ActionCell {
  row = input.required<Person>();

  view = output<Person>();
  edit = output<Person>();
  delete = output<Person>();

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
