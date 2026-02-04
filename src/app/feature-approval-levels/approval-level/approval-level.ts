import { Component, computed, inject, signal } from '@angular/core';
import { ApprovalLevelType, dummyEmployeeData, EmployeeType } from '../data-access/approval-level.model';
import { createApprovalLevelListingColumns } from './approval-level-columns';
import { createAngularTable, FlexRender, getCoreRowModel } from '@tanstack/angular-table';
import { CommonModule } from '@angular/common';
import {
  CdkDrag,
  type CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop'
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

type ApprovalLevelRowForm = FormGroup<{
  name: FormControl<EmployeeType | null>;
  pfNo: FormControl<string>;
}>;


@Component({
  selector: 'app-approval-level',
  imports: [
    CommonModule,
    FlexRender,
    CdkDropList,
    CdkDrag,
    ReactiveFormsModule,
  ],
  templateUrl: './approval-level.html',
  styleUrl: './approval-level.scss',
})
export class ApprovalLevel {
  #fb = inject(FormBuilder);

  // dataList = signal<ApprovalLevelType[]>([
  //   { id: 1, name: "ABC", email: "abc@gmail.com" },
  //   { id: 2, name: "DEF", email: "def@gmail.com" },
  //   { id: 3, name: "GHI", email: "ghi@gmail.com" },
  //   { id: 4, name: "JKL", email: "jkl@gmail.com" },
  // ])
  dataList = signal<ApprovalLevelType[]>([]);

  // formArray = signal<FormArray<FormGroup>>(
  //   this.#fb.array(
  //     this.dataList().map(row =>
  //       this.#fb.group({
  //         name: [row.name ?? ''],
  //         pfNo: [row.pfNo ?? ''],
  //       })
  //     )
  //   )
  // );
  formArray = signal<FormArray<ApprovalLevelRowForm>>(
    this.#fb.array<ApprovalLevelRowForm>([])
  );


  private table = createAngularTable(() => ({
    data: this.dataList(),
    columns: createApprovalLevelListingColumns(this),
    getCoreRowModel: getCoreRowModel(),
    // Note: Must return string to this inbuilt method
    getRowId: (row) => row.id.toString(),
  }));
  approvalLevelTable = computed(() => this.table());

  readonly sortedIds = computed(() => this.dataList().map((data) => data))

  drop(event: CdkDragDrop<ApprovalLevelType[]>) {
    const data = [...this.dataList()];
    moveItemInArray(data, event.previousIndex, event.currentIndex);

    const forms = [...this.formArray().controls];
    moveItemInArray(forms, event.previousIndex, event.currentIndex);

    this.dataList.set(data);
    this.formArray.set(this.#fb.array(forms));
  }

  addRow() {
    this.dataList.update(list => [
      ...list,
      {
        id: Date.now(),
        name: '',
        email: '',
        pfNo: '',
      },
    ]);

    const group: ApprovalLevelRowForm = this.#fb.group({
      name: this.#fb.control<EmployeeType | null>(null),
      pfNo: this.#fb.control('', { nonNullable: true }),
    });

    group.controls.name.valueChanges.subscribe((employee) => {
      if (!employee) {
        group.controls.pfNo.setValue('', { emitEvent: false });
        return;
      }

      group.controls.pfNo.setValue(employee.pfNo, { emitEvent: false });
    });

    this.formArray.update(arr => {
      arr.push(group);
      return arr;
    });
  }

  onDelete(row: ApprovalLevelType) {
    const index = this.dataList().findIndex(r => r.id === row.id);

    if (index === -1) return;

    // Note: Remove from datalist of Tanstack table
    this.dataList.update(list => {
      const copy = [...list];
      copy.splice(index, 1);
      return copy;
    });

    // Note: Remove from reactive form
    this.formArray.update(arr => {
      arr.removeAt(index);
      return arr;
    });
  }



}
