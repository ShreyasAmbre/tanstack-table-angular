import { Component, computed, signal } from '@angular/core';
import { dummyData, Person } from '../models/persons.model';
import {
  createAngularTable,
  getCoreRowModel,
  FlexRender,
  RowSelectionState
} from '@tanstack/angular-table';
import { rowSelectionColumns } from '../configs/row-selection-columns';

@Component({
  selector: 'app-row-selection-listing',
  imports: [FlexRender],
  templateUrl: './row-selection-listing.html',
  styleUrl: './row-selection-listing.scss',
})
export class RowSelectionListing {

  dataList = signal<Person[]>(dummyData);
  selectedPersons = signal<Person[]>([]);

  rowSelection = signal<RowSelectionState>({});
  rowSelectionTable = createAngularTable(() => ({
    data: this.dataList(),
    columns: rowSelectionColumns,

    state: {
      rowSelection: this.rowSelection(),
    },
    enableRowSelection: true,
    onRowSelectionChange: (updater) => {
      this.rowSelection.update(old =>
        typeof updater === 'function' ? updater(old) : updater
      );

      // 🔥 Auto-sync selected rows
      const selected = this.rowSelectionTable
        .getSelectedRowModel()
        .rows.map(r => r.original);

      this.selectedPersons.set(selected);
    },


    getCoreRowModel: getCoreRowModel(),

  }))

  readonly stringifiedRowSelection = computed(() =>
    JSON.stringify(this.rowSelection(), null, 2),
  )

  readonly rowSelectionLength = computed(
    () => Object.keys(this.rowSelection()).length,
  )

  logSelectedFlatRows(): void {
    console.info(
      'table.getSelectedRowModel().flatRows',
      this.rowSelectionTable.getSelectedRowModel().flatRows,
    )
  }

}

