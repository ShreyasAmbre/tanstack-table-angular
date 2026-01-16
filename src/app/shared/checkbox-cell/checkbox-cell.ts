import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-checkbox-cell',
  imports: [],
  templateUrl: './checkbox-cell.html',
  styleUrl: './checkbox-cell.scss',
})
export class CheckboxCell {
  checked = input<boolean>(false);
  indeterminate = input<boolean>(false);
  toggle = output<boolean>();

}
