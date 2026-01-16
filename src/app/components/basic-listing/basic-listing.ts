import { Component, signal } from '@angular/core';
import {
  createAngularTable,
  getCoreRowModel,
  FlexRender,
  getSortedRowModel,
  SortingState
} from '@tanstack/angular-table';
import { dummyData, Person } from '../models/persons.model';
import { defaultColumns } from '../configs/table-columns';

@Component({
  selector: 'app-basic-listing',
  imports: [FlexRender],
  templateUrl: './basic-listing.html',
  styleUrl: './basic-listing.scss',
})
export class BasicListing {
  data = signal<Person[]>(dummyData)

  sorting = signal<SortingState>([]);
  table = createAngularTable(() => ({
    data: this.data(),
    columns: defaultColumns,
    state: {
      sorting: this.sorting(),   // <-- connect sorting state
    },
    onSortingChange: updater => {
      this.sorting.update(old =>
        typeof updater === 'function'
          ? updater(old)
          : updater // <-- update sorting state
      );
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true, // Need to check usage
  }))
}
