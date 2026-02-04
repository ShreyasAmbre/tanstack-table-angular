import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './input-text.html',
  styleUrl: './input-text.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputText {
  inputControl = input.required<AbstractControl>();

  get control(): FormControl {
    return this.inputControl() as FormControl;
  }
}
