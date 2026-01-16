import { Component, signal } from '@angular/core';
import { dummyData, Person } from '../models/persons.model';
import { createAngularTable, getCoreRowModel, FlexRender } from '@tanstack/angular-table';
import { actionBtnsColumns } from '../configs/action-btn-listing-columns';

@Component({
  selector: 'app-action-btn-listing',
  imports: [FlexRender],
  templateUrl: './action-btn-listing.html',
  styleUrl: './action-btn-listing.scss',
})
export class ActionBtnListing {

  dataList = signal<Person[]>(dummyData);


  actionBtnstable = createAngularTable(() => ({
    data: this.dataList(),
    columns: actionBtnsColumns,
    getCoreRowModel: getCoreRowModel()
  }))



  onView(row: Person) {
    console.log('View clicked:', row);
  }

  onEdit(row: Person) {
    console.log('Edit clicked:', row);
  }

  onDelete(row: Person) {
    console.log('Delete clicked:', row);
  }

}
