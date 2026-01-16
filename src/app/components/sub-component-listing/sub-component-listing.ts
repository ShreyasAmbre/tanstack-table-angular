import { Component, signal } from '@angular/core';
import { dummyData, Person } from '../models/persons.model';
import { createAngularTable, getCoreRowModel, FlexRender, ExpandedState, getExpandedRowModel } from '@tanstack/angular-table';
import { subCompListingColumns } from '../configs/sub-component-listing-columns';

@Component({
  selector: 'app-sub-component-listing',
  imports: [
    FlexRender,
  ],
  templateUrl: './sub-component-listing.html',
  styleUrl: './sub-component-listing.scss',
})
export class SubComponentListing {

  dataList = signal<Person[]>(dummyData);

  expanded = signal<ExpandedState>({})
  subCompTable = createAngularTable(() => ({
    data: this.dataList(),
    columns: subCompListingColumns,

    getCoreRowModel: getCoreRowModel(),
  }))

}
