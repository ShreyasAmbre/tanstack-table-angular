import { Component, signal } from '@angular/core';
import { dummyData, Person } from '../models/persons.model';
import { createAngularTable, getCoreRowModel, FlexRender, getPaginationRowModel, PaginationState } from '@tanstack/angular-table';
import { paginationColumns } from '../configs/pagination-listing-columns';

@Component({
  selector: 'app-pagination-listing',
  imports: [FlexRender],
  templateUrl: './pagination-listing.html',
  styleUrl: './pagination-listing.scss',
})
export class PaginationListing {

  dataList = signal<Person[]>(dummyData);

  pagination = signal<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  paginationTable = createAngularTable(() => ({
    data: this.dataList(),
    columns: paginationColumns,
    state: {
      pagination: this.pagination(),   // connection state
    },
    onPaginationChange: updater => {
      this.pagination.update(old =>
        typeof updater === 'function' ? updater(old) : updater
      );
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  }))

}
