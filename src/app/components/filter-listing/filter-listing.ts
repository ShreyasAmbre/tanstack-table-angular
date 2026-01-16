import { Component, signal } from '@angular/core';
import { dummyData, Person } from '../models/persons.model';
import { createAngularTable, getCoreRowModel, FlexRender, getFilteredRowModel, ColumnFiltersState } from '@tanstack/angular-table';
import { filterTableColumns } from '../configs/filter-listing-columns';

@Component({
  selector: 'app-filter-listing',
  imports: [FlexRender],
  templateUrl: './filter-listing.html',
  styleUrl: './filter-listing.scss',
})
export class FilterListing {
  dataList = signal<Person[]>(dummyData);


  columnFilters = signal<ColumnFiltersState>([]);
  filterTable = createAngularTable(() => ({
    data: this.dataList(),
    columns: filterTableColumns,
    state: {
      columnFilters: this.columnFilters(),
    },
    onColumnFiltersChange: updater => {
      this.columnFilters.update(old =>
        typeof updater === 'function' ? updater(old) : updater
      );
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  }));

  // 👉 Helper method to set firstName filter
  setFirstNameFilter(value: string) {
    this.columnFilters.set(
      value
        ? [{ id: 'firstName', value }]
        : []
    );
  }
}
