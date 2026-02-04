import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { AbstractControl, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-select-input',
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './select-input.html',
  styleUrl: './select-input.scss',
})
export class SelectInput {
  optionList = input.required<any[]>();
  inputControl = input.required<AbstractControl>();

  emitOptionSelected = output<any>();


  // get control(): FormControl {
  //   return this.inputControl() as FormControl;
  // }
  get control(): FormControl<any> {
    return this.inputControl() as FormControl<any>;
  }

  onChange(employee: any) {
    this.emitOptionSelected.emit(employee);
  }

}
