import { Component, signal } from '@angular/core';
import { BasicListing } from './components/basic-listing/basic-listing';
import { FilterListing } from './components/filter-listing/filter-listing';
import { PaginationListing } from './components/pagination-listing/pagination-listing';
import { SubComponentListing } from './components/sub-component-listing/sub-component-listing';
import { ActionBtnListing } from './components/action-btn-listing/action-btn-listing';
import { RowSelectionListing } from './components/row-selection-listing/row-selection-listing';
import { ApprovalLevel } from './feature-approval-levels/approval-level/approval-level';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    // BasicListing,
    // FilterListing,
    // PaginationListing,
    // SubComponentListing,
    // ActionBtnListing,
    // RowSelectionListing,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-tanstack-table');
}
